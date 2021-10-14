<?php


namespace Mishusoft\Http\UAAnalyzer\PatternsCollection;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class BrowsersPatternsCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @return array
     * @throws RuntimeException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function all(): array
    {
        return $this->extractAttributeRecursive(
            'browsers',
            [
                'bots','applications','email-clients',
                'feed-readers','multimedia-players',
                'offline-browsers','tools','browsers',
            ],
            'identifier-with-pattern'
        );
    }

    /**
     * @param string $identifier
     * @return string
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function compat(string $identifier):string
    {
        $dictionary = $this->extractAttribute($this->query('browsers', 'compatibilities'), 'identifier-with-pattern');
        if (array_key_exists($identifier, $dictionary)=== true) {
            return strtolower($dictionary[$identifier]);
        }

        throw new InvalidArgumentException('Unexpected browser compatibility : '.$identifier);
    }

    /**
     * @param string $identifier
     * @return string
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function browserEngine(string $identifier):string
    {
        $dictionary = $this->extractAttribute($this->query('browsers', 'browsers-engines'), 'identifier-with-pattern');
        if (array_key_exists($identifier, $dictionary)=== true) {
            return strtolower($dictionary[$identifier]);
        }

        throw new InvalidArgumentException('Unexpected browser engine : '.$identifier);
    }

    /**
     * @param string $identifier
     * @return string
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function match(string $identifier):string
    {
        if (array_key_exists($identifier, $this->all())=== true) {
            return strtolower($this->all()[$identifier]);
        }

        throw new InvalidArgumentException(sprintf('Unexpected browser : "%s"', $identifier));
    }

    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     */
    public function webBrowser(string $identifier):string
    {
        return match (strtolower($identifier)) {
            // Bot

            //python-requests/2.7.0 ok
            //python-requests/2.2.1 CPython/2.7.6 Linux/4.19.0-13-amd64 ok
            //python-requests/2.6.0 CPython/2.6.6 Linux/2.6.32-754.18.2.el6.x86_64 ok
            //python-requests/2.25.1 fb6 ok

            //Python-urllib 2.7 ok
            //Python-urllib 1.17 ok
            //Python-urllib/3.5 ok
            //'python-requests', 'python-urllib'=>'/(?<name>(python-(requests|urllib)))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'python-requests', 'python-urllib'=>$this->makePattern('(python\-(requests|urllib))', true, true),






            // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html) ok
            // FeedFetcher-Google; (+http://www.google.com/feedfetcher.html) ok
            // AdsBot-Google (+http://www.google.com/adsbot.html) ok
            // AppEngine-Google; (+http://code.google.com/appengine; appid: s~virustotalcloud) ok
            //'apis-google', 'feedfetcher-google', 'adsbot-google', 'appengine-google'=>'/(?<name>((apis|feedfetcher|adsbot|appengine)\-(google|googlebot)))/i',
            'apis-google', 'feedfetcher-google', 'adsbot-google', 'appengine-google'=> $this->makePattern('((apis|feedfetcher|adsbot|appengine)\-(google|googlebot))', false, false),


            // Storebot-Google/1.0  ok
            'storebot-google'=> $this->makePattern('(storebot\-google)', true, true),

            // APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html) ok
            // Google AdSense (desktop and mobile)
            // Mediapartners-Google ok
            // (Various mobile device types) (compatible; Mediapartners-Google/2.1; +http://www.google.com/bot.html) ok
            // Google StoreBot (desktop and mobile)
            //'duplexweb-google', 'mediapartners-google', 'storebot-google'=>'/(?<name>((duplexweb|mediapartners|storebot)-googlebot))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'duplexweb-google', 'mediapartners-google'=> $this->makePattern('((duplexweb|mediapartners)\-google)', false, false),


            // Google AdsBot Mobile Web Android
            // Mozilla/5.0 (Linux; Android 5.0; SM-G920A) AppleWebKit (KHTML, like Gecko) Chrome Mobile Safari (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html) ok
            // Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 (compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html) ok
            // Mobile Apps Android
            // AdsBot-Google-Mobile-Apps  ok
            //'adsbot-google-mobile', 'adsbot-google-mobile-apps'=>'/(?<name>(adsbot-google-(mobile(-apps))))/i',
            'adsbot-google-mobile', 'adsbot-google-mobile-apps'=> $this->makePattern('(adsbot\-google\-(mobile|mobile\-apps))', false, false),


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
            //'googlebot','google-bot','googlebot-image','googlebot-video'=>'/(?<name>(googlebot|google\-bot|googlebot(\-(video|mobile|image))))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'googlebot','google-bot','googlebot-image','googlebot-video'=>$this->makePattern('(googlebot|google\-bot|googlebot(\-(video|mobile|image)))', true, true),


            // Googlebot-News ok
            // Google Read Aloud (desktop and mobile) ok
            // google-speakr [Former agent (deprecated)] ok
            // Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) ok
            // Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36 (compatible; Google-Read-Aloud; +https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers) ok
            // Googlebot Web Light ok
            // Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19 ok
            //'googlebot-news', 'google-speakr', 'google-read-aloud', 'googleweblight', 'googlekeep'=>'/(?<name>(google(weblight|keep|((bot)-(news|speakr|read-aloud)))))/i',
            'googlebot-news', 'google-speakr', 'google-read-aloud', 'googleweblight', 'googlekeep'=>$this->makePattern('(google(weblight|keep|((bot)-(news|speakr|read-aloud))))', false, false),

            //google favicon ok
            //google talk ok
            //'google favicon','google talk'=>'/(?<name>(google\s*(favicon|talk)))/i',
            'google favicon','google talk'=>$this->makePattern('(google\s*(favicon|talk))', false, false),

            //google favicon ok
            //google talk ok
            //'google chrome'=>'/(?<name>(google\s*chrome))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'google chrome'=>$this->makePattern('(google\s*chrome)', true, true),


            //GoogleStackdriverMonitoring-UptimeChecks(https://cloud.google.com/monitoring) ok
            //'googlestackdrivermonitoring-uptimechecks'=>'/(?<name>(googlestackdrivermonitoring-uptimechecks))/i',
            'googlestackdrivermonitoring-uptimechecks'=>$this->makePattern('(googlestackdrivermonitoring\-uptimechecks)', false, false),


            // Google ok
            // google.com ok
            // googal ok
            //'google','google.com','googal'=>'/(?<name>(googal|google|google(\.com)))/i',
            'google','google.com','googal'=>$this->makePattern('(googal|google|google(\.com))', false, false),

            // Google Web Preview Analytics ok
            // Google PP Default ok
            // google pixel ok
            //'google web preview analytics','google pp default','google pixel'=>'/(?<name>(google\s*(web\s+preview\s+analytics|pp\s+default|pixel)))/i',
            'google web preview analytics','google pp default','google pixel'=>$this->makePattern('(google\s*(web\s+preview\s+analytics|pp\s+default|pixel))', false, false),

            // GoogleAdwordsExpress ok
            // GoogleImageProxy ok
            // GoogleDork ok
            //'googleadwordsexpress','googleimageproxy','googledork'=>'/(?<name>(google(adwordsexpress|imageproxy|dork)))/i',
            'googleadwordsexpress','googleimageproxy','googledork'=>$this->makePattern('(google(adwordsexpress|imageproxy|dork))', false, false),



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
            //'google-cloud-sdk','google-pwa-bot','google-ads-creatives-assistant','google-adwords-instant','google-adwords-express','google-adwords-displayads','google-adwords-displayads-webrender','google-apps-script','google-amphtml','google-cloud-ml-vision'=>'/(?<name>(google\-(adwords\-(instant|express|displayAds|displayAds\-webrender))|(cloud-sdk|pwa-bot|ads-creatives-assistant|apps\-script|amphtml|cloud\-ml\-vision)))/i',
            'google-cloud-sdk','google-pwa-bot','google-ads-creatives-assistant','google-adwords-instant','google-adwords-express','google-adwords-displayads','google-adwords-displayads-webrender','google-apps-script','google-amphtml','google-cloud-ml-vision'=>$this->makePattern('(google\-(adwords\-(instant|express|displayAds|displayAds\-webrender))|(cloud-sdk|pwa-bot|ads-creatives-assistant|apps\-script|amphtml|cloud\-ml\-vision))', false, false),


            //Go 1.1 package http ok
            //Go-http-client/1.1 [ip:213.32.4.95] ok
            //Mozilla/5.0 (compatible; Go-http-client/1.1; +centurybot9@gmail.com) ok
            //'go-http-client'=>'/(?<name>(go|go(\-http\-client)))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'go-http-client'=>$this->makePattern('(go|go(\-http\-client))', true, true),


            //GoogleEarth/7.3.1.4507(Windows;Microsoft Windows (6.2.9200.0);en;kml:2.2;client:Pro;type:default) ok
            // GoogleAuth/1.4 (U520AS QP1A.190711.020); gzip,gzip(gfe),gzip(gfe) ok
            // GoogleLoginService/1.3 (sugar-aums JDQ39),gzip(gfe),gzip(gfe) ok
            //'googleearth', 'googleauth', 'googleloginservice'=>'/(?<name>(google(earth|auth|loginservice)))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'googleearth', 'googleauth', 'googleloginservice'=>$this->makePattern('(google(earth|auth|loginservice))', true, true),






            // Nutch-1.7 //PENDING
            ///'nutch'=>'/(?<name>(nutch))(?<separator>(\s*|\/|\-))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            //curl/7.69.1
            //'curl'=>'/(?<name>(curl))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'nutch','curl'=>$this->makePattern('(nutch|curl)', true, true),



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
            //'php','php-requests','php-curl-class'=>'/(?<name>(php|php\-(requests|curl\-class)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'php','php-requests','php-curl-class'=>$this->makePattern('(php|php\-(requests|curl\-class))', true, true),

            //BOT-NAME/VERSION
            //startmebot/1.0;
            //DotBot/3.0
            //AlphaBot/3.2
            //SemrushBot/1.2~bl
            //AhrefsBot/2.1
            //adidxbot/2.0
            //'ahrefsbot','startmebot','dotbot','alphabot','semrushbot'=>'/(?<name>((ahrefs|startme|dot|alpha|semrush)bot))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'ahrefsbot','startmebot','dotbot','alphabot','semrushbot','adidxbot'=>$this->makePattern('((ahrefs|startme|dot|alpha|semrush|adidx)bot)', true, true),

            //bingbot/2.0
            //BingPreview/1.0b
            //'bingbot','bingpreview'=>'/(?<name>(bing(bot|preview)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'bingbot','bingpreview'=>$this->makePattern('(bing(bot|preview))', true, true),

            //yandexbot/3.0
            //YandexImages/3.0
            //'yandexbot','yandeximages'=>'/(?<name>(yandex(bot|images)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'yandexbot','yandeximages'=>$this->makePattern('(yandex(bot|images))', true, true),

            //Mail.RU_Bot/2.0;
            //Mail.RU_Bot/Fast/2.0
            //Mail.RU_Bot/Favicons/2
            //Mail.RU_Bot/Robots/2.0; +http://go.mail.ru/help/robots)
            //Mail.RU_Bot/Img/2.0;
            //'mail.ru_bot','mail.ru_bot/fast','mail.ru_bot/favicons','mail.ru_bot/robots','mail.ru_bot/img'=>'/(?<name>(mail.ru\_(bot\/(fast|favicons|robots|img)|bot)))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'mail.ru_bot','mail.ru_bot/fast','mail.ru_bot/favicons','mail.ru_bot/robots','mail.ru_bot/img'=>$this->makePattern('(mail.ru\_(bot\/(fast|favicons|robots|img)|bot))', true, true),

            //Baiduspider/2.0
            //grapeshotcrawler/2.0
            //NetcraftSurveyAgent/1.0
            // 2GDPR/1.2
            //coccocbot-web/1.0
            //Mozilla/5.0 (compatible; Abonti/0.91 - http://www.abonti.com)
            //'baiduspider','grapeshotcrawler','netcraftsurveyagent','2gdpr','coccocbot-web','abonti'=>'/(?<name>(2gdpr|baiduspider|grapeshotcrawler|netcraftsurveyagent|coccocbot\-web|abonti))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'baiduspider','grapeshotcrawler','netcraftsurveyagent','2gdpr','coccocbot-web','abonti'=>$this->makePattern('(2gdpr|baiduspider|grapeshotcrawler|netcraftsurveyagent|coccocbot\-web|abonti)', true, true),

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
            //'007ac9 crawler','sistrix crawler','proximic','zmeu','12345bot','360spider','a1 website analyzer','ace explorer','activerefresh'=>'/(?<name>(sistrix|(007ac9|sistrix)\s*crawler|proximic|zmeu|12345|360spider|a1\s+website\s+analyzer|ace\s+explorer|activerefresh))/i',
            '007ac9 crawler','sistrix crawler','proximic','zmeu','12345bot','360spider','a1 website analyzer','ace explorer','activerefresh'=>$this->makePattern('(sistrix|(007ac9|sistrix)\s*crawler|proximic|zmeu|12345|360spider|a1\s+website\s+analyzer|ace\s+explorer|activerefresh)', false, false),



            //    A6-Indexer/1.0 (http://www.a6corp.com/a6-web-scraping-policy/)
            //        ActiveWorlds/3.xx (xxx)
            //'a6-indexer','activeworlds'=>'/(?<name>(a6\-indexer|activeworlds))(?<separator>(\/))(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'a6-indexer','activeworlds'=>$this->makePattern('(a6\-indexer|activeworlds)', true, true),

            //    A6-Indexer
            //    Activeworlds
            //adbeat_bot
            //adbeat.com/policy
            'a6-indexer-deprecated','activeworlds-deprecated','adbeat'=>$this->makePattern('(a6\-indexer|activeworlds|adbeat)', false, false),

            //    Acoon v4.9.5 (www.acoon.de)
            //    Acoon v4.10.1 (www.acoon.de)
            //    Mozilla/5.0 (compatible; AcoonBot/4.12.1; +http://www.acoon.de/robot.asp)
            //'acoonbot'=>'/(?<name>(aco(on|onbot)))(?<separator>(\s*|\/))(?<version>(v)\s*(\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'acoonbot'=>$this->makePattern('(aco(onbot|on))', true, true),
            //'acoonbot-test'=>sprintf('/(?<name>(AcoonBot))\s*(?<version>%s)/i', '(v)\s*(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)'),

            //    ActiveBookmark 1.x
            //'activebookmark'=>'/(?<name>(activebookmark))(?<separator>(\s*|\/))(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'activebookmark'=>$this->makePattern('(activebookmark)', true, true),

            //AddThis.com
            'addthis'=>$this->makePattern('(addthis\.com)', false, false),









            // Applications.
            // 1Password/1.2.3. ok
            //'1password'=>'/(?<name>(1password))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            '1password'=>$this->makePattern('(1password)', true, true),


            // Browsers.
            // 115Browser/8.6.1 ok
            // 115Browser/13.0.0 ok
            //115Browser/5.1.7
            //115Browser/B0B6B
            //'115browser'=>'/(?<name>(115browser))\/(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            //1stBrowser/45.0.2454.160
            //1stBrowser/42.0.2311.123
            //'1stbrowser'=>'/(?<name>(1stbrowser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            //Mb2345Browser/8.4oem
            //Mb2345Browser/14.2.1 ok
            //'mb2345browser'=>'/(?<name>((mb)2345browser))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            '115browser','1stbrowser','2345browser'=>$this->makePattern('((115|1st|mb2345)browser)', true, true),

            //1337Browser_V3.1
            //Mozilla/5.0 (Windows; U; Windows NT 6.0; en; rv:1.9.1.7) Gecko/20091221 1337Browser/3.1
            '1337browser'=>$this->makePattern('(1337browser)', true, true),

            // 2345chrome v2.5.0.5031 ok
            // 2345chrome v3.0.0.9739 ok
            //'2345chrome'=>'/(?<name>(2345chrome))\s*(?<version>(v)\s*(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i', // broken
            //'2345chrome'=>'/(?<name>(2345chrome))(?<separator>(\s*|\_|\/))(?<version>(?<title>(\w+))(?<number>((\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))))/i', // worked
            //'2345chrome'=>'/(?<name>(2345chrome))(?<separator>(\s*|\_|\/))(?<version>v?((\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)))/i', // final
            '2345chrome'=>$this->makePattern('(2345chrome)', true, true),

            // 2345Explorer/10.18.0.21318 ok
            // 2345Explorer/10.17.0.21258 ok
            // 2345Explorer 3.5.0.12816 ok
            // 2345Explorer v3.5.0.12816 ok
            // 2345Explorer/B2FC850769D
            // 2345Explorer/9.1.1.16851HH=11Runtime=lfhglmomfihibpkplgodklnokgbeajfhALICDN/
            '2345explorer'=>'/(?<name>(2345explorer))(?<separator>(\s*|\/))(?<version>v?\s*(\d+[.]\d+[.]\d+[.]\d+\w+)|(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)|(\w+))/i',
            //'2345explorer'=>$this->makePattern('(2345explorer)', true, true),


            // 2345Explorer deprecated
            // Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; 2345Explorer) deprecated
            // Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0; like Gecko; 2345Explorer) deprecated
            // Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0; 2345Explorer) deprecated
            '2345explorer-deprecated'=>'/(?<name>(2345explorer))/i',
            //'2345explorer-deprecated'=>$this->makePattern('(2345explorer)', '(\s*|\_|\/|\-))?', 'v?(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+)|()\w+)?'),


            // 37abc/1.6.5.14
            //'37abc'=>'/(?<name>(37abc))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            // 7Star/2.1.62.0
            //'7star'=>'/(?<name>(7star))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            // ABrowse 0.4
            // ABrowse 0.6
            //'abrowse'=>'/(?<name>(abrowse))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            //    Ad Muncher v4.94.34121
            //    Ad Muncher YB/3.5.1
            //    Ad Muncher v4.94.34121/7137 (Free)
            //'admuncher'=>'/(?<name>(ad muncher))(?<separator>(\s*|\/))(?<version>(v|yb\/)?\s*(\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            '37abc','7star','abrowse','ad-muncher'=>$this->makePattern('(37abc|7star|abrows(er|e)|ad\s*muncher)', true, true),

            //// 360SE
            // acoo browser
            // QIHU 360EE
            //    Ad Muncher
            '360se','360ee','acoo-browser','126browser','avant',
            'ad-muncher-deprecated'=>'/(?<name>(360se|qihu\s*360ee|(acoo\s*|126)browser|avant|ad\s*muncher))/i',


            //EdgeClient/7140.2017.0415.0051
            'edge-client'=>$this->makePattern('(edgeclient)', true, true),

            // Alienforce/9.0.1
            //'alienforce'=>'/(?<name>(alienforce))\/(?<version>(\d+[.]\d+[.]\d+[.]\d+)|(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            //amaya/11.3.1
            //AOL 9.0;
            //AOLBUILD/11.0.2541
            //Arora/0.8.0
            //Basilisk/20180202
            //blisk/11.0.25.41
            //BeakerBrowser/1.0.0-prerelease.7
            //BeakerBrowser/0.8.10
            //Electron/4.2.12
            //Electron/1.4.3
            //Brave Chrome/83.0.4103.116
            //Brave/83
            //Camino/1.0.3
            //Camino/1.0
            //Cliqzbot/1.0;
            //Edge/17.17134
            //Edge/18.18362
            // EdgA/46.05.2.5158
            'alien-force','amaya','aol','arora','basilisk','blisk','beaker-browser','electron','brave','camino','cliqz','edge'=>$this->makePattern('(alienforce|amaya|aolbuild|aol|arora|basilisk|blisk|beakerbrowser|electron|brave\s*chrome|brave|camino|cliqzbot|cliqz|edge|edga|edg)', true, true),

            //Opera/68.0.3618.31
            //OPR/36.0.2128.0
            //OPT/1.20.73
            //Whale/2.9.118.31
            //Whale/2.9.118.16
            'opera','opera-mobile','opera-touch','whale'=>$this->makePattern('(opera\s*(mobi|mini)|op(t|era)|whale)', true, true),

            //Blisk
            //Iron
            'blisk-deprecated','iron'=>$this->makePattern('(blisk|iron)', false, false),

            //Falkon/3.1.0
            //Konqueror/4.3;
            //konqueror/4.14.2
            //YaBrowser/17.4.3.195.10
            //YaBrowser/17.6.1.749
            //QtWebEngine/5.9.4
            //QtWebEngine/5.15.2
            //Chrome/90.0.4430.216
            //Chromium/81.0.4044.96
            //Chromium/83.0.4103.61
            'falkon','konqueror','yandex-browser','qt-web-engine','chrome','chromium'=>$this->makePattern('(falkon|konqueror|yabrowser|qtwebengine|chrome|chromium)', true, true),


            //Silk/1.0.13.81_10003810
            'amazon-silk-1st-gen'=>$this->makePattern('(silk)', true, '(\d+\.\d+\.\d+\.\d+\_\d+)'),
            //Silk/44.1.54
            //Comodo_Dragon/6.0.0.10
            //ASW/1.48.2066.95
            //Avast/70.1.973.110
            'comodo-dragon','amazon-silk','avast-secure'=>$this->makePattern('(comodo\_dragon|silk|a(sw|vast))', true, true),

            //IceDragon/65.0.2
            //coc_coc_browser/83.0.144
            //qutebrowser/1.13.1
            //epic/9.0.1
            'ice-dragon','coc-coc','epic','qute-browser'=>$this->makePattern('(icedragon|epic|(coc\_coc\_|qute)browser)', true, true),

            //QuteBrowser
            //WCGBrowser (browser.py)
            'qute-browser-deprecated','wcgbrowser'=>$this->makePattern('(qutebrowser|browser.py)', false, false),

            //Dillo/3.0.5 (X11; Linux x64)
            //Dillo/0.7.3
            //Dillo/2.0 Lightning/5.4
            //Mozilla/4.0 (compatible; Dillo 3.0)
            //Dooble/1.40
            //Dooble/2.1.9.2
            //Dooble/1.56d
            //ELinks/0.11.1-1.2-debian
            //ELinks/0.11.7
            //ELinks/0.13.GIT
            //Epiphany/1.4.7
            //Epiphany/2.14
            //Epiphany/605.1.15
            'dillo','dooble','elinks','epiphany'=>$this->makePattern('(dillo|dooble|elinks|epiphany)', true, true),

            //Vivaldi/1.92.917.43
            //Eolie/605.1.15
            //Links (2.23;
            //Flock/2.0
            //Flock/0.7.13.1
            //Flock/1.0RC3
            //Waterfox/78.10.0
            'vivaldi','eolie','links','flock','water-fox'=>$this->makePattern('(vivaldi|eolie|links|flock|waterfox)', true, true),

            //PaleMoon/28.10.3a1
            //PaleMoon/29.2.1
            //SeaMonkey/2.53.8
            //SeaMonkey/2.1
            //Otter/0.9.99
            //salamWeb/1.2.3.4
            //salam Browser
            //UBrowser/7.0.185.1002
            //UCBrowser/11.3.8.976
            'pale-moon','sea-monkey','otter','salam-web','uc-browser'=>$this->makePattern('(palemoon|seamonkey|otter|salamweb|u(browser|cbrowser))', true, true),

            //Firefox/86.0.1
            //Firefox/89.0/MDZ1X7f7-14
            //Firefox/89.1
            //Galeon/1.3.21
            //iCab/5.0
            //iCab/2.9.5
            //iCab 2.9.5
            //Lynx/2.8.5rel.1
            //Lynx/2.8.5dev.16
            'firefox','galeon','icab','lynx'=>$this->makePattern('(firefox|galeon|icab|lynx)', true, true),

            //MSIE 6.0;
            //MSIE 9.0;
            //Midori 0.4
            //Midori/0.1.8
            //NetSurf/3.2
            //NetSurf/1.2
            //NetSurf/3.10
            //Maxthon/4.4.8.1000
            // Safari/604.1
            'msie','midori','net-surf','maxthon','safari'=>$this->makePattern('(msie|midori|netsurf|maxthon|safari)', true, true),

            //Maxthon
            'maxthon-deprecated'=>$this->makePattern('(maxthon)', false, false),

            default => throw new InvalidArgumentException(sprintf('Unexpected browser : "%s"', $identifier))
        };//end match
    }
}
