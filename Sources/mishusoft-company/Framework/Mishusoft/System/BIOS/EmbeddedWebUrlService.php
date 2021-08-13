<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Http;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\System\Firewall;
use Mishusoft\System\Log;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;

class EmbeddedWebUrlService
{

    /**
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
    public static function run():void
    {
        Log::info('Request store in $redirection variable');
        $request = new Http\Request();
        $rootDirectory = Storage::embeddedWebUrlDirectory();

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
            MPM::autoUpdateEmbeddedWebUrl();

            //print_r($request, false);exit();

            /*
             * Load UrlSplitters.
             * */
            Log::info(sprintf('Check splitters config file in %s directory.', Storage::dataDriveStoragesPath()));
            if (count(Storage\FileSystem\Yaml::parseFile(MPM::embeddedWebUrlListFile())) > 0) {
                foreach (Storage\FileSystem\Yaml::parseFile(MPM::embeddedWebUrlListFile()) as $splitter) {
                    $requestedRoute = ArrayCollection::value($splitter, 'route');
                    if (in_array(strtolower($request->getController()), $requestedRoute, true) === true) {
                        $requestedClassName = ArrayCollection::value($splitter, 'class');
                        $currentRequestedFile = sprintf(
                            '%s%s.php',
                            $rootDirectory,
                            $requestedClassName
                        );
                        if (is_readable($currentRequestedFile) === true) {
                            Log::info(
                                sprintf('Load %s from %s.', $currentRequestedFile, $rootDirectory)
                            );
                            include_once $currentRequestedFile;
                            Log::info(sprintf('Extract %s from %s.', $requestedClassName, $currentRequestedFile));
                            $urlSplitter = Preloader::getClassNamespace($currentRequestedFile);
                            if (method_exists(new $urlSplitter(), Inflect::lower($request->getController())) === true) {
                                Log::info(
                                    sprintf('Execute %s from %s.', $requestedClassName, $currentRequestedFile)
                                );
                                call_user_func(
                                    [
                                        new $urlSplitter(),
                                        Inflect::lower($request->getController()),
                                    ],
                                    [
                                        'controller' => $request->getController(),
                                        'method' => $request->getMethod(),
                                        'arguments' => $request->getArguments(),
                                    ]
                                );
                            } else {
                                Log::info(
                                    sprintf(
                                        'Not found %s form %s.',
                                        $urlSplitter . '::' . Inflect::lower($request->getController()),
                                        $currentRequestedFile
                                    )
                                );
                                Firewall::runtimeFailure(
                                    'Not Found',
                                    [
                                        'debug' => [
                                            'file' => $urlSplitter . '::' . Inflect::lower($request->getController()),
                                            'location' => Http::browser()::getVisitedPage(),
                                            'description' => 'Your requested url not found!!',
                                        ],
                                        'error' => ['description' => 'Your requested url not found!!'],
                                    ]
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
                            Firewall::runtimeFailure(
                                'Not Found',
                                [
                                    'debug' => [
                                        'file' => sprintf('%s%s.php', $rootDirectory, $requestedClassName),
                                        'location' => $rootDirectory,
                                        'description' => 'Required file is not readable!!',
                                    ],
                                    'error' => ['description' => 'Your requested url not found!!'],
                                ]
                            );
                        }//end if

                        exit();
                    }//end if
                }//end foreach
            }//end if
        }//end if
    }
}
