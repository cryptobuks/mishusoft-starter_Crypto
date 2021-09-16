<?php declare(strict_types=1);

namespace Mishusoft\System;

use GeoIp2\Exception\AddressNotFoundException;
use JsonException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Base;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Http\IP;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Utility\Character;
use Mishusoft\Utility\Inflect;
use RuntimeException;

class Firewall extends Base
{
    public const REQUIRED_KEYS = [
        'status' => 'enable',
        'granted-device-access-limit-filter' => 'enable',
        'granted-device-access-limit' => '600',
        'granted-device-time-limit' => '60',
        'granted-device-limit-time-format' => 'minute',
        'blocked-device-access-limit-filter' => 'enable',
        'blocked-device-access-limit' => '10',
        'blocked-device-time-limit' => '60',
        'blocked-device-limit-time-format' => 'minute',
    ];

    public const BUILT_IN_CONFIG = [
        'granted-device-count-down-time' => [],
        'blocked-device-count-down-time' => [],
        'accept' => [
            'request-method' => [
                'get',
                'post',
                'accept',
                'ms-feedback-data',
                'options',
            ],
        ],
        'browser' => [
            'order' => 'blacklist',
            'banned' => ['curl', 'zmeu'],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'ip' => [
            'order' => 'blacklist',
            'banned' => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'device' => [
            'order' => 'blacklist',
            'banned' => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'continent' => [
            'order' => 'blacklist',
            'banned' => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'country' => [
            'order' => 'blacklist',
            'banned' => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'city' => [
            'order' => 'blacklist',
            'banned' => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
    ];

    protected static array|string $messageOfBlock = '';

    /**
     * Check if access request is granted, else return false
     *
     * @var boolean
     */
    public bool $accessRequestProcessed = false;

    /**
     * Firewall configuration array.
     *
     * @var array
     */
    private array $config = [];

    /**
     * Action status.
     * @var string
     */
    private string $actionStatus = '';

    /**
     * Action component.
     *
     * @var string
     */
    private string $actionComponent = '';

    /**
     * Message table.
     *
     * @var string
     */
    private string $msgTab = '';

    /**
     * Duration
     *
     * @var string|int
     */
    private string|int $duration = '';

    /**
     * Controller.
     *
     * @var string
     */
    private string $controller = '';

    /**
     * Separator.
     *
     * @var string
     */
    private string $separator = '';

    /**
     * Last visited duration.
     *
     * @var integer
     */
    private int $lastVisitDuration = 0;

    /**
     * Firewall constructor.
     *
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct(
        private Framework $framework
    ) {
        parent::__construct();

        Log::info(sprintf('Load Firewall configuration from %s.json.', self::configFile()));
        $this->loadConfig();
    }//end __construct()

    private static function logDirectory(): string
    {
        //data-drive/Firewall/logs/
        return sprintf(
            '%1$s%2$s%5$s%3$s%5$s%4$s%5$s',
            Storage::configDataDriveStoragesPath(),
            'Firewall',
            'logs',
            Time::todayDateOnly(),
            DS
        );
    }

    private static function logFile(string $underTakenAction): string
    {
        //data-drive/Firewall/logs/blocked.yml
        //data-drive/Firewall/logs/banned.yml
        //data-drive/Firewall/logs/granted.yml
        return self::dFile(sprintf(
            '%1$s%2$s',
            self::logDirectory(),
            $underTakenAction
        ));
    }


    /**
     * @return string
     */
    public static function configFile(): string
    {
        return self::dFile(self::configDataFile('Firewall', 'config'));
    }


    /**
     * @return string
     */
    private static function siteFile(): string
    {
        return self::dFile(self::configDataFile('Firewall', 'sites'));
    }


    /**
     * Firewall config loader.
     *
     * @return void
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function loadConfig(): void
    {
        /*
         * Check firewall configuration file existent.
         */

        Log::info(sprintf('Start checking if %s file exists.', self::configFile()));
        if (file_exists(self::configFile()) === false) {
            Log::error(sprintf('The file %s is not exists.', self::configFile()));
            Log::notice(sprintf('Write new file %s.', self::configFile()));
            FileSystem::makeDirectory(dirname(self::configFile()));
            FileSystem\Yaml::emitFile(self::configFile(), []);
        }

        Log::info(sprintf('End checking if %s file exists.', self::configFile()));

        /*
         * Check firewall logs file existent.
         */

        Log::info(sprintf('Start checking if %s directory exists.', self::logDirectory()));
        if (file_exists(self::logDirectory()) === false) {
            Log::error(sprintf('The directory %s is not exists.', self::logDirectory()));
            Log::notice(sprintf('Make new directory %s', self::logDirectory()));
            FileSystem::makeDirectory(self::logDirectory());
        }

        Log::info(sprintf('End checking if %s directory exists.', self::logDirectory()));

        /*
         * Check read permission of configuration file.
         */

        Log::info(sprintf('Start checking read permission of %s.', self::configFile()));
        if (is_readable(self::configFile()) === true) {
            /*
             * check configuration file's content are valid array
             */

            $oldConfiguration = FileSystem\Yaml::parseFile(self::configFile());
            Log::info(
                sprintf(
                    'Start of test whether the content of %s file can be converted to array format.',
                    self::configFile()
                )
            );
            if (is_array($oldConfiguration) === true) {
                Log::info(sprintf('Converted %s for content into array format.', self::configFile()));
                Log::info(sprintf('Load array format content into runtime from %s.', self::configFile()));
                $this->config = $oldConfiguration;
            }

            Log::info(
                sprintf(
                    'End of test whether the content of %s file can be converted to array format.',
                    self::configFile()
                )
            );
            /*
             * Check the firewall configuration is empty or not
             * if it empties, then configuration reset with default
             */

            Log::info(sprintf('Start checking whether the %s file is empty.', self::configFile()));
            if (count($this->config) > 0) {
                /*
                 * we need to array match
                 * if return false, then we need to replace and continue
                 */

                Log::info('Check different of runtime configuration and required keys.');
                if (count(array_diff_assoc(self::REQUIRED_KEYS, $this->config)) > 0) {
                    Log::info('Different found from runtime configuration and required keys.');
                    $replaced = array_replace_recursive($this->config, self::REQUIRED_KEYS);
                    if ($replaced !== null) {
                        Log::notice('Load changed configuration into runtime configuration.');
                        $this->config = $replaced;
                    }
                }
            } else {
                /*
                 * merge to default configuration
                 */

                Log::alert(sprintf('The content of %s is not empty.', self::configFile()));
                Log::notice('Merging default configuration into runtime configuration.');
                $this->config = array_merge_recursive(self::REQUIRED_KEYS, self::BUILT_IN_CONFIG);
            }//end if

            Log::info(sprintf('End checking whether the %s file is empty.', self::configFile()));
            /*
             * if loaded firewall configuration is not valid array,
             * then delete configuration file and write new default data
             */

            Log::info('Check required attribute of runtime configuration.');
            if (count($this->config) === 10) {
                Log::notice('Attribute missing found from runtime configuration.');
                $config = array_replace_recursive($this->config, self::BUILT_IN_CONFIG);
                if ($config !== null) {
                    Log::notice('Load changed configuration into runtime configuration.');
                    $this->config = $config;
                }
            }
            /*
             * if firewall configuration file is empty,
             * then create configuration file and write new default data
             */

            Log::info(sprintf('Check content array conversation of %s.', self::configFile()));
            if (is_array(FileSystem\Yaml::parseFile(self::configFile())) === true) {
                $firewallArrayKeys = array_keys($this->config);
                $firewallFileArrayKeys = array_keys(FileSystem\Yaml::parseFile(self::configFile()));

                Log::notice('Check different of runtime configuration and stored configuration.');
                if (count(array_diff_assoc($firewallArrayKeys, $firewallFileArrayKeys)) > 0) {
                    Log::notice('Write the difference of runtime configuration and stored configuration.');
                    $this->createConfiguration($this->config);
                }
            } else {
                Log::alert('Write current runtime configuration.');
                $this->createConfiguration($this->config);
            }
        } else {
            Log::error(sprintf('Read permission required. Unable to read %s.', self::configFile()));
            throw new PermissionRequiredException('Read permission required. Unable to read root' . self::configFile());
        }//end if

        Log::info(sprintf('End checking read permission of %s.', self::configFile()));
    }//end loadConfig()


    /**
     * Create http request to system for the client
     *
     * @return bool
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws JsonException Throw exception when json error occurred.
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function isRequestAccepted(): bool
    {
        Log::info('Check domain installation file of framework.');
        if (file_exists(self::siteFile()) === true) {
            $installedHost = FileSystem\Yaml::parseFile(self::siteFile());
            if (in_array(INSTALLED_HOST_NAME, $installedHost, true) === true) {
                //start new world-class test
                //print_r($installedHost, false);

                Log::info('Filter request of client.');
                $this->filterHttpRequest();

                return $this->makeAction();
            } else {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'domain';
                return $this->makeAction();
            }
        } else {
            Log::alert('Adding new domain to install framework.');
            FileSystem\Yaml::emitFile(self::siteFile(), [
                INSTALLED_HOST_NAME,
            ]);
            return $this->makeAction();
        }


        Log::notice('Start create http request to system for the client');

        // Start test website's host name
        Log::notice(
            sprintf(
                'Start testing requested hostname [%s] with firewall configuration.',
                Registry::Browser()->getURLHostname()
            )
        );

        if ($this->config['hostname'] !== Registry::Browser()->getURLHostname()) {
            Log::error(
                sprintf(
                    'Requested hostname [%s] does not matched with firewall configuration.',
                    Registry::Browser()->getURLHostname()
                )
            );

            $this->actionStatus = 'blocked';
            $this->actionComponent = 'domain';
            return $this->makeAction();

//            if ($this->isListed(IP::get()) === false) {
//                Log::info(
//                    sprintf(
//                        'Firewall block the browser %s of client.',
//                        Registry::Browser()->getBrowserNameFull()
//                    )
//                );
//                $this->actionStatus = 'blocked';
//                $this->actionComponent = 'browser';
//            }
        }

        Log::info(
            sprintf(
                'End testing requested hostname [%s] with firewall configuration.',
                Registry::Browser()->getURLHostname()
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
            $this->actionStatus = 'banned';
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
                Registry::Browser()->getBrowserNameFull()
            )
        );

        if (in_array(strtolower(Registry::Browser()->getBrowserName()), $this->config['browser']['banned'], true) === true) {
            Log::notice(
                sprintf(
                    'The client browser [%s] found in banned list.',
                    Registry::Browser()->getBrowserNameFull()
                )
            );
            Log::notice('Firewall banned the browser.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'browser';
        }

        Log::info(
            sprintf(
                'End searching client browser [%s] in banned list.',
                Registry::Browser()->getBrowserNameFull()
            )
        );

        // End test the web browser of client.
        // Start test the device name of client.
        Log::info(
            sprintf(
                'Start searching client device [%s] in banned list.',
                Registry::Browser()->getDeviceNameFull()
            )
        );
        if (in_array(Character::lower(Registry::Browser()->getDeviceName()), $this->config['device']['banned'], true) === true) {
            Log::notice(
                sprintf(
                    'The client device [%s] found in banned list.',
                    Registry::Browser()->getDeviceNameFull()
                )
            );
            Log::notice('Firewall banned the device.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'device';
        }

        Log::info(
            sprintf(
                'End searching client device [%s] in banned list.',
                Registry::Browser()->getDeviceNameFull()
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
        if (in_array(Character::lower(IP::getInfo('continent')), $this->config['continent']['banned'], true)) {
            Log::notice(
                sprintf(
                    'The client continent [%s] found in banned list.',
                    IP::getInfo('continent')
                )
            );
            Log::notice('Firewall banned the continent.');
            $this->actionStatus = 'banned';
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
        if (in_array(Character::lower(IP::getInfo('country')), $this->config['country']['banned'], true) === true) {
            Log::notice('The client continent found in banned list.');
            Log::notice('Firewall banned the country.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'country';
        }

        Log::info('End searching client country in banned list.');

        // End test the country name of client.
        // Start test the country name of client.
        Log::info('Start searching client city in banned list.');
        if (in_array(Character::lower(IP::getInfo('city')), $this->config['city']['banned'], true)) {
            Log::notice('The client city found in banned list.');
            Log::notice('Firewall banned the city.');
            $this->actionStatus = 'banned';
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
            if (in_array(Character::lower(Registry::Browser()->getBrowserName()), $this->config['browser']['blacklist'], true) === true) {
                Log::notice('The client browser found in black list.');
                Log::notice('Firewall banned the browser.');
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'browser';
            }
        }
        Log::info('End searching client browser in banned list.');

        // End test the city name of client.

        if ($this->config['browser']['order'] === 'whitelist') {
            if (in_array(Character::lower(Registry::Browser()->getBrowserName()), $this->config['browser']['whitelist'], true) === false) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'browser';
            }
        }

        if ($this->config['ip']['order'] === 'blacklist') {
            // we need to check block time of ip,
            // if the time has been expired, then unblock the ip
            // or show protection message
            if (in_array(IP::get(), $this->config['ip']['blacklist'], true) === false) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'IP';
            }
        }

        if ($this->config['ip']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->config['ip']['whitelist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'IP';
            }
        }

        if ($this->config['device']['order'] === 'blacklist') {
            // we need to check block time of device,
            // if the time has been expired, then unblock the device
            // or show protection message
            if (in_array(IP::get(), $this->config['device']['blacklist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'device';
            }
        }

        if ($this->config['device']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->config['device']['whitelist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'device';
            }
        }

        if ($this->config['continent']['order'] === 'blacklist') {
            // we need to check block time of continent,
            // if the time has been expired, then unblock the continent
            // or show protection message
            if (in_array(IP::get(), $this->config['continent']['blacklist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'continent';
            }
        }

        if ($this->config['continent']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->config['continent']['whitelist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'continent';
            }
        }

        if ($this->config['country']['order'] === 'blacklist') {
            // we need to check block time of country,
            // if the time has been expired, then unblock th country
            // or show protection message
            if (in_array(IP::get(), $this->config['country']['blacklist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'country';
            }
        }

        if ($this->config['country']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->config['country']['whitelist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'country';
            }
        }

        if ($this->config['city']['order'] === 'blacklist') {
            // we need to check block time of city,
            // if the time has been expired, then unblock the city
            // or show protection message
            if (in_array(IP::get(), $this->config['city']['blacklist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'city';
            }
        }

        if ($this->config['city']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->config['city']['whitelist'], true)) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'city';
            }
        }

        Log::info('End create http request to system for the client');
    }//end makeAccessRequest()

    /**
     * @return bool
     * @throws HttpResponseException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function makeAction(): bool
    {
        if (!empty($this->actionStatus) && ($this->actionStatus === 'banned' || 'blocked')) {
            $this->storeFirewallLogs();
            $this->accessDefence($this->actionStatus);
            $this->accessRequestProcessed = false;
        } else {
            $this->actionStatus = 'granted';
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
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function filterHttpRequest(): void
    {
        /*
         * Check accept attribute in firewall configuration
         * if not exists, then reset configuration.
         */

        Log::info('Start checking whether the accept keyword is in the $this->config variable.');
        if (array_key_exists('accept', $this->config) === false) {
            Log::error('Check failed. Accept keyword not found in $this->config variable.');
            Log::alert('Creating new config with built in config.');
            $this->createConfiguration(array_merge_recursive(self::REQUIRED_KEYS, self::BUILT_IN_CONFIG));
        }

        Log::info('End checking whether the accept keyword is in the $this->config variable.');

        Log::info('Start checking whether REQUEST_METHOD keyword in $_SERVER variable.');
        Log::info('Search accept keyword in allowed request method variable.');
        $requestMethodAll = $this->config['accept']['request-method'];
        if (in_array(Inflect::lower($_SERVER['REQUEST_METHOD']), $requestMethodAll, true) === false) {
            Log::error('Browser Request Method was not found in the authorized method.');
            Log::notice('Check whether the client\'s IP is blocked');
            if ($this->isListed(IP::get()) === false) {
                Log::notice('The client\'s IP is not blocked. Then it will be blocked.');
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'IP';
                $this->addIP(IP::get(), 'blocked');
            }
        }

        Log::info('End checking whether REQUEST_METHOD keyword in $_SERVER variable.');
    }//end filterHttpRequest()


    /**
     * Create configuration file.
     *
     * @param array $config Array format of Firewall configuration.
     *
     * @return void
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function createConfiguration(array $config): void
    {
        Log::info('Check runtime configuration file existent.');
        if (file_exists(self::configFile()) === true) {
            Log::alert('Remove exists runtime configuration file.');
            FileSystem::remove(self::configFile());
        }

        Log::notice(sprintf('Write firewall configuration into %s.', self::configFile()));
        FileSystem\Yaml::emitFile(self::configFile(), $config);
    }//end createConfiguration()


    /**
     * @throws HttpResponseException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function storeFirewallLogs(): void
    {
        $logs = [];
        $logDataFile = self::logFile($this->actionStatus);
        $currentVisitor = $this->getNewVisitorIPBased();
        $browserNameFull = Registry::Browser()->getBrowserNameFull();

        if (is_writable(dirname($logDataFile)) === true) {
            //check point for log file content length
            if ((file_exists($logDataFile) === true) && FileSystem::read($logDataFile) !== '') {
                $oldContent = FileSystem\Yaml::parseFile($logDataFile);

                //Merge file's content with logs
                if (is_array($oldContent) === true) {
                    $logs = array_merge($logs, $oldContent);
                }//end if

                if (count($logs) !== 0) {
                    if (array_key_exists(IP::get(), $logs) === true) {
                        if (array_key_exists($browserNameFull, $logs[IP::get()]) === true) {
                            if (array_key_exists(Time::today(), $logs[IP::get()][$browserNameFull]) === false) {
                                // Append current(new) access data of current client to logs file.
                                $logs[IP::get()][$browserNameFull][Time::today()] = $this->getNewVisitor();
                                FileSystem\Yaml::emitFile($logDataFile, $logs);
                            }//end if
                        } else {
                            // Append current(new) browser's data of current client to logs file.
                            $logs[IP::get()][$browserNameFull][Time::today()] = $this->getNewVisitor();
                            FileSystem\Yaml::emitFile($logDataFile, $logs);
                        }//end if
                    } else {
                        // Append new data about current client to logs file.
                        FileSystem\Yaml::emitFile($logDataFile, array_merge($logs, $currentVisitor));
                    }//end if
                } else {
                    //Write new data to empty file.
                    FileSystem\Yaml::emitFile($logDataFile, $currentVisitor);
                }//end if
            } else {
                //Write new data to empty file.
                FileSystem\Yaml::emitFile($logDataFile, $currentVisitor);
            }//end if
        } else {
            throw new PermissionRequiredException(
                sprintf('Unable to write %s', dirname($logDataFile))
            );
        }//end if
    }//end storeFirewallLogs()


    /**
     * Check the IP Address of client in blacklist or banned.
     *
     * @param string $ip The IP Address of client.
     * @param string $list List name of action.
     *
     * @return boolean
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
     * @param string $ip The IP Address of client.
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
                throw new \Mishusoft\Exceptions\RuntimeException('Unexpected value');
        }//end switch
    }//end addIP()


    /**
     * Remove the IP Address from the action list
     *
     * @param string $ip The IP Address of client.
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
     * @param string $ip The IP Address of client.
     * @param string $list List name of action.
     *
     * @return void
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function updateList(string $ip, string $list): void
    {
        if (in_array($ip, $this->config['ip'][$list], true) === false) {
            $this->config['ip'][$list][] = $ip;
            FileSystem\Yaml::emitFile(self::configFile(), $this->config);
        }
    }//end updateList()


    /**
     * Prepare runtime failure ui for html display.
     *
     * @param int $status Name of action.
     * @param array $message Error message.
     *
     * @return void
     * @throws AddressNotFoundException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws InvalidDatabaseException
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function runtimeFailure(int $status, array $message): void
    {
        if (array_key_exists($status, Http::errorsRecords())) {
            self::runtimeFailureUi(Http::errorDescription($status), $message);
        }//end if
    }//end runtimeFailure()


    /**
     * Runtime failure ui for html display.
     *
     * @param string $title Name of action.
     * @param array $message Error message.
     *
     * @return void
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private static function runtimeFailureUi(string $title, array $message): void
    {
        if (Memory::Data('framework')->debug === false) {
            if (array_key_exists('error', $message) === true) {
                $message = $message['error'];
            } else {
                $message = ['description' => 'Your requested document not found.'];
            }//end if
        } else {
            $message = $message['debug'];
        }//end if

        if (IS_CLI) {
            echo $message['description'].LB;
        } elseif (Registry::Browser()->getRequestMethod() === 'OPTIONS') {
            // add welcome not for http options method
            Storage\Stream::json(['message' => ['type' => 'error', 'contents' => "An Internal error occurred."]]);
        } elseif (Registry::Browser()->getRequestMethod() === 'GET') {
            if (array_key_exists('caption', $message)) {
                FirewallView::debug($message['caption'], $message, Http::errorCode($title));
                //Ui\EmbeddedView::debug($message['caption'], $message, Http::errorCode($title));
            } else {
                FirewallView::runtimeFail($title, $message, Http::errorCode($title));
                //Ui\EmbeddedView::runtimeFail($title, $message, Http::errorCode($title));
            }//end if
        } else {
            Storage\Stream::json([
                    'message' => [
                        'type' => 'error',
                        'details' => $message['debug']['description'],
                        'visitor' => [
                            'user-agent' => Registry::Browser()->getUserAgent(),
                            'request-method' => Registry::Browser()->getRequestMethod(),
                            'request-url' => Registry::Browser()::getVisitedPage(),
                            'ip-address' => IP::get(),
                        ],
                    ],
                    'copyright' => [
                        'year' => Time::currentYearNumber(),
                        'owner' => Framework::COMPANY_NAME,
                    ],
            ]);
        }//end if
    }//end runtimeFailureUi()


    /**
     * @return array[]
     * @throws HttpResponseException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function getNewVisitor(): array
    {
        return  [
            'ip'        => IP::get(),
            'country'   => IP::getCountry(),
            'location'  => IP::getInfo(),
            'device'    => Registry::Browser()->getDeviceNameWithArch(),
            'browser'   => Registry::Browser()->getBrowserNameFull(),
            'UUAS'      => Registry::Browser()->getUserAgent(),
            'url'       => Registry::Browser()::VisitedPageURL($_SERVER),
            'status'    => $this->actionStatus,
            'component' => $this->actionComponent,
            'visit-time' => Time::today(),
        ];
    }//end getNewVisitorTimeBased()


    /**
     * @return array[]
     * @throws HttpResponseException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function getNewVisitorTimeBased(): array
    {
        return [Time::today() => $this->getNewVisitor(),];
    }//end getNewVisitorTimeBased()


    /**
     * @return \array[][]
     * @throws HttpResponseException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function getNewVisitorBrowserBased(): array
    {
        return [Registry::Browser()->getBrowserNameFull() => $this->getNewVisitorTimeBased()];
    }//end getNewVisitorBrowserBased()


    /**
     * @return \array[][][]
     * @throws HttpResponseException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private function getNewVisitorIPBased(): array
    {
        return [IP::get() => $this->getNewVisitorBrowserBased()];
    }//end getNewVisitorIPBased()


    /**
     * @param string $status
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function accessDefence(string $status): void
    {
        if (array_key_exists("$status-device-access-limit-filter", $this->config)
            && $this->config["$status-device-access-limit-filter"] === 'enable') {
            if (is_readable(self::logFile($this->actionStatus)) === true) {
                if (!empty(file_get_contents(self::logFile($this->actionStatus)))) {
                    $logs = FileSystem\Yaml::parseFile(self::logFile($this->actionStatus));
                    if (is_array($logs) && count($logs) !== 0) {
                        if (array_key_exists($status, $logs)) {
                            if (is_array($logs[$status]) && array_key_exists(IP::get(), $logs[$status])) {
                                $times = [];
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

                                $now = array_shift($times);
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
                                                FileSystem\Yaml::emitFile(self::configFile(), $this->config);
                                            }//end if

                                            else {
                                                // Set new time, if previous time set more than 10 minutes
                                                $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                                if ($this->lastVisitDuration > 10) {
                                                    // preOutput("Setting previous time!!");
                                                    $this->config["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                                    FileSystem\Yaml::emitFile(self::configFile(), $this->config);
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

                                            FileSystem\Yaml::emitFile(self::configFile(), $this->config);
                                            // preOutput($this->config["$status-device-count-down-time"]);
                                        }
                                    } //end if

                                    else {
                                        // Autoload::log("Preparing to create firewall configuration file.");
                                        if (FileSystem::IsWriteable(Firewall::configFile())) {
                                            FileSystem\Yaml::emitFile(Firewall::configFile(), self::BUILT_IN_CONFIG);
                                        }

                                        // load firewall configuration in runtime
                                        $this->config = self::BUILT_IN_CONFIG;
                                    }

                                    $this->controller = !empty($this->config["$status-device-count-down-time"][IP::get()]) ? $this->config["$status-device-count-down-time"][IP::get()] : $previous['visit-time'];
                                    /*
                                        check limit time format key and value*/
                                    // $minutes = (strtotime("2012-09-21 12:12:22") - time()) / 60;
                                    if (array_key_exists("$status-device-limit-time-format", $this->config)) {
                                        // check limit time format key value, and it is second, so calculate duration as seconds
                                        if ($this->config["$status-device-limit-time-format"] === 'second') {
                                            $this->duration = (strtotime($now['visit-time']) - strtotime($this->controller));
                                            $this->separator = 'seconds';
                                        } //end if

                                        elseif ($this->config["$status-device-limit-time-format"] === 'minute') {
                                            $this->duration = (int)((strtotime($now['visit-time']) - strtotime($this->controller)) / 60);
                                            $this->separator = 'minutes';
                                        } //otherwise calculate duration as hours.

                                        else {
                                            $this->duration = (int)(((strtotime($now['visit-time']) - strtotime($this->controller)) / 60) / 60);
                                            $this->separator = 'hours';
                                        }
                                    } //end if

                                    else {
                                        // Autoload::log("Preparing to create firewall configuration file.");
                                        if (FileSystem::IsWriteable(Firewall::configFile())) {
                                            FileSystem\Yaml::emitFile(Firewall::configFile(), self::BUILT_IN_CONFIG);
                                        }

                                        // load firewall configuration in runtime
                                        $this->config = self::BUILT_IN_CONFIG;
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
                        'Unable to continue. ' . self::logFile($this->actionStatus) . ' is empty'
                    );
                }//end if
            } else {
                throw new RuntimeException('Permission denied. Unable to read ' . self::logFile($this->actionStatus));
            }//end if
        }//end if
    }//end accessDefence()


