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
     *
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    public static function initialise():void
    {
        self::singleton(function ($registry) {
            //Debug::preOutput($registry);
            //Debug::preOutput('before setting data');
            $registry->browser              = Http\Browser::getInstance();
            $registry->requestClassic       = Http\Request\Classic::getInstance();
            $registry->requestQualifiedAPI  = Http\Request\QualifiedAPI::getInstance();
            $registry->ip                   = new Http\IP();

            //Debug::preOutput('after setting data');
            //Debug::preOutput($registry);


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
                        // add welcome note for http options method
                        Stream::json([
                            'message' => [
                                'type' => 'success',
                                'contents' => sprintf(
                                    "%s for %s.",
                                    $note,
                                    $registry::Browser()::getVisitedPage()
                                ),
                            ],
                        ]);
                        Log::info(
                            sprintf("%s for %s.", $note, $registry::Browser()::getVisitedPage()),
                            LOG_STYLE_FULL,
                            LOG_TYPE_ACCESS
                        );
                    } else {
                        Log::info('Access validity of client has been passed.');
                        Log::info('Start system session.');
                        Session::init();

                        if (file_exists(Storage::applicationDirectivePath())) {
                            /*
                             * Start special url handler [Api Url Service].
                             */
                            QualifiedAPI::run($registry::RequestQualifiedAPI());

                            /*
                             * Start special url handler [Embed Mishusoft Application].
                             */
                            //Debug::preOutput($registry::RequestQualifiedAPI());
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
        });
    }//end initialise()
}
