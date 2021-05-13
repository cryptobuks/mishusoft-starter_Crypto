<?php

namespace Mishusoft\Framework\Chipsets\System;

use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Drivers\Session;

class BIOS
{

    /*declare version*/
    const VERSION = "1.0.2";

    const urlSplittersConfigFile = PHP_RUNTIME_REGISTRIES_PATH . "splitters.json";

    public static $initialise;

    public static function initialise(): BIOS
    {
        if (!self::$initialise instanceof self) {
            self::$initialise = new BIOS();
        }

        (new Memory())->enable(); /*instance system memory*/

        $firewall = new Firewall();
        $firewall->makeAccessRequest();

        if ($firewall->accessRequestProcessed) {
            Session::init();

            /**
             * Start special url handler [Ema Embed Mishusoft Application]*/
            if (file_exists(PHP_RUNTIME_SYSTEM_PATH . "Ema" . DIRECTORY_SEPARATOR ."EmaLoader.php")) {
                /*include ema package loader*/
                include_once PHP_RUNTIME_SYSTEM_PATH . "Ema" . DIRECTORY_SEPARATOR ."EmaLoader.php";
            } /*else {
                print_r("dev off.");
            }*/


            /*
             * This is built-in uninterrupted web resources delivery system
             * every request communicate with public css, images and js libraries and other permitted resources
             * */
            //(new WebResourceDelivery((new Request())))->Delivery();

            /*communicate with app installer with it called*/
            //(new SystemConfiguration((new Request())))->Response();


            //LibrariesUrlHandler::Response((new Request())); /*communicate with public css, images and js libraries*/
            //MediaViewRender::Response((new Request())); /*communicate with published file or media libraries*/
            //MonitorViewRender::Response((new Request())); /*communicate with remote monitor services*/

            //InstallViewRender::Installer((new Request())); /*communicate with app installer with it called*/
            //EmergencyViewRender::Response((new Request())); /*communicate with emergency services*/

            /**
             * We want to process account and payment handling request without problems
             * this part is a experimental project
             */

            //AccountViewRender::Response((new Request())); /*communicate with app installer with it called*/
            //EPaymentViewRender::Response((new Request())); /*communicate with app installer with it called*/

            /*self::HandleBuiltInUrl((new ClientRequest()));*/

            /**
             * End [url splitter]
             */

            Framework::init(); /*communicate with framework*/
        } else {
            $firewall->defenceActivate();
        }

        return self::$initialise;
    }

    public static function getFilenameOnly(string $filename): string
    {
        return strtolower(substr($filename, 0, strpos($filename, 'UrlHandler')));
    }
}