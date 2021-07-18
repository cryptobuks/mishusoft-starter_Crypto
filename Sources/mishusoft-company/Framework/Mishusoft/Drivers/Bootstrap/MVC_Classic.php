<?php

namespace Mishusoft\Framework\Drivers\Bootstrap;

use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\ClientRequest;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\Logger;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Firewall;

class MVC_Classic
{


    public static function run(ClientRequest $prediction): void
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
            $controller = Preloader::getClassNamespaceFromPath($rootController);
            $controller = new $controller;

            if (is_callable([$controller, $method])) {
                $method = $prediction->getMethod();
            } else {
                $method = Memory::Data()->preset->directoryIndex;
            }

            if (isset($args)) {
                Logger::write(join(["We execute $method(", join(',', $args), ') from', Preloader::getClassNamespaceFromPath($rootController), ' by fetching url: ', (new Browser())->getURLPath()]));
                call_user_func_array([$controller, $method], $args);
            } else {
                Logger::write(join(["We execute $method from", Preloader::getClassNamespaceFromPath($rootController), ' by fetching url: ', (new Browser())->getURLPath()]));
                call_user_func([$controller, $method]);
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => (new Browser())->getURLPath(),
                        'location'    => (new Browser())->getVisitedPage(),
                        'description' => 'Your requested url not found!!',
                    ],
                    'error' => ['description' => 'Your requested url not found!!'],
                ]
            );
        }//end if

    }//end run()


}//end class
