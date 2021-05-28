<?php declare(strict_types=1);

/*
 * Browser (php language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/php/browser.php
 * */

namespace Mishusoft\Framework\Chipsets\Http;


use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\Browser\DataObject;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use RuntimeException;

class Browser extends DataObject
{
    // Declare version.
    public const VERSION = '1.0.2';

    // Variables.
    private string $requestMethod;

    private string $requestMode;

    private string $userAgent = 'Unknown';

    private string $acceptLanguage = 'Unknown';

    private string $acceptEncoding = 'Unknown';

    private string $browserName = 'Unknown';

    private string $browserNameFull = 'Unknown';

    private string $browserVersion = 'Unknown';

    private string $browserVersionFull = 'Unknown';

    private string $browserArchitecture = 'Unknown';

    private string $browserAppName = 'Unknown';

    private string $browserAppVersion = 'Unknown';

    private string $browserAppCodeName = 'Unknown';

    private string $browserAppCodeVersion = 'Unknown';

    private string $browserEngineName = 'Unknown';

    private string $browserEngineNameFull = 'Unknown';

    private string $browserEngineVersion = 'Unknown';

    private array $browserInfoAll = [];

    private string $deviceName = 'Unknown';

    private string $deviceType = 'Unknown';

    private string $deviceArchitecture = 'Unknown';

    private string $deviceWindowManager = 'Unknown';

    private array $deviceInfoAll;

    private string $deviceNameFull;

    private string $deviceNameOriginal = 'Unknown';

    private string $deviceWmNameOriginal = 'Unknown';

    /**
     * @var mixed
     */
    private mixed $currentDeviceInfo;

    private string $urlProtocol;

    private string $urlHostname;

    private string $urlPath;

    // runtime storage
    private array $userAgentList = [];

    private array $devicesList;

    private array $devicesArchitectureList;

    private array $devicesPlatformWMNameList;

    private array $devicesCategoryList;

    private array $webBrowserList;

    private array $webBrowserAppCodeNameList;

    private array $webBrowserLayoutList;

    private string $timeOfToday;


