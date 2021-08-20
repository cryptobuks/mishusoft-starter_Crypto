<?php declare(strict_types=1);

namespace Mishusoft\System;

use Error;
use Exception;
use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\CacheManager;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\Handler;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
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
     * @throws AddressNotFoundException
     * @throws \JsonException
     * @throws InvalidDatabaseException
     * @throws ErrorException
     * @throws HttpResponseException
     * @throws JsonException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function initialise(): BIOS
    {
        try {
            // Communicate with framework.
            Log::info('Start framework application.');
            Framework::init(function ($framework) {

                //Runtime cache system is on
                Http::makeCacheBrowser();

                // Instance system memory.
                Log::info('Start system memory.');
                Memory::enable($framework);


                //Logger::write('Start system cache manager.');
                //CacheManager::start();

                Log::info('Start system firewall.');
                $firewall = new Firewall($framework);

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

                        $framework::execute();
                    }
                } else {
                    Log::error('Access validity of client has been failed.');
                    Log::alert('Make a action against client.');
                    $firewall->defenceActivate();
                }//end if
            });
        } catch (Error | Exception $e) {
            Handler::fetch($e);
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
