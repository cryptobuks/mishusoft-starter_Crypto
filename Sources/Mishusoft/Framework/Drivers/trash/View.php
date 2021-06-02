<?php

namespace Mishusoft\Framework\Drivers;

use Exception;
use Mishusoft\Framework\Chipsets\Http\ClientRequest;
use Mishusoft\Framework\Chipsets\Media;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Network;
use SmartyBC;
use SmartyException;

if (file_exists(RUNTIME_ROOT_PATH . "vendor/smarty/smarty/libs/SmartyBC.class.php")) {
    require_once RUNTIME_ROOT_PATH . 'vendor/smarty/smarty/libs/SmartyBC.class.php';
} else {
    Firewall::runtimeFailure("Not Found", [
        "debug" => [
            "file" => "vendor/smarty/smarty/libs/SmartyBC.class.php",
            "location" => RUNTIME_ROOT_PATH . 'vendor/smarty/smarty/libs/SmartyBC.class.php',
            "description" => "Required Smarty Template Engine Library not found."
        ],
        "error" => ["description" => "Your requested url is broken!!"]
    ]);
}

class View extends SmartyBC
{
    private static string $item = "";
    private ClientRequest $request;
    private array $_js = array();
    private Acl $acl;
    private array $roots = array();
    private array $jsPlugin = array();
    private $template = DEFAULT_SYSTEM_LAYOUT;
    private array $widget;

    /**
     * View constructor.
     * @param ClientRequest $prediction
     * @param Acl $acl
     */
    public function __construct(ClientRequest $prediction, Acl $acl)
    {
        parent::__construct();
        $this->request = $prediction;
        $this->acl = $acl;

        $module = $this->request->getModule();
        $controller = $this->request->getController();

        if (!empty($module)) {
            $this->roots['view'] = MPM::TemplatesHtmlResourcesRoot($module, $controller);
            $this->roots['js'] = MPM::TemplatesJavascriptResourcesRoot($module, $controller);
        } else {
            $this->roots['view'] = MPM::TemplatesHtmlResourcesRoot(MPM::defaultModule(), $controller);
            $this->roots['js'] = MPM::TemplatesJavascriptResourcesRoot(MPM::defaultModule(), $controller);
        }
    }

    /**
     * @return string
     */
    public static function getViewId(): string
    {
        return self::$item;
    }

