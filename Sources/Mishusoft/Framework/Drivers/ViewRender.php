<?php


namespace Mishusoft\Framework\Drivers;


use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Decryption;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use Mishusoft\Framework\Interfaces\Drivers\MishusoftViewInterface;

class ViewRender implements MishusoftViewInterface
{
    /*declare version*/
    const VERSION = "1.0.0";

    const widgetsFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets.json";
    const widgetsConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets-config.json";

    const  defaultWidgetConfig = array(
        "position" => "footer",
        "show" => "all",
        "hide" => array()
    );


    private array $installedWidgets = array(
        "topQuickBar" => array(
            "class" => "topQuickBar",
            "method" => "getTopQuickBar",
            "child" => array(),
            "configuration" => array(
                "position" => "top"
            ),
            "setting" => array(
                "status" => "enable"
            )
        ),
        "universalMenuBar" => array(
            "class" => "universalMenuBar",
            "method" => "getUniversalMenuBar",
            "child" => array("header", "left", "right", "footer"),
            "configuration" => array(
                "position" => "header"
            ),
            "setting" => array(
                "status" => "enable"
            )
        ),
    );

    public array $request;
    public array $widgetConfig;
    public string $TitleOfCurrentWebPage;
    public string $UrlOfHostedWebsite;

    public object $documentHeadElement;
    public object $documentBodyElement;
    public object $documentTitleElement;
    public object $documentTemplateElement;
    public object $documentTemplateBodyElement;
    public object $documentFooterElement;

    private string $template_name;
    private string $template_dir;
    private string $template_render_dir;
    private string $template_ext;
    private string $template_load;
    private string $template_use;

    private array $variables;
    private array $widget;

    /**
     * ViewRender constructor.
     * @param string $hostUrl
     * @param string $rootTitle
     * @param array $widgetConfig
     * @param array $request
     */
    public function __construct(string $hostUrl, string $rootTitle, array $widgetConfig, array $request)
    {
        // TODO: Implement __construct() method.
        $this->request = $request;
        $this->UrlOfHostedWebsite = $hostUrl;
        $this->TitleOfCurrentWebPage = $rootTitle;
        $this->widgetConfig = $widgetConfig;


        /*info of template*/
        $this->template_name = strtolower(DEFAULT_APP_NAME);

        /*template preset info*/
        $this->template_load = "auto";
        $this->template_use = "yes";

        /*directory allocation*/
        $this->template_dir = MS_THEMES_PATH;
        $this->template_render_dir = MS_DOCUMENT_ROOT . "Ema" . DIRECTORY_SEPARATOR . "Mishusoft/Main/ViewRenders/";

        /*file information*/
        $this->template_ext = "php";

        $this->variables = [];
    }

    /**
     * @return string
     */
    private function readWidgetsConfigFile(): string
    {
        /*
         * $widgetsFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets.json";
         * $widgetsConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "widgets-config.json";
         * */

        /*
         * check the registries path exists
         * create that path when not exists
        */
        if (!is_dir(PHP_RUNTIME_REGISTRIES_PATH)) {
            mkdir(PHP_RUNTIME_REGISTRIES_PATH, 0777, true);
        }

        /*
         * check the installed widgets list file exists
         * create that path when not exists
        */
        if (!file_exists(self::widgetsFile)) {
            if (count(Stream::getList(MS_WIDGETS_PATH, "file")) > 0) {
                foreach (Stream::getList(MS_WIDGETS_PATH, "file") as $widgetFile) {
                    if (pathinfo($widgetFile, PATHINFO_EXTENSION) === "json") {
                        $this->installedWidgets = array_merge($this->installedWidgets, array(pathinfo($widgetFile, PATHINFO_FILENAME) => Stream::read(join([MS_WIDGETS_PATH, $widgetFile]))));
                    }
                }
            }
            Stream::write(self::widgetsFile, $this->installedWidgets);
        }

        /*
         * check the installed widgets configuration file exists
         * create that path when not exists
        */
        if (!file_exists(self::widgetsConfigFile)) {
            foreach (Stream::read(self::widgetsFile) as $widget => $config) {
                if (file_exists(self::widgetsConfigFile) and count(Stream::read(self::widgetsConfigFile)) > 0) {
                    $this->updateWidgets($widget, $config);
                } else {
                    $this->installFreshWidget($widget, $config);
                }
            }
        } else {
            if (count(Stream::read(self::widgetsConfigFile)) > !0) {
                foreach (Stream::read(self::widgetsFile) as $widget => $config) {
                    $this->updateWidgets($widget, $config);
                }
            } else {
                foreach (Stream::read(self::widgetsFile) as $widget => $config) {
                    if (!array_key_exists($widget, Stream::read(self::widgetsConfigFile))) {
                        $this->updateWidgets($widget, $config);
                    }
                }
            }
        }

        return self::widgetsConfigFile;
    }

