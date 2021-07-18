<?php

namespace Mishusoft\Framework\Drivers\View;

use Exception;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\ClientRequest;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Network;
use Mishusoft\Framework\Drivers\Acl;
use Mishusoft\Framework\Drivers\Session;
use SmartyBC;
use SmartyException;

if (file_exists(RUNTIME_ROOT_PATH.'vendor/smarty/smarty/libs/SmartyBC.class.php') === true) {
    include_once RUNTIME_ROOT_PATH.'vendor/smarty/smarty/libs/SmartyBC.class.php';
} else {
    Firewall::runtimeFailure(
        'Not Found',
        [
            'debug' => [
                'file'        => 'vendor/smarty/smarty/libs/SmartyBC.class.php',
                'location'    => RUNTIME_ROOT_PATH.'vendor/smarty/smarty/libs/SmartyBC.class.php',
                'description' => 'Required Smarty Template Engine Library not found.',
            ],
            'error' => ['description' => 'Your requested url is broken!!'],
        ]
    );
}

class SmartyView extends SmartyBC
{

    private static string $item = '';

    private ClientRequest $request;

    private array $_js = [];

    private Acl $acl;

    private array $roots = [];

    private array $jsPlugin = [];

    private $template = DEFAULT_SYSTEM_LAYOUT;

    private array $widget;


    /**
     * View constructor.
     *
     * @param ClientRequest $prediction
     * @param Acl           $acl
     */
    public function __construct(ClientRequest $prediction, Acl $acl)
    {
        parent::__construct();
        $this->request = $prediction;
        $this->acl     = $acl;

        $module     = $this->request->getModule();
        $controller = $this->request->getController();

        if (!empty($module)) {
            $this->roots['view'] = MPM::TemplatesHtmlResourcesRoot($module, $controller);
            $this->roots['js']   = MPM::TemplatesJavascriptResourcesRoot($module, $controller);
        } else {
            $this->roots['view'] = MPM::TemplatesHtmlResourcesRoot(MPM::defaultModule(), $controller);
            $this->roots['js']   = MPM::TemplatesJavascriptResourcesRoot(MPM::defaultModule(), $controller);
        }

    }//end __construct()


    /**
     * @return string
     */
    public static function getViewId(): string
    {
        return self::$item;

    }//end getViewId()


