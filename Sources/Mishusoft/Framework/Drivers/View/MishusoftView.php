<?php


namespace Mishusoft\Framework\Drivers\View;


use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Interfaces\Drivers\MishusoftViewInterface;
use RuntimeException;

class MishusoftView implements MishusoftViewInterface
{
    // Declare version.
    public const VERSION = '1.0.0';

    public const widgetsFile       = PHP_RUNTIME_REGISTRIES_PATH.'widgets.json';
    public const widgetsConfigFile = PHP_RUNTIME_REGISTRIES_PATH.'widgets-config.json';

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
        $this->templateDirectory       = MS_THEMES_PATH;
        $this->templateRenderDirectory = MS_DOCUMENT_ROOT.'Ema'.DIRECTORY_SEPARATOR.'Mishusoft/Main/Views/';

        // File information.
        $this->templateExt = 'php';

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

        FileSystem::createDirectory(PHP_RUNTIME_REGISTRIES_PATH);

        /*
         * check the installed widgets list file exists
         * create that path when not exists
         *
         */
        if (file_exists(self::widgetsFile) === false || FileSystem::read(self::widgetsFile) === '') {
            $this->installFreshWidgets();
        }//end if

        /*
         * check the installed widgets configuration file exists
         * create that path when not exists
         */

        // $widgetFileArray = json_decode(FileSystem::read(self::widgetsFile), true, 512, JSON_THROW_ON_ERROR);
        // $widgetConfigArray = json_decode(FileSystem::read(self::widgetsConfigFile), true, 512, JSON_THROW_ON_ERROR);
         // _Debug::preOutput($this->getInstalledWidgets());
        if (file_exists(self::widgetsConfigFile) === false) {
            foreach ($this->getInstalledWidgets() as $widget => $config) {
                if (file_exists(self::widgetsConfigFile) === true && count($this->getInstalledWidgetsConfig()) > 0) {
                    $this->updateWidgetsConfig($widget, $config);
                } else {
                    $this->installFreshWidgetsConfig($widget, $config);
                }
            }
        } else if (count($this->getInstalledWidgetsConfig()) === 0) {
            foreach ($this->getInstalledWidgets() as $widget => $config) {
                $this->updateWidgetsConfig($widget, $config);
            }
        } else {
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
        $newWidget = [];
        if (count(FileSystem::getList(MS_WIDGETS_PATH, 'file')) > 0) {
            foreach (FileSystem::getList(MS_WIDGETS_PATH, 'file') as $widgetFile) {
                if (pathinfo($widgetFile, PATHINFO_EXTENSION) === 'json') {
                    $configuration = [
                        pathinfo($widgetFile, PATHINFO_FILENAME) => json_decode(
                            FileSystem::read(MS_WIDGETS_PATH.$widgetFile),
                            true,
                            512,
                            JSON_THROW_ON_ERROR
                        ),
                    ];

                    $filename             = pathinfo($widgetFile, PATHINFO_FILENAME);
                    $newWidget[$filename] = $configuration[$filename];
                }
            }
        }

        $this->installedWidgets = array_merge($this->installedWidgets, $newWidget);
        FileSystem::write(self::widgetsFile, $this->installedWidgets);

    }//end installFreshWidgets()


    /**
     * @throws JsonException
     */
    private function getInstalledWidgets()
    {
        return json_decode(FileSystem::read(self::widgetsFile), true, 512, JSON_THROW_ON_ERROR);

    }//end getInstalledWidgets()


    /**
     * @throws JsonException
     */
    private function getInstalledWidgetsConfig()
    {
        return json_decode(FileSystem::read(self::widgetsConfigFile), true, 512, JSON_THROW_ON_ERROR);

    }//end getInstalledWidgetsConfig()


