<?php declare(strict_types=1);

namespace Mishusoft\System;

use ErrorException;
use JsonException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Framework;
use Mishusoft\Drivers\Session;
use Mishusoft\Storage;

class BIOS
{

    // Declare version.
    public const VERSION = '1.0.2';

    //public const URL_SPLITTERS_CONFIG_FILE = RUNTIME_REGISTRIES_PATH.'splitters.json';
    //public const EMA_LOADER_FILE           = RUNTIME_SYSTEM_PATH.'Ema'.DS.'EmaLoader.php';

    /**
     * BIOS initialise function.
     *
     * @throws JsonException|ErrorException|RuntimeException Throw exception when error occurred..
     */
    public static function initialise(): BIOS
    {
        // @codingStandardsIgnoreStart
        // if (self::$initialise instanceof self === false) {self::$initialise = new self();}
        Logger::write('Start system firewall.');
        $firewall = new Firewall();

        Logger::write('Firewall check access validity of client.');
        if ($firewall->isRequestAccepted() === true) {

            Logger::write('Start system memory.');
            // Instance system memory.
            (new Memory())->enable();

            Logger::write('Access validity of client has been passed.');
            Logger::write('Start system session.');
            Session::init();

            /*
             * Start special url handler [Ema Embed Mishusoft Application].
             */

            Logger::write(sprintf('Check %s existent.', self::emaLoaderFile()));
            if (file_exists(self::emaLoaderFile()) === true) {
                // Include ema package loader.
                Logger::write(sprintf('Found %s in system.', self::emaLoaderFile()));
                Logger::write(sprintf('Load %s from system.', self::emaLoaderFile()));
                /** @define "self::EMA_LOADER_FILE" ".../Sources/Mishusoft/Ema/EmaLoader.php" */
                //include_once self::EMA_LOADER_FILE;
                include_once self::emaLoaderFile();
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

    private static function emaLoaderFile(): string
    {
        return sprintf('%s%s%s%s', Storage::applicationPath(), 'Ema', DS, 'EmaLoader.php');
    }


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
