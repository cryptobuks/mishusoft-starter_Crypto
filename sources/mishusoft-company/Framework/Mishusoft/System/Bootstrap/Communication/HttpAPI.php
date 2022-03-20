<?php

    namespace Mishusoft\System\Bootstrap\Communication;

    use Mishusoft\Exceptions;
    use Mishusoft\MPM;
    use Mishusoft\System\Core\BootstrapCore;
    use Mishusoft\System\Core\RequestCore;
    use Mishusoft\System\Log;

    class HttpAPI extends BootstrapCore
    {
        /**
         * @param RequestCore $request
         *
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function run(RequestCore $request): void
        {
            $rootDirectories = MPM\Common::allHttpCommunicationDirectories();
            MPM\Common::checkUpdateAndPermissions($rootDirectories);

            // pp($rootDirectories);

            // fire action for every http communication directory
            if (count($rootDirectories) > 0) {
                foreach ($rootDirectories as $rootDirectory) {
                    Log::info(sprintf('Check %s directory existent.', $rootDirectory));

                    /*
                     * Load API urls.
                     * */
                    Log::info(sprintf('Check routes file in %s directory.', dirname(self::routesFile())));

                    // load routes list from configuration file
                    $routes = MPM\Common::getRoutes();
                    if (array_key_exists($request->getController(), $routes)) {
                        $requestedRouteDetails = array_value($routes, $request->getController());
                        $requestedRoute        = array_value($requestedRouteDetails, 'route');

                        $requestedClassName = array_value($requestedRouteDetails, 'class');
                        $requestedRouteFile = self::currentFile($rootDirectory, $requestedClassName);

                        if (is_readable($requestedRouteFile)) {
                            Log::info(sprintf('Load %1$s from %2$s.', $requestedRouteFile, $rootDirectory));
                            include_once self::currentFile($rootDirectory, $requestedClassName);

                            $routeClass = get_namespace_from_filename($requestedRouteFile);
                            if (class_exists($routeClass)) {
                                // create an object from route class,
                                // then check method existent in current class
                                // and fire action with instanced object
                                call_user_func([new $routeClass($request), 'run']);
                            }
                        } else {
                            throw new Exceptions\RuntimeException\NotFoundException(
                                sprintf(
                                    'Not found %1$s.php from %2$s.',
                                    $requestedClassName,
                                    $rootDirectory
                                )
                            );
                        }//end if
                        break;
                    }
                }//end foreach
            }
        }


        /**
         * @param string $directory
         * @param string $requestedClassName
         *
         * @return string
         */
        private static function currentFile(
            string $directory,
            string $requestedClassName
        ): string {
            return sprintf('%1$s%2$s.php', $directory, $requestedClassName);
        }

        /**
         * @return string
         */
        private static function routesFile(): string
        {
            return MPM\Common::httpAPIRoutesFile();
        }
    }
