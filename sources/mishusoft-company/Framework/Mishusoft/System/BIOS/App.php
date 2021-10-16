<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Drivers\Bootstrap;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\System;
use Mishusoft\Utility\Debug;

class App extends System\BIOS
{
    /**
     * BIOS initialise function
     */
    public static function initialise():void
    {
        Debug::preOutput('bios started');
        self::singleton(/**
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\JsonException
         * @throws \JsonException
         * @throws \Mishusoft\Exceptions\ErrorException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         */
            function ($registry) {
                $registry->browser  = Http\Browser::getInstance();
                $registry->ip       = new Http\IP();

                Debug::preOutput('preparing framework started');
                // Communicate with framework.
                System\Log::info('Start framework application.');
                Framework::init(function ($framework) use ($registry) {

                    // Instance system memory.
                    System\Log::info('Start system memory.');
                    System\Memory::enable($framework);


                    //Logger::write('Start system cache manager.');
                    //CacheManager::start();

                    System\Log::info('Start system firewall.');
                    $firewall = new System\Firewall($framework);

                    System\Log::info('Firewall check access validity of client.');
                    if ($firewall->isRequestAccepted() === true) {
                        if (Registry::Browser()->getRequestMethod() === 'OPTIONS') {
                            $note       = 'The HTTP OPTIONS method requests permitted to communicate';
                            $currentUrl = $registry::Browser()::getVisitedPage();

                            // add welcome note for http options method
                            Storage\Stream::json([
                                'message' => [
                                    'type' => 'success',
                                    'contents' => sprintf("%s for %s.", $note, $currentUrl),
                                ],
                            ]);
                            System\Log::info(
                                sprintf("%s for %s.", $note, $currentUrl),
                                LOG_STYLE_FULL,
                                LOG_TYPE_ACCESS
                            );
                        } else {
                            System\Log::info('Access validity of client has been passed.');
                            System\Log::info('Start system session.');
                            Http\Session::init();

                            //Start special url handler [Api Url Service].
                            $registry->httpAPI  = Http\Request\HttpAPI::getInstance();
                            Bootstrap\Communication\HttpAPI::run($registry::HttpAPI());

                            if (file_exists(Storage::applicationDirectivePath())) {
                                //Start special url handler [Embed Mishusoft Application].
                                $registry->requestClassic = Http\Request\Classic::getInstance();
                                Bootstrap\Ema::run($registry::RequestQualifiedAPI());
                            }

                            //execute framework core
                            $framework->execute();
                        }
                    } else {
                        System\Log::error('Access validity of client has been failed.');
                        System\Log::alert('Make a action against client.');
                        $firewall->defenceActivate();
                    }//end if
                });
            }
        );
    }//end initialise()
}
