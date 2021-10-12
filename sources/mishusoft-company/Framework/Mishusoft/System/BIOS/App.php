<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Drivers\Bootstrap\Ema;
use Mishusoft\Drivers\Bootstrap\QualifiedAPI;
use Mishusoft\Http\Session;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Storage\Stream;
use Mishusoft\System\BIOS;
use Mishusoft\System\Firewall;
use Mishusoft\System\Log;
use Mishusoft\System\Memory;
use Mishusoft\Utility\Debug;

class App extends BIOS
{
    /**
     * BIOS initialise function
     */
    public static function initialise():void
    {
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
                Debug::preOutput('before setting data');
                Debug::preOutput($registry);
                $registry->browser              = new Http\Browser();
                $registry->ip                   = new Http\IP();
                $registry->requestQualifiedAPI  = Http\Request\QualifiedAPI::getInstance();

                Debug::preOutput('after setting data');
                Debug::preOutput($registry);


                // Communicate with framework.
                Log::info('Start framework application.');
                Framework::init($registry, function ($framework) use ($registry) {
                    // Instance system memory.
                    Log::info('Start system memory.');
                    Memory::enable($framework);

                    //Logger::write('Start system cache manager.');
                    //CacheManager::start();

                    Log::info('Start system firewall.');
                    $firewall = new Firewall($framework);

                    Log::info('Firewall check access validity of client.');
                    if ($firewall->isRequestAccepted() === true) {
                        if (Registry::Browser()->getRequestMethod() === 'OPTIONS') {
                            $note = 'The HTTP OPTIONS method requests permitted to communicate';
                            $currentUrl = $registry::Browser()::getVisitedPage();
                            // add welcome note for http options method
                            Stream::json([
                                'message' => [
                                    'type' => 'success',
                                    'contents' => sprintf("%s for %s.", $note, $currentUrl),
                                ],
                            ]);
                            Log::info(sprintf("%s for %s.", $note, $currentUrl), LOG_STYLE_FULL, LOG_TYPE_ACCESS);
                        } else {
                            Log::info('Access validity of client has been passed.');
                            Log::info('Start system session.');
                            Session::init();

                            /*
                             * Start special url handler [Api Url Service].
                             */
                            QualifiedAPI::run($registry::RequestQualifiedAPI());

                            if (file_exists(Storage::applicationDirectivePath())) {
                                //make this instance for future purpose in mpm load
                                $registry->requestClassic       = Http\Request\Classic::getInstance();

                                /*
                                 * Start special url handler [Embed Mishusoft Application].
                                 */
                                Ema::run($registry::RequestQualifiedAPI());
                            }


                            //execute framework core
                            $framework->execute();
                        }
                    } else {
                        Log::error('Access validity of client has been failed.');
                        Log::alert('Make a action against client.');
                        $firewall->defenceActivate();
                    }//end if
                });
            }
        );
    }//end initialise()
}
