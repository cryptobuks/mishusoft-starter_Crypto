<?php declare(strict_types=1);

namespace Mishusoft\Framework\Chipsets\System;

use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Drivers\Session;

class BIOS
{

    // Declare version.
    public const VERSION = '1.0.2';

    public const URL_SPLITTERS_CONFIG_FILE = PHP_RUNTIME_REGISTRIES_PATH.'splitters.json';
    public const EMA_LOADER_FILE           = PHP_RUNTIME_SYSTEM_PATH.'Ema'.DS.'EmaLoader.php';

    public static $initialise;


    /**
     * BIOS initialise function.
     *
     * @return BIOS           Return \Mishusoft\Framework\Chipsets\System\BIOS as object.
     * @throws JsonException|ErrorException Throw exception when error occurred..
     */
    public static function initialise(): BIOS
    {
        // @codingStandardsIgnoreStart
        // if (self::$initialise instanceof self === false) {self::$initialise = new self();}

        Logger::write('Start system memory.');
        // Instance system memory.
        (new Memory())->enable();

        Logger::write('Start system firewall.');
        $firewall = new Firewall();
        $firewall->makeAccessRequest();

        Logger::write('Firewall check access validity of client.');
        if ($firewall->accessRequestProcessed === true) {
            Logger::write('Access validity of client has been passed.');
            Logger::write('Start system session.');
            Session::init();

            /*
             * Start special url handler [Ema Embed Mishusoft Application].
             */

            Logger::write(sprintf('Check %s existent.', self::EMA_LOADER_FILE));
            if (file_exists(self::EMA_LOADER_FILE) === true) {
                // Include ema package loader.
                Logger::write(sprintf('Found %s in system.', self::EMA_LOADER_FILE));
                Logger::write(sprintf('Load %s from system.', self::EMA_LOADER_FILE));
                /** @define "self::EMA_LOADER_FILE" ".../Sources/Mishusoft/Ema/EmaLoader.php" */
                //include_once self::EMA_LOADER_FILE;
                include_once PHP_RUNTIME_SYSTEM_PATH.'Ema'.DS.'EmaLoader.php';
            }

            /*
                else {
                print_r("dev off.");
            }*/

            /*
             * This is built-in uninterrupted web resources delivery system
             * every request communicate with public css, images and js libraries and other permitted resources
             * */
            // (new WebResourceDelivery((new Request())))->Delivery();
            /*
                communicate with app installer with it called*/
            // (new SystemConfiguration((new Request())))->Response();
            // LibrariesUrlHandler::Response((new Request())); /*communicate with public css, images and js libraries*/
            // MediaViewRender::Response((new Request())); /*communicate with published file or media libraries*/
            // MonitorViewRender::Response((new Request())); /*communicate with remote monitor services*/
            // InstallViewRender::Installer((new Request())); /*communicate with app installer with it called*/
            // EmergencyViewRender::Response((new Request())); /*communicate with emergency services*/
            /*
             * We want to process account and payment handling request without problems
             * this part is a experimental project
             */

            // AccountViewRender::Response((new Request())); /*communicate with app installer with it called*/
            // EPaymentViewRender::Response((new Request())); /*communicate with app installer with it called*/
            // self::HandleBuiltInUrl((new ClientRequest()));
            /*
             * End [url splitter]
             */

            // Communicate with framework.
            Logger::write('Start framework application.');
            Framework::init();
        } else {
            Logger::write('Access validity of client has been failed.');
            Logger::write('Make a action against client.');
            $firewall->defenceActivate();
        }//end if

        return new self();
        // return self::$initialise;
        // @codingStandardsIgnoreEnd

    }//end initialise()


    /**
     * Extract filename from path.
     *
     * @param string $filename Absolute file path.
     *
     * @return string Extracted filename.
     */
    public static function getFilenameOnly(string $filename): string
    {
        // @codingStandardsIgnoreStart
        return strtolower(substr($filename, 0, strpos($filename, 'UrlHandler')));
        // @codingStandardsIgnoreEnd

    }//end getFilenameOnly()


}//end class
