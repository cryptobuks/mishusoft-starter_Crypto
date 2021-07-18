<?php declare(strict_types=1);


namespace Mishusoft\Framework\Drivers\View;


use InvalidArgumentException;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Logger;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Interfaces\Drivers\MishusoftViewInterface;
use RuntimeException;

class MishusoftView extends FileSystem implements MishusoftViewInterface
{
    // Declare version.
    public const VERSION = '1.0.0';

    public const widgetsFile       = RUNTIME_REGISTRIES_PATH.'widgets.json';
    public const widgetsConfigFile = RUNTIME_REGISTRIES_PATH.'widgets-config.json';

    protected const defaultWidgetConfig = [
        'position' => 'footer',
        'show'     => 'all',
        'hide'     => [],
    ];

    /**
     * @var array|array[]
     */
    private array $installedWidgets = [
        'topQuickBar'      => [
            'class'         => 'topQuickBar',
            'method'        => 'getTopQuickBar',
            'child'         => [],
            'configuration' => ['position' => 'top'],
            'setting'       => ['status' => 'enable'],
        ],
        'universalMenuBar' => [
            'class'         => 'universalMenuBar',
            'method'        => 'getUniversalMenuBar',
            'child'         => [
                'header',
                'left',
                'right',
                'footer',
            ],
            'configuration' => ['position' => 'header'],
            'setting'       => ['status' => 'enable'],
        ],
    ];

    /**
     * @var array
     */
    public array $request;

    /**
     * @var array
     */
    public array $widgetConfig;

    /**
     * @var string
     */
    public string $titleOfCurrentWebPage;

    /**
     * @var string
     */
    public string $urlOfHostedWebsite;

    /**
     * @var object
     */
    public object $documentTitleElement;

    /**
     * @var object
     */
    public object $documentHeadElement;

    /**
     * @var object
     */
    public object $documentBodyElement;

    /**
     * @var object
     */
    public object $documentTemplateElement;

    /**
     * @var object
     */
    public object $documentTemplateBodyElement;

    /**
     * @var object
     */
    public object $documentFooterElement;

    /**
     * @var string
     */
    private string $templateName;

    /**
     * @var string
     */
    private string $templateDirectory;

    /**
     * @var string
     */
    private string $templateRenderDirectory;

    /**
     * @var string
     */
    private string $templateExt;

    /**
     * @var string
     */
    private string $templateLoad;

    /**
     * @var string
     */
    private string $templateUse;

    /**
     * @var array
     */
    private array $variables;

    /**
     * @var array
     */
    private array $widget;


    /**
     * ViewRender constructor.
     *
     * @param string $hostUrl
     * @param string $rootTitle
     * @param array  $widgetConfig
     * @param array  $request
     */
    public function __construct(string $hostUrl, string $rootTitle, array $widgetConfig, array $request)
    {
        // Fetching incoming variables.
        Logger::write('Fetching incomming variables.');

        $this->request               = $request;
        $this->urlOfHostedWebsite    = $hostUrl;
        $this->titleOfCurrentWebPage = $rootTitle;
        $this->widgetConfig          = $widgetConfig;

        // Info of template.
        $this->templateName = strtolower(DEFAULT_APP_NAME);

        // Template preset info.
        $this->templateLoad = 'auto';
        $this->templateUse  = 'yes';

        // Directory allocation.
        $this->templateDirectory       = APPLICATION_THEMES_PATH;
        $this->templateRenderDirectory = APPLICATION_DOCUMENT_ROOT.'Ema'.DIRECTORY_SEPARATOR.'Mishusoft/Main/Views/';

        // File information.
        $this->templateExt = 'php';

        $this->widget    = [];
        $this->variables = [];

    }//end __construct()


