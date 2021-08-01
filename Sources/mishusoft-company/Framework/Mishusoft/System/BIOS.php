<?php declare(strict_types=1);

namespace Mishusoft\System;

use Error;
use Exception;
use Mishusoft\Framework;
use Mishusoft\Drivers\Session;
use Mishusoft\Http;
use Mishusoft\Storage;

class BIOS
{

    // Declare version.
    public const VERSION = '1.0.2';

    /**
     * BIOS initialise function.
     *
     * @return BIOS
     */
    public static function initialise(): BIOS
    {
        try {
            Logger::write('Start system firewall.');
            $firewall = new Firewall();

            Logger::write('Firewall check access validity of client.');
            if ($firewall->isRequestAccepted() === true) {
                if (Http::browser()->getRequestMethod() === 'OPTIONS') {
                    $note = 'The HTTP OPTIONS method requests permitted to communicate';
                    // add welcome note for http options method
                    Storage\Stream::json([
                        'message' => [
                            'type' => 'success',
                            'contents' => sprintf("%s for %s.", $note, Http::browser()::getVisitedPage()),
                        ],
                    ]);
                    Logger::write(
                        sprintf("%s for %s.", $note, Http::browser()::getVisitedPage()),
                        LOGGER_WRITE_STYLE_FULL,
                        LOGGER_FLAG_TYPE_ACCESS
                    );
                } else {
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
                        include_once self::emaLoaderFile();
                    }

                    // Communicate with framework.
                    Logger::write('Start framework application.');
                    Framework::init();
                }
            } else {
                Logger::write('Access validity of client has been failed.');
                Logger::write('Make a action against client.');
                $firewall->defenceActivate();
            }//end if
        } catch (Error | Exception $e) {
            \Mishusoft\Exceptions\Handler::fetch($e);
        }

        return new self();
    }//end initialise()

    private static function emaLoaderFile(): string
    {
        return sprintf('%s%s%s%s', Storage::applicationDirectivePath(), 'Ema', DS, 'EmaLoader.php');
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
