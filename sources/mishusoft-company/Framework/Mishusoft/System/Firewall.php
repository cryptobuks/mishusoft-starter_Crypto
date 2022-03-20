<?php

    declare(strict_types=1);

    namespace Mishusoft\System;

    use GeoIp2\Exception\AddressNotFoundException;
    use MaxMind\Db\Reader\InvalidDatabaseException;
    use Mishusoft\Exceptions\HttpException\HttpResponseException;
    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Http;
    use Mishusoft\Http\IP;
    use Mishusoft\Storage;
    use Mishusoft\Storage\FileSystem;
    use Mishusoft\Utility\Inflect;

    class Firewall extends Firewall\FirewallBase
    {
        /**
         * Firewall constructor.
         *
         * @throws PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function __construct()
        {
            parent::__construct();

            // Change file type to read and write file
            // $this->fileType = 'json';

            Log::info(sprintf('Load Firewall configuration from %1$s.', $this->configFile()));
            $this->loadConfig();
        }


        /**
         * Create http request to system for the client
         *
         * @return bool
         * @throws HttpResponseException
         * @throws PermissionRequiredException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function isRequestAccepted(): bool
        {
            //Debug::preOutput($this->framework);
            Log::info('Check domain installation file of framework.');
            if (is_usable_this_file($this->siteFile())) {
                $installedHost = parse_msf_file($this->siteFile());
                if (in_array(getenv('INSTALLED_HOST_NAME'), $installedHost, true) === true) {
                    //start new world-class test
                    //print_r($installedHost, false);
                    Log::info('Filter request of client.');
                    $this->filterHttpRequest();
                } else {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'domain';
                }
                return $this->makeAction();
            }

            Log::alert('Adding new domain to install framework.');
            emit_msf_file($this->siteFile(), [getenv('INSTALLED_HOST_NAME'),]);
            return $this->makeAction();


            Log::notice('Start create http request to system for the client');

            // Start test website's host name
            Log::notice(
                sprintf(
                    'Start testing requested hostname [%s] with firewall configuration.',
                    get_http_host_name()
                )
            );

            if ($this->config['hostname'] !== get_http_host_name()) {
                Log::error(
                    sprintf(
                        'Requested hostname [%s] does not matched with firewall configuration.',
                        get_http_host_name()
                    )
                );

                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'domain';
                return $this->makeAction();

//            if ($this->isListed(IP::get()) === false) {
//                Log::info(
//                    sprintf(
//                        'Firewall block the browser %s of client.',
//                        $this->browser->getBrowserNameFull()
//                    )
//                );
//                $this->actionStatus = 'blocked';
//                $this->actionComponent = 'browser';
//            }
            }

            Log::info(
                sprintf(
                    'End testing requested hostname [%s] with firewall configuration.',
                    get_http_host_name()
                )
            );

            // End test website's host name
            // Start test the ip address of client.
            Log::info(
                sprintf(
                    'Start searching client ip [%s] in banned list.',
                    IP::get()
                )
            );

            if (in_array(IP::get(), $this->config['ip']['banned'], true) === true) {
                Log::notice(
                    sprintf(
                        'The client ip address [%s] found in banned list.',
                        IP::get()
                    )
                );

                Log::notice('Firewall banned the ip address.');
                $this->actionStatus    = 'banned';
                $this->actionComponent = 'IP';
            }

            Log::info(
                sprintf(
                    'End searching client ip [%s] in banned list.',
                    IP::get()
                )
            );
            // End test the ip address of client.
            // Start test the web browser of client.
            Log::info(
                sprintf(
                    'Start searching client browser [%s] in banned list.',
                    $this->browser->getBrowserNameFull()
                )
            );

            if (in_array(strtolower($this->browser->getBrowserName()), $this->config['browser']['banned'], true) === true) {
                Log::notice(
                    sprintf(
                        'The client browser [%s] found in banned list.',
                        $this->browser->getBrowserNameFull()
                    )
                );
                Log::notice('Firewall banned the browser.');
                $this->actionStatus    = 'banned';
                $this->actionComponent = 'browser';
            }

            Log::info(
                sprintf(
                    'End searching client browser [%s] in banned list.',
                    $this->browser->getBrowserNameFull()
                )
            );

            // End test the web browser of client.
            // Start test the device name of client.
            Log::info(
                sprintf(
                    'Start searching client device [%s] in banned list.',
                    $this->browser->getDeviceNameFull()
                )
            );
            if (in_array(
                    Inflect::lower($this->browser->getDeviceName()),
                    $this->config['device']['banned'],
                    true
                ) === true) {
                Log::notice(
                    sprintf(
                        'The client device [%s] found in banned list.',
                        $this->browser->getDeviceNameFull()
                    )
                );
                Log::notice('Firewall banned the device.');
                $this->actionStatus    = 'banned';
                $this->actionComponent = 'device';
            }

            Log::info(
                sprintf(
                    'End searching client device [%s] in banned list.',
                    $this->browser->getDeviceNameFull()
                )
            );

            // End test the device name of client.
            // Start test the continent name of client.
            Log::info(
                sprintf(
                    'Start searching client continent [%s] in banned list.',
                    IP::getInfo('continent')
                )
            );
            if (in_array(Inflect::lower(IP::getInfo('continent')), $this->config['continent']['banned'], true)) {
                Log::notice(
                    sprintf(
                        'The client continent [%s] found in banned list.',
                        IP::getInfo('continent')
                    )
                );
                Log::notice('Firewall banned the continent.');
                $this->actionStatus    = 'banned';
                $this->actionComponent = 'continent';
            }

            Log::info(
                sprintf(
                    'End searching client continent [%s] in banned list.',
                    IP::getInfo('continent')
                )
            );

            // End test the continent name of client.
            // Start test the country name of client.
            Log::info('Start searching client country in banned list.');
            if (in_array(Inflect::lower(IP::getInfo('country')), $this->config['country']['banned'], true) === true) {
                Log::notice('The client continent found in banned list.');
                Log::notice('Firewall banned the country.');
                $this->actionStatus    = 'banned';
                $this->actionComponent = 'country';
            }

            Log::info('End searching client country in banned list.');

            // End test the country name of client.
            // Start test the country name of client.
            Log::info('Start searching client city in banned list.');
            if (in_array(Inflect::lower(IP::getInfo('city')), $this->config['city']['banned'], true)) {
                Log::notice('The client city found in banned list.');
                Log::notice('Firewall banned the city.');
                $this->actionStatus    = 'banned';
                $this->actionComponent = 'city';
            }

            Log::info('End searching client city in banned list.');

            // End test the city name of client.
            // Start test the country name of client.
            Log::info('Start searching client browser in black list.');
            if ($this->config['browser']['order'] === 'blacklist') {
                // we need to check block time of browser,
                // if the time has been expired, then unblock th browser
                // or show protection message
                if (in_array(
                        Inflect::lower($this->browser->getBrowserName()),
                        $this->config['browser']['blacklist'],
                        true
                    ) === true) {
                    Log::notice('The client browser found in black list.');
                    Log::notice('Firewall banned the browser.');
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'browser';
                }
            }
            Log::info('End searching client browser in banned list.');

            // End test the city name of client.

            if ($this->config['browser']['order'] === 'whitelist') {
                if (in_array(Inflect::lower($this->browser->getBrowserName()), $this->config['browser']['whitelist'], true) === false) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'browser';
                }
            }

            if ($this->config['ip']['order'] === 'blacklist') {
                // we need to check block time of ip,
                // if the time has been expired, then unblock the ip
                // or show protection message
                if (in_array(IP::get(), $this->config['ip']['blacklist'], true) === false) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'IP';
                }
            }

            if ($this->config['ip']['order'] === 'whitelist') {
                if (!in_array(IP::get(), $this->config['ip']['whitelist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'IP';
                }
            }

            if ($this->config['device']['order'] === 'blacklist') {
                // we need to check block time of device,
                // if the time has been expired, then unblock the device
                // or show protection message
                if (in_array(IP::get(), $this->config['device']['blacklist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'device';
                }
            }

            if ($this->config['device']['order'] === 'whitelist') {
                if (!in_array(IP::get(), $this->config['device']['whitelist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'device';
                }
            }

            if ($this->config['continent']['order'] === 'blacklist') {
                // we need to check block time of continent,
                // if the time has been expired, then unblock the continent
                // or show protection message
                if (in_array(IP::get(), $this->config['continent']['blacklist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'continent';
                }
            }

            if ($this->config['continent']['order'] === 'whitelist') {
                if (!in_array(IP::get(), $this->config['continent']['whitelist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'continent';
                }
            }

            if ($this->config['country']['order'] === 'blacklist') {
                // we need to check block time of country,
                // if the time has been expired, then unblock th country
                // or show protection message
                if (in_array(IP::get(), $this->config['country']['blacklist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'country';
                }
            }

            if ($this->config['country']['order'] === 'whitelist') {
                if (!in_array(IP::get(), $this->config['country']['whitelist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'country';
                }
            }

            if ($this->config['city']['order'] === 'blacklist') {
                // we need to check block time of city,
                // if the time has been expired, then unblock the city
                // or show protection message
                if (in_array(IP::get(), $this->config['city']['blacklist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'city';
                }
            }

            if ($this->config['city']['order'] === 'whitelist') {
                if (!in_array(IP::get(), $this->config['city']['whitelist'], true)) {
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'city';
                }
            }

            Log::info('End create http request to system for the client');
        }//end makeAccessRequest()

        /**
         * @return bool
         * @throws HttpResponseException
         * @throws PermissionRequiredException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        private function makeAction(): bool
        {
            if (!empty($this->actionStatus) && ($this->actionStatus === 'banned' || 'blocked')) {
                $this->storeFirewallLogs();
                $this->accessDefence($this->actionStatus);
                $this->accessRequestProcessed = false;
            } else {
                $this->actionStatus    = 'granted';
                $this->actionComponent = 'browser';
                $this->storeFirewallLogs();
                $this->accessDefence($this->actionStatus);
                $this->accessRequestProcessed = true;
            }

            return $this->accessRequestProcessed;
        }


        /**
         * Filter http request of client.
         *
         * @return void
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        private function filterHttpRequest(): void
        {
            /*
             * Check accept attribute in firewall configuration
             * if not exists, then reset configuration.
             */

            //accept
            Log::info('Start checking whether the accept keyword is in the $this->config variable.');
            if (array_key_exists('accept', $this->config) === false) {
                Log::error('Check failed. Accept keyword not found in $this->config variable.');
                Log::alert('Creating new config with built in config.');
                $this->createConfiguration(array_merge_recursive($this->requiredProperties(), $this->defaultProperties()));
            }
            Log::info('End checking whether the accept keyword is in the $this->config variable.');

            //request method
            Log::info('Start checking whether request method keyword in $_SERVER variable.');
            Log::info('Search accept keyword in allowed request method variable.');
            $requestMethodAll = $this->config['accept']['request-method'];
            if (in_array(Inflect::lower($_SERVER['REQUEST_METHOD']), $requestMethodAll, true) === false) {
                Log::error('Browser Request Method was not found in the authorized method.');
                Log::notice('Check whether the client\'s IP is blocked');
                if ($this->isListed(IP::get()) === false) {
                    Log::notice('The client\'s IP is not blocked. Then it will be blocked.');
                    $this->actionStatus    = 'blocked';
                    $this->actionComponent = 'IP';
                    $this->addIP(IP::get(), 'blocked');
                }
            }
            Log::info('End checking whether REQUEST_METHOD keyword in $_SERVER variable.');
        }//end filterHttpRequest()

        /**
         * Check the IP Address of client in blacklist or banned.
         *
         * @param string $ip   The IP Address of client.
         * @param string $list List name of action.
         *
         * @return bool
         */
        private function isListed(string $ip, string $list = 'banned'): bool
        {
            $list = ($list === 'blocked') ? 'blacklist' : 'banned';
            foreach ($this->config as $key => $value) {
                if (is_array($this->config[$key]) === true
                    && array_key_exists($list, $this->config[$key]) === true
                    && in_array($ip, $this->config[$key][$list], true) === true
                ) {
                    return true;
                }
            }

            return false;
        }//end isListed()


        /**
         * Add new IP Address in the action list
         *
         * @param string $ip   The IP Address of client.
         * @param string $list List name of action.
         *
         * @return void
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        private function addIP(string $ip, string $list): void
        {
            $list = ($list === 'blocked') ? 'blacklist' : $list;

            switch ($list) {
                case 'banned':
                    $this->removeFromList($ip, 'blacklist');
                    $this->updateList($ip, $list);
                    break;

                case 'blacklist':
                    $this->removeFromList($ip, 'banned');
                    $this->removeFromList($ip, 'whitelist');
                    $this->updateList($ip, $list);
                    break;

                case 'whitelist':
                    $this->removeFromList($ip, 'banned');
                    $this->removeFromList($ip, 'blacklist');
                    $this->updateList($ip, $list);
                    break;

                default:
                    throw new RuntimeException('Unexpected value');
            }//end switch
        }//end addIP()


        /**
         * Remove the IP Address from the action list
         *
         * @param string $ip   The IP Address of client.
         * @param string $list List name of action.
         *
         * @return void
         */
        private function removeFromList(string $ip, string $list): void
        {
            if (in_array($ip, $this->config['ip'][$list], true) === true) {
                foreach ($this->config['ip'][$list] as $key => $value) {
                    if ($this->config['ip'][$list][$key] === $ip) {
                        unset($this->config['ip'][$list][$key]);
                        asort($this->config['ip'][$list]);
                    }
                }
            }
        }//end removeFromList()


        /**
         * Update the IP Address in the action list
         *
         * @param string $ip   The IP Address of client.
         * @param string $list List name of action.
         *
         * @return void
         */
        private function updateList(string $ip, string $list): void
        {
            if (in_array($ip, $this->config['ip'][$list], true) === false) {
                $this->config['ip'][$list][] = $ip;
                emit_msf_file($this->configFile(), $this->config);
            }
        }//end updateList()


        /**
         * Prepare runtime failure ui for html display.
         *
         * @param int   $status  Name of action.
         * @param array $message Error message.
         *
         * @return void
         * @throws AddressNotFoundException
         * @throws HttpResponseException
         * @throws InvalidArgumentException
         * @throws InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function runtimeFailure(int $status, array $message): void
        {
            if (array_key_exists($status, Http\Errors::BUILT_IN_HTTP_ERRORS_RECORDS)) {
                self::runtimeFailureUi(Http::errorDescription($status), $message);
            }//end if
        }//end runtimeFailure()


        /**
         * Runtime failure ui for html display.
         *
         * @param string $title   Name of action.
         * @param array  $message Error message.
         *
         * @return void
         * @throws AddressNotFoundException
         * @throws HttpResponseException
         * @throws InvalidArgumentException
         * @throws InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         * @throws \Exception
         */
        private static function runtimeFailureUi(string $title, array $message): void
        {
            $details = [];
//        pp($message);
//        pp($GLOBALS);

            if (defined('FRAMEWORK_INSTALLED') && FRAMEWORK_INSTALLED === true) {
                if (Memory::getOption('debug', 'framework') === false) {
                    if (array_key_exists('error', $message) === true) {
                        $details = $message['error'];
                    }
                }
            }

            if ($details === []) {
                if (array_key_exists('debug', $message) === true) {
                    $details = $message['debug'];
                } else {
                    $details = ['description' => 'Your requested document not found.'];
                }//end if
            }

            $httpRequestMethod = get_http_request_method();
            $httpUserAgent     = get_http_user_agent();


            //  exit();

            if (PHP_SAPI === 'cli') {
                echo $details['description'] . LB;
            } elseif ($httpRequestMethod === 'OPTIONS') {
                // add welcome not for http options method
                stream_to_json(['message' => ['type' => 'error', 'contents' => "An Internal error occurred."]]);
            } elseif ($httpRequestMethod === 'GET') {
                if (array_key_exists('caption', $details)) {
                    FirewallView::debug($details['caption'], $details, Http::errorCode($title));
                    //Ui\EmbeddedView::debug($message['caption'], $message, Http::errorCode($title));
                } else {
                    FirewallView::runtimeFail($title, $details, Http::errorCode($title));
                    //Ui\EmbeddedView::runtimeFail($title, $message, Http::errorCode($title));
                }//end if
            } else {
                stream_to_json([
                                   'message'   => [
                                       'type'    => 'error',
                                       'details' => $details['description'],
                                       'visitor' => [
                                           'user-agent'     => $httpUserAgent,
                                           'request-method' => $httpRequestMethod,
                                           'request-url'    => get_visited_current_page(),
                                           'ip-address'     => IP::get(),
                                       ],
                                   ],
                                   'copyright' => [
                                       'year'  => Time::currentYearNumber(),
                                       'owner' => Framework::COMPANY_NAME,
                                   ],
                               ]);
            }//end if
        }//end runtimeFailureUi()


        /**
         * @param string $status
         *
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        private function accessDefence(string $status): void
        {
            if (array_key_exists("$status-device-access-limit-filter", $this->config)
                && $this->config["$status-device-access-limit-filter"] === 'enable') {
                if (is_readable($this->logFile($this->actionStatus)) === true) {
                    if (!empty(file_get_contents($this->logFile($this->actionStatus)))) {
                        //$logs = FileSystem\Yaml::parseFile(self::logFile($this->actionStatus)); // for yaml
                        $logs = include $this->logFile($this->actionStatus); // for json
                        if (is_array($logs) && count($logs) !== 0) {
                            if (array_key_exists($status, $logs)) {
                                if (is_array($logs[$status]) && array_key_exists(IP::get(), $logs[$status])) {
                                    $times          = [];
                                    $countdownTimes = [];
                                    foreach (array_keys($logs[$status][IP::get()]) as $browser) {
                                        foreach ($logs[$status][IP::get()][$browser] as $time => $log) {
                                            //$times = array_merge($times, [$time => $log]);
                                            $times[$time] = $log;
                                            if (!array_key_exists(IP::get(), $this->config["$status-device-count-down-time"])) {
                                                $this->config["$status-device-count-down-time"][IP::get()] = '';
                                            }

                                            if ($time >= $this->config["$status-device-count-down-time"][IP::get()]) {
                                                //$countdownTimes = array_merge($countdownTimes, [$time => $log]);
                                                $countdownTimes[$time] = $log;
                                            }
                                        }
                                    }

                                    ksort($times);
                                    $times = array_reverse($times);
                                    /*
                                        $total = count($times);
                                        $countdown = count($countdownTimes);
                                    $visitedBrowsersList = array_keys($logs[$status][IP::get()]);*/

                                    $now      = array_shift($times);
                                    $previous = array_shift($times);
                                    if (is_array($now)
                                        && array_key_exists('visit-time', $now)
                                        && is_array($previous)
                                        && array_key_exists('visit-time', $previous)) {
                                        /*
                                            check countdown time is set or not*/
                                        // Returns true if $x is greater than or equal to $y
                                        if (array_key_exists("$status-device-count-down-time", $this->config)) {
                                            // check countdown time is not empty, then calculate accurate time
                                            if (!empty($this->config["$status-device-count-down-time"])) {
                                                /* preOutput($this->config["$status-device-count-down-time"]);*/
                                                // Set new time, if set time to current time more than 60 minutes, set new time as current time
                                                $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($this->config["$status-device-count-down-time"][IP::get()])) / 60);
                                                if ($this->lastVisitDuration >= $this->config["$status-device-time-limit"]) {
                                                    $this->config["$status-device-count-down-time"][IP::get()] = $now['visit-time'];
                                                    emit_msf_file($this->configFile(), $this->config);
                                                }//end if

                                                else {
                                                    // Set new time, if previous time set more than 10 minutes
                                                    $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                                    if ($this->lastVisitDuration > 10) {
                                                        // preOutput("Setting previous time!!");
                                                        $this->config["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                                        emit_msf_file($this->configFile(), $this->config); // for json
                                                        // preOutput($this->config);
                                                    }
                                                }
                                            }//end if

                                            else {
                                                // Set new time, if current time to previous time set more than 60 minutes
                                                $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                                if ($this->lastVisitDuration >= $this->config["$status-device-time-limit"]) {
                                                    $this->config["$status-device-count-down-time"][IP::get()] = $now['visit-time'];
                                                } else {
                                                    // Set new time, if current time to previous time set less than 60 minutes
                                                    $this->config["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                                }

                                                //  FileSystem\Yaml::emitFile($this->configFile(), $this->config); // for yaml
                                                emit_msf_file($this->configFile(), $this->config); // for json
                                                // preOutput($this->config["$status-device-count-down-time"]);
                                            }
                                        } //end if

                                        else {
                                            // Autoload::log("Preparing to create firewall configuration file.");
                                            if (FileSystem::IsWriteable($this->configFile())) {
                                                //  FileSystem\Yaml::emitFile($this->configFile(), $this->defaultProperties()); // for yaml
                                                emit_msf_file($this->configFile(), $this->defaultProperties()); // for json
                                            }

                                            // load firewall configuration in runtime
                                            $this->config = $this->defaultProperties();
                                        }

                                        $this->controller = !empty($this->config["$status-device-count-down-time"][IP::get()]) ? $this->config["$status-device-count-down-time"][IP::get()] : $previous['visit-time'];
                                        /*
                                            check limit time format key and value*/
                                        // $minutes = (strtotime("2012-09-21 12:12:22") - time()) / 60;
                                        if (array_key_exists("$status-device-limit-time-format", $this->config)) {
                                            // check limit time format key value, and it is second, so calculate duration as seconds
                                            if ($this->config["$status-device-limit-time-format"] === 'second') {
                                                $this->duration  = (strtotime($now['visit-time']) - strtotime($this->controller));
                                                $this->separator = 'seconds';
                                            } //end if

                                            elseif ($this->config["$status-device-limit-time-format"] === 'minute') {
                                                $this->duration  = (int)((strtotime($now['visit-time']) - strtotime($this->controller)) / 60);
                                                $this->separator = 'minutes';
                                            } //otherwise calculate duration as hours.

                                            else {
                                                $this->duration  = (int)(((strtotime($now['visit-time']) - strtotime($this->controller)) / 60) / 60);
                                                $this->separator = 'hours';
                                            }
                                        } //end if

                                        else {
                                            // Autoload::log("Preparing to create firewall configuration file.");
                                            if (FileSystem::IsWriteable($this->configFile())) {
                                                //  FileSystem\Yaml::emitFile($this->configFile(), $this->defaultProperties()); // for yaml
                                                emit_msf_file($this->configFile(), $this->defaultProperties()); // for json
                                            }

                                            // load firewall configuration in runtime
                                            $this->config = $this->defaultProperties();
                                        }
                                    }//end if

                                    /*
                                        show debug info*/
                                    /*
                                        preOutput("$status Device:: VISIT DURATION COUNT DOWN:: ");
                                        preOutput($visitedBrowsersList);
                                        //preOutput($times);
                                        //preOutput(array_reverse($times));
                                        preOutput("You have visited total $total times.");
                                        preOutput("You have visited $countdown times (in $this->duration $this->separator).");
                                        preOutput("You have last visited $this->last_visit_duration minutes before.");
                                        //preOutput($first);
                                        preOutput("You have visited $this->duration $this->separator.");
                                        preOutput("Your access time limit: " . $this->config["$status-device-time-limit"]);
                                     preOutput("Your access limit: " . $this->config["$status-device-access-limit"]);*/

                                    /*
                                        make decisions*/
                                    // check time limit is set or not
                                    if (array_key_exists("$status-device-time-limit", $this->config)) {
                                        /*
                                            check access time is over or not*/
                                        // access time is not over in limited (60 minute) time
                                        if ($this->config["$status-device-time-limit"] > $this->duration) {
                                            // check access time
                                            if (array_key_exists("$status-device-access-limit", $this->config)) {
                                                // Returns true if access is greater than access limit
                                                if (count($countdownTimes) >= $this->config["$status-device-access-limit"]) {
                                                    if ($status === 'blocked' && !$this->isListed(IP::get())) {
                                                        $this->addIP(IP::get(), 'banned');
                                                    }

                                                    if ((!$this->isListed(IP::get())
                                                         && !$this->isListed(IP::get(), 'blocked'))
                                                        && $status === 'granted') {
                                                        $this->addIP(IP::get(), 'blocked');
                                                    }
                                                }
                                            }
                                        }
                                    }//end if
                                }//end if
                            }//end if
                        }//end if
                    } else {
                        throw new RuntimeException(
                            'Unable to continue. ' . $this->logFile($this->actionStatus) . ' is empty'
                        );
                    }//end if
                } else {
                    throw new RuntimeException('Permission denied. Unable to read ' . $this->logFile($this->actionStatus));
                }//end if
            }//end if
        }//end accessDefence()


        /**
         * @throws HttpResponseException
         * @throws InvalidArgumentException
         * @throws PermissionRequiredException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public function defenceActivate(): void
        {
            if ($this->actionStatus === 'banned' || $this->actionStatus === 'blocked') {
                //GranParadiso/3.0.8 is text browser
                if (array_key_exists('ui', $this->browser->details())
                    && Inflect::lower($this->browser->details()['ui']) === Inflect::lower('FullTextMode')) {
                    $this->msgTab = "\t";
                    $this->defenseMessageShow('', $this->actionStatus, $this->actionComponent, 'text');
                } else {
                    $this->msgTab = '&emsp;';
                    $this->defenseMessageShow('Access', $this->actionStatus, $this->actionComponent, 'graphic');
                }
            } else {
                $this->msgTab = '&emsp;';
                $this->defenseMessageShow('Access', 'fridge', 'browser', 'graphic');
            }//end if
        }//end defenceActivate()


        // all public functions


        /**
         * @param string $title
         * @param string $status
         * @param string $component
         * @param string $viewMode
         *
         * @throws HttpResponseException
         * @throws InvalidArgumentException
         * @throws PermissionRequiredException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        private function defenseMessageShow(string $title, string $status, string $component, string $viewMode): void
        {
            if ($component === 'browser') {
                $componentText = "on $component " . $this->browser->getBrowserNameFull();
            } else {
                $componentText = "from $component " . IP::get();
            }
            $requestMethod  = get_http_request_method();
            $requestAddress = get_visited_current_page();

            if (!empty($viewMode)) {
                if ($requestMethod === 'OPTIONS') {
                    // add welcome not for http options method
                    Storage\Stream::json([
                                             'message' => [
                                                 'type'     => 'error',
                                                 'contents' => "The HTTP OPTIONS method requests not permitted to communicate for $requestAddress.",
                                             ],
                                         ]);
                } elseif (Network::requestHeader('HTTP_SEC_FETCH_MODE') === 'cors') {
                    Storage\Stream::json(
                        [
                            'message'   => [
                                'type'    => 'error',
                                'details' => sprintf('Your access has been %1$s %2$s.', $status, $componentText),
                                'visitor' => [
                                    'user-agent'     => get_http_user_agent(),
                                    'request-method' => get_http_request_method(),
                                    'request-url'    => $requestAddress,
                                    'ip-address'     => IP::get(),
                                ],
                            ],
                            'copyright' => [
                                'year'  => Time::currentYearNumber(),
                                'owner' => Framework::COMPANY_NAME,
                            ],
                        ]
                    );
                } elseif ($viewMode === 'text') {
                    echo LB;
                    echo sprintf(' Your access has been %1$s %2$s.', $status, $componentText) . LB;
                    for ($i = 0; $i <= 65; $i++) {
                        echo '-';
                    }

                    echo LB;
                    // echo " User Agent : $this->msg_tab" . $this->browser->getUserAgent() . LB;
                    echo sprintf(' Request URL : %1$s%2$s %3$s.', $this->msgTab, $requestMethod, $requestAddress) . LB;
                    echo LB;
                    echo sprintf(' IP address : %1$s%2$s', $this->msgTab, IP::get()) . LB;

                    if (lower(IP::getCountry()) !== 'unknown') {
                        echo sprintf(' Country : %1$s%2$s', $this->msgTab, IP::getCountry()) . LB;
                    } elseif (lower(IP::getInfo('country')) !== 'unknown location') {
                        echo sprintf(' Country : %1$s%2$s', $this->msgTab, IP::getInfo('country')) . LB;
                    }


                    // avoid error browser capturing
                    if (Inflect::lower($this->browser->getBrowserName()) !== 'unknown') {
                        echo sprintf(' Browser : %1$s%2$s', $this->msgTab, $this->browser->getBrowserNameFull()) . LB;
                    }

                    // avoid error device capturing
                    if (Inflect::lower($this->browser->getDeviceName()) !== 'unknown') {
                        echo sprintf(
                                 ' Device : %1$s%2$s (%3$s)',
                                 $this->msgTab,
                                 $this->browser->getDeviceName(),
                                 Inflect::lower($this->browser->getPlatformArchitecture())
                             ) . LB;
                    }

                    for ($i = 0; $i <= 65; $i++) {
                        echo '-';
                    }

                    echo LB;
                    //echo 'Copyright © '.Time::getCurrentYearNumber().' '
                    //.Framework::COMPANY_NAME.'. All Right Reserved.'.LB;
                    echo sprintf(' © %1$s %2$s', Time::currentYearNumber(), Framework::COMPANY_NAME) . LB;
                } else {
                    // Ui\EmbeddedView::protection(
                    FirewallView::protection(
                        "$title denied",
                        [
                            'caption' => sprintf(' %1$s has been %2$s', $component, $status),
                            'message' => "This is internal error occurred. if you are developer or owner of this website, please fix this problem.",
                        ],
                        Http\Errors::NOT_ACCEPTABLE
                    );
                }
                Framework::terminate();//end if
            }//end if
        }//end defenseMessageShow()


        /**
         * @return string
         */
        public function getDuration(): string
        {
            return (string)$this->duration;
        }//end getDuration()


        /**
         * @return int
         */
        public function getLastVisitDuration(): int
        {
            return $this->lastVisitDuration;
        }//end getLastVisitDuration()


        /**
         * @return string
         */
        public function getController(): string
        {
            return $this->controller;
        }//end getController()


        /**
         * @return string
         */
        public function getSeparator(): string
        {
            return $this->separator;
        }//end getSeparator()


        public function __destruct() {}//end __destruct()
    }//end class