    /**
     * @param $view
     * @param string $item
     * @param false  $noLayout
     */
    public function render($view, $item='', $noLayout=false)
    {
        if ($item) {
            self::$item = $item;
        }

        // Ensure required directory.
        if (is_dir(APPLICATION_THEMES_PATH.$this->template.DS.'configs'.DS) === false) {
            FileSystem::createDirectory(APPLICATION_THEMES_PATH.$this->template.DS.'configs'.DS);
        }

        if (is_dir(RUNTIME_CACHE_TEMP_PATH) === false) {
            FileSystem::createDirectory(RUNTIME_CACHE_TEMP_PATH);
        }

        if (is_dir(RUNTIME_CACHE_TEMPLATES_PATH) === false) {
            FileSystem::createDirectory(RUNTIME_CACHE_TEMPLATES_PATH);
        }

        // Set required directory to template engine.
        $this->template_dir = APPLICATION_THEMES_PATH.$this->template.DS;
        $this->config_dir   = APPLICATION_THEMES_PATH.$this->template.DS.'configs'.DS;
        $this->cache_dir    = APPLICATION_DOCUMENT_ROOT.'tmp'.DS.'caches'.DS;
        $this->compile_dir  = APPLICATION_DOCUMENT_ROOT.'tmp'.DS.'templates'.DS;

        // $favicon = join([MS_MEDIA_PATH,"favicons/"]) . $this->favicon();
        $js = [];

        if (count($this->_js) > 0) {
            $js = $this->_js;
        }

        $layoutParams = [
            'publicCSS'                  => BASEURL.'assets'.DS.'css'.DS,
            /*
                'publicBootstrapCSS' => BaseURL . 'libraries' . DS . 'css' . DS . 'bootstrap' . DS,
                'publicFontAwesomeCSS' => BaseURL . 'libraries' . DS . 'css' . DS . 'font-awesome' . DS,
            'publicJqueryUICSS' => BaseURL . 'libraries' . DS . 'css' . DS . 'jquery-ui' . DS,*/
            'publicFonts'                => BASEURL.'assets'.DS.'webfonts'.DS,
            'publicIMG'                  => BASEURL.'media'.DS.'images'.DS,
            'publicJS'                   => BASEURL.'assets'.DS.'js'.DS,
            /*
                'publicAngularJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'angular' . DS,
                'publicBootstrapJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'bootstrap' . DS,
                'publicJqueryJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'jquery' . DS,
            'publicJqueryUIJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'jquery-ui' . DS,*/
            // 'libraries' . ucfirst(DefaultAppName) . 'JS' => BaseURL . 'libraries' . DS . 'js' . DS . strtolower(DefaultAppName) . DS,
            'publicJSPlugin'             => BASEURL.'assets'.DS.'js'.DS.'plugin'.DS,
            /*
                'rootCSS' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'css' . DS,
                'rootIMG' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'images' . DS,
            'rootJS' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'js' . DS,*/
            'js'                         => $js,
            'jsPlugin'                   => $this->jsPlugin,
            // 'mediaImage' => WebPublicImagesFolder,
            'logoFolder'                 => Storage::getLogosMediaPath('', 'remote'),
            // 'favicon' => $favicon,
            'profilePhotosFolder'        => Storage::getMediaPathOfUsersPhotos('profiles', 'remote'),
            'uploads'                    => Storage::getMediaPathOfUploads('', 'remote'),
            'root'                       => BASEURL,
            'mishusoft_session_validity' => Session::get('auth'),
            'current_host_name'          => Network::getValOfSrv('SERVER_NAME'),
            'configs'                    => [
                'app_name'    => DEFAULT_APP_NAME,
                'app_slogan'  => DEFAULT_APP_DESCRIPTIONS,
                'app_author'  => DEFAULT_APP_AUTHOR,
                'app_company' => DEFAULT_APP_COMPANY_NAME,
            ],
        ];

        if (is_readable($this->roots['view'].$view.'.tpl') === true) {
            if ($noLayout === true) {
                try {
                    $this->template_dir = $this->roots['view'];
                    $this->display($this->roots['view'].$view.'.tpl');
                    exit;
                } catch (SmartyException | Exception $e) {
                    Firewall::runtimeFailure(
                        'Not Found',
                        [
                            'debug' => [
                                'file'        => $this->roots['view'],
                                'location'    => $this->roots['view'].$view.'.tpl',
                                'description' => $e->getMessage(),
                            ],
                            'error' => ['description' => 'Your requested url is broken!!'],
                        ]
                    );
                    exit();
                }
            }

            $this->assign('content', $this->roots['view'].$view.'.tpl');
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => $this->roots['view'],
                        'location'    => $this->roots['view'].$view.'.tpl',
                        'description' => 'Page or content not found or page location is wrong.',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
            exit();
        }//end if

        try {
            $this->assign('widgets', $this->getWidgets());
            $this->assign('acl', $this->acl);
            $this->assign('layoutParams', $layoutParams);
            $this->display('template.tpl');
            exit;
        } catch (SmartyException | Exception $e) {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => 'template.tpl',
                        'location'    => $this->template_dir = MS_THEMES_PATH.$this->template.DS.'template.tpl',
                        'description' => $e->getMessage(),
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
            exit();
        }

    }//end render()


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

        $widgets = [
            'menu-top'    => [
                'config'  => $this->widget('menu', 'getConfig', ['top']),
                'content' => [
                    'menu',
                    'getMenu',
                    [
                        'Menu',
                        'top',
                    ],
                ],
            ],

            'menu-header' => [
                'config'  => $this->widget('menu', 'getConfig', ['header']),
                'content' => [
                    'menu',
                    'getMenu',
                    [
                        'Menu',
                        'header',
                    ],
                ],
            ],

            'menu-left'   => [
                'config'  => $this->widget('menu', 'getConfig', ['left']),
                'content' => [
                    'menu',
                    'getMenu',
                    [
                        'Menu',
                        'left',
                    ],
                ],
            ],

            'menu-right'  => [
                'config'  => $this->widget('menu', 'getConfig', ['right']),
                'content' => [
                    'menu',
                    'getMenu',
                    [
                        'Menu',
                        'right',
                    ],
                ],
            ],

            'menu-footer' => [
                'config'  => $this->widget('menu', 'getConfig', ['footer']),
                'content' => [
                    'menu',
                    'getMenu',
                    [
                        'Menu',
                        'footer',
                    ],
                ],
            ],
        ];

