<?php

    namespace Mishusoft\System\BIOS;

    use Mishusoft\Http;
    use Mishusoft\Storage;
    use Mishusoft\System;
    use Mishusoft\System\Bootstrap;
    use Mishusoft\System\Framework;

    class App extends System\BIOS
    {
        /**
         * BIOS initialise function
         *
         * @return void
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\ErrorException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function run(): void
        {
            // Communicate with framework.
            System\Log::info('Start framework application.');
            Framework::init(
                static function ($framework) {
                    //check headers for handle request
                    enable_cors();
                    // Remove optional headers
                    clean_response_header();

                    // Instance system memory.
                    System\Log::info('Start system memory.');
                    System\Memory::enable($framework);

                    //Logger::write('Start system cache manager.');
                    //CacheManager::start();

                    System\Log::info('Start system firewall.');
                    $firewall = new System\Firewall();

                    System\Log::info('Firewall check access validity of client.');
                    if ($firewall->isRequestAccepted() === true) {
                        if (get_http_request_method() === 'OPTIONS') {
                            $note       = 'The HTTP OPTIONS method requests permitted to communicate';
                            $currentUrl = get_visited_current_page();
                            $response   = [
                                'message' => [
                                    'type'     => 'success',
                                    'contents' => sprintf("%s for %s.", $note, $currentUrl),
                                ],
                            ];

                            // add welcome note for http options method
                            System\Log::info(
                                sprintf("%s for %s.", $note, $currentUrl),
                                LOG_STYLE_FULL,
                                LOG_TYPE_ACCESS
                            );
                            Storage\Stream::json($response);
                        } else {
                            System\Log::info('Access validity of client has been passed.');
                            System\Log::info('Start system session.');
                            Http\Session::init();

                            // Start special url handler [Api Url Service].
                            // links <sample>
                            // domain/UrlHandler/requestedUrl
                            $apiRoutes = is_string(getenv('API_GROUP')) ? getenv('API_GROUP') : '';

                            // if this request want to load any generic file
                            // stream generic file
                            if (in_array(get_current_generic_file(), public_generic_files(), true)) {
                                stream_file(get_current_generic_file());
                            } elseif (in_array(first_word_str(get_http_request_uri(), '/'), explode(',', $apiRoutes), true)) {
                                Bootstrap\Communication\HttpAPI::run(new Http\Request\HttpAPI());
                            } elseif (file_exists(Storage::applicationDirectivePath())) {
                                // fix this section about execution
                                //Start special url handler [Embed Mishusoft Application].
                                Bootstrap\Ema::run(new Http\Request\Classic());
                            } else {
                                //execute framework core
                                $framework->execute();
                            }
                        }
                    } else {
                        System\Log::error('Access validity of client has been failed.');
                        System\Log::alert('Make a action against client.');
                        $firewall->defenceActivate();
                    }//end if
                }
            );
        }
    }
