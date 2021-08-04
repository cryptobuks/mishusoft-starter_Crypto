<?php declare(strict_types=1);


namespace Mishusoft\Drivers\View;

use JsonException;
use Mishusoft\Base;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\Ui\Firewall;
use Mishusoft\Ui\Logger;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\JSON;

class MishusoftView extends Base implements MishusoftViewInterface
{
    // Declare version.
    public const VERSION = '1.0.0';

    protected const DEFAULT_WIDGET_CONFIG = [
        'position' => 'footer',
        'show' => 'all',
        'hide' => [],
    ];


    private array $installedWidgets = [
        'TopQuickBar' => [
            'class' => 'topQuickBar',
            'method' => 'getTopQuickBar',
            'child' => [],
            'configuration' => ['position' => 'top'],
            'setting' => ['status' => 'enable'],
        ],
        'UniversalMenuBar' => [
            'class' => 'universalMenuBar',
            'method' => 'getUniversalMenuBar',
            'child' => [
                'header',
                'left',
                'right',
                'footer',
            ],
            'configuration' => ['position' => 'header'],
            'setting' => ['status' => 'enable'],
        ],
    ];

    public array $request;
    public array $widgetConfig;
    public string $titleOfCurrentWebPage;
    public string $urlOfHostedWebsite;
    public object $documentTitleElement;
    public object $documentHeadElement;
    public object $documentBodyElement;
    public object $documentTemplateElement;
    public object $documentTemplateBodyElement;
    public object $documentFooterElement;
    private string $templateName;
    private string $templateDirectory;
    private string $templateRenderDirectory;
    private string $templateExt;
    private string $templateLoad;
    private string $templateUse;
    private array $variables;
    private array $widget;
    private string $templateExtLatest;


    /**
     * ViewRender constructor.
     *
     * @param string $hostUrl
     * @param string $rootTitle
     * @param array $widgetConfig
     * @param array $request
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct(string $hostUrl, string $rootTitle, array $widgetConfig, array $request)
    {
        parent::__construct();
        // Fetching incoming variables.
        Logger::write('Fetching incoming variables.');

        $this->request = $request;
        $this->urlOfHostedWebsite = $hostUrl;
        $this->titleOfCurrentWebPage = $rootTitle;
        $this->widgetConfig = $widgetConfig;

        // Info of template.
        $this->templateName = strtolower(DEFAULT_APP_NAME);

        // Template preset info.
        $this->templateLoad = 'auto';
        $this->templateUse = 'yes';

        // Directory allocation.
        $this->templateDirectory = Storage::applicationDirectivePath() . 'Themes' . DS;
        $this->templateRenderDirectory = Storage::applicationDirectivePath() . 'Ema' . DS . 'Mishusoft/Main/Views/';

        // File information.
        $this->templateExt = 'php';
        $this->templateExtLatest = 'rht.php';

        $this->widget = [];
        $this->variables = [];
    }//end __construct()

    /**
     * @return string
     */
    public function widgetsFile(): string
    {
        return self::dFile(self::dataFile('Widgets', 'installed'));
    }

    /**
     * @return string
     */
    public function widgetsConfigFile(): string
    {
        return self::dFile(self::dataFile('Widgets', 'config'));
    }

    /**
     * @return array
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function installedWidgetsAll():array
    {
        Logger::write('Collecting all data from ' . $this->widgetsFile() . ' in system.');
        return Storage\FileSystem\Yaml::parseFile($this->widgetsFile());
    }

    /**
     * @return array
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function widgetsConfigsAll():array
    {
        Logger::write('Collecting all configuration from ' . $this->widgetsConfigFile() . ' in system.');
        return Storage\FileSystem\Yaml::parseFile($this->widgetsConfigFile());
    }


    /**
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function readWidgetsConfigFile(): string
    {
        /*
         * $widgetsFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets.json";
         * $widgetsConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets-config.json";
         */


        /*
         * check the installed widgets list file exists
         * create that path when not exists
         */

