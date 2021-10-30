<?php

namespace Mishusoft\Drivers\Bootstrap\Communication;

use Mishusoft\Base;
use Mishusoft\Cli\Request;
use Mishusoft\Exceptions;
use Mishusoft\MPM;

class Cli
{
    /**
     * @throws Exceptions\HttpException\HttpRequestException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function run(Request $request): void
    {
        if (IS_CLI) {
            $controller     = $request->getController();
            $method         = $request->getMethod();
            $args           = $request->getArguments();

            $rootController = MPM\Cli::runtimeRootController($controller);

            if (file_exists($rootController) && is_readable($rootController)) {
                include_once $rootController;
                $controller = Base::getClassNamespace($rootController);
                $controller = new $controller();

                $method = is_callable([$controller, $method]) ? $request->getMethod() : 'run';

                if (isset($args)) {
                    call_user_func_array([$controller, $method], $args);
                } else {
                    $controller->$method();
                    //call_user_func([$controller, $method]);
                }
            } else {
                throw new Exceptions\RuntimeException\NotFoundException($rootController.' not found');
            }//end if
        } else {
            throw new Exceptions\HttpException\HttpRequestException('Bad request');
        }
    }
}