    private function collectAllData(string $widget, array $config): array
    {
        $array = array();
        if (count($config["child"]) > 0) {
            foreach ($config["child"] as $child) {
                $array = array_merge($array, array("$widget-" . $child => array_merge(self::defaultWidgetConfig, array("position" => $child))));
            }
        } else {
            $array = array_merge($array, array($widget => array_merge(self::defaultWidgetConfig, $config["configuration"])));
        }

        return $array;
    }

    private function getWidgetsConfigAll(): array
    {
        return Stream::read(self::widgetsConfigFile);
    }

    private function getWidgetsParent(string $child): string
    {
        $parent = "";
        $wd = array_keys(Stream::read(self::widgetsConfigFile));
        foreach ($wd as $item) {
            if ($item === $child){
                if (strpos($item, "-")) {
                    $data = explode("-", $item);
                    $parent = array_shift($data);
                } else {
                    $parent = $item;
                }
            }
        }

        return $parent;
    }

    private function getWidgetsParentAll(): array
    {
        $parents = array();
        $wd = array_keys(Stream::read(self::widgetsConfigFile));
        foreach ($wd as $item) {
            if (strpos($item, "-")) {
                $data = explode("-", $item);
                array_push($parents,array_shift($data));
            } else {
                array_push($parents,$item);
            }
        }

        /*remove duplicate data*/
        $parents = array_unique($parents, SORT_ASC);
        array_multisort($parents, SORT_ASC);
        asort($parents, SORT_ASC);

        return $parents;
    }

    private function getAllDataOfWidgetsParent(string $parent): array
    {
     return _Array::value(Stream::read(self::widgetsFile), $parent);
    }

    /**
     * @param string $widget
     * @param array $config
     * @return false|int
     */
    private function installFreshWidget(string $widget, array $config)
    {
        return Stream::write(self::widgetsConfigFile, $this->collectAllData($widget, $config));
    }

    /**
     * @param string $widget
     * @param array $config
     * @return false|int
     */
    private function updateWidgets(string $widget, array $config)
    {
        return Stream::write(self::widgetsConfigFile, array_merge(Stream::read(self::widgetsConfigFile), $this->collectAllData($widget, $config)));
    }

    private function getConfig(string $widget): array
    {
        if (is_readable($this->readWidgetsConfigFile())) {
            return _Array::value(Stream::read($this->readWidgetsConfigFile()), $widget);
        } else {
            return self::defaultWidgetConfig;
        }
    }