    /**
     * @return string
     * @throws JsonException
     */
    private function readWidgetsConfigFile(): string
    {
        /*
         * $widgetsFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets.json";
         * $widgetsConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets-config.json";
         */

        /*
         * check the registries path exists
         * create that path when not exists
         */

        Logger::write('Creating '.RUNTIME_REGISTRIES_PATH.' if not exists in system.');
        self::createDirectory(RUNTIME_REGISTRIES_PATH);

        /*
         * check the installed widgets list file exists
         * create that path when not exists
         */

        Logger::write('Checking '.self::widgetsFile.' is exists or empty in system?');
        if (file_exists(self::widgetsFile) === false || self::read(self::widgetsFile) === '') {
            Logger::write('Creating '.self::widgetsFile.' if not exists or empty in system.');
            $this->installFreshWidgets();
        } else {
            foreach (self::getList(APPLICATION_WIDGETS_PATH, 'file') as $widgetFile) {
                if (self::getFileExt($widgetFile) === 'php') {
                    $filename         = self::getFilename($widgetFile);
                    $widgetConfigFile = APPLICATION_WIDGETS_PATH.$filename.'.json';
                    if (file_exists($widgetConfigFile) === true) {
                        $filenameOriginal = substr($filename, 0, strpos($filename, 'Widget'));
                        $configuration    = _JSON::decodeToArray(self::read($widgetConfigFile));

                        // _Debug::preOutput($filenameOriginal);
                        // _Debug::preOutput($configuration);
                        // _Debug::preOutput(_Array::value($configuration, $filenameOriginal));
                        $lastModification = filemtime($widgetConfigFile);

                        /*
                         * We check current file in old configuration,
                         * if check passed,
                         * then need to check 'last_modification' existent in old configuration,
                         * if we not found then we decide to reset [fresh install] widget config
                         * if we found 'last_modification' attribute,
                         * then we need to storage it a variable and check storage variable is integer,
                         * if check passed, then check the modification time of file,
                         * if modification time is more than old time, then we need to reset widget config
                         * if storage variable is not integer, then we need to reset widget config
                         * if current file not in old configuration, then we need to reset widget config
                         * */

                        if ((array_key_exists($filenameOriginal, $configuration) === true)
                            && array_key_exists('last_modification', $configuration[$filenameOriginal]) === true
                        ) {
                            $oldLastModification = $configuration[$filenameOriginal]['last_modification'];
                            if (is_int($oldLastModification) === true) {
                                if ($lastModification > $oldLastModification) {
                                    // Removing old configuration and install new configuration.
                                    $this->installFreshWidgets();
                                }
                            } else {
                                // Removing old configuration and install new configuration.
                                $this->installFreshWidgets();
                            }
                        } else {
                            // Removing old configuration and install new configuration.
                            $this->installFreshWidgets();
                        }
                    } else {
                        throw new RuntimeException($widgetConfigFile.' not found');
                    }//end if
                }//end if
            }//end foreach
        }//end if

        /*
         * check the installed widgets configuration file exists
         * create that path when not exists
         */

        // $widgetFileArray = json_decode(self::read(self::widgetsFile), true, 512, JSON_THROW_ON_ERROR);
        // $widgetConfigArray = json_decode(self::read(self::widgetsConfigFile), true, 512, JSON_THROW_ON_ERROR);
         // _Debug::preOutput($this->getInstalledWidgets());
        Logger::write('Checking '.self::widgetsConfigFile.' is exists in system?');
        if (file_exists(self::widgetsConfigFile) === false) {
            foreach ($this->getInstalledWidgets() as $widget => $config) {
                if (file_exists(self::widgetsConfigFile) === true && count($this->getInstalledWidgetsConfig()) > 0) {
                    Logger::write('Updating '.self::widgetsConfigFile.' in system.');
                    $this->updateWidgetsConfig($widget, $config);
                } else {
                    Logger::write('Creating '.self::widgetsConfigFile.' reason of not exists in system.');
                    $this->installFreshWidgetsConfig($widget, $config);
                }
            }
        } else if (count($this->getInstalledWidgetsConfig()) === 0) {
            Logger::write('Updating '.self::widgetsConfigFile.' in system.');
            foreach ($this->getInstalledWidgets() as $widget => $config) {
                $this->updateWidgetsConfig($widget, $config);
            }
        } else {
            Logger::write('Updating '.self::widgetsConfigFile.' in system.');
            foreach ($this->getInstalledWidgets() as $widget => $config) {
                if (array_key_exists($widget, $this->getInstalledWidgetsConfig()) === false) {
                    $this->updateWidgetsConfig($widget, $config);
                }
            }
        }//end if

        return self::widgetsConfigFile;

    }//end readWidgetsConfigFile()


