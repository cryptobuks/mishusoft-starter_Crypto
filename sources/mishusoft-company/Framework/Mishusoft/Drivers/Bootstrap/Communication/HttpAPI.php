<?php

    namespace Mishusoft\Drivers\Bootstrap\Communication;

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
         * @throws Exceptions\PermissionRequiredException
         * @throws Exceptions\RuntimeException
         * @throws Exceptions\RuntimeException\NotFoundException
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
                    $routes = parse_msf_file(self::routesFile());
                    // pp($routes);
                    if (count($routes) > 0) {
                        foreach ($routes as $routeDetails) {
                            if (is_array($routeDetails) && count($routeDetails) > 0) {
                                $requestedGroup = array_value($routeDetails, 'group');
                                $requestedRoute = array_value($routeDetails, 'route');

                                if ($requestedGroup === $request->getController() && in_array(strtolower($request->getMethod()), $requestedRoute, true)) {
                                    $requestedClassName = array_value($routeDetails, 'class');
                                    $requestedRouteFile = self::currentFile($rootDirectory, $requestedClassName);

                                    if (is_readable($requestedRouteFile)) {
                                        Log::info(sprintf('Load %1$s from %2$s.', $requestedRouteFile, $rootDirectory));
                                        include_once self::currentFile($rootDirectory, $requestedClassName);

                                        // extract route PSR-4 classname from file name
                                        Log::info(
                                            sprintf(
                                                'Extract %1$s from %2$s.',
                                                $requestedClassName,
                                                $requestedRouteFile
                                            )
                                        );
                                        $routeClass = get_namespace_from_filename($requestedRouteFile);

                                        if (class_exists($routeClass)) {
                                            $methodName        = strtolower($request->getMethod());
                                            $methodNameFull    = sprintf(
                                                '%1$s::%2$s',
                                                $routeClass,
                                                strtolower($request->getController())
                                            );
                                            $requestedElements = [
                                                'controller' => $request->getController(),
                                                'method'     => $request->getMethod(),
                                                'arguments'  => $request->getArguments(),
                                            ];

                                            // create an object from route class,
                                            // then check method existent in current class
                                            // and fire action with instanced object
                                            $routeClassInstance = new $routeClass();
                                            if (method_exists($routeClassInstance, $methodName)) {
                                                Log::info(
                                                    sprintf(
                                                        'Execute %1$s from %2$s.',
                                                        $requestedClassName,
                                                        $requestedRouteFile
                                                    )
                                                );
                                                $routeClassInstance->$methodName($requestedElements);
                                                // call_user_func([$route, $methodName,], $arguments);
                                            } else {
                                                Log::info(
                                                    sprintf(
                                                        'Not found %1$s form %2$s.',
                                                        $methodNameFull,
                                                        $requestedRouteFile
                                                    )
                                                );
                                                throw new Exceptions\RuntimeException\NotFoundException(
                                                    sprintf(
                                                        'Not found %1$s form %2$s.',
                                                        $methodNameFull,
                                                        $requestedRouteFile
                                                    )
                                                );
                                            }//end if
                                        }
                                    } else {
                                        Log::info(
                                            sprintf(
                                                'Not found %1$s.php from %2$s.',
                                                $requestedClassName,
                                                $rootDirectory
                                            )
                                        );
                                        throw new Exceptions\RuntimeException\NotFoundException(
                                            sprintf(
                                                'Not found %1$s.php from %2$s.',
                                                $requestedClassName,
                                                $rootDirectory
                                            )
                                        );
                                    }//end if

                                    // close loop, if controller (route) info match with configuration
                                    break;
                                }//end if
                            }//end if
                        }
                    }//end foreach
                }
            }
        }


        /**
         * @param string $directory
         * @param string $requestedClassName
         *
         * @return string
         */
        private static function currentFile(string $directory, string $requestedClassName): string
        {
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
