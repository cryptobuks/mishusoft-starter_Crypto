<?php declare(strict_types=1);

namespace Mishusoft\System;

use DOMDocument;
use DOMElement;
use DOMNode;
use ErrorException;
use Exception;
use JsonException;
use Mishusoft\Base;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Http\Browser;
use Mishusoft\Http\IP;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Ui;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\JSON;
use Mishusoft\Utility\Character;
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

    private static string $reasonOfBlock = '';

    private static string $messageOfBlock = '';

    /**
     * Check if access request is granted, else return false
     *
     * @var boolean
     */
    public bool $accessRequestProcessed = false;

    /**
     * Browser object.
     *
     * @var Browser
     */
    private static Browser $browser;

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
     * Color.
     *
     * @var string
     */
    private static string $color = '#f22b08';

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
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct()
    {
        parent::__construct();
        Logger::write('Store Browser object in to self::$browser attribute.');
        self::$browser = new Browser();
        Logger::write(sprintf('Load Firewall configuration from %s.json.', self::configFile()));
        $this->loadConfig();
    }//end __construct()

    private static function logFile(): string
    {
        return sprintf('%s%s%s%s', Storage::dataDriveStoragesPath(), 'Firewall', DS, 'logs.yml');
    }


    public static function configFile(): string
    {
        return sprintf('%s%s%s%s', Storage::dataDriveStoragesPath(), 'Firewall', DS, 'config.yml');
    }


    private static function siteFile(): string
    {
        return sprintf('%s%s%s%s', Storage::dataDriveStoragesPath(), 'Firewall', DS, 'sites.yml');
    }


    /**
     * Firewall config loader.
     *
     * @return void
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function loadConfig(): void
    {
        /*
         * Check firewall configuration file existent.
         */

        Logger::write(sprintf('Start checking if %s file exists.', self::configFile()));
        if (file_exists(self::configFile()) === false) {
            Logger::write(sprintf('The file %s is not exists.', self::configFile()));
            Logger::write(sprintf('Write new file %s.', self::configFile()));
            FileSystem\Yaml::emitFile(self::configFile(), []);
        }

        Logger::write(sprintf('End checking if %s file exists.', self::configFile()));

        /*
         * Check firewall logs file existent.
         */

        Logger::write(sprintf('Start checking if %s file exists.', self::logFile()));
        if (file_exists(self::logFile()) === false) {
            Logger::write(sprintf('The file %s is not exists.', self::logFile()));
            Logger::write(sprintf('Write new file %s.', self::logFile()));
            FileSystem::makeDirectory(dirname(self::logFile()));
            FileSystem\Yaml::emitFile(self::logFile(), []);
        }

        Logger::write(sprintf('End checking if %s file exists.', self::logFile()));

        /*
         * Check read permission of configuration file.
         */

        Logger::write(sprintf('Start checking read permission of %s.', self::configFile()));
        if (is_readable(self::configFile()) === true) {
            /*
             * check configuration file's content are valid array
             */

            $oldConfiguration = FileSystem\Yaml::parseFile(self::configFile());
            Logger::write(
                sprintf(
                    'Start of test whether the content of %s file can be converted to array format.',
                    self::configFile()
                )
            );
            if (is_array($oldConfiguration) === true) {
                Logger::write(sprintf('Converted %s for content into array format.', self::configFile()));
                Logger::write(sprintf('Load array format content into runtime from %s.', self::configFile()));
                $this->config = $oldConfiguration;
            }

            Logger::write(
                sprintf(
                    'End of test whether the content of %s file can be converted to array format.',
                    self::configFile()
                )
            );
            /*
             * Check the firewall configuration is empty or not
             * if it empty, then configuration reset with default
             */

            Logger::write(sprintf('Start checking whether the %s file is empty.', self::configFile()));
            if (count($this->config) > 0) {
                /*
                 * we need to array match
                 * if return false, then we need to replace and continue
                 */

                Logger::write('Check different of runtime configuration and required keys.');
                if (count(array_diff_assoc(self::REQUIRED_KEYS, $this->config)) > 0) {
                    Logger::write('Different found from runtime configuration and required keys.');
                    $replaced = array_replace_recursive($this->config, self::REQUIRED_KEYS);
                    if ($replaced !== null) {
                        Logger::write('Load changed configuration into runtime configuration.');
                        $this->config = $replaced;
                    }
                }
            } else {
                /*
                 * merge to default configuration
                 */

                Logger::write(sprintf('The content of %s is not empty.', self::configFile()));
                Logger::write('Merging default configuration into runtime configuration.');
                $this->config = array_merge_recursive(self::REQUIRED_KEYS, self::BUILT_IN_CONFIG);
            }//end if

            Logger::write(sprintf('End checking whether the %s file is empty.', self::configFile()));
            /*
             * if loaded firewall configuration is not valid array,
             * then delete configuration file and write new default data
             */

            Logger::write('Check required attribute of runtime configuration.');
            if (count($this->config) === 10) {
                Logger::write('Attribute missing found from runtime configuration.');
                $config = array_replace_recursive($this->config, self::BUILT_IN_CONFIG);
                if ($config !== null) {
                    Logger::write('Load changed configuration into runtime configuration.');
                    $this->config = $config;
                }
            }
            /*
             * if firewall configuration file is empty,
             * then create configuration file and write new default data
             */

            Logger::write(sprintf('Check content array conversation of %s.', self::configFile()));
            if (is_array(FileSystem\Yaml::parseFile(self::configFile())) === true) {
                $firewallArrayKeys = array_keys($this->config);
                $firewallFileArrayKeys = array_keys(FileSystem\Yaml::parseFile(self::configFile()));

                Logger::write('Check different of runtime configuration and stored configuration.');
                if (count(array_diff_assoc($firewallArrayKeys, $firewallFileArrayKeys)) > 0) {
                    Logger::write('Write the difference of runtime configuration and stored configuration.');
                    $this->createConfiguration($this->config);
                }
            } else {
                Logger::write('Write current runtime configuration.');
                $this->createConfiguration($this->config);
            }
        } else {
            Logger::write(sprintf('Read permission denied. Unable to read %s.', self::configFile()));
            throw new RuntimeException('Read permission denied. Unable to read root' . self::configFile());
        }//end if

        Logger::write(sprintf('End checking read permission of %s.', self::configFile()));
    }//end loadConfig()


    /**
     * Create http request to system for the client
     *
     * @return bool
     * @throws JsonException Throw exception when json error occurred.
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function isRequestAccepted(): bool
    {
        Logger::write('Check domain installation file of framework.');
        if (file_exists(self::siteFile()) === true) {
            $installedHost = FileSystem\Yaml::parseFile(self::siteFile());
            if (in_array(INSTALLED_HOST_NAME, $installedHost, true) === true) {
                //start new worldclass test
                //print_r($installedHost, false);

                Logger::write('Filter request of client.');
                $this->filterHttpRequest();

                return $this->makeAction();
            } else {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'domain';
                return $this->makeAction();
            }
        } else {
            Logger::write('Adding new domain to install framework.');
            FileSystem\Yaml::emitFile(self::siteFile(), [
                INSTALLED_HOST_NAME,
            ]);
            return $this->makeAction();
        }


        Logger::write('Start create http request to system for the client');

        // Start test website's host name
        Logger::write(
            sprintf(
                'Start testing requested hostname [%s] with firewall configuration.',
                self::$browser->getURLHostname()
            )
        );

        if ($this->config['hostname'] !== self::$browser->getURLHostname()) {
            Logger::write(
                sprintf(
                    'Requested hostname [%s] does not matched with firewall configuration.',
                    self::$browser->getURLHostname()
                )
            );

            $this->actionStatus = 'blocked';
            $this->actionComponent = 'domain';
            return $this->makeAction();

//            if ($this->isListed(IP::get()) === false) {
//                Logger::write(
//                    sprintf(
//                        'Firewall block the browser %s of client.',
//                        self::$browser->getBrowserNameFull()
//                    )
//                );
//                $this->actionStatus = 'blocked';
//                $this->actionComponent = 'browser';
//            }
        }

        Logger::write(
            sprintf(
                'End testing requested hostname [%s] with firewall configuration.',
                self::$browser->getURLHostname()
            )
        );

        // End test website's host name
        // Start test the ip address of client.
        Logger::write(
            sprintf(
                'Start searching client ip [%s] in banned list.',
                IP::get()
            )
        );

        if (in_array(IP::get(), $this->config['ip']['banned'], true) === true) {
            Logger::write(
                sprintf(
                    'The client ip address [%s] found in banned list.',
                    IP::get()
                )
            );

            Logger::write('Firewall banned the ip address.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'IP';
        }

        Logger::write(
            sprintf(
                'End searching client ip [%s] in banned list.',
                IP::get()
            )
        );
        // End test the ip address of client.
        // Start test the web browser of client.
        Logger::write(
            sprintf(
                'Start searching client browser [%s] in banned list.',
                self::$browser->getBrowserNameFull()
            )
        );

        if (in_array(strtolower(self::$browser->getBrowserName()), $this->config['browser']['banned'], true) === true) {
            Logger::write(
                sprintf(
                    'The client browser [%s] found in banned list.',
                    self::$browser->getBrowserNameFull()
                )
            );
            Logger::write('Firewall banned the browser.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'browser';
        }

        Logger::write(
            sprintf(
                'End searching client browser [%s] in banned list.',
                self::$browser->getBrowserNameFull()
            )
        );

        // End test the web browser of client.
        // Start test the device name of client.
        Logger::write(
            sprintf(
                'Start searching client device [%s] in banned list.',
                self::$browser->getDeviceNameFull()
            )
        );
        if (in_array(Character::lower(self::$browser->getDeviceName()), $this->config['device']['banned'], true) === true) {
            Logger::write(
                sprintf(
                    'The client device [%s] found in banned list.',
                    self::$browser->getDeviceNameFull()
                )
            );
            Logger::write('Firewall banned the device.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'device';
        }

        Logger::write(
            sprintf(
                'End searching client device [%s] in banned list.',
                self::$browser->getDeviceNameFull()
            )
        );

        // End test the device name of client.
        // Start test the continent name of client.
        Logger::write(
            sprintf(
                'Start searching client continent [%s] in banned list.',
                IP::getInfo('continent')
            )
        );
        if (in_array(Character::lower(IP::getInfo('continent')), $this->config['continent']['banned'], true)) {
            Logger::write(
                sprintf(
                    'The client continent [%s] found in banned list.',
                    IP::getInfo('continent')
                )
            );
            Logger::write('Firewall banned the continent.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'continent';
        }

        Logger::write(
            sprintf(
                'End searching client continent [%s] in banned list.',
                IP::getInfo('continent')
            )
        );

        // End test the continent name of client.
        // Start test the country name of client.
        Logger::write('Start searching client country in banned list.');
        if (in_array(Character::lower(IP::getInfo('country')), $this->config['country']['banned'], true) === true) {
            Logger::write('The client continent found in banned list.');
            Logger::write('Firewall banned the country.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'country';
        }

        Logger::write('End searching client country in banned list.');

        // End test the country name of client.
        // Start test the country name of client.
        Logger::write('Start searching client city in banned list.');
        if (in_array(Character::lower(IP::getInfo('city')), $this->config['city']['banned'], true)) {
            Logger::write('The client city found in banned list.');
            Logger::write('Firewall banned the city.');
            $this->actionStatus = 'banned';
            $this->actionComponent = 'city';
        }

        Logger::write('End searching client city in banned list.');

        // End test the city name of client.
        // Start test the country name of client.
        Logger::write('Start searching client browser in black list.');
        if ($this->config['browser']['order'] === 'blacklist') {
            // we need to check block time of browser,
            // if the time has been expire, then unblock th browser
            // or show protection message
            if (in_array(Character::lower(self::$browser->getBrowserName()), $this->config['browser']['blacklist'], true) === true) {
                Logger::write('The client browser found in black list.');
                Logger::write('Firewall banned the browser.');
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'browser';
            }
        }
        Logger::write('End searching client browser in banned list.');

        // End test the city name of client.

        if ($this->config['browser']['order'] === 'whitelist') {
            if (in_array(Character::lower(self::$browser->getBrowserName()), $this->config['browser']['whitelist'], true) === false) {
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'browser';
            }
        }

        if ($this->config['ip']['order'] === 'blacklist') {
            // we need to check block time of ip,
            // if the time has been expire, then unblock the ip
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
            // if the time has been expire, then unblock the device
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
            // if the time has been expire, then unblock the continent
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
            // if the time has been expire, then unblock th country
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
            // if the time has been expire, then unblock the city
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


        Logger::write('End create http request to system for the client');
    }//end makeAccessRequest()

    /**
     * @throws JsonException
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
     * @throws JsonException Throw exception when json error occurred.
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function filterHttpRequest(): void
    {
        /*
         * Check accept attribute in firewall configuration
         * if not exists, then reset configuration.
         */

        Logger::write('Start checking whether the accept keyword is in the $this->config variable.');
        if (array_key_exists('accept', $this->config) === false) {
            Logger::write('Check failed. Accept keyword not found in $this->config variable.');
            Logger::write('Creating new config with built in config.');
            $this->createConfiguration(array_merge_recursive(self::REQUIRED_KEYS, self::BUILT_IN_CONFIG));
        }

        Logger::write('End checking whether the accept keyword is in the $this->config variable.');

        Logger::write('Start checking whether REQUEST_METHOD keyword in $_SERVER variable.');
        Logger::write('Search accept keyword in allowed request method variable.');
        $requestMethodAll = $this->config['accept']['request-method'];
        if (in_array(Character::lower($_SERVER['REQUEST_METHOD']), $requestMethodAll, true) === false) {
            Logger::write('Browser Request Method was not found in the authorized method.');
            Logger::write('Check whether the client\'s IP is blocked');
            if ($this->isListed(IP::get()) === false) {
                Logger::write('The client\'s IP is not blocked. Then it will be blocked.');
                $this->actionStatus = 'blocked';
                $this->actionComponent = 'IP';
                $this->addIP(IP::get(), 'blocked');
            }
        }

        Logger::write('End checking whether REQUEST_METHOD keyword in $_SERVER variable.');
    }//end filterHttpRequest()


    /**
     * Create configuration file.
     *
     * @param array $config Array format of Firewall configuration.
     *
     * @return void
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function createConfiguration(array $config): void
    {
        Logger::write('Check runtime configuration file existent.');
        if (file_exists(self::configFile()) === true) {
            Logger::write('Remove exists runtime configuration file.');
            FileSystem::remove(self::configFile());
        }

        Logger::write(sprintf('Write firewall configuration into %s.', self::configFile()));
        FileSystem\Yaml::emitFile(self::configFile(), $config);
    }//end createConfiguration()


    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws JsonException
     * @throws PermissionRequiredException
     */
    private function storeFirewallLogs(): void
    {
        $logs = [];
        if (is_writable(self::logFile()) === true) {
            //check point for log file content length
            if (FileSystem::read(self::logFile()) !== '') {
                $content = FileSystem\Yaml::parseFile(self::logFile());

                //Merge file's content with logs
                if (is_array($content) === true) {
                    $logs = array_merge($logs, $content);
                }//end if

                if (count($logs) !== 0) {
                    if (array_key_exists($this->actionStatus, $logs) === true) {
                        if (is_array($logs[$this->actionStatus]) === true) {
                            if (array_key_exists(IP::get(), $logs[$this->actionStatus]) === true) {
                                if (is_array($logs[$this->actionStatus][IP::get()]) === true && array_key_exists(self::$browser->getBrowserNameFull(), $logs[$this->actionStatus][IP::get()]) === true) {
                                    if (is_array($logs[$this->actionStatus][IP::get()][self::$browser->getBrowserNameFull()]) === true && array_key_exists(Time::getToday(), $logs[$this->actionStatus][IP::get()][self::$browser->getBrowserNameFull()]) === false) {
                                        $browserNameFull = self::$browser->getBrowserNameFull();
                                        FileSystem\Yaml::emitFile(
                                            self::logFile(),
                                            array_merge(
                                                $logs,
                                                [
                                                    $this->actionStatus => array_merge(
                                                        $logs[$this->actionStatus],
                                                        [
                                                            IP::get() => array_merge(
                                                                $logs[$this->actionStatus][IP::get()],
                                                                [
                                                                    self::$browser->getBrowserNameFull() => array_merge(
                                                                        $logs[$this->actionStatus][IP::get()][$browserNameFull],
                                                                        $this->getNewVisitorTimeBased()
                                                                    ),
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            )
                                        );
                                    }//end if
                                }
                                else {
                                    FileSystem\Yaml::emitFile(
                                        self::logFile(),
                                        array_merge(
                                            $logs,
                                            [
                                                $this->actionStatus => array_merge(
                                                    $logs[$this->actionStatus],
                                                    [
                                                        IP::get() => array_merge(
                                                            $logs[$this->actionStatus][IP::get()],
                                                            $this->getNewVisitorBrowserBased()
                                                        ),
                                                    ]
                                                ),
                                            ]
                                        )
                                    );
                                }//end if
                            }
                            else {
                                // We should write file with ip based user
                                FileSystem\Yaml::emitFile(
                                    self::logFile(),
                                    array_merge(
                                        $logs[$this->actionStatus],
                                        $this->getNewVisitorIPBased()
                                    ),
                                );
                            }//end if
                        } else {
                            // We should write file with ip based user
                            FileSystem\Yaml::emitFile(
                                self::logFile(),
                                array_merge($logs, [
                                    $this->actionStatus => array_merge(
                                        $logs[$this->actionStatus],
                                        $this->getNewVisitorIPBased()
                                    ),
                                ])
                            );
                        }//end if

                    } else {
                        FileSystem\Yaml::emitFile(
                            self::logFile(),
                            array_merge($logs, [
                                $this->actionStatus => $this->getNewVisitorIPBased(),
                            ])
                        );
                    }//end if
                } else {
                    FileSystem\Yaml::emitFile(
                        self::logFile(),
                        [$this->actionStatus => $this->getNewVisitorIPBased()]
                    );
                }//end if
            } else {
                FileSystem\Yaml::emitFile(
                    self::logFile(),
                    [$this->actionStatus => $this->getNewVisitorIPBased()]
                );
            }//end if

            //write file with new data

        } else {
            throw new PermissionRequiredException('Unable to read/write ' . self::logFile());
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
     * @throws JsonException Throw exception when error occurred.
     * @throws \Mishusoft\Exceptions\JsonException
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
     * @throws JsonException|\Mishusoft\Exceptions\JsonException Throw exception when json error occurred.
     */
    private function updateList(string $ip, string $list): void
    {
        if (in_array($ip, $this->config['ip'][$list], true) === false) {
            $this->config['ip'][$list][] = $ip;
            FileSystem::saveToFile(Framework::configFile(), JSON::encodeToString($this->config));
        }
    }//end updateList()


    /**
     * Prepare runtime failure ui for html display.
     *
     * @param string $status Name of action.
     * @param array $message Error message.
     *
     * @return void
     * @throws JsonException|ErrorException Throw exception when json error occurred.
     */
    public static function runtimeFailure(string $status, array $message): void
    {
        foreach (Http::getErrorsRecord() as $details) {
            if (array_key_exists('Description', $details) === true
                && Character::lower($details['Description']) === Character::lower($status)
            ) {
                if (Memory::Data('framework')->debug === true) {
                    if (array_key_exists('debug', $message) === true) {
                        if (array_key_exists('file', $message['debug']) === true) {
                            $message['debug']['file'] = implode(['File name: ', $message['debug']['file']]);
                        }

                        if (array_key_exists('location', $message['debug']) === true) {
                            $message['debug']['location'] = implode(['Location: ', $message['debug']['location']]);
                        }

                        if (array_key_exists('description', $message['debug']) === true) {
                            $message['debug']['description'] = implode(['Description: ', $message['debug']['description']]);
                        }
                    }

                    self::runtimeFailureUi($status, $message);
                } elseif (array_key_exists('error', $message) === true
                    && array_key_exists('description', $message['error']) === true
                ) {
                    self::runtimeFailureUi($status, $message['error']);
                } else {
                    self::runtimeFailureUi('Not Found', ['description' => 'Your requested document not found.']);
                }//end if
            }//end if
        }//end foreach
    }//end runtimeFailure()


    /**
     * Runtime failure ui for html display.
     *
     * @param string $title Name of action.
     * @param array $message Error message.
     *
     * @return void
     * @throws JsonException|ErrorException Throw exception when json error occurred.
     */
    private static function runtimeFailureUi(string $title, array $message): void
    {
        self::$browser = new Browser();
        $requestMethod = self::$browser->getRequestMethod();
        $requestAddress = Browser::getVisitedPage();

        if (self::$browser->getRequestMethod() === 'OPTIONS') {
            // add welcome not for http options method
            Storage::StreamAsJson(['message' => ['type' => 'success', 'contents' => "The HTTP OPTIONS method requests permitted to communicate for $requestAddress."]]);
            Logger::write("The HTTP OPTIONS method requests permitted to communicate for $requestAddress.", LOGGER_WRITE_STYLE_FULL, LOGGER_FLAG_TYPE_ACCESS);
        } else {
            Logger::write(array_key_exists('debug', $message) ? $message['debug']['description'] : $message['description'] . " for $requestAddress.", LOGGER_WRITE_STYLE_FULL, LOGGER_FLAG_TYPE_ACCESS);
            if (Memory::Data('framework')->debug) {
                // add runtime failure ui
                Ui::HtmlInterface(
                    $title,
                    function ($html, $head) use ($message, $requestAddress, $requestMethod, $title) {
                        Ui::text(Ui::element($head, 'style'), 'body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 445px;}');
                        $body = Ui::element($html, 'body');
                        $welcome = Ui::element($body, 'ms-app', ['style' => 'width: 650px;box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']);
                        $template = Ui::element($welcome, 'ms-app-content', ['style' => 'display: block;margin: 0;padding: 0;text-align: left;border: 1px solid #f22b08;-webkit-border-radius: 5px;border-radius: 5px']);
                        Ui::text(Ui::element($template, 'ms-app-content-header', ['style' => 'text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: #f22b08;user-select: none;-webkit-user-select: none;']), $title);
                        $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

                        // add noscript to ui
                        Ui::setNoScriptText($template_body);
                        // end of adding noscript
                        if (array_key_exists('debug', $message)) {
                            $debug = Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: list-item;text-align: center;background: #f22b08;border-radius: 5px;padding: 5px;margin-top: 10px;color: white;user-select: none;-webkit-user-select: none;']);
                            foreach ($message['debug'] as $value) {
                                Ui::text(
                                    Ui::element(
                                        $debug,
                                        'ms-app-paragraph',
                                        ['style' => 'font-size: 15px;line-height: 1.5;display: flex;padding: 5px;color: white;user-select: none;-webkit-user-select: none;text-align: left;']
                                    ),
                                    $value
                                );
                            }
                        } else {
                            Ui::text(
                                Ui::element(
                                    $template_body,
                                    'ms-app-paragraph',
                                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: #f22b08;border-radius: 5px;padding: 5px;margin-top: 10px;color: white;user-select: none;-webkit-user-select: none;']
                                ),
                                $message['description']
                            );
                        }//end if

                        self::viewVisitorInfo($template_body, $requestMethod, $requestAddress, self::$browser);
                        Ui::addDefaultSignature($template_body);
                        Ui::text(
                            Ui::element($body, 'script'),
                            "function fixWindowSize(){if(window.innerHeight < '445') {document.body.style = 'height:445px;';} else if(window.innerHeight > '445') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}
                    window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);"
                        );
                    },
                    Http::getErrorCode($title)
                );
            } else {
                Ui::HtmlInterface(
                    $title,
                    function ($html, $head) use ($message, $title) {
                        Ui::text(Ui::element($head, 'style'), 'body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 445px;}');

                        // set id attribute for body
                        $body = Ui::element($html, 'body', ['style' => 'color: ' . Ui::color['black'] . ';margin:0;padding:0;font-family:Noto Sans']);

                        // add noscript to ui
                        Ui::setNoScriptText($body);
                        // end of adding noscript
                        // create mishusoft application with html
                        $template = Ui::element($body, 'ms-app', ['style' => 'display: flex;flex-direction: column;width: 100%;']);

                        // add template body
                        $notFoundBody = Ui::element(
                            Ui::element($template, 'ms-app-body', ['style' => 'display: flex;flex-direction: column;width: 100%;height: 700px;align-items: center;justify-content: center;']),
                            'ms-app-paragraph',
                            [
                                'style' => Ui::htmlHrefStyle . 'color:' . Ui::color['lightgrey'] . ';padding: 35px;text-align: center;font-size: 30px;font-weight: bold;display: flex;flex-direction: column;',
                            ]
                        );

                        Ui::element($notFoundBody, 'error-code', ['style' => Ui::htmlHrefStyle . 'font-size: 120px;', 'text' => Http::getErrorCode($title)]);
                        Ui::element($notFoundBody, 'error-message', ['style' => Ui::htmlHrefStyle, 'text' => $message['description']]);

                        // add template footer
                        Ui::addDefaultSignature(
                            Ui::element(
                                $template,
                                'ms-app-footer',
                                ['style' => 'display: flex;flex-direction: column;width: 100%;align-items: center;justify-content: center;padding-top: 10px;font-size: 14px;']
                            )
                        );
                        // text for system default signature
                        Ui::text(
                            Ui::element($body, 'script'),
                            "function fixWindowSize(){if(window.innerHeight < '445') {document.body.style = 'height:445px;';} else if(window.innerHeight > '445') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}
                    window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);"
                        );
                    }
                );
            }//end if

            exit();
        }//end if
    }//end runtimeFailureUi()


    /**
     * View visitor information for html display
     *
     * @param DOMElement|DOMNode|DOMDocument $body Html body.
     * @param string $requestMethod Requested method name.
     * @param string $requestAddress Requested address.
     * @param object $browser
     * @return void
     * @throws JsonException Throw exception when json error occurred.
     */
    private static function viewVisitorInfo(DOMElement|DOMNode|DOMDocument $body, string $requestMethod, string $requestAddress, object $browser): void
    {
        Ui::text(
            Ui::element(
                $body,
                'ms-app-paragraph',
                ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;border-top: groove;margin-top: 10px;']
            ),
            'User Agent: ' . $browser->getUserAgent()
        );
        Ui::text(
            Ui::element(
                $body,
                'ms-app-paragraph',
                ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
            ),
            "Request URL: $requestMethod \"$requestAddress\""
        );
        Ui::text(
            Ui::element(
                $body,
                'ms-app-paragraph',
                ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
            ),
            'IP address: ' . IP::get()
        );

        // avoid error country capturing
        if (Character::lower(IP::getCountry()) !== 'unknown') {
            Ui::text(
                Ui::element(
                    $body,
                    'ms-app-paragraph',
                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                ),
                'Country: ' . IP::getCountry()
            );
        } else {
            if (Character::lower(IP::getInfo('country')) !== 'unknown location') {
                Ui::text(
                    Ui::element(
                        $body,
                        'ms-app-paragraph',
                        ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                    ),
                    'Country: ' . IP::getInfo('country')
                );
            }
        }//end if

        // avoid error browser capturing
        if (Character::lower($browser->getBrowserName()) !== 'unknown') {
            Ui::text(
                Ui::element(
                    $body,
                    'ms-app-paragraph',
                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                ),
                'Browser: ' . $browser->getBrowserNameFull()
            );
        }

        // avoid error device capturing
        if (Character::lower($browser->getDeviceName()) !== 'unknown') {
            Ui::text(
                Ui::element(
                    $body,
                    'ms-app-paragraph',
                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                ),
                'Device: ' . $browser->getDeviceName() . ' (' . strtolower($browser->getDeviceArchitecture()) . ')'
            );
        }
    }//end viewVisitorInfo()


    /**
     * @return array[]
     * @throws JsonException
     */
    private function getNewVisitorTimeBased(): array
    {
        return [
            Time::getToday() => [
                'ip' => IP::get(),
                'country' => IP::getCountry(),
                'location' => IP::getInfo(),
                'device' => self::$browser->getDeviceName() . ' (' . self::$browser->getBrowserArchitecture() . ')',
                'browser' => self::$browser->getBrowserNameFull(),
                'UUAS' => self::$browser->getUserAgent(),
                'url' => self::$browser::VisitedPageURL($_SERVER),
                'status' => $this->actionStatus,
                'component' => $this->actionComponent,
                'visit-time' => Time::getToday(),
            ],
        ];
    }//end getNewVisitorTimeBased()


    /**
     * @return \array[][]
     * @throws JsonException
     */
    private function getNewVisitorBrowserBased(): array
    {
        return [self::$browser->getBrowserNameFull() => $this->getNewVisitorTimeBased()];
    }//end getNewVisitorBrowserBased()


    /**
     * @return \array[][][]
     * @throws JsonException
     */
    private function getNewVisitorIPBased(): array
    {
        return [IP::get() => $this->getNewVisitorBrowserBased()];
    }//end getNewVisitorIPBased()


    /**
     * @param string $status
     * @throws JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException|\Mishusoft\Exceptions\JsonException
     */
    private function accessDefence(string $status): void
    {
        if (array_key_exists("$status-device-access-limit-filter", $this->config)
            && $this->config["$status-device-access-limit-filter"] === 'enable') {
            if (is_readable(self::logFile()) === true) {
                if (!empty(file_get_contents(self::logFile()))) {
                    $logs = FileSystem\Yaml::parseFile(self::logFile());
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
                                            /*
                                                preOutput($this->config["$status-device-count-down-time"]);*/
                                            // Set new time, if set time to current time more than 60 minutes, set new time as current time
                                            $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($this->config["$status-device-count-down-time"][IP::get()])) / 60);
                                            if ($this->lastVisitDuration >= $this->config["$status-device-time-limit"]) {
                                                $this->config["$status-device-count-down-time"][IP::get()] = $now['visit-time'];
                                                FileSystem::saveToFile(Framework::configFile(), json_encode($this->config, JSON_THROW_ON_ERROR));
                                            } //end if

                                            else {
                                                // Set new time, if previous time set more than 10 minutes
                                                $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                                if ($this->lastVisitDuration > 10) {
                                                    // preOutput("Setting previous time!!");
                                                    $this->config["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                                    FileSystem::saveToFile(Framework::configFile(), json_encode($this->config, JSON_THROW_ON_ERROR));
                                                    // preOutput($this->config);
                                                }
                                            }
                                        } //end if

                                        else {
                                            // Set new time, if current time to previous time set more than 60 minutes
                                            $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                            if ($this->lastVisitDuration >= $this->config["$status-device-time-limit"]) {
                                                $this->config["$status-device-count-down-time"][IP::get()] = $now['visit-time'];
                                            } else {
                                                // Set new time, if current time to previous time set less than 60 minutes
                                                $this->config["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                            }

                                            FileSystem::saveToFile(Framework::configFile(), json_encode($this->config, JSON_THROW_ON_ERROR));
                                            // preOutput($this->config["$status-device-count-down-time"]);
                                        }
                                    } //end if

                                    else {
                                        // Autoload::log("Preparing to create firewall configuration file.");
                                        if (FileSystem::IsWriteable(Framework::configFile())) {
                                            file_put_contents(Framework::configFile(), json_encode(self::BUILT_IN_CONFIG, JSON_THROW_ON_ERROR));
                                        }

                                        // load firewall configuration in runtime
                                        $this->config = self::BUILT_IN_CONFIG;
                                    }

                                    $this->controller = !empty($this->config["$status-device-count-down-time"][IP::get()]) ? $this->config["$status-device-count-down-time"][IP::get()] : $previous['visit-time'];
                                    /*
                                        check limit time format key and value*/
                                    // $minutes = (strtotime("2012-09-21 12:12:22") - time()) / 60;
                                    if (array_key_exists("$status-device-limit-time-format", $this->config)) {
                                        // check limit time format key value and it is second, so calculate duration as seconds
                                        if ($this->config["$status-device-limit-time-format"] === 'second') {
                                            $this->duration = (int)(strtotime($now['visit-time']) - strtotime($this->controller));
                                            $this->separator = 'seconds';
                                        } //end if

                                        elseif ($this->config["$status-device-limit-time-format"] === 'minute') {
                                            $this->duration = (int)((strtotime($now['visit-time']) - strtotime($this->controller)) / 60);
                                            $this->separator = 'minutes';
                                        } // otherwise calculate duration as hours

                                        else {
                                            $this->duration = (int)(((strtotime($now['visit-time']) - strtotime($this->controller)) / 60) / 60);
                                            $this->separator = 'hours';
                                        }
                                    } //end if

                                    else {
                                        // Autoload::log("Preparing to create firewall configuration file.");
                                        if (FileSystem::IsWriteable(Framework::configFile())) {
                                            file_put_contents(Framework::configFile(), json_encode(self::BUILT_IN_CONFIG, JSON_THROW_ON_ERROR));
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
                                                if (!$this->isListed(IP::get()) and $status === 'blocked') {
                                                    $this->addIP(IP::get(), 'banned');
                                                }

                                                if ((!$this->isListed(IP::get()) and !$this->isListed(IP::get(), 'blocked')) && $status === 'granted') {
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
                    throw new RuntimeException('Unable to continue. ' . self::logFile() . ' is empty');
                }//end if
            } else {
                throw new RuntimeException('Permission denied. Unable to read ' . self::logFile());
            }//end if
        }//end if
    }//end accessDefence()


    /**
     * @throws JsonException
     */
    public function defenceActivate(): void
    {
        print_r($this->actionStatus, false);
        print_r($this->actionComponent, false);


        if ($this->actionStatus === 'banned' || $this->actionStatus === 'blocked') {
            //print_r(self::$browser->getUserAgent().PHP_EOL, false);
            //print_r(self::$browser->getBrowserName().PHP_EOL, false);
            if (array_key_exists('ui', self::$browser->details())) {
                //GranParadiso/3.0.8 is text browser
                if (Character::lower(self::$browser->details()['ui']) === Character::lower('FullTextMode')) {
                    $msg_lb = "\n";
                    $this->msgTab = "\t";
                    $this->defenseMessageShow('', $msg_lb, $this->actionStatus, $this->actionComponent, 'text');
                } else {
                    $msg_lb = '<br/>';
                    $this->msgTab = '&emsp;';
                    self::$color = 'red';
                    $this->defenseMessageShow(
                        'Access',
                        $msg_lb,
                        $this->actionStatus,
                        $this->actionComponent,
                        'graphic'
                    );
                }
            } else {
                $msg_lb = '<br/>';
                $this->msgTab = '&emsp;';
                self::$color = 'red';
                $this->defenseMessageShow('Access', $msg_lb, $this->actionStatus, $this->actionComponent, 'graphic');
            }
        } else {
            $msg_lb = '<br/>';
            $this->msgTab = '&emsp;';
            self::$color = 'green';
            $this->defenseMessageShow('Access', $msg_lb, 'fridge', 'browser', 'graphic');
        }//end if
    }//end defenceActivate()


    // all public functions


    /**
     * @param string $title
     * @param string $lb
     * @param string $status
     * @param string $component
     * @param string $viewMode
     * @throws JsonException
     */
    private function defenseMessageShow(string $title, string $lb, string $status, string $component, string $viewMode): void
    {
        if ($component === 'browser') {
            $componentText = "on $component " . self::$browser->getBrowserNameFull();
        } else {
            $componentText = "from $component " . IP::get();
        }
        $requestMethod = self::$browser->getRequestMethod();
        $requestAddress = self::$browser::getVisitedPage();

        if (!empty($viewMode) && is_string($viewMode)) {
            if (Network::requestHeader('HTTP_SEC_FETCH_MODE') === 'cors') {
                Storage::StreamAsJson(
                    [
                        'message' => [
                            'type' => 'error',
                            'details' => "Your access has been $status $componentText.",
                            'visitor' => [
                                'user-agent' => self::$browser->getUserAgent(),
                                'request-method' => self::$browser->getRequestMethod(),
                                'request-url' => self::$browser::getVisitedPage(),
                                'ip-address' => IP::get(),
                            ],
                        ],
                        'copyright' => [
                            'year' => Time::getCurrentYearNumber(),
                            'owner' => Framework::COMPANY_NAME,
                        ],
                    ]
                );
            } elseif ($viewMode === 'text') {
                echo PHP_EOL;
                echo " Your access has been $status $componentText. " . PHP_EOL;
                for ($i = 0; $i <= 65; $i++) {
                    echo '-';
                }

                echo PHP_EOL;
                // echo " User Agent : $this->msg_tab" . self::$browser->getUserAgent() . PHP_EOL;
                echo " Request URL : $this->msgTab$requestMethod $requestAddress" . PHP_EOL;
                echo PHP_EOL;
                echo " IP address : $this->msgTab" . IP::get() . PHP_EOL;

                // avoid error country capturing
//                if (Character::lower(IP::getCountry()) !== 'unknown' || Character::lower(IP::getInfo('country')) !== 'unknown location') {
//                    echo " Country : $this->msgTab".IP::getCountry().PHP_EOL;
//                }
                if (Character::lower(IP::getCountry()) !== 'unknown') {
                    echo " Country : $this->msgTab" . IP::getCountry() . PHP_EOL;
                } elseif (Character::lower(IP::getInfo('country')) !== 'unknown location') {
                    echo " Country : $this->msgTab" . IP::getInfo('country') . PHP_EOL;
                }

                // avoid error browser capturing
                if (Character::lower(self::$browser->getBrowserName()) !== 'unknown') {
                    echo " Browser : $this->msgTab" . self::$browser->getBrowserNameFull() . PHP_EOL;
                }

                // avoid error device capturing
                if (Character::lower(self::$browser->getDeviceName()) !== 'unknown') {
                    echo " Device : $this->msgTab" . self::$browser->getDeviceName() . ' (' . Character::lower(self::$browser->getDeviceArchitecture()) . ').' . PHP_EOL;
                }

                for ($i = 0; $i <= 65; $i++) {
                    echo '-';
                }

                echo PHP_EOL;
                //echo 'Copyright © '.Time::getCurrentYearNumber().' '.Framework::COMPANY_NAME.'. All Right Reserved.'.PHP_EOL;
                echo '© ' . Time::getCurrentYearNumber() . ' ' . Framework::COMPANY_NAME . '.' . PHP_EOL;
            } else {
                self::strictProtectionView("$title denied", '', '');
                exit();
                Ui::HtmlInterface(
                    "$title has been $status!!",
                    function ($html, $head) use ($status, $title, $requestAddress, $requestMethod) {
                        Ui::text(Ui::element($head, 'style'), 'body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 635px;}');
                        $documentBody = Ui::element($html, 'body');
                        // create html dody
                        $template = Ui::element(
                            Ui::element(
                            // create mishusoft app body
                                $documentBody,
                                // create html dody
                                'ms-app',
                                ['style' => 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']
                            ),
                            'ms-app-content',
                            ['style' => "display: block;margin: 0;padding: 0;text-align: left;border: 1px solid $this->color;-webkit-border-radius: 5px;border-radius: 5px"]
                        );
                        Ui::text(
                            Ui::element(
                            // create app header
                                $template,
                                'ms-app-content-header',
                                ['style' => "text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: $this->color;user-select: none;-webkit-user-select: none;"]
                            ),
                            "$title has been $status!!"
                        );
                        $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

                        // add noscript to ui
                        Ui::setNoScriptText($template_body);
                        // end of adding noscript
                        Ui::text(
                            Ui::element(
                                $template_body,
                                'ms-app-paragraph',
                                ['style' => "text-align:center;width: 275px;height: 160px;padding: 5px;margin: 0;border-radius: 10px;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;font-size: 100px;font-weight: bolder;color: $this->color;border: 2px solid $this->color;user-select: none;-webkit-user-select: none;text-transform: uppercase;"]
                            ),
                            ucfirst($status)
                        );

                        if ($status === 'blocked') {
                            Ui::text(
                                Ui::element(
                                    $template_body,
                                    'ms-app-paragraph',
                                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;user-select: none;-webkit-user-select: none;']
                                ),
                                'You have violated the security laws of our website. For that reason, we will not allow access to our website at this time. If you are a customer or visitor, make your visit later. Or contact the Mishusoft Support Center if you are a system administrator. Thank you for accepting our service.'
                            );
                        }

                        if ($status === 'banned') {
                            Ui::text(
                                Ui::element(
                                    $template_body,
                                    'ms-app-paragraph',
                                    ['style' => "font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: $this->color;border-radius: 5px;padding: 5px;margin-top: 10px;color: white;user-select: none;-webkit-user-select: none;"]
                                ),
                                'You have violated our security rules. All your information has been banned for the security of our customers. At the same time, all services previously provided to you have been discontinued. We will no longer be able to provide services to you in the future. Contact our support center if you need any help.'
                            );
                        }

                        if ($status === 'granted') {
                            Ui::text(
                                Ui::element(
                                    $template_body,
                                    'ms-app-paragraph',
                                    ['style' => "font-size: 15px;line-height: 1.5;display: flex;text-align: center;background: $this->color;border-radius: 5px;padding: 5px;margin-top: 10px;user-select: none;-webkit-user-select: none;"]
                                ),
                                'Welcome to our family. We are very happy that you have joined our family. We hope you enjoy our content and services. At the same time we will have the opportunity to be by your side all the time.'
                            );
                        }

                        $this->viewVisitorInfo($template_body, $requestMethod, $requestAddress, self::$browser);
                        Ui::addDefaultSignature($template_body);
                        Ui::text(
                            Ui::element($documentBody, 'script'),
                            "function fixWindowSize(){if(window.innerHeight < '635') {document.body.style = 'height:635px;';} else if(window.innerHeight > '635') {document.body.style = 'height:'+window.innerHeight + 'px';} else {if(window.innerHeight > '1024') {document.body.style = 'height:1024px;';}}}
                    window.addEventListener('resize', fixWindowSize);window.addEventListener('load', fixWindowSize);"
                        );
                    }
                );
            }//end if
        }//end if
    }//end defenseMessageShow()

    /**
     * @throws JsonException
     */
    public static function strictProtectionView(string $documentTitle, string $message, string $reason): void
    {
        $documentTitle = sprintf('%s - Mishusoft Firewall', ucfirst($documentTitle));

        // Validating reason of block action.
        if ($message !== '') {
            $messageOfBlock = $message;
        } elseif (self::$messageOfBlock !== '') {
            $messageOfBlock = self::$messageOfBlock;
        } else {
            $messageOfBlock = 'If you are the owner (or you manage this site), please whitelist you IP or if you think this block is an error please open a support ticket and make sure to include the block details (displayed in the box below), so we can assist you to troubleshooting the issue.';
        }

        // Validating reason of block action.
        if ($reason !== '') {
            $reasonOfBlock = $reason;
        } elseif (self::$reasonOfBlock !== '') {
            $reasonOfBlock = self::$reasonOfBlock;
        } else {
            $reasonOfBlock = 'Unwanted Access';
        }


        // Start application web interface.
        Ui::start();
        Ui::setDocumentTitle($documentTitle);

        //Ui::element(Ui::getDocumentHeadElement(), 'style', ['text'=>$cssContent]);
        Ui::elementList(Ui::getDocumentHeadElement(), ['link' => Storage::getAssignableWebFavicons()]);

        Ui::elementList(
            Ui::getDocumentHeadElement(),
            [
                'meta' => [
                    ['charset' => 'UTF-8'],
                    [
                        'name' => 'viewport',
                        'content' => 'width=device-width, initial-scale=1.0',
                    ],
                    [
                        'name' => 'keywords',
                        'content' => 'blocked, banned, denied',
                    ],
                    [
                        'name' => 'company',
                        'content' => Framework::COMPANY_NAME,
                    ],
                    [
                        'name' => 'author',
                        'content' => Framework::AUTHOR_NAME,
                    ],
                    [
                        'name' => 'description',
                        'content' => $documentTitle,
                    ],
                    //<meta name="keywords" content="Put your keywords here.">
                    //<meta name="company" content="Put your company name here.">
                    //<meta name="author" content="Put your author name here.">
                    //<meta name="description" content="Put your description here.">
                ],
                'link' => [
                    [
                        'rel' => 'stylesheet',
                        'href' => Storage::toDataUri('css/app.css'),
                    ],
                    //                    array(
                    //                        'rel'  => 'stylesheet',
                    //                        'href' => Storage::toDataUri('css/font-face.css'),
                    //                    ),
                    //                    array(
                    //                        'rel'  => 'stylesheet',
                    //                        'href' => Storage::toDataUri('css/colors.css'),
                    //                    ),
                ],
                //'style' => array(array('text'=>$cssContent))
            ]
        );
        //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{$layoutParams.logoFolder}favicon.ico">

        Ui::element(Ui::getDocumentRoot(), 'body', ['child' => [
            'section' => [
                ['class' => 'application', 'child' => [
                    'article' => [
                        ['class' => 'application-content', 'child' => [
                            'img' => [
                                ['class' => 'application-content-title-icon', 'alt' => 'access denied', 'src' => Storage::toDataUri('images/icons/restriction-shield.png'),],
                            ],
                            'div' => [
                                ['class' => 'application-content-title', 'text' => $documentTitle,],
                                ['class' => 'application-content-body', 'child' => [
                                    'div' => [
                                        ['class' => 'message', 'text' => $messageOfBlock,],
                                        ['class' => 'details-title', 'text' => 'Block details:',],
                                    ],
                                    'table' => [
                                        ['class' => 'details', 'child' => [
                                            'tr' => self::getAssignableVisitorDetails($reasonOfBlock),
                                        ]],
                                    ],
                                ]],
                                //['class' => 'application-content-footer','text' => 'application-footer',],
                            ],
                        ]],
                    ],
                ]],
            ],
        ]]);


        Ui::display();
    }

    /**
     * @throws JsonException
     */
    private static function getAssignableVisitorDetails(string $reasonOfBlock): array
    {
        $webBrowser = new Browser();
        $visitorDetails = [];

        // Reason of block.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'Reason :',],
                    ['class' => 'details-item-details', 'text' => $reasonOfBlock,],
                ],
            ],
        ];

        // Client ip address capturing.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'Your IP :',],
                    ['class' => 'details-item-details', 'text' => IP::get(),],
                ],
            ],
        ];

        // Current web url capturing.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'URL :',],
                    ['class' => 'details-item-details', 'text' => $webBrowser::getVisitedPage(),],
                ],
            ],
        ];

        // Capturing the user agent of browser.
        $visitorDetails[] = [
            'class' => 'details-item',
            'child' => [
                'td' => [
                    ['class' => 'details-item-title', 'text' => 'User Agent :',],
                    ['class' => 'details-item-details', 'text' => $webBrowser->getUserAgent(),],
                ],
            ],
        ];

        // avoid error country capturing
        if (Character::lower(IP::getCountry()) !== 'unknown') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Country :',],
                        ['class' => 'details-item-details', 'text' => IP::getCountry() . ' (' . IP::get() . ')',],
                    ],
                ],
            ];
        } elseif (Character::lower(IP::getInfo('country')) !== 'unknown location') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Country :',],
                        ['class' => 'details-item-details', 'text' => IP::getInfo('country') . ' (' . IP::get() . ')',],
                    ],
                ],
            ];
        } else {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Country :',],
                        ['class' => 'details-item-details', 'text' => 'Unknown' . ' (' . IP::get() . ')',],
                    ],
                ],
            ];
        }//end if

        // avoid error browser capturing
        if (Character::lower($webBrowser->getBrowserName()) !== 'unknown') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Browser :',],
                        ['class' => 'details-item-details', 'text' => $webBrowser->getBrowserNameFull(),],
                    ],
                ],
            ];
        }

        // avoid error device capturing
        if (Character::lower($webBrowser->getDeviceName()) !== 'unknown') {
            $visitorDetails[] = [
                'class' => 'details-item',
                'child' => [
                    'td' => [
                        ['class' => 'details-item-title', 'text' => 'Device :',],
                        [
                            'class' => 'details-item-details',
                            'text' => $webBrowser->getDeviceName() . ' (' . strtolower($webBrowser->getBrowserArchitecture()) . ')',
                        ],
                    ],
                ],
            ];
        }


        return $visitorDetails;
    }


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
