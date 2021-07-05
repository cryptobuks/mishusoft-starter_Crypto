<?php


namespace Mishusoft\Framework\Chipsets\Http\UATable;

class BrowserUATable
{
    /**
     * BrowserUATable constructor.
     */
    public function __construct()
    {
    }

    /**
     * Applications
     *
     * @return array[]
     */
    public function getApplications(): array
    {
        return [
            '1password' => [
                'name' => '1 Password',
                'type' => 'Applications',
                'category' => 'Password Manager',
                'ui' => 'GraphicalMode',
                'authors' => [
                    [
                        'name' => 'AgileBits Inc',
                        'link' => 'https://1password.com/',
                    ],
                ],
                'cost' => 'Trialware',
                'status' => 'Active',
                'licence' => [
                    [
                        'name' => 'Trialware',
                        'link' => 'https://en.wikipedia.org/wiki/Trialware',
                    ],
                ],
                'layout' => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'updates' => 'https://app-updates.agilebits.com/'
                ],
            ],
        ];
    }

    /**
     * Browser type of Bot/Crawler
     *
     * @return array
     */
    public function getBotCrawlers(): array
    {
        return array_merge_recursive(
            $this->getDetailsOfBotCrawlerGroup(
                [
                    '007ac9 crawler' => '007ac9 Crawler',
                    'Sistrix Crawler' => 'Sistrix Crawler',
                ],
                '007ac9',
                'https://crawler.007ac9.net'
            ),
            $this->getDetailsOfBotCrawler(
                '12345',
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
            $this->getDetailsOfBotCrawler(
                'A6-Indexer',
                'A6-Indexer',
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
            $this->getDetailsOfBotCrawlerGroup(
                [
                    'python-requests' => 'Python HTTP Requests Library', // python-requests/2.18.4
                    'python-urllib' => 'Python HTTP Url library', // Python-urllib 2.7, Python-urllib/3.5
                ],
                'Python Software Foundation',
                'https://www.python.org/psf/'
            ),
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

                    // AdsBot-Google (+http://www.google.com/adsbot.html)
                    'AdsBot-Google' => 'Google AdsBot',

                    // Google AdsBot Mobile Web Android
                    // Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)
                    // Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)
                    'AdsBot-Google-Mobile' => 'Google AdsBot Mobile Web Android',

                    // Mobile Apps Android
                    // AdsBot-Google-Mobile-Apps
                    'AdsBot-Google-Mobile-Apps' => 'Google AdsBot Mobile Apps Android',


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
                    'go-http-client' => 'GO HttpClient',

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
            $this->getDetailsOfBotCrawlerGroup(
                [
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
                'ZmEu Scanner',
                'ZmEu Attacker',
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

    /**
     * Details builder of Bot/Crawler.
     *
     * @param string $uniqueKeyword Unique keyword of bot/crawler for query in useragent string
     * @param string $qualifiedName Qualified name of bot/crawler
     * @param string $authorName Author/Developer name of bot/crawler
     * @param string $authorHomeUrl Author's homepage of bot/crawler
     *
     * @return array[] Details array of Bot/Crawler
     */
    private function getDetailsOfBotCrawler(int|string $uniqueKeyword, string $qualifiedName, string $authorName, string $authorHomeUrl): array
    {
        return [$uniqueKeyword => $this->makeDetailsOfBotCrawler($qualifiedName, $authorName, $authorHomeUrl)];
    }

    /**
     * Details group builder of Bot/Crawler.
     *
     * @param array $bots Unique keywords of bot/crawler for query in useragent string
     * @param string $authorName Author/Developer name of bot/crawler
     * @param string $authorHomeUrl Author's homepage of bot/crawler
     *
     * @return array[] Details array of Bot/Crawler
     */
    private function getDetailsOfBotCrawlerGroup(array $bots, string $authorName, string $authorHomeUrl): array
    {
        $details = array();

        if (count($bots) > 0) {
            foreach ($bots as $bot => $qualifiedName) {
                $details[$bot] = $this->makeDetailsOfBotCrawler($qualifiedName, $authorName, $authorHomeUrl);
            }
        }

        return $details;
    }

    /**
     * Details of Bot/Crawler.
     *
     * @param string $qualifiedName Qualified name of bot/crawler
     * @param string $authorName Author/Developer name of bot/crawler
     * @param string $authorHomeUrl Author's homepage of bot/crawler
     *
     * @return array Details of Bot/Crawler
     */
    private function makeDetailsOfBotCrawler(string $qualifiedName, string $authorName, string $authorHomeUrl): array
    {
        return [
            'name' => $qualifiedName,
            'type' => 'Bot (Crawler)',
            'ui' => 'FullTextMode',
            'authors' => [
                [
                    'name' => $authorName,
                    'link' => $authorHomeUrl,
                ]
            ]
        ];
    }

    public function getWebBrowsers(): array
    {
        return [];
    }

    public function getEmailClients(): array
    {
        return [];
    }

    public function getFeedReaders(): array
    {
        return [];
    }

    public function getMultimediaPlayers(): array
    {
        return [];
    }

    public function getOfflineBrowsers(): array
    {
        return [];
    }

    public function getTools(): array
    {
        return [];
    }
}