    /**
     * Browser constructor.
     *
     * @throws \JsonException
     */
    public function __construct()
    {
        $this->timeOfToday   = date('Y-m-d H:i:s');
        $this->requestMethod = $_SERVER['REQUEST_METHOD'];
        $this->requestMode   = array_key_exists('HTTP-SEC-FETCH-MODE', $_SERVER) ? $_SERVER['HTTP-SEC-FETCH-MODE'] : 'negative';
        $this->urlProtocol   = array_key_exists('REQUEST_SCHEME', $_SERVER) ? $_SERVER['REQUEST_SCHEME'] : 'http';
        $this->urlHostname   = array_key_exists('HTTP_HOST', $_SERVER) ? $_SERVER['HTTP_HOST'] : 'unknown host';
        $this->urlPath       = $_SERVER['REQUEST_URI'];

        $this->loadBrowserData();

        if (function_exists('apache_request_headers') === true) {
            if (array_key_exists('User-Agent', apache_request_headers()) === true) {
                $this->userAgent      = array_key_exists('User-Agent', apache_request_headers()) ? apache_request_headers()['User-Agent'] : $this->UserAgent;
                $this->acceptLanguage = array_key_exists('Accept-Language', apache_request_headers()) ? apache_request_headers()['Accept-Language'] : $this->AcceptLanguage;
                $this->acceptEncoding = array_key_exists('Accept-Encoding', apache_request_headers()) ? apache_request_headers()['Accept-Encoding'] : $this->AcceptEncoding;
                $this->storeUserAgentInFile();
                $this->analyze();
            }
        } else if (function_exists('getallheaders') === true) {
            if (array_key_exists('User-Agent', getallheaders()) === true) {
                $this->userAgent      = array_key_exists('HTTP_USER_AGENT', getallheaders()) ? getallheaders()['HTTP_USER_AGENT'] : $this->UserAgent;
                $this->acceptLanguage = array_key_exists('Accept-Language', getallheaders()) ? getallheaders()['Accept-Language'] : $this->AcceptLanguage;
                $this->acceptEncoding = array_key_exists('Accept-Encoding', getallheaders()) ? getallheaders()['Accept-Encoding'] : $this->AcceptEncoding;
                $this->storeUserAgentInFile();
                $this->analyze();
            }
        } else {
            if (array_key_exists('HTTP_USER_AGENT', $_SERVER) === true) {
                $this->userAgent      = array_key_exists('HTTP_USER_AGENT', $_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : $this->UserAgent;
                $this->acceptLanguage = array_key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : $this->AcceptLanguage;
                $this->acceptEncoding = array_key_exists('HTTP_ACCEPT_ENCODING', $_SERVER) ? $_SERVER['HTTP_ACCEPT_ENCODING'] : $this->AcceptEncoding;
                $this->storeUserAgentInFile();
                $this->analyze();
            }
        }//end if

    }//end __construct()


    /**
     * @throws \JsonException
     */
    private function loadBrowserData(): void
    {
        // Devices list.
        if (file_exists(self::devicesListFile) === true) {
            if (is_readable(self::devicesListFile) === true) {
                if (($this->IsUpdateDatabase($this->getDevicesList(), self::devicesListFile) === true)) {
                    if (is_writable(self::devicesListFile) === true) {
                        FileSystem::saveToFile(self::devicesListFile, _JSON::encodeToString($this->getDevicesList()));
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesListFile);
                    }
                }

                $this->devicesList = _JSON::decodeToArray(FileSystem::read(self::devicesListFile));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::devicesListFile);
            }
        } else {
            if (is_resource(fopen(self::devicesListFile, 'wb+')) === true) {
                FileSystem::saveToFile(self::devicesListFile, _JSON::encodeToString($this->getDevicesList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::devicesListFile);
            }

            $this->devicesList = $this->getDevicesList();
        }//end if

        // Device's architecture list.
        if (file_exists(self::devicesArchitectureListFile) === true) {
            if (is_readable(self::devicesArchitectureListFile) === true) {
                if ($this->IsUpdateDatabase($this->getDevicesArchitectureList(), self::devicesArchitectureListFile) === true) {
                    if (is_writable(self::devicesArchitectureListFile) === true) {
                        FileSystem::saveToFile(
                            self::devicesArchitectureListFile,
                            _JSON::encodeToString($this->getDevicesArchitectureList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesArchitectureListFile);
                    }
                }

                $this->devicesArchitectureList = _JSON::decodeToArray(FileSystem::read(self::devicesArchitectureListFile));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::devicesArchitectureListFile);
            }
        } else {
            if (is_resource(fopen(self::devicesArchitectureListFile, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::devicesArchitectureListFile,
                    _JSON::encodeToString($this->getDevicesArchitectureList())
                );
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::devicesArchitectureListFile);
            }

            $this->devicesArchitectureList = $this->getDevicesArchitectureList();
        }//end if

        // Devices category list.
        if (file_exists(self::devicesCategoryListFile) === true) {
            if (is_readable(self::devicesCategoryListFile) === true) {
                if ($this->IsUpdateDatabase($this->getDevicesCategoryList(), self::devicesCategoryListFile) === true) {
                    if (is_writable(self::devicesCategoryListFile) === true) {
                        FileSystem::saveToFile(
                            self::devicesCategoryListFile,
                            _JSON::encodeToString($this->getDevicesCategoryList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesCategoryListFile);
                    }
                }

                $this->devicesCategoryList = _JSON::decodeToArray(FileSystem::read(self::devicesCategoryListFile));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::devicesCategoryListFile);
            }
        } else {
            if (is_resource(fopen(self::devicesCategoryListFile, 'wb+')) === true) {
                FileSystem::saveToFile(self::devicesCategoryListFile, _JSON::encodeToString($this->getDevicesCategoryList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::devicesCategoryListFile);
            }

            $this->devicesCategoryList = $this->getDevicesCategoryList();
        }//end if

        // Platform window manager list.
        if (file_exists(self::devicesPlatformWMNameListFile) === true) {
            if (is_readable(self::devicesPlatformWMNameListFile) === true) {
                if ($this->IsUpdateDatabase($this->getPlatformWmList(), self::devicesPlatformWMNameListFile) === true) {
                    if (is_writable(self::devicesPlatformWMNameListFile)) {
                        FileSystem::saveToFile(
                            self::devicesPlatformWMNameListFile,
                            _JSON::encodeToString($this->getPlatformWmList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesPlatformWMNameListFile);
                    }
                }

                $this->devicesPlatformWMNameList = _JSON::decodeToArray(FileSystem::read(self::devicesPlatformWMNameListFile));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::devicesPlatformWMNameListFile);
            }
        } else {
            if (is_resource(fopen(self::devicesPlatformWMNameListFile, 'wb+')) === true) {
                FileSystem::saveToFile(self::devicesPlatformWMNameListFile, _JSON::encodeToString($this->getPlatformWmList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::devicesCategoryListFile);
            }

            $this->devicesPlatformWMNameList = $this->getPlatformWmList();
        }//end if

        // Browsers list.
        if (file_exists(self::webBrowserListFile) === true) {
            if (is_readable(self::webBrowserListFile) === true) {
                if ($this->IsUpdateDatabase($this->getWebBrowsersList(), self::webBrowserListFile) === true) {
                    if (is_writable(self::webBrowserListFile) === true) {
                        FileSystem::saveToFile(self::webBrowserListFile, _JSON::encodeToString($this->getWebBrowsersList()));
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesPlatformWMNameListFile);
                    }
                }

                $this->webBrowserList = _JSON::decodeToArray(FileSystem::read(self::webBrowserListFile));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::webBrowserListFile);
            }
        } else {
            if (is_resource(fopen(self::webBrowserListFile, 'wb+')) === true) {
                FileSystem::saveToFile(self::webBrowserListFile, _JSON::encodeToString($this->getWebBrowsersList()));
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::devicesCategoryListFile);
            }

            $this->webBrowserList = $this->getWebBrowsersList();
        }//end if