    /**
     * @param $view
     * @param string $item
     * @param false $noLayout
     */
    public function render($view, $item = "", $noLayout = false)
    {
        if ($item) {
            self::$item = $item;
        }

        /*ensure required directory*/
        if (!is_dir(MS_THEMES_PATH . $this->template . DS . 'configs' . DS)) {
            mkdir(MS_THEMES_PATH . $this->template . DS . 'configs' . DS);
        }
        if (!is_dir(MS_DOCUMENT_ROOT . 'tmp' . DS . 'caches' . DS)) {
            mkdir(MS_DOCUMENT_ROOT . 'tmp' . DS . 'caches' . DS);
        }
        if (!is_dir(MS_DOCUMENT_ROOT . 'tmp' . DS . 'templates' . DS)) {
            mkdir(MS_DOCUMENT_ROOT . 'tmp' . DS . 'templates' . DS);
        }

        /*set required directory to template engine*/
        $this->template_dir = MS_THEMES_PATH . $this->template . DS;
        $this->config_dir = MS_THEMES_PATH . $this->template . DS . 'configs' . DS;
        $this->cache_dir = MS_DOCUMENT_ROOT . 'tmp' . DS . 'caches' . DS;
        $this->compile_dir = MS_DOCUMENT_ROOT . 'tmp' . DS . 'templates' . DS;

        /*$favicon = join([MS_MEDIA_PATH,"favicons/"]) . $this->favicon();*/
        $js = array();

        if (count($this->_js)) {
            $js = $this->_js;
        }

        $layoutParams = array(
            'publicCSS' => BaseURL . 'libraries' . DS . 'css' . DS,
            /*'publicBootstrapCSS' => BaseURL . 'libraries' . DS . 'css' . DS . 'bootstrap' . DS,
            'publicFontAwesomeCSS' => BaseURL . 'libraries' . DS . 'css' . DS . 'font-awesome' . DS,
            'publicJqueryUICSS' => BaseURL . 'libraries' . DS . 'css' . DS . 'jquery-ui' . DS,*/
            'publicFonts' => BaseURL . 'libraries' . DS . 'webfonts' . DS,
            'publicIMG' => BaseURL . 'libraries' . DS . 'images' . DS,
            'publicJS' => BaseURL . 'libraries' . DS . 'js' . DS,
            /*'publicAngularJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'angular' . DS,
            'publicBootstrapJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'bootstrap' . DS,
            'publicJqueryJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'jquery' . DS,
            'publicJqueryUIJS' => BaseURL . 'libraries' . DS . 'js' . DS . 'jquery-ui' . DS,*/
            /*'libraries' . ucfirst(DefaultAppName) . 'JS' => BaseURL . 'libraries' . DS . 'js' . DS . strtolower(DefaultAppName) . DS,*/
            'publicJSPlugin' => BaseURL . 'libraries' . DS . 'js' . DS . 'plugin' . DS,
            /*'rootCSS' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'css' . DS,
            'rootIMG' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'images' . DS,
            'rootJS' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'js' . DS,*/
            'js' => $js,
            'jsPlugin' => $this->jsPlugin,
            /*'mediaImage' => WebPublicImagesFolder,*/
            'logoFolder' => Media::getLogosMediaPath("", "remote"),
            /*'favicon' => $favicon,*/
            'profilePhotosFolder' => Media::getMediaPathOfUsersPhotos("profiles", "remote"),
            'uploads' => Media::getMediaPathOfUploads("", "remote"),
            'root' => BaseURL,
            'mishusoft_session_validity' => Session::get('auth'),
            'current_host_name' => Network::getValOfSrv('SERVER_NAME'),
            'configs' => array(
                'app_name' => DEFAULT_APP_NAME,
                'app_slogan' => DEFAULT_APP_DESCRIPTIONS,
                'app_author' => DEFAULT_APP_AUTHOR,
                'app_company' => DEFAULT_APP_COMPANY_NAME
            )
        );

        if (is_readable($this->roots['view'] . $view . '.tpl')) {
            if ($noLayout) {
                try {
                    $this->template_dir = $this->roots['view'];
                    $this->display($this->roots['view'] . $view . '.tpl');
                    exit;
                } catch (SmartyException | Exception $e) {
                    Firewall::runtimeFailure("Not Found", [
                        "debug" => [
                            "file" => $this->roots['view'],
                            "location" => $this->roots['view'] . $view . '.tpl',
                            "description" => $e->getMessage()
                        ],
                        "error" => ["description" => "Your requested url is broken!!"]
                    ]);
                    exit();
                }
            }
            $this->assign('content', $this->roots['view'] . $view . '.tpl');
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => $this->roots['view'],
                    "location" => $this->roots['view'] . $view . '.tpl',
                    "description" => "Page or content not found or page location is wrong."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
            exit();
        }


        try {
            $this->assign("widgets", $this->getWidgets());
            $this->assign("acl", $this->acl);
            $this->assign("layoutParams", $layoutParams);
            $this->display("template.tpl");
            exit;
        } catch (SmartyException | Exception $e) {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "template.tpl",
                    "location" => $this->template_dir = MS_THEMES_PATH . $this->template . DS . "template.tpl",
                    "description" => $e->getMessage()
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
            exit();
        }
    }