    /**
     * @param  string $widget
     * @param  array  $config
     * @throws JsonException
     */
    private function installFreshWidgetsConfig(string $widget, array $config): void
    {
        // _Debug::preOutput(func_get_args());
        FileSystem::write(self::widgetsConfigFile, $this->collectAllData($widget, $config));

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
        FileSystem::write(
            self::widgetsConfigFile,
            array_merge(
                json_decode(FileSystem::read(self::widgetsConfigFile), true, 512, JSON_THROW_ON_ERROR),
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
        return json_decode(FileSystem::read($this->readWidgetsConfigFile()), true, 512, JSON_THROW_ON_ERROR);

    }//end getWidgetsConfigAll()


    /**
     * @param  string $child
     * @return string
     * @throws JsonException
     */
    private function getWidgetsParent(string $child): string
    {
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

        return $parent;

    }//end getWidgetsParent()


    /**
     * @return array
     * @throws JsonException
     */
    private function getWidgetsParentAll(): array
    {
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

        return $parents;

    }//end getWidgetsParentAll()


    /**
     * @param  string $parent
     * @return array
     * @throws JsonException
     */
    private function getAllDataOfWidgetsParent(string $parent): array
    {
        // _Debug::preOutput(func_get_args());
        // _Debug::preOutput(FileSystem::read(self::widgetsConfigFile));
        // _Debug::preOutput(json_decode(FileSystem::read(self::widgetsFile), true, 512, JSON_THROW_ON_ERROR));
        return _Array::value(
            json_decode(
                FileSystem::read(self::widgetsFile),
                //FileSystem::read(self::widgetsConfigFile),
                true,
                512,
                JSON_THROW_ON_ERROR
            ),
            $parent
        );

    }//end getAllDataOfWidgetsParent()


    /**
     * @throws JsonException
     */
    private function getConfig(string $widget): array
    {
        if (is_readable($this->readWidgetsConfigFile()) === true) {
            return _Array::value(
                json_decode(
                    FileSystem::read(self::widgetsFile),
                    true,
                    512,
                    JSON_THROW_ON_ERROR
                ),
                $widget
            );
        }

        return self::defaultWidgetConfig;

    }//end getConfig()


    /**
     * @param  string $template
     * @return array
     */
    public function getAvailableWidgetsPositions(string $template=DEFAULT_SYSTEM_THEME): array
    {
        if (empty($this->templateName) === false) {
            $template = $this->templateName;
        }

        if (is_readable(MS_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php') === true) {
            include_once MS_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php';
            return get_available_widgets_positions();
        }

        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => "Theme's Configs.php",
                    'location'    => MS_THEMES_PATH.$template.DIRECTORY_SEPARATOR.'configs.php',
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
        _Debug::preOutput(func_get_args());
        if (is_array($options) === false) {
            $options = [$options];
        }

        $widgetClass = $widget.'Widget';
        if (is_readable(MS_WIDGETS_PATH.$widgetClass.'.php') === true) {
            include_once MS_WIDGETS_PATH.$widgetClass.'.php';
            $widgetClass = Preloader::getClassNamespaceFromPath(MS_WIDGETS_PATH.$widgetClass.'.php');
            if (class_exists($widgetClass) === false) {
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file'        => $widgetClass,
                            'location'    => MS_WIDGETS_PATH.$widgetClass.'.php',
                            'description' => 'Widget class not found or Widget class call error',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
                );
            }

            if (is_callable($widgetClass, $method) === true) {
                if (count($options) > 0) {
                    return call_user_func_array([new $widgetClass, $method], $options);
                }

                return call_user_func([new $widgetClass, $method]);
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => "$widgetClass.php",
                        'location'    => MS_WIDGETS_PATH."$widgetClass.php",
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
                "configuration"=> $this->widget('widget-class-name', 'widget-method-name', array('widget-filename')), //config collector function
                "configuration"=> $this->getConfig('topQuickBar'), //config collector function
                "configuration"=> $config, //config collector array,
                'content' => array('widget-class-name', 'widget-method-name', array('widget-name', 'widget-filename')) //data collector function
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

            //_Debug::preOutput($wd);
            $widget = $this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd));
            //_Debug::preOutput($widget);
            _Debug::preOutput($this->widget);

            $widgets[$wd] = [
                'config'  => $cnf,
                'content' => [
                    _Array::value($this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd)), 'class'),
                    _Array::value($this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd)), 'method'),
                    [
                        _Array::value($this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd)), 'class'),
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

        return $positions;

    }//end getWidgets()


    /**
     * @param  array $content
     * @return mixed|void
     */
    public function getWidgetContent(array $content)
    {
        _Debug::preOutput(func_get_args());
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
        $this->widgetConfig = $config;

    }//end setWidgetConfig()


    /**
     * @inheritDoc
     * @param      string $documentTitle
     */
    public function setDocumentTitle(string $documentTitle): void
    {
        $this->titleOfCurrentWebPage = $documentTitle;

    }//end setDocumentTitle()


    /**
     * @inheritDoc
     * @param      string $urlOfHostedWebsite
     */
    public function setUrlOfHostedWebsite(string $urlOfHostedWebsite): void
    {
        $this->urlOfHostedWebsite = $urlOfHostedWebsite;

    }//end setUrlOfHostedWebsite()


    /**
     * @param array $options
     */
    public function display(array $options=[]): void
    {
        if (count($options) > 0) {
            // Identify file load auto or manual the current file.
            if (array_key_exists('load', $options) === true && _Array::value($options, 'load') === 'manual') {
                $this->templateLoad = 'manual';
                if (array_key_exists('templateDirectory', $options) === true) {
                    $this->templateRenderDirectory = (string) _Array::value($options, 'templateDirectory');
                } else {
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

                if (array_key_exists('templateExt', $options) === true) {
                    $this->templateExt = (string) _Array::value($options, 'templateExt');
                } else {
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

            // Identify use theme or not the current file.
            if (array_key_exists('useTheme', $options) === true && _Array::value($options, 'useTheme') === 'no') {
                $this->templateUse = 'no';
            }
        }//end if

        if (file_exists($this->loadTemplateFile()) === true) {
            $this->compile();
        } else {
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
        return $this->templateRenderDirectory.$routeUrl.'.'.$this->templateExt;

    }//end loadTemplateFile()


    /**
     *
     */
    private function compile(): void
    {
        if (is_dir($this->templateDirectory) === true) {
            if (file_exists("{$this->templateDirectory}{$this->templateName}/template.php") === true) {
                include_once "{$this->templateDirectory}{$this->templateName}/template.php";
            } else {
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
     * @param  string   $tplKey
     * @param  mixed $tplValue
     * @return array
     */
    public function assign(string $tplKey, mixed $tplValue): array
    {
        // _Debug::preOutput(array_merge($this->variables, array($tpl_key => $tpl_value)));
        return $this->variables = array_merge($this->variables, [$tplKey => $tplValue]);

    }//end assign()


}//end class
