<?php

namespace Mishusoft\Drivers;

use Mishusoft\Authentication\Acl;
use Mishusoft\Base;
use Mishusoft\Exceptions;
use Mishusoft\Preloader;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;

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
        $this->registry         = Registry::getInstance();
        $this->registry->acl    =  new Acl();
        $this->acl              =  $this->registry->acl;
    }//end __construct()
    /**
     * @throws Exceptions\RuntimeException
     * @return mixed
     */
    protected function loadModel(string $model)
    {
        $modelClass      = $model.'ModelWidget';
        $widgetModelFile = Storage::applicationWidgetsPath().'Models'.DS.$modelClass.'.php';
        if (is_readable($widgetModelFile)) {
            include_once $widgetModelFile;
            $modelClass = Base::getClassNamespace($widgetModelFile);
            if (in_array($widgetModelFile, get_included_files())) {
                if (class_exists($modelClass, false)) {
                    return new $modelClass();
                }

                throw new Exceptions\RuntimeException("class $modelClass loading failed");
            }

            throw new Exceptions\RuntimeException($widgetModelFile.' inclusion failed');
        } else {
            throw new Exceptions\RuntimeException($widgetModelFile.' not found');
        }//end if
    }//end loadModel()
    /**
     * @throws Exceptions\RuntimeException\NotFoundException
     * @return bool|string
     */
    protected function render(string $menu, string $view, array $data = [], string $ext = 'phtml')
    {
        $widgetViewFile = Storage::applicationWidgetsPath().'Views'.DS.$menu.DS.$view.'.'.$ext;
        if (is_readable($widgetViewFile)) {
            if (FileSystem::fileExt($widgetViewFile) === 'php') {
                return $widgetViewFile;
            }

            ob_start();
            extract($data, EXTR_OVERWRITE);
            include_once $widgetViewFile;
            return ob_get_clean();
        }
        throw new Exceptions\RuntimeException\NotFoundException($widgetViewFile. ' not found');
    }//end __destruct()
}//end class