    /**
     * @throws JsonException
     */
    private function installFreshWidgets(): void
    {
        Logger::write('Fresh install '.self::widgetsFile.' in system.');
        $newWidget = [];
        if (count(self::getList(APPLICATION_WIDGETS_PATH, 'file')) > 0) {
            foreach (self::getList(APPLICATION_WIDGETS_PATH, 'file') as $widgetFile) {
                if (self::getFileExt($widgetFile) === 'php') {
                    $filename         = self::getFilename($widgetFile);
                    $widgetConfigFile = APPLICATION_WIDGETS_PATH.$filename.'.json';
                    if (file_exists($widgetConfigFile) === true) {
                        $filenameOriginal = substr($filename, 0, strpos($filename, 'Widget'));
                        $lastModification = filemtime($widgetConfigFile);
                        $configuration    = _JSON::decodeToArray(self::read($widgetConfigFile));

                        if ((array_key_exists('setting', $configuration) === true)
                            && array_key_exists('status', $configuration['setting']) === true
                        ) {
                            if ($configuration['setting']['status'] === 'enable') {
                                // Setting new configuration.
                                $newWidget[$filenameOriginal] = $configuration;
                                $newWidget[$filenameOriginal]['last_modification'] = $lastModification;
                            }
                        } else {
                            throw new RuntimeException($widgetConfigFile.' is corrupted');
                        }
                    } else {
                        throw new RuntimeException($widgetConfigFile.' not found');
                    }//end if
                }//end if
            }//end foreach
        }//end if

        Logger::write('Merging new widgets configuration data with install widget data.');
        $this->installedWidgets = array_merge($this->installedWidgets, $newWidget);
        Logger::write('Writing '.self::widgetsFile.' in system.');
        if (file_exists(self::widgetsFile) === true) {
            self::remove(self::widgetsFile);
        }

        self::write(self::widgetsFile, $this->installedWidgets);

    }//end installFreshWidgets()


    /**
     * @throws JsonException
     */
    private function getInstalledWidgets(): array
    {
        Logger::write('Collecting all data from '.self::widgetsFile.' in system.');
        return _JSON::decodeToArray(self::read(self::widgetsFile));

    }//end getInstalledWidgets()


    /**
     * @throws JsonException
     */
    private function getInstalledWidgetsConfig(): array
    {
        Logger::write('Collecting all configuration from '.self::widgetsConfigFile.' in system.');
        return _JSON::decodeToArray(self::read(self::widgetsConfigFile));

    }//end getInstalledWidgetsConfig()


    /**
     * @param  string $widget
     * @param  array  $config
     * @throws JsonException
     */
    private function installFreshWidgetsConfig(string $widget, array $config): void
    {
        // _Debug::preOutput(func_get_args());
        Logger::write('Writing '.self::widgetsConfigFile.' in system.');
        self::write(self::widgetsConfigFile, $this->collectAllData($widget, $config));

    }//end installFreshWidgetsConfig()


    /**
     * @param  string $widget
     * @param  array  $config
     * @return void
     * @throws JsonException
     */
    private function updateWidgetsConfig(string $widget, array $config): void
    {
        // _Debug::preOutput(func_get_args());
        Logger::write('Updating '.self::widgetsConfigFile.' in system.');
        self::write(
            self::widgetsConfigFile,
            array_merge(
                _JSON::decodeToArray(self::read(self::widgetsConfigFile)),
                $this->collectAllData($widget, $config)
            )
        );

    }//end updateWidgetsConfig()