    public function getWidgets(): array
    {


        //Widgets list
        /*$widgetsList = array(
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



        $widgets = array(
            'menu-top' => array(
                'config' => $this->widget('menu', 'getConfig', array('top')),
                'content' => array('menu', 'getMenu', array('Menu', 'top'))
            ),

            'menu-header' => array(
                'config' => $this->widget('menu', 'getConfig', array('header')),
                'content' => array('menu', 'getMenu', array('Menu', 'header'))
            ),

            'menu-left' => array(
                'config' => $this->widget('menu', 'getConfig', array('left')),
                'content' => array('menu', 'getMenu', array('Menu', 'left'))
            ),

            'menu-right' => array(
                'config' => $this->widget('menu', 'getConfig', array('right')),
                'content' => array('menu', 'getMenu', array('Menu', 'right'))
            ),

            'menu-footer' => array(
                'config' => $this->widget('menu', 'getConfig', array('footer')),
                'content' => array('menu', 'getMenu', array('Menu', 'footer'))
            )
        );

        $positions = $this->getLayoutPositions();
        $keys = array();
        if ($widgets == !false) {
            $keys = array_keys($widgets);
        }

        foreach ($keys as $k) {
            /* Verification of widgets position visibility. */
            if (isset($positions[$widgets[$k]['config']['position']])) {
                /* Verification it's view disability */
                if (!isset($widgets[$k]['config']['hide']) || !in_array(self::$item, $widgets[$k]['config']['hide'])) {
                    /* Verification it's view visibility */
                    if ($widgets[$k]['config']['show'] === 'all' || in_array(self::$item, $widgets[$k]['config']['show'])) {
                        if (isset($this->widget[$k])) {
                            $widgets[$k]['content'][2] = $this->widget[$k];
                        }
                        /*is it's have position in layout*/
                        $positions[$widgets[$k]['config']['position']][] = $this->getWidgetContent($widgets[$k]['content']);
                    }
                }
            }

        }
        return $positions;
    }

    /**
     * @param $widget
     * @param $method
     * @param array $options
     * @return mixed|void
     */
    public function widget($widget, $method, $options = array())
    {
        if (!is_array($options)) {
            $options = array($options);
        }

        $widgetClass = $widget . 'Widget';
        if (is_readable(MS_WIDGETS_PATH . "$widgetClass.php")) {
            include_once MS_WIDGETS_PATH . "$widgetClass.php";
            $widgetClass = Preloader::getClassNamespaceFromPath(MS_WIDGETS_PATH . "$widgetClass.php");
            if (class_exists($widgetClass, false) === false) {
                Firewall::runtimeFailure("Not Found", [
                    "debug" => [
                        "file" => "$widgetClass.php",
                        "location" => MS_WIDGETS_PATH . "$widgetClass.php",
                        "description" => "Widget class not found or Widget class call error"
                    ],
                    "error" => ["description" => "Your requested url is broken!!"]
                ]);
            }

            if (is_callable($widgetClass, $method)) {
                if (count($options)) {
                    return call_user_func_array(array(new $widgetClass, $method), $options);
                } else {
                    return call_user_func(array(new $widgetClass, $method));
                }
            }
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "Widget",
                    "location" => "Required file",
                    "description" => "Widget's content not found."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
    }

    /**
     * @return array|array[]
     */
    public function getLayoutPositions(): array
    {
        $template = DEFAULT_SYSTEM_LAYOUT;

        if ($this->template == !false) {
            $template = $this->template;
        }

        if (is_readable(join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH . $template, "configs", "configs.php"]))) {
            include_once join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH . $template, "configs", "configs.php"]);
            return get_available_widgets_positions();
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "Configs.php",
                    "location" => join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH . $template, "configs", "configs.php"]),
                    "description" => "Layout configuration file not found."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);

            return [];
        }
    }

    /**
     * @param array $content
     * @return mixed|void
     */
    public function getWidgetContent(array $content)
    {
        if (!isset($content[0]) || !isset($content[1])) {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "Widget",
                    "location" => "Required file",
                    "description" => "Widget's content not found."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
        if (!isset($content[2])) {
            $content[2] = array();
        }
        return $this->widget($content[0], $content[1], $content[2]);
    }

    /**
     * @param array $js
     */
    public function setJs(array $js)
    {
        if (is_array($js) && count($js)) {
            for ($i = 0; $i < count($js); $i++) {
                $this->_js[] = $this->roots['js'] . $js[$i] . '.js';
            }
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "Javascript file",
                    "location" => join(",", $this->_js),
                    "description" => "JavaScript file not found or error while loading JavaScript files."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
    }

    /**
     * @param array $js
     */
    public function setJsPlugin(array $js)
    {
        if (is_array($js) && count($js)) {
            for ($i = 0; $i < count($js); $i++) {
                $this->jsPlugin[] = BaseURL . 'libraries' . DS . 'js' . DS . 'plugin' . DS . $js[$i] . '.js';
            }
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "JavaScript Plugin file",
                    "location" => join(",", $this->jsPlugin),
                    "description" => "JavaScript Plugin file not found or error while loading JavaScript files."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
    }

    /**
     * @param string $template
     * @return string
     */
    public function setModuleTemplate(string $template): string
    {
        return $this->template = $template;
    }

    /**
     * @param $key
     * @param $options
     */
    public function setWidgetOptions($key, $options)
    {
        $this->widget[$key] = $options;
    }


    function __destruct()
    {

    }
}