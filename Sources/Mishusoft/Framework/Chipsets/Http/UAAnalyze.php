<?php


namespace Mishusoft\Framework\Chipsets\Http;

use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use RuntimeException;

class UAAnalyze extends UATable
{
    // Declare version.
    public const VERSION = '1.0.2';


    /**
     * UAAnalyze constructor.
     *
     * @param  string  $userAgent  User agent string from web browser.
     * @param  boolean $matchFound
     * @throws JsonException|ErrorException Throw exception when error occurred.
     */
    public function __construct(
        public string $userAgent,
        private bool $matchFound=false
    ) {
        parent::__construct();

        $this->saveUserAgent('development');
        $this->loadBrowserData();
        $this->analyze();
    }//end __construct()


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
                FileSystem::saveToFile(
                    self::DEVICES_CATEGORY_LIST_FILE,
                    _JSON::encodeToString($this->getDevicesCategoryList())
                );
            } else {
                throw new RuntimeException('Permission denied. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
            }

            $this->devicesCategoryList = $this->getDevicesCategoryList();
        }//end if

        // Platform window manager list.
        if (file_exists(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE) === true) {
            if (is_readable(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE) === true) {
                if ($this->isUpdateDatabase($this->getPlatformWmList(), self::DEVICES_PLATFORM_WM_NAME_LIST_FILE) === true) {
                    if (is_writable(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE)) {
                        FileSystem::saveToFile(
                            self::DEVICES_PLATFORM_WM_NAME_LIST_FILE,
                            _JSON::encodeToString($this->getPlatformWmList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
                    }
                }

                $this->devicesPlatformWMNameList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::DEVICES_PLATFORM_WM_NAME_LIST_FILE,
                    _JSON::encodeToString($this->getPlatformWmList())
                );
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
                        FileSystem::saveToFile(
                            self::WEB_BROWSER_LIST_FILE,
                            _JSON::encodeToString($this->getWebBrowsersList())
                        );
                    } else {
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
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
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
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
                        throw new RuntimeException('Permission denied. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
                    }
                }

                $this->webBrowserLayoutList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_LAYOUT_LIST_FILE));
            } else {
                throw new RuntimeException('Permission denied. Unable to read '.self::WEB_BROWSER_APP_CODE_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::WEB_BROWSER_LAYOUT_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::WEB_BROWSER_LAYOUT_LIST_FILE,
                    _JSON::encodeToString($this->getWebBrowsersLayoutList())
                );
            }

            $this->webBrowserLayoutList = $this->getWebBrowsersLayoutList();
        }//end if
    }//end loadBrowserData()


    /**
     * Analyze
     *
     * @throws ErrorException
     */
    private function analyze(): void
    {
        $cleanUA        = $this->cleanUserAgentString($this->userAgent);
        $webBrowserList = $this->getWebBrowsersList();
        foreach ($webBrowserList as $webBrowser => $detailsInformation) {
            // print_r($webBrowser, false). PHP_EOL;
            if (preg_match($this->getPatternOfRegExp($webBrowser, 'browser'), $cleanUA, $matches) === 1) {
                // print_r($webBrowser, false).PHP_EOL;
                $this->matchFound = true;
                // Known browser detected.
                echo 'WEB BROWSER DETECTED.'.PHP_EOL;
                $details               = $this->cleanFilter($matches);
                $this->browserName     = ucfirst($details['name']);
                $this->browserNameFull = implode(' ', array_values($details));
                if (array_key_exists('version', $details) === true) {
                    $this->browserVersionFull = $details['version'];
                    $this->browserVersion     = substr($details['version'], 0, strpos($details['version'], '.'));
                }

                $this->browserInfoAll = $this->getBrowserDetails($webBrowser);

                //print_r($details, false);
                print_r($this->cleanFilter($details), false);

                // First step.
                // Search app code name of web browser from user agent.
                foreach ($this->webBrowserAppCodeNameList as $key => $value) {
                    if (preg_match($this->getPatternOfRegExp($key, 'application_code'), $cleanUA, $matches) === 1) {
                        $this->browserAppCodeName    = $this->cleanFilter($matches)['name'];
                        $this->browserAppCodeVersion = $this->cleanFilter($matches)['version'];

                        echo 'APP CODE OF WEB BROWSER DETECTED.'.PHP_EOL;
                        print_r($this->cleanFilter($matches), false);
                        break;
                    }
                }//end foreach

                // Second step.
                // Search rendering engine from user agent.
                foreach ($this->webBrowserLayoutList as $key => $value) {
                    if (preg_match($this->getPatternOfRegExp($key, 'rendering_engine'), $cleanUA, $matches) === 1) {
                        $this->browserEngineName     = $this->cleanFilter($matches)['name'];
                        $this->browserEngineNameFull = $this->cleanFilter($matches)['name'];
                        $this->browserEngineVersion  = $this->cleanFilter($matches)['name'];

                        echo 'WEB BROWSER\'s RENDERING ENGINE DETECTED.'.PHP_EOL;

                        print_r($this->cleanFilter($matches), false);
                        break;
                    }
                }

                // Second step.
                // Search rendering engine from user agent.
                foreach ($this->devicesArchitectureList as $key => $value) {
                    if (preg_match($this->getPatternOfRegExp($key, 'architecture'), $cleanUA, $matches) === 1) {
                        $this->browserArchitecture = $value;
                        $this->deviceArchitecture  = $value;

                        echo 'ARCHITECTURE OF WEB BROWSER DETECTED.'.PHP_EOL;

                        // echo $value;
                        print_r($this->cleanFilter($matches), false);
                        break;
                    }
                }

                // Third step.
                // Search window manager name and type from user agent.
                foreach ($this->devicesPlatformWMNameList as $key => $value) {
                    if (preg_match($this->getPatternOfRegExp($key, 'window_manager'), $cleanUA, $matches) === 1) {
                        $this->deviceWindowManager  = $this->cleanFilter($matches)['name'];
                        $this->deviceWmNameOriginal = implode(' ', array_values($this->cleanFilter($matches)));
                        $this->windowManager($value);

                        echo 'WINDOW MANAGER OF PLATFORM DETECTED.'.PHP_EOL;
                        print_r($this->cleanFilter($matches), false);
                        break;
                    }
                }

                // Fourth step.
                // Search platform and details in () from user agent.
                // Platform name type
                // Ubuntu/8.04 hardy
                // Ubuntu/8.04
                // Ubuntu 8.04
                // Ubuntu x64_86
                // Ubuntu
                // U
                foreach ($this->getPlatforms() as $key => $value) {
                    // print_r($key, false);
                    if (preg_match($this->getPatternOfRegExp($key, 'platform'), $cleanUA, $matches) === 1) {
                        echo 'PLATFORM OF WEB BROWSER DETECTED.'.PHP_EOL;

                        // print_r($key, false);
                        // print_r($value, false);
                        // print_r($matches, false);
                        print_r($this->cleanFilter($matches), false);
                        $this->deviceName     = $key;
                        $this->deviceNameFull = implode(' ', array_values($this->cleanFilter($matches)));

                        // $this->deviceNameFull = $this->finalContent($key, $cleanUA);
                        // $this->deviceInfoAll  = (array) $value;
                        // $this->deviceDetails((array) $value);
                        // exit();
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

                // Fifth step.
                // Search device and details in () from user agent.
                // Device name type
                foreach ($this->getDevices() as $key => $value) {
                    // print_r($key, false);
                    if (preg_match($this->getPatternOfRegExp($key, 'device'), $cleanUA, $matches) === 1) {
                        echo 'DEVICE OF WEB BROWSER DETECTED.'.PHP_EOL;

                        // print_r($key, false);
                        // print_r($value, false);
                        print_r($this->cleanFilter($matches), false);
                        $this->deviceName     = $key;
                        $this->deviceNameFull = $this->filter($matches)[0];
                        // print_r($matches, false);
                        // $this->deviceNameFull = $this->finalContent($key, $cleanUA);
                        // $this->deviceInfoAll  = (array) $value;
                        // $this->deviceDetails((array) $value);
                        // exit();
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

        if ($this->matchFound === true) {
            $this->saveUserAgent('solved');
        } else {
            $this->saveUserAgent('unsolved');
        }
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
     * Create pattern of regular expression string for keyword.
     *
     * @param  string $keyword  Keyword string.
     * @param  string $haystack
     * @return string
     * @throws ErrorException Throw exception on error.
     */
    protected function getPatternOfRegExp(string $keyword, string $haystack): string
    {
        //https://www.php.net/manual/en/regexp.reference.subpatterns.php
        //https://regexr.com/
        //https://regex101.com/r/lU4lD5/1

        // print_r($keyword) . PHP_EOL;
        // print_r($haystack). PHP_EOL;
        if ($haystack === 'browser') {
            return match (strtolower($keyword)) {
                // Bot
                //python-requests/2.7.0 ok
                //python-requests/2.2.1 CPython/2.7.6 Linux/4.19.0-13-amd64 ok
                //python-requests/2.6.0 CPython/2.6.6 Linux/2.6.32-754.18.2.el6.x86_64 ok
                //python-requests/2.25.1 fb6 ok

                //Python-urllib 2.7 ok
                //Python-urllib 1.17 ok
                //Python-urllib/3.5 ok
                'python-requests', 'python-urllib'=>'/(?<name>(python-(requests|urllib)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Googlebot
                //Googlebot/2.1
                //Googlebot/2.X
                //Googlebot-Video/1.0
                //Googlebot-Mobile/2.1
                //Googlebot (gocrawl v0.4)
                //Googlebot/Nutch-1.7
                'googlebot'=>'/(?<name>(googlebot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //AhrefsBot/2.1
                'ahrefsbot'=>'/(?<name>(ahrefsbot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //bingbot/2.0
                'bingbot'=>'/(?<name>(bingbot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //yandexbot/3.0
                'yandexbot'=>'/(?<name>(yandexbot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //DotBot/3.0
                'dotbot'=>'/(?<name>(dotbot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Baiduspider/2.0
                'baiduspider'=>'/(?<name>(baiduspider))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Baiduspider/2.0
                'grapeshotcrawler'=>'/(?<name>(grapeshotcrawler))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',














                // Browsers.
                // 1Password/1.2.3. ok
                '1password'=>'/(?<name>(1password))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 007ac9 Crawler ok
                '007ac9 crawler'=>'/(?<name>(007ac9 crawler))/i',
                // 115Browser/8.6.1 ok
                '115browser'=>'/(?<name>(115browser))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 1stBrowser/45.0.2454.160 ok
                '1stbrowser'=>'/(?<name>(1stbrowser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Mb2345Browser/14.2.1 ok
                'mb2345browser'=>'/(?<name>((mb)2345browser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 2345chrome v2.5.0.5031 ok
                // 2345chrome v3.0.0.9739 ok
                '2345chrome'=>'/(?<name>(2345chrome))\s*(?<version>(v)\s*(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 2345Explorer/10.18.0.21318 ok
                // 2345Explorer/10.17.0.21258 ok
                // 2345Explorer 3.5.0.12816 ok
                // 2345Explorer v3.5.0.12816 ok
                // 2345Explorer/B2FC850769D
                // 2345Explorer deprecated
                // Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; 2345Explorer) deprecated
                // Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0; like Gecko; 2345Explorer) deprecated
                // Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; 2345Explorer) deprecated
                // '2345explorer'=>'/(?<name>(2345explorer))\/|\ (?<version>((v)\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)|()\w+)/i',
                '2345explorer'=>'/(?<name>(2345explorer))(?<separator>(\/|\ ))(?<version>((v)\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)|()\w+)/i',
                // 360SE
                '360se'=>'/(?<name>(360se))/i',
                // 37abc/1.6.5.14
                '37abc'=>'/(?<name>(37abc))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 7Star/2.1.62.0
                '7star'=>'/(?<name>(7star))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                 // ABrowse 0.4
                 // ABrowse 0.6
                'abrowse'=>'/(?<name>(abrowse))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                 // acoo browser
                'acoo-browser'=>'/(?<name>(acoo browser))/i',
                // Alienforce/9.0.1
                'alienforce'=>'/(?<name>(alienforce))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 2GDPR/1.2
                '2gdpr'=>'/(?<name>(2gdpr))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                default => throw new ErrorException('Unexpected browser : '.$keyword)
            };//end match
        }//end if

        // Regular expression setting completed.
        if ($haystack === 'rendering_engine') {
            return match (strtolower($keyword)) {
                // Rendering engine of browser.
                // Chrome/91.0.4472.88 Mobile
                'blink'=>'/(?<name>(chrome))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'edgehtml'=>'/(?<name>(edge))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // T5/2.0
                't5'=>'/(?<name>(t5))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // T7/7.4
                // T7/11.11
                't7'=>'/(?<name>(t7))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // AppleWebKit/537.36
                'webkit'=>'/(?<name>(applewebkit))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // KHTML/1.2.3, like Gecko
                'khtml'=>'/(?<name>(khtml))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'goanna'=>'/(?<name>(goanna))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Gecko/1234
                'gecko'=>'/(?<name>(gecko))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // NetFront/1.2
                'netfront'=>'/(?<name>(netfront))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Presto/2.12.423
                'presto'=>'/(?<name>(presto))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // MSIE 5.17
                // MSIE 5.5b1
                'tasman'=>'/(?<name>(msie))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Trident/7.0
                'trident'=>'/(?<name>(trident))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // U2/1.0.0
                'u2'=>'/(?<name>(u2))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // UCBrowser/11.2.0.915
                'u3'=>'/(?<name>(ucbrowser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'servo'=>'/(?<name>(servo))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'libwww-fm'=>'/(?<name>(libwww-fm))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                default => throw new ErrorException('Unexpected browser : '.$keyword)
            };//end match
        }//end if

        if ($haystack === 'application_code') {
            return match (strtolower($keyword)) {
                // Application code of web browsers.
                    'mozilla'=>'/(?<name>(mozilla))\/(?<version>(\d+[.]\d+))/i',
                    default => throw new ErrorException('Unexpected application code : '.$keyword)
            };
        }

        if ($haystack === 'window_manager') {
            return match (strtolower($keyword)) {
                // Window manager of platform.
                'x11'=>'/(?<name>(x11))/i',
                'linux'=>'/(?<name>(linux))/i',
                'win'=>'/(?<name>(win(dows)))/i',
                'cpu'=>'/(?<name>(cpu (os|iphone os)))/i',
                'iphone'=>'/(?<name>(iphone))/i',
                'mac'=>'/(?<name>(mac))/i',
                'android'=>'/(?<name>(android))/i',
                'mobi'=>'/(?<name>(mobi|mobile))/i',
                default => throw new ErrorException('Unexpected window manager : '.$keyword)
            };
        }

        if ($haystack === 'platform') {
            return match (strtolower($keyword)) {
                // Device platform.
                // Mozilla/5.0 (X11; U; AIX 0048013C4C00; en-US; rv:1.0.1) Gecko/20021009 Netscape/7.0
                'aix'=>'/(?<name>(aix))\s*(?<version>\w+)/i',
                // AmigaoS3.1
                // AmigaOS 4.2;
                // AmigaOS 3.9
                // AmigaOs; 4.0;
                // AmigaOS 3.1.2
                // Amiga-AWeb
                // AmigaVoyager/3.4.4
                'amigaos'=>'/(?<name>(amiga(os|voyager(\/)|-aweb)))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Android 10
                // Android 7.0
                // Android 5.1.1
                'android'=>'/(?<name>(android))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // GoogleTV 4.0.4
                // GoogleTV 3.2
                'googletv'=>'/(?<name>(android))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                // CPU OS 11_2_6
                // CPU iPhone OS 12_5_3
                'ios'=>'/(?<name>(cpu (os|iphone os)))\s*(?<version>(\d+[_]\d+[_]\d+)|(\d+[_]\d+)|(\d+))/i',

                // Windows 10
                // Windows NT 10.0;
                // Windows 2000
                // Windows NT 5.0;
                // Win31
                // Windows NT 5.0;
                // Win31
                // Windows NT 5.0;
                'windows 10', 'windows 2000', 'win31', 'win16', 'win32' =>'/(?<name>(windows))\s*(?<version>(nt)\s*(\d+[.]\d+)|(\d+))/i',

                default => throw new ErrorException('Unexpected platform : '.$keyword)
            };//end match
        }//end if

        if ($haystack === 'device') {
            return match (strtolower($keyword)) {
                // Device of platform.
                'iphone'=>'/(?<name>(iphone))/i',
                'mobile'=>'/(?<name>(mobile))/i',
                default => throw new ErrorException('Unexpected device : '.$keyword)
            };
        }//end if

        if ($haystack === 'architecture') {
            // WOW64;
            return '/(?<type>('.$this->quote(strtolower($keyword)).'))/i';
        }//end if

        throw new ErrorException('Unexpected haystack : '.$haystack);
    }//end getPatternOfRegExp()


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
     * Filter array.
     *
     * @param array $array Array data.
     *
     * @return array
     */
    protected function cleanFilter(array $array): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            if (is_string($key) === true) {
                $result[$key] = $value;
            }
        }

        return $result;
    }//end cleanFilter()


    /**
     * Make user agent string lowercase, and replace browser aliases.
     *
     * @param string $string The dirty user agent string.
     *
     * @return string Returns the clean user agent string.
     */
    protected function cleanUserAgentString(string $string): string
    {
        // Clean up the string.
        // $string = strtolower(trim($string));
        $string = trim($string);
        // Replace browser names with their aliases.
        return strtr($string, $this->getKnownBrowserAliases());
    }//end cleanUserAgentString()


    /**
     * Store user agent into a file
     *
     * @param string $category Category name of stored user agent.
     *
     * @return void
     * @throws RuntimeException Throw exception on runtime error.
     */
    private function saveUserAgent(string $category): void
    {
        $allowed = [
            'unsolved',
            'solved',
            'development',
        ];
        if (in_array($category, $allowed) === false) {
            throw new RuntimeException('Unexpected category : '.$category);
        }

        if ($category === 'unsolved') {
            $this->write(self::UNSOLVED_USER_AGENT_LIST_FILE);
        } elseif ($category === 'solved') {
            $this->write(self::SOLVED_USER_AGENT_LIST_FILE);
        } else {
            $this->write(self::USER_AGENT_LIST_FILE);
        }
    }//end saveUserAgent()


    /**
     * Write user agent into file.
     *
     * @param string $filename Stored filename.
     *
     * @return void
     * @throws RuntimeException Throw exception on runtime error.
     */
    private function write(string $filename): void
    {
        // Verify file directory existent.
        $requestedFileDirectory = dirname($filename);

        if (file_exists($requestedFileDirectory) === false) {
            if (mkdir($requestedFileDirectory, 0777, true) === false
                && is_dir($requestedFileDirectory) === false
            ) {
                throw new RuntimeException(sprintf('Directory "%s" was not created', $requestedFileDirectory));
            }

            if (exec('chmod -R 777 '.$requestedFileDirectory) === false) {
                throw new RuntimeException(sprintf('Unable to change permission of "%s"', $requestedFileDirectory));
            }
        }

        // Write or append data into file.
        if (is_writable($requestedFileDirectory) === true) {
            if (file_exists($filename) === true) {
                $resource = fopen($filename, 'rb+');
            } else {
                $resource = fopen($filename, 'wb+');
            }

            $contents = file_get_contents($filename);

            if ($contents === '') {
                $contents .= '"Date", "Client", "User-Agent"'.PHP_EOL;
            }

            // $contents .= sprintf('"%s","%s","%s"', $this->timeOfToday, IP::get(), $this->userAgent).PHP_EOL;
            $contents .= sprintf('"%s","%s","%s"', $this->timeOfToday, '127.0.0.1', $this->userAgent).PHP_EOL;

            if (is_writable($filename) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                exec('chmod -R 777 '.$filename);
            } else {
                throw new RuntimeException('Permission denied. Unable to write or read '.$filename);
            }
        } else {
            throw new RuntimeException('Permission denied. Unable to write or read '.$requestedFileDirectory);
        }//end if
    }//end write()


    /**
     * @param  string $keyword
     * @return array
     */
    public function getBrowserDetails(string $keyword):array
    {
        $result = '';
        if (array_key_exists($keyword, $this->getWebBrowsersList()) === true) {
            $result = $this->getWebBrowsersList()[$keyword];
        } else {
            throw new RuntimeException('Unknown browser : '.$keyword);
        }

        return $result;
    }//end getBrowserDetails()


    /**
     * Retrieve device window manager.
     *
     * @param array|string $array Devices information..
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
}//end class
