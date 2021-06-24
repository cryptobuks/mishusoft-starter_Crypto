<?php declare(strict_types=1);

namespace Mishusoft\Framework\Chipsets\System;

use DOMDocument;
use DOMElement;
use DOMNode;
use ErrorException;
use Exception;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\Ui;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\_String;
use RuntimeException;

class Firewall
{
    // Declare version.
    public const VERSION = '1.0.2';


    public const FIREWALL_CONFIG_FILE = RUNTIME_REGISTRIES_PATH.'firewall.json';
    public const FIREWALL_LOG_FILE    = RUNTIME_REGISTRIES_PATH.'firewall.logs.access.json';

    public const REQUIRED_KEYS = [
        'status'                             => 'enable',
        'hostname'                           => INSTALLED_HOST_NAME,
        'granted-device-access-limit-filter' => 'enable',
        'granted-device-access-limit'        => '600',
        'granted-device-time-limit'          => '60',
        'granted-device-limit-time-format'   => 'minute',
        'blocked-device-access-limit-filter' => 'enable',
        'blocked-device-access-limit'        => '10',
        'blocked-device-time-limit'          => '60',
        'blocked-device-limit-time-format'   => 'minute',
    ];

    public const BUILT_IN_CONFIG = [
        'granted-device-count-down-time' => [],
        'blocked-device-count-down-time' => [],
        'accept'                         => [
            'request-method' => [
                'get',
                'post',
                'accept',
                'ms-feedback-data',
                'options',
            ],
        ],
        'browser'                        => [
            'order'     => 'blacklist',
            'banned'    => ['curl'],
            'whitelist' => [],
            'blacklist' => ['curl'],
        ],
        'ip'                             => [
            'order'     => 'blacklist',
            'banned'    => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'device'                         => [
            'order'     => 'blacklist',
            'banned'    => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'continent'                      => [
            'order'     => 'blacklist',
            'banned'    => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'country'                        => [
            'order'     => 'blacklist',
            'banned'    => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
        'city'                           => [
            'order'     => 'blacklist',
            'banned'    => [],
            'whitelist' => [],
            'blacklist' => [],
        ],
    ];

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
    private array $firewallConfiguration = [];

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
     * @throws JsonException Throw exception when json process error occurred.
     */
    public function __construct()
    {
        Logger::write('Store Browser object in to self::$browser attribute.');
        self::$browser = new Browser();
        Logger::write(sprintf('Load Firewall configuration from %s.json.', self::FIREWALL_CONFIG_FILE));
        $this->loadConfig();
        Logger::write('Filter request of client.');
        $this->filterHttpRequest(apache_request_headers());
    }//end __construct()


    /**
     * Firewall config loader.
     *
     * @return void
     * @throws JsonException|RuntimeException Throw exception when json process error occurred.
     */
    private function loadConfig(): void
    {
        /*
         * Check firewall configuration file existent.
         */

        Logger::write(sprintf('Start checking if %s file exists.', self::FIREWALL_CONFIG_FILE));
        if (file_exists(self::FIREWALL_CONFIG_FILE) === false) {
            Logger::write(sprintf('The file %s is not exists.', self::FIREWALL_CONFIG_FILE));
            Logger::write(sprintf('Write new file %s.', self::FIREWALL_CONFIG_FILE));
            FileSystem::write(self::FIREWALL_CONFIG_FILE, []);
        }

        Logger::write(sprintf('End checking if %s file exists.', self::FIREWALL_CONFIG_FILE));

        /*
         * Check firewall logs file existent.
         */

        Logger::write(sprintf('Start checking if %s file exists.', self::FIREWALL_LOG_FILE));
        if (file_exists(self::FIREWALL_LOG_FILE) === false) {
            Logger::write(sprintf('The file %s is not exists.', self::FIREWALL_LOG_FILE));
            Logger::write(sprintf('Write new file %s.', self::FIREWALL_LOG_FILE));
            FileSystem::write(self::FIREWALL_LOG_FILE, []);
        }

        Logger::write(sprintf('End checking if %s file exists.', self::FIREWALL_LOG_FILE));

        /*
         * Check read permission of configuration file.
         */

        Logger::write(sprintf('Start checking read permission of %s.', self::FIREWALL_CONFIG_FILE));
        if (is_readable(self::FIREWALL_CONFIG_FILE) === true) {
            /*
             * check configuration file's content are valid array
             */

            $oldConfiguration = _JSON::decodeToArray(FileSystem::read(self::FIREWALL_CONFIG_FILE));
            Logger::write(sprintf('Start of test whether the content of %s file can be converted to array format.', self::FIREWALL_CONFIG_FILE));
            if (is_array($oldConfiguration) === true) {
                Logger::write(sprintf('Converted %s for content into array format.', self::FIREWALL_CONFIG_FILE));
                Logger::write(sprintf('Load array format content into runtime from %s.', self::FIREWALL_CONFIG_FILE));
                $this->firewallConfiguration = $oldConfiguration;
            }

            Logger::write(sprintf('End of test whether the content of %s file can be converted to array format.', self::FIREWALL_CONFIG_FILE));
            /*
             * Check the firewall configuration is empty or not
             * if it empty, then configuration reset with default
             */

            Logger::write(sprintf('Start checking whether the %s file is empty.', self::FIREWALL_CONFIG_FILE));
            if (count($this->firewallConfiguration) > 0) {
                /*
                 * we need to array match
                 * if return false, then we need to replace and continue
                 */

                Logger::write('Check different of runtime configuration and required keys.');
                if (count(array_diff_assoc(self::REQUIRED_KEYS, $this->firewallConfiguration)) > 0) {
                    Logger::write('Different found from runtime configuration and required keys.');
                    $replaced = array_replace_recursive($this->firewallConfiguration, self::REQUIRED_KEYS);
                    if ($replaced !== null) {
                        Logger::write('Load changed configuration into runtime configuration.');
                        $this->firewallConfiguration = $replaced;
                    }
                }
            } else {
                /*
                 * merge to default configuration
                 */

                Logger::write(sprintf('The content of %s is not empty.', self::FIREWALL_CONFIG_FILE));
                Logger::write('Merging default configuration into runtime configuration.');
                $this->firewallConfiguration = array_merge_recursive(self::REQUIRED_KEYS, self::BUILT_IN_CONFIG);
            }//end if

            Logger::write(sprintf('End checking whether the %s file is empty.', self::FIREWALL_CONFIG_FILE));
            /*
             * if loaded firewall configuration is not valid array,
             * then delete configuration file and write new default data
             */

            Logger::write('Check required attribute of runtime configuration.');
            if (count($this->firewallConfiguration) === 10) {
                Logger::write('Attribute missing found from runtime configuration.');
                $config = array_replace_recursive($this->firewallConfiguration, self::BUILT_IN_CONFIG);
                if ($config !== null) {
                    Logger::write('Load changed configuration into runtime configuration.');
                    $this->firewallConfiguration = $config;
                }
            }

            /*
             * if firewall configuration file is empty,
             * then create configuration file and write new default data
             */

            Logger::write(sprintf('Check content array conversation of %s.', self::FIREWALL_CONFIG_FILE));
            if (is_array(_JSON::decodeToArray(FileSystem::read(self::FIREWALL_CONFIG_FILE))) === true) {
                $firewallArrayKeys     = array_keys($this->firewallConfiguration);
                $firewallFileArrayKeys = array_keys(_JSON::decodeToArray(FileSystem::read(self::FIREWALL_CONFIG_FILE)));

                Logger::write('Check different of runtime configuration and stored configuraiton.');
                if (count(array_diff_assoc($firewallArrayKeys, $firewallFileArrayKeys)) > 0) {
                    Logger::write('Write the difference of runtime configuration and stored configuraiton.');
                    $this->createConfiguration($this->firewallConfiguration);
                }
            } else {
                Logger::write('Write current runtime configuration.');
                $this->createConfiguration($this->firewallConfiguration);
            }
        } else {
            Logger::write(sprintf('Read permission denied. Unable to read %s.', self::FIREWALL_CONFIG_FILE));
            throw new RuntimeException('Read permission denied. Unable to read root'.self::FIREWALL_CONFIG_FILE);
        }//end if

        Logger::write(sprintf('End checking read permission of %s.', self::FIREWALL_CONFIG_FILE));
    }//end loadConfig()


    /**
     * Create configuration file.
     *
     * @param array $config Array format of Firewall configuration.
     *
     * @return void
     * @throws JsonException Throw exception when json error occurred.
     */
    private function createConfiguration(array $config): void
    {
        Logger::write('Check runtime configuration file existent.');
        if (file_exists(self::FIREWALL_CONFIG_FILE) === true) {
            Logger::write('Remove exists runtime configuration file.');
            FileSystem::remove(self::FIREWALL_CONFIG_FILE);
        }

        Logger::write(sprintf('Write firewall configuration into %s.', self::FIREWALL_CONFIG_FILE));
        FileSystem::write(self::FIREWALL_CONFIG_FILE, $config);
    }//end createConfiguration()


    /**
     * Filter http request of client.
     *
     * @param array $request Array format of request.
     *
     * @return void
     * @throws JsonException Throw exception when json error occurred.
     * @throws Exception Throw exception when error occurred.
     */
    private function filterHttpRequest(array $request): void
    {
        /*
         * Check accept attribute in firewall configuration
         * if not exists, then reset configuration.
         */

        Logger::write('Start checking whether the accept keyword is in the $this->firewallConfiguration variable.');
        // _Debug::preOutput($this->firewallConfiguration);
        if (array_key_exists('accept', $this->firewallConfiguration) === false) {
            Logger::write('Check faild. Accept keyword not found in $this->firewallConfiguration variable.');
            Logger::write('Cteating new config with built in config.');
            $this->createConfiguration(self::BUILT_IN_CONFIG);
        }

        Logger::write('End checking whether the accept keyword is in the $this->firewallConfiguration variable.');

        Logger::write('Start checking whether REQUEST_METHOD keyword in $_SERVER variable.');
        // _Debug::preOutput($_SERVER);
        Logger::write('Search accept keyword in allowed request method variable.');
        if (in_array(
            _String::lower(_Array::value($_SERVER, 'REQUEST_METHOD')),
            _Array::value(_Array::value($this->firewallConfiguration, 'accept'), 'request-method'),
            true
        ) === false
        ) {
            Logger::write('Browser Request Method was not found in the authorized method.');
            Logger::write('Check whether the client\'s IP is blocked');
            if ($this->isListed(IP::get()) === false) {
                Logger::write('The client\'s IP is not blocked. Then it will be blocked.');
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'IP';
                $this->addIP(IP::get(), 'blocked');
            }
        }

        Logger::write('End checking whether REQUEST_METHOD keyword in $_SERVER variable.');

        // _Debug::preOutput($request);
        Logger::write('Start testing whether the request array');

        if (is_array($request) === true) {
            foreach ($request as $key => $value) {
                if (strtolower($key) === 'host') {
                    // _Debug::preOutput($key);
                    // _Debug::preOutput($value);
                    // _Debug::preOutput(_Array::value($this->firewallConfiguration, 'hostname'));
                    Logger::write('Start testing requested hostname with firewall configuration.');
                    if (_Array::value($this->firewallConfiguration, 'hostname') !== $value) {
                        // _Debug::preOutput('Host name did not matched');
                        // _Debug::preOutput('Firewall take a action');
                        if ($this->isListed(IP::get()) === false) {
                            Logger::write('Requested hostname not matched with firewall configuration.');
                            Logger::write(sprintf('Firewall has been block access of %s.', IP::get()));
                            $this->actionStatus    = 'blocked';
                            $this->actionComponent = 'browser';
                            $this->addIP(IP::get(), 'blocked');
                        }
                    }

                    Logger::write('End testing requested hostname with firewall configuration.');
                    // exit();
                }//end if
            }//end foreach
        }//end if

        Logger::write('End testing whether the request array');
    }//end filterHttpRequest()


    /**
     * Check the IP Address of client in blacklist or banned.
     *
     * @param string $ip   The IP Address of client.
     * @param string $list List name of action.
     *
     * @return boolean
     */
    private function isListed(string $ip, string $list='banned'): bool
    {
        $list = ($list === 'blocked') ? 'blacklist' : 'banned';
        foreach ($this->firewallConfiguration as $key => $value) {
            if (is_array($this->firewallConfiguration[$key]) === true
                && array_key_exists($list, $this->firewallConfiguration[$key]) === true
                && in_array($ip, $this->firewallConfiguration[$key][$list], true) === true
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
     * @throws JsonException|Exception Throw exception when error occurred.
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
            throw new Exception('Unexpected value');
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
        if (in_array($ip, $this->firewallConfiguration['ip'][$list], true) === true) {
            foreach ($this->firewallConfiguration['ip'][$list] as $key => $value) {
                if ($this->firewallConfiguration['ip'][$list][$key] === $ip) {
                    unset($this->firewallConfiguration['ip'][$list][$key]);
                    asort($this->firewallConfiguration['ip'][$list]);
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
     * @throws JsonException Throw exception when json error occurred.
     */
    private function updateList(string $ip, string $list): void
    {
        if (in_array($ip, $this->firewallConfiguration['ip'][$list], true) === false) {
            $this->firewallConfiguration['ip'][$list][] = $ip;
            FileSystem::saveToFile(self::FIREWALL_CONFIG_FILE, _JSON::encodeToString($this->firewallConfiguration));
        }
    }//end updateList()


    /**
     * Prepare runtime failure ui for html display.
     *
     * @param string $status  Name of action.
     * @param array  $message Error message.
     *
     * @return void
     * @throws JsonException|ErrorException Throw exception when json error occurred.
     */
    public static function runtimeFailure(string $status, array $message): void
    {
        foreach (Http::getErrorsRecord() as $details) {
            if (array_key_exists('Description', $details) === true
                && _String::lower($details['Description']) === _String::lower($status)
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
     * @param string $title   Name of action.
     * @param array  $message Error message.
     *
     * @return void
     * @throws JsonException|ErrorException Throw exception when json error occurred.
     */
    private static function runtimeFailureUi(string $title, array $message): void
    {
        self::$browser = new Browser();
        $requestMethod  = self::$browser->getRequestMethod();
        $requestAddress = Browser::getVisitedPage();

        if (self::$browser->getRequestMethod() === 'OPTIONS') {
            // add welcome not for http options method
            Storage::StreamAsJson(['message' => ['type' => 'success', 'contents' => "The HTTP OPTIONS method requests permitted to communicate for $requestAddress."]]);
            Logger::write("The HTTP OPTIONS method requests permitted to communicate for $requestAddress.", LOGGER_WRITE_STYLE_FULL, LOGGER_FLAG_TYPE_ACCESS);
        } else {
            Logger::write(array_key_exists('debug', $message) ? $message['debug']['description'] : $message['description']." for $requestAddress.", LOGGER_WRITE_STYLE_FULL, LOGGER_FLAG_TYPE_ACCESS);
            if (Memory::Data('framework')->debug) {
                // add runtime failure ui
                Ui::HtmlInterface(
                    $title,
                    function ($html, $head) use ($message, $requestAddress, $requestMethod, $title) {
                        Ui::text(Ui::element($head, 'style'), 'body{margin: 0;padding: 0;display: flex;justify-content: center;align-items: center;height: 445px;}');
                        $body     = Ui::element($html, 'body');
                        $welcome  = Ui::element($body, 'ms-app', ['style' => 'width: 650px;box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']);
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
                        $body = Ui::element($html, 'body', ['style' => 'color: '.Ui::color['black'].';margin:0;padding:0;font-family:Noto Sans']);

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
                                'style' => Ui::htmlHrefStyle.'color:'.Ui::color['lightgrey'].';padding: 35px;text-align: center;font-size: 30px;font-weight: bold;display: flex;flex-direction: column;',
                            ]
                        );

                        Ui::element($notFoundBody, 'error-code', ['style' => Ui::htmlHrefStyle.'font-size: 120px;', 'text' => Http::getErrorCode($title)]);
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
            'User Agent: '.$browser->getUserAgent()
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
            'IP address: '.IP::get()
        );

        // avoid error country capturing
        if (_String::lower(IP::getCountry()) !== 'unknown') {
            Ui::text(
                Ui::element(
                    $body,
                    'ms-app-paragraph',
                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                ),
                'Country: '.IP::getCountry()
            );
        } else {
            if (_String::lower(IP::getInfo('country')) !== 'unknown location') {
                Ui::text(
                    Ui::element(
                        $body,
                        'ms-app-paragraph',
                        ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                    ),
                    'Country: '.IP::getInfo('country')
                );
            }
        }//end if

        // avoid error browser capturing
        if (_String::lower($browser->getBrowserName()) !== 'unknown') {
            Ui::text(
                Ui::element(
                    $body,
                    'ms-app-paragraph',
                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                ),
                'Browser: '.$browser->getBrowserNameFull()
            );
        }

        // avoid error device capturing
        if (_String::lower($browser->getDeviceName()) !== 'unknown') {
            Ui::text(
                Ui::element(
                    $body,
                    'ms-app-paragraph',
                    ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;padding: 5px;']
                ),
                'Device: '.$browser->getDeviceName().' ('.strtolower($browser->getDeviceArchitecture()).')'
            );
        }
    }//end viewVisitorInfo()


    /**
     * Create http request to system for the client
     *
     * @return void
     * @throws JsonException Throw exception when json error occurred.
     */
    public function makeAccessRequest(): void
    {
        Logger::write('Start create http request to system for the client');
        /*
         * $cpuLoad = getServerLoad();
         *         if (is_null($cpuLoad)) {
         *             echo "CPU load not estimable (maybe too old Windows or missing rights at Linux or Windows)";
         *         }
         *         else {
         *             echo $cpuLoad . "%";
         *         }*/
        /*
            off check cpu load*/
        /*
            if ($this->getServerLoad() >= 80) {
            Firewall::runtimeFailure("Service Unavailable", [
                "debug" => ["file" => (new Browser())->getURLPath(), "location" => (new Browser())->getVisitedPage(), "description" => "CPU process over loaded!! Current: %" . $this->getServerLoad()],
                "error" => ["description" => "Server is very busy. Please try again later!!"]
            ]);
        }*/

        // Start test website's host name
        Logger::write(
            sprintf(
                'Start testing requested hostname [%s] with firewall configuration.',
                self::$browser->getURLHostname()
            )
        );

        if ($this->firewallConfiguration['hostname'] !== self::$browser->getURLHostname()) {
            Logger::write(
                sprintf(
                    'Requested hostname [%s] does not matched with firewall configuration.',
                    self::$browser->getURLHostname()
                )
            );
            if ($this->isListed(IP::get()) === false) {
                Logger::write(
                    sprintf(
                        'Firewall block the browser %s of client.',
                        self::$browser->getBrowserNameFull()
                    )
                );
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'browser';
            }
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

        if (in_array(IP::get(), $this->firewallConfiguration['ip']['banned'], true) === true) {
            Logger::write(
                sprintf(
                    'The client ip address [%s] found in banned list.',
                    IP::get()
                )
            );

            Logger::write('Firewall banned the ip address.');
            $this->actionStatus    = 'banned';
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

        if (in_array(strtolower(self::$browser->getBrowserName()), $this->firewallConfiguration['browser']['banned'], true) === true) {
            Logger::write(
                sprintf(
                    'The client browser [%s] found in banned list.',
                    self::$browser->getBrowserNameFull()
                )
            );
            Logger::write('Firewall banned the browser.');
            $this->actionStatus    = 'banned';
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
        if (in_array(_String::lower(self::$browser->getDeviceName()), $this->firewallConfiguration['device']['banned'], true) === true) {
            Logger::write(
                sprintf(
                    'The client device [%s] found in banned list.',
                    self::$browser->getDeviceNameFull()
                )
            );
            Logger::write('Firewall banned the device.');
            $this->actionStatus    = 'banned';
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
        if (in_array(_String::lower(IP::getInfo('continent')), $this->firewallConfiguration['continent']['banned'], true)) {
            Logger::write(
                sprintf(
                    'The client continent [%s] found in banned list.',
                    IP::getInfo('continent')
                )
            );
            Logger::write('Firewall banned the continent.');
            $this->actionStatus    = 'banned';
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
        if (in_array(_String::lower(IP::getInfo('country')), $this->firewallConfiguration['country']['banned'], true) === true) {
            Logger::write('The client continent found in banned list.');
            Logger::write('Firewall banned the country.');
            $this->actionStatus    = 'banned';
            $this->actionComponent = 'country';
        }

        Logger::write('End searching client country in banned list.');

        // End test the country name of client.
        // Start test the country name of client.
        Logger::write('Start searching client city in banned list.');
        if (in_array(_String::lower(IP::getInfo('city')), $this->firewallConfiguration['city']['banned'], true)) {
            Logger::write('The client city found in banned list.');
            Logger::write('Firewall banned the city.');
            $this->actionStatus    = 'banned';
            $this->actionComponent = 'city';
        }

        Logger::write('End searching client city in banned list.');

        // End test the city name of client.
        // Start test the country name of client.
        Logger::write('Start searching client browser in black list.');
        if ($this->firewallConfiguration['browser']['order'] === 'blacklist') {
            // we need to check block time of browser,
            // if the time has been expire, then unblock th browser
            // or show protection message
            if (in_array(_String::lower(self::$browser->getBrowserName()), $this->firewallConfiguration['browser']['blacklist'], true) === true) {
                Logger::write('The client browser found in black list.');
                Logger::write('Firewall banned the browser.');
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'browser';
            }
        }
        Logger::write('End searching client browser in banned list.');

        // End test the city name of client.

        if ($this->firewallConfiguration['browser']['order'] === 'whitelist') {
            if (in_array(_String::lower(self::$browser->getBrowserName()), $this->firewallConfiguration['browser']['whitelist'], true) === false) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'browser';
            }
        }

        if ($this->firewallConfiguration['ip']['order'] === 'blacklist') {
            // we need to check block time of ip,
            // if the time has been expire, then unblock the ip
            // or show protection message
            if (in_array(IP::get(), $this->firewallConfiguration['ip']['blacklist'], true) === false) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'IP';
            }
        }

        if ($this->firewallConfiguration['ip']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->firewallConfiguration['ip']['whitelist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'IP';
            }
        }

        if ($this->firewallConfiguration['device']['order'] === 'blacklist') {
            // we need to check block time of device,
            // if the time has been expire, then unblock the device
            // or show protection message
            if (in_array(IP::get(), $this->firewallConfiguration['device']['blacklist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'device';
            }
        }

        if ($this->firewallConfiguration['device']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->firewallConfiguration['device']['whitelist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'device';
            }
        }

        if ($this->firewallConfiguration['continent']['order'] === 'blacklist') {
            // we need to check block time of continent,
            // if the time has been expire, then unblock the continent
            // or show protection message
            if (in_array(IP::get(), $this->firewallConfiguration['continent']['blacklist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'continent';
            }
        }

        if ($this->firewallConfiguration['continent']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->firewallConfiguration['continent']['whitelist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'continent';
            }
        }

        if ($this->firewallConfiguration['country']['order'] === 'blacklist') {
            // we need to check block time of country,
            // if the time has been expire, then unblock th country
            // or show protection message
            if (in_array(IP::get(), $this->firewallConfiguration['country']['blacklist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'country';
            }
        }

        if ($this->firewallConfiguration['country']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->firewallConfiguration['country']['whitelist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'country';
            }
        }

        if ($this->firewallConfiguration['city']['order'] === 'blacklist') {
            // we need to check block time of city,
            // if the time has been expire, then unblock the city
            // or show protection message
            if (in_array(IP::get(), $this->firewallConfiguration['city']['blacklist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'city';
            }
        }

        if ($this->firewallConfiguration['city']['order'] === 'whitelist') {
            if (!in_array(IP::get(), $this->firewallConfiguration['city']['whitelist'], true)) {
                $this->actionStatus    = 'blocked';
                $this->actionComponent = 'city';
            }
        }

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

        Logger::write('End create http request to system for the client');
    }//end makeAccessRequest()


    /**
     * @throws JsonException
     */
    private function storeFirewallLogs(): void
    {
        $logs = [];
        if (is_readable(self::FIREWALL_LOG_FILE) === true) {
            if (FileSystem::read(self::FIREWALL_LOG_FILE) !== '') {
                $content = json_decode(FileSystem::read(self::FIREWALL_LOG_FILE), true, 512, JSON_THROW_ON_ERROR);
                if (is_array($content) === true) {
                    $logs = array_merge($logs, $content);
                } else {
                    $logs = array_merge($logs, self::BUILT_IN_CONFIG);
                }

                if (count($logs) !== 0) {
                    if (array_key_exists($this->actionStatus, $logs) === true) {
                        if (is_array($logs[$this->actionStatus]) === true
                            && array_key_exists(IP::get(), $logs[$this->actionStatus]) === true
                        ) {
                            if (is_array($logs[$this->actionStatus][IP::get()]) === true
                                && array_key_exists(self::$browser->getBrowserNameFull(), $logs[$this->actionStatus][IP::get()]) === true
                            ) {
                                if (is_array($logs[$this->actionStatus][IP::get()][self::$browser->getBrowserNameFull()]) === true
                                    && array_key_exists(Time::getToday(), $logs[$this->actionStatus][IP::get()][self::$browser->getBrowserNameFull()]) === false && is_readable(self::FIREWALL_LOG_FILE) === true
                                ) {
                                    FileSystem::saveToFile(
                                        self::FIREWALL_LOG_FILE,
                                        _JSON::encodeToString(
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
                                                                        $logs[$this->actionStatus][IP::get()][self::$browser->getBrowserNameFull()],
                                                                        $this->getNewVisitorTimeBased()
                                                                    ),
                                                                ]
                                                            ),
                                                        ]
                                                    ),
                                                ]
                                            )
                                        )
                                    );
                                }//end if
                            } elseif (is_writable(self::FIREWALL_LOG_FILE) === true) {
                                FileSystem::saveToFile(
                                    self::FIREWALL_LOG_FILE,
                                    _JSON::encodeToString(
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
                                    )
                                );
                            }//end if
                        } elseif (is_writable(self::FIREWALL_LOG_FILE) === true) {
                            FileSystem::saveToFile(
                                self::FIREWALL_LOG_FILE,
                                json_encode(
                                    array_merge(
                                        $logs,
                                        [
                                            $this->actionStatus => array_merge($logs[$this->actionStatus], $this->getNewVisitorIPBased()),
                                        ]
                                    )
                                )
                            );
                        }//end if
                    } elseif (is_writable(self::FIREWALL_LOG_FILE) === true) {
                        FileSystem::saveToFile(
                            self::FIREWALL_LOG_FILE,
                            _JSON::encodeToString(
                                array_merge(
                                    $logs,
                                    [$this->actionStatus => $this->getNewVisitorIPBased()]
                                )
                            )
                        );
                    }//end if
                } elseif (is_writable(self::FIREWALL_LOG_FILE) === true) {
                    FileSystem::saveToFile(
                        self::FIREWALL_LOG_FILE,
                        _JSON::encodeToString([$this->actionStatus => $this->getNewVisitorIPBased()])
                    );
                }//end if
            } elseif (is_writable(self::FIREWALL_LOG_FILE) === true) {
                FileSystem::saveToFile(
                    self::FIREWALL_LOG_FILE,
                    _JSON::encodeToString([$this->actionStatus => $this->getNewVisitorIPBased()])
                );
            }//end if
        } else {
            throw new RuntimeException('Permission denied. Unable to read '.self::FIREWALL_LOG_FILE);
        }//end if
    }//end storeFirewallLogs()


    /**
     * @return array[]
     * @throws JsonException
     */
    private function getNewVisitorTimeBased(): array
    {
        return [
            Time::getToday() => [
                'ip'         => IP::get(),
                'country'    => IP::getCountry(),
                'location'   => IP::getInfo(),
                'device'     => self::$browser->getDeviceName().' ('.self::$browser->getDeviceArchitecture().')',
                'browser'    => self::$browser->getBrowserNameFull(),
                'UUAS'       => self::$browser->getUserAgent(),
                'url'        => self::$browser::VisitedPageURL($_SERVER),
                'status'     => $this->actionStatus,
                'component'  => $this->actionComponent,
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
     */
    private function accessDefence(string $status): void
    {
        if (array_key_exists("$status-device-access-limit-filter", $this->firewallConfiguration) and $this->firewallConfiguration["$status-device-access-limit-filter"] === 'enable') {
            if (is_readable(self::FIREWALL_LOG_FILE) === true) {
                if (!empty(file_get_contents(self::FIREWALL_LOG_FILE))) {
                    $logs = json_decode(file_get_contents(self::FIREWALL_LOG_FILE), true, 512, JSON_THROW_ON_ERROR);
                    if (is_array($logs) && count($logs) !== 0) {
                        if (array_key_exists($status, $logs)) {
                            if (is_array($logs[$status]) && array_key_exists(IP::get(), $logs[$status])) {
                                $times          = [];
                                $countdownTimes = [];
                                foreach (array_keys($logs[$status][IP::get()]) as $browser) {
                                    foreach ($logs[$status][IP::get()][$browser] as $time => $log) {
                                        //$times = array_merge($times, [$time => $log]);
                                        $times[$time] = $log;
                                        if (!array_key_exists(IP::get(), $this->firewallConfiguration["$status-device-count-down-time"])) {
                                            $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = '';
                                        }

                                        if ($time >= $this->firewallConfiguration["$status-device-count-down-time"][IP::get()]) {
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
                                    if (array_key_exists("$status-device-count-down-time", $this->firewallConfiguration)) {
                                        // check countdown time is not empty, then calculate accurate time
                                        if (!empty($this->firewallConfiguration["$status-device-count-down-time"])) {
                                            /*
                                                preOutput($this->firewallConfiguration["$status-device-count-down-time"]);*/
                                            // Set new time, if set time to current time more than 60 minutes, set new time as current time
                                            $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($this->firewallConfiguration["$status-device-count-down-time"][IP::get()])) / 60);
                                            if ($this->lastVisitDuration >= $this->firewallConfiguration["$status-device-time-limit"]) {
                                                $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $now['visit-time'];
                                                FileSystem::saveToFile(self::FIREWALL_CONFIG_FILE, json_encode($this->firewallConfiguration, JSON_THROW_ON_ERROR));
                                            } //end if

                                            else {
                                                // Set new time, if previous time set more than 10 minutes
                                                $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                                if ($this->lastVisitDuration > 10) {
                                                    // preOutput("Setting previous time!!");
                                                    $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                                    FileSystem::saveToFile(self::FIREWALL_CONFIG_FILE, json_encode($this->firewallConfiguration, JSON_THROW_ON_ERROR));
                                                    // preOutput($this->firewallConfiguration);
                                                }
                                            }
                                        } //end if

                                        else {
                                            // Set new time, if current time to previous time set more than 60 minutes
                                            $this->lastVisitDuration = (int)((strtotime($now['visit-time']) - strtotime($previous['visit-time'])) / 60);
                                            if ($this->lastVisitDuration >= $this->firewallConfiguration["$status-device-time-limit"]) {
                                                $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $now['visit-time'];
                                            } else {
                                                // Set new time, if current time to previous time set less than 60 minutes
                                                $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] = $previous['visit-time'];
                                            }

                                            FileSystem::saveToFile(self::FIREWALL_CONFIG_FILE, json_encode($this->firewallConfiguration, JSON_THROW_ON_ERROR));
                                            // preOutput($this->firewallConfiguration["$status-device-count-down-time"]);
                                        }
                                    } //end if

                                    else {
                                        // Autoload::log("Preparing to create firewall configuration file.");
                                        if (FileSystem::IsWriteable(self::FIREWALL_CONFIG_FILE)) {
                                            file_put_contents(self::FIREWALL_CONFIG_FILE, json_encode(self::BUILT_IN_CONFIG, JSON_THROW_ON_ERROR));
                                        }

                                        // load firewall configuration in runtime
                                        $this->firewallConfiguration = self::BUILT_IN_CONFIG;
                                    }

                                    $this->controller = !empty($this->firewallConfiguration["$status-device-count-down-time"][IP::get()]) ? $this->firewallConfiguration["$status-device-count-down-time"][IP::get()] : $previous['visit-time'];
                                    /*
                                        check limit time format key and value*/
                                    // $minutes = (strtotime("2012-09-21 12:12:22") - time()) / 60;
                                    if (array_key_exists("$status-device-limit-time-format", $this->firewallConfiguration)) {
                                        // check limit time format key value and it is second, so calculate duration as seconds
                                        if ($this->firewallConfiguration["$status-device-limit-time-format"] === 'second') {
                                            $this->duration  = (int)(strtotime($now['visit-time']) - strtotime($this->controller));
                                            $this->separator = 'seconds';
                                        } //end if

                                        elseif ($this->firewallConfiguration["$status-device-limit-time-format"] === 'minute') {
                                            $this->duration  = (int)((strtotime($now['visit-time']) - strtotime($this->controller)) / 60);
                                            $this->separator = 'minutes';
                                        } // otherwise calculate duration as hours

                                        else {
                                            $this->duration  = (int)(((strtotime($now['visit-time']) - strtotime($this->controller)) / 60) / 60);
                                            $this->separator = 'hours';
                                        }
                                    } //end if

                                    else {
                                        // Autoload::log("Preparing to create firewall configuration file.");
                                        if (FileSystem::IsWriteable(self::FIREWALL_CONFIG_FILE)) {
                                            file_put_contents(self::FIREWALL_CONFIG_FILE, json_encode(self::BUILT_IN_CONFIG, JSON_THROW_ON_ERROR));
                                        }

                                        // load firewall configuration in runtime
                                        $this->firewallConfiguration = self::BUILT_IN_CONFIG;
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
                                    preOutput("Your access time limit: " . $this->firewallConfiguration["$status-device-time-limit"]);
                                 preOutput("Your access limit: " . $this->firewallConfiguration["$status-device-access-limit"]);*/

                                /*
                                    make decisions*/
                                // check time limit is set or not
                                if (array_key_exists("$status-device-time-limit", $this->firewallConfiguration)) {
                                    /*
                                        check access time is over or not*/
                                    // access time is not over in limited (60 minute) time
                                    if ($this->firewallConfiguration["$status-device-time-limit"] > $this->duration) {
                                        // check access time
                                        if (array_key_exists("$status-device-access-limit", $this->firewallConfiguration)) {
                                            // Returns true if access is greater than access limit
                                            if (count($countdownTimes) >= $this->firewallConfiguration["$status-device-access-limit"]) {
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
                    throw new RuntimeException('Unable to continue. '.self::FIREWALL_LOG_FILE.' is empty');
                }//end if
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::FIREWALL_LOG_FILE);
            }//end if
        }//end if
    }//end accessDefence()


    /**
     * @throws JsonException
     */
    public function defenceActivate(): void
    {
        if ($this->actionStatus === 'banned' || $this->actionStatus === 'blocked') {
            if (array_key_exists('ui', self::$browser->getBrowserDetails(self::$browser->getBrowserName()))) {
                if (_String::lower(self::$browser->getBrowserDetails(self::$browser->getBrowserName())['ui']) === _String::lower('FullTextMode')) {
                    $msg_lb        = "\n";
                    $this->msgTab = "\t";
                    $this->defenseMessageShow('', $msg_lb, $this->actionStatus, $this->actionComponent, 'text');
                } else {
                    $msg_lb        = '<br/>';
                    $this->msgTab = '&emsp;';
                    self::$color   = 'red';
                    $this->defenseMessageShow('Access', $msg_lb, $this->actionStatus, $this->actionComponent, 'graphic');
                }
            } else {
                $msg_lb        = '<br/>';
                $this->msgTab = '&emsp;';
                self::$color   = 'red';
                $this->defenseMessageShow('Access', $msg_lb, $this->actionStatus, $this->actionComponent, 'graphic');
            }
        } else {
            $msg_lb        = '<br/>';
            $this->msgTab = '&emsp;';
            self::$color   = 'green';
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
        $requestMethod  = self::$browser->getRequestMethod();
        $requestAddress = self::$browser::getVisitedPage();

        if (!empty($viewMode) && is_string($viewMode)) {
            if (Network::requestHeader('HTTP_SEC_FETCH_MODE') === 'cors') {
                Storage::StreamAsJson(
                    [
                        'message'   => [
                            'type'    => 'error',
                            'details' => "Your access has been $status $componentText.",
                            'visitor' => [
                                'user-agent'     => self::$browser->getUserAgent(),
                                'request-method' => self::$browser->getRequestMethod(),
                                'request-url'    => self::$browser::getVisitedPage(),
                                'ip-address'        => IP::get(),
                            ],
                        ],
                        'copyright' => [
                            'year'  => Time::getCurrentYearNumber(),
                            'owner' => Framework::COMPANY_NAME,
                        ],
                    ]
                );
            } elseif ($viewMode === 'text') {
                echo PHP_EOL;
                echo " Your access has been $status $componentText. ".PHP_EOL;
                for ($i = 0; $i <= 65; $i++) {
                    echo '-';
                }

                echo PHP_EOL;
                // echo " User Agent : $this->msg_tab" . self::$browser->getUserAgent() . PHP_EOL;
                echo " Request URL : $this->msgTab$requestMethod $requestAddress".PHP_EOL;
                echo PHP_EOL;
                echo " IP address : $this->msgTab".IP::get().PHP_EOL;

                // avoid error country capturing
//                if (_String::lower(IP::getCountry()) !== 'unknown' || _String::lower(IP::getInfo('country')) !== 'unknown location') {
//                    echo " Country : $this->msgTab".IP::getCountry().PHP_EOL;
//                }
                if (_String::lower(IP::getCountry()) !== 'unknown') {
                    echo " Country : $this->msgTab".IP::getCountry().PHP_EOL;
                } elseif (_String::lower(IP::getInfo('country')) !== 'unknown location') {
                    echo " Country : $this->msgTab".IP::getInfo('country').PHP_EOL;
                }

                // avoid error browser capturing
                if (_String::lower(self::$browser->getBrowserName()) !== 'unknown') {
                    echo " Browser : $this->msgTab".self::$browser->getBrowserNameFull().PHP_EOL;
                }

                // avoid error device capturing
                if (_String::lower(self::$browser->getDeviceName()) !== 'unknown') {
                    echo " Device : $this->msgTab".self::$browser->getDeviceName().' ('._String::lower(self::$browser->getDeviceArchitecture()).').'.PHP_EOL;
                }

                for ($i = 0; $i <= 65; $i++) {
                    echo '-';
                }

                echo PHP_EOL;
                //echo 'Copyright © '.Time::getCurrentYearNumber().' '.Framework::COMPANY_NAME.'. All Right Reserved.'.PHP_EOL;
                echo '© '.Time::getCurrentYearNumber().' '.Framework::COMPANY_NAME.'.'.PHP_EOL;
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

    public static function strictProtectionView(string $documentTitle, string $message, string $reason): void
    {
        // Start application web interface.
        Ui::start();
        Ui::setDocumentTitle(ucfirst($documentTitle) . '- Mishusoft Firewall');




//        $cssContent = 'html{box-sizing: border-box;font-size: 14px;background-color: rgb(238, 238, 245);background-color: var(--gray-200);overflow-x: hidden;overflow-y: scroll;}';
//        $cssContent .= 'body{margin: 0;padding: 0;color:black;display: flex;justify-content: center;align-items: center;height: 635px;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji",SourceSansPro, SolaimanLipi;}';
//
//        // $cssContent .= '*, ::before, ::after { border-width: 0;border-style: solid;border-color: rgb(232, 229, 239);border-color: var(--gray-300);';
//        $cssContent .= '.application{position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;}';
//        $cssContent .= ".application-content{display: block;margin: 0;padding: 10px 35px;text-align: left;background-color:white;width:768px;/*border: 1px solid red;*/-webkit-border-radius: 10px;border-radius: 10px}";
//        $cssContent .= ".application-content-title{color: red;padding: 5px 0px;text-transform: capitalize;font-size: 30px;font-weight: bold;}";
//        $cssContent .= ".application-content-body{padding: 15px 0px;font-size:15px;}";
//        $cssContent .= ".application-content-body-message{padding: 15px;border: 1px solid black;border-radius: 5px;text-align: justify;background-color: #d3d3d357;-webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);}";
//        $cssContent .= ".application-content-body-details-title{margin: 20px 0 10px 0;font-size: 20px;font-weight: bold;}";
//        $cssContent .= ".application-content-body-details{border: 0.5px solid #00000087;border-radius: 5px;text-align: justify;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);}";
//        $cssContent .= ".application-content-body-details-item{padding: 10px 15px;border-bottom: .5px solid lightgray;display: block;}";
//        $cssContent .= ".item-title{display: inline-block;width: 150px;font-size: 15px;font-weight: bold;}";
//        $cssContent .= ".item-details{display: inline-block;font-size: 14px;}";

        //Ui::element(Ui::getDocumentHeadElement(), 'style', ['text'=>$cssContent]);
        Ui::elementList(Ui::getDocumentHeadElement(), array('link'=> Storage::getAutomatedWebFavicons()));

        Ui::elementList(
            Ui::getDocumentHeadElement(),
            array(
                'link' => array(
                    array(
                        'rel'  => 'stylesheet',
                        'href' => Storage::toDataUri('css/app.css'),
                    ),
//                    array(
//                        'rel'  => 'stylesheet',
//                        'href' => Storage::toDataUri('css/font-face.css'),
//                    ),
//                    array(
//                        'rel'  => 'stylesheet',
//                        'href' => Storage::toDataUri('css/colors.css'),
//                    ),
                ),
                //'style' => array(array('text'=>$cssContent))
            )
        );
        //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{$layoutParams.logoFolder}favicon.ico">

        Ui::element(Ui::getDocumentRoot(), 'body', ['child'=>[
            'section'=> [
                ['class' => 'application','child'=>[
                    'article'=> [
                        ['class' => 'application-content','child'=>[
                            'div'=> [
                                ['class' => 'application-content-title-icon','text' => ucfirst($documentTitle) . ' - Mishusoft Firewall',],
                                ['class' => 'application-content-title','text' => ucfirst($documentTitle) . ' - Mishusoft Firewall',],
                                ['class' => 'application-content-body','child'=>[
                                    'div'=> [
                                        ['class' => 'application-content-body-message','text' => 'If you are the owner (or you manage this site), please whitelist you IP or if you think this block is an error please open a support ticket and make sure to include the block details (displayed in the box below), so we can assist you to troubleshooting the issue.',],
                                        ['class' => 'details-title','text' => 'Block details:',],
                                        ['class' => 'details','child'=>[
                                            'div'=> [
                                                ['class' => 'details-item','text' => 'Block details',],
                                                ['class' => 'details-item','text' => 'Block details:',],
                                                ['class' => 'details-item','text' => 'all info',],
                                            ]
                                        ]],
                                    ]
                                ]],
                                //['class' => 'application-content-footer','text' => 'application-footer',],
                            ]
                        ]]
                    ]
                ]]
            ]
        ]]);




        Ui::display();
    }

    private function getAutomatedVisitorDetails():array
    {
        $visitorDetails = array();

        // Client ip address capturing.
        $visitorDetails[] = array(
            'class'  => 'application-content-body-details-item',
            'child'=>[
                'div'=> [
                    ['class' => 'item-title','text' => 'Your IP :',],
                    ['class' => 'item-details','text' => IP::get(),],
                ]
            ],
        );

        // Current web url capturing.
        $visitorDetails[] = array(
            'class'  => 'application-content-body-details-item',
            'child'=>[
                'div'=> [
                    ['class' => 'item-title','text' => 'URL :',],
                    ['class' => 'item-details','text' => Browser::getVisitedPage(),],
                ]
            ],
        );

        // Capturing the user agent of browser.
        $visitorDetails[] = array(
            'class'  => 'application-content-body-details-item',
            'child'=>[
                'div'=> [
                    ['class' => 'item-title','text' => 'URL :',],
                    ['class' => 'item-details','text' => (new Browser())->getUserAgent(),],
                ]
            ],
        );

        // Capturing the full name of browser.
        $visitorDetails[] = array(
            'class'  => 'application-content-body-details-item',
            'child'=>[
                'div'=> [
                    ['class' => 'item-title','text' => 'URL :',],
                    ['class' => 'item-details','text' => (new Browser())->getUserAgent(),],
                ]
            ],
        );


        if (str_starts_with(pathinfo($imageFile, PATHINFO_FILENAME), 'apple-icon') === true) {
            //    <link rel="apple-touch-icon" sizes="57x57" href="{$layoutParams.logoFolder}apple-icon-57x57.png">
            //    /home/abir/Development/web-development/lastest.mishusoft.com/Storages/0/media/logos/apple-icon-152x152.png
            $faviconsList[] = array(
                'rel'  => 'apple-touch-icon',
                'type'  => _Array::value($fileDetails, 'mime'),
                'sizes'  => implode('x', array(_Array::value($fileDetails, 0),_Array::value($fileDetails, 1))),
                'href' => Storage::toDataUri('logos'. DIRECTORY_SEPARATOR.pathinfo($imageFile, PATHINFO_BASENAME)),
            );
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
