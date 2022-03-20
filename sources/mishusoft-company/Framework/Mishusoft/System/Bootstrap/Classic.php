<?php

    namespace Mishusoft\System\Bootstrap;

    use Mishusoft\Exceptions;
    use Mishusoft\MPM;
    use Mishusoft\System\Core\BootstrapCore;
    use Mishusoft\System\Core\RequestCore;
    use Mishusoft\System\Framework;
    use Mishusoft\System\Memory;

    class Classic extends BootstrapCore
    {
        /**
         * @param RequestCore $request
         *
         * @throws Exceptions\ErrorException
         * @throws Exceptions\LogicException\InvalidArgumentException
         * @throws Exceptions\PermissionRequiredException
         * @throws Exceptions\RuntimeException
         * @throws Exceptions\RuntimeException\NotFoundException
         */
        public static function run(RequestCore $request): void
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
                $controller = get_namespace_from_filename($rootController);
                $controller = new $controller();

                if (is_callable([$controller, $method])) {
                    $method = $request->getMethod();
                } else {
                    $method = Memory::getOption('preset.directoryIndex');
                }

                if (is_array($args) && count($args) > 0) {
                    call_user_func_array([$controller, $method], $args);
                } else {
                    $controller->$method();
                    //call_user_func([$controller, $method]);
                }
                Framework::terminate();
            } else {
                throw new Exceptions\RuntimeException\NotFoundException(get_http_request_uri() . " not found");
            }//end if
        }//end run()
    }//end class