        Logger::write('Checking ' . $this->widgetsFile() . ' is exists or empty in system?');
        if (file_exists($this->widgetsFile()) === false || count($this->installedWidgetsAll()) === 0) {
            Logger::write('Creating ' . $this->widgetsFile() . ' if not exists or empty in system.');
            $this->installFreshWidgets();
        } else {
            foreach (Storage\FileSystem::list(Storage::applicationWidgetsPath(), 'file') as $widgetFile) {
                if (Storage\FileSystem::fileExt($widgetFile) === self::SYSTEM_APP_FILE) {
                    $filename = Storage\FileSystem::fileName($widgetFile);
                    $widgetConfigFile = self::dFile(
                        Storage::applicationWidgetsPath() . $filename,
                        self::PUBLIC_DATA_FILE
                    );
                    if (file_exists($widgetConfigFile) === true) {
                        $filenameOriginal = substr($filename, 0, strpos($filename, 'Widget'));
                        $configuration = JSON::decodeToArray(Storage\FileSystem::read($widgetConfigFile));

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
                        throw new \Mishusoft\Exceptions\RuntimeException($widgetConfigFile . ' not found');
                    }//end if
                }//end if
            }//end foreach
        }//end if

        /*
         * check the installed widgets configuration file exists
         * create that path when not exists
         */
        Logger::write('Checking ' . $this->widgetsConfigFile() . ' is exists in system?');
        if (file_exists($this->widgetsConfigFile()) === false) {
            foreach ($this->installedWidgetsAll() as $widget => $config) {
                if (file_exists($this->widgetsConfigFile()) === true && count($this->widgetsConfigsAll()) > 0) {
                    Logger::write('Updating ' . $this->widgetsConfigFile() . ' in system.');
                    $this->updateWidgetsConfig($widget, $config);
                } else {
                    Logger::write('Creating ' . $this->widgetsConfigFile() . ' reason of not exists in system.');
                    $this->installFreshWidgetsConfig($widget, $config);
                }
            }
        } elseif (count($this->widgetsConfigsAll()) === 0) {
            Logger::write('Updating ' . $this->widgetsConfigFile() . ' in system.');
            foreach ($this->installedWidgetsAll() as $widget => $config) {
                $this->updateWidgetsConfig($widget, $config);
            }
        } else {
            Logger::write('Updating ' . $this->widgetsConfigFile() . ' in system.');
            foreach ($this->installedWidgetsAll() as $widget => $config) {
                if (array_key_exists($widget, $this->widgetsConfigsAll()) === false) {
                    $this->updateWidgetsConfig($widget, $config);
                }
            }
        }//end if

