<?php

namespace Mishusoft\Drivers\Bootstrap;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Exceptions;
use Mishusoft\Http;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\System\Log;
use Mishusoft\System\Memory;

class Classic
{

    /**
     * @param Http\Request $prediction
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function run(Http\Request $prediction): void
    {
        $module         = $prediction->getModule();
        $controller     = $prediction->getController();
        $method         = $prediction->getMethod();
        $args           = $prediction->getArguments();
        $rootController = '';

        if (!empty($module)) {
            $rootModule = MPM::moduleRootController($module);
            if (file_exists($rootModule) && is_readable($rootModule)) {
                include_once $rootModule;
                $rootController = MPM::runtimeRootController($controller, $module);
            } else {
                throw new Exceptions\RuntimeException\NotFoundException(
                    "The controller ($module) of your request url is not found"
                );
            }
        } else {
            $rootController = MPM::runtimeRootController($controller);
        }//end if

        if (file_exists($rootController) && is_readable($rootController)) {
            include_once $rootController;
            $controller = Preloader::getClassNamespace($rootController);
            $controller = new $controller;

            if (is_callable([$controller, $method])) {
                $method = $prediction->getMethod();
            } else {
                $method = Memory::Data()->preset->directoryIndex;
            }

            if (isset($args)) {
                Log::info(implode([
                    "We execute $method(", implode(',', $args), ') from',
                    Preloader::getClassNamespace($rootController),
                    ' by fetching url: ', Http::browser()->getURLPath(),
                ]));
                call_user_func_array([$controller, $method], $args);
            } else {
                Log::info(implode([
                    "We execute $method from",
                    Preloader::getClassNamespace($rootController),
                    ' by fetching url: ', Http::browser()->getURLPath(),
                ]));
                //$controller->$method();
                call_user_func([$controller, $method]);
            }
        } else {
            Http\Runtime::abort(
                Http\Errors::NOT_FOUND,
                'debug=file='.Http::browser()->getURLPath(),
                'debug=location='.Http::browser()::getVisitedPage(),
            );
        }//end if
    }//end run()
}//end class