        $positions = $this->getLayoutPositions();
        $keys      = [];
        if ($widgets == !false) {
            $keys = array_keys($widgets);
        }

        foreach ($keys as $k) {
            // Verification of widgets position visibility.
            if (isset($positions[$widgets[$k]['config']['position']])) {
                // Verification it's view disability
                if (!isset($widgets[$k]['config']['hide']) || !in_array(self::$item, $widgets[$k]['config']['hide'])) {
                    // Verification it's view visibility
                    if ($widgets[$k]['config']['show'] === 'all' || in_array(self::$item, $widgets[$k]['config']['show'])) {
                        if (isset($this->widget[$k])) {
                            $widgets[$k]['content'][2] = $this->widget[$k];
                        }

                        // is it's have position in layout
                        $positions[$widgets[$k]['config']['position']][] = $this->getWidgetContent($widgets[$k]['content']);
                    }
                }
            }
        }//end foreach

        return $positions;

    }//end getWidgets()


    /**
     * @param  $widget
     * @param  $method
     * @param  array  $options
     * @return mixed|void
     */
    public function widget($widget, $method, $options=[])
    {
        if (!is_array($options)) {
            $options = [$options];
        }

        $widgetClass = $widget.'Widget';
        if (is_readable(MS_WIDGETS_PATH."$widgetClass.php") === true) {
            include_once MS_WIDGETS_PATH."$widgetClass.php";
            $widgetClass = Preloader::getClassNamespaceFromPath(MS_WIDGETS_PATH."$widgetClass.php");
            if (class_exists($widgetClass, false) === false) {
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file'        => "$widgetClass.php",
                            'location'    => MS_WIDGETS_PATH."$widgetClass.php",
                            'description' => 'Widget class not found or Widget class call error',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
                );
            }

            if (is_callable($widgetClass, $method)) {
                if (count($options)) {
                    return call_user_func_array([new $widgetClass, $method], $options);
                } else {
                    return call_user_func([new $widgetClass, $method]);
                }
            }
        } else {
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
        }//end if

    }//end widget()


    /**
     * @return array|array[]
     */
    public function getLayoutPositions(): array
    {
        $template = DEFAULT_SYSTEM_LAYOUT;

        if ($this->template == !false) {
            $template = $this->template;
        }

        if (is_readable(join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH.$template, 'configs', 'configs.php']))) {
            include_once join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH.$template, 'configs', 'configs.php']);
            return get_available_widgets_positions();
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => 'Configs.php',
                        'location'    => join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH.$template, 'configs', 'configs.php']),
                        'description' => 'Layout configuration file not found.',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );

            return [];
        }

    }//end getLayoutPositions()


    /**
     * @param  array $content
     * @return mixed|void
     */
    public function getWidgetContent(array $content)
    {
        if (!isset($content[0]) || !isset($content[1])) {
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

        if (!isset($content[2])) {
            $content[2] = [];
        }

        return $this->widget($content[0], $content[1], $content[2]);

    }//end getWidgetContent()


    /**
     * @param array $js
     */
    public function setJs(array $js)
    {
        if (is_array($js) && count($js)) {
            for ($i = 0; $i < count($js); $i++) {
                $this->_js[] = $this->roots['js'].$js[$i].'.js';
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => 'Javascript file',
                        'location'    => join(',', $this->_js),
                        'description' => 'JavaScript file not found or error while loading JavaScript files.',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }

    }//end setJs()


    /**
     * @param array $js
     */
    public function setJsPlugin(array $js)
    {
        if (is_array($js) && count($js)) {
            for ($i = 0; $i < count($js); $i++) {
                $this->jsPlugin[] = BaseURL.'libraries'.DS.'js'.DS.'plugin'.DS.$js[$i].'.js';
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => 'JavaScript Plugin file',
                        'location'    => join(',', $this->jsPlugin),
                        'description' => 'JavaScript Plugin file not found or error while loading JavaScript files.',
                    ],
                    'error' => ['description' => 'Your requested url is broken!!'],
                ]
            );
        }

    }//end setJsPlugin()


    /**
     * @param  string $template
     * @return string
     */
    public function setModuleTemplate(string $template): string
    {
        return $this->template = $template;

    }//end setModuleTemplate()


    /**
     * @param $key
     * @param $options
     */
    public function setWidgetOptions($key, $options)
    {
        $this->widget[$key] = $options;

    }//end setWidgetOptions()


    function __destruct()
    {

    }//end __destruct()


}//end class
