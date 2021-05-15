<?php

namespace Mishusoft\Ema;

use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\ClientRequest;
use Mishusoft\Framework\Chipsets\Preloader;
use Mishusoft\Framework\Chipsets\System\BIOS;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Libraries\Runtime;

$prediction = new ClientRequest();


/*
 * We need to check Ema Root path
 * if exists this path,
 * The system will be execute ema applications.
 *
 * */

$emaRootPath = PHP_RUNTIME_SYSTEM_PATH.'Ema'.DIRECTORY_SEPARATOR;

if (file_exists($emaRootPath) === true) {
    /*
     * We need to check Url Splitters (Built-In web interface) root path,
     * if exists this path,
     * The System will be execute all active splitters that is locate at <APP_DIRECTORY>/Ema/UrlSplitters
     * */

    $urlSplitterRootPath = $emaRootPath.'UrlSplitters'.DIRECTORY_SEPARATOR;

    if (file_exists($urlSplitterRootPath) === true) {
        /*
         * auto update splitters configurations
         *
         * */

        $configs = [];
        if (count(FileSystem::getList($urlSplitterRootPath, 'file')) > 0) {
            foreach (FileSystem::getList($urlSplitterRootPath, 'file') as $filename) {
                if (pathinfo($filename, PATHINFO_EXTENSION) === 'json') {
                    array_push($configs, json_decode(FileSystem::read("$urlSplitterRootPath$filename"), true));
                }
            }

            array_multisort($configs, SORT_ASC);
            ksort($configs, SORT_ASC);


            FileSystem::remove(BIOS::urlSplittersConfigFile);
            FileSystem::saveToFile(BIOS::urlSplittersConfigFile, json_encode($configs));
        }

        /*
         * Load UrlSplitters
         * */

        if (count(json_decode(FileSystem::read(BIOS::urlSplittersConfigFile), true)) > 0) {
            foreach (json_decode(FileSystem::read(BIOS::urlSplittersConfigFile), true) as $splitter) {
                if (in_array(_String::lower($prediction->getController()), _Array::value($splitter, 'route'))) {
                    if (is_readable($urlSplitterRootPath._Array::value($splitter, 'class').'.php') === true) {
                        include_once $urlSplitterRootPath._Array::value($splitter, 'class').'.php';
                        $UrlSplitter = Preloader::getClassNamespaceFromPath(
                            $urlSplitterRootPath._Array::value($splitter, 'class').'.php'
                        );
                        if (method_exists(new $UrlSplitter(), _String::lower($prediction->getController()))) {
                            call_user_func(
                                [
                                    new $UrlSplitter(),
                                    _String::lower($prediction->getController()),
                                ],
                                [
                                    'controller' => $prediction->getController(),
                                    'method'     => $prediction->getMethod(),
                                    'arguments'  => $prediction->getArguments(),
                                ]
                            );
                        } else {
                            Firewall::runtimeFailure(
                                'Not Found',
                                [
                                    'debug' => [
                                        'file'        => "$UrlSplitter::"._String::lower($prediction->getController()),
                                        'location'    => (new Browser())->getVisitedPage(),
                                        'description' => 'Your requested url not found!!',
                                    ],
                                    'error' => ['description' => 'Your requested url not found!!'],
                                ]
                            );
                        }//end if
                    } else {
                        Firewall::runtimeFailure(
                            'Not Found',
                            [
                                'debug' => [
                                    'file'        => $urlSplitterRootPath._Array::value($splitter, 'class').'.php',
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
    if (file_exists($mishusoftAppPath) === true) {
        if (count(FileSystem::getList("$mishusoftAppPath$defaultPackage/UrlHandlers/", 'file')) > 0) {
            foreach (FileSystem::getList("$mishusoftAppPath$defaultPackage/UrlHandlers/", 'file') as $filename) {
                if (_String::lower(BIOS::getFilenameOnly($filename)) === _String::lower($prediction->getController())) {
                    if (is_readable("$mishusoftAppPath$defaultPackage/UrlHandlers/".$filename)) {
                        include_once "$mishusoftAppPath$defaultPackage/UrlHandlers/".$filename;
                        $UrlHandler = Preloader::getClassNamespaceFromPath("$mishusoftAppPath$defaultPackage/UrlHandlers/".$filename);
                        call_user_func(
                            [
                                new $UrlHandler(),
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
                }
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

if (Memory::Data('framework')->maintenance === true) {
    if ($prediction->getController() !== 'maintenance') {
        Runtime::redirect('maintenance');
    }
}
