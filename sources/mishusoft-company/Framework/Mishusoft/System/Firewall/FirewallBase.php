<?php

    namespace Mishusoft\System\Firewall;

    use GeoIp2\Exception\AddressNotFoundException;
    use MaxMind\Db\Reader\InvalidDatabaseException;
    use Mishusoft\Exceptions\HttpException\HttpResponseException;
    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Http\Browser;
    use Mishusoft\Http\IP;
    use Mishusoft\Storage;
    use Mishusoft\System\Base;
    use Mishusoft\System\Time;

    abstract class FirewallBase extends Base
    {
        use Config;
        use Assets;

        /**
         * Firewall configuration array.
         *
         * @var array
         */
        protected array $config = [];


        /**
         * @var array|string
         */
        protected static array|string $messageOfBlock = '';

        /**
         * Check if access request is granted, else return false
         *
         * @var bool
         */
        protected bool $accessRequestProcessed = false;

        /**
         * Action status.
         *
         * @var string
         */
        protected string $actionStatus = '';

        /**
         * Action component.
         *
         * @var string
         */
        protected string $actionComponent = '';

        /**
         * Message table.
         *
         * @var string
         */
        protected string $msgTab = '';

        /**
         * Duration
         *
         * @var string|int
         */
        protected string|int $duration = '';

        /**
         * Controller.
         *
         * @var string
         */
        protected string $controller = '';

        /**
         * Separator.
         *
         * @var string
         */
        protected string $separator = '';

        /**
         * Last visited duration.
         *
         * @var int
         */
        protected int $lastVisitDuration = 0;

        protected Browser $browser;

        /**
         * Firewall Base constructor.
         */
        public function __construct()
        {
            parent::__construct();

            // make browser object for firewall
            $this->browser = new Browser();
            //pp($this->browser->details());
            //exit();
        }


        /**
         * Firewall config loader.
         *
         * @return void
         * @throws PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        protected function loadConfig(): void
        {

            //Create directory log and config if not exists.
            Storage\FileSystem::makeDirectory(dirname($this->configFile()));
            Storage\FileSystem::makeDirectory(logs_directive(self::logDirectory()));

            //Check firewall configuration file existent.
            if (!file_exists($this->configFile()) || file_get_contents($this->configFile()) === '') {
                emit_msf_file($this->configFile(), []);
            }

            //Check read permission of configuration file.
            if (is_readable($this->configFile()) === true) {
                //check configuration file's content are valid array
                $this->config = parse_msf_file($this->configFile());
                /*
                 * Check the firewall configuration is empty or not
                 * if it empties, then configuration reset with default
                 */
                if (count($this->config) > 0) {
                    /*
                     * we need to array match
                     * if return false, then we need to replace and continue
                     */
                    if (count(array_diff_assoc($this->requiredProperties(), $this->config)) > 0) {
                        $this->config = array_replace_recursive($this->config, $this->requiredProperties());
                    }
                } else {
                    //merge to default configuration
                    $this->config = array_merge_recursive($this->requiredProperties(), $this->defaultProperties());
                } //end if

                /*
                 * if loaded firewall configuration is not valid array,
                 * then delete configuration file and write new default data
                 */

                if (count($this->config) === 10) {
                    $this->config = array_replace_recursive($this->config, $this->defaultProperties());
                }
                /*
                 * if firewall configuration file is empty,
                 * then create configuration file and write new default data
                 */

                $currentContent = parse_msf_file($this->configFile());
                if ($currentContent !== []) {
                    $firewallArrayKeys     = array_keys($this->config);
                    $firewallFileArrayKeys = array_keys($currentContent);

                    if (count(array_diff_assoc($firewallArrayKeys, $firewallFileArrayKeys)) > 0) {
                        $this->createConfiguration($this->config);
                    }
                } else {
                    $this->createConfiguration($this->config);
                }
            } else {
                throw new PermissionRequiredException('Read permission required. Unable to read root' . $this->configFile());
            } //end if
        }


        /**
         * Create configuration file.
         *
         * @param array<string, mixed> $config Array format of Firewall configuration.
         *
         * @return void
         */
        protected function createConfiguration(array $config): void
        {
            if (file_exists($this->configFile()) === true) {
                Storage\FileSystem::remove($this->configFile());
            }

            emit_msf_file($this->configFile(), $config);
        }


        /**
         * @return array<string, mixed>
         * @throws HttpResponseException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         */
        protected function getNewVisitor(): array
        {
            return [
                'ip'         => IP::get(),
                'country'    => IP::getCountry(),
                'location'   => IP::getInfo(),
                'device'     => $this->browser->getDeviceNameWithArch(),
                'browser'    => $this->browser->getBrowserNameFull(),
                'UUAS'       => get_http_user_agent(),
                'url'        => get_visited_current_page(),
                'status'     => $this->actionStatus,
                'component'  => $this->actionComponent,
                'visit-time' => Time::today(),
            ];
        }


        /**
         * @return array<string, mixed>
         * @throws HttpResponseException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         */
        protected function getNewVisitorTimeBased(): array
        {
            return [Time::today() => $this->getNewVisitor(),];
        }


        /**
         * @return array<string, mixed>
         * @throws HttpResponseException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         */
        protected function getNewVisitorBrowserBased(): array
        {
            return [$this->browser->getBrowserNameFull() => $this->getNewVisitorTimeBased()];
        }


        /**
         * @return array<string, mixed>
         * @throws HttpResponseException
         * @throws AddressNotFoundException
         * @throws InvalidDatabaseException
         */
        protected function getNewVisitorIPBased(): array
        {
            return [IP::get() => $this->getNewVisitorBrowserBased()];
        }


        /**
         * @throws AddressNotFoundException
         * @throws HttpResponseException
         * @throws InvalidDatabaseException
         * @throws PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        protected function storeFirewallLogs(): void
        {
            $logDataFile     = $this->logFile($this->actionStatus);
            $currentVisitor  = $this->getNewVisitorIPBased();
            $browserNameFull = $this->browser->getBrowserNameFull();

            Storage\FileSystem::makeDirectory(dirname($logDataFile));

            if (is_writable(dirname($logDataFile))) {
                // initiate logs variable for store data
                $logs = [];

                //check file exists
                if (file_exists($logDataFile)) {
                    //check point for log file content length
                    $logs = include $logDataFile;
                }

                if (is_array($logs) && $logs !== []) {
                    if (array_key_exists(IP::get(), $logs) === true) {
                        if (array_key_exists($browserNameFull, $logs[IP::get()]) === true) {
                            if (array_key_exists(Time::today(), $logs[IP::get()][$browserNameFull]) === false) {
                                // Append current(new) access data of current client to logs file.
                                $logs[IP::get()][$browserNameFull][Time::today()] = $this->getNewVisitor();
                                write_php_data_file($logDataFile, $logs);
                            } //end if
                        } else {
                            // Append current(new) browser's data of current client to logs file.
                            $logs[IP::get()][$browserNameFull][Time::today()] = $this->getNewVisitor();
                            write_php_data_file($logDataFile, $logs);
                        } //end if
                    } else {
                        // Append new data about current client to logs file.
                        write_php_data_file($logDataFile, array_merge($logs, $currentVisitor));
                    } //end if
                } else {
                    //Write new data to empty file.
                    write_php_data_file($logDataFile, $currentVisitor);
                } //end if
            } else {
                throw new PermissionRequiredException(
                    sprintf('Unable to write %s', dirname($logDataFile))
                );
            } //end if
        }
    }