    /**
     * @return array|array[]
     */
    public function getAvailableWidgetsPositions(): array
    {
        $template = DEFAULT_SYSTEM_THEME;

        if (!empty($this->template_name)) {
            $template = $this->template_name;
        }

        if (is_readable(join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH . $template, "configs", "configs.php"]))) {
            include_once join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH . $template, "configs", "configs.php"]);
            return get_available_widgets_positions();
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "Configs.php",
                    "location" => join(DIRECTORY_SEPARATOR, [MS_THEMES_PATH . $template, "configs", "configs.php"]),
                    "description" => "Theme's configuration file not found."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);

            return [];
        }
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
            if (!class_exists($widgetClass)) {
                Firewall::runtimeFailure("Not Found", [
                    "debug" => [
                        "file" => "$widgetClass",
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



        $widgets = array();

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

            $widgets = array_merge($widgets, array($wd => array(
                    "config" => $cnf,
                    "content" => array(
                        _Array::value($this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd)),"class"),
                        _Array::value($this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd)),"method"),
                        array(_Array::value($this->getAllDataOfWidgetsParent($this->getWidgetsParent($wd)),"class"), $wd, 'php')),
                ))
            );
        }

        $positions = $this->getAvailableWidgetsPositions();
        $keys = array();
        if ($widgets == true) {
            $keys = array_keys($widgets);
        }

        foreach ($keys as $k) {
            /* Verification of widgets position visibility. */
            if (isset($positions[$widgets[$k]['config']['position']])) {
                /* Verification it's view disability by url [controller/method]  */
                if (!isset($widgets[$k]['config']['hide']) || !in_array($this->request["controller"] . "/" . $this->request["method"], $widgets[$k]['config']['hide'])) {
                    /* Verification it's view visibility by url [controller/method] */
                    if ($widgets[$k]['config']['show'] === 'all' || in_array($this->request["controller"] . "/" . $this->request["method"], $widgets[$k]['config']['show'])) {
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
     * @inheritDoc
     * @param array $config
     */
    public function setWidgetConfig(array $config): void
    {
        // TODO: Implement setWidgetConfig() method.
        $this->widgetConfig = $config;
    }


    /**
     * @inheritDoc
     * @param string $documentTitle
     */
    public function setDocumentTitle(string $documentTitle): void
    {
        // TODO: Implement setDocumentTitle() method.
        $this->TitleOfCurrentWebPage = $documentTitle;
    }

    /**
     * @inheritDoc
     * @param string $UrlOfHostedWebsite
     */
    public function setUrlOfHostedWebsite(string $UrlOfHostedWebsite): void
    {
        // TODO: Implement setUrlOfHostedWebsite() method.
        $this->UrlOfHostedWebsite = $UrlOfHostedWebsite;
    }


    /**
     * @param string $type
     * @param object $documentRoot
     * //     */
    public static function board(string $type, object $documentRoot)
    {
        if ($type === 'message') {
            $root = Ui::element($documentRoot, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex'] . 'width:inherit;']);
            $item = Ui::element($root, 'item', ['class' => array_key_exists("success", $_GET) ? "box-message box-success box-shadow-light" : (array_key_exists("notify", $_GET) ? "box-message box-notify box-shadow-light" : "box-message box-danger box-shadow-light")]);
            Ui::element(Ui::element($item, 'symbol', ['class' => array_key_exists("success", $_GET) ? "box-success-symbol" : (array_key_exists("notify", $_GET) ? "box-notify-symbol" : "box-danger-symbol")]), 'i', ['class' => array_key_exists("success", $_GET) ? "fa fa-check" : (array_key_exists("notify", $_GET) ? "fa fa-i" : "fa fa-times")]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), Decryption::dynamic(array_key_exists("success", $_GET) ? $_GET["success"] : (array_key_exists("notify", $_GET) ? $_GET["notify"] : $_GET["error"])));


            /*_Debug::preOutput($_GET);
            _Debug::preOutput($this->request['arguments']);
            $message = array_shift($this->request['arguments']);
            $content = (count($this->request['arguments']) > 1) ? join("/", $this->request['arguments']) : join($this->request['arguments']);
            _Debug::preOutput($content);
            $root = Ui::element($documentRoot, 'message', ['class' => 'messageZone', 'style' => Ui::css['display-flex']]);
            $item = Ui::element($root, 'item', ['class' => ($message === "success") ? "box-message box-success box-shadow-light" : (($message === "notify") ? "box-message box-notify box-shadow-light" : "box-message box-danger box-shadow-light")]);
            Ui::element(Ui::element($item, 'symbol', ['class' => ($message === "success") ? "box-success-symbol" : (($message === "notify") ? "box-notify-symbol" : "box-danger-symbol")]), 'i', ['class' => ($message === "success") ? "fa fa-check" : (($message === "notify") ? "fa fa-i" : "fa fa-times")]);
            Ui::text(Ui::element($item, 'content', ['class' => 'notify-md-content']), Decryption::dynamic($content));
        */
        }

    }

    /**
     * @param array $options
     */
    public function display(array $options = []): void
    {
        if (count($options) > 0) {
            /*identify file load auto or manual the current file*/
            if (array_key_exists("load", $options) and _Array::value($options, "load") === "manual") {
                $this->template_load = "manual";
                if (array_key_exists("template_dir", $options)) {
                    $this->template_render_dir = (string)_Array::value($options, "template_dir");
                } else {
                    Firewall::runtimeFailure("Not Found", [
                        "debug" => ["file" => __FILE__, "location" => __METHOD__, "description" => "Invalid \$options parsed. template directory location not provided."],
                        "error" => ["description" => "Your requested file not found or deleted!!"]
                    ]);
                }
                if (array_key_exists("template_ext", $options)) {
                    $this->template_ext = (string)_Array::value($options, "template_ext");
                } else {
                    Firewall::runtimeFailure("Not Found", [
                        "debug" => ["file" => __FILE__, "location" => __METHOD__, "description" => "Invalid \$options parsed. template extension not provided."],
                        "error" => ["description" => "Your requested file not found or deleted!!"]
                    ]);
                }
            }
            /*identify use theme or not the current file*/
            if (array_key_exists("useTheme", $options) and _Array::value($options, "useTheme") === "no") {
                $this->template_use = "no";
            }
        }


        if (file_exists($this->loadTemplateFile())) {
            $this->compile();
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => ["file" => $this->loadTemplateFile(), "location" => $this->template_render_dir, "description" => $this->loadTemplateFile() . " not found."],
                "error" => ["description" => "Your requested file not found or deleted!!"]
            ]);
        }
    }

    /**
     * @return string
     */
    function loadTemplateFile(): string
    {
        return $this->template_render_dir . join("/", [_String::ucfirst($this->request["controller"]), $this->request["method"]]) . ".$this->template_ext";
    }

    private function compile()
    {

        if (is_dir($this->template_dir)){
            if (file_exists("$this->template_dir$this->template_name/template.php")) {
                include_once "$this->template_dir$this->template_name/template.php";
            } else {
                Firewall::runtimeFailure("Not Found", [
                    "debug" => [
                        "file" => "template.php",
                        "location" =>  "$this->template_dir$this->template_name/template.php",
                        "description" => "Template file not found"
                    ],
                    "error" => ["description" => "Your requested url is broken!!"]
                ]);
            }
        }

    }

    /**
     * @inheritDoc
     */
    public function assign(string $tpl_key, $tpl_value): array
    {
        // TODO: Implement assign() method.

        /*_Debug::preOutput(array_merge($this->variables, array($tpl_key => $tpl_value)));*/
        return $this->variables = array_merge($this->variables, array($tpl_key => $tpl_value));
    }
}