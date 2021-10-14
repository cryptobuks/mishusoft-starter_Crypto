<?php

namespace Mishusoft\Drivers\Bootstrap;

use Mishusoft\Base;
use Mishusoft\Exceptions;
use Mishusoft\Http;
use Mishusoft\MPM;
use Mishusoft\Registry;
use Mishusoft\System\Memory;

class Classic
{

    /**
     * @param Http\Request\Classic $request
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     * @throws \JsonException
     */
    public static function run(Http\Request\Classic $request): void
    {
        $module         = $request->getModule();
        $controller     = $request->getController();
        $method         = $request->getMethod();
        $args           = $request->getArguments();
        $rootController = '';

        if (!empty($module)) {
            $rootModule = MPM\Classic::moduleRootController($module);
            if (file_exists($rootModule) && is_readable($rootModule)) {
                include_once $rootModule;
                $rootController = MPM\Classic::runtimeRootController($controller, $module);
            } else {
                throw new Exceptions\RuntimeException\NotFoundException(
                    "The controller ($module) of your request url is not found"
                );
            }
        } else {
            $rootController = MPM\Classic::runtimeRootController($controller);
        }//end if

        if (file_exists($rootController) && is_readable($rootController)) {
            include_once $rootController;
            $controller = Base::getClassNamespace($rootController);
            $controller = new $controller;

            if (is_callable([$controller, $method])) {
                $method = $request->getMethod();
            } else {
                $method = Memory::Data()->preset->directoryIndex;
            }

            if (isset($args)) {
                call_user_func_array([$controller, $method], $args);
            } else {
                $controller->$method();
                //call_user_func([$controller, $method]);
            }
        } else {
            throw new Exceptions\RuntimeException\NotFoundException(
                Registry::Browser()->getURLPath(). " not found"
            );
        }//end if
    }//end run()
}//end class
