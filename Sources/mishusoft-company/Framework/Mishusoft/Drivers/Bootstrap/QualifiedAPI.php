<?php

namespace Mishusoft\Drivers\Bootstrap;

use GeoIp2\Exception\AddressNotFoundException;
use JsonException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Exceptions;
use Mishusoft\Http;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\System\Log;
use Mishusoft\Utility\ArrayCollection as Arr;
use Mishusoft\Utility\Inflect;

class QualifiedAPI
{

    /**
     * @throws AddressNotFoundException
     * @throws JsonException
     * @throws InvalidDatabaseException
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function run(Http\Request $request):void
    {
        Log::info('Request store in $redirection variable');
        $rootDirectory = self::routesDirectory();

        /*
         * We need to check Embedded Web Url Root path
         * if exists this path,
         * The system will be executed EmbeddedWebUrl applications.
         *
         * */

        Log::info(sprintf('Check %s directory existent.', $rootDirectory));
        if (file_exists($rootDirectory) === true) {
            Log::info(sprintf('Found %s directory existent.', $rootDirectory));
            /*
             * We need to check Embedded Web Url (Built-In web interface) root path,
             * if exists this path,
             * The System will be executed all active splitters
             * that is located at <APP_DIRECTORY>/embeddedWebUrlDirectory
             * */
            MPM::autoUpdateQualifiedAPIRoutes();

            /*
             * Load UrlSplitters.
             * */
            Log::info(sprintf('Check routes file in %s directory.', dirname(self::routesFile())));
            if (count(Storage\FileSystem\Yaml::parseFile(self::routesFile())) > 0) {
                foreach (Storage\FileSystem\Yaml::parseFile(self::routesFile()) as $routeFile) {
                    $requestedRoute = Arr::value($routeFile, 'route');

                    if (in_array(strtolower($request->getController()), $requestedRoute, true) === true) {
                        $requestedClassName = Arr::value($routeFile, 'class');
                        $requestedFile = self::currentFile($requestedClassName);

                        if (is_readable($requestedFile) === true) {
                            Log::info(sprintf('Load %s from %s.', $requestedFile, $rootDirectory));
                            include_once self::currentFile($requestedClassName);

                            Log::info(sprintf('Extract %s from %s.', $requestedClassName, $requestedFile));
                            $urlSplitter = Preloader::getClassNamespace($requestedFile);
                            $methodName = Inflect::lower($request->getController());
                            $methodNameFull = $urlSplitter . '::' . Inflect::lower($request->getController());
                            $arguments = [
                                'controller' => $request->getController(),
                                'method' => $request->getMethod(),
                                'arguments' => $request->getArguments(),
                            ];

                            if (method_exists(new $urlSplitter(), $methodName) === true) {
                                Log::info(sprintf('Execute %s from %s.', $requestedClassName, $requestedFile));
                                call_user_func([new $urlSplitter(), $methodName,], $arguments);
                            } else {
                                Log::info(sprintf('Not found %s form %s.', $methodNameFull, $requestedFile));
                                Http\Runtime::abort(
                                    Http\ErrorsData::NOT_FOUND,
                                    'debug=file='.$methodNameFull,
                                    'debug=location='.Http::browser()::getVisitedPage()
                                );
                            }//end if
                        } else {
                            Log::info(
                                sprintf(
                                    'Not found %s.php from %s.',
                                    $requestedClassName,
                                    $rootDirectory
                                )
                            );
                            Http\Runtime::abort(
                                Http\ErrorsData::NOT_FOUND,
                                'debug=file='.$requestedFile,
                                'debug=location='.$rootDirectory,
                                'debug=description=Required file is not readable!!'
                            );
                        }//end if
                    }//end if
                }//end foreach
            }//end if
        }//end if
    }


    /**
     * @param string $requestedClassName
     * @return string
     */
    private static function currentFile(string $requestedClassName):string
    {
        return sprintf('%s%s.php', self::routesDirectory(), $requestedClassName);
    }

    /**
     * @return string
     */
    private static function routesDirectory():string
    {
        return Storage::qualifiedAPIRoutesDirectory();
    }

    /**
     * @return string
     */
    private static function routesFile():string
    {
        return MPM::qualifiedAPIRoutesFile();
    }
}
