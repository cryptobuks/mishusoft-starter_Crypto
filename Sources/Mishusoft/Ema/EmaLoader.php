<?php

namespace Mishusoft\Ema;

use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\ClientRequest;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\BIOS;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Logger;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Libraries\Runtime;

Logger::write('Ema loader started');

Logger::write('Client request store in $rediection variable');
$prediction = new ClientRequest();


/*
 * We need to check Ema Root path
 * if exists this path,
 * The system will be execute ema applications.
 *
 * */
$emaRootPath = PHP_RUNTIME_SYSTEM_PATH.'Ema'.DIRECTORY_SEPARATOR;

Logger::write(sprintf('Check %s directory existent.', $emaRootPath));
if (file_exists($emaRootPath) === true) {
    Logger::write(sprintf('Found %s directory existent.', $emaRootPath));
    /*
     * We need to check Url Splitters (Built-In web interface) root path,
     * if exists this path,
     * The System will be execute all active splitters that is locate at <APP_DIRECTORY>/Ema/UrlSplitters
     * */
    $urlSplitterRootPath = $emaRootPath.'UrlSplitters'.DIRECTORY_SEPARATOR;
    Logger::write(sprintf('Check %s directory existent.', $urlSplitterRootPath));
    if (file_exists($urlSplitterRootPath) === true) {
        /*
         * Auto update splitters configurations
         * */
        $configs = [];
        Logger::write(sprintf('Count all exists files from %s directory.', $urlSplitterRootPath));
        if (count(FileSystem::getList($urlSplitterRootPath, 'file')) > 0) {
            foreach (FileSystem::getList($urlSplitterRootPath, 'file') as $filename) {
                if (pathinfo($filename, PATHINFO_EXTENSION) === 'json') {
                    $configs[] = _JSON::decodeToArray(FileSystem::read($urlSplitterRootPath.$filename));
                }
            }

            array_multisort($configs, SORT_ASC);
            ksort($configs, SORT_ASC);


            Logger::write(sprintf('Remove old splitters config file from %s directory.', PHP_RUNTIME_REGISTRIES_PATH));
            FileSystem::remove(BIOS::URL_SPLITTERS_CONFIG_FILE);
            Logger::write(sprintf('Write new splitters config file in %s directory.', PHP_RUNTIME_REGISTRIES_PATH));
            FileSystem::saveToFile(BIOS::URL_SPLITTERS_CONFIG_FILE, _JSON::encodeToString($configs));
        }

        /*
         * Load UrlSplitters.
         * */
        Logger::write(sprintf('Check splitters config file in %s directory.', PHP_RUNTIME_REGISTRIES_PATH));
        if (count(_JSON::decodeToArray(FileSystem::read(BIOS::URL_SPLITTERS_CONFIG_FILE))) > 0) {
            foreach (_JSON::decodeToArray(FileSystem::read(BIOS::URL_SPLITTERS_CONFIG_FILE)) as $splitter) {
                $requestedRoute = _Array::value($splitter, 'route');
                if (in_array(strtolower($prediction->getController()), $requestedRoute, true) === true) {
                    $requestedClassName = _Array::value($splitter, 'class');
                    $currentRequestedFile = sprintf('%s%s.php', $urlSplitterRootPath, $requestedClassName);
                    if (is_readable($currentRequestedFile) === true) {
                        Logger::write(sprintf('Load %s from %s.', $currentRequestedFile, $urlSplitterRootPath));
                        include_once $currentRequestedFile;
                        Logger::write(sprintf('Extract %s from %s.', $requestedClassName, $currentRequestedFile));
                        $urlSplitter = Preloader::getClassNamespaceFromPath($currentRequestedFile);
                        if (method_exists(new $urlSplitter(), _String::lower($prediction->getController())) === true) {
                            Logger::write(sprintf('Execute %s from %s.', $requestedClassName, $currentRequestedFile));
                            call_user_func(
                                [
                                    new $urlSplitter(),
                                    _String::lower($prediction->getController()),
                                ],
                                [
                                    'controller' => $prediction->getController(),
                                    'method'     => $prediction->getMethod(),
                                    'arguments'  => $prediction->getArguments(),
                                ]
                            );
                        } else {
                            Logger::write(
                                sprintf(
                                    'Not found %s form %s.',
                                    $urlSplitter.'::'._String::lower($prediction->getController()),
                                    $currentRequestedFile
                                )
                            );
                            Firewall::runtimeFailure(
                                'Not Found',
                                [
                                    'debug' => [
                                        'file'        => $urlSplitter.'::'._String::lower($prediction->getController()),
                                        'location'    => Browser::getVisitedPage(),
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
                                    'file'        => sprintf('%s%s.php', $urlSplitterRootPath, $requestedClassName),
                                    'location'    => $urlSplitterRootPath,
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
     * The System will be execute applications that is locate at <APP_DIRECTORY>/Ema/Mishusoft
     *
     * */

    $mishusoftAppPath = $emaRootPath.'Mishusoft'.DIRECTORY_SEPARATOR;
    $defaultPackage   = 'Main';
    Logger::write(sprintf('Check %s directory existent.', $mishusoftAppPath));
    if (file_exists($mishusoftAppPath) === true) {
        Logger::write(sprintf('Count all exists files from %s directory.', $mishusoftAppPath));
        $requestedHandleDirectory = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/';
        if (count(FileSystem::getList($requestedHandleDirectory, 'file')) > 0) {
            foreach (FileSystem::getList($requestedHandleDirectory, 'file') as $filename) {
                if (_String::lower(BIOS::getFilenameOnly($filename)) === _String::lower($prediction->getController())) {
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
