<?php

namespace Mishusoft\Drivers\Bootstrap;

use Mishusoft\Http;
use Mishusoft\Http\Browser;
use Mishusoft\Http\Request;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\System\Log;
use Mishusoft\System\Memory;
use Mishusoft\System\Firewall;

class Classic
{

    /**
     * @param Request $prediction
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
    public static function run(Request $prediction): void
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
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file'        => $module,
                            'location'    => dirname($rootModule),
                            'description' => 'The controller of your request url is not found!!',
                        ],
                        'error' => ['description' => 'Your requested url is broken!!'],
                    ]
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
                    ' by fetching url: ', (new Browser())->getURLPath(),
                ]));
                call_user_func_array([$controller, $method], $args);
            } else {
                Log::info(implode([
                    "We execute $method from",
                    Preloader::getClassNamespace($rootController),
                    ' by fetching url: ', (new Browser())->getURLPath(),
                ]));
                call_user_func([$controller, $method]);
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => Http::browser()->getURLPath(),
                        'location'    => Http::browser()::getVisitedPage(),
                        'description' => 'Your requested url not found!!',
                    ],
                    'error' => ['description' => 'Your requested url not found!!'],
                ]
            );
        }//end if
    }//end run()
}//end class