        return $this->widgetsConfigFile();
    }//end readWidgetsConfigFile()


    /**
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function installFreshWidgets(): void
    {
        Logger::write('Fresh install ' . $this->widgetsFile() . ' in system.');
        $newWidget = [];
        if (count(Storage\FileSystem::list(Storage::applicationWidgetsPath(), 'file')) > 0) {
            foreach (Storage\FileSystem::list(Storage::applicationWidgetsPath(), 'file') as $widgetFile) {
                if (Storage\FileSystem::fileExt($widgetFile) === 'php') {
                    $filename = Storage\FileSystem::fileName($widgetFile);
                    $widgetConfigFile = Storage::applicationWidgetsPath() . $filename . '.json';
                    if (file_exists($widgetConfigFile) === true) {
                        $filenameOriginal = substr($filename, 0, strpos($filename, 'Widget'));
                        $lastModification = filemtime($widgetConfigFile);
                        $configuration = JSON::decodeToArray(Storage\FileSystem::read($widgetConfigFile));

                        if ((array_key_exists('setting', $configuration) === true)
                            && array_key_exists('status', $configuration['setting']) === true
                        ) {
                            if ($configuration['setting']['status'] === 'enable') {
                                // Setting new configuration.
                                $newWidget[$filenameOriginal] = $configuration;
                                $newWidget[$filenameOriginal]['last_modification'] = $lastModification;
                            }
                        } else {
                            throw new \Mishusoft\Exceptions\RuntimeException($widgetConfigFile . ' is corrupted');
                        }
                    } else {
                        throw new \Mishusoft\Exceptions\RuntimeException($widgetConfigFile . ' not found');
                    }//end if
                }//end if
            }//end foreach
        }//end if

        Logger::write('Merging new widgets configuration data with install widget data.');
        $this->installedWidgets = array_merge($this->installedWidgets, $newWidget);
        Logger::write('Writing ' . $this->widgetsFile() . ' in system.');
        if (file_exists(dirname($this->widgetsFile())) === false) {
            Storage\FileSystem::makeDirectory(dirname($this->widgetsFile()));
        }

        if (file_exists($this->widgetsFile()) === true) {
            Storage\FileSystem::remove($this->widgetsFile());
        }

        Storage\FileSystem\Yaml::emitFile($this->widgetsFile(), $this->installedWidgets);
    }//end installFreshWidgets()



    /**
     * @param string $widget
     * @param array $config
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function installFreshWidgetsConfig(string $widget, array $config): void
    {
        Logger::write('Writing ' . $this->widgetsConfigFile() . ' in system.');
        Storage\FileSystem\Yaml::emitFile($this->widgetsConfigFile(), $this->collectAllData($widget, $config));
    }//end installFreshWidgetsConfig()


    /**
     * @param string $widget
     * @param array $config
     * @return void
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function updateWidgetsConfig(string $widget, array $config): void
    {
        // _Debug::preOutput(func_get_args());
        Logger::write('Updating ' . $this->widgetsConfigFile() . ' in system.');
        Storage\FileSystem\Yaml::emitFile(
            $this->widgetsConfigFile(),
            array_merge(
                Storage\FileSystem\Yaml::parseFile($this->widgetsConfigFile()),
                $this->collectAllData($widget, $config)
            )
        );
    }//end updateWidgetsConfig()


    /**
     * @param string $widget
     * @param array $config
     * @return array
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function collectAllData(string $widget, array $config): array
    {
        Logger::write('Extract to child wise configuration from ' . $this->widgetsConfigFile() . ' in system.');
        $array = [];
        if (array_key_exists('child', $config) === true) {
            if (count($config['child']) > 0) {
                foreach ($config['child'] as $child) {
                    $array[$widget . '-' . $child] = array_merge(
                        self::DEFAULT_WIDGET_CONFIG,
                        [
                            'parent' => $config['class'],
                            'position' => $child,
                        ]
                    );
                }
            } else {
                $array[$widget] = array_merge(
                    self::DEFAULT_WIDGET_CONFIG,
                    $config['configuration'],
                    [
                        'parent' => $config['class'],
                    ],
                );
            }//end if
        } else {
            throw new \Mishusoft\Exceptions\RuntimeException('Child element not found. Widget configuration corrupted');
        }//end if

        return $array;
    }//end collectAllData()


    /**
     * @param string $child
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function getWidgetsParent(string $child): string
    {
        Logger::write('Get parent Widget of ' . $child);
        $parent = '';
        $wd = array_keys($this->widgetsConfigsAll());
        foreach ($wd as $item) {
            if ($item === $child) {
                if (str_contains($item, '-') === true) {
                    $parent = substr($item, 0, strpos($item, '-'));
                } else {
                    $parent = $item;
                }
            }
        }

        Logger::write('The parent Widget of ' . $child . ' is ' . $parent);
        return $parent;
    }//end getWidgetsParent()


    /**
     * @return array
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function getWidgetsParentAll(): array
    {
        Logger::write('Get all parent Widget');
        $parents = [];
        $wd = array_keys($this->widgetsConfigsAll());
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

        Logger::write('The parents are ' . implode(',', $parents));
        return $parents;
    }//end getWidgetsParentAll()


    /**
     * @param string $parent
     * @return array
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     */
    private function getAllDataOfWidgetsParent(string $parent): array
    {
        //print_r($parent, false);
        $elements = $this->installedWidgetsAll();
        if (array_key_exists($parent, $this->installedWidgetsAll()) === false) {
            throw new \Mishusoft\Exceptions\LogicException\InvalidArgumentException(
                'No child of unregistered father was found'
            );
        }

        if (is_array(ArrayCollection::value($elements, $parent)) === false) {
            throw new \Mishusoft\Exceptions\RuntimeException('Unable to extract parent widget\'s child item');
        }

        return ArrayCollection::value($elements, $parent);
    }//end getAllDataOfWidgetsParent()


    /**
     * @param string $widget
     * @return array
     * @throws JsonException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function getConfig(string $widget): array
    {
        Logger::write('Check ' . $this->widgetsConfigFile() . ' is readable or not in system.');
        if (is_readable($this->readWidgetsConfigFile()) === true) {
            Logger::write('If '
                . $this->widgetsConfigFile()
                . ' is readable in system, then return configuration of ' . $widget);
            return ArrayCollection::value($this->installedWidgetsAll(), $widget);
        }

        Logger::write('Otherwise return default configuration ');
        return self::DEFAULT_WIDGET_CONFIG;
    }//end getConfig()


    /**
     * @param string $template
     * @return array
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function getAvailableWidgetsPositions(string $template = DEFAULT_SYSTEM_THEME): array
    {
        Logger::write('Check custom template is set or not.');
        if (empty($this->templateName) === false) {
            Logger::write('New custom template is ' . $this->templateName);
            $template = $this->templateName;
        }

        Logger::write('Checking '
            . Storage::applicationThemesPath()
            . $template . DS . 'configs.php is readable or not in system.');
        if (is_readable(Storage::applicationThemesPath() . $template . DS . 'configs.php') === true) {
            Logger::write(Storage::applicationThemesPath() . $template . DS . 'configs.php is readable and load it.');
            include_once Storage::applicationThemesPath() . $template . DS . 'configs.php';
            return get_available_widgets_positions();
        }

        Logger::write(Storage::applicationThemesPath() . $template . DS . 'configs.php is not readable.');
        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file' => "Theme's Configs.php",
                    'location' => Storage::applicationThemesPath() . $template . DS . 'configs.php',
                    'description' => "Theme's configuration file not found.",
                ],
                'error' => ['description' => 'Your requested url is broken!!'],
            ]
        );

        return [];
    }//end getAvailableWidgetsPositions()


    /**
     * @param string $widget
     * @param string $method
     * @param array $options
     * @return mixed|void
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function widget(string $widget, string $method, array $options = [])
    {
        Logger::write('Check widget options is array or not.');
        if (is_array($options) === false) {
            $options = [$options];
        }

        $widgetClass = $widget . 'Widget';

        Logger::write('Checking '
            . Storage::applicationWidgetsPath()
            . $widgetClass . '.php is readable or not in system.');
        if (is_readable(Storage::applicationWidgetsPath() . $widgetClass . '.php') === true) {
            Logger::write(Storage::applicationWidgetsPath() . $widgetClass . '.php is readable and load it.');
            include_once Storage::applicationWidgetsPath() . $widgetClass . '.php';
            $widgetClass = Preloader::getClassNamespaceFromPath(Storage::applicationWidgetsPath() . $widgetClass . '.php');
            Logger::write('Extract class name from' . Storage::applicationWidgetsPath() . $widgetClass . '.php');
            if (class_exists($widgetClass) === false) {
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file' => $widgetClass,
                            'location' => Storage::applicationWidgetsPath() . $widgetClass . '.php',
                            'description' => 'Widget class not found or Widget class call error',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
                );
            }

            Logger::write('Checking ' . $widgetClass . ' and ' . $method . '.is callable or not.');
            if (method_exists($widgetClass, $method) === true) {
                if (count($options) > 0) {
                    return call_user_func_array([new $widgetClass, $method], $options);
                }

                return call_user_func([new $widgetClass, $method]);
            }
        } else {
            Logger::write(Storage::applicationWidgetsPath() . $widgetClass . '.php is not readable.');
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file' => $widgetClass . '.php',
                        'location' => Storage::applicationWidgetsPath() . $widgetClass . '.php',
                        'description' => "Widget's content not readable or found.",
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }//end if
    }//end widget()


    /**
     * @return array
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
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

        foreach ($this->widgetsConfigsAll() as $wd => $cnf) {
            /*
             * Sample
             * $widgets = array(
                'topQuickBar' => array(
                    'config' => $this->getConfig('topQuickBar'),
                    'content' => array('topQuickBar', 'getTopQuickBar', array('topQuickBar', 'top-quick-bar', 'php'))
                )
                );
             */

            $widget = $this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd));
            $widgets[$wd] = [
                'config' => $cnf,
                'content' => [
                    ArrayCollection::value($widget, 'class'),
                    ArrayCollection::value($widget, 'method'),
                    [
                        ArrayCollection::value($widget, 'class'),
                        $wd,
                        'php',
                    ],
                ],
            ];
        }//end foreach

        $positions = $this->getAvailableWidgetsPositions();
        $keys = [];
        if (is_array($widgets) === true) {
            $keys = array_keys($widgets);
        }

        $currentUrl = sprintf('%s/%s', $this->request['controller'], $this->request['method']);

        foreach ($keys as $k) {
            // Verification of widgets position visibility.
            if (array_key_exists($widgets[$k]['config']['position'], $positions) === true) {
                // Verification it's view disability by url [controller/method].
                if (empty($widgets[$k]['config']['hide']) || !in_array($currentUrl, $widgets[$k]['config']['hide'], true)) {
                    // Verification it's view visibility by url [controller/method].
                    if ($widgets[$k]['config']['show'] === 'all' || in_array($currentUrl, $widgets[$k]['config']['show'], true)) {
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
     * @param array $content
     * @return mixed|void
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
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
                        'file' => 'Widget',
                        'location' => 'Required file',
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
     * @param array $config
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function setWidgetConfig(array $config): void
    {
        Logger::write('Set config for widget.');
        $this->widgetConfig = $config;
    }//end setWidgetConfig()


    /**
     * @inheritDoc
     * @param string $documentTitle
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function setDocumentTitle(string $documentTitle): void
    {
        Logger::write('Set document title.');
        $this->titleOfCurrentWebPage = $documentTitle;
    }//end setDocumentTitle()


    /**
     * @inheritDoc
     * @param string $urlOfHostedWebsite
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function setUrlOfHostedWebsite(string $urlOfHostedWebsite): void
    {
        Logger::write('Set host address.');
        $this->urlOfHostedWebsite = $urlOfHostedWebsite;
    }//end setUrlOfHostedWebsite()


    /**
     * @param array $options
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function display(array $options = []): void
    {
        Logger::write('Display Html Ui.');
        // _Debug::preOutput(func_get_args());
        Logger::write('Checking parameter options is array and not empty.');
        if (count($options) > 0) {
            // Identify file load auto or manual the current file.
            Logger::write('If parameter array options are not empty.');
            Logger::write('Checking custom load is set or not and is the custom load manual?');
            if (array_key_exists('load', $options) === true && ArrayCollection::value($options, 'load') === 'manual') {
                $this->templateLoad = 'manual';
                Logger::write('Checking custom template directory is set or not ?');
                if (array_key_exists('templateDirectory', $options) === true) {
                    Logger::write('Set custom templateDirectory to runtime template directory.');
                    $this->templateRenderDirectory = (string)ArrayCollection::value($options, 'templateDirectory');
                } else {
                    Logger::write('Custom templateDirectory is not found.');
                    Firewall::runtimeFailure(
                        'Not Found',
                        [
                            'debug' => [
                                'file' => __FILE__,
                                'location' => __METHOD__,
                                'description' => 'Invalid $options parsed. template directory location not provided.',
                            ],
                            'error' => ['description' => 'Your requested file not found or deleted!!'],
                        ]
                    );
                }

                Logger::write('Checking custom template extension is set or not ?');
                if (array_key_exists('templateExt', $options) === true) {
                    Logger::write('Set custom template extension to runtime template extension.');
                    $this->templateExt = (string)ArrayCollection::value($options, 'templateExt');
                } else {
                    Logger::write('Custom template extension is not found.');
                    Firewall::runtimeFailure(
                        'Not Found',
                        [
                            'debug' => [
                                'file' => __FILE__,
                                'location' => __METHOD__,
                                'description' => 'Invalid $options parsed. template extension not provided.',
                            ],
                            'error' => ['description' => 'Your requested file not found or deleted!!'],
                        ]
                    );
                }
            }//end if

            Logger::write('Checking custom template filtering is set or not ?');
            // Identify use theme or not the current file.
            if (array_key_exists('useTheme', $options) === true && ArrayCollection::value($options, 'useTheme') === 'no') {
                Logger::write('Set custom template filtering is no.');
                $this->templateUse = 'no';
            }
        }//end if

        // _Debug::preOutput($this->loadTemplateFile());
        Logger::write('Checking current page file (' . $this->loadTemplateFile() . ') is exists or not ?');
        if (file_exists($this->loadTemplateFile()) === true) {
            Logger::write('Load current page file (' . $this->loadTemplateFile() . ')');
            $this->readWidgetsConfigFile();
            $this->compile();
        } else {
            Logger::write('Current page file (' . $this->loadTemplateFile() . ') is not exists or not readable.');
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file' => $this->loadTemplateFile(),
                        'location' => $this->templateRenderDirectory,
                        'description' => $this->loadTemplateFile() . ' not found.',
                    ],
                    'error' => ['description' => 'Your requested file not found or deleted!!'],
                ]
            );
        }
    }//end display()


    /**
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function loadTemplateFile(): string
    {
        $routeUrl = implode('/', [Inflect::ucfirst($this->request['controller']), $this->request['method']]);
        Logger::write('Resolve current page' . $this->templateRenderDirectory . $routeUrl . '.' . $this->templateExt);
        return $this->templateRenderDirectory . $routeUrl . '.' . $this->templateExt;
    }//end loadTemplateFile()


    /**
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function compile(): void
    {
        Logger::write('Checking' . $this->templateDirectory . ' is exists and working directory?');
        if (is_dir($this->templateDirectory) === true) {
            // _Debug::preOutput($this->templateDirectory);
            Logger::write('Checking theme template' . $this->templateDirectory . $this->templateName . '/template.php is exists?');
            if (file_exists($this->templateDirectory . $this->templateName . '/template.php') === true) {
                // _Debug::preOutput($this->templateDirectory.$this->templateName.'/template.php');
                Logger::write('Load theme template' . $this->templateDirectory . $this->templateName . '/template.php.');
                include_once $this->templateDirectory . $this->templateName . '/template.php';
            } else {
                Logger::write('Checking theme template' . $this->templateDirectory . $this->templateName . '/template.php is not exists.');
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file' => 'template.php',
                            'location' => $this->templateDirectory . $this->templateName . '/template.php',
                            'description' => 'Template file not found',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
                );
            }
        } else {
            Logger::write('Checking' . $this->templateDirectory . ' is not exists and not a working directory.');
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file' => 'template directory',
                        'location' => $this->templateDirectory,
                        'description' => 'template directory not found',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }//end if
    }//end compile()


    /**
     * @param string $tplKey
     * @param mixed $tplValue
     * @return array
     */
    public function assign(string $tplKey, mixed $tplValue): array
    {
        // _Debug::preOutput(array_merge($this->variables, array($tpl_key => $tpl_value)));
        return $this->variables = array_merge($this->variables, [$tplKey => $tplValue]);
    }//end assign()
}//end class
