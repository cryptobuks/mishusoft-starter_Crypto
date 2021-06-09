<?php declare(strict_types=1);

/*
 * Browser (php language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/php/browser.php
 */

namespace Mishusoft\Framework\Chipsets\Http;


use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\DataObjects\BrowserDataObject;
use RuntimeException;

class Browser extends BrowserDataObject
{
    // Declare version.
    public const VERSION = '1.0.2';


    /**
     * Browser constructor.
     *
     * @throws JsonException|RuntimeException Throw exception when json process error occurred.
     * @throws ErrorException
     */
    public function __construct(
        private string $userAgentString='default'
    ) {
        parent::__construct();
        $this->timeOfToday   = date('Y-m-d H:i:s');
        $this->requestMethod = $_SERVER['REQUEST_METHOD'];

        if (array_key_exists('HTTP-SEC-FETCH-MODE', $_SERVER) === true) {
            $this->requestMode = $_SERVER['HTTP-SEC-FETCH-MODE'];
        } else {
            $this->requestMode = 'negative';
        }

        if (array_key_exists('REQUEST_SCHEME', $_SERVER) === true) {
            $this->urlProtocol = $_SERVER['REQUEST_SCHEME'];
        } else {
            $this->urlProtocol = 'http';
        }

        if (array_key_exists('HTTP_HOST', $_SERVER) === true) {
            if (in_array($_SERVER['HTTP_HOST'], $this->allowedDomains, true) === true) {
                $domain = $_SERVER['HTTP_HOST'];
            } else {
                $domain = 'localhost';
            }

            $this->urlHostname = $domain;
        } else {
            $this->urlHostname = 'unknown host';
        }

        $this->urlPath = $_SERVER['REQUEST_URI'];

        $this->loadBrowserData();

        if ($this->userAgentString !== 'default') {
            $this->userAgent = $this->userAgentString;
        } else if (function_exists('apache_request_headers') === true) {
            if (array_key_exists('User-Agent', apache_request_headers()) === true) {
                $this->userAgent = apache_request_headers()['User-Agent'];
                if (array_key_exists('Accept-Language', apache_request_headers()) === true) {
                    $this->acceptLanguage = apache_request_headers()['Accept-Language'];
                }

                if (array_key_exists('Accept-Encoding', apache_request_headers()) === true) {
                    $this->acceptEncoding = apache_request_headers()['Accept-Encoding'];
                }

                $this->storeUserAgentInFile();
                $this->analyze();
            }
        } else if (function_exists('getallheaders') === true) {
            if (array_key_exists('HTTP_USER_AGENT', getallheaders()) === true) {
                $this->userAgent = getallheaders()['HTTP_USER_AGENT'];
                if (array_key_exists('Accept-Language', getallheaders()) === true) {
                    $this->acceptLanguage = getallheaders()['Accept-Language'];
                }

                if (array_key_exists('Accept-Encoding', getallheaders()) === true) {
                    $this->acceptEncoding = getallheaders()['Accept-Encoding'];
                }

                $this->storeUserAgentInFile();
                $this->analyze();
            }
        } else if (array_key_exists('HTTP_USER_AGENT', $_SERVER) === true) {
            $this->userAgent = $_SERVER['HTTP_USER_AGENT'];

            if (array_key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER) === true) {
                $this->acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
            }

            if (array_key_exists('HTTP_ACCEPT_ENCODING', $_SERVER) === true) {
                $this->acceptEncoding = $_SERVER['HTTP_ACCEPT_ENCODING'];
            }

            $this->storeUserAgentInFile();
            $this->analyze();
        } else {
            throw new RuntimeException('Unable to extract browser data.');
        }//end if

    }//end __construct()


    /**
     * Load browser and devices all data from database.
     *
     * @return void
     * @throws JsonException|RuntimeException Throw exception when error occurred.
     */
    private function loadBrowserData(): void
    {
        // Devices list.
        if (file_exists(self::DEVICES_LIST_FILE) === true) {
            if (is_readable(self::DEVICES_LIST_FILE) === true) {
                if (($this->isUpdateDatabase($this->getDevicesList(), self::DEVICES_LIST_FILE) === true)) {
                    if (is_writable(self::DEVICES_LIST_FILE) === true) {
                        FileSystem::saveToFile(self::DEVICES_LIST_FILE, _JSON::encodeToString($this->getDevicesList()));
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_LIST_FILE);
                    }
                }

                $this->devicesList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::DEVICES_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::DEVICES_LIST_FILE, _JSON::encodeToString($this->getDevicesList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_LIST_FILE);
            }

            $this->devicesList = $this->getDevicesList();
        }//end if

        // Device's architecture list.
        if (file_exists(self::DEVICES_ARCHITECTURE_LIST_FILE) === true) {
            if (is_readable(self::DEVICES_ARCHITECTURE_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getDevicesArchitectureList(), self::DEVICES_ARCHITECTURE_LIST_FILE) === true) {
                    if (is_writable(self::DEVICES_ARCHITECTURE_LIST_FILE) === true) {
                        FileSystem::saveToFile(
                            self::DEVICES_ARCHITECTURE_LIST_FILE,
                            _JSON::encodeToString($this->getDevicesArchitectureList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_ARCHITECTURE_LIST_FILE);
                    }
                }

                $this->devicesArchitectureList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_ARCHITECTURE_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::DEVICES_ARCHITECTURE_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_ARCHITECTURE_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::DEVICES_ARCHITECTURE_LIST_FILE,
                    _JSON::encodeToString($this->getDevicesArchitectureList())
                );
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_ARCHITECTURE_LIST_FILE);
            }

            $this->devicesArchitectureList = $this->getDevicesArchitectureList();
        }//end if

        // Devices category list.
        if (file_exists(self::DEVICES_CATEGORY_LIST_FILE) === true) {
            if (is_readable(self::DEVICES_CATEGORY_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getDevicesCategoryList(), self::DEVICES_CATEGORY_LIST_FILE) === true) {
                    if (is_writable(self::DEVICES_CATEGORY_LIST_FILE) === true) {
                        FileSystem::saveToFile(
                            self::DEVICES_CATEGORY_LIST_FILE,
                            _JSON::encodeToString($this->getDevicesCategoryList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_CATEGORY_LIST_FILE);
                    }
                }

                $this->devicesCategoryList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_CATEGORY_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::DEVICES_CATEGORY_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_CATEGORY_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::DEVICES_CATEGORY_LIST_FILE, _JSON::encodeToString($this->getDevicesCategoryList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
            }

            $this->devicesCategoryList = $this->getDevicesCategoryList();
        }//end if

        // Platform window manager list.
        if (file_exists(self::DEVICES_PLATFORM_WMNAME_LIST_FILE) === true) {
            if (is_readable(self::DEVICES_PLATFORM_WMNAME_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getPlatformWmList(), self::DEVICES_PLATFORM_WMNAME_LIST_FILE) === true) {
                    if (is_writable(self::DEVICES_PLATFORM_WMNAME_LIST_FILE)) {
                        FileSystem::saveToFile(
                            self::DEVICES_PLATFORM_WMNAME_LIST_FILE,
                            _JSON::encodeToString($this->getPlatformWmList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WMNAME_LIST_FILE);
                    }
                }

                $this->devicesPlatformWMNameList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_PLATFORM_WMNAME_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::DEVICES_PLATFORM_WMNAME_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_PLATFORM_WMNAME_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::DEVICES_PLATFORM_WMNAME_LIST_FILE, _JSON::encodeToString($this->getPlatformWmList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
            }

            $this->devicesPlatformWMNameList = $this->getPlatformWmList();
        }//end if

        // Browsers list.
        if (file_exists(self::WEB_BROWSER_LIST_FILE) === true) {
            if (is_readable(self::WEB_BROWSER_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getWebBrowsersList(), self::WEB_BROWSER_LIST_FILE) === true) {
                    if (is_writable(self::WEB_BROWSER_LIST_FILE) === true) {
                        FileSystem::saveToFile(self::WEB_BROWSER_LIST_FILE, _JSON::encodeToString($this->getWebBrowsersList()));
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WMNAME_LIST_FILE);
                    }
                }

                $this->webBrowserList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::WEB_BROWSER_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::WEB_BROWSER_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::WEB_BROWSER_LIST_FILE, _JSON::encodeToString($this->getWebBrowsersList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
            }

            $this->webBrowserList = $this->getWebBrowsersList();
        }//end if

        // Browsers app code list.
        if (file_exists(self::WEB_BROWSER_APP_CODE_LIST_FILE) === true) {
            if (is_readable(self::WEB_BROWSER_APP_CODE_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getWebBrowserAppCodeList(), self::WEB_BROWSER_APP_CODE_LIST_FILE) === true) {
                    if (is_writable(self::WEB_BROWSER_APP_CODE_LIST_FILE) === true) {
                        FileSystem::saveToFile(
                            self::WEB_BROWSER_APP_CODE_LIST_FILE,
                            _JSON::encodeToString($this->getWebBrowserAppCodeList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WMNAME_LIST_FILE);
                    }
                }

                $this->webBrowserAppCodeNameList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_APP_CODE_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::WEB_BROWSER_APP_CODE_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::WEB_BROWSER_APP_CODE_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::WEB_BROWSER_APP_CODE_LIST_FILE,
                    _JSON::encodeToString($this->getWebBrowserAppCodeList())
                );
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
            }

            $this->webBrowserAppCodeNameList = $this->getWebBrowserAppCodeList();
        }//end if

        // Browsers layout list.
        if (file_exists(self::WEB_BROWSER_LAYOUT_LIST_FILE) === true) {
            if (is_readable(self::WEB_BROWSER_LAYOUT_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getWebBrowsersLayoutList(), self::WEB_BROWSER_LAYOUT_LIST_FILE) === true) {
                    if (is_writable(self::WEB_BROWSER_LAYOUT_LIST_FILE) === true) {
                        FileSystem::saveToFile(
                            self::WEB_BROWSER_LAYOUT_LIST_FILE,
                            _JSON::encodeToString($this->getWebBrowsersLayoutList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WMNAME_LIST_FILE);
                    }
                }

                $this->webBrowserLayoutList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_LAYOUT_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::WEB_BROWSER_APP_CODE_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::WEB_BROWSER_LAYOUT_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::WEB_BROWSER_LAYOUT_LIST_FILE, _JSON::encodeToString($this->getWebBrowsersLayoutList()));
            }

            $this->webBrowserLayoutList = $this->getWebBrowsersLayoutList();
        }//end if

    }//end loadBrowserData()


    /**
     * Check database are updated.
     *
     * @param array  $database Loaded database.
     * @param string $filename Database file name.
     *
     * @return boolean
     * @throws JsonException Throw exception when json process error occurred.
     */
    private function isUpdateDatabase(array $database, string $filename): bool
    {
        return ((is_readable($filename) === true)
                && (FileSystem::read($filename) !== '')
                && (count(array_keys($database)) > count(array_keys(_JSON::decodeToArray(FileSystem::read($filename))))))
            || (strlen(_JSON::encodeToString($database)) > strlen(FileSystem::read($filename)));

    }//end isUpdateDatabase()


    /**
     * Store user agent into a file
     *
     * @return void
     */
    private function storeUserAgentInFile(): void
    {
        // User agent list.
        if ((file_exists(self::USER_AGENT_LIST_FILE) === true)
            && is_writable(self::USER_AGENT_LIST_FILE) === true
        ) {
            FileSystem::append(
                self::USER_AGENT_LIST_FILE,
                sprintf('"%s","%s","%s"', $this->timeOfToday, IP::get(), $this->userAgent).PHP_EOL
            );
        }

        if ((file_exists(self::USER_AGENT_LIST_FILE) === false)
            && is_writable(dirname(self::USER_AGENT_LIST_FILE)) === true
        ) {
            FileSystem::append(self::USER_AGENT_LIST_FILE, '"Date", "Client", "User-Agent"'.PHP_EOL);
            FileSystem::append(
                self::USER_AGENT_LIST_FILE,
                sprintf('"%s","%s","%s"', $this->timeOfToday, IP::get(), $this->userAgent).PHP_EOL
            );
        }

    }//end storeUserAgentInFile()


    /**
     * Analyze user agent for operation.
     *
     * @return void
     * @throws ErrorException
     */
    private function analyze(): void
    {
        /*
         * Simple regex

            Regex quick reference
            [abc]     A single character: a, b or c
            [^abc]     Any single character but a, b, or c
            [a-z]     Any single character in the range a-z
            [a-zA-Z]     Any single character in the range a-z or A-Z
            ^     Start of line
            $     End of line
            \A     Start of string
            \z     End of string
            .     Any single character
            \s     Any whitespace character
            \S     Any non-whitespace character
            \d     Any digit
            \D     Any non-digit
            \w     Any word character (letter, number, underscore)
            \W     Any non-word character
            \b     Any word boundary character
            (...)     Capture everything enclosed
            (a|b)     a or b
            a?     Zero or one of a
            a*     Zero or more of a
            a+     One or more of a
            a{3}     Exactly 3 of a
            a{3,}     3 or more of a
            a{3,6}     Between 3 and 6 of a

            options: i case insensitive m make dot match newlines x ignore whitespace in regex o perform #{...}
            substitutions only once.
         */

        // Start analyze operation.
        // Default user agent :: $this->userAgent.
        // Ubuntu :: Mozilla/5.0 X11; U; Linux i686; en-GB; rv:1.9.2.17 Gecko/20111028 Ubuntu/8.04 hardy Firefox/3.6.17
        // Ubuntu :: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; ; hostname:ivc2-4; rv:88.0) Gecko/20100101 Firefox/88.0
        // Ubuntu :: Mozilla/5.0 (X11; U; Linux i686; fr; rv:1.9) Gecko/20101206 Ubuntu/10.10 (maverick) Firefox/3.6.13
        // MacOS :: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0.1) Gecko/20100101 Firefox/77.0.1
        // NetBSD :: Mozilla/5.0 (X11; U; NetBSD alpha; en-US; rv:1.8.1.6) Gecko/20080115 Firefox/2.0.0.6
        // BeOS :: Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.8.1b2) Gecko/20060901 Firefox/2.0b2
        // FreeBSD :: Mozilla/5.0 (X11; FreeBSD amd64; rv:88.0) Gecko/20100101 Firefox/88.0
        //$cleanUA = $this->cleanUserAgentString($this->userAgent);
        // $cleanUA = 'Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.9.2.17) Gecko/20111028 Ubuntu/8.04 (hardy) Firefox/3.6.17';
        // $cleanUA = 'Mozilla/5.0 X11; U; Linux i686; en-GB; rv:1.9.2.17 Gecko/20111028 Ubuntu/8.04 hardy Firefox/3.6.17';
        // Mozilla/5.0 (Android 8.0.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0 //passed
        // Mozilla/5.0 (Android 8.0; Mobile; rv:86.1) Gecko/86.1 Firefox/86.1 //passed
        // Mozilla/5.0 (Android; Mobile; rv:34.0) Gecko/34.0 Firefox/34.0 //passed
        // Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.8.1b2) Gecko/20060901 Firefox/2.0b2 //passed
        // Mozilla/5.0 (X11; U; Darwin i386; en-US; rv:1.9.0.8) Gecko/2009040414 GranParadiso/3.0.8
        // Mozilla/5.0 (X11; U; Darwin 10.0.0 x64-86; en-US; rv:1.9.0.8) Gecko/2009040414 GranParadiso/3.0.8
        $cleanUA = 'Mozilla/5.0 (X11; U; Darwin 10.0.0; en-US; rv:1.9.0.8) Gecko/2009040414 GranParadiso/3.0.8';

        _Debug::preOutput($cleanUA);

        // We will check if the browser is included in our database and if not, save it in an unsolved file.
        foreach ($this->getWebBrowsersList() as $webBrowser) {
            if (is_array($webBrowser) === true) {
                if (array_key_exists('keyword', $webBrowser) === true) {
                    $keyword = $webBrowser['keyword'];
                } else if (array_key_exists('name', $webBrowser) === true) {
                    $keyword = $webBrowser['name'];
                } else {
                    $keyword = (string) $webBrowser;
                }
            } else {
                $keyword = $webBrowser;
            }

            // Check browser in database list.
            if (preg_match('/('.$this->quote(strtolower($keyword)).')/i', $cleanUA, $matches) === 1) {
                _Debug::preOutput($keyword);
                _Debug::preOutput($matches);

                // First step.
                // Search app code name of web browser from user agent.
                foreach ($this->webBrowserAppCodeNameList as $key => $value) {
                    if (preg_match('/('.$this->quote(strtolower($key)).')\/(\d+[.]\d+)/i', $cleanUA, $matches) === 1) {
                        $this->browserAppCodeName    = $value;
                        $this->browserAppCodeVersion = $matches[1];
                        _Debug::preOutput($matches);
                        break;
                    }
                }//end foreach

                // Second step.
                // Search window manager name and type from user agent.
                foreach ($this->devicesPlatformWMNameList as $key => $value) {
                    if (preg_match('/'.$this->quote(strtolower($key)).'\b/i', $cleanUA, $matches) === 1) {
                        $this->deviceWindowManager  = $key;
                        $this->deviceWmNameOriginal = ucfirst($key);
                        $this->windowManager($value);

                        _Debug::preOutput($matches);
                        break;
                    }
                }

                // Third step.
                // Search device category from user agent.
                foreach ($this->devicesCategoryList as $key => $value) {
                    if (preg_match('/'.$this->quote(strtolower($key)).'\b/i', $cleanUA, $matches) === 1) {
                        $this->deviceWindowManager = $value;
                        _Debug::preOutput($matches);
                        break;
                    }
                }

                // Fourth step.
                // Search device and details in () from user agent.
                // Device name type
                // Ubuntu/8.04 hardy
                // Ubuntu/8.04
                // Ubuntu 8.04
                // Ubuntu x64_86
                // Ubuntu
                // U
                // $devices = $this->devicesList;
                $devices = [
                    'android' => ['name' => 'Android'],
                    'ubuntu'  => ['name' => 'Ubuntu'],
                    'BeOS'    => ['name' => 'Ubuntu Based'],
                    'Darwin'  => ['name' => 'Mac OS'],
                ];
                foreach ($devices as $key => $value) {
                    if (preg_match($this->getRegexp($key), $cleanUA, $matches) === 1) {
                        _Debug::preOutput($key);
                        _Debug::preOutput($value);
                        _Debug::preOutput($this->filter($matches));
                        $this->deviceName     = $key;
                        $this->deviceNameFull = $this->filter($matches)[0];
                        // $this->deviceNameFull = $this->finalContent($key, $cleanUA);
                        // $this->deviceInfoAll  = (array) $value;
                        // $this->deviceDetails((array) $value);
                        exit();

                        // $deviceInfo = explode(';', $this->deviceInfo($cleanUA));
                        // foreach ($deviceInfo as $info) {
                        // if (preg_match('/'.strtolower($key).'\b/i', $info, $matches) === 1) {
                        // $this->deviceNameOriginal = ltrim($info);
                        // break;
                        // }
                        // }
                        // _Debug::preOutput($this->deviceNameOriginal);
                        break;
                    }//end if
                }//end foreach

                break;
            }//end if
        }//end foreach

    }//end analyze()


    /**
     * Quote any string
     *
     * @param string $string String for quote.
     *
     * @return string
     */
    protected function quote(string $string): string
    {
        return preg_quote($string, PREG_QUOTE_DEFAULT_SEPARATOR);

    }//end quote()


    /**
     * Create Regular expression string for keyword.
     *
     * @param string $keyword Keyword string.
     *
     * @return string
     * @throws ErrorException Throw exception on error.
     */
    protected function getRegexp(string $keyword): string
    {
        $lowerKeyword  = strtolower($keyword);
        $quotedKeyword = $this->quote($lowerKeyword);

        // $architectures       = array_keys($this->getDevicesArchitectureList());
        // $architectures       = implode('|', $architectures);
        // $quotedArchitectures = $this->quote($architectures);
        return match ($lowerKeyword) {
            // Mozilla/5.0 (Android 8.0.0; Mobile; rv:57.0) Gecko/57.0 Firefox/57.0
            // Mozilla/5.0 (Android 8.0; Mobile; rv:86.1) Gecko/86.1 Firefox/86.1
            // Mozilla/5.0 (Android; Mobile; rv:34.0) Gecko/34.0 Firefox/34.0
            // /(android)\s+\d+[.]\d+[.]\d+|(android)\s+\d+[.]\d+|(android)\s+\d+|(android)/im
            'android' => '/('.$quotedKeyword.')\s+(\d+[.]\d+[.]\d+)|('.$quotedKeyword.')\s+(\d+[.]\d+)|('.$quotedKeyword.')\s+(\d+)|('.$quotedKeyword.')/im',
            'beos' => '/('.$quotedKeyword.')/im',
            // Radio/116 CFNetwork/978.0.7 Darwin/18.7.0 (x86_64)
            // Radio/116 CFNetwork/978.0.7 Darwin/18.7.0
            // Mozilla/5.0 (X11; U; Darwin 10.0.0 x64; en-US; rv:1.9.0.8) Gecko/2009040414 GranParadiso/3.0.8
            'darwin' => '/('.$quotedKeyword.')\s+(\d+[.]\d+[.]\d+)/i',
            'ubuntu' => '/('.$this->quote(strtolower($keyword)).')\/(\d+[.]\d+)/im',
            default => throw new ErrorException('Unexpected value : '.$keyword)
        };

    }//end getRegexp()


    /**
     * Filter array.
     *
     * @param array $array Array data.
     *
     * @return array
     */
    protected function filter(array $array): array
    {
        return array_values(array_filter($array));

    }//end filter()


    /**
     * Make user agent string lowercase, and replace browser aliases.
     *
     * @param string $string The dirty user agent string.
     *
     * @return string Returns the clean user agent string.
     */
    protected function cleanUserAgentString(string $string): string
    {
        // _Debug::preOutput(func_get_args());
        // Clean up the string.
        $string = strtolower(trim($string));

        // Replace browser names with their aliases.
        return strtr($string, $this->getKnownBrowserAliases());

    }//end cleanUserAgentString()


    /**
     * Gets known browser aliases.
     *
     * @return array
     */
    protected function getKnownBrowserAliases(): array
    {
        return [
            'opr'       => 'opera',
            'iceweasel' => 'firefox',
        ];

    }//end getKnownBrowserAliases()


    /**
     * Retrieve device window manager.
     *
     * @param array|string $array $array Devices information.
     *
     * @return void
     */
    private function windowManager(array|string $array): void
    {
        if (is_array($array) === true && count($array) > 0) {
            if (array_key_exists('name', $array) === true) {
                $this->deviceType = $array['name'];
            }

            if (array_key_exists('type', $array) === true) {
                $this->deviceWindowManager = $array['type'];
            }
        } else {
            $this->deviceType = (string) $array;
        }

    }//end windowManager()


    /**
     * Final content
     *
     * @param string $key     Data key.
     * @param string $content Data content.
     *
     * @return string Retrieved final content.
     */
    private function finalContent(string $key, string $content): string
    {
        // _Debug::preOutput('From final content func');
        // _Debug::preOutput(func_get_args());
        $finalOutput   = '';
        $keyPosition   = stripos($content, $key);
        $contentLength = strlen($content);
        $foundText     = substr($content, $keyPosition, ($contentLength - $keyPosition));
        $totalWords    = str_word_count($foundText);
        // _Debug::preOutput($foundText);
        // _Debug::preOutput($totalWords);
        if ($totalWords > 1) {
            $wordsArray = explode(' ', $foundText);
            // $architectures = array_keys($this->getDevicesArchitectureList());
            // $architectures = implode('|', $architectures);
            // _Debug::preOutput($architectures);
            $quotedKey = preg_quote(strtolower($key), PREG_QUOTE_DEFAULT_SEPARATOR);
            // $quotedDevicePlatform = preg_quote(strtolower($architectures), PREG_QUOTE_DEFAULT_SEPARATOR);
            // preg_match('/\b'.$quotedKey.'\b/i', $foundText, $matches);
            // _Debug::preOutput($matches);
            // preg_match('/\b'.$quotedKey.'\b\s+\b['.$quotedDevicePlatform.']\b/i', $foundText, $matches);
            // _Debug::preOutput($matches);
            foreach ($wordsArray as $value) {
                if (preg_match('/\b'.$quotedKey.'\b/i', $value, $matches) === 1) {
                    // _Debug::preOutput($matches);
                    $finalOutput = $value;
                    break;
                }
            }
        } else {
            $finalOutput = $foundText;
        }//end if

        return $this->cleanContent($finalOutput);

    }//end finalContent()


    /**
     * Clean content.
     *
     * @param string $content Unclean content.
     *
     * @return string content.
     */
    private function cleanContent(string $content): string
    {
        return ltrim(ucwords(preg_replace('#[/]|[;]|[)]#', ' ', $content)));

    }//end cleanContent()


    /**
     * Retrieve device details information
     *
     * @param string|array $resources Information.
     *
     * @return void
     */
    private function deviceDetails(string|array $resources): void
    {
        // _Debug::preOutput('From device details func');
        // _Debug::preOutput(func_get_args());
        if (is_array($resources) === true && count($resources) > 0) {
            if (array_key_exists('Platform', $resources) === true) {
                $this->currentDeviceInfo  = $resources['Platform'];
                $this->deviceName         = $resources['Platform']['name'];
                $this->deviceArchitecture = $resources['Platform']['architecture'];
                $this->deviceType         = $resources['Device']['type'];
            }

            if (is_string($resources) === true) {
                $this->deviceName        = $resources;
                $this->deviceType        = $resources;
                $this->currentDeviceInfo = (array) $resources;
            }
        }

    }//end deviceDetails()


    /**
     * Retrieve device information.
     *
     * @param string $ua User agent of browser.
     *
     * @return string Device information.
     */
    private function deviceInfo(string $ua): string
    {
        preg_match('/\(([^\)]*)\)/', $ua, $matches);
        return $matches[1];

    }//end deviceInfo()


    /**
     * Visited page title.
     *
     * @public
     * @return mixed|string
     */
    public static function visitedPageTitle(): string
    {
        // SET DEFAULT
        $title = 'No title found';
        // Web url
        $url = self::getVisitedPage();
        // OPEN THE REMOTE PAGE
        $file = fopen($url, 'rb') or trigger_error('url not found');
        // ITERATE OVER THE PAGE DATA
        while (!feof($file)) {
            $text = fread($file, 16384);
            if (preg_match('/<title>(.*?)<\/title>/is', $text, $found) === 1) {
                if (array_key_exists(1, $found) === true) {
                    $title = $found[1];
                } else {
                    $title = 'Not found';
                }

                break;
            }
        }

        return ltrim($title);

    }//end visitedPageTitle()


    /**
     * Retrieve visited page.
     *
     * @public
     * @return string
     */
    public static function getVisitedPage(): string
    {
        return self::VisitedPageURL($_SERVER);

    }//end getVisitedPage()


    /**
     * Retrieve visited page url.
     *
     * @param array   $s                Server information.
     * @param boolean $useForwardedHost Forwared host using permission
     *
     * @return string Page url.
     */
    public static function visitedPageURL(array $s, bool $useForwardedHost=false): string
    {
        return self::urlOrigin($s, $useForwardedHost).$s['REQUEST_URI'];

    }//end visitedPageURL()


    /**
     * @param  array   $s
     * @param  boolean $useForwardedHost
     * @return string
     */
    public static function urlOrigin(array $s, bool $useForwardedHost=false): string
    {
        $ssl      = (empty($s['HTTPS']) === false && $s['HTTPS'] === 'on');
        $sp       = strtolower($s['SERVER_PROTOCOL']);
        $protocol = substr($sp, 0, strpos($sp, '/')).(($ssl) ? 's' : '');
        $port     = $s['SERVER_PORT'];
        $port     = ((!$ssl && $port == '80') || ($ssl && $port == '443')) ? '' : ':'.$port;
        $host     = ($useForwardedHost && isset($s['HTTP_X_FORWARDED_HOST'])) ? $s['HTTP_X_FORWARDED_HOST'] : ($s['HTTP_HOST'] ?? null);
        $host     = ($host ?? $s['SERVER_NAME']).$port;
        return $protocol.'://'.$host;

    }//end urlOrigin()


    /**
     * @public
     * @param  string $name
     * @return array
     */
    public function getBrowserDetails(string $name): array
    {
        if (is_string($name) === true) {
            if (array_key_exists(
                strtolower($name),
                array_change_key_case($this->webBrowserList, CASE_LOWER)
            ) === true
            ) {
                foreach ($this->webBrowserList as $item => $details) {
                    if (strtolower($item) === strtolower($name)) {
                        return is_array($details) ? $details : (array) $details;
                    }
                }
            } else {
                return [
                    'name'   => $name,
                    'status' => 'Unknown',
                ];
            }
        } else {
            throw new RuntimeException('Invalid browser name used');
        }

        return [];

    }//end getBrowserDetails()


    /**
     * @public
     * @return string
     */
    public function getBrowserEngineName(): string
    {
        return ltrim($this->browserEngineName);

    }//end getBrowserEngineName()


    /**
     * @public
     * @return string
     */
    public function getBrowserEngineNameFull(): string
    {
        return ltrim($this->browserEngineNameFull);

    }//end getBrowserEngineNameFull()


    /**
     * @public
     * @return array
     */
    public function getBrowserInfoAll(): array
    {
        return $this->browserInfoAll;

    }//end getBrowserInfoAll()


    /**
     * @public
     * @return string
     */
    public function getBrowserAppCodeName(): string
    {
        return ltrim($this->browserAppCodeName);

    }//end getBrowserAppCodeName()


    /**
     * @public
     * @return string
     */
    public function getBrowserAppCodeVersion(): string
    {
        return ltrim($this->browserAppCodeVersion);

    }//end getBrowserAppCodeVersion()


    /**
     * @public
     * @return string
     */
    public function getBrowserAppName(): string
    {
        return ltrim($this->browserAppName);

    }//end getBrowserAppName()


    /**
     * @public
     * @return string
     */
    public function getBrowserAppVersion(): string
    {
        return ltrim($this->browserAppVersion);

    }//end getBrowserAppVersion()


    /**
     * @public
     * @return string
     */
    public function getBrowserArchitecture(): string
    {
        return ltrim($this->browserArchitecture);

    }//end getBrowserArchitecture()


    /**
     * @public
     * @return string
     */
    public function getBrowserEngineVersion(): string
    {
        return ltrim($this->browserEngineVersion);

    }//end getBrowserEngineVersion()


    /**
     * @public
     * @return string
     */
    public function getBrowserName(): string
    {
        return ltrim($this->browserName);

    }//end getBrowserName()


    /**
     * @public
     * @return string
     */
    public function getBrowserNameFull(): string
    {
        return ltrim($this->browserNameFull);

    }//end getBrowserNameFull()


    /**
     * @public
     * @return string
     */
    public function getBrowserVersion(): string
    {
        return ltrim($this->browserVersion);

    }//end getBrowserVersion()


    /**
     * @public
     * @return string
     */
    public function getBrowserVersionFull(): string
    {
        return ltrim($this->browserVersionFull);

    }//end getBrowserVersionFull()


    /**
     * @public
     * @return mixed
     */
    public function getCurrentDeviceInfo()
    {
        return $this->currentDeviceInfo;

    }//end getCurrentDeviceInfo()


    /**
     * @public
     * @return string
     */
    public function getDeviceName(): string
    {
        return ltrim($this->deviceName);

    }//end getDeviceName()


    /**
     * @public
     * @return string
     */
    public function getDeviceNameFull(): string
    {
        return ltrim($this->deviceNameFull);

    }//end getDeviceNameFull()


    /**
     * @public
     * @return string
     */
    public function getDeviceNameOriginal(): string
    {
        return ltrim($this->deviceNameOriginal);

    }//end getDeviceNameOriginal()


    /**
     * @public
     * @return string
     */
    public function getDeviceType(): string
    {
        return ltrim($this->deviceType);

    }//end getDeviceType()


    /**
     * @public
     * @return string
     */
    public function getDeviceArchitecture(): string
    {
        return ltrim($this->deviceArchitecture);

    }//end getDeviceArchitecture()


    /**
     * @public
     * @return string
     */
    public function getDeviceWindowManager(): string
    {
        return ltrim($this->deviceWindowManager);

    }//end getDeviceWindowManager()


    /**
     * @public
     * @return string
     */
    public function getDeviceWmNameOriginal(): string
    {
        return $this->deviceWmNameOriginal;

    }//end getDeviceWmNameOriginal()


    /**
     * @public
     * @return array
     */
    public function getDeviceInfoAll(): array
    {
        return $this->deviceInfoAll;

    }//end getDeviceInfoAll()


    /**
     * @public
     * @return string
     */
    public function getUserAgent(): string
    {
        return $this->userAgent;

    }//end getUserAgent()


    /**
     * @public
     * @return array
     */
    public function getUserAgentList(): array
    {
        return $this->userAgentList;

    }//end getUserAgentList()


    /**
     * @public
     * @return mixed
     */
    public function getURLProtocol(): string
    {
        return $this->urlProtocol;

    }//end getURLProtocol()


    /**
     * @public
     * @return mixed
     */
    public function getURLHostname(): string
    {
        return $this->urlHostname;

    }//end getURLHostname()


    /**
     * @public
     * @return mixed
     */
    public function getURLPath(): string
    {
        return $this->urlPath;

    }//end getURLPath()


    /**
     * @public
     * @return string
     */
    public function getRequestMethod(): string
    {
        return $this->requestMethod;

    }//end getRequestMethod()


    /**
     * @return string
     */
    public function getRequestMode(): string
    {
        return $this->requestMode;

    }//end getRequestMode()


    public function __destruct()
    {

    }//end __destruct()


    /**
     * @return mixed|string
     */
    public function getAcceptLanguage(): mixed
    {
        return $this->acceptLanguage;

    }//end getAcceptLanguage()


    /**
     * @return mixed|string
     */
    public function getAcceptEncoding(): mixed
    {
        return $this->acceptEncoding;

    }//end getAcceptEncoding()


}//end class
