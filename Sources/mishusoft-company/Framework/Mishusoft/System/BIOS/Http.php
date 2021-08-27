<?php

namespace Mishusoft\System\BIOS;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Drivers\Bootstrap\Ema;
use Mishusoft\Drivers\Bootstrap\QualifiedAPI;
use Mishusoft\Drivers\Session;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\Handler;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Framework;
use Mishusoft\Http\Request;
use Mishusoft\Storage\Stream;
use Mishusoft\System\BIOS;
use Mishusoft\System\Firewall;
use Mishusoft\System\Log;
use Mishusoft\System\Memory;

class Http extends BIOS
{

    /**
     * BIOS initialise function.
     *
     * @throws AddressNotFoundException
     * @throws ErrorException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws InvalidDatabaseException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     * @throws \JsonException
     */
    public static function initialise():void
    {
        try {
            // Communicate with framework.
            Log::info('Start framework application.');
            Framework::init(function ($framework) {
                //Runtime cache system is on
                \Mishusoft\Http::makeBrowserCache();

                // Instance system memory.
                Log::info('Start system memory.');
                Memory::enable($framework);


                //Logger::write('Start system cache manager.');
                //CacheManager::start();

                Log::info('Start system firewall.');
                $firewall = new Firewall($framework);

                Log::info('Firewall check access validity of client.');
                if ($firewall->isRequestAccepted() === true) {
                    if (\Mishusoft\Http::browser()->getRequestMethod() === 'OPTIONS') {
                        $note = 'The HTTP OPTIONS method requests permitted to communicate';
                        // add welcome note for http options method
                        Stream::json([
                            'message' => [
                                'type' => 'success',
                                'contents' => sprintf(
                                    "%s for %s.",
                                    $note,
                                    \Mishusoft\Http::browser()::getVisitedPage()
                                ),
                            ],
                        ]);
                        Log::info(
                            sprintf("%s for %s.", $note, \Mishusoft\Http::browser()::getVisitedPage()),
                            LOG_STYLE_FULL,
                            LOG_TYPE_ACCESS
                        );
                    } else {
                        Log::info('Access validity of client has been passed.');
                        Log::info('Start system session.');
                        Session::init();

                        /*
                         * Start special url handler [Api Url Service].
                         */
                        QualifiedAPI::run(new Request);

                        /*
                         * Start special url handler [Embed Mishusoft Application].
                         */
                        Ema::run(new Request);

                        //execute framework core
                        $framework->execute();
                    }
                } else {
                    Log::error('Access validity of client has been failed.');
                    Log::alert('Make a action against client.');
                    $firewall->defenceActivate();
                }//end if
            });
        } catch (\Error | \Exception $e) {
            Handler::fetch($e);
        }
    }//end initialise()

}