<?php

    namespace Mishusoft\System\Bootstrap\Communication;

    use Mishusoft\Exceptions;
    use Mishusoft\MPM;
    use Mishusoft\System\Core\BootstrapCore;
    use Mishusoft\System\Core\RequestCore;

    class Cli extends BootstrapCore
    {
        /**
         * @param RequestCore $request
         *
         * @throws Exceptions\HttpException\HttpRequestException
         * @throws Exceptions\RuntimeException\NotFoundException
         */
        public static function run(RequestCore $request): void
        {
            if (PHP_SAPI === "cli") {
                $controller = $request->getController();
                $method     = $request->getMethod();
                $args       = $request->getArguments();

                $rootController = MPM\Cli::runtimeRootController($controller);

                if (file_exists($rootController) && is_readable($rootController)) {
                    include_once $rootController;
                    $controller = get_namespace_from_filename($rootController);
                    $controller = new $controller();

                    if (is_callable([$controller, $method])) {
                        $method = $request->getMethod();
                    } else {
                        $method = 'run';
                    }

                    if (is_array($args) && count($args) > 0) {
                        call_user_func_array([$controller, $method], $args);
                    } else {
                        //$controller->$method();
                        call_user_func([$controller, $method]);
                    }
                } else {
                    throw new Exceptions\RuntimeException\NotFoundException($rootController . ' not found');
                }//end if
            } else {
                throw new Exceptions\HttpException\HttpRequestException('Bad request');
            }
        }
    }
