<?php

// another library : https://github.com/lancedikson/bowser


namespace Mishusoft\Http;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;

class UAAnalyzer extends UAAnalyzer\UAAnalyzerBase
{
    private UAAnalyzer\IdentifiersCollection $identifiers;
    private UAAnalyzer\PatternsCollection $patterns;
    private UAAnalyzer\InformationCollection $resources;

    private int $timeOfExecution;

    /**
     * UAAnalyze constructor.
     *
     * @param string $userAgent User agent string from web browser.
     * @param boolean $matchFound
     * @throws RuntimeException
     */
    public function __construct(
        public string $userAgent,
        private bool $matchFound = false
    ) {
        parent::__construct();
        $this->timeOfExecution = time();
        $this->identifiers = new UAAnalyzer\IdentifiersCollection();
        $this->patterns = new UAAnalyzer\PatternsCollection();
        $this->resources = new UAAnalyzer\InformationCollection();
    }//end __construct()


    /**
     * Analyze
     *
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \JsonException
     */
    public function analyze(): static
    {
        $this->collectUA('development');
        $cleanUA = $this->cleanUA($this->userAgent, $this->identifiers->browsers->knownBrowserAliases());
        $webBrowserIdentifiers = $this->identifiers->browsers->all();
        foreach ($webBrowserIdentifiers as $identifier) {
            if (preg_match($this->patterns->browsers->match($identifier), $cleanUA, $matches) === 1) {
                $this->matchFound = true;
                $details = $this->cleanFilter($matches);
                $this->browserNameFull = $this->cleanImplode($details);
                if (array_key_exists('version', $details) === true) {
                    $this->browserVersionFull = $details['version'];
                    $this->browserVersion = $this->versionOrigin($details['version']);
                }
                $browserDetails = $this->resources->browsers->makeDetails($identifier);
                $this->browserName = ucfirst($browserDetails['name']);
                $this->browserType = $browserDetails['type'];
                $this->browserUi = $browserDetails['ui'];
                $this->browserDetails = $browserDetails;

                // Second step.
                // Detecting app parents of web browser from user agent.
                foreach ($this->identifiers->browsers->compatibilitiesAll() as $compatible) {
                    if (preg_match($this->patterns->browsers->compatibility($compatible), $cleanUA, $matches) === 1) {
                        $details = $this->cleanFilter($matches);
                        $this->browserAppCodeName = $details['name'];
                        $this->browserAppCodeVersion = $this->versionOrigin($details['version']);
                        $this->browserAppCodeVersionFull = $details['version'];
                        break;
                    }
                }//end foreach

                // Third step.
                // Detecting rendering engine from user agent.
                foreach ($this->identifiers->browsers->browserEnginesAll() as $engine) {
                    if (preg_match($this->patterns->browsers->browserEngine($engine), $cleanUA, $matches) === 1) {
                        $details = $this->cleanFilter($matches);
                        $this->browserEngineName = $details['name'];
                        $this->browserEngineNameFull = $this->cleanImplode($details);
                        $this->browserEngineVersion = $this->versionOrigin($details['version']);
                        $this->browserEngineVersionFull = $this->cleanContent($details['version']);
                        break;
                    }
                }

                // Fourth step.
                // Detecting platform and device architecture from user agent.
                foreach (array_reverse($this->identifiers->platforms->architecturesAll()) as $architecture => $word) {
                    if (preg_match($this->patterns->platforms->architecture($architecture), $cleanUA, $matches) === 1) {
                        $this->browserArchitecture = $word;
                        $this->platformArchitecture = $word;
                        break;
                    }
                }

                // Sixth step.
                // Search window manager name and type from user agent.
                foreach ($this->identifiers->platforms->windowManagers() as $windowManager) {
                    if (preg_match($this->patterns->platforms->windowManager($windowManager), $cleanUA, $matches) === 1) {
                        $details = $this->cleanFilter($matches);
                        $browserDetails = $this->resources->platforms->makeWMDetails($windowManager);
                        $this->platformWindowManager = $browserDetails['type'];
                        $this->platformWmNameOriginal = $this->cleanImplode($details);
                        break;
                    }
                }

                // Seventh step.
                // Detecting platform details in () from user agent.
                // Platform name type
                // Ubuntu/8.04 hardy
                // Ubuntu/8.04
                // Ubuntu 8.04
                // Ubuntu x64_86
                // Ubuntu
                // U
                //foreach ($this->identifiers->platforms->all() as $key => $value) {
                //print_r($this->identifiers->platforms->nameAll(),false);
                foreach ($this->identifiers->platforms->nameAll() as $nameIdentifier) {
                    //print_r($nameIdentifier, false);
                    // print_r($this->patterns->platforms->name($nameIdentifier), false);
                    //print_r($value, false);
                    // if (preg_match($this->patterns->devices->platforms($name), $cleanUA, $matches) === 1) {
                    if (preg_match($this->patterns->platforms->name($nameIdentifier), $cleanUA, $matches) === 1) {
                        $details = $this->cleanFilter($matches);
                        //print_r($details['version'], false);
                        //echo 'PLATFORM OF WEB BROWSER DETECTED.'.PHP_EOL;
                        $this->platformDetails = $this->resources->platforms->platformDetails($nameIdentifier);
                        $this->platformName = $this->platformDetails['name'];

                        if (strtolower($details['name']) === 'windows') {
                            $this->platformKernel = $this->cleanImplode($this->cleanFilter($matches));
                            $this->platformVersion = $this->versionOrigin($details['version']);
                            $this->platformNameFull = sprintf(
                                '%s %s',
                                $this->platformDetails['OS family'],
                                $this->ntToVersion($details['version'])
                            );
                        } else {
                            $this->platformNameFull = $this->cleanImplode($this->cleanFilter($matches));
                        }

                        // print_r($key, false);
                        // print_r($value, false);
                        //print_r($details, false);
                        //$this->platformName = $nameIdentifier;
                        //print_r($this->resources->platforms->getName($nameIdentifier), false);
                        //$this->platformKernel = $this->cleanImplode($this->cleanFilter($matches));
                        //$this->platformVersion = $this->cleanImplode($this->cleanFilter($matches));

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


                // Eighth step.
                // Detecting device details from user agent.
                // Device name type
                foreach ($this->identifiers->devices->all() as $device) {
                    if (preg_match($this->patterns->devices->match($device), $cleanUA, $matches) === 1) {
                        $details = $this->cleanFilter($matches);
                        $this->deviceDetails = $this->resources->devices->makeDetails($device);
                        $this->deviceName = $this->deviceDetails['name'];
                        $this->deviceNameFull = $details['name'];
                        break;
                    }//end if
                }//end foreach

                break;
            }//end if
        }//end foreach

        //echo PHP_EOL . PHP_EOL;

        if ($this->matchFound === true) {
            $this->collectUA('solved');
        } else {
            $this->collectUA('unsolved');
        }

        return $this;
    }//end analyze()

    public function details(): array
    {
        if ($this->matchFound === true) {
            unset(
                $this->browserDetails['name'],
                $this->browserDetails['ui'],
                $this->browserDetails['type'],
                $this->platformDetails['name']
            );
            return array(
                'ua' => $this->userAgent,
                'solved' => $this->matchFound,
                'time' => $this->timeOfExecution,
                'browser' => array_merge_recursive(
                    array(
                        'name' => $this->browserName,
                        'name-version' => $this->browserNameFull,
                        'version' => $this->browserVersion,
                        'version-full' => $this->browserVersionFull,
                        'architecture' => $this->browserArchitecture,
                        'type' => $this->browserType,
                        'ui' => $this->browserUi,
                        'compatibility' => array(
                            'name' => $this->browserAppCodeName,
                            'version' => $this->browserAppCodeVersion,
                            'version-full' => $this->browserAppCodeVersionFull,
                        ),
                        'engine' => array(
                            'name' => $this->browserEngineName,
                            'name-full' => $this->browserEngineNameFull,
                            'version' => $this->browserEngineVersion,
                            'version-full' => $this->browserEngineVersionFull,
                        )
                    ),
                    $this->browserDetails,
                ),
                'device' => $this->deviceDetails,
                'platform' => array_merge_recursive(
                    array(
                        'name' => $this->platformName,
                        'name-full' => $this->platformNameFull,
                        'architecture' => $this->platformArchitecture,
                        'window-manager' => array(
                            'name' => $this->platformWindowManager,
                            'name-detected' => $this->platformWmNameOriginal,
                        ),
                    ),
                    $this->platformDetails
                )
            );
        }

        return array(
            'ua' => $this->userAgent,
            'solved' => $this->matchFound,
            'time' => $this->timeOfExecution,
        );
    }

    /**
     * @return string
     */
    public function getBrowserAppCodeName(): string
    {
        return $this->browserAppCodeName;
    }

    /**
     * @return string
     */
    public function getBrowserAppCodeVersion(): string
    {
        return $this->browserAppCodeVersion;
    }

    /**
     * @return string
     */
    public function getBrowserArchitecture(): string
    {
        return $this->browserArchitecture;
    }

    /**
     * @return string
     */
    public function getBrowserEngineName(): string
    {
        return $this->browserEngineName;
    }

    /**
     * @return string
     */
    public function getBrowserEngineNameFull(): string
    {
        return $this->browserEngineNameFull;
    }

    /**
     * @return string
     */
    public function getBrowserEngineVersion(): string
    {
        return $this->browserEngineVersion;
    }


    /**
     * @return string
     */
    public function getBrowserName(): string
    {
        return $this->browserName;
    }

    /**
     * @return string
     */
    public function getBrowserNameFull(): string
    {
        return $this->browserNameFull;
    }

    /**
     * @return string
     */
    public function getBrowserVersion(): string
    {
        return $this->browserVersion;
    }

    /**
     * @return string
     */
    public function getBrowserVersionFull(): string
    {
        return $this->browserVersionFull;
    }

    /**
     * @return string
     */
    public function getDeviceName(): string
    {
        return $this->deviceName;
    }

    /**
     * @return string
     */
    public function getDeviceNameFull(): string
    {
        return $this->deviceNameFull;
    }

    /**
     * @return string
     */
    public function getDeviceType(): string
    {
        return $this->deviceType;
    }

    /**
     * @return string
     */
    public function getUserAgent(): string
    {
        return $this->userAgent;
    }

    /**
     * @return string
     */
    public function getPlatformName(): string
    {
        return $this->platformName;
    }

    /**
     * @return string
     */
    public function getPlatformNameFull(): string
    {
        return $this->platformNameFull;
    }

    /**
     * @return string
     */
    public function getPlatformArchitecture(): string
    {
        return $this->platformArchitecture;
    }

    /**
     * @return string
     */
    public function getPlatformWindowManager(): string
    {
        return $this->platformWindowManager;
    }

    /**
     * @return string
     */
    public function getPlatformWmNameOriginal(): string
    {
        return $this->platformWmNameOriginal;
    }

    /**
     * @return int
     */
    public function getTimeOfExecution(): int
    {
        return $this->timeOfExecution;
    }

    /**
     * @return string
     */
    public function getBrowserAppCodeVersionFull(): string
    {
        return $this->browserAppCodeVersionFull;
    }

    /**
     * @return mixed
     */
    public function getBrowserType(): mixed
    {
        return $this->browserType;
    }

    /**
     * @return mixed
     */
    public function getBrowserUi(): mixed
    {
        return $this->browserUi;
    }


    /**
     * Create pattern of regular expression string for keyword.
     *
     * @param string $keyword Keyword string.
     * @param string $haystack
     * @return string
     * @throws InvalidArgumentException
     * @throws RuntimeException
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
                //'python-requests', 'python-urllib'=>'/(?<name>(python-(requests|urllib)))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'python-requests', 'python-urllib' => $this->makePattern('(python\-(requests|urllib))', true, true),


                // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html) ok
                // FeedFetcher-Google; (+http://www.google.com/feedfetcher.html) ok
                // AdsBot-Google (+http://www.google.com/adsbot.html) ok
                // AppEngine-Google; (+http://code.google.com/appengine; appid: s~virustotalcloud) ok
                //'apis-google', 'feedfetcher-google', 'adsbot-google', 'appengine-google'=>'/(?<name>((apis|feedfetcher|adsbot|appengine)\-(google|googlebot)))/i',
                'apis-google', 'feedfetcher-google', 'adsbot-google', 'appengine-google' => $this->makePattern('((apis|feedfetcher|adsbot|appengine)\-(google|googlebot))', false, false),

                // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html) ok
                // Google AdSense (desktop and mobile)
                // Mediapartners-Google ok
                // (Various mobile device types) (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html) ok
                // Google StoreBot (desktop and mobile)
                // Mozilla/5.0 (X11; Linux x86_64; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36  ok
                // Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36 ok
                //'duplexweb-google', 'mediapartners-google', 'storebot-google'=>'/(?<name>((duplexweb|mediapartners|storebot)-googlebot))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'duplexweb-google', 'mediapartners-google', 'storebot-google' => $this->makePattern('((duplexweb|mediapartners|storebot)\-google)', true, true),


                // Google AdsBot Mobile Web Android
                // Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html) ok
                // Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html) ok
                // Mobile Apps Android
                // AdsBot-Google-Mobile-Apps  ok
                //'adsbot-google-mobile', 'adsbot-google-mobile-apps'=>'/(?<name>(adsbot-google-(mobile(-apps))))/i',
                'adsbot-google-mobile', 'adsbot-google-mobile-apps' => $this->makePattern('(adsbot\-google\-(mobile|mobile\-apps))', false, false),


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
                'googlebot', 'google-bot', 'googlebot-image', 'googlebot-video' => '/(?<name>(googlebot|google\-bot|googlebot(\-(video|mobile|image))))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                // Googlebot-News ok
                // Google Read Aloud (desktop and mobile) ok
                // google-speakr [Former agent (deprecated)] ok
                // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) ok
                // Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) ok
                // Googlebot Web Light ok
                // Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19 ok
                'googlebot-news', 'google-speakr', 'google-read-aloud', 'googleweblight', 'googlekeep' => '/(?<name>(google(weblight|keep|((bot)-(news|speakr|read-aloud)))))/i',

                //google favicon ok
                //google talk ok
                'google favicon', 'google talk' => '/(?<name>(google\s*(favicon|talk)))/i',

                //google favicon ok
                //google talk ok
                'google chrome' => '/(?<name>(google\s*chrome))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                // Google ok
                // google.com ok
                // googal ok
                'google', 'google.com', 'googal' => '/(?<name>(googal|google|google(\.com)))/i',

                // Google Web Preview Analytics ok
                // Google PP Default ok
                // google pixel ok
                'google web preview analytics', 'google pp default', 'google pixel' => '/(?<name>(google\s*(web preview analytics|pp default|pixel)))/i',

                // GoogleAdwordsExpress ok
                // GoogleImageProxy ok
                // GoogleDork ok
                'googleadwordsexpress', 'googleimageproxy', 'googledork' => '/(?<name>(google(adwordsexpress|imageproxy|dork)))/i',


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
                'google-cloud-sdk', 'google-pwa-bot', 'google-ads-creatives-assistant', 'google-adwords-instant', 'google-adwords-express', 'google-adwords-displayads', 'google-adwords-displayads-webrender', 'google-apps-script', 'google-amphtml', 'google-cloud-ml-vision' => '/(?<name>(google\-(adwords\-(instant|express|displayAds|displayAds\-webrender))|(cloud-sdk|pwa-bot|ads-creatives-assistant|apps\-script|amphtml|cloud\-ml\-vision)))/i',


                //Go 1.1 package http ok
                //Go-http-client/1.1 [ip:213.32.4.95] ok
                //Mozilla/5.0 (compatible; Go-http-client/1.1; +centurybot9@gmail.com) ok
                'go-http-client' => '/(?<name>(go|go(\-http\-client)))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                //GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default) ok
                // GoogleAuth/1.4 (U520AS QP1A.190711.020); gzip,gzip(gfe),gzip(gfe) ok
                // GoogleLoginService/1.3 (sugar-aums JDQ39),gzip(gfe),gzip(gfe) ok
                'googleearth', 'googleauth', 'googleloginservice' => '/(?<name>(google(earth|auth|loginservice)))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                //GoogleStackdriverMonitoring-UptimeChecks(https://cloud.google.com/monitoring) ok
                'googlestackdrivermonitoring-uptimechecks' => '/(?<name>(googlestackdrivermonitoring-uptimechecks))/i',


                // Nutch-1.7 //PENDING
                'nutch' => '/(?<name>(nutch))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //AhrefsBot/2.1
                'ahrefsbot' => '/(?<name>(ahrefsbot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //curl/7.69.1
                'curl' => '/(?<name>(curl))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


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
                'php', 'php-requests', 'php-curl-class' => '/(?<name>(php|php\-(requests|curl\-class)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //BOT-NAME/VERSION
                //startmebot/1.0;
                //DotBot/3.0
                //AlphaBot/3.2
                //SemrushBot/1.2~bl
                'startmebot', 'dotbot', 'alphabot', 'semrushbot' => '/(?<name>((startme|dot|alpha|semrush)bot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //bingbot/2.0
                //BingPreview/1.0b
                'bingbot', 'bingpreview' => '/(?<name>(bing(bot|preview)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //yandexbot/3.0
                //YandexImages/3.0
                'yandexbot', 'yandeximages' => '/(?<name>(yandex(bot|images)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Mail.RU_Bot/2.0;
                //Mail.RU_Bot/Fast/2.0
                //Mail.RU_Bot/Favicons/2
                //Mail.RU_Bot/Robots/2.0; +http://go.mail.ru/help/robots)
                //Mail.RU_Bot/Img/2.0;
                'mail.ru_bot', 'mail.ru_bot/fast', 'mail.ru_bot/favicons', 'mail.ru_bot/robots', 'mail.ru_bot/img' => '/(?<name>(mail.ru_(bot\/(fast|favicons|robots|img)|bot)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //Baiduspider/2.0
                //grapeshotcrawler/2.0
                //NetcraftSurveyAgent/1.0
                // 2GDPR/1.2
                //coccocbot-web/1.0
                //Mozilla/5.0 (compatible; Abonti/0.91 - http://www.abonti.com)
                'baiduspider', 'grapeshotcrawler', 'netcraftsurveyagent', '2gdpr', 'coccocbot-web', 'abonti' => '/(?<name>(2gdpr|baiduspider|grapeshotcrawler|netcraftsurveyagent|abonti))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

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
                '007ac9 crawler', 'sistrix crawler', 'proximic', 'zmeu', '12345bot', '360spider', 'a1 website analyzer', 'ace explorer', 'activerefresh' => '/(?<name>(sistrix|(007ac9|sistrix)\s*crawler|proximic|zmeu|12345|360spider|a1\s+website\s+analyzer|ace\s+explorer|activerefresh))/i',


                //    A6-Indexer/1.0 (http://www.a6corp.com/a6-web-scraping-policy/)
                //    A6-Indexer
                //        ActiveWorlds/3.xx (xxx)
                //    Activeworlds
                'a6-indexer', 'activeworlds' => '/(?<name>(a6\-indexer|activeworlds))(?<separator>(\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                //    Acoon v4.9.5 (www.acoon.de)
                //    Acoon v4.10.1 (www.acoon.de)
                //    Mozilla/5.0 (compatible; AcoonBot/4.12.1; +http://www.acoon.de/robot.asp)
                'acoonbot' => '/(?<name>(aco(on|onbot)))(?<separator>(\s*|\/))(?<version>(v)\s*(\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                //'acoonbot-test'=>sprintf('/(?<name>(AcoonBot))\s*(?<version>%s)/i', '(v)\s*(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)'),

                //    ActiveBookmark 1.x
                'activebookmark' => '/(?<name>(activebookmark))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                //? Pending

                //    Ad Muncher
                //    Ad Muncher v4.94.34121
                //    Ad Muncher YB/3.5.1
                //    Ad Muncher v4.94.34121/7137 (Free)
                'ad muncher' => '/(?<name>(ad muncher))(?<separator>(\s*|\/))(?<version>(v|y)\s*(\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',


                // Browsers.
                // 1Password/1.2.3. ok
                '1password' => '/(?<name>(1password))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 115Browser/8.6.1 ok
                '115browser' => '/(?<name>(115browser))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 1stBrowser/45.0.2454.160 ok
                '1stbrowser' => '/(?<name>(1stbrowser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Mb2345Browser/14.2.1 ok
                'mb2345browser' => '/(?<name>((mb)2345browser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 2345chrome v2.5.0.5031 ok
                // 2345chrome v3.0.0.9739 ok
                '2345chrome' => '/(?<name>(2345chrome))\s*(?<version>(v)\s*(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
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
                '2345explorer' => '/(?<name>(2345explorer))(?<separator>(\/|\ ))(?<version>((v)\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)|()\w+)/i',
                // 360SE
                '360se' => '/(?<name>(360se))/i',
                // 37abc/1.6.5.14
                '37abc' => '/(?<name>(37abc))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // 7Star/2.1.62.0
                '7star' => '/(?<name>(7star))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // ABrowse 0.4
                // ABrowse 0.6
                'abrowse' => '/(?<name>(abrowse))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // acoo browser
                'acoo-browser' => '/(?<name>(acoo browser))/i',
                // Alienforce/9.0.1
                'alienforce' => '/(?<name>(alienforce))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                default => throw new InvalidArgumentException('Unexpected browser : ' . $keyword)
            };//end match
        }//end if

        if ($haystack === 'application_code') {
            return match (strtolower($keyword)) {
                // Application code of web browsers.
                'ncsa_mosaic' => '/(?<name>(ncsa\_mosaic))(?<separator>(\s*|\/|\:))(?<version>(\d+[.]\d+))/i',
                'mozilla' => '/(?<name>(mozilla))(?<separator>(\s*|\/|\:))(?<version>(\d+[.]\d+))/i',
                default => throw new InvalidArgumentException('Unexpected browser parent : ' . $keyword)
            };
        }

        // Regular expression setting completed.
        if ($haystack === 'rendering_engine') {
            return match (strtolower($keyword)) {
                // Rendering engine of browser.
                // Chrome/91.0.4472.88 Mobile
                'blink' => '/(?<name>(chrome))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'edgehtml' => '/(?<name>(edge))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // T5/2.0
                't5' => '/(?<name>(t5))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // T7/7.4
                // T7/11.11
                't7' => '/(?<name>(t7))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // AppleWebKit/537.36
                'webkit' => '/(?<name>(applewebkit))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // KHTML/1.2.3, like Gecko
                'khtml' => '/(?<name>(khtml))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'goanna' => '/(?<name>(goanna))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Gecko/1234
                'gecko' => '/(?<name>(gecko))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // NetFront/1.2
                'netfront' => '/(?<name>(netfront))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Presto/2.12.423
                'presto' => '/(?<name>(presto))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // MSIE 5.17
                // MSIE 5.5b1
                'tasman' => '/(?<name>(msie))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Trident/7.0
                'trident' => '/(?<name>(trident))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // U2/1.0.0
                'u2' => '/(?<name>(u2))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // UCBrowser/11.2.0.915
                'u3' => '/(?<name>(ucbrowser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'servo' => '/(?<name>(servo))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                'libwww-fm' => '/(?<name>(libwww-fm))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                default => throw new InvalidArgumentException('Unexpected browser : ' . $keyword)
            };//end match
        }//end if

        // Regular expression setting completed.
        if ($haystack === 'window_manager') {
            return match (strtolower($keyword)) {
                // Window manager of platform.
                'x11' => '/(?<name>(x11))/i',
                'linux' => '/(?<name>(linux))/i',
                'win' => '/(?<name>(win(dows)))/i',
                'cpu' => '/(?<name>(cpu (os|iphone os)))/i',
                'iphone' => '/(?<name>(iphone))/i',
                'mac' => '/(?<name>(mac))/i',
                'android' => '/(?<name>(android))/i',
                'mobi' => '/(?<name>(mobi|mobile))/i',
                default => throw new InvalidArgumentException('Unexpected window manager : ' . $keyword)
            };
        }


        if ($haystack === 'platform') {
            return match (strtolower($keyword)) {
                // Device platform.
                // Mozilla/5.0 (X11; U; AIX 0048013C4C00; en-US; rv:1.0.1) Gecko/20021009 Netscape/7.0
                'aix' => '/(?<name>(aix))\s*(?<version>\w+)/i',
                // AmigaoS3.1
                // AmigaOS 4.2;
                // AmigaOS 3.9
                // AmigaOs; 4.0;
                // AmigaOS 3.1.2
                // Amiga-AWeb
                // AmigaVoyager/3.4.4
                'amigaos' => '/(?<name>(amiga(os|voyager(\/)|-aweb)))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // Android 10
                // Android 7.0
                // Android 5.1.1
                'android' => '/(?<name>(android))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
                // GoogleTV 4.0.4
                // GoogleTV 3.2
                'googletv' => '/(?<name>(googletv))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',

                // CPU OS 11_2_6
                // CPU iPhone OS 12_5_3
                'ios' => '/(?<name>(cpu (os|iphone os)))\s*(?<version>(\d+[_]\d+[_]\d+)|(\d+[_]\d+)|(\d+))/i',

                // Windows 10
                // Windows NT 10.0;
                // Windows 2000
                // Windows NT 5.0;
                // Win31
                // Windows NT 5.0;
                // Win31
                // Windows NT 5.0;
                'windows 10', 'windows 2000', 'win31', 'win16', 'win32' => '/(?<name>(windows))\s*(?<version>(nt)\s*(\d+[.]\d+)|(\d+))/i',

                default => throw new InvalidArgumentException('Unexpected platform : ' . $keyword)
            };//end match
        }//end if

        if ($haystack === 'device') {
            return match (strtolower($keyword)) {
                // Device of platform.
                'iphone' => '/(?<name>(iphone))/i',
                'mobile' => '/(?<name>(mobile))/i',
                default => throw new InvalidArgumentException('Unexpected device : ' . $keyword)
            };
        }//end if

        if ($haystack === 'architecture') {
            // WOW64;
            return '/(?<type>(' . $this->quote(strtolower($keyword)) . '))/i';
        }//end if

        throw new InvalidArgumentException('Unexpected haystack : ' . $haystack);
    }//end getPatternOfRegExp()


}//end class
