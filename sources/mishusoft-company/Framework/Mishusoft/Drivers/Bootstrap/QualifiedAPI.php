<?php

namespace Mishusoft\Drivers\Bootstrap;

use Mishusoft\Base;
use Mishusoft\Exceptions;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\MPM;
use Mishusoft\Storage;
use Mishusoft\System\Log;
use Mishusoft\Utility\ArrayCollection as Arr;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Inflect;

class QualifiedAPI
{

    /**
     * @param Http\Request\QualifiedAPI $request
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function run(Http\Request\QualifiedAPI $request): void
    {
        $rootDirectories = [];

        /*
         * We need to check Embedded Web Url Root path
         * if exists this path,
         * The system will be executed EmbeddedWebUrl applications.
         *
         * */

        //verify core directory
        if (file_exists(Storage::qualifiedAPIRoutesCoreDirectory()) === true) {
            $rootDirectories[] = Storage::qualifiedAPIRoutesCoreDirectory();
        }
        //verify user defined directory
        if (file_exists(Storage::qualifiedAPIRoutesDirectory()) === true) {
            $rootDirectories[] = Storage::qualifiedAPIRoutesDirectory();
        }

        if (count($rootDirectories) > 0) {
            foreach ($rootDirectories as $rootDirectory) {
                Log::info(sprintf('Check %s directory existent.', $rootDirectory));
                if (is_readable($rootDirectory) === true) {
                    Log::info(sprintf('%s directory is readable.', $rootDirectory));
                    /*
                     * We need to check Embedded Web Url (Built-In web interface) root path,
                     * if exists this path,
                     * The System will be executed all active splitters
                     * that is located at <APP_DIRECTORY>/embeddedWebUrlDirectory
                     * */
                    MPM\Common::autoUpdateQualifiedAPIRoutes($rootDirectory);

                    /*
                     * Load API urls.
                     * */
                    Log::info(sprintf('Check routes file in %s directory.', dirname(self::routesFile())));
                    if (count(Storage\FileSystem\Yaml::parseFile(self::routesFile())) > 0) {
                        foreach (Storage\FileSystem\Yaml::parseFile(self::routesFile()) as $routeDetails) {
                            if (is_array($routeDetails) && count($routeDetails) > 0) {
                                $requestedRoute = Arr::value($routeDetails, 'route');
                                if (in_array(strtolower($request->getController()), $requestedRoute, true) === true) {
                                    $requestedClassName = Arr::value($routeDetails, 'class');
                                    $requestedRouteFile = self::currentFile($rootDirectory, $requestedClassName);


                                    if (is_readable($requestedRouteFile) === true) {
                                        Log::info(sprintf('Load %s from %s.', $requestedRouteFile, $rootDirectory));
                                        include_once self::currentFile($rootDirectory, $requestedClassName);

                                        Log::info(sprintf(
                                            'Extract %1$s from %2$s.',
                                            $requestedClassName,
                                            $requestedRouteFile
                                        ));
                                        $urlSplitter = Base::getClassNamespace($requestedRouteFile);
                                        $methodName = Inflect::lower($request->getController());
                                        $methodNameFull = sprintf(
                                            '%1$s::%2$s',
                                            $urlSplitter,
                                            Inflect::lower($request->getController())
                                        );
                                        $arguments = [
                                            'controller' => $request->getController(),
                                            'method' => $request->getMethod(),
                                            'arguments' => $request->getArguments(),
                                        ];

                                        if (method_exists(new $urlSplitter(), $methodName) === true) {
                                            Log::info(sprintf(
                                                'Execute %1$s from %2$s.',
                                                $requestedClassName,
                                                $requestedRouteFile
                                            ));
                                            call_user_func([new $urlSplitter(), $methodName,], $arguments);
                                            //close framework
                                            Framework::terminate();
                                        } else {
                                            Log::info(sprintf(
                                                'Not found %1$s form %2$s.',
                                                $methodNameFull,
                                                $requestedRouteFile
                                            ));
                                            throw new Exceptions\RuntimeException\NotFoundException(
                                                sprintf(
                                                    'Not found %1$s form %2$s.',
                                                    $methodNameFull,
                                                    $requestedRouteFile
                                                )
                                            );
                                        }//end if
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
                                }//end if
                            }
                        }//end foreach
                    }//end if
                }//end if
            }
        }

        //Framework::terminate();
    }


    /**
     * @param string $directory
     * @param string $requestedClassName
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
        return MPM\Common::qualifiedAPIRoutesFile();
    }
}