    /**
     * @param  string $widget
     * @param  array  $config
     * @return array
     */
    private function collectAllData(string $widget, array $config): array
    {
        Logger::write('Extract to child wise configuration from '.self::widgetsConfigFile.' in system.');
        $array = [];
        // _Debug::preOutput($widget);
         // _Debug::preOutput($config);
        if (array_key_exists('child', $config) === true) {
            if (count($config['child']) > 0) {
                foreach ($config['child'] as $child) {
                    $array[$widget.'-'.$child] = array_merge(
                        self::defaultWidgetConfig,
                        [
                            'parent'   => $config['class'],
                            'position' => $child,
                        ]
                    );
                    /*
                        $array = array_merge($array,
                        ["$widget-".$child => array_merge(self::defaultWidgetConfig, ['position' => $child])]
                    );*/
                }
            } else {
                $array[$widget] = array_merge(
                    self::defaultWidgetConfig,
                    $config['configuration'],
                    [
                        'parent' => $config['class'],
                    ],
                );
                // $array = array_merge($array, [$widget => array_merge(self::defaultWidgetConfig, $config['configuration'])]);
            }//end if
        } else {
            throw new RuntimeException('Child element not found. Widget configuration corrupted');
        }//end if

        // _Debug::preOutput($array);
        return $array;

    }//end collectAllData()


    /**
     * @return array
     * @throws JsonException
     */
    private function getWidgetsConfigAll(): array
    {
        Logger::write('After verification get all configuration from '.self::widgetsConfigFile.' in system.');
        return _JSON::decodeToArray(self::read($this->readWidgetsConfigFile()));

    }//end getWidgetsConfigAll()


    /**
     * @param  string $child
     * @return string
     * @throws JsonException
     */
    private function getWidgetsParent(string $child): string
    {
        Logger::write('Get parent Widget of '.$child);
        $parent = '';
        $wd     = array_keys($this->getWidgetsConfigAll());
        foreach ($wd as $item) {
            if ($item === $child) {
                if (str_contains($item, '-') === true) {
                    $parent = substr($item, 0, strpos($item, '-'));
                } else {
                    $parent = $item;
                }
            }
        }

        Logger::write('The parent Widget of '.$child.' is '.$parent);
        return $parent;

    }//end getWidgetsParent()


    /**
     * @return array
     * @throws JsonException
     */
    private function getWidgetsParentAll(): array
    {
        Logger::write('Get all parent Widget');
        $parents = [];
        $wd      = array_keys($this->getWidgetsConfigAll());
        foreach ($wd as $item) {
            if (str_contains($item, '-') === true) {
                $parents[] = substr($item, 0, strpos($item, '-'));
            } else {
                $parents[] = $item;
            }
        }

        // Remove duplicate data.
        $parents = array_unique($parents, SORT_ASC);
        array_multisort($parents, SORT_ASC);
        asort($parents, SORT_ASC);

        Logger::write('The parents are '.implode(',', $parents));
        return $parents;

    }//end getWidgetsParentAll()


    /**
     * @param  string $parent
     * @return array
     * @throws JsonException
     */
    private function getAllDataOfWidgetsParent(string $parent): array
    {
         _Debug::preOutput(func_get_args());
        // _Debug::preOutput(self::read(self::widgetsConfigFile));
        // _Debug::preOutput(json_decode(self::read(self::widgetsFile), true, 512, JSON_THROW_ON_ERROR));
        // Logger::write('Extract to child configuration from '.self::widgetsConfigFile.' of '.$parent);
        $elements = _JSON::decodeToArray(self::read(self::widgetsFile));
        if (array_key_exists($parent, $elements) === false) {
            throw new InvalidArgumentException('No child of unregistered father was found');
        }

        if (is_array(_Array::value($elements, $parent)) === false) {
            throw new RuntimeException('Unable to extract parent widget\'s child item');
        }

        return _Array::value($elements, $parent);

    }//end getAllDataOfWidgetsParent()


    /**
     * @throws JsonException
     */
    private function getConfig(string $widget): array
    {
        Logger::write('Check '.self::widgetsConfigFile.' is readable or not in system.');
        if (is_readable($this->readWidgetsConfigFile()) === true) {
            Logger::write('If '.self::widgetsConfigFile.' is readable in system, then return configuration of '.$widget);
            return _Array::value(_JSON::decodeToArray(self::read(self::widgetsFile)), $widget);
        }

        Logger::write('Otherwise return default configuration ');
        return self::defaultWidgetConfig;

    }//end getConfig()


