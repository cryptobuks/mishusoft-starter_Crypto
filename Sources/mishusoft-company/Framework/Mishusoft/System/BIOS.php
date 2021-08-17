<?php declare(strict_types=1);

namespace Mishusoft\System;

use Error;
use Exception;
use Mishusoft\CacheManager;
use Mishusoft\Framework;
use Mishusoft\Drivers\Session;
use Mishusoft\Http;
use Mishusoft\Storage;
use Mishusoft\System\BIOS\EmbeddedWebUrlService;

class BIOS
{

    // Declare version.
    public const VERSION = '1.0.2';

    /**
     * BIOS initialise function.
     *
     * @return BIOS
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
    public static function initialise(): BIOS
    {
        try {
            //Runtime cache system is on
            Http::makeCacheBrowser();
            // Instance system memory.
            Log::info('Start system memory.');
            Memory::enable();


            //Logger::write('Start system cache manager.');
            //CacheManager::start();

            Log::info('Start system firewall.');
            $firewall = new Firewall();

            Log::info('Firewall check access validity of client.');
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
                    Log::info(
                        sprintf("%s for %s.", $note, Http::browser()::getVisitedPage()),
                        LOG_STYLE_FULL,
                        LOG_TYPE_ACCESS
                    );
                } else {
                    Log::info('Access validity of client has been passed.');
                    Log::info('Start system session.');
                    Session::init();

                    /*
                     * Start special url handler [EmbeddedWebUrlService].
                     */
                    EmbeddedWebUrlService::run();

                    /*
                     * Start special url handler [Ema Embed Mishusoft Application].
                     */

                    Log::info(sprintf('Check %s existent.', self::emaLoaderFile()));
                    if (file_exists(self::emaLoaderFile()) === true) {
                        // Include ema package loader.
                        Log::info(sprintf('Found %s in system.', self::emaLoaderFile()));
                        Log::info(sprintf('Load %s from system.', self::emaLoaderFile()));
                        include_once self::emaLoaderFile();
                        exit();
                    }

                    // Communicate with framework.
                    Log::info('Start framework application.');
                    Framework::init();
                }
            } else {
                Log::error('Access validity of client has been failed.');
                Log::alert('Make a action against client.');
                $firewall->defenceActivate();
            }//end if
        } catch (Error | Exception $e) {
            \Mishusoft\Exceptions\Handler::fetch($e);
        }

        return new self();
    }//end initialise()

    private static function emaLoaderFile(): string
    {
        return sprintf('%s%s', Storage::applicationPackagesPath(), 'Ema.loader.php');
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
