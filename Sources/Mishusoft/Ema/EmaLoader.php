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
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Libraries\Runtime;

//_Debug::preOutput("test");
//_Debug::preOutput(PHP_RUNTIME_SYSTEM_PATH . "Ema" . DIRECTORY_SEPARATOR);

$prediction = new ClientRequest();


/*
 * We need to check Ema Root path
 * if exists this path,
 * The system will be execute ema applications
 * */

$EmaRootPath = PHP_RUNTIME_SYSTEM_PATH . "Ema" . DIRECTORY_SEPARATOR;

if (file_exists($EmaRootPath)) {

    /*
     * We need to check Url Splitters (Built-In web interface) root path,
     * if exists this path,
     * The System will be execute all active splitters that is locate at <APP_DIRECTORY>/Ema/UrlSplitters
     * */

    $UrlSplitterRootPath = $EmaRootPath . "UrlSplitters" . DIRECTORY_SEPARATOR;

    if (file_exists($UrlSplitterRootPath)) {
        /*
         * auto update splitters configurations
         * */
        $configs = array();
        if (count(FileSystem::getList($UrlSplitterRootPath, "file")) > 0) {
            foreach (FileSystem::getList($UrlSplitterRootPath, "file") as $filename) {
                if (pathinfo($filename, PATHINFO_EXTENSION) === "json") {
                   /* _Debug::preOutput("$UrlSplitterRootPath$filename");
                    _Debug::preOutput(FileSystem::read("$UrlSplitterRootPath$filename"));
                    _Debug::preOutput(file_get_contents("$UrlSplitterRootPath$filename"));*/
                    array_push($configs, json_decode(FileSystem::read("$UrlSplitterRootPath$filename"),true));
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

        if (count(json_decode(FileSystem::read(BIOS::urlSplittersConfigFile),true)) > 0) {
            foreach (json_decode(FileSystem::read(BIOS::urlSplittersConfigFile),true) as $splitter) {
                //_Debug::preOutput($splitter);
                if (in_array(_String::lower($prediction->getController()), _Array::value($splitter, "route"))) {

                    if (is_readable($UrlSplitterRootPath . _Array::value($splitter, "class") . ".php")) {
                       // _Debug::preOutput($UrlSplitterRootPath . _Array::value($splitter, "class") . ".php");

                        require_once $UrlSplitterRootPath . _Array::value($splitter, "class") . ".php";
                        //_Debug::preOutput(Preloader::getClassNamespaceFromPath($UrlSplitterRootPath . _Array::value($splitter, "class") . ".php"));
                        $UrlSplitter = Preloader::getClassNamespaceFromPath($UrlSplitterRootPath . _Array::value($splitter, "class") . ".php");
                        if (method_exists(new $UrlSplitter, _String::lower($prediction->getController()))) {
                            call_user_func(array(new $UrlSplitter, _String::lower($prediction->getController())),
                                [
                                    "controller" => $prediction->getController(),
                                    "method" => $prediction->getMethod(),
                                    "arguments" => $prediction->getArguments()
                                ]
                            );
                        } else {
                            Firewall::runtimeFailure("Not Found", [
                                "debug" => [
                                    "file" => "$UrlSplitter::" . _String::lower($prediction->getController()),
                                    "location" => (new Browser())->getVisitedPage(),
                                    "description" => "Your requested url not found!!"],
                                "error" => ["description" => "Your requested url not found!!"]
                            ]);
                        }
                    } else {
                        Firewall::runtimeFailure("Not Found", [
                            "debug" => [
                                "file" => $UrlSplitterRootPath . _Array::value($splitter, "class") . ".php",
                                "location" => $UrlSplitterRootPath,
                                "description" => "Required file is not readable!!"],
                            "error" => ["description" => "Your requested url not found!!"]
                        ]);
                    }
                    exit();
                }
            }
        }
    }


    /*
     * We need to check Mishusoft DVO (Mishusoft-App) root path,
     * if exists this path,
     * The System will be execute applications that is locate at <APP_DIRECTORY>/Ema/Mishusoft
     * */
    $MishusoftAppPath = $EmaRootPath . "Mishusoft" . DIRECTORY_SEPARATOR;
    $defaultPackage = "Main";
    if (file_exists($MishusoftAppPath)) {
        if (count(FileSystem::getList("$MishusoftAppPath$defaultPackage/UrlHandlers/", "file")) > 0) {
            foreach (FileSystem::getList("$MishusoftAppPath$defaultPackage/UrlHandlers/", "file") as $filename) {
                if (_String::lower(BIOS::getFilenameOnly($filename)) === _String::lower($prediction->getController())) {
                    if (is_readable("$MishusoftAppPath$defaultPackage/UrlHandlers/" . $filename)) {
                        require_once "$MishusoftAppPath$defaultPackage/UrlHandlers/" . $filename;
                        $UrlHandler = Preloader::getClassNamespaceFromPath("$MishusoftAppPath$defaultPackage/UrlHandlers/" . $filename);
                        call_user_func(array(new $UrlHandler, "Response"),
                            [
                                "locale" => $prediction->getLocale(),
                                "controller" => $prediction->getController(),
                                "method" => $prediction->getMethod(),
                                "arguments" => $prediction->getArguments()
                            ]
                        );
                        exit();
                    }
                }
            }
        }
    }
}

/**
 * Execute maintenance interface
 * we create an individual interface for special web interface
 * that is locate at <APP_SERVER_ADDR>/maintenance
 *
 * if the application which is default non-DVU (MVC Classic) package are under maintenance mode,
 * then following interface will be execute.
 *
 * this interface exclude maintenance and emergency pages
 */

/*experimental*/
if (Memory::Data("framework")->maintenance) {
    if ($prediction->getController() !== 'maintenance') {
        Runtime::redirect("maintenance");
    }
}

//exit();