    /**
     * @param  string $template
     * @return array
     */
    public function getAvailableWidgetsPositions(string $template=DEFAULT_SYSTEM_THEME): array
    {
        Logger::write('Check custom template is set or not.');
        if (empty($this->templateName) === false) {
            Logger::write('New custom template is '.$this->templateName);
            $template = $this->templateName;
        }

        Logger::write('Checking '.APPLICATION_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php'.' is readable or not in system.');
        if (is_readable(APPLICATION_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php') === true) {
            Logger::write(APPLICATION_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php is readable and load it.');
            include_once APPLICATION_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php';
            return get_available_widgets_positions();
        }

        Logger::write(APPLICATION_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php'.' is not readable.');
        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => "Theme's Configs.php",
                    'location'    => APPLICATION_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php',
                    'description' => "Theme's configuration file not found.",
                ],
                'error' => ['description' => 'Your requested url is broken!!'],
            ]
        );

        return [];

    }//end getAvailableWidgetsPositions()


    /**
     * @param  string $widget
     * @param  string $method
     * @param  array  $options
     * @return mixed|void
     */
    public function widget(string $widget, string $method, array $options=[])
    {
        // _Debug::preOutput(func_get_args());
        Logger::write('Check widget options is array or not.');
        if (is_array($options) === false) {
            $options = [$options];
        }

        $widgetClass = $widget.'Widget';

        Logger::write('Checking '.APPLICATION_WIDGETS_PATH.$widgetClass.'.php is readable or not in system.');
        if (is_readable(APPLICATION_WIDGETS_PATH.$widgetClass.'.php') === true) {
            Logger::write(APPLICATION_WIDGETS_PATH.$widgetClass.'.php is readable and load it.');
            include_once APPLICATION_WIDGETS_PATH.$widgetClass.'.php';
            $widgetClass = Preloader::getClassNamespaceFromPath(APPLICATION_WIDGETS_PATH.$widgetClass.'.php');
            Logger::write('Extract class name from'.APPLICATION_WIDGETS_PATH.$widgetClass.'.php');
            if (class_exists($widgetClass) === false) {
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file'        => $widgetClass,
                            'location'    => APPLICATION_WIDGETS_PATH.$widgetClass.'.php',
                            'description' => 'Widget class not found or Widget class call error',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
                );
            }

            Logger::write('Checking '.$widgetClass.' and '.$method.'.is callable or not.');
            if (method_exists($widgetClass, $method) === true) {
                if (count($options) > 0) {
                    return call_user_func_array([new $widgetClass, $method], $options);
                }

                return call_user_func([new $widgetClass, $method]);
            }
        } else {
            Logger::write(APPLICATION_WIDGETS_PATH.$widgetClass.'.php is not readable.');
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => $widgetClass.'.php',
                        'location'    => APPLICATION_WIDGETS_PATH.$widgetClass.'.php',
                        'description' => "Widget's content not readable or found.",
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }//end if

    }//end widget()


