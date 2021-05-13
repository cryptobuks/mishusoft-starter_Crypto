<?php

namespace Sources\Mishusoft\Framework\Drivers\Bootstrap;

use Sources\Mishusoft\Framework\Chipsets\Http\Browser;
use Sources\Mishusoft\Framework\Chipsets\Http\ClientRequest;
use Sources\Mishusoft\Framework\Chipsets\Preloader;
use Sources\Mishusoft\Framework\Chipsets\System\BIOS;
use Sources\Mishusoft\Framework\Chipsets\System\Firewall;

class DVO_Classic
{
    private static function HandleUrl(ClientRequest $prediction)
    {
        /**
         * Execute Built In web interface
         * we create an individual platform for special web platform
         * that is locate at <APP_DIRECTORY>/Framework/Mishusoft
         */


        /*
         * this is development code
         * */
        /*if (file_exists(MS_SYSTEM_PATH) && file_exists(MS_SYSTEM_PATH . "Mishusoft")) {
            if (count(Stream::getDirectoryList(MS_SYSTEM_PATH . "Mishusoft/UrlHandlers/")) > 0) {

                foreach (Stream::getDirectoryList(MS_SYSTEM_PATH . "Mishusoft/UrlHandlers/") as $filename) {
                    if (BIOS::getFilenameOnly($filename) === $prediction->getController()) {
                        if (is_readable(MS_SYSTEM_PATH . "Mishusoft/UrlHandlers/" . $filename)) {
                            require_once MS_SYSTEM_PATH . "Mishusoft/UrlHandlers/" . $filename;
                            $UrlHandler = BIOS::getNamespace(MS_SYSTEM_PATH . "Mishusoft/UrlHandlers/" . $filename);
                            call_user_func(array(new $UrlHandler, "Response"),
                                ["locale" => $prediction->getLocale(), "controller" => $prediction->getController(), "method" => $prediction->getMethod(), "arguments" => $prediction->getArguments()]
                            );
                        }
                    }
                }
            }
        }*/

        /*
         * this is production code
         * */
        if (file_exists(MS_SYSTEM_PATH) && file_exists(MS_SYSTEM_PATH . "Ema")) {

            $default_module = "Main";
            $rootUrlHandler = MS_SYSTEM_PATH . "Ema/Mishusoft/$default_module/UrlHandlers/". $prediction->getController() . "UrlHandler.php";

            /*check read permission of root url handler*/
            if (file_exists($rootUrlHandler) && is_readable($rootUrlHandler)) {
                require_once $rootUrlHandler;
                $rootUrlHandler = Preloader::getClassNamespaceFromPath($rootUrlHandler);
                call_user_func(array(new $rootUrlHandler, "Response"),
                    ["locale" => $prediction->getLocale(), "controller" => $prediction->getController(), "method" => $prediction->getMethod(), "arguments" => $prediction->getArguments()]
                );
            }  else {
                Firewall::runtimeFailure("Not Found", [
                    "debug" => ["file" => (new Browser())->getURLPath(), "location" => (new Browser())->getVisitedPage(), "description" => "Your requested url not found!!"],
                    "error" => ["description" => "Your requested url not found!!"]
                ]);
            }
        }
    }
}