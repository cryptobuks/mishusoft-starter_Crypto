<?php

namespace Mishusoft\Framework\Drivers;


use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Interfaces\Drivers\WidgetInterface;

abstract class Widget implements WidgetInterface
{
    private Registry $registry;
    protected $acl;

    /**
     * Widget constructor.
     */
    public function __construct()
    {
        $this->registry = Registry::getInstance();
        $this->acl = $this->registry->acl;
    }

    /**
     * @param string $model
     * @return mixed
     */
    protected function loadModel(string $model)
    {
        $modelClass = $model . 'ModelWidget';
        $widgetModelFile = MS_WIDGETS_PATH . 'Models' . DS . $modelClass . '.php';
        if (is_readable($widgetModelFile)) {
            require_once $widgetModelFile;
            $modelClass = Preloader::getClassNamespaceFromPath($widgetModelFile);
            if (class_exists($modelClass)) {
                return new $modelClass;
            }
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => $modelClass,
                    "location" => $widgetModelFile,
                    "description" => "Model class not found or Model class loading error."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
    }

    /**
     * @param string $menu
     * @param string $view
     * @param array $data
     * @param string $ext
     * @return false|string
     */
    protected function render(string $menu, string $view, array $data = array(), string $ext = 'phtml')
    {
        $widgetViewFile = join([MS_WIDGETS_PATH , 'Views' . DS . "$menu" . DS . $view . ".$ext"]);
        if (is_readable($widgetViewFile)) {
            if(pathinfo($widgetViewFile,PATHINFO_EXTENSION)==="php"){
                return $widgetViewFile;
            } else {
                ob_start();
                extract($data);
                include_once $widgetViewFile;
                $content = ob_get_contents();
                ob_end_clean();
                return $content;
            }
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => "$menu ($view:$widgetViewFile)",
                    "location" => $widgetViewFile,
                    "description" => "Widget's views content not readable or found."
                ],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
        }
        return "";
    }

    function __destruct()
    {

    }
}