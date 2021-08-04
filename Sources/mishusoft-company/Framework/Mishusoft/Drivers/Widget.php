<?php

namespace Mishusoft\Drivers;

use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Ui\Firewall;

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
     * @param string $model
     * @return mixed
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function loadModel(string $model): mixed
    {
        $modelClass      = $model.'ModelWidget';
        $widgetModelFile = Storage::applicationWidgetsPath().'Models'.DS.$modelClass.'.php';
        if (is_readable($widgetModelFile) === true) {
            include_once $widgetModelFile;
            $modelClass = Preloader::getClassNamespaceFromPath($widgetModelFile);
            if (in_array($widgetModelFile, get_included_files()) === true) {
                if (class_exists($modelClass, false) === true) {
                    return new $modelClass;
                }

                throw new \Mishusoft\Exceptions\RuntimeException("class $modelClass loading failed");
            }

            throw new \Mishusoft\Exceptions\RuntimeException($widgetModelFile.' inclusion failed');
        } else {
            throw new \Mishusoft\Exceptions\RuntimeException($widgetModelFile.' not found');
        }//end if
    }//end loadModel()


    /**
     * @param string $menu
     * @param string $view
     * @param array $data
     * @param string $ext
     * @return false|string
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function render(string $menu, string $view, array $data = [], string $ext = 'phtml'): bool|string
    {
        $widgetViewFile = Storage::applicationWidgetsPath().'Views'.DS.$menu.DS.$view.'.'.$ext;
        if (is_readable($widgetViewFile) === true) {
            if (FileSystem::fileExt($widgetViewFile) === 'php') {
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