    /**
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    public function defenceActivate(): void
    {

        if ($this->actionStatus === 'banned' || $this->actionStatus === 'blocked') {
            if (array_key_exists('ui', Registry::Browser()->details())) {
                //GranParadiso/3.0.8 is text browser
                if (Character::lower(Registry::Browser()->details()['ui']) === Character::lower('FullTextMode')) {
                    $this->msgTab = "\t";
                    $this->defenseMessageShow('', $this->actionStatus, $this->actionComponent, 'text');
                } else {
                    $this->msgTab = '&emsp;';
                    $this->defenseMessageShow(
                        'Access',
                        $this->actionStatus,
                        $this->actionComponent,
                        'graphic'
                    );
                }
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
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    private function defenseMessageShow(string $title, string $status, string $component, string $viewMode): void
    {
        if ($component === 'browser') {
            $componentText = "on $component " . Registry::Browser()->getBrowserNameFull();
        } else {
            $componentText = "from $component " . IP::get();
        }
        $requestMethod = Registry::Browser()->getRequestMethod();
        $requestAddress = Registry::Browser()::getVisitedPage();

        if (!empty($viewMode)) {
            if (Registry::Browser()->getRequestMethod() === 'OPTIONS') {
                // add welcome not for http options method
                Storage\Stream::json([
                    'message' => [
                    'type' => 'error',
                    'contents' => "The HTTP OPTIONS method requests not permitted to communicate for $requestAddress.",
                    ],
                ]);
            } elseif (Network::requestHeader('HTTP_SEC_FETCH_MODE') === 'cors') {
                Storage\Stream::json(
                    [
                        'message' => [
                            'type' => 'error',
                            'details' => "Your access has been $status $componentText.",
                            'visitor' => [
                                'user-agent' => Registry::Browser()->getUserAgent(),
                                'request-method' => Registry::Browser()->getRequestMethod(),
                                'request-url' => Registry::Browser()::getVisitedPage(),
                                'ip-address' => IP::get(),
                            ],
                        ],
                        'copyright' => [
                            'year' => Time::currentYearNumber(),
                            'owner' => Framework::COMPANY_NAME,
                        ],
                    ]
                );
            } elseif ($viewMode === 'text') {
                echo LB;
                echo " Your access has been $status $componentText. " . LB;
                for ($i = 0; $i <= 65; $i++) {
                    echo '-';
                }

                echo LB;
                // echo " User Agent : $this->msg_tab" . Registry::Browser()->getUserAgent() . LB;
                echo " Request URL : $this->msgTab$requestMethod $requestAddress" . LB;
                echo LB;
                echo " IP address : $this->msgTab" . IP::get() . LB;

                if (Character::lower(IP::getCountry()) !== 'unknown') {
                    echo " Country : $this->msgTab" . IP::getCountry() . LB;
                } elseif (Character::lower(IP::getInfo('country')) !== 'unknown location') {
                    echo " Country : $this->msgTab" . IP::getInfo('country') . LB;
                }

                // avoid error browser capturing
                if (Character::lower(Registry::Browser()->getBrowserName()) !== 'unknown') {
                    echo " Browser : $this->msgTab" . Registry::Browser()->getBrowserNameFull() . LB;
                }

                // avoid error device capturing
                if (Character::lower(Registry::Browser()->getDeviceName()) !== 'unknown') {
                    echo " Device : $this->msgTab"
                        . Registry::Browser()->getDeviceName() . ' ('
                        . Character::lower(Registry::Browser()->getPlatformArchitecture())
                        . ').' . LB;
                }

                for ($i = 0; $i <= 65; $i++) {
                    echo '-';
                }

                echo LB;
                //echo 'Copyright © '.Time::getCurrentYearNumber().' '
                //.Framework::COMPANY_NAME.'. All Right Reserved.'.LB;
                echo '© ' . Time::currentYearNumber() . ' ' . Framework::COMPANY_NAME . '.' . LB;
            } else {
               // Ui\EmbeddedView::protection(
                FirewallView::protection(
                    "$title denied",
                    [
                        'caption'=>"$component has been $status",
                        'message'=> "This is internal error occurred. if you are developer or owner of this website, please fix this problem.",
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
        return $this->duration;
    }//end getDuration()


    /**
     * @return integer
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


    public function __destruct()
    {
    }//end __destruct()
}//end class