    /**
     * @throws JsonException
     */
    public function getWidgets(): array
    {
        // Widgets list
        /*
            $widgetsList = array(
            "widget-name-like-filename" => array (
                "configuration"=> $this->widget('widget-class-name', 'widget-method-name', array('widget-filename')),
            //config collector function
                "configuration"=> $this->getConfig('topQuickBar'), //config collector function
                "configuration"=> $config, //config collector array,
                'content' => array('widget-class-name', 'widget-method-name', array('widget-name', 'widget-filename'))
            //data collector function
            )
            );
            $widgetsA = array(
             'menu-top' => array(
                  'config' => $this->widget('menu', 'getConfig', array('top')),
                 'content' => array('menu', 'getMenu', array('top', 'top'))
            ),
        );*/

        $widgets = [];

        foreach ($this->getWidgetsConfigAll() as $wd => $cnf) {
            /*
             * Sample
             * $widgets = array(
                'topQuickBar' => array(
                    'config' => $this->getConfig('topQuickBar'),
                    'content' => array('topQuickBar', 'getTopQuickBar', array('topQuickBar', 'top-quick-bar', 'php'))
                )
                );
             */

            // _Debug::preOutput($wd);
            $widget = $this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd));
            // _Debug::preOutput($widget);
            // _Debug::preOutput($this->widget);
            $widgets[$wd] = [
                'config'  => $cnf,
                'content' => [
                    _Array::value($widget, 'class'),
                    _Array::value($widget, 'method'),
                    [
                        _Array::value($widget, 'class'),
                        $wd,
                        'php',
                    ],
                ],
            ];
        }//end foreach

        $positions = $this->getAvailableWidgetsPositions();
        $keys      = [];
        if (is_array($widgets) === true) {
            $keys = array_keys($widgets);
        }

        foreach ($keys as $k) {
            // Verification of widgets position visibility.
            if (isset($positions[$widgets[$k]['config']['position']]) === true) {
                // Verification it's view disability by url [controller/method].
                if (!isset($widgets[$k]['config']['hide']) || !in_array($this->request['controller'].'/'.$this->request['method'], $widgets[$k]['config']['hide'])) {
                    // Verification it's view visibility by url [controller/method].
                    if ($widgets[$k]['config']['show'] === 'all' || in_array($this->request['controller'].'/'.$this->request['method'], $widgets[$k]['config']['show'])) {
                        if (array_key_exists($k, $this->widget) === true) {
                            $widgets[$k]['content'][2] = $this->widget[$k];
                        }

                        // Is it's have position in layout.
                        $positions[$widgets[$k]['config']['position']][] = $this->getWidgetContent($widgets[$k]['content']);
                    }
                }
            }
        }//end foreach

        Logger::write('Extract positions from all widgets.');
        return $positions;

    }//end getWidgets()


    /**
     * @param  array $content
     * @return mixed|void
     */
    public function getWidgetContent(array $content)
    {
        // _Debug::preOutput(func_get_args());
        Logger::write('Extract contents from all widgets.');
        if (array_key_exists(0, $content) === false || array_key_exists(1, $content) === false) {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => 'Widget',
                        'location'    => 'Required file',
                        'description' => "Widget's content not found.",
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }

        if (array_key_exists(2, $content) === false) {
            $content[2] = [];
        }

        return $this->widget($content[0], $content[1], $content[2]);

    }//end getWidgetContent()


    /**
     * @inheritDoc
     * @param      array $config
     */
    public function setWidgetConfig(array $config): void
    {
        Logger::write('Set config for widget.');
        $this->widgetConfig = $config;

    }//end setWidgetConfig()


    /**
     * @inheritDoc
     * @param      string $documentTitle
     */
    public function setDocumentTitle(string $documentTitle): void
    {
        Logger::write('Set document title.');
        $this->titleOfCurrentWebPage = $documentTitle;

    }//end setDocumentTitle()


    /**
     * @inheritDoc
     * @param      string $urlOfHostedWebsite
     */
    public function setUrlOfHostedWebsite(string $urlOfHostedWebsite): void
    {
        Logger::write('Set host address.');
        $this->urlOfHostedWebsite = $urlOfHostedWebsite;

    }//end setUrlOfHostedWebsite()


    /**
     * @param array $options
     */
    public function display(array $options=[]): void
    {
        Logger::write('Display Html Ui.');
        // _Debug::preOutput(func_get_args());
        Logger::write('Checking parameter options is array and not empty.');
        if (count($options) > 0) {
            // Identify file load auto or manual the current file.
            Logger::write('If parameter array options are not empty.');
            Logger::write('Checking custom load is set or not and is the custom load manual?');
            if (array_key_exists('load', $options) === true && _Array::value($options, 'load') === 'manual') {
                $this->templateLoad = 'manual';
                Logger::write('Checking custom template directory is set or not ?');
                if (array_key_exists('templateDirectory', $options) === true) {
                    Logger::write('Set custom templateDirectory to runtime template directory.');
                    $this->templateRenderDirectory = (string) _Array::value($options, 'templateDirectory');
                } else {
                    Logger::write('Custom templateDirectory is not found.');
                    Firewall::runtimeFailure(
                        'Not Found',
                        [
                            'debug' => [
                                'file'        => __FILE__,
                                'location'    => __METHOD__,
                                'description' => 'Invalid $options parsed. template directory location not provided.',
                            ],
                            'error' => ['description' => 'Your requested file not found or deleted!!'],
                        ]
                    );
                }

                Logger::write('Checking custom template extension is set or not ?');
                if (array_key_exists('templateExt', $options) === true) {
                    Logger::write('Set custom template extension to runtime template extension.');
                    $this->templateExt = (string) _Array::value($options, 'templateExt');
                } else {
                    Logger::write('Custom template extension is not found.');
                    Firewall::runtimeFailure(
                        'Not Found',
                        [
                            'debug' => [
                                'file'        => __FILE__,
                                'location'    => __METHOD__,
                                'description' => 'Invalid $options parsed. template extension not provided.',
                            ],
                            'error' => ['description' => 'Your requested file not found or deleted!!'],
                        ]
                    );
                }
            }//end if

            Logger::write('Checking custom template filtering is set or not ?');
            // Identify use theme or not the current file.
            if (array_key_exists('useTheme', $options) === true && _Array::value($options, 'useTheme') === 'no') {
                Logger::write('Set custom template filtering is no.');
                $this->templateUse = 'no';
            }
        }//end if

        // _Debug::preOutput($this->loadTemplateFile());
        Logger::write('Checking current page file ('.$this->loadTemplateFile().') is exists or not ?');
        if (file_exists($this->loadTemplateFile()) === true) {
            Logger::write('Load current page file ('.$this->loadTemplateFile().')');
            $this->compile();
        } else {
            Logger::write('Current page file ('.$this->loadTemplateFile().') is not exists or not readable.');
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => $this->loadTemplateFile(),
                        'location'    => $this->templateRenderDirectory,
                        'description' => $this->loadTemplateFile().' not found.',
                    ],
                    'error' => ['description' => 'Your requested file not found or deleted!!'],
                ]
            );
        }

    }//end display()


    /**
     * @return string
     */
    public function loadTemplateFile(): string
    {
        $routeUrl = implode('/', [_String::ucfirst($this->request['controller']), $this->request['method']]);
        Logger::write('Resolve current page'.$this->templateRenderDirectory.$routeUrl.'.'.$this->templateExt);
        return $this->templateRenderDirectory.$routeUrl.'.'.$this->templateExt;

    }//end loadTemplateFile()


    /**
     *
     */
    private function compile(): void
    {
        Logger::write('Checking'.$this->templateDirectory.' is exists and working directory?');
        if (is_dir($this->templateDirectory) === true) {
            // _Debug::preOutput($this->templateDirectory);
            Logger::write('Checking theme template'.$this->templateDirectory.$this->templateName.'/template.php is exists?');
            if (file_exists($this->templateDirectory.$this->templateName.'/template.php') === true) {
                // _Debug::preOutput($this->templateDirectory.$this->templateName.'/template.php');
                Logger::write('Load theme template'.$this->templateDirectory.$this->templateName.'/template.php.');
                include_once $this->templateDirectory.$this->templateName.'/template.php';
            } else {
                Logger::write('Checking theme template'.$this->templateDirectory.$this->templateName.'/template.php is not exists.');
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file'        => 'template.php',
                            'location'    => $this->templateDirectory.$this->templateName.'/template.php',
                            'description' => 'Template file not found',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
                );
            }
        } else {
            Logger::write('Checking'.$this->templateDirectory.' is not exists and not a working directory.');
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => 'template directory',
                        'location'    => $this->templateDirectory,
                        'description' => 'template directory not found',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }//end if

    }//end compile()


    /**
     * @param  string $tplKey
     * @param  mixed  $tplValue
     * @return array
     */
    public function assign(string $tplKey, mixed $tplValue): array
    {
        // _Debug::preOutput(array_merge($this->variables, array($tpl_key => $tpl_value)));
        return $this->variables = array_merge($this->variables, [$tplKey => $tplValue]);

    }//end assign()


}//end class
