<?php

namespace Mishusoft\Drivers\View;

use Mishusoft\Base;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Http\Request\Classic as Request;
use Mishusoft\Http\Session;
use Mishusoft\Storage;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\System\Network;
use Mishusoft\Authentication\Acl;
use SmartyBC;
use SmartyException;

class SmartyView extends SmartyBC
{

    private static string $item = '';

    private Request $request;

    //private array $_js = [];

    private Acl $acl;

    private array $roots = [];

    private array $jsPlugin = [];

    private $template = DEFAULT_SYSTEM_LAYOUT;

    private array $widget;
    private array $_js;


    /**
     * View constructor.
     *
     * @param Request $prediction
     * @param Acl $acl
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct(Request $prediction, Acl $acl)
    {
        parent::__construct();
        $this->request = $prediction;
        $this->acl     = $acl;

        $module     = $this->request->getModule();
        $controller = $this->request->getController();

        if (!empty($module)) {
            $this->roots['view'] = MPM\Classic::TemplatesHtmlResourcesRoot($module, $controller);
            $this->roots['js']   = MPM\Classic::TemplatesJSResourcesRoot($module, $controller);
        } else {
            $this->roots['view'] = MPM\Classic::TemplatesHtmlResourcesRoot(MPM\Classic::defaultModule(), $controller);
            $this->roots['js']   = MPM\Classic::TemplatesJSResourcesRoot(MPM\Classic::defaultModule(), $controller);
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
     * @param string $view
     * @param string $item
     * @param false $noLayout
     * @throws NotFoundException
     * @throws SmartyException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function render(string $view, string $item = '', bool $noLayout = false): void
    {
        if ($item) {
            self::$item = $item;
        }

        // Ensure required directory.
        if (is_dir(Storage::applicationThemesPath().$this->template.DS.'configs'.DS) === false) {
            FileSystem::makeDirectory(Storage::applicationThemesPath().$this->template.DS.'configs'.DS);
        }

        if (is_dir(RUNTIME_CACHE_ROOT_PATH) === false) {
            FileSystem::makeDirectory(RUNTIME_CACHE_ROOT_PATH);
        }

        if (is_dir(RUNTIME_CACHE_ROOT_PATH.'templates'.DS) === false) {
            FileSystem::makeDirectory(RUNTIME_CACHE_ROOT_PATH.'templates'.DS);
        }

        // Set required directory to template engine.
        $this->template_dir = Storage::applicationThemesPath().$this->template.DS;
        $this->config_dir   = Storage::applicationThemesPath().$this->template.DS.'configs'.DS;
        $this->cache_dir    = RUNTIME_CACHE_ROOT_PATH.'caches'.DS;
        $this->compile_dir  = RUNTIME_CACHE_ROOT_PATH.'templates'.DS;

        // $favicon = join([MS_MEDIA_PATH,"favicons/"]) . $this->favicon();
        $js = [];

        if (count($this->_js) > 0) {
            $js = $this->_js;
        }

        $layoutParams = [
            'publicCSS'                  => BASE_URL.'assets'.DS.'css'.DS,
            /*
                'publicBootstrapCSS' => BASE_URL . 'libraries' . DS . 'css' . DS . 'bootstrap' . DS,
                'publicFontAwesomeCSS' => BASE_URL . 'libraries' . DS . 'css' . DS . 'font-awesome' . DS,
            'publicJqueryUICSS' => BASE_URL . 'libraries' . DS . 'css' . DS . 'jquery-ui' . DS,*/
            'publicFonts'                => BASE_URL.'assets'.DS.'webfonts'.DS,
            'publicIMG'                  => BASE_URL.'media'.DS.'images'.DS,
            'publicJS'                   => BASE_URL.'assets'.DS.'js'.DS,
            /*
                'publicAngularJS' => BASE_URL . 'libraries' . DS . 'js' . DS . 'angular' . DS,
                'publicBootstrapJS' => BASE_URL . 'libraries' . DS . 'js' . DS . 'bootstrap' . DS,
                'publicJqueryJS' => BASE_URL . 'libraries' . DS . 'js' . DS . 'jquery' . DS,
            'publicJqueryUIJS' => BASE_URL . 'libraries' . DS . 'js' . DS . 'jquery-ui' . DS,*/
            // 'libraries' . ucfirst(DefaultAppName) . 'JS' =>
            // BaseURL . 'libraries' . DS . 'js' . DS . strtolower(DefaultAppName) . DS,
            'publicJSPlugin'             => BASE_URL.'assets'.DS.'js'.DS.'plugin'.DS,
            /*
                'rootCSS' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'css' . DS,
                'rootIMG' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'images' . DS,
            'rootJS' => BaseURL . AppSET . DS . 'themes' . DS . $this->template . DS . 'js' . DS,*/
            'js'                         => $js,
            'jsPlugin'                   => $this->jsPlugin,
            // 'mediaImage' => WebPublicImagesFolder,
            'logoFolder'                 => Storage::logosPath(true),
            // 'favicon' => $favicon,
            'profilePhotosFolder'        => Storage::usersProfilePicturesPath(),
            'uploads'                    => Storage::mediaPath(),
            'root'                       => BASE_URL,
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
                $this->template_dir = $this->roots['view'];
                $this->display($this->roots['view'].$view.'.tpl');
                exit;
            }

            $this->assign('content', $this->roots['view'].$view.'.tpl');
        } else {
            throw new NotFoundException($this->roots['view'].$view.'.tpl not found');
        }//end if

        $this->assign('widgets', $this->getWidgets());
        $this->assign('acl', $this->acl);
        $this->assign('layoutParams', $layoutParams);
        $this->display('template.tpl');
        exit();
    }//end render()


    /**
     * @throws NotFoundException
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
                if (!isset($widgets[$k]['config']['hide'])
                    || !in_array(self::$item, $widgets[$k]['config']['hide'], true)) {
                    // Verification it's view visibility
                    if ($widgets[$k]['config']['show'] === 'all'
                        || in_array(self::$item, $widgets[$k]['config']['show'], true)) {
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
     * @param array $options
     * @return mixed|void
     * @throws NotFoundException
     */
    public function widget($widget, $method, array $options = [])
    {
        if (!is_array($options)) {
            $options = [$options];
        }

        $widgetClass = $widget.'Widget';
        if (is_readable(Storage::applicationWidgetsPath()."$widgetClass.php") === true) {
            include_once Storage::applicationWidgetsPath()."$widgetClass.php";
            $widgetClass = Base::getClassNamespace(Storage::applicationWidgetsPath()."$widgetClass.php");
            if (class_exists($widgetClass, false) === false) {
                throw new NotFoundException(Storage::applicationWidgetsPath()."$widgetClass.php not found");
            }

            if (is_callable($widgetClass, $method)) {
                if (count($options)) {
                    return call_user_func_array([new $widgetClass, $method], $options);
                }

                return call_user_func([new $widgetClass, $method]);
            }
        } else {
            throw new NotFoundException('Widget\'s content not found');
        }//end if
    }//end widget()


    /**
     * @return array
     * @throws NotFoundException
     */
    public function getLayoutPositions(): array
    {
        $template = DEFAULT_SYSTEM_LAYOUT;

        if ($this->template === true) {
            $template = $this->template;
        }

        if (is_readable(implode(DS, [Storage::applicationThemesPath().$template, 'configs', 'configs.php']))) {
            include_once implode(DS, [Storage::applicationThemesPath().$template, 'configs', 'configs.php']);
            return get_available_widgets_positions();
        }

        throw new NotFoundException(
            Storage::applicationThemesPath().$template . DS. 'configs'. DS. 'configs.php not found'
        );
    }//end getLayoutPositions()


    /**
     * @param array $content
     * @return mixed|void
     * @throws NotFoundException
     */
    public function getWidgetContent(array $content)
    {
        if (!isset($content[0], $content[1])) {
            throw new NotFoundException('Widget\'s content not found');
        }

        if (!isset($content[2])) {
            $content[2] = [];
        }

        return $this->widget($content[0], $content[1], $content[2]);
    }//end getWidgetContent()


    /**
     * @param array $js
     * @throws NotFoundException
     */
    public function setJs(array $js)
    {
        if (count($js)) {
            foreach ($js as $iValue) {
                $this->_js[] = $this->roots['js']. $iValue .'.js';
            }
        } else {
            throw new NotFoundException('JavaScript Plugin file not found or error while loading JavaScript files '
            .implode(',', $this->_js));
        }
    }//end setJs()


    /**
     * @param array $js
     * @throws NotFoundException
     */
    public function setJsPlugin(array $js)
    {
        if (count($js)) {
            foreach ($js as $iValue) {
                $this->jsPlugin[] = BASE_URL.'libraries'.DS.'js'.DS.'plugin'.DS. $iValue .'.js';
            }
        } else {
            throw new NotFoundException('JavaScript Plugin file not found or error while loading JavaScript files '
                    .implode(',', $this->jsPlugin));
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
    public function setWidgetOptions($key, $options): void
    {
        $this->widget[$key] = $options;
    }//end setWidgetOptions()


    public function __destruct()
    {
    }//end __destruct()
}//end class
