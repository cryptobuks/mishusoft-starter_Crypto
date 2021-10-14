<?php


namespace Mishusoft\Http\UAAnalyzer\InformationCollection;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class BrowsersInformationCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function all():array
    {
        return $this->extractAttributeRecursive(
            'browsers',
            [
                'bots','applications','email-clients',
                'feed-readers','multimedia-players',
                'offline-browsers','tools','browsers',
            ],
            'info-only'
        );
    }


    /**
     * @param string $identifier
     * @return array
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function makeDetails(string $identifier): array
    {
        if (array_key_exists($identifier, $this->all()) === true) {
            return $this->all()[$identifier];
        }
        //return array();
        throw new InvalidArgumentException(sprintf('Unexpected browser : "%s"', $identifier));
    }



    /**
     * Identifiers collection of Bot/Crawler
     *
     * @return array
     */
    public function botCrawlers(): array
    {
        return array_merge_recursive(
            $this->getDetailsOfBotCrawlerGroup(
                [
                    '007ac9 crawler' => '007ac9 Crawler',
                    'Sistrix Crawler' => 'Sistrix Crawler',
                ],
                'Sistrix',
                'https://crawler.007ac9.net'
            ),
            $this->getDetailsOfBotCrawler(
                '12345Bot',
                '12345 Bot',
                'Unknown',
                'Unknown'
            ),
            $this->getDetailsOfBotCrawler(
                '2gdpr',
                '2gdpr Bot',
                '2gdpr',
                'https://2gdpr.com'
            ),
            //Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0); 360Spider(compatible; HaosouSpider; http://www.haosou.com/help/help_3_2.html)
            //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.2.2661.102 Safari/537.36; 360Spider
            $this->getDetailsOfBotCrawler(
                '360Spider',
                '360Spider',
                'Qihoo 360 Technology Co. Ltd',
                'https://www.360.cn/about/englishversion.html'
            ),
            $this->getDetailsOfBotCrawler(
                'A1 Website Analyzer',
                'A1 Website Analyzer',
                'Microsys',
                'https://www.microsystools.com/products/website-analyzer/'
            ),
            //    A6-Indexer/1.0 (http://www.a6corp.com/a6-web-scraping-policy/)
            //    A6-Indexer
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'A6-Indexer' => 'A6-Indexer',
                    'A6-Indexer-deprecated' => 'A6-Indexer',
                ],
                'A6 Corp',
                'https://www.a6corp.com/a6-web-scraping-policy/'
            ),
            //Mozilla/5.0 (compatible; Abonti/0.91 - http://www.abonti.com)
            $this->getDetailsOfBotCrawler(
                'Abonti',
                'Abonti WebSearch',
                'Abonti',
                'http://www.abonti.com'
            ),
            //Ace Explorer
            $this->getDetailsOfBotCrawler(
                'Ace Explorer',
                'Ace Explorer',
                'Unknown',
                'Unknown'
            ),
            //    Acoon v4.9.5 (www.acoon.de)
            //    Acoon v4.10.1 (www.acoon.de)
            //    Mozilla/5.0 (compatible; AcoonBot/4.12.1; +http://www.acoon.de/robot.asp)
            $this->getDetailsOfBotCrawler(
                'AcoonBot',
                'AcoonBot',
                'Michael Schoebel',
                'https://www.acoon.de/robot.asp'
            ),
            //    ActiveBookmark 1.x
            $this->getDetailsOfBotCrawler(
                'ActiveBookmark',
                'ActiveBookmark',
                'ActiveBookmark',
                'https://www.activebookmarks.com/about-us/'
            ),
            //    ActiveRefresh
            $this->getDetailsOfBotCrawler(
                'ActiveRefresh',
                'ActiveRefresh',
                'ActiveRefresh',
                'Unknown'
            ),
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) adbeat.com/policy AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) adbeat.com/policy AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) adbeat.com/policy AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) adbeat.com/policy AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 OPR/76.0.4017.123
            $this->getDetailsOfBotCrawler(
                'adbeat',
                'AdBeat Bot',
                'AdBeat',
                'adbeat.com/policy'
            ),
            //AddThis.com (http://support.addthis.com/)
            $this->getDetailsOfBotCrawler(
                'AddThis',
                'Add This',
                'AddThis',
                'AddThis.com'
            ),
            //        ActiveWorlds/3.xx (xxx)
            //    Activeworlds
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'Activeworlds' => 'ActiveWorlds Bot',
                    'activeworlds-deprecated' => 'ActiveWorlds Bot',
                ],
                'ActiveWorlds, Inc.',
                'https://www.activeworlds.com/'
            ),
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'python-requests' => 'Python HTTP Requests Library', // python-requests/2.18.4
                    'python-urllib' => 'Python HTTP Url library', // Python-urllib 2.7, Python-urllib/3.5
                ],
                'Python Software Foundation',
                'https://www.python.org/psf/'
            ),
            // Google
            $this->getDetailsOfBotCrawlerGroup(
                [
                    // PATTERN TEXT ONLY
                    // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)
                    'APIs-Google' => 'Googlebot APIs',

                    // Feedfetcher
                    // FeedFetcher-Google; (+http://www.google.com/feedfetcher.html)
                    'FeedFetcher-Google' => 'Google Feed Fetcher',

                    // PATTERN TEXT AND VERSION ONLY

                    // Duplex on the web
                    // Mozilla/5.0 (Linux; Android 11; Pixel 2; DuplexWeb-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Mobile Safari/537.36
                    'DuplexWeb-Google' => 'Google Duplex on the web',

                    // Google AdSense (desktop and mobile)
                    // Mediapartners-Google
                    // (Various mobile device types) (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html)
                    'Mediapartners-Google' => 'Googlebot AdSense',


                    // Google StoreBot (desktop and mobile)
                    // Mozilla/5.0 (X11; Linux x86_64; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36
                    // Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012; Storebot-Google/1.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36
                    'Storebot-Google' => 'Google StoreBot',


                    // PATTERN TEXT ONLY

                    // Google AdsBot Mobile Web Android
                    // Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)
                    // Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)
                    'AdsBot-Google-Mobile' => 'Google AdsBot Mobile Web Android',

                    // Mobile Apps Android
                    // AdsBot-Google-Mobile-Apps
                    'AdsBot-Google-Mobile-Apps' => 'Google AdsBot Mobile Apps Android',

                    // AdsBot-Google (+http://www.google.com/adsbot.html)
                    'AdsBot-Google' => 'Google AdsBot',


                    // Google Web Preview Analytics
                    //Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview Analytics) Chrome/41.0.2272.118 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
                    'Google Web Preview Analytics' => 'Google Web Preview Analytics',
                    // Mozilla/5.0 (en-us) AppleWebKit/537.36 (KHTML, like Gecko; Google PP Default) Chrome/79.0.3945.120 Safari/537.36
                    'Google PP Default' => 'Google PP Default',
                    'Google pixel' => 'Google pixel',


                    // Google-Ads-Creatives-Assistant
                    // Google Adwords Instant
                    // Google-Adwords-Instant (+http://www.google.com/adsbot.html)
                    // Google Adwords express
                    'Google-Ads-Creatives-Assistant' => 'Google-Ads-Creatives-Assistant',
                    'Google-Adwords-Instant' => 'Google Adwords Instant',
                    'Google-Adwords-express' => 'Google Adwords Express',

                    // Google Adwords DisplayAds WebRender
                    // Mozilla/5.0 (en-us) AppleWebKit/537.36(KHTML, like Gecko; Google-Adwords-DisplayAds-WebRender;) Chrome/90.0.4430.97Safari/537.36
                    'Google-Adwords-DisplayAds-WebRender' => 'Google Adwords DisplayAds WebRender',

                    // Google Adwords DisplayAds
                    // Mozilla/5.0 (en-us) AppleWebKit/537.36(KHTML, like Gecko; Google-Adwords-DisplayAds;) Chrome/90.0.4430.97Safari/537.36
                    'Google-Adwords-DisplayAds' => 'Google Adwords DisplayAds',

                    // Google Apps Script
                    // Mozilla/5.0 (compatible; Google-Apps-Script; beanserver; +https://script.google.com; id: UAEmdDd87yGQjWmVZXjJbO20Oa5LAxue6gGI)
                    'Google-Apps-Script' => 'Google Apps Script',

                    // Google AMPHTML Ads
                    // Google-AMPHTML
                    'Google-AMPHTML' => 'Google AMPHTML Ads',

                    // Google Cloud ML Vision
                    // Google-Cloud-ML-Vision
                    'Google-Cloud-ML-Vision' => 'Google Cloud ML Vision',


                    // Google Adwords Express
                    // Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; GoogleAdwordsExpress) Chrome/90.0.4430.97 Safari/537.36
                    'GoogleAdwordsExpress' => 'Google Adwords Express',

                    // Google Image Proxy
                    // GoogleImageProxy
                    'GoogleImageProxy' => 'Google Image Proxy',
                    // Google Dork
                    // GoogleDork
                    'GoogleDork' => 'Google Dork',


                    // PATTERN TEXT AND VERSION ONLY

                    // Googlebot Desktop
                    // Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
                    // Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36
                    // Googlebot/2.1 (+http://www.google.com/bot.html)

                    // Googlebot Smartphone
                    // Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
                    'googlebot' => 'Googlebot Desktop',
                    'google-bot' => 'Googlebot Desktop',
                    // Googlebot-Image/1.0
                    'Googlebot-Image' => 'Googlebot Image',
                    // Googlebot-Video/1.0
                    'Googlebot-Video' => 'Googlebot News',


                    // PATTERN TEXT ONLY


                    // Googlebot-News
                    'Googlebot-News' => 'Googlebot News',

                    // Google Read Aloud (desktop and mobile)
                    // google-speakr [Former agent (deprecated)]
                    // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)
                    // Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers)
                    'google-speakr' => 'Google Read Aloud',
                    'Google-Read-Aloud' => 'Google Read Aloud',

                    // Googlebot Web Light
                    // Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19
                    'googleweblight' => 'Googlebot Web Light',

                    // Google-Pwa-Bot
                    'Google-Pwa-Bot' => 'Googlebot PWA',

                    // google-cloud-sdk
                    'google-cloud-sdk' => 'google-cloud-sdk',

                    // Google Favicon
                    // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 Google Favicon
                    'Google Favicon' => 'Google Favicon',

                    // Google Talk
                    // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 Google Talk
                    'Google Talk' => 'Google Talk',

                    // Google Chrome
                    // Google Chrome 51.0.2704.103 on Windows 10
                    // Google Chrome/88.0.4324.192 Mac OS X
                    'Google Chrome' => 'Google Chrome',

                    // Google Keep
                    // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.75 Safari/537.36 GoogleKeep
                    'GoogleKeep' => 'Google Keep Application',

                    // Google Earth
                    //GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default)
                    'GoogleEarth' => 'Google Earth Application',

                    // Google Auth
                    //GoogleAuth/1.4 (U520AS QP1A.190711.020); gzip,gzip(gfe),gzip(gfe)
                    'GoogleAuth' => 'Google Auth',

                    // Google Login Service
                    //GoogleLoginService/1.3 (sugar-aums JDQ39),gzip(gfe),gzip(gfe)
                    'GoogleLoginService' => 'Google Login Service',

                    // Google App Engine
                    // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36 AppEngine-Google; (+http://code.google.com/appengine; appid: s~surf702-hrd)
                    // AppEngine-Google; (+http://code.google.com/appengine; appid: s~virustotalcloud)
                    'AppEngine-Google' => 'Google App Engine',

                    // Google Stack driver Monitoring - Uptime Checks
                    // GoogleStackdriverMonitoring-UptimeChecks(https://cloud.google.com/monitoring)
                    'GoogleStackdriverMonitoring-UptimeChecks' => 'Google Stack driver Monitoring - Uptime Checks',

                    // Google
                    // Mozilla/5.0 (en-us) AppleWebKit/525.13 (KHTML, like Gecko; Google Wireless Transcoder) Version/3.1 Safari/525.13
                    // Google
                    // google.com
                    'Google' => 'Google',
                    'google.com' => 'google.com',

                    // googal
                    'googal' => 'Google',


                    // PATTERN TEXT AND VERSION ONLY

                    // GO HttpClient
                    //Go-http-client/1.1 [ip:213.32.4.95]
                    //Mozilla/5.0 (compatible; Go-http-client/1.1; +centurybot9@gmail.com)
                    //'go-http-client' => 'GO HttpClient',

                ],
                'Google Inc',
                'https://www.google.com'
            ),
            $this->getDetailsOfBotCrawler(
                'nutch',
                'Apache Nutch Bot',
                'The Apache Software Foundation',
                'https://nutch.apache.org/bot.html'
            ),
            $this->getDetailsOfBotCrawler(
                'startmebot',
                'Start Me Bot',
                'Start Me',
                'https://start.me/bot'
            ),
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
            //PHP-Curl-Class/4.13.0 (+https://github.com/php-curl-class/php-curl-class) PHP/7.4.7 curl/7.69.1
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'php' => 'PHP Bot',
                    'curl' => 'CURL Bot',
                    'php-requests' => 'PHP requests Bot',
                    'PHP-Curl-Class' => 'PHP-Curl-Class Bot',
                ],
                'PHP group',
                'https://php.net/bot.html'
            ),
            $this->getDetailsOfBotCrawler(
                'ahrefsbot',
                'Ahrefs Bot',
                'Ahrefs Pte Ltd',
                'https://ahrefs.com/robot/'
            ),
            $this->getDetailsOfBotCrawler(
                'alphabot',
                'Alpha Bot',
                'Ahrefs Pte Ltd',
                'https://alphaseobot.com/bot.html'
            ),
            $this->getDetailsOfBotCrawler(
                'proximic',
                'Proximic Bot',
                'Proximic',
                'https://www.proximic.com/info/spider.php'
            ),
            $this->getDetailsOfBotCrawler(
                'coccocbot-web',
                'coccocbot Bot',
                'coccoc',
                'https://help.coccoc.com/searchengine'
            ),
            //Mozilla/5.0 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'adidxbot' => 'Adidx Bot',
                    'BingBot' => 'Bing Bot',
                    'BingPreview' => 'BingPreview',
                ],
                'Microsoft Corporation',
                'https://www.bing.com/bingbot.htm'
            ),
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'YandexBot' => 'Yandex Bot',
                    'YandexImages' => 'Yandex Images',
                ],
                'Yandex LLC',
                'https://yandex.com/bots'
            ),
            $this->getDetailsOfBotCrawler(
                'dotbot',
                'Dot Bot',
                'SEOmoz, Inc',
                'https://www.opensiteexplorer.org/dotbot'
            ),
            $this->getDetailsOfBotCrawler(
                'baiduspider',
                'Baidu Spider',
                'Baidu',
                'https://www.baidu.com/search/spider.html'
            ),
            $this->getDetailsOfBotCrawler(
                'grapeshotcrawler',
                'Grapeshot Crawler',
                'Grapeshot Limited',
                'https://www.grapeshot.co.uk/crawler.php'
            ),
            $this->getDetailsOfBotCrawler(
                'NetcraftSurveyAgent',
                'Netcraft Survey Agent',
                'Netcraft',
                'info@netcraft.com'
            ),
            $this->getDetailsOfBotCrawler(
                'SemrushBot',
                'Semrush Bot',
                'Semrush',
                'https://www.semrush.com/bot.html'
            ),
            $this->getDetailsOfBotCrawler(
                'ZmEu',
                'ZmEu Malware',
                'ZmEu Hacker',
                'ZmEu@zmeu.eu'
            ),
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'Mail.RU_Bot' => 'Mail.Ru Bot',
                    'Mail.RU_Bot/Fast' => 'Mail.Ru Bot Fast',
                    'Mail.RU_Bot/Favicons' => 'Mail.Ru Bot Favicons',
                    'Mail.RU_Bot/Robots' => 'Mail.Ru Bot Robots',
                    'Mail.RU_Bot/Img' => 'Mail.Ru Bot Img',
                ],
                'Mail.Ru Group',
                'https://go.mail.ru/help/robots'
            ),
        );
    }

    public function webBrowsers(): array
    {
        return [
            /*Browsers*/
            //https://user-agents.net/browsers
            //https://developers.whatismybrowser.com/useragents/explore/software_name/
            //https://deviceatlas.com/blog/list-of-user-agent-strings
            //http://www.useragentstring.com/pages/useragentstring.php
            //https://www.whatsmyua.info/
            //https://useragents.io/

            // Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) 37abc/2.0.6.16 Chrome/60.0.3112.113 Safari/537.36
            '37abc' => [
                'name' => '37abc Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Guangzhou Network Technology Co., Ltd',
                        'link' => 'https://37abc.com/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    ['name' => 'Unknown'],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3202.75 7Star/2.1.62.0 Safari/537.36
            '7star' => [
                'name' => '7 Star Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Kuaiso Beijing ICP',
                        'link' => 'https://www.qixing123.com/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    ['name' => 'Unknown'],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            //Tablet
            //Mozilla/5.0 (Linux; Android android-version; product-model Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko)
            //Silk/browser-version like Chrome/chrome-version Safari/webkit-version
            //Desktop
            //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/webkit-version (KHTML, like Gecko)
            //Silk/browser-version like Chrome/chrome-version Safari/webkit-version
            //Mobile
            //Mozilla/5.0 (Linux; Android android-version; product-model Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko)
            //Silk/browser-version like Chrome/chrome-version Mobile Safari/webkit-version

            //User Agent String Examples
            //Examples of the Amazon Silk User Agent String
            //Tablet
            //Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko)
            //Silk/44.1.54 like Chrome/44.0.2403.63 Safari/537.36
            //Desktop
            //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)
            //Silk/44.1.54 like Chrome/44.0.2403.63 Safari/537.36
            //Mobile
            //Mozilla/5.0 (Linux; U; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko)
            //Silk/44.1.54 like Chrome/44.0.2403.63 Mobile Safari/537.36
            'Amazon-Silk' => [
                'name' => 'Amazon Silk Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Amazon',
                        'link' => 'https://docs.aws.amazon.com/silk',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    ['name' => 'Unknown'],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            //UA for Kindle Fire 1st Generation
            //Note
            //The UA for the Kindle Fire 1st Generation follows a slightly different syntax.
            //In the examples below, red and italic text indicates variable fields. The Amazon Silk-Accelerated value can be either true or false, depending upon customer selection.
            //
            //Desktop/Tablet
            //Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true
            //Mobile
            //Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 Silk-Accelerated=true
            'Amazon-Silk-1st-gen' => [
                'name' => 'Amazon Silk Browser (Kindle Fire 1st Generation)',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Amazon',
                        'link' => 'https://docs.aws.amazon.com/silk',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    ['name' => 'Unknown'],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            //Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36 ASW/3.55.2393.596
            //Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36 ASW/1.48.2066.95

            'avast-secure' => [
                'name' => 'Avast Secure Browser (formerly Avast SafeZone/Avastium)',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'AVAST Software s.r.o.',
                        'link' => 'https://www.avast.com/secure-browser',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(browser_engine)',
                    ],
                    [
                        'name' => 'V8',
                        'link' => 'https://en.wikipedia.org/wiki/V8_(JavaScript_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            //Mozilla/4.0 (compatible; MSIE 6.0; AOL 9.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)
            //Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 ADG/11.0.2541 AOLBUILD/11.0.2541 Safari/537.36       Windows Computer    Common
            //Mozilla/4.0 (compatible; MSIE 6.0; AOL 9.0; Windows NT 5.0)
            'AOL' => [
                'name' => 'AOL Explorer',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'America Online, Inc',
                        'link' => 'https://www.aol.com/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Trident',
                        'link' => 'https://en.wikipedia.org/wiki/Trident_(software)',
                    ],
                ],
                'latest-release' => [
                    'version' => '1.5',
                    'date' => 'May 10, 2016',
                ],
            ],

            //Mozilla/5.0 (Windows NT 5.1; rv:60.9) Goanna/4.4 Basilisk/20191122
            'Blisk' => [
                'name' => 'Blisk browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    ['name' => 'Blisk team',
                        'link' => 'https://blisk.io/', ],
                ],
                'cost' => [
                    'Free' => 'Limited',
                    'Paid' => 'Unlimited Pro',
                ],
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                    [
                        'name' => 'V8',
                        'link' => 'https://en.wikipedia.org/wiki/V8_(JavaScript_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '12.0.92.83',
                    'date' => 'June 29, 2019',
                ],
            ],

            //Mozilla/5.0 (Windows NT 5.1; rv:60.9) Goanna/4.4 Blisk
            'Blisk-deprecated' => [
                'name' => 'Blisk browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    ['name' => 'Blisk team',
                        'link' => 'https://blisk.io/', ],
                ],
                'cost' => [
                    'Free' => 'Limited',
                    'Paid' => 'Unlimited Pro',
                ],
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                    [
                        'name' => 'V8',
                        'link' => 'https://en.wikipedia.org/wiki/V8_(JavaScript_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '12.0.92.83',
                    'date' => 'June 29, 2019',
                ],
            ],

            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) BeakerBrowser/1.0.0-prerelease.7 Chrome/84.0.4129.0 Electron/10.0.0-beta.2 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) BeakerBrowser/0.8.10 Chrome/80.0.3987.141 Electron/8.1.1 Safari/537.36
            'Beaker-Browser' => [
                'name' => 'Beaker',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Blue Link Labs',
                        'link' => 'https://beakerbrowser.com/about',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MIT License',
                        'link' => 'https://en.wikipedia.org/wiki/MIT_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'macOS' => [
                        'version' => '0.8.10',
                        'date' => 'March 13, 2020',
                    ],
                    'Windows' => [
                        'version' => '0.8.10',
                        'date' => 'March 13, 2020',
                    ],
                    'Linux' => [
                        'version' => '0.8.10',
                        'date' => 'March 13, 2020',
                    ],
                ],
            ],


            //Electron (software framework)
            // https://en.wikipedia.org/wiki/Electron_(software_framework)
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.3.00.13565 Chrome/69.0.3497.128 Electron/4.2.12 Safari/537.36
            //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) electron/1.0.0 Chrome/53.0.2785.113 Electron/1.4.3 Safari/537.36
            'Electron' => [
                'name' => 'Electron',
                'type' => 'Electron (software framework)',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'GitHub',
                        'link' => 'https://en.wikipedia.org/wiki/GitHub',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MIT License',
                        'link' => 'https://en.wikipedia.org/wiki/MIT_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Stable release' => [
                        'version' => '10.1.5',
                        'date' => '23 October 2020',
                    ],
                    'Preview release' => [
                        'version' => '11.0.0-beta.16',
                        'date' => '24 October 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/83.0.4103.116 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.38 Safari/537.36 Brave/75
            'Brave' => [
                'name' => 'Brave Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Brave Software Inc',
                        'link' => 'https://en.wikipedia.org/wiki/Brave_(browser)',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '1.15.73',
                        'date' => '15 October 2020',
                    ],
                    'iOS' => [
                        'version' => '1.20',
                        'date' => '25 September 2020',
                    ],
                    'macOS' => [
                        'version' => '1.15.75',
                        'date' => '16 October 2020',
                    ],
                    'Windows' => [
                        'version' => '1.15.75',
                        'date' => '16 October 2020',
                    ],
                    'Linux' => [
                        'version' => '1.15.75',
                        'date' => '16 October 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362
            //Mozilla/5.0 (Linux; Android 5.0.1; GT-I9505) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.116 Mobile Safari/537.36 EdgA/46.05.2.5158

            'Edge' => [
                'name' => 'Microsoft Edge',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Microsoft Corp',
                        'link' => 'https://www.microsoftedgeinsider.com/en-us/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '88.0.673.0',
                    'date' => '14 October 2020',
                ],
            ],

            //Opera/9.80 (J2ME/MIDP; Opera Mini/9.80 (S60; SymbOS; Opera Mobi/23.348; U; en) Presto/2.5.25 Version/10.54
            //Mozilla/5.0 (Linux; Android 9; FIG-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 OPR/64.1.3282.59829
            //Opera/9.80 (Windows Mobile; WCE; Opera Mobi/49; U; en) Presto/2.4.18 Version/10.00
            //Opera/9.80 (Android 2.2; Linux; Opera Mobi/ADR-2093533120; U; pl) Presto/2.7.60 Version/10.5
            //Opera/9.80 (Android; Linux; Opera Mobi/27; U; en) Presto/2.4.18 Version/10.00
            //Opera/9.80 (Android 2.2.1; Linux; Opera Mobi/ADR-1107051709; U; pl) Presto/2.8.149 Version/11.10
            //Opera/9.80 (Android 2.2; Opera Mobi/-2118645896; U; pl) Presto/2.7.60 Version/10.5
            'Opera-Mobile' => [
                'name' => 'Opera Mobile',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Opera Software ASA',
                        'link' => 'https://en.wikipedia.org/wiki/Opera_Software',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '59.1.2926.54067',
                        'date' => 'July 13, 2020',
                    ],
                    'Android (classic)' => [
                        'version' => '12.1.9',
                        'date' => 'June 8, 2016',
                    ],
                    'Symbian' => [
                        'version' => 'S60 12.0.22',
                        'date' => 'June 24, 2012',
                    ],
                    'Windows Mobile' => [
                        'version' => '10.0',
                        'date' => 'March 16, 2010',
                    ],
                ],
            ],

            //Mozilla/5.0 (Linux; Android 9; SM-A530F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.111 Mobile Safari/537.36 OPT/1.20.73
            //Mozilla/5.0 (Linux; Android 7.0; SM-A510F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 OPT/1.10.33
            //Mozilla/5.0 (Linux; Android 8.0.0; ANE-LX1 Build/HUAWEIANE-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/71.0.3578.99 Mobile Safari/537.36 OPT/1.13.48
            'Opera-Touch' => [
                'name' => 'Opera Touch',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Opera Software ASA',
                        'link' => 'https://en.wikipedia.org/wiki/Opera_Software',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '59.1.2926.54067',
                        'date' => 'July 13, 2020',
                    ],
                    'Android (classic)' => [
                        'version' => '12.1.9',
                        'date' => 'June 8, 2016',
                    ],
                    'Symbian' => [
                        'version' => 'S60 12.0.22',
                        'date' => 'June 24, 2012',
                    ],
                    'Windows Mobile' => [
                        'version' => '10.0',
                        'date' => 'March 16, 2010',
                    ],
                ],
            ],


            //Mozilla/5.0 (Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36 OPR/36.0.2128.0 OMI/4.8.0.129.PIXEL_UNICORN3.79 SonyCEBrowser/1.0 (KD-49X706E; CTV/v6.904; ARG;)
            //Mozilla/5.0 (Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36 OPR/36.0.2128.0 OMI/4.8.0.129.Driver3.25, HbbTV/1.1.1 _TV_MT5802/012.002.246.001 (Philips, PUS6262, wireless) CE-HTML/1.0 NETTV/4.6.0 SignOn/2.0 SmartTvA/5.0.0 en Opera/68.0.3618.31
            'Opera' => [
                'name' => 'Opera',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Opera Software',
                        'link' => 'https://en.wikipedia.org/wiki/Opera_Software',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '71.0.3770.271',
                    'date' => '14 October 2020',
                ],
            ],

            //Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.277 Whale/2.9.118.31 Safari/537.36
            //Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.272 Whale/2.9.118.16 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.277 Whale/2.9.118.17 Safari/537.36
            'whale' => [
                'name' => 'Naver Whale',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'NHN Corporation',
                        'link' => 'https://en.wikipedia.org/wiki/Naver_Corporation',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '1.5.4.2',
                        'date' => 'May 26, 2020',
                    ],
                    'iOS' => [
                        'version' => '1.5.0',
                        'date' => 'May 25, 2020',
                    ],
                    'macOS' => [
                        'version' => '2.7.100.20',
                        'date' => 'June 18, 2020',
                    ],
                    'Windows' => [
                        'version' => '2.7.100.20',
                        'date' => 'June 18, 2020',
                    ],
                    'Linux' => [
                        'version' => '2.7.100.20',
                        'date' => 'June 18, 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 YaBrowser/17.4.3.195.10 Mobile/14A346 Safari/E7FBAF  17.4    iOS Mobile - Phone  Very common
            //Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 YaBrowser/17.6.1.749 Yowser/2.5 Safari/537.36    17.6    Windows Computer    Very common
            //Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 YaBrowser/18.3.1.1232 Yowser/2.5 Safari/537.36
            //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 YaBrowser/21.5.3.753 (beta) Yowser/2.5 Safari/537.36
            'yandex-browser' => [
                'name' => 'Yandex Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Yandex',
                        'link' => 'https://en.wikipedia.org/wiki/Yandex',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '20.6.3.54',
                        'date' => 'July 23, 2020',
                    ],
                    'iOS' => [
                        'version' => '20.6.2.318',
                        'date' => 'July 16, 2020',
                    ],
                    'macOS' => [
                        'version' => '20.7.2',
                        'date' => 'July 2020',
                    ],
                    'Windows' => [
                        'version' => '20.7.2',
                        'date' => 'July 2020',
                    ],
                    'Linux' => [
                        'version' => '20.7.2',
                        'date' => 'July 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4650.0 Iron Safari/537.36
            //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4650.0 Iron Safari/537.36
            //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4650.0 Iron Safari/537.36
            'Iron' => [
                'name' => 'SRWare Iron',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'SRWare',
                        'link' => 'www.srware.net/en/software_srware_iron.php',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                    [
                        'name' => 'V8',
                        'link' => 'https://en.wikipedia.org/wiki/V8_(JavaScript_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '74.0.3850.0',
                        'date' => 'May 10, 2019',
                    ],
                    'macOS' => [
                        'version' => '84.0.4300.0',
                        'date' => 'August 29, 2020',
                    ],
                    'Windows' => [
                        'version' => '85.0.4350.0',
                        'date' => 'October 2, 2020',
                    ],
                    'Linux' => [
                        'version' => '85.0.4350.0',
                        'date' => 'October 6, 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Comodo_Dragon/6.0.0.10 Chrome/6.0.472.63 Safari/534.3
            //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5 Comodo_Dragon/19.2.0.0 19.2
            //Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) Comodo_Dragon/17.1.0.0 Chrome/17.0.963.38 Safari/535.11
            //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.30 (KHTML, like Gecko) Comodo_Dragon/12.1.0.0 Chrome/12.0.742.91 Safari/534.30
            'Comodo-Dragon' => [
                'name' => 'Comodo Dragon',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Comodo Group',
                        'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '83.0.4103.116',
                        'date' => 'July 21, 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/83.0.144 Chrome/77.0.3865.144 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/94.0.202 Chrome/88.0.4324.202 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/95.0.150 Chrome/89.0.4389.150 Safari/537.36
            //Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) coc_coc_browser/87.0.152 Chrome/81.0.4044.152 Safari/537.36
            'coc-coc' => [
                'name' => 'Comodo Dragon',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Comodo Group',
                        'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '83.0.4103.116',
                        'date' => 'July 21, 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0 IceDragon/65.0.2
            //Mozilla/5.0 (Windows NT 10.0; WOW64; rv:65.0) Gecko/20100101 Firefox/65.0 IceDragon/65.0.2
            //Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0 IceDragon/65.0.2
            //Mozilla/5.0 (Windows NT 6.1; WOW64; rv:22.0) Gecko/20100101 Firefox/22.0 IceDragon/22.0.0.1
            //Mozilla/5.0 (Windows NT 6.2; WOW64; rv:65.0) Gecko/20100101 Firefox/65.0 IceDragon/65.0.2
            //Mozilla/5.0 (Windows NT 6.2; rv:65.0) Gecko/20100101 Firefox/65.0 IceDragon/65.0.2
            'Ice-Dragon' => [
                'name' => 'Comodo Ice Dragon',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Comodo Group',
                        'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '65.0.2.15',
                        'date' => 'June 19, 2019',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows NT 6.1; rv:9.0.1) Gecko/20100101 Firefox/9.0.1 epic/9.0.1
            'epic' => [
                'name' => 'Epic Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Hidden Reflex',
                        'link' => 'https://www.epicbrowser.com/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'note' => '(as of 3.0)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            //Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.143 Safari/537.36 Vivaldi/1.95.1077.45
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.214 Safari/537.36 Vivaldi/4.0.2312.24
            //Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.105 Safari/537.36 Vivaldi/1.92.917.43
            'vivaldi' => [
                'name' => 'Vivaldi Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Vivaldi Technologies',
                        'link' => 'https://en.wikipedia.org/wiki/Vivaldi_(web_browser)',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'note' => '(as of 3.0)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                    [
                        'name' => 'V8',
                        'link' => 'https://en.wikipedia.org/wiki/Chrome_V8',
                    ],
                ],
                'latest-release' => 'Unknown',
            ],

            //Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 UBrowser/7.0.185.1002 Safari/537.36
            //Mozilla/5.0 (Linux; U; Android 7.0; en-US; SM-G935F Build/NRD90M) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 UCBrowser/11.3.8.976 U3/0.8.0 Mobile Safari/534.30
            'uc-browser' => [
                'name' => 'UC Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'UCWeb Alibaba Group',
                        'link' => 'https://en.wikipedia.org/wiki/UC_Browser',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'note' => '(as of 3.0)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                    [
                        'name' => 'V8',
                        'link' => 'https://en.wikipedia.org/wiki/Chrome_V8',
                    ],
                ],
                'latest-release' => 'Unknown',
            ],

            //Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Maxthon)
            //Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Maxthon; .NET CLR 1.1.4322)
            //Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Maxthon)
            //Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Maxthon; .NET CLR 1.1.4322)
            //Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.8.1000 Chrome/30.0.1599.101 Safari/537.36
            'Maxthon' => [
                'name' => 'Maxthon Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Maxthon International Ltd',
                        'link' => 'https://en.wikipedia.org/wiki/Maxthon',
                    ],
                ],
                'cost' => '	Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                    [
                        'name' => 'Trident',
                        'link' => 'https://en.wikipedia.org/wiki/Trident_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'Windows' => [
                        'version' => '5.3.8.2000',
                        'date' => 'October 25, 2019',
                    ],
                    'Android' => [
                        'version' => '5.2.3.3241',
                        'date' => 'January 25, 2019',
                    ],
                    'macOS' => [
                        'version' => '5.1.60',
                        'date' => 'August 27, 2018',
                    ],
                    'iOS' => [
                        'version' => '5.4.5',
                        'date' => 'July 21, 2020',
                    ],
                    'Windows Phone' => [
                        'version' => '2.2.0',
                        'date' => 'March 30, 2017',
                    ],
                    'Linux' => [
                        'version' => '1.0.5.3',
                        'date' => 'September 9, 2014',
                    ],
                ],
            ],

            'maxthon-deprecated' => [
                'name' => 'Maxthon Browser (Deprecated)',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Maxthon International Ltd',
                        'link' => 'https://en.wikipedia.org/wiki/Maxthon',
                    ],
                ],
                'cost' => '	Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                    [
                        'name' => 'Trident',
                        'link' => 'https://en.wikipedia.org/wiki/Trident_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'Windows' => [
                        'version' => '5.3.8.2000',
                        'date' => 'October 25, 2019',
                    ],
                    'Android' => [
                        'version' => '5.2.3.3241',
                        'date' => 'January 25, 2019',
                    ],
                    'macOS' => [
                        'version' => '5.1.60',
                        'date' => 'August 27, 2018',
                    ],
                    'iOS' => [
                        'version' => '5.4.5',
                        'date' => 'July 21, 2020',
                    ],
                    'Windows Phone' => [
                        'version' => '2.2.0',
                        'date' => 'March 30, 2017',
                    ],
                    'Linux' => [
                        'version' => '1.0.5.3',
                        'date' => 'September 9, 2014',
                    ],
                ],
            ],


            //END Browsers based on Chromium

            //Firefox based browser

            //Mozilla/5.0 (Windows NT 6.1; rv:9.0.1) Gecko/20100101 Firefox/9.0.1 Alienforce/9.0.1
            'alien-force' => [
                'name' => 'Alienforce Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'kbclub',
                        'link' => 'https://kbclub.ru/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    ['name' => 'Freeware', 'link' => 'https://en.wikipedia.org/wiki/Web_browser'],
                ],
                'layout' => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => 'Unknown',
                    'date' => 'Unknown',
                ],
            ],

            //Mozilla/5.0 (X11; Linux x86_64; rv:55.0) Gecko/20100101 Goanna/4.0 Firefox/55.0 Basilisk/20180202
            //Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Goanna/4.8 Firefox/68.0 Basilisk/20210501
            //Mozilla/5.0 (Windows NT 5.1; rv:60.9) Goanna/4.4 Basilisk/20191122
            'Basilisk' => [
                'name' => 'Basilisk ',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Moonchild Productions',
                        'link' => 'https://www.basilisk-browser.org/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Goanna',
                        'link' => 'https://en.wikipedia.org/wiki/Goanna_(software)',
                    ],
                ],
                'latest-release' => [
                    'version' => '2020.10.05',
                    'date' => '5 October 2020',
                ],
            ],

            //Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.11) Gecko/20070501 Firefox/1.5.0.11 Flock/0.7.13.1
            //Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.0.3) Gecko/2008100716 Firefox/3.0.3 Flock/2.0
            //Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.8) Gecko/20071018 Firefox/2.0.0.8 Flock/1.0RC3
            'Flock' => [
                'name' => 'Flock',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Flock Inc',
                        'link' => [
                            'https://web.archive.org/web/20110325151017/http://www.flock.com/',
                            'https://en.wikipedia.org/wiki/Flock_(web_browser)',
                        ],
                    ],
                ],
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => [
                    [
                        'name' => 'Proprietary',
                        'note' => '(as of 3.0)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '3.5.3.4641',
                        'date' => 'February 1, 2011',
                    ],
                ],
            ],

            //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0 Waterfox/78.12.0
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0 Waterfox/78.12.0
            //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:78.0) Gecko/20100101 Firefox/78.0 Waterfox/78.10.0
            //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:78.0) Gecko/20100101 Firefox/78.0 Waterfox/78.10.0
            'water-fox' => [
                'name' => 'Waterfox Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    ['name' => 'Alex Kontos'],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '2020.10',
                        'date' => '21 October 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (X11; Linux x86_64; rv:4.8) Goanna/20210607 PaleMoon/29.2.1
            //Mozilla/5.0 (Windows NT 5.2; Win64; x64; rv:4.8) Goanna/20210625 PaleMoon/28.10.3a1
            //Mozilla/5.0 (Windows NT 6.1; WOW64; rv:78.0) Gecko/20100101 Goanna/4.8 Firefox/78.0 PaleMoon/29.2.1
            'pale-moon' => [
                'name' => 'PaleMoon Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    ['name' => 'Moonchild Productions'],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Goanna',
                        'link' => 'https://en.wikipedia.org/wiki/Goanna_(software)',
                    ],
                ],
                'latest-release' => [
                    'Standard' => [
                        'version' => '28.15.0',
                        'date' => '27 October 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20110608 SeaMonkey/2.1
            //Mozilla/5.0 (X11; Linux i686; rv:15.0) Gecko/20120909 SeaMonkey/2.12.1
            //Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0 SeaMonkey/2.53.8
            //Mozilla/5.0 (Windows NT 10.0; WOW64; rv:60.0) Gecko/20100101 Firefox/60.0 SeaMonkey/2.53.8
            //Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0 SeaMonkey/2.53.5.1
            'sea-monkey' => [
                'name' => 'SeaMonkey Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    ['name' => 'SeaMonkey Council'],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'Stable release' => [
                        'version' => '2.53.4',
                        'date' => 'September 22, 2020',
                    ],
                    'Preview release' => [
                        'version' => '2.53.5b1',
                        'date' => 'October 29, 2020',
                    ],
                ],
            ],

            //salamWeb/1.2.3.4
            //salam Browser
            'salam-web' => [
                'name' => 'SalamWeb Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'SalamWeb',
                        'link' => 'https://salamweb.com/',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Windows' => [
                        'version' => '4.5',
                        'date' => 'July 31, 2020',
                    ],
                    'Android' => [
                        'version' => '4.5.0.40',
                        'date' => 'June 25, 2020',
                    ],
                    'macOS' => [
                        'version' => '4.5',
                        'date' => 'June 20, 2020',
                    ],
                    'iOS' => [
                        'version' => '4.5',
                        'date' => 'June 20, 2020',
                    ],
                ],
            ],

            //Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:86.0.1) Gecko/20100101 Firefox/86.0.1
            //Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0/MDZ1X7f7-14
            //Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.1) Gecko/20100101 Firefox/89.1
            //Mozilla/5.0 (Android 10; Mobile; rv:89.0; Tesseract/1.0) Gecko/89.0 Firefox/89.0
            'firefox' => [
                'name' => 'Firefox Browser',
                'keyword' => 'firefox',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Mozilla Foundation',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Foundation',
                    ],
                ],
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'Gecko',
                        'note' => '(before v57)',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                    [
                        'name' => 'Gecko w/Servo',
                        'note' => 'v57 & after',
                        'link' => 'https://en.wikipedia.org/wiki/Servo_(software)',
                    ],
                ],
                'latest-release' => [
                    'Standard' => [
                        'version' => '82.0',
                        'date' => 'October 20, 2020',
                    ],
                    'Extended Support Release' => [
                        'version' => '78.4.0',
                        'date' => 'October 20, 2020',
                    ],
                ],
            ],


            //Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Version/13.1 (Ecosia ios@4.1.7.870) Safari/604.1
            //Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_18.5.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/it Region/GB ByteFullLocale/it-IT isDarkMode/0 Safari/604.1 WKWebView/1
            'safari' => [
                'name' => 'safari Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => [
                    [
                        'name' => 'Apple Inc.',
                        'link' => 'https://en.wikipedia.org/wiki/Apple_Inc.',
                    ],
                ],
                'cost' => 'Included with macOS and iOS',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Proprietary (browser)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                    [
                        'name' => 'LGPL (WebKit) ',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'macOS' => [
                        'version' => '14.0',
                        'date' => 'September 17, 2020',
                    ],
                    'iOS' => [
                        'version' => '14.0',
                        'date' => 'September 17, 2020',
                    ],
                ],
            ],
        ];
    }
}
