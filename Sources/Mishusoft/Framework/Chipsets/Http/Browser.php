<?php

/**
 * Browser (php language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/php/browser.php
 * */

namespace Mishusoft\Framework\Chipsets\Http;


use Mishusoft\Framework\Chipsets\Http\Browser\DataObject;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class Browser extends DataObject
{
    /*declare version*/
    const VERSION = "1.0.2";

    /*variables*/
    private string $RequestMethod;
    private string $RequestMode;
    private string $UserAgent = 'Unknown';
    private string $AcceptLanguage = 'Unknown';
    private string $AcceptEncoding = 'Unknown';

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
    private $currentDeviceInfo;

    private string $URLProtocol;
    private string $URLHostname;
    private string $URLPath;


    /*runtime storage*/
    private array $UserAgentList = array();
    private array $devicesList;
    private array $devicesArchitectureList;
    private array $devicesPlatformWMNameList;
    private array $devicesCategoryList;
    private array $webBrowserList;
    private array $webBrowserAppCodeNameList;
    private array $webBrowserLayoutList;

    private string $timeOfToday;


    public function __construct()
    {
        $this->timeOfToday = date("Y-m-d H:i:s");
        $this->RequestMethod = $_SERVER['REQUEST_METHOD'];
        $this->RequestMode = array_key_exists('HTTP-SEC-FETCH-MODE', $_SERVER) ? $_SERVER['HTTP-SEC-FETCH-MODE'] : 'negative';
        $this->URLProtocol = array_key_exists('REQUEST_SCHEME', $_SERVER) ? $_SERVER['REQUEST_SCHEME'] : 'http';
        $this->URLHostname = $_SERVER['HTTP_HOST'];
        $this->URLPath = $_SERVER['REQUEST_URI'];

        $this->loadBrowserData();

        if (function_exists('apache_request_headers')) {
            if (array_key_exists('User-Agent', apache_request_headers())) {
                $this->UserAgent = array_key_exists('User-Agent', apache_request_headers()) ? apache_request_headers()['User-Agent'] : $this->UserAgent;
                $this->AcceptLanguage = array_key_exists('Accept-Language', apache_request_headers()) ? apache_request_headers()['Accept-Language'] : $this->AcceptLanguage;
                $this->AcceptEncoding = array_key_exists('Accept-Encoding', apache_request_headers()) ? apache_request_headers()['Accept-Encoding'] : $this->AcceptEncoding;
                $this->storeUserAgentInFile();
                $this->analyze();
            }
        } elseif (function_exists('getallheaders')) {
            if (array_key_exists('User-Agent', getallheaders())) {
                $this->UserAgent = array_key_exists('HTTP_USER_AGENT', getallheaders()) ? getallheaders()['HTTP_USER_AGENT'] : $this->UserAgent;
                $this->AcceptLanguage = array_key_exists('Accept-Language', getallheaders()) ? getallheaders()['Accept-Language'] : $this->AcceptLanguage;
                $this->AcceptEncoding = array_key_exists('Accept-Encoding', getallheaders()) ? getallheaders()['Accept-Encoding'] : $this->AcceptEncoding;
                $this->storeUserAgentInFile();
                $this->analyze();
            }
        } else {
            if (array_key_exists('HTTP_USER_AGENT', $_SERVER)) {
                $this->AcceptLanguage = array_key_exists('HTTP_USER_AGENT', $_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : $this->UserAgent;
                $this->AcceptLanguage = array_key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : $this->AcceptLanguage;
                $this->AcceptEncoding = array_key_exists('HTTP_ACCEPT_ENCODING', $_SERVER) ? $_SERVER['HTTP_ACCEPT_ENCODING'] : $this->AcceptEncoding;
                $this->storeUserAgentInFile();
                $this->analyze();
            }
        }
    }

    private function loadBrowserData()
    {
        /*devices list*/
        if (file_exists(self::devicesListFile)) {
            if (is_readable(self::devicesListFile)) {
                if ($this->IsUpdateDatabase($this->getDevicesList(), self::devicesListFile)) {
                    if (is_writable(self::devicesListFile)) {
                        file_put_contents(self::devicesListFile, json_encode($this->getDevicesList()));
                    }
                }
                $this->devicesList = json_decode(file_get_contents(self::devicesListFile), true);
            }
        } else {
            if (fopen(self::devicesListFile, 'w+')) {
                file_put_contents(self::devicesListFile, json_encode($this->getDevicesList()));
            }
            $this->devicesList = $this->getDevicesList();
        }

        /*device's architecture list*/
        if (file_exists(self::devicesArchitectureListFile)) {
            if (is_readable(self::devicesArchitectureListFile)) {
                if ($this->IsUpdateDatabase($this->getDevicesArchitectureList(), self::devicesArchitectureListFile)) {
                    if (is_writable(self::devicesArchitectureListFile)) {
                        file_put_contents(self::devicesArchitectureListFile, json_encode($this->getDevicesArchitectureList()));
                    }
                }
                $this->devicesArchitectureList = json_decode(file_get_contents(self::devicesArchitectureListFile), true);
            }
        } else {
            if (fopen(self::devicesArchitectureListFile, 'w+')) {
                file_put_contents(self::devicesArchitectureListFile, json_encode($this->getDevicesArchitectureList()));
            }
            $this->devicesArchitectureList = $this->getDevicesArchitectureList();
        }

        /*devices category list*/
        if (file_exists(self::devicesCategoryListFile)) {
            if (is_readable(self::devicesCategoryListFile)) {
                if ($this->IsUpdateDatabase($this->getDevicesCategoryList(), self::devicesCategoryListFile)) {
                    if (is_writable(self::devicesCategoryListFile)) {
                        file_put_contents(self::devicesCategoryListFile, json_encode($this->getDevicesCategoryList()));
                    }
                }
                $this->devicesCategoryList = json_decode(file_get_contents(self::devicesCategoryListFile), true);
            }
        } else {
            if (fopen(self::devicesCategoryListFile, 'w+')) {
                file_put_contents(self::devicesCategoryListFile, json_encode($this->getDevicesCategoryList()));
            }
            $this->devicesCategoryList = $this->getDevicesCategoryList();
        }

        /*platform window manager list*/
        if (file_exists(self::devicesPlatformWMNameListFile)) {
            if (is_readable(self::devicesPlatformWMNameListFile)) {
                if ($this->IsUpdateDatabase($this->getPlatformWmList(), self::devicesPlatformWMNameListFile)) {
                    if (is_writable(self::devicesPlatformWMNameListFile)) {
                        file_put_contents(self::devicesPlatformWMNameListFile, json_encode($this->getPlatformWmList()));
                    }
                }
                $this->devicesPlatformWMNameList = json_decode(file_get_contents(self::devicesPlatformWMNameListFile), true);
            }
        } else {
            if (fopen(self::devicesPlatformWMNameListFile, 'w+')) {
                file_put_contents(self::devicesPlatformWMNameListFile, json_encode($this->getPlatformWmList()));
            }
            $this->devicesPlatformWMNameList = $this->getPlatformWmList();
        }

        /*browsers list*/
        if (file_exists(self::webBrowserListFile)) {
            if (is_readable(self::webBrowserListFile)) {
                if ($this->IsUpdateDatabase($this->getWebBrowsersList(), self::webBrowserListFile)) {
                    if (is_writable(self::webBrowserListFile)) {
                        file_put_contents(self::webBrowserListFile, json_encode($this->getWebBrowsersList()));
                    }
                }
                $this->webBrowserList = json_decode(file_get_contents(self::webBrowserListFile), true);

            }
        } else {
            if (fopen(self::webBrowserListFile, 'w+')) {
                file_put_contents(self::webBrowserListFile, json_encode($this->getWebBrowsersList()));
            }
            $this->webBrowserList = $this->getWebBrowsersList();
        }


        /*browsers app code list*/
        if (file_exists(self::webBrowserAppCodeListFile)) {
            if (is_readable(self::webBrowserAppCodeListFile)) {
                if ($this->IsUpdateDatabase($this->getWebBrowserAppCodeList(), self::webBrowserAppCodeListFile)) {
                    if (is_writable(self::webBrowserAppCodeListFile)) {
                        file_put_contents(self::webBrowserAppCodeListFile, json_encode($this->getWebBrowserAppCodeList()));
                    }
                }
                $this->webBrowserAppCodeNameList = json_decode(file_get_contents(self::webBrowserAppCodeListFile), true);
            }
        } else {
            if (fopen(self::webBrowserAppCodeListFile, 'w+')) {
                file_put_contents(self::webBrowserAppCodeListFile, json_encode($this->getWebBrowserAppCodeList()));
            }
            $this->webBrowserAppCodeNameList = $this->getWebBrowserAppCodeList();
        }

        /*browsers layout list*/
        if (file_exists(self::webBrowserLayoutListFile)) {
            if (is_readable(self::webBrowserLayoutListFile)) {
                if ($this->IsUpdateDatabase($this->getWebBrowsersLayoutList(), self::webBrowserLayoutListFile)) {
                    if (is_writable(self::webBrowserLayoutListFile)) {
                        file_put_contents(self::webBrowserLayoutListFile, json_encode($this->getWebBrowsersLayoutList()));
                    }
                }
                $this->webBrowserLayoutList = json_decode(file_get_contents(self::webBrowserLayoutListFile), true);
            }
        } else {
            if (fopen(self::webBrowserLayoutListFile, 'w+')) {
                file_put_contents(self::webBrowserLayoutListFile, json_encode($this->getWebBrowsersLayoutList()));
            }
            $this->webBrowserLayoutList = $this->getWebBrowsersLayoutList();
        }
    }

    private function IsUpdateDatabase(array $database, string $filename): bool
    {
        if (is_readable(file_get_contents($filename)) && strlen(file_get_contents($filename)) !== 0 and count(array_keys($database)) > count(array_keys(json_decode(file_get_contents($filename), true))) ||
            strlen(json_encode($database)) > strlen(file_get_contents($filename))) {
            return true;
        }
        return false;
    }

    private function storeUserAgentInFile(): void
    {
        /*UserAgentListFile*/
        if (file_exists(self::userAgentListFile)) {
            if (is_writable(self::userAgentListFile)) {
                Stream::append(self::userAgentListFile,"\"$this->timeOfToday\",\"".IP::get()."\",\"$this->UserAgent\"".PHP_EOL);
            }
        } else {
            if (is_writable(dirname(self::userAgentListFile))) {
                Stream::append(self::userAgentListFile,"\"Date\", \"Client\", \"User-Agent\"".PHP_EOL);
                Stream::append(self::userAgentListFile,"\"$this->timeOfToday\",\"".IP::get()."\",\"$this->UserAgent\"".PHP_EOL);
            }
        }
    }

    private function analyze()
    {
        /*start operation*/
        /*first step*/
        $cleanUA = $this->cleanUserAgentString($this->UserAgent);
        foreach ($this->webBrowserAppCodeNameList as $appKey => $appValue) {
            if (preg_match('#' . preg_quote(strtolower($appKey)) . '[/]+([0-9]+(?:\.[0-9]+)?)#', $cleanUA, $matches)) {
                $this->browserAppCodeName = $appValue;
                $this->browserAppCodeVersion = $matches[1];
                break;
            }
        }

        /*second step*/
        foreach ($this->devicesPlatformWMNameList as $pwKey => $pwValue) {
            if (preg_match('/' . preg_quote(strtolower($pwKey)) . '\b/i', $cleanUA, $matches)) {
                $this->deviceWindowManager = $pwKey;
                $this->deviceWmNameOriginal = ucfirst($pwKey);
                $this->windowManager($pwValue);
                break;
            }
        }
        /*third step*/
        foreach ($this->devicesCategoryList as $dcKey => $dcValue) {
            if (preg_match('/' . preg_quote(strtolower($dcKey)) . '\b/i', $cleanUA, $matches)) {
                $this->deviceWindowManager = $dcValue;
                break;
            }
        }

        /*fourth step*/
        foreach ($this->devicesList as $dKey => $dValue) {
            if (preg_match('/' . strtolower($dKey) . '\b/i', $cleanUA, $matches)) {
                $this->deviceName = $dKey;
                $this->deviceNameFull = $this->finalContent($dKey, $cleanUA);
                $this->deviceInfoAll = (array)$dValue;
                $this->deviceDetails((array)$dValue);

                $device = explode(';', $this->deviceInfo($cleanUA));
                foreach ($device as $devValue) {
                    if (preg_match('/' . strtolower($dKey) . '\b/i', $devValue, $matches)) {
                        $this->deviceNameOriginal = ltrim($devValue);
                        break;
                    }
                }
                break;
            }
        }
        /*fifth step*/
        foreach ($this->devicesArchitectureList as $aKey => $aValue) {
            if (preg_match('/' . strtolower($aKey) . '\b/i', $cleanUA, $matches)) {
                $this->deviceArchitecture = $aValue;
                $this->browserArchitecture = $aValue;
                break;
            }
        }
        /*sixth step*/
        foreach (array_change_key_case($this->webBrowserList, CASE_LOWER) as $wbKey => $wbValue) {
            if (preg_match('/' . preg_quote(strtolower($wbKey)) . '\b/i', $cleanUA, $matches)) {
                $this->browserName = ucfirst($wbKey);
                $this->browserNameFull = ltrim(ucwords(strtr(strtolower($this->finalContent($wbKey, $cleanUA)), array($wbKey => $wbValue['name']))));
                $this->browserInfoAll = is_array($wbValue) ? $wbValue : array();
                $this->browserVersionFull = substr($this->browserNameFull, (strpos($this->browserNameFull, $wbKey) + strlen($wbKey) + 1), (strlen($this->browserNameFull) - (strpos($this->browserNameFull, $wbKey) + strlen($wbKey) + 1)));
                $this->browserVersion = substr($this->browserVersionFull, 0, strpos($this->browserVersionFull, "."));
                break;
            }
        }


        /*seventh step*/
        foreach (array_change_key_case($this->webBrowserLayoutList, CASE_LOWER) as $layoutKey => $layoutValue) {
            if (preg_match('#' . preg_quote(strtolower($layoutValue['contain'])) . '[/]+([0-9]+(?:\.[0-9]+)?)#', $cleanUA, $matches)) {
                $this->browserEngineName = $layoutKey;
                $this->browserEngineNameFull = $this->cleanContent($matches[0]);
                $this->browserEngineVersion = $matches[1];
                break;
            }
        }
    }

    /**
     * Make user agent string lowercase, and replace browser aliases.
     *
     * @param string $string The dirty user agent string
     * @return string Returns the clean user agent string.
     */
    protected function cleanUserAgentString(string $string): string
    {
        // clean up the string
        $string = trim(strtolower($string));

        // replace browser names with their aliases
        return strtr($string, $this->getKnownBrowserAliases());
    }

    /**
     * Gets known browser aliases.
     *
     * @return array
     */
    protected function getKnownBrowserAliases(): array
    {
        return array(
            'opr' => 'opera',
            'iceweasel' => 'firefox',
        );
    }

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
            $this->deviceType = (string)$array;
        }
    }

    private function finalContent(string $key, string $content): string
    {
        $finalOutput = '';
        $kPosition = strpos($content, strtolower($key));
        $cLength = strlen($content);
        $fountText = substr($content, $kPosition, ($cLength - $kPosition));
        $totalWords = str_word_count($fountText);
        if ($totalWords > 1) {
            $wordsArray = explode(' ', $fountText);
            foreach ($wordsArray as $value) {
                if (preg_match('/' . preg_quote(strtolower($key)) . '/i', $value, $matches)) {
                    $finalOutput = $value;
                    break;
                }
            }
        } else {
            $finalOutput = $fountText;
        }

        return $this->cleanContent($finalOutput);
    }

    private function cleanContent(string $content): string
    {
        return ltrim(ucwords(preg_replace('#[/]|[;]|[)]#', ' ', $content)));
    }

    private function deviceDetails(array $resources): void
    {
        if (is_array($resources) and count($resources) > 0) {
            if (array_key_exists('Platform', $resources)) {
                $this->currentDeviceInfo = $resources['Platform'];
                $this->deviceName = $resources['Platform']['name'];
                $this->deviceArchitecture = $resources['Platform']['architecture'];
                $this->deviceType = $resources['Device']['type'];
            } else {
                if (is_string($resources)) {
                    $this->deviceName = $resources;
                    $this->deviceType = $resources;
                    $this->currentDeviceInfo = $resources;
                }
            }
        }
    }

    /**
     * @param string $ua
     * @return string
     */
    private function deviceInfo(string $ua): string
    {
        preg_match('/\(([^\)]*)\)/', $ua, $matches);
        return $matches[1];
    }

    /**
     * @public
     * @return mixed|string
     */
    public static function visitedPageTitle(): string
    {
        // SET DEFAULT
        $title = 'No title found';
        //Web url
        $url = self::getVisitedPage();
        // OPEN THE REMOTE PAGE
        $file = fopen($url, "r") or trigger_error("url not found");
        // ITERATE OVER THE PAGE DATA
        while (!feof($file)) {
            $text = fread($file, 16384);
            if (preg_match('/<title>(.*?)<\/title>/is', $text, $found)) {
                $title = $found[1];
                break;
            }
        }

        return ltrim($title);
    }

    /**
     * @public
     * @return string
     */
    public static function getVisitedPage(): string
    {
        return self::VisitedPageURL($_SERVER);
    }

    /**
     * @param $s
     * @param false $use_forwarded_host
     * @return string
     */
    public static function VisitedPageURL($s, $use_forwarded_host = false): string
    {
        return self::url_origin($s, $use_forwarded_host) . $s['REQUEST_URI'];
    }

    /**
     * @param $s
     * @param false $use_forwarded_host
     * @return string
     */
    public static function url_origin($s, $use_forwarded_host = false): string
    {
        $ssl = (!empty($s['HTTPS']) && $s['HTTPS'] == 'on');
        $sp = strtolower($s['SERVER_PROTOCOL']);
        $protocol = substr($sp, 0, strpos($sp, '/')) . (($ssl) ? 's' : '');
        $port = $s['SERVER_PORT'];
        $port = ((!$ssl && $port == '80') || ($ssl && $port == '443')) ? '' : ':' . $port;
        $host = ($use_forwarded_host && isset($s['HTTP_X_FORWARDED_HOST'])) ? $s['HTTP_X_FORWARDED_HOST'] : (isset($s['HTTP_HOST']) ? $s['HTTP_HOST'] : null);
        $host = isset($host) ? $host : $s['SERVER_NAME'] . $port;
        return $protocol . '://' . $host;
    }

    /**
     * @public
     * @param string $name
     * @return array
     */
    public function getBrowserDetails(string $name): array
    {
        if (is_string($name)) {
            if (array_key_exists(strtolower($name), array_change_key_case($this->webBrowserList, CASE_LOWER))) {
                foreach ($this->webBrowserList as $item => $details) {
                    if (strtolower($item) === strtolower($name)) {
                        return is_array($details) ? $details : (array)$details;
                    }
                }
            } else {
                return array(
                    'name' => $name,
                    'status' => 'Unknown'
                );
            }
        } else {
            trigger_error('Invalid browser name used');
        }
        return [];
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserEngineName(): string
    {
        return ltrim($this->browserEngineName);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserEngineNameFull(): string
    {
        return ltrim($this->browserEngineNameFull);
    }

    /**
     * @public
     * @return array
     */
    public function getBrowserInfoAll(): array
    {
        return $this->browserInfoAll;
    }


    /**
     * @public
     * @return string
     */
    public function getBrowserAppCodeName(): string
    {
        return ltrim($this->browserAppCodeName);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserAppCodeVersion(): string
    {
        return ltrim($this->browserAppCodeVersion);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserAppName(): string
    {
        return ltrim($this->browserAppName);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserAppVersion(): string
    {
        return ltrim($this->browserAppVersion);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserArchitecture(): string
    {
        return ltrim($this->browserArchitecture);
    }


    /**
     * @public
     * @return string
     */
    public function getBrowserEngineVersion(): string
    {
        return ltrim($this->browserEngineVersion);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserName(): string
    {
        return ltrim($this->browserName);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserNameFull(): string
    {
        return ltrim($this->browserNameFull);
    }


    /**
     * @public
     * @return string
     */
    public function getBrowserVersion(): string
    {
        return ltrim($this->browserVersion);
    }

    /**
     * @public
     * @return string
     */
    public function getBrowserVersionFull(): string
    {
        return ltrim($this->browserVersionFull);
    }

    /**
     * @public
     * @return mixed
     */
    public function getCurrentDeviceInfo()
    {
        return $this->currentDeviceInfo;
    }

    /**
     * @public
     * @return string
     */
    public function getDeviceName(): string
    {
        return ltrim($this->deviceName);
    }

    /**
     * @public
     * @return string
     */
    public function getDeviceNameFull(): string
    {
        return ltrim($this->deviceNameFull);
    }

    /**
     * @public
     * @return string
     */
    public function getDeviceNameOriginal(): string
    {
        return ltrim($this->deviceNameOriginal);
    }


    /**
     * @public
     * @return string
     */
    public function getDeviceType(): string
    {
        return ltrim($this->deviceType);
    }

    /**
     * @public
     * @return string
     */
    public function getDeviceArchitecture(): string
    {
        return ltrim($this->deviceArchitecture);
    }

    /**
     * @public
     * @return string
     */
    public function getDeviceWindowManager(): string
    {
        return ltrim($this->deviceWindowManager);
    }

    /**
     * @public
     * @return string
     */
    public function getDeviceWmNameOriginal(): string
    {
        return $this->deviceWmNameOriginal;
    }

    /**
     * @public
     * @return array
     */
    public function getDeviceInfoAll(): array
    {
        return $this->deviceInfoAll;
    }

    /**
     * @public
     * @return string
     */
    public function getUserAgent(): string
    {
        return $this->UserAgent;
    }

    /**
     * @public
     * @return array
     */
    public function getUserAgentList(): array
    {
        return $this->UserAgentList;
    }


    /**
     * @public
     * @return mixed
     */
    public function getURLProtocol(): string
    {
        return $this->URLProtocol;
    }

    /**
     * @public
     * @return mixed
     */
    public function getURLHostname(): string
    {
        return $this->URLHostname;
    }

    /**
     * @public
     * @return mixed
     */
    public function getURLPath(): string
    {
        return $this->URLPath;
    }

    /**
     * @public
     * @return string
     */
    public function getRequestMethod(): string
    {
        return $this->RequestMethod;
    }

    /**
     * @return mixed|string
     */
    public function getRequestMode(): string
    {
        return $this->RequestMode;
    }

    function __destruct()
    {

    }


}