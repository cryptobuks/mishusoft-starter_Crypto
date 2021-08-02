<?php

namespace Mishusoft\Ema;

use Mishusoft\Http;
use Mishusoft\Http\Request;
use Mishusoft\Libraries\Runtime;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\BIOS;
use Mishusoft\System\Firewall;
use Mishusoft\System\Logger;
use Mishusoft\System\Memory;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\JSON;

Logger::write('Ema loader started');

Logger::write('Client request store in $redirection variable');
$prediction = new Request();


/*
 * We need to check Ema Root path
 * if exists this path,
 * The system will be execute ema applications.
 *
 * */

Logger::write(sprintf('Check %s directory existent.', Storage::emaPath()));
if (file_exists(Storage::emaPath()) === true) {
    Logger::write(sprintf('Found %s directory existent.', Storage::emaPath()));
    /*
     * We need to check Url Splitters (Built-In web interface) root path,
     * if exists this path,
     * The System will be execute all active splitters that is locate at <APP_DIRECTORY>/Ema/UrlSplitters
     * */
    $urlSplitterRootPath = Storage::emaPath().'UrlSplitters'.DS;
    Logger::write(sprintf('Check %s directory existent.', $urlSplitterRootPath));
    if (file_exists($urlSplitterRootPath) === true) {
        /*
         * Auto update splitters configurations
         * */
        $configs = [];
        Logger::write(sprintf('Count all exists files from %s directory.', $urlSplitterRootPath));
        if (count(FileSystem::list($urlSplitterRootPath, 'file')) > 0) {
            foreach (FileSystem::list($urlSplitterRootPath, 'file') as $filename) {
                if (pathinfo($filename, PATHINFO_EXTENSION) === 'json') {
                    $configs[] = JSON::decodeToArray(FileSystem::read($urlSplitterRootPath.$filename));
                }
            }

            array_multisort($configs, SORT_ASC);
            ksort($configs, SORT_ASC);


            Logger::write(sprintf('Remove old splitters config file from %s directory.', Storage::dataDriveStoragesPath()));
            FileSystem::remove(MPM::splittersFile());
            Logger::write(sprintf('Write new splitters config file in %s directory.', Storage::dataDriveStoragesPath()));
            FileSystem\Yaml::emitFile(MPM::splittersFile(), $configs);
        }

        /*
         * Load UrlSplitters.
         * */
        Logger::write(sprintf('Check splitters config file in %s directory.', Storage::dataDriveStoragesPath()));
        if (count(FileSystem\Yaml::parseFile(MPM::splittersFile())) > 0) {
            foreach (FileSystem\Yaml::parseFile(MPM::splittersFile()) as $splitter) {
                $requestedRoute = ArrayCollection::value($splitter, 'route');
                if (in_array(strtolower($prediction->getController()), $requestedRoute, true) === true) {
                    $requestedClassName = ArrayCollection::value($splitter, 'class');
                    $currentRequestedFile = sprintf('%s%s.php', $urlSplitterRootPath, $requestedClassName);
                    if (is_readable($currentRequestedFile) === true) {
                        Logger::write(sprintf('Load %s from %s.', $currentRequestedFile, $urlSplitterRootPath));
                        include_once $currentRequestedFile;
                        Logger::write(sprintf('Extract %s from %s.', $requestedClassName, $currentRequestedFile));
                        $urlSplitter = Preloader::getClassNamespaceFromPath($currentRequestedFile);
                        if (method_exists(new $urlSplitter(), Inflect::lower($prediction->getController())) === true) {
                            Logger::write(sprintf('Execute %s from %s.', $requestedClassName, $currentRequestedFile));
                            call_user_func(
                                [
                                    new $urlSplitter(),
                                    Inflect::lower($prediction->getController()),
                                ],
                                [
                                    'controller' => $prediction->getController(),
                                    'method' => $prediction->getMethod(),
                                    'arguments' => $prediction->getArguments(),
                                ]
                            );
                        } else {
                            Logger::write(
                                sprintf(
                                    'Not found %s form %s.',
                                    $urlSplitter . '::' . Inflect::lower($prediction->getController()),
                                    $currentRequestedFile
                                )
                            );
                            Firewall::runtimeFailure(
                                'Not Found',
                                [
                                    'debug' => [
                                        'file' => $urlSplitter . '::' . Inflect::lower($prediction->getController()),
                                        'location' => Http::browser()::getVisitedPage(),
                                        'description' => 'Your requested url not found!!',
                                    ],
                                    'error' => ['description' => 'Your requested url not found!!'],
                                ]
                            );
                        }//end if
                    } else {
                        Logger::write(sprintf('Not found %s.php from %s.', $requestedClassName, $urlSplitterRootPath));
                        Firewall::runtimeFailure(
                            'Not Found',
                            [
                                'debug' => [
                                    'file' => sprintf('%s%s.php', $urlSplitterRootPath, $requestedClassName),
                                    'location' => $urlSplitterRootPath,
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


    /*
     * We need to check Mishusoft DVO (Mishusoft-App) root path,
     * if exists this path,
     * The System will be executed applications that is located at <APP_DIRECTORY>/Ema/Mishusoft
     *
     * */

    $mishusoftAppPath = Storage::emaPath().'Mishusoft'.DS;
    $defaultPackage   = 'Main';
    Logger::write(sprintf('Check %s directory existent.', $mishusoftAppPath));
    if (file_exists($mishusoftAppPath) === true) {
        Logger::write(sprintf('Count all exists files from %s directory.', $mishusoftAppPath));
        $requestedHandleDirectory = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/';
        if (count(FileSystem::list($requestedHandleDirectory, 'file')) > 0) {
            foreach (FileSystem::list($requestedHandleDirectory, 'file') as $filename) {
                if (Inflect::lower(BIOS::getFilenameOnly($filename)) === Inflect::lower($prediction->getController())) {
                    $currentRequestedFile = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/'.$filename;
                    if (is_readable($currentRequestedFile) === true) {
                        Logger::write(sprintf('Load %s form %s directory.', $currentRequestedFile, $mishusoftAppPath));
                        include_once $currentRequestedFile;
                        Logger::write(sprintf('Extract class from %s.', $currentRequestedFile));
                        $urlHandler = Preloader::getClassNamespaceFromPath($currentRequestedFile);
                        Logger::write(sprintf('Execute class from %s.', $currentRequestedFile));
                        call_user_func(
                            [
                                new $urlHandler(),
                                'Response',
                            ],
                            [
                                'locale'     => $prediction->getLocale(),
                                'controller' => $prediction->getController(),
                                'method'     => $prediction->getMethod(),
                                'arguments'  => $prediction->getArguments(),
                            ]
                        );
                        exit();
                    }
                }//end if
            }//end foreach
        }//end if
    }//end if
}//end if

/*
 * Execute maintenance interface
 * we create an individual interface for special web interface
 * that is locate at <APP_SERVER_ADDR>/maintenance
 *
 * if the application which is default non-DVU (MVC Classic) package are under maintenance mode,
 * then following interface will be execute.
 *
 * this interface exclude maintenance and emergency pages
 */

if ((Memory::data('framework')->maintenance === true)
    && $prediction->getController() !== 'maintenance'
) {
    Runtime::redirect('maintenance');
}
