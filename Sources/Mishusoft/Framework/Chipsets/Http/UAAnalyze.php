<?php


namespace Mishusoft\Framework\Chipsets\Http;

use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Framework\Chipsets\Exceptions\PermissionRequiredException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use RuntimeException;

class UAAnalyze extends UATable
{
    // Declare version.
    public const VERSION = '1.0.2';


    /**
     * UAAnalyze constructor.
     *
     * @param string $userAgent User agent string from web browser.
     * @param boolean $matchFound
     * @throws JsonException|ErrorException Throw exception when error occurred.
     * @throws PermissionRequiredException|InvalidArgumentException
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
     * @throws PermissionRequiredException
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_LIST_FILE);
                    }
                }

                $this->devicesList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::DEVICES_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::DEVICES_LIST_FILE, _JSON::encodeToString($this->getDevicesList()));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to create '.self::DEVICES_LIST_FILE);
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_ARCHITECTURE_LIST_FILE);
                    }
                }

                $this->devicesArchitectureList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_ARCHITECTURE_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::DEVICES_ARCHITECTURE_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_ARCHITECTURE_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::DEVICES_ARCHITECTURE_LIST_FILE,
                    _JSON::encodeToString($this->getDevicesArchitectureList())
                );
            } else {
                throw new PermissionRequiredException('Permission required. Unable to create '.self::DEVICES_ARCHITECTURE_LIST_FILE);
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_CATEGORY_LIST_FILE);
                    }
                }

                $this->devicesCategoryList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_CATEGORY_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::DEVICES_CATEGORY_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_CATEGORY_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::DEVICES_CATEGORY_LIST_FILE,
                    _JSON::encodeToString($this->getDevicesCategoryList())
                );
            } else {
                throw new PermissionRequiredException('Permission required. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
                    }
                }

                $this->devicesPlatformWMNameList = _JSON::decodeToArray(FileSystem::read(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::DEVICES_PLATFORM_WM_NAME_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::DEVICES_PLATFORM_WM_NAME_LIST_FILE,
                    _JSON::encodeToString($this->getPlatformWmList())
                );
            } else {
                throw new PermissionRequiredException('Permission required. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
                    }
                }

                $this->webBrowserList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::WEB_BROWSER_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::WEB_BROWSER_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(self::WEB_BROWSER_LIST_FILE, _JSON::encodeToString($this->getWebBrowsersList()));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
                    }
                }

                $this->webBrowserAppCodeNameList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_APP_CODE_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::WEB_BROWSER_APP_CODE_LIST_FILE);
            }
        } else {
            if (is_resource(fopen(self::WEB_BROWSER_APP_CODE_LIST_FILE, 'wb+')) === true) {
                FileSystem::saveToFile(
                    self::WEB_BROWSER_APP_CODE_LIST_FILE,
                    _JSON::encodeToString($this->getWebBrowserAppCodeList())
                );
            } else {
                throw new PermissionRequiredException('Permission required. Unable to create '.self::DEVICES_CATEGORY_LIST_FILE);
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
                        throw new PermissionRequiredException('Permission required. Unable to write '.self::DEVICES_PLATFORM_WM_NAME_LIST_FILE);
                    }
                }

                $this->webBrowserLayoutList = _JSON::decodeToArray(FileSystem::read(self::WEB_BROWSER_LAYOUT_LIST_FILE));
            } else {
                throw new PermissionRequiredException('Permission required. Unable to read '.self::WEB_BROWSER_APP_CODE_LIST_FILE);
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
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
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
     * @param string $keyword Keyword string.
     * @param string $haystack
     * @return string
     * @throws InvalidArgumentException
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
                'python-requests', 'python-urllib'=>'/(?<name>(python-(requests|urllib)))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html) ok
                // FeedFetcher-Google; (+http://www.google.com/feedfetcher.html) ok
                // AdsBot-Google (+http://www.google.com/adsbot.html) ok
                // AppEngine-Google; (+http://code.google.com/appengine; appid: s~virustotalcloud) ok
                'apis-google', 'feedfetcher-google', 'adsbot-google', 'appengine-google'=>'/(?<name>((apis|feedfetcher|adsbot|appengine)\-(google|googlebot)))/i',

                // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html) ok
                // Google AdSense (desktop and mobile)
                // Mediapartners-Google ok
                // (Various mobile device types) (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html) ok
                // Google StoreBot (desktop and mobile)
                // Mozilla/5.0 (X11; Linux x86_64; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36  ok
                // Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36 ok
                'duplexweb-google', 'mediapartners-google', 'storebot-google'=>'/(?<name>((duplexweb|mediapartners|storebot)-googlebot))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                // Google AdsBot Mobile Web Android
                // Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html) ok
                // Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html) ok
                // Mobile Apps Android
                // AdsBot-Google-Mobile-Apps  ok
                'adsbot-google-mobile', 'adsbot-google-mobile-apps'=>'/(?<name>(adsbot-google-(mobile(-apps))))/i',


                // Googlebot Desktop
                // Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html) ok
                // Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36 ok
                // Googlebot/2.1 (+http://www.google.com/bot.html) ok

                // Googlebot ok
                // Google-bot ok
                // Googlebot/2.1 ok
                // Googlebot/2.X ok
                // Googlebot-Video/1.0 ok
                // Googlebot-Mobile/2.1 ok
                // Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html) ok
                // Googlebot-Image/1.0 ok
                // Googlebot-Video/1.0 ok
                // Googlebot (gocrawl v0.4) ok
                'googlebot','google-bot','googlebot-image','googlebot-video'=>'/(?<name>(googlebot|google\-bot|googlebot(\-(video|mobile|image))))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                // Googlebot-News ok
                // Google Read Aloud (desktop and mobile) ok
                // google-speakr [Former agent (deprecated)] ok
                // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) ok
                // Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) ok
                // Googlebot Web Light ok
                // Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19 ok
                'googlebot-news', 'google-speakr', 'google-read-aloud', 'googleweblight', 'googlekeep'=>'/(?<name>(google(weblight|keep|((bot)-(news|speakr|read-aloud)))))/i',

                //google favicon ok
                //google talk ok
                'google favicon','google talk'=>'/(?<name>(google\s*(favicon|talk)))/i',

                //google favicon ok
                //google talk ok
                'google chrome'=>'/(?<name>(google\s*chrome))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                // Google ok
                // google.com ok
                // googal ok
                'google','google.com','googal'=>'/(?<name>(googal|google|google(\.com)))/i',

                // Google Web Preview Analytics ok
                // Google PP Default ok
                // google pixel ok
                'google web preview analytics','google pp default','google pixel'=>'/(?<name>(google\s*(web preview analytics|pp default|pixel)))/i',

                // GoogleAdwordsExpress ok
                // GoogleImageProxy ok
                // GoogleDork ok
                'googleadwordsexpress','googleimageproxy','googledork'=>'/(?<name>(google(adwordsexpress|imageproxy|dork)))/i',



                // google-cloud-sdk
                // Google-Pwa-Bot
                // Google-Ads-Creatives-Assistant
                // Google-Adwords-Instant
                // Google-Adwords-express
                // Google-Adwords-DisplayAds
                // Google-Adwords-DisplayAds-WebRender
                // Google-Apps-Script
                // Google-AMPHTML
                // Google-Cloud-ML-Vision
                'google-cloud-sdk','google-pwa-bot','google-ads-creatives-assistant','google-adwords-instant','google-adwords-express','google-adwords-displayads','google-adwords-displayads-webrender','google-apps-script','google-amphtml','google-cloud-ml-vision'=>'/(?<name>(google\-(adwords\-(instant|express|displayAds|displayAds\-webrender))|(cloud-sdk|pwa-bot|ads-creatives-assistant|apps\-script|amphtml|cloud\-ml\-vision)))/i',


                //Go 1.1 package http ok
                //Go-http-client/1.1 [ip:213.32.4.95] ok
                //Mozilla/5.0 (compatible; Go-http-client/1.1; +centurybot9@gmail.com) ok
                'go-http-client'=>'/(?<name>(go|go(\-http\-client)))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                //GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default) ok
                // GoogleAuth/1.4 (U520AS QP1A.190711.020); gzip,gzip(gfe),gzip(gfe) ok
                // GoogleLoginService/1.3 (sugar-aums JDQ39),gzip(gfe),gzip(gfe) ok
                'googleearth', 'googleauth', 'googleloginservice'=>'/(?<name>(google(earth|auth|loginservice)))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                //GoogleStackdriverMonitoring-UptimeChecks(https://cloud.google.com/monitoring) ok
                'googlestackdrivermonitoring-uptimechecks'=>'/(?<name>(googlestackdrivermonitoring-uptimechecks))/i',


                // Nutch-1.7 //PENDING
                'nutch'=>'/(?<name>(nutch))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //AhrefsBot/2.1
                'ahrefsbot'=>'/(?<name>(ahrefsbot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //curl/7.69.1
                'curl'=>'/(?<name>(curl))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                //PHP/7.3.66
                //PHP/6.2.61
                //PHP/6.3.03
                //PHP/7.2.68
                //PHP/7.3.64
                //PHP/6.3.35
                //PHP/6.2.29
                //PHP/7.3.81
                //PHP/7.2.35
                //PHP/6.2.37
                //php-requests/1.7
                //PHP-Curl-Class/4.13.0
                'php','php-requests','php-curl-class'=>'/(?<name>(php|php\-(requests|curl\-class)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //BOT-NAME/VERSION
                //startmebot/1.0;
                //DotBot/3.0
                //AlphaBot/3.2
                //SemrushBot/1.2~bl
                'startmebot','dotbot','alphabot','semrushbot'=>'/(?<name>((startme|dot|alpha|semrush)bot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //bingbot/2.0
                //BingPreview/1.0b
                'bingbot','bingpreview'=>'/(?<name>(bing(bot|preview)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //yandexbot/3.0
                //YandexImages/3.0
                'yandexbot','yandeximages'=>'/(?<name>(yandex(bot|images)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Mail.RU_Bot/2.0;
                //Mail.RU_Bot/Fast/2.0
                //Mail.RU_Bot/Favicons/2
                //Mail.RU_Bot/Robots/2.0; +http://go.mail.ru/help/robots)
                //Mail.RU_Bot/Img/2.0;
                'mail.ru_bot','mail.ru_bot/fast','mail.ru_bot/favicons','mail.ru_bot/robots','mail.ru_bot/img'=>'/(?<name>(mail.ru_(bot\/(fast|favicons|robots|img)|bot)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Baiduspider/2.0
                //grapeshotcrawler/2.0
                //NetcraftSurveyAgent/1.0
                // 2GDPR/1.2
                //coccocbot-web/1.0
                //Mozilla/5.0 (compatible; Abonti/0.91 - http://www.abonti.com)
                'baiduspider','grapeshotcrawler','netcraftsurveyagent','2gdpr','coccocbot-web','abonti'=>'/(?<name>(2gdpr|baiduspider|grapeshotcrawler|netcraftsurveyagent|abonti))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //BOT-NAME
                // 007ac9 Crawler ok
                // Sistrix Crawler ok
                // proximic ok
                // ZmEu ok
                //    12345 MRA 5.4 (build 02647);
                //    123456111 SEB/3.0.1 (x64)
                //    12345'\x22\x5C'\x5C\x22);|]*%00{%0d%0a<%00>%bf%27'\xF0\x9F\x92\xA9
                //    12345
                //360Spider(compatible; HaosouSpider; http://www.haosou.com/help/help_3_2.html)
                //360Spider
                //A1 Website Analyzer
                //Ace Explorer
                '007ac9 crawler','sistrix crawler','proximic','zmeu','12345','360spider','a1 website analyzer','ace explorer'=>'/(?<name>(sistrix|(007ac9|sistrix)\s*crawler|proximic|zmeu|12345|360spider|a1\s+website\s+analyzer|ace\s+explorer))/i',



                //    A6-Indexer/1.0 (http://www.a6corp.com/a6-web-scraping-policy/)
                //    A6-Indexer
                'a6-indexer'=>'/(?<name>(a6\-indexer))(?<separator>(\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //    Acoon v4.9.5 (www.acoon.de)
                //    Acoon v4.10.1 (www.acoon.de)
                //    Mozilla/5.0 (compatible; AcoonBot/4.12.1; +http://www.acoon.de/robot.asp)
                'AcoonBot'=>'/(?<name>(AcoonBot))\s*(?<version>(v)\s*(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',











                // Browsers.
                // 1Password/1.2.3. ok
                '1password'=>'/(?<name>(1password))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
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
                default => throw new InvalidArgumentException('Unexpected browser : '.$keyword)
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
                default => throw new InvalidArgumentException('Unexpected browser : '.$keyword)
            };//end match
        }//end if

        if ($haystack === 'application_code') {
            return match (strtolower($keyword)) {
                // Application code of web browsers.
                    'mozilla'=>'/(?<name>(mozilla))\/(?<version>(\d+[.]\d+))/i',
                    default => throw new InvalidArgumentException('Unexpected application code : '.$keyword)
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
                default => throw new InvalidArgumentException('Unexpected window manager : '.$keyword)
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
                'googletv'=>'/(?<name>(googletv))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

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

                default => throw new InvalidArgumentException('Unexpected platform : '.$keyword)
            };//end match
        }//end if

        if ($haystack === 'device') {
            return match (strtolower($keyword)) {
                // Device of platform.
                'iphone'=>'/(?<name>(iphone))/i',
                'mobile'=>'/(?<name>(mobile))/i',
                default => throw new InvalidArgumentException('Unexpected device : '.$keyword)
            };
        }//end if

        if ($haystack === 'architecture') {
            // WOW64;
            return '/(?<type>('.$this->quote(strtolower($keyword)).'))/i';
        }//end if

        throw new InvalidArgumentException('Unexpected haystack : '.$haystack);
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
     * @throws PermissionRequiredException
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
     * @throws PermissionRequiredException
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
                throw new PermissionRequiredException(sprintf('Unable to change permission of "%s"', $requestedFileDirectory));
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
                $contents .= "'Date', 'Client', 'User-Agent'".PHP_EOL;
            }

            // $contents .= sprintf('"%s","%s","%s"', $this->timeOfToday, IP::get(), $this->userAgent).PHP_EOL;
            $contents .= sprintf("'%s','%s','%s'", $this->timeOfToday, '127.0.0.1', $this->userAgent).PHP_EOL;

            if (is_writable($filename) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                exec('chmod -R 777 '.$filename);
            } else {
                throw new PermissionRequiredException('Permission required. Unable to write or read '.$filename);
            }
        } else {
            throw new PermissionRequiredException('Permission required. Unable to write or read '.$requestedFileDirectory);
        }//end if
    }//end write()


    /**
     * @param string $keyword
     * @return array
     * @throws InvalidArgumentException
     */
    public function getBrowserDetails(string $keyword):array
    {
        if (array_key_exists($keyword, $this->getWebBrowsersList()) === true) {
            $result = $this->getWebBrowsersList()[$keyword];
        } else {
            throw new InvalidArgumentException('Unknown browser : '.$keyword);
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
