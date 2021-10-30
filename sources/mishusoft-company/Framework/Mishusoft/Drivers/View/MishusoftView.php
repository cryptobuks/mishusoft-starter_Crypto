<?php

declare(strict_types=1);

namespace Mishusoft\Drivers\View;

use Mishusoft\Base;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;
use Mishusoft\System\Log;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Implement;
use Mishusoft\Utility\Inflect;

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
            'class' => 'TopQuickBar',
            'method' => 'getTopQuickBar',
            'child' => [],
            'configuration' => ['position' => 'top'],
            'setting' => ['status' => 'enable'],
        ],
        'UniversalMenuBar' => [
            'class' => 'UniversalMenuBar',
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
    private string $templateName;
    private string $templateDirectory;
    private string $templateRenderDirectory;
    private string $templateExt;
    private array $variables;
    private array $widget;


    /**
     * ViewRender constructor.
     */
    public function __construct(string $hostUrl, string $rootTitle, array $widgetConfig, array $request)
    {
        parent::__construct();
        // Fetching incoming variables.
        Log::info('Fetching incoming variables.');

        $this->request = $request;
        $this->urlOfHostedWebsite = $hostUrl;
        $this->titleOfCurrentWebPage = $rootTitle;
        $this->widgetConfig = $widgetConfig;

        // Info of template.
        $this->templateName = strtolower(DEFAULT_APP_NAME);

        // Directory allocation.
        $this->templateDirectory = Storage::applicationDirectivePath() . 'Themes' . DS;
        $this->templateRenderDirectory = Storage::applicationPackagesPath() . 'Ema' . DS . 'Modules/Main/Views/';

        // File information.
        $this->templateExt = 'php';

        $this->widget = [];
        $this->variables = [];
    }public function widgetsFile(): string
    {
        return self::dFile(self::configDataFile('Widgets', 'installed'));
    }

    public function widgetsConfigFile(): string
    {
        return self::dFile(self::configDataFile('Widgets', 'config'));
    }

    /**
     * @throws RuntimeException
     */
    public function installedWidgetsAll(): array
    {
        Log::info('Collecting all data from ' . $this->widgetsFile() . ' in system.');
        return Storage\FileSystem\Yaml::parseFile($this->widgetsFile());
    }

    /**
     * @throws RuntimeException
     */
    public function widgetsConfigsAll(): array
    {
        Log::info('Collecting all configuration from ' . $this->widgetsConfigFile() . ' in system.');
        return Storage\FileSystem\Yaml::parseFile($this->widgetsConfigFile());
    }


    /**
     * @throws RuntimeException
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

        Log::info('Checking ' . $this->widgetsFile() . ' is exists or empty in system?');
        if (!file_exists($this->widgetsFile()) || $this->installedWidgetsAll() === []) {
            Log::info('Creating ' . $this->widgetsFile() . ' if not exists or empty in system.');
            $this->installFreshWidgets();
        } else {
            foreach (Storage\FileSystem::list(Storage::applicationWidgetsPath(), 'file') as $widgetFile) {
                if (Storage\FileSystem::fileExt($widgetFile) === self::SYSTEM_APP_FILE) {
                    $filename = Storage\FileSystem::fileName($widgetFile);
                    $widgetConfigFile = self::dFile(
                        Storage::applicationWidgetsPath() . $filename,
                        self::PUBLIC_DATA_FILE
                    );
                    if (file_exists($widgetConfigFile)) {
                        $filenameOriginal = substr($filename, 0, strpos($filename, 'Widget'));
                        $configuration = Implement::jsonDecode(
                            Storage\FileSystem::read($widgetConfigFile),
                            IMPLEMENT_JSON_IN_ARR
                        );

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

                        if ((array_key_exists($filenameOriginal, $configuration))
                            && array_key_exists('last_modification', $configuration[$filenameOriginal])
                        ) {
                            $oldLastModification = $configuration[$filenameOriginal]['last_modification'];
                            if (is_int($oldLastModification)) {
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
                        throw new RuntimeException($widgetConfigFile . ' not found');
                    }//end if
                }//end if
            }//end foreach
        }//end if

        /*
         * check the installed widgets configuration file exists
         * create that path when not exists
         */
        Log::info('Checking ' . $this->widgetsConfigFile() . ' is exists in system?');
        if (!file_exists($this->widgetsConfigFile())) {
            foreach ($this->installedWidgetsAll() as $widget => $config) {
                if (file_exists($this->widgetsConfigFile()) && $this->widgetsConfigsAll() !== []) {
                    Log::info('Updating ' . $this->widgetsConfigFile() . ' in system.');
                    $this->updateWidgetsConfig($widget, $config);
                } else {
                    Log::info('Creating ' . $this->widgetsConfigFile() . ' reason of not exists in system.');
                    $this->installFreshWidgetsConfig($widget, $config);
                }
            }
        } elseif ($this->widgetsConfigsAll() === []) {
            Log::info('Updating ' . $this->widgetsConfigFile() . ' in system.');
            foreach ($this->installedWidgetsAll() as $widget => $config) {
                $this->updateWidgetsConfig($widget, $config);
            }
        } else {
            Log::info('Updating ' . $this->widgetsConfigFile() . ' in system.');
            foreach ($this->installedWidgetsAll() as $widget => $config) {
                if (!array_key_exists($widget, $this->widgetsConfigsAll())) {
                    $this->updateWidgetsConfig($widget, $config);
                }
            }
        }//end if

        return $this->widgetsConfigFile();
    }//end readWidgetsConfigFile()


    /**
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function installFreshWidgets(): void
    {
        Log::info('Fresh install ' . $this->widgetsFile() . ' in system.');
        $newWidget = [];
        if (count(Storage\FileSystem::list(Storage::applicationWidgetsPath(), 'file')) > 0) {
            foreach (Storage\FileSystem::list(Storage::applicationWidgetsPath(), 'file') as $widgetFile) {
                if (Storage\FileSystem::fileExt($widgetFile) === 'php') {
                    $filename = Storage\FileSystem::fileName($widgetFile);
                    $widgetConfigFile = Storage::applicationWidgetsPath() . $filename . '.json';
                    if (file_exists($widgetConfigFile)) {
                        $filenameOriginal = substr($filename, 0, strpos($filename, 'Widget'));
                        $lastModification = filemtime($widgetConfigFile);
                        $configuration = Implement::jsonDecode(
                            Storage\FileSystem::read($widgetConfigFile),
                            IMPLEMENT_JSON_IN_ARR
                        );

                        if ((array_key_exists('setting', $configuration))
                            && array_key_exists('status', $configuration['setting'])
                        ) {
                            if ($configuration['setting']['status'] === 'enable') {
                                // Setting new configuration.
                                $newWidget[$filenameOriginal] = $configuration;
                                $newWidget[$filenameOriginal]['last_modification'] = $lastModification;
                            }
                        } else {
                            throw new RuntimeException($widgetConfigFile . ' is corrupted');
                        }
                    } else {
                        throw new RuntimeException($widgetConfigFile . ' not found');
                    }//end if
                }//end if
            }//end foreach
        }//end if

        Log::info('Merging new widgets configuration data with install widget data.');
        $this->installedWidgets = array_merge($this->installedWidgets, $newWidget);
        Log::info('Writing ' . $this->widgetsFile() . ' in system.');
        if (!file_exists(dirname($this->widgetsFile()))) {
            Storage\FileSystem::makeDirectory(dirname($this->widgetsFile()));
        }

        if (file_exists($this->widgetsFile())) {
            Storage\FileSystem::remove($this->widgetsFile());
        }

        Storage\FileSystem\Yaml::emitFile($this->widgetsFile(), $this->installedWidgets);
    }//end installFreshWidgets()
    /**
     * @throws RuntimeException
     */
    private function installFreshWidgetsConfig(string $widget, array $config): void
    {
        Log::info('Writing ' . $this->widgetsConfigFile() . ' in system.');
        Storage\FileSystem\Yaml::emitFile($this->widgetsConfigFile(), $this->collectAllData($widget, $config));
    }//end installFreshWidgetsConfig()
    /**
     * @throws RuntimeException
     */
    private function updateWidgetsConfig(string $widget, array $config): void
    {
        // _Debug::preOutput(func_get_args());
        Log::info('Updating ' . $this->widgetsConfigFile() . ' in system.');
        Storage\FileSystem\Yaml::emitFile(
            $this->widgetsConfigFile(),
            array_merge(
                Storage\FileSystem\Yaml::parseFile($this->widgetsConfigFile()),
                $this->collectAllData($widget, $config)
            )
        );
    }//end updateWidgetsConfig()
    /**
     * @throws RuntimeException
     */
    private function collectAllData(string $widget, array $config): array
    {
        Log::info('Extract to child wise configuration from ' . $this->widgetsConfigFile() . ' in system.');
        $array = [];
        if (array_key_exists('child', $config)) {
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
            throw new RuntimeException('Child element not found. Widget configuration corrupted');
        }//end if

        return $array;
    }//end collectAllData()
    /**
     * @throws RuntimeException
     */
    private function getWidgetsParent(string $child): string
    {
        Log::info('Get parent Widget of ' . $child);
        $parent = '';
        $wd = array_keys($this->widgetsConfigsAll());
        foreach ($wd as $item) {
            if ($item === $child) {
                $parent = strpos($item, '-') !== false ? substr($item, 0, strpos($item, '-')) : $item;
            }
        }

        Log::info('The parent Widget of ' . $child . ' is ' . $parent);
        return $parent;
    }//end getWidgetsParentAll()
    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     */
    private function getAllDataOfWidgetsParent(string $parent): array
    {
        //print_r($parent, false);
        $elements = $this->installedWidgetsAll();
        if (!array_key_exists($parent, $this->installedWidgetsAll())) {
            throw new InvalidArgumentException(
                'No child of unregistered father was found'
            );
        }

        if (!is_array(ArrayCollection::value($elements, $parent))) {
            throw new RuntimeException('Unable to extract parent widget\'s child item');
        }

        return ArrayCollection::value($elements, $parent);
    }//end getConfig()
    /**
     * @throws RuntimeException\NotFoundException
     */
    public function getAvailableWidgetsPositions(string $template = DEFAULT_SYSTEM_THEME): array
    {
        Log::info('Check custom template is set or not.');
        if (!empty($this->templateName)) {
            Log::info('New custom template is ' . $this->templateName);
            $template = $this->templateName;
        }

        Log::info('Checking '
            . Storage::applicationThemesPath()
            . $template . DS . 'configs.php is readable or not in system.');
        if (is_readable(Storage::applicationThemesPath() . $template . DS . 'configs.php')) {
            Log::info(Storage::applicationThemesPath() . $template . DS . 'configs.php is readable and load it.');
            include_once Storage::applicationThemesPath() . $template . DS . 'configs.php';
            return get_available_widgets_positions();
        }

        Log::info(Storage::applicationThemesPath() . $template . DS . 'configs.php is not readable.');
        throw new RuntimeException\NotFoundException(
            Storage::applicationThemesPath() . $template . DS . 'configs.php not found'
        );
    }//end getAvailableWidgetsPositions()
    /**
     * @return mixed|void
     * @throws RuntimeException\NotFoundException
     */
    public function widget(string $widget, string $method, array $options = [])
    {
        Log::info('Check widget options is array or not.');
        if (!is_array($options)) {
            $options = [$options];
        }

        $widgetClass = $widget . 'Widget';

        Log::info('Checking '
            . Storage::applicationWidgetsPath()
            . $widgetClass . '.php is readable or not in system.');
        if (is_readable(Storage::applicationWidgetsPath() . $widgetClass . '.php')) {
            Log::info(Storage::applicationWidgetsPath() . $widgetClass . '.php is readable and load it.');
            include_once Storage::applicationWidgetsPath() . $widgetClass . '.php';
            $widgetClass = Base::getClassNamespace(Storage::applicationWidgetsPath() . $widgetClass . '.php');
            Log::info('Extract class name from' . Storage::applicationWidgetsPath() . $widgetClass . '.php');
            if (!class_exists($widgetClass)) {
                throw new RuntimeException\NotFoundException(
                    $widgetClass. ' not found with '.Storage::applicationWidgetsPath() . $widgetClass . '.php'
                );
            }

            Log::info('Checking ' . $widgetClass . ' and ' . $method . '.is callable or not.');
            if (method_exists($widgetClass, $method)) {
                if ($options !== []) {
                    return call_user_func_array([new $widgetClass(), $method], $options);
                }

                return call_user_func([new $widgetClass(), $method]);
            }
        } else {
            Log::info(Storage::applicationWidgetsPath() . $widgetClass . '.php is not readable.');
            throw new RuntimeException\NotFoundException(
                Storage::applicationWidgetsPath() . $widgetClass . '.php is not readable'
            );
        }//end if
    }//end widget()
    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
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
        if (is_array($widgets)) {
            $keys = array_keys($widgets);
        }

        $currentUrl = sprintf('%s/%s', $this->request['controller'], $this->request['method']);

        foreach ($keys as $k) {
            // Verification of widgets position visibility.
            // Verification it's view disability by url [controller/method].
            // Verification it's view visibility by url [controller/method].
            if (array_key_exists($widgets[$k]['config']['position'], $positions) && (empty($widgets[$k]['config']['hide'])
                || !in_array($currentUrl, $widgets[$k]['config']['hide'], true)) && ($widgets[$k]['config']['show'] === 'all'
                || in_array($currentUrl, $widgets[$k]['config']['show'], true))) {
                if (array_key_exists($k, $this->widget)) {
                    $widgets[$k]['content'][2] = $this->widget[$k];
                }
                // Is it's have position in layout.
                $positions[$widgets[$k]['config']['position']][] = $this->getWidgetContent($widgets[$k]['content']);
            }
        }//end foreach


        Log::info('Extract positions from all widgets.');
        return $positions;
    }//end getWidgets()
    /**
     * @return mixed|void
     * @throws RuntimeException\NotFoundException
     */
    public function getWidgetContent(array $content)
    {
        // _Debug::preOutput(func_get_args());
        Log::info('Extract contents from all widgets.');
        if (!array_key_exists(0, $content) || !array_key_exists(1, $content)) {
            throw new RuntimeException\NotFoundException("Widget's content not found.");
        }

        if (!array_key_exists(2, $content)) {
            $content[2] = [];
        }

        return $this->widget($content[0], $content[1], $content[2]);
    }//end getWidgetContent()
    /**
     * @inheritDoc
     */
    public function setWidgetConfig(array $config): void
    {
        Log::info('Set config for widget.');
        $this->widgetConfig = $config;
    }//end setWidgetConfig()
    /**
     * @inheritDoc
     */
    public function setDocumentTitle(string $documentTitle): void
    {
        Log::info('Set document title.');
        $this->titleOfCurrentWebPage = $documentTitle;
    }//end setDocumentTitle()
    /**
     * @inheritDoc
     */
    public function setUrlOfHostedWebsite(string $urlOfHostedWebsite): void
    {
        Log::info('Set host address.');
        $this->urlOfHostedWebsite = $urlOfHostedWebsite;
    }//end setUrlOfHostedWebsite()
    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function display(array $options = []): void
    {
        Log::info('Display Html Ui.');
        // _Debug::preOutput(func_get_args());
        Log::info('Checking parameter options is array and not empty.');
        if ($options !== []) {
            // Identify file load auto or manual the current file.
            Log::info('If parameter array options are not empty.');
            Log::info('Checking custom load is set or not and is the custom load manual?');
            if (array_key_exists('load', $options) && ArrayCollection::value($options, 'load') === 'manual') {
                Log::info('Checking custom template directory is set or not ?');
                if (array_key_exists('templateDirectory', $options)) {
                    Log::info('Set custom templateDirectory to runtime template directory.');
                    $this->templateRenderDirectory = (string) ArrayCollection::value($options, 'templateDirectory');
                } else {
                    Log::info('Custom templateDirectory is not found.');
                    throw new InvalidArgumentException(
                        'Invalid $options parsed. template directory location not provided'
                    );
                }

                Log::info('Checking custom template extension is set or not ?');
                if (array_key_exists('templateExt', $options)) {
                    Log::info('Set custom template extension to runtime template extension.');
                    $this->templateExt = (string)ArrayCollection::value($options, 'templateExt');
                } else {
                    Log::info('Custom template extension is not found.');
                    throw new InvalidArgumentException(
                        'Invalid $options parsed. template extension not provided'
                    );
                }
            }//end if

            Log::info('Checking custom template filtering is set or not ?');
            // Identify use theme or not the current file.
            if (array_key_exists('useTheme', $options)
                && ArrayCollection::value($options, 'useTheme') === 'no') {
                Log::info('Set custom template filtering is no.');
            }
        }//end if

        // _Debug::preOutput($this->loadTemplateFile());
        Log::info('Checking current page file (' . $this->loadTemplateFile() . ') is exists or not ?');
        if (file_exists($this->loadTemplateFile())) {
            Log::info('Load current page file (' . $this->loadTemplateFile() . ')');
            $this->readWidgetsConfigFile();
            $this->compile();
        } else {
            Log::info('Current page file (' . $this->loadTemplateFile() . ') is not exists.');
            throw new RuntimeException\NotFoundException($this->loadTemplateFile() . ' not found.');
        }
    }public function loadTemplateFile(): string
    {
        $routeUrl = implode('/', [Inflect::ucfirst($this->request['controller']), $this->request['method']]);
        Log::info('Resolve current page' . $this->templateRenderDirectory . $routeUrl . '.' . $this->templateExt);
        return $this->templateRenderDirectory . $routeUrl . '.' . $this->templateExt;
    }//end loadTemplateFile()


    /**
     * @throws RuntimeException\NotFoundException
     */
    private function compile(): void
    {
        Log::info('Checking' . $this->templateDirectory . ' is exists and working directory?');
        if (is_dir($this->templateDirectory)) {
            // _Debug::preOutput($this->templateDirectory);
            Log::info(
                'Checking theme template'
                . $this->templateDirectory
                . $this->templateName
                . '/template.php is exists?'
            );
            if (file_exists($this->templateDirectory . $this->templateName . '/template.php')) {
                // _Debug::preOutput($this->templateDirectory.$this->templateName.'/template.php');
                Log::info('Load theme template' . $this->templateDirectory . $this->templateName . '/template.php.');
                include_once $this->templateDirectory . $this->templateName . '/template.php';
            } else {
                Log::info(
                    'Checking theme template'
                    . $this->templateDirectory
                    . $this->templateName
                    . '/template.php is not exists.'
                );
                throw new RuntimeException\NotFoundException(
                    $this->templateDirectory . $this->templateName . '/template.php not found'
                );
            }
        } else {
            Log::info('Checking' . $this->templateDirectory . ' is not exists and not a working directory.');
            throw new RuntimeException\NotFoundException(
                $this->templateDirectory . ' not found'
            );
        }//end if
    }//end compile()
    /**
     * @param mixed $tplValue
     */
    public function assign(string $tplKey, $tplValue): array
    {
        // _Debug::preOutput(array_merge($this->variables, array($tpl_key => $tpl_value)));
        return $this->variables = array_merge($this->variables, [$tplKey => $tplValue]);
    }//end assign()
}//end class
