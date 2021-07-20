<?php

namespace Mishusoft\Drivers;


use Mishusoft\FileSystem;
use Mishusoft\Preloader;
use Mishusoft\System\Firewall;
use Mishusoft\Utility\Debug;
use Mishusoft\Drivers\WidgetInterface;
use RuntimeException;

abstract class Widget implements WidgetInterface
{

    /**
     * @var Registry
     */
    private Registry $registry;

    protected mixed $acl;


    /**
     * Widget constructor.
     */
    public function __construct()
    {
        $this->registry = Registry::getInstance();
        $this->acl      = $this->registry->acl;

    }//end __construct()


    /**
     * @param  string $model
     * @return mixed
     */
    protected function loadModel(string $model): mixed
    {
        $modelClass      = $model.'ModelWidget';
        $widgetModelFile = MS_WIDGETS_PATH.'Models'.DS.$modelClass.'.php';
        _Debug::preOutput($widgetModelFile);
        // _Debug::preOutput(debug_backtrace());
        if (is_readable($widgetModelFile) === true) {
            include_once $widgetModelFile;
            $modelClass = Preloader::getClassNamespaceFromPath($widgetModelFile);
            _Debug::preOutput($modelClass);
            _Debug::preOutput(get_included_files());
            if (in_array($widgetModelFile, get_included_files()) === true) {
                if (class_exists($modelClass, false) === true) {
                    _Debug::preOutput("class $modelClass loading");
                    _Debug::preOutput(new $modelClass);
                    return new $modelClass;
                }

                _Debug::preOutput("class $modelClass loading failed");
                throw new RuntimeException("class $modelClass loading failed");
            }

            _Debug::preOutput("$widgetModelFile inclusion failed.");
            throw new RuntimeException($widgetModelFile.' inclusion failed');
        } else {
            throw new RuntimeException($widgetModelFile.' not found');
        }//end if

    }//end loadModel()


    /**
     * @param  string $menu
     * @param  string $view
     * @param  array  $data
     * @param  string $ext
     * @return false|string
     */
    protected function render(string $menu, string $view, array $data=[], string $ext='phtml'): bool|string
    {
        $widgetViewFile = MS_WIDGETS_PATH.'Views'.DS.$menu.DS.$view.'.'.$ext;
        if (is_readable($widgetViewFile) === true) {
            if (FileSystem::getFileExt($widgetViewFile) === 'php') {
                return $widgetViewFile;
            }

            ob_start();
            extract($data, EXTR_OVERWRITE);
            include_once $widgetViewFile;
            return ob_get_clean();
        }

        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => "$menu ($view:$widgetViewFile)",
                    'location'    => $widgetViewFile,
                    'description' => "Widget's views content not readable or found.",
                ],
                'error' => ['description' => 'Your requested url is broken!!'],
            ]
        );
        return '';

    }//end render()


    /**
     *
     */
    public function __destruct()
    {

    }//end __destruct()


}//end class