        // Browsers app code list.
        if (file_exists(self::webBrowserAppCodeListFile) === true) {
            if (is_readable(self::webBrowserAppCodeListFile) === true) {
                if ($this->IsUpdateDatabase($this->getWebBrowserAppCodeList(), self::webBrowserAppCodeListFile) === true) {
                    if (is_writable(self::webBrowserAppCodeListFile) === true) {
                        FileSystem::saveToFile(
                            self::webBrowserAppCodeListFile,
                            _JSON::encodeToString($this->getWebBrowserAppCodeList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesPlatformWMNameListFile);
                    }
                }

                $this->webBrowserAppCodeNameList = _JSON::decodeToArray(FileSystem::read(self::webBrowserAppCodeListFile));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::webBrowserAppCodeListFile);
            }
        } else {
            if (is_resource(fopen(self::webBrowserAppCodeListFile, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::webBrowserAppCodeListFile,
                    _JSON::encodeToString($this->getWebBrowserAppCodeList())
                );
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::devicesCategoryListFile);
            }

            $this->webBrowserAppCodeNameList = $this->getWebBrowserAppCodeList();
        }//end if

        // Browsers layout list.
        if (file_exists(self::webBrowserLayoutListFile) === true) {
            if (is_readable(self::webBrowserLayoutListFile) === true) {
                if ($this->IsUpdateDatabase($this->getWebBrowsersLayoutList(), self::webBrowserLayoutListFile) === true) {
                    if (is_writable(self::webBrowserLayoutListFile) === true) {
                        FileSystem::saveToFile(
                            self::webBrowserLayoutListFile,
                            _JSON::encodeToString($this->getWebBrowsersLayoutList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::devicesPlatformWMNameListFile);
                    }
                }

                $this->webBrowserLayoutList = _JSON::decodeToArray(FileSystem::read(self::webBrowserLayoutListFile), true);
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::webBrowserAppCodeListFile);
            }
        } else {
            if (is_resource(fopen(self::webBrowserLayoutListFile, 'wb+')) === true) {
                FileSystem::saveToFile(self::webBrowserLayoutListFile, _JSON::encodeToString($this->getWebBrowsersLayoutList()));
            }

            $this->webBrowserLayoutList = $this->getWebBrowsersLayoutList();
        }//end if

    }//end loadBrowserData()


    /**
     * @param  array  $database
     * @param  string $filename
     * @return boolean
     * @throws \JsonException
     */
    private function IsUpdateDatabase(array $database, string $filename): bool
    {
        return (is_readable($filename) === true
                && strlen(FileSystem::read($filename)) !== 0
                && count(array_keys($database)) > count(array_keys(_JSON::decodeToArray(FileSystem::read($filename)))))
            || strlen(_JSON::encodeToString($database)) > strlen(FileSystem::read($filename));

    }//end IsUpdateDatabase()


    private function storeUserAgentInFile(): void
    {
        // UserAgentListFile
        if (file_exists(self::userAgentListFile) === true) {
            if (is_writable(self::userAgentListFile) === true) {
                FileSystem::append(self::userAgentListFile, "\"$this->timeOfToday\",\"".IP::get()."\",\"$this->userAgent\"".PHP_EOL);
            }
        } else {
            if (is_writable(dirname(self::userAgentListFile)) === true) {
                FileSystem::append(self::userAgentListFile, '"Date", "Client", "User-Agent"'.PHP_EOL);
                FileSystem::append(self::userAgentListFile, "\"$this->timeOfToday\",\"".IP::get()."\",\"$this->userAgent\"".PHP_EOL);
            }
        }

    }//end storeUserAgentInFile()


    private function analyze()
    {
        /*
            start operation*/
        // first step
        $cleanUA = $this->cleanUserAgentString($this->userAgent);
        foreach ($this->webBrowserAppCodeNameList as $appKey => $appValue) {
            if (preg_match('#'.preg_quote(strtolower($appKey)).'[/]+([0-9]+(?:\.[0-9]+)?)#', $cleanUA, $matches) === true) {
                $this->browserAppCodeName    = $appValue;
                $this->browserAppCodeVersion = $matches[1];
                break;
            }
        }

        // second step
        foreach ($this->devicesPlatformWMNameList as $pwKey => $pwValue) {
            if (preg_match('/'.preg_quote(strtolower($pwKey)).'\b/i', $cleanUA, $matches) === true) {
                $this->deviceWindowManager  = $pwKey;
                $this->deviceWmNameOriginal = ucfirst($pwKey);
                $this->windowManager($pwValue);
                break;
            }
        }

        // third step
        foreach ($this->devicesCategoryList as $dcKey => $dcValue) {
            if (preg_match('/'.preg_quote(strtolower($dcKey)).'\b/i', $cleanUA, $matches) === true) {
                $this->deviceWindowManager = $dcValue;
                break;
            }
        }

        // fourth step
        foreach ($this->devicesList as $dKey => $dValue) {
            if (preg_match('/'.strtolower($dKey).'\b/i', $cleanUA, $matches) === true) {
                $this->deviceName     = $dKey;
                $this->deviceNameFull = $this->finalContent($dKey, $cleanUA);
                $this->deviceInfoAll  = (array) $dValue;
                $this->deviceDetails((array) $dValue);

                $device = explode(';', $this->deviceInfo($cleanUA));
                foreach ($device as $devValue) {
                    if (preg_match('/'.strtolower($dKey).'\b/i', $devValue, $matches) === true) {
                        $this->deviceNameOriginal = ltrim($devValue);
                        break;
                    }
                }

                break;
            }
        }

        // fifth step
        foreach ($this->devicesArchitectureList as $aKey => $aValue) {
            if (preg_match('/'.strtolower($aKey).'\b/i', $cleanUA, $matches) === true) {
                $this->deviceArchitecture  = $aValue;
                $this->browserArchitecture = $aValue;
                break;
            }
        }

        // sixth step
        foreach (array_change_key_case($this->webBrowserList, CASE_LOWER) as $wbKey => $wbValue) {
            if (preg_match('/'.preg_quote(strtolower($wbKey)).'\b/i', $cleanUA, $matches) === true) {
                $this->browserName        = ucfirst($wbKey);
                $this->browserNameFull    = ltrim(ucwords(strtr(strtolower($this->finalContent($wbKey, $cleanUA)), [$wbKey => $wbValue['name']])));
                $this->browserInfoAll     = is_array($wbValue) ? $wbValue : [];
                $this->browserVersionFull = substr($this->browserNameFull, (strpos($this->browserNameFull, $wbKey) + strlen($wbKey) + 1), (strlen($this->browserNameFull) - (strpos($this->browserNameFull, $wbKey) + strlen($wbKey) + 1)));
                $this->browserVersion     = substr($this->browserVersionFull, 0, strpos($this->browserVersionFull, '.'));
                break;
            }
        }

        // seventh step
        foreach (array_change_key_case($this->webBrowserLayoutList, CASE_LOWER) as $layoutKey => $layoutValue) {
            if (preg_match('#'.preg_quote(strtolower($layoutValue['contain'])).'[/]+([0-9]+(?:\.[0-9]+)?)#', $cleanUA, $matches) === true) {
                $this->browserEngineName     = $layoutKey;
                $this->browserEngineNameFull = $this->cleanContent($matches[0]);
                $this->browserEngineVersion  = $matches[1];
                break;
            }
        }

    }//end analyze()


    /**
     * Make user agent string lowercase, and replace browser aliases.
     *
     * @param  string $string The dirty user agent string
     * @return string Returns the clean user agent string.
     */
    protected function cleanUserAgentString(string $string): string
    {
        _Debug::preOutput(func_get_args());
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


    private function windowManager(array $array): void
    {
        if (is_array($array) and count($array) > 0) {
            if (array_key_exists('name', $array)) {
                $this->deviceType = $array['name'];
            }

            if (array_key_exists('type', $array)) {
                $this->deviceWindowManager = $array['type'];
            }
        } else {
            $this->deviceType = (string) $array;
        }

    }//end windowManager()


    /**
     * @param string $key
     * @param string $content
     * @return string
     */
    private function finalContent(string $key, string $content): string
    {
        $finalOutput = '';
        $kPosition   = stripos($content, $key);
        $cLength     = strlen($content);
        $fountText   = substr($content, $kPosition, ($cLength - $kPosition));
        $totalWords  = str_word_count($fountText);
        if ($totalWords > 1) {
            $wordsArray = explode(' ', $fountText);
            foreach ($wordsArray as $value) {
                if (preg_match('/'.preg_quote(strtolower($key)).'/i', $value, $matches)) {
                    $finalOutput = $value;
                    break;
                }
            }
        } else {
            $finalOutput = $fountText;
        }

        return $this->cleanContent($finalOutput);

    }//end finalContent()


    /**
     * @param string $content
     * @return string
     */
    private function cleanContent(string $content): string
    {
        return ltrim(ucwords(preg_replace('#[/]|[;]|[)]#', ' ', $content)));

    }//end cleanContent()


    /**
     * @param string|array $resources
     */
    private function deviceDetails(string|array $resources): void
    {
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
                $this->currentDeviceInfo = $resources;
            }
        }

    }//end deviceDetails()


    /**
     * @param  string $ua
     * @return string
     */
    private function deviceInfo(string $ua): string
    {
        preg_match('/\(([^\)]*)\)/', $ua, $matches);
        return $matches[1];

    }//end deviceInfo()


    /**
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
            if (preg_match('/<title>(.*?)<\/title>/is', $text, $found)) {
                $title = $found[1];
                break;
            }
        }

        return ltrim($title);

    }//end visitedPageTitle()


    /**
     * @public
     * @return string
     */
    public static function getVisitedPage(): string
    {
        return self::VisitedPageURL($_SERVER);

    }//end getVisitedPage()


    /**
     * @param  array $s
     * @param  bool $useForwardedHost
     * @return string
     */
    public static function visitedPageURL(array $s, bool $useForwardedHost=false): string
    {
        return self::urlOrigin($s, $useForwardedHost).$s['REQUEST_URI'];

    }//end VisitedPageURL()


    /**
     * @param  array $s
     * @param  bool $useForwardedHost
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
            if (array_key_exists(strtolower($name), array_change_key_case($this->webBrowserList, CASE_LOWER)) === true) {
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


}//end class
