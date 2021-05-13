<?php


namespace Mishusoft\Framework\Chipsets\Http\Browser;


class DataObject
{
    /*file list of various collected data*/
    const userAgentListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.user.agents.list.csv';
    const webBrowserListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.all.list.json';
    const webBrowserAppCodeListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.app.code.list.json';
    const webBrowserLayoutListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.layout.list.json';
    const devicesListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.devices.list.json';
    const devicesCategoryListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.devices.category.list.json';
    const devicesPlatformWMNameListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.devices.platform.wmn.list.json';
    const devicesArchitectureListFile = PHP_RUNTIME_REGISTRIES_PATH . 'browser.devices.architecture.list.json';

    protected function getDevicesList(): array
    {
        /*Devices List*/
        return array(
            /*console*/
            '3DS' => array('Browser' => array('name' => 'Nintendo Browser', 'architecture' => '32-bit', 'developer' => 'Nintendo',
                'rendering engine' => 'WebKit.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Nintendo 3DS', 'architecture' => '32-bit', 'developer' => 'Nintendo',),
                'Device' => array('name' => '3DS', 'type' => 'Console', 'vendor' => 'Nintendo', 'brand' => 'Nintendo',),),
            'DSi' => array('Browser' => array('name' => 'Nintendo Browser', 'architecture' => '32-bit', 'developer' => 'Nintendo',
                'rendering engine' => 'Presto.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Nintendo DSi', 'architecture' => '32-bit', 'developer' => 'Nintendo',),
                'Device' => array('name' => 'DSi', 'type' => 'Console', 'vendor' => 'Nintendo', 'brand' => 'Nintendo',),),
            'New 3DS' => array('Browser' => array('name' => 'Nintendo Browser', 'architecture' => '32-bit', 'developer' => 'Nintendo',
                'rendering engine' => 'WebKit.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Nintendo 3DS', 'architecture' => '32-bit', 'developer' => 'Nintendo',),
                'Device' => array('name' => 'New 3DS', 'type' => 'Console', 'vendor' => 'Nintendo', 'brand' => 'Nintendo',),),
            'Playstation Portable' => array('Browser' => array('name' => 'Sony PSP', 'architecture' => '32-bit', 'developer' => 'Sony', 'type' => 'Browser.',),
                'Platform' => array('name' => 'JAVA', 'architecture' => '32-bit', 'developer' => 'Oracle',),
                'Device' => array('name' => 'Playstation Portable', 'type' => 'Console', 'vendor' => 'Sony', 'brand' => 'Sony',),),
            'PlayStation Vita' => array('Browser' => array('name' => 'Playstation Browser', 'developer' => 'Sony', 'rendering engine' => 'WebKit.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'PlayStation Vita', 'developer' => 'Oracle',),
                'Device' => array('name' => 'PlayStation Vita', 'type' => 'Console', 'vendor' => 'Sony', 'brand' => 'Sony',),),
            'Switch' => array('Browser' => array('name' => 'Nintendo Browser', 'architecture' => '32-bit', 'developer' => 'Nintendo',
                'rendering engine' => 'WebKit.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Nintendo Switch', 'architecture' => '32-bit', 'developer' => 'Nintendo',),
                'Device' => array('name' => 'Switch', 'type' => 'Console', 'vendor' => 'Nintendo', 'brand' => 'Nintendo',),),

            /*Desktops*/
            "Amiga" => array('Browser' => array('name' => 'IBrowse', 'architecture' => '32-bit', 'developer' => 'Stefan Burstroem', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Amiga OS', 'architecture' => '32-bit', 'developer' => 'Commodore International',),
                'Device' => array('name' => 'Amiga', 'type' => 'Desktop', 'vendor' => 'Commodore International', 'brand' => 'Commodore',),),
            "DA241HL" => array('Browser' => array('name' => 'Chrome', 'architecture' => '32-bit', 'developer' => 'Google Inc', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Android', 'architecture' => '32-bit', 'developer' => 'Google Inc',),
                'Device' => array('name' => 'DA 241HL', 'type' => 'Desktop', 'vendor' => 'Acer', 'brand' => 'Acer',),),

            /*car*/
            'tesla' => array('Browser' => array('name' => 'Tesla Car Browser', 'architecture' => '32-bit', 'developer' => 'Tesla Motors.', 'rendering engine' => 'Blink.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Linux', 'architecture' => '32-bit', 'developer' => 'Linux Foundation',),
                'Device' => array('name' => 'Car', 'type' => 'Car Entertainment Framework', 'vendor' => 'Tesla Motors', 'brand' => 'Tesla',),),
            'QtCarBrowser' => array('Browser' => array('name' => 'Tesla Car Browser', 'architecture' => '32-bit', 'developer' => 'Tesla Motors.', 'rendering engine' => 'Blink.', 'type' => 'Browser.',),
                'Platform' => array('name' => 'Linux', 'architecture' => '32-bit', 'developer' => 'Linux Foundation',),
                'Device' => array('name' => 'Car', 'type' => 'Car Entertainment Framework', 'vendor' => 'Tesla Motors', 'brand' => 'Tesla',),),

            /*Linux Desktop*/
            'freebsd' => array('Platform' => array('name' => 'FreeBSD', 'architecture' => '32-bit', 'developer' => 'FreeBSD Foundation',),
                'Device' => array('name' => 'Computer', 'type' => 'Linux Desktop',),),
            'CrOS' => array('Platform' => array('name' => 'Chrome OS', 'architecture' => '32-bit', 'developer' => 'Google Inc',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'Ubuntu' => array('Platform' => array('name' => 'Ubuntu OS', 'architecture' => '32-bit', 'developer' => 'Canonical Inc',),
                'Device' => array('name' => 'Computer', 'type' => 'Linux Desktop',),),
            'Arch Linux' => array('Platform' => array('name' => 'Arch Linux', 'architecture' => '32-bit', 'developer' => 'Arch Linux',),
                'Device' => array('name' => 'Computer', 'type' => 'Linux Desktop',),),
            'manjaro' => 'manjaro',
            'linux' => array('Platform' => array('name' => 'Linux', 'architecture' => '32-bit', 'developer' => 'Linux Foundation',),
                'Device' => array('name' => 'Computer', 'type' => 'Linux Desktop',),),
            'debian' => 'Debian',
            'sunos' => 'Sun Solaris',
            'beos' => 'BeOS',
            'apachebench' => 'ApacheBench',
            'aix' => 'AIX',
            'irix' => 'Irix',
            'osf' => 'DEC OSF',
            'hp-ux' => 'HP-UX',
            'netbsd' => 'NetBSD',
            'bsdi' => 'BSDi',
            'openbsd' => 'OpenBSD',
            'gnu' => 'GNU/Linux',
            'unix' => 'Unknown Unix OS',
            'ubuntu' => 'Ubuntu',
            'RISC OS' => 'RISC OS',
            'Darwin' => 'MAC OS',
            'Haiku' => 'Haiku OS',
            'FreeMiNT' => 'FreeMiNT OS',


            /*Windows Desktop*/
            'windows phone 8' => array('Platform' => array('name' => 'Windows Phone 8', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Windows Phone', 'type' => 'phone',),),
            'windows phone os 7' => array('Platform' => array('name' => 'Windows Phone 7', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Windows Phone', 'type' => 'phone',),),
            'windows nt 10' => array('Platform' => array('name' => 'Windows 10', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 6.3' => array('Platform' => array('name' => 'Windows 8.1', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 6.2' => array('Platform' => array('name' => 'Windows 8', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 6.1' => array('Platform' => array('name' => 'Windows 7', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 6.0' => array('Platform' => array('name' => 'Windows Longhorn', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 5.2' => array('Platform' => array('name' => 'Windows 2003', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 5.1' => array('Platform' => array('name' => 'Windows XP', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows xp' => array('Platform' => array('name' => 'Windows XP', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 5.0' => array('Platform' => array('name' => 'Windows 2000', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows me' => array('Platform' => array('name' => 'Windows ME', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows nt 4.0' => array('Platform' => array('name' => 'Windows NT 4.0', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'winnt4.0' => array('Platform' => array('name' => 'Windows NT 4.0', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'winnt 4.0' => array('Platform' => array('name' => 'Windows NT', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'winn\/t' => array('Platform' => array('name' => 'Windows NT', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows 98' => array('Platform' => array('name' => 'Windows 98', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'win98' => array('Platform' => array('name' => 'Windows 98', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'windows 95' => array('Platform' => array('name' => 'Windows 95', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'win95' => array('Platform' => array('name' => 'Windows 95', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            'win16' => array('Platform' => array('name' => 'Windows 3.11', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),
            /*Macintosh*/
            'ppc' => 'Macintosh',
            'macintosh|mac os x' => 'Mac OS X',
            'mac_powerpc' => 'Mac OS 9',
            'os x' => 'Mac OS X',
            'ppc mac' => 'Power PC Mac',

            /*Phone*/
            'android' => 'Android',
            'webos' => 'Mobile',

            // legacy array, old values commented out
            'mobileexplorer' => 'Mobile Explorer',
            //'openwave'		=> 'Open Wave',
            //'opera mini'		=> 'Opera Mini',
            //'operamini'		=> 'Opera Mini',
            //'elaine'			=> 'Palm',
            'palmsource' => 'Palm',
            //'digital paths'	=> 'Palm',
            //'avantgo'			=> 'Avantgo',
            //'xiino'			=> 'Xiino',
            'palmscape' => 'Palmscape',
            //'nokia'			=> 'Nokia',
            //'ericsson'		=> 'Ericsson',
            //'blackberry'		=> 'BlackBerry',
            //'motorola'		=> 'Motorola'
            // Phones and Manufacturers
            'motorola' => "Motorola",
            'nokia' => "Nokia",
            'iphone' => "Apple iPhone",
            'ipad' => "iPad",
            'ipod' => "Apple iPod Touch",
            'sony' => "Sony Ericsson",
            'ericsson' => "Sony Ericsson",
            'blackberry' => "BlackBerry",
            'cocoon' => "O2 Cocoon",
            'blazer' => "Treo",
            'lg' => "LG",
            'amoi' => "Amoi",
            'xda' => "XDA",
            'mda' => "MDA",
            'vario' => "Vario",
            'htc' => "HTC",
            'samsung' => "Samsung",
            'sharp' => "Sharp",
            'sie-' => "Siemens",
            'alcatel' => "Alcatel",
            'benq' => "BenQ",
            'ipaq' => "HP iPaq",
            'mot-' => "Motorola",
            'playstation portable' => "PlayStation Portable",
            'hiptop' => "Danger Hiptop",
            'nec-' => "NEC",
            'panasonic' => "Panasonic",
            'philips' => "Philips",
            'sagem' => "Sagem",
            'sanyo' => "Sanyo",
            'spv' => "SPV",
            'zte' => "ZTE",
            'sendo' => "Sendo",

            // Operating Systems
            'symbian' => "Symbian",
            'SymbianOS' => "SymbianOS",
            'elaine' => "Palm",
            'palm' => "Palm",
            'series60' => "Symbian S60",
            'windows ce' => "Windows CE",

            // Browsers
            'obigo' => "Obigo",
            'netfront' => "Netfront Browser",
            'openwave' => "Openwave Browser",
            'mobilexplorer' => "Mobile Explorer",
            'operamini' => "Opera Mini",
            'opera mini' => "Opera Mini",

            // Other
            'digital paths' => "Digital Paths",
            'avantgo' => "AvantGo",
            'xiino' => "Xiino",
            'novarra' => "Novarra Transcoder",
            'vodafone' => "Vodafone",
            'docomo' => "NTT DoCoMo",
            'o2' => "O2",

            // Fallback
            'mobile' => "Generic Mobile",
            'wireless' => "Generic Mobile",
            'j2me' => "Generic Mobile",
            'midp' => "Generic Mobile",
            'cldc' => "Generic Mobile",
            'up.link' => "Generic Mobile",
            'up.browser' => "Generic Mobile",
            'smartphone' => "Generic Mobile",
            'cellphone' => "Generic Mobile",

            /*Raspberry Pi*/
            'Raspbian' => array('Platform' => array('name' => 'Raspbian Pi', 'architecture' => '32-bit', 'developer' => 'Raspberry Pi Foundation',),
                'Device' => array('name' => 'Computer', 'type' => 'Desktop',),),

            /*Bots*/
            'Mail.RU_Bot' => array('Platform' => array('name' => 'Mail.ru Crawler', 'architecture' => '32-bit', 'developer' => 'Mail RU',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'Googlebot' => array('Platform' => array('name' => 'Googlebot Crawler', 'architecture' => '32-bit', 'developer' => 'Google Inc',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'Baiduspider' => array('Platform' => array('name' => 'Baidu Spider', 'architecture' => '32-bit', 'developer' => 'Baidu Inc',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'bingbot' => array('Platform' => array('name' => 'Bing Bot', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'msnbot' => array('Platform' => array('name' => 'MSN Bot', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'MJ12bot' => array('Platform' => array('name' => 'Majestic-12 Distributed Search Bot', 'architecture' => '32-bit', 'developer' => 'Majestic',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'Yahoo! Slurp' => array('Platform' => array('name' => 'Yahoo! Slurp Web Crawler Bot', 'architecture' => '32-bit', 'developer' => 'Yahoo LLC',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'MegaIndex.ru' => array('Platform' => array('name' => 'MegaIndex Crawler Bot', 'architecture' => '32-bit', 'developer' => 'MegaIndex.ru',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'AhrefsBot' => array('Platform' => array('name' => 'Ahrefs Backlink Research Bot', 'architecture' => '32-bit', 'developer' => 'Ahrefs',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'DotBot' => array('Platform' => array('name' => 'OpenSite Explorer Crawler', 'architecture' => '32-bit', 'developer' => 'The Moz',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'JobboerseBot' => array('Platform' => array('name' => 'Jobboerse Crawler', 'architecture' => '32-bit', 'developer' => 'jobboerse.com',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'SemrushBot' => array('Platform' => array('name' => 'SEMRush Crawler', 'architecture' => '32-bit', 'developer' => 'SEMrush',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'YandexBot' => array('Platform' => array('name' => 'Yandex Search Bot', 'architecture' => '32-bit', 'developer' => 'Yandex',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'seoscanners.net' => array('Platform' => array('name' => 'SEO Scanners Crawler Bot', 'architecture' => '32-bit', 'developer' => 'SEO Scanners',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'SEOkicks-Robot' => array('Platform' => array('name' => 'SEOkicks Crawler', 'architecture' => '32-bit', 'developer' => 'SEOkicks',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'CheckMarkNetwork' => array('Platform' => array('name' => 'CheckMark Network Crawler', 'architecture' => '32-bit', 'developer' => 'CheckMark',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'BingPreview' => array('Platform' => array('name' => 'Bing Preview Snapshot Generator', 'architecture' => '32-bit', 'developer' => 'Microsoft Corp',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'VoilaBot BETA' => array('Platform' => array('name' => 'VoilaBot BETA', 'architecture' => '32-bit', 'developer' => 'orange ft group',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'adscanner' => array('Platform' => array('name' => 'AdScanner Crawler', 'architecture' => '32-bit', 'developer' => 'AdScanner',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),
            'Qwantify' => array('Platform' => array('name' => 'Qwantify Search Crawler', 'architecture' => '32-bit', 'developer' => 'Qwantify',),
                'Device' => array('name' => 'Crawler', 'type' => 'Server',),),

            /*Tablets
            "101 G10",
            "101 G4",
            "101 G9",
            "101 Neon",
            "10b G3",
            "50 Titanium",
            "7056G",
            "8",
            "80 G9",
            "80 Xenon",
            "9 G2",
            "97c Platinum",
            "A10-70 A7600 Wi-Fi",
            "A10-70 A7600 Wi-Fi + 3G",
            "A210",
            "A211",
            "A510",
            "A511",
            "A7-50 A3500 Wi-Fi + 3G",
            "Access 101 3G V2",
            "AGS-W09",
            "AirTab P970g",
            "AP-106",
            "Aquaris M10",
            "Aquaris M10 FHD",
            "Aries 101",
            "Aries 785",
            "Art 3G",
            "AT100",
            "Canvas Tab P480",
            "CinemaTV 3G",
            "D7.2 3G",
            "Edison",
            "Eee Pad SL101 Slider",
            "Eee Pad Transformer TF101",
            "Eee Pad Transformer TF101G",
            "Elegance 8 3G",
            "Ellipsis 8",
            "Excite AT200",
            "eXcite Pure",
            "Fire 7 (2017)",
            "Fire HD 10 (2015)",
            "Fire HD 6 (2014)",
            "Fire HD 7 (4th Gen)",
            "Fire HD 8 (2015)",
            "Fire HD 8 (2016)",
            "Fire HD 8 (2017)",
            "Fire HD 8 (2018)",
            "Fire HDX 8.9 (2014)",
            "Fire HDX 8.9 WiFi (2014)",
            "Flyer",
            "Flylife Connect 7 3G",
            "Folio 100",
            "Fonepad 7 K00Z",
            "Fonepad HD 7",
            "Fonepad ME371MG",
            "FreeTAB 1001",
            "FreeTAB 9000 IPS IC",
            "G Pad 10.1",
            "G Pad 7.0 4G LTE",
            "G Pad 8.0 4G LTE",
            "G Pad 8.3",
            "G Pad 8.3 LTE",
            "G100W",
            "Galaxy J1 4G",
            "Galaxy Note 10.1",
            "Galaxy Note 10.1 2014 Edition 3G & Wifi",
            "Galaxy Note 10.1 2014 Edition Wi-Fi",
            "Galaxy Note 10.1 2014 Edition WI-FI + 4G LTE",
            "Galaxy Note 10.1 3G & WiFi",
            "Galaxy Note 10.1 LTE",
            "Galaxy Note 10.1 WiFi",
            "Galaxy Note 8.0",
            "Galaxy Note 8.0 (AT&T)",
            "Galaxy Note Pro 12.2 LTE",
            "Galaxy Note Pro 12.2 Wi-Fi",
            "Galaxy Tab",
            "Galaxy Tab 10.1",
            "Galaxy Tab 10.1N",
            "Galaxy Tab 10.1V",
            "Galaxy Tab 2 10.1",
            "Galaxy Tab 2 10.1 WiFi",
            "Galaxy Tab 2 7.0",
            "Galaxy Tab 2 7.0 3G",
            "Galaxy Tab 3 10.1 3G",
            "Galaxy Tab 3 10.1 3G WiFi",
            "Galaxy Tab 3 10.1 LTE",
            "Galaxy Tab 3 7.0",
            "Galaxy Tab 3 7.0 3G",
            "Galaxy Tab 3 7.0 4G (Sprint)",
            "Galaxy Tab 3 8.0",
            "Galaxy Tab 3 8.0 3G",
            "Galaxy Tab 3 8.0 LTE",
            "Galaxy Tab 3 Kids",
            "Galaxy Tab 3 Lite 7",
            "Galaxy Tab 3 Lite 7.0 3G",
            "Galaxy Tab 3 V",
            "Galaxy Tab 4 10.1",
            "Galaxy Tab 4 10.1 16GB",
            "Galaxy Tab 4 10.1 LTE",
            "Galaxy Tab 4 10.1 LTE (Verizon)",
            "Galaxy Tab 4 10.1 Wi-Fi",
            "Galaxy Tab 4 10.1 WiFi",
            "Galaxy Tab 4 7.0",
            "Galaxy Tab 4 7.0 3G",
            "Galaxy Tab 4 7.0 LTE (Japan)",
            "Galaxy Tab 4 7.0 (Wi-Fi) 8GB",
            "Galaxy Tab 4 7.0 WiFi + LTE",
            "Galaxy Tab 4 8.0 3G",
            "Galaxy Tab 4 8.0 4G (AT&T)",
            "Galaxy Tab 4 8.0 4G (Verizon)",
            "Galaxy Tab 4 8.0 Wi-Fi",
            "Galaxy Tab 7.0 Plus",
            "Galaxy Tab 7.7",
            "Galaxy Tab 8.9",
            "Galaxy Tab 8.9 LTE",
            "Galaxy Tab A 10.1 Wi-Fi",
            "Galaxy Tab A (7.0, Wi-Fi, 2016)",
            "Galaxy Tab A 8.0",
            "Galaxy Tab A 8.0 4G",
            "Galaxy Tab A 8.0 4G (T-Mobile)",
            "Galaxy Tab A 8.0 LTE (2017)",
            "Galaxy Tab A 8.0 Wi-Fi (2017)",
            "Galaxy Tab A 9.7",
            "Galaxy Tab A 9.7 LTE",
            "Galaxy Tab A 9.7 Wifi",
            "Galaxy Tab A 9.7 WiFi with S Pen",
            "Galaxy Tab E 8.0 (AT&T)",
            "Galaxy Tab E 9.6 3G",
            "Galaxy Tab E Lite 7.0",
            "Galaxy Tab Pro 10.1",
            "Galaxy Tab Pro 10.1 WiFi",
            "Galaxy Tab Pro 12.2",
            "Galaxy Tab Pro 8.4 LTE",
            "Galaxy Tab Pro 8.4 Wi-Fi",
            "Galaxy Tab S 10.5",
            "Galaxy Tab S 10.5 LTE",
            "Galaxy Tab S 4G (Verizon)",
            "Galaxy Tab S 8.4 LTE",
            "Galaxy Tab S 8.4 Wi-Fi",
            "Galaxy Tab S2 8.0",
            "Galaxy Tab S2 8.0 LTE",
            "Galaxy Tab S2 8.0 Wi-Fi",
            "Galaxy Tab S2 9.7 LTE",
            "Galaxy Tab S2 9.7 Wi-Fi",
            "Galaxy Tab S2 9.7 WiFi",
            "Galaxy Tab S2 Plus",
            "Galaxy Tab S3",
            "Galaxy Tab S4 (10.5)",
            "Galaxy Tab S5e",
            "Galaxy View LTE (AT&T)",
            "Global Primo 76",
            "Grace 3118 3G",
            "HIT 3G",
            "HTC Nexus 9",
            "Hudl 2",
            "Iconia A",
            "Iconia A1-810",
            "Iconia A1-830",
            "Iconia B1-710",
            "Iconia B1-711",
            "Iconia B1-A71",
            "Iconia One 7",
            "Iconia Tab A3",
            "Iconia Tab A700",
            "Iconia Tab A701",
            "IdeaPad A10",
            "IdeaPad A660",
            "IdeaPad K1",
            "IdeaTab A2107A-H",
            "IdeaTab A2109A",
            "IdeaTab A3000-H",
            "IdeaTab A7-40",
            "Ideatab A8-50 WI-FI",
            "Ideatab A8-50 WI-FI + 3G",
            "IdeaTab S5000-F",
            "IdeaTab S5000-H",
            "IdeaTab S6000-F",
            "IdeaTab S6000-F Wi-Fi, 16GB",
            "IdeaTab S6000-H",
            "iDnD7",
            "ImPAD 9708",
            "INSIGNIA 785 PRO",
            "iP890 3G",
            "iPad",
            "K012",
            "Kindle Fire (5th Gen)",
            "Kindle Fire 7",
            "Kindle Fire HD 7",
            "Kindle Fire HD 8.9",
            "Kindle Fire HD 8.9 Wi-Fi",
            "Kindle Fire HDX 7 (3rd Gen)",
            "Kindle Fire HDX 7 WiFi (3rd Gen)",
            "Kindle Fire HDX 8.9",
            "Kyros MID8127",
            "LifeTab E10312",
            "LifeTab E10316",
            "LifeTab E10320",
            "LifeTab P9514",
            "LifeTab P9516",
            "LifeTab S1033X",
            "LifeTab S1034X",
            "Lifetab S785X",
            "LifeTab S9714",
            "M Bot Tab 103",
            "M3 Lite",
            "MatePad Pro",
            "MatePad Pro LTE",
            "Max M8 3G",
            "Maxi 10L",
            "Mediapad",
            "MediaPad 10 FHD",
            "MediaPad 10 Link",
            "MediaPad 7 Lite",
            "MediaPad M1 8.0",
            "MediaPad T1 10",
            "Mediapad T1 10 Pro",
            "MediaPad T1 7.0",
            "MediaPad T1 8.0",
            "MediaPad T3 10",
            "MeMO Pad 10",
            "MeMO Pad 7",
            "MeMO Pad 8 ME581CL",
            "MeMO Pad FHD 10",
            "Memo Pad HD7",
            "MeMO Pad ME172V",
            "MeMO Pad Smart 10",
            "Mi Pad",
            "Mini 3G",
            "Multipad",
            "MultiPad 2 PRO DUO 7.0",
            "Multipad 2 Ultra Duo 8.0 3G",
            "MultiPad 4 Diamond 10.1 3G",
            "MultiPad 4 Diamond 7.85, 3G",
            "MultiPad 4 Quantum 10.1",
            "MultiPad 4 Quantum 10.1 3G",
            "MultiPad 4 Quantum 7.85",
            "MultiPad 4 Quantum 7.85 3G",
            "MultiPad 4 Quantum 9.7",
            "MultiPad 4 Ultimate 8.0 3G",
            "MultiPad 4 Ultra Quad 8.0 3G",
            "MultiPad 5080 Pro",
            "Multipad 7.0 Prime 3G",
            "MultiPad 7.0 Prime Duo",
            "MultiPad 8.0 HD",
            "MultiPad 8.0 Pro Duo",
            "MultiPad Color 7.0 3G WiFi",
            "MultiPad Ranger 7.0 3G",
            "MultiPad Ranger 8.0 3G Wifi",
            "MultiPad Thunder 7.0i",
            "MultiPad Wize 3047 3G",
            "MultiPad Wize 3057 3G",
            "NetTab Skat Quad",
            "NetTAB Sky HD 3G",
            "NetTAB Thor 3G Quad",
            "Nexus 10",
            "Nexus 7",
            "Nook",
            "Nook BNTV250A",
            "Nook Color Wifi",
            "Nook HD+",
            "Noon",
            "Novo 10 Hero",
            "Novo 7 Aurora II",
            "Novo 7 Numy AX1 3G",
            "NT-1711",
            "One 7",
            "One Touch POP 8 3G",
            "One Touch Pop7 8GB WiFi 3G",
            "Optima 7.07 3G",
            "Optima 7202 3G",
            "Optima E7.1 3G",
            "PadFone",
            "PadFone 2",
            "Peoples Tablet",
            "Picasso",
            "Picasso_E",
            "Pixel C",
            "Pixi 3 (8) 3G",
            "Plane 10.3 3G",
            "Plane 10.5 3G",
            "Plane 8713T 8.0 3G",
            "Plane S7.0 3G",
            "PlayBook",
            "Q-pad",
            "Regza AT300",
            "Regza AT300SE",
            "RMD-1028",
            "RMD-751",
            "S920_ROW",
            "Shield K1",
            "Smart II 3G",
            "Smart Tab 3G",
            "Smart Tab 4",
            "Smart Tab 4 LTE",
            "Smart Tab III 10",
            "SmartTab II 10",
            "Space",
            "sQuad 7.82 3G",
            "Streak",
            "STYLISTIC M532",
            "Surfer 8.31 3G",
            "SURFpad 4 L",
            "SurfTab Breeze 10.1 Quad",
            "T1-A21w",
            "T700i 3G",
            "T72ER 3G",
            "T72H 3G",
            "T72HM 3G",
            "T72M 3G",
            "T72N 3G",
            "T80 3G",
            "Tab 10",
            "Tab 2",
            "Tab 2 A7-10",
            "Tab 2 A7-30",
            "Tab 2 A8-50 LTE",
            "Tab 2 Wi-Fi",
            "Tab 3",
            "Tab 3 10 Wi-Fi",
            "TAB 824",
            "Tab A 10.1 Wi-Fi (2019)",
            "TAB A7-30 Wi-Fi",
            "TAB A7-30 Wi-Fi + 3G",
            "Tab3 10 Business LTE",
            "TAB3 7",
            "Tab7ID",
            "Tablet P",
            "Tablet PC 4",
            "Tablet S",
            "Talk 79 3G",
            "TF-MID806G",
            "ThinkPad Tablet",
            "Touchpad",
            "TRA-901G",
            "Transformer Pad TF103C",
            "Transformer Pad TF103CG",
            "Transformer Pad TF300T",
            "Transformer Pad TF303CL",
            "Transformer Pad TF700T",
            "Transformer Pad TF701T",
            "Transformer Prime",
            "TX22",
            "TX97",
            "TZ709",
            "U30GT",
            "U30GT2",
            "Uno X10",
            "V989",
            "Vangogh",
            "Vega",
            "Venue 7 3730",
            "Venue 7 HSPA+",
            "Venue 8 3830",
            "Venue 8 HSPA+",
            "ViewPad7",
            "Vodafone 858",
            "Voyager II Wi-Fi",
            "Voyager Pro 7",
            "VT10416-2",
            "WeTab",
            "X-pad iX 7 3G",
            "X98 Air III",
            "Xelio 7 Pro",
            "Xoom",
            "Xperia Tablet S",
            "Xperia Tablet Z",
            "Xperia Tablet Z LTE",
            "Xperia Tablet Z WiFi",
            "Xperia Tablet Z2 LTE",
            "Xperia Tablet Z2 WiFi",
            "Xperia Z4 LTE",
            "Yoga 8 3G",
            "Yoga 8 3G + WiFi",
            "Yoga B6000-F",
            "Yoga B8000-F",
            "Yoga Book",
            "Yoga Tab 3",
            "Yoga Tab 3 10",
            "Yoga Tab 3 8",
            "Yoga Tab 3 8 Wi-Fi",
            "Yoga Tab 3 Pro 10.1 Wi-Fi",
            "Yoga Tablet 10 3G",
            "Yoga Tablet 10 HD+",
            "Yoga Tablet 2 1050F",
            "Yoga Tablet 2 1050L",
            "Yoga Tablet 2 830",
            "Zaffire 785",
            "ZenPad 10",
            "ZenPad 10 Z300M",
            "ZenPad 7.0 Z370C",
            "ZenPad S 8.0 Z580C",*/

            /*Televisions*/
            'apple tv' => array('name' => 'AppleTV', 'device' => 'Television', 'manufacture' => 'Apple Inc.',),
            'chromecast' => array('name' => 'Chromecast', 'device' => 'Television', 'manufacture' => 'Google Inc.',),
            'aftb' => array('name' => 'Fire TV', 'device' => 'Television', 'manufacture' => 'Amazon.com, Inc.',),
            'freebox' => array('name' => 'Freebox Revolution', 'device' => 'Television', 'manufacture' => 'FREE SAS.',),
            'googletv' => array('name' => 'Google TV', 'device' => 'Television', 'manufacture' => 'Sony.',),
            'netbox' => array('name' => 'Netbox', 'device' => 'Television', 'manufacture' => 'Sony.',),
            'playstation 3' => array('name' => 'Playstation 3', 'device' => 'Television', 'manufacture' => 'Sony.',),
            'playstation 4' => array('name' => 'Playstation 4', 'device' => 'Television', 'manufacture' => 'Sony.',),
            'kdl32Cx525' => array('name' => 'KDL32CX525', 'tdeviceype' => 'Television', 'manufacture' => 'Sony.',),
            'nsz-gs7\/gx70' => array('name' => 'NSZ-GS7/GX70', 'device' => 'Television', 'manufacture' => 'Sony.',),
            'h96 pro\+' => array('name' => 'H96 Pro+', 'device' => 'Television', 'manufacture' => 'Alfawise.',),
            'mx enjoy tv' => array('name' => 'MX Enjoy TV BOX', 'device' => 'Television', 'manufacture' => 'Geniatech.',),
            'smarttv2016' => array('name' => 'Series J (2016)', 'device' => 'Television', 'manufacture' => 'Samsung.',),
            'smart-tv' => array('name' => 'Smart TV', 'device' => 'Television', 'manufacture' => 'Samsung.',),
            'tpm171e' => array('name' => 'TPM171E', 'device' => 'Television', 'manufacture' => 'Philips.',),
            'smarttva' => array('name' => 'TV', 'device' => 'Television', 'manufacture' => 'LG.',),
            'vap430' => array('name' => 'VAP430', 'device' => 'Television', 'manufacture' => 'Vizio.',),
            'viera' => array('name' => 'Viera TV', 'device' => 'Television', 'manufacture' => 'Panasonic.',),
            'webtv' => array('name' => 'WebTV', 'device' => 'Television', 'manufacture' => 'Microsoft.',),
            'xbox' => array('name' => 'Xbox 360', 'device' => 'Television', 'manufacture' => 'Microsoft.',),
            'xbox one' => array('name' => 'Xbox One', 'device' => 'Television', 'manufacture' => 'Microsoft.',),
            'wii' => array('name' => 'Wii', 'device' => 'Television', 'manufacture' => 'Nintendo.',),
            'wiiu' => array('name' => 'WiiU', 'device' => 'Television', 'manufacture' => 'Nintendo.',),
            'x96 mini' => array('name' => 'X96 mini', 'device' => 'Television', 'manufacture' => 'ShySky.',),
        );
    }

    protected function getDevicesCategoryList(): array
    {
        /*Devices Categories*/
        return array(
            'linux' => 'linux',
            'mac' => 'mac',
            'win' => 'win',
            'mobi' => 'mobi',
        );
    }

    protected function getDevicesArchitectureList(): array
    {
        /*Devices architecture List*/
        return array(
            /*old model computers*/
            'Babbage' => '50 d',
            'Zuse Z3' => '22 Bit',
            'ABC' => '50 Bit',
            'Harvard Mark I' => '23 d',
            'ENIAC I' => '20 d',
            'Manchester Baby' => '32 Bit',
            'UNIVAC I' => '12 d',
            'IAS machine' => '40 Bit',
            'Fast Universal Digital Computer M-2' => '34 bit',
            'IBM 701' => '36 bit',
            'UNIVAC 60|IBM 702|UNIVAC 120|IBM 705|IBM 305' => 'n d',
            'ARRA I|ARRA II' => '30 bit',
            'IBM 650|IBM 653' => '10 d',
            'IBM 704' => '10 d',
            'IBM NORC' => '16 d',
            'ARMAC' => '34 bit',
            'Autonetics Recomp I' => '40 bit',

            /*ARM architecture*/
            'ARMv1' => '32 bit',
            'ARMv2' => '32 bit',
            'ARMv3' => '32 bit',
            'ARMv4' => '32 bit',
            'ARMv4T' => '32 bit',
            'ARMv5TE' => '32 bit',
            'ARMv6' => '32 bit',
            'ARMv6-M' => '32 bit',
            'ARMv7-M' => '32 bit',
            'ARMv7E-M' => '32 bit',
            'ARMv8-M' => '32 bit',
            'ARMv7-R' => '32 bit',
            'ARMv8-R' => '32 bit',
            'ARMv7-A' => '32 bit',
            'ARMv8-A' => '64 bit',
            'ARMv8.1-A' => '64/32 bit',
            'ARMv8.2-A' => '64/32 bit',
            'ARMv8.3-A' => '64/32 bit',
            'ARMv8.4-A' => '64/32 bit',
            'ARMv8.5-A' => '64/32 bit',
            'ARMv8.6-A' => '64/32 bit',


            /*Windows/Linux/Mac*/

            /*
             * Intel's consumer-grade processors have followed an *86 naming convention,
             * dating back to the 8086 chip released in 1978. Later iterations included the 16-bit i286 in 1983,
             *  the 32-bit i386 in 1985, the 32-bit i486 in 1989, the i586 (the original Pentium chip) in 1993,
             *  the i686 (the Pentium Pro) in 1995, and the i786 (Pentium 4, or NetBurst) in 2000.
             * */

            'i286' => '16 Bit',
            'Win16' => '16 Bit',
            'i386' => '32 Bit',
            'i486' => '32 Bit',
            'i586' => '32 Bit',
            'i686' => '32 Bit',
            'i786' => '32 Bit',
            'x86' => '32 Bit',
            'x64' => '64 Bit',
            'WOW64' => '64 Bit',
            'Win64' => '64 Bit',
            'x86_64' => '64 Bit',
            'x86-64' => '64 Bit',
            'x64\/x86' => '64 Bit',
            'IA-64' => '64 Bit',
            'ARM64' => '64 Bit',
            'AMD64' => '64 Bit',
            'Intel64' => '64 Bit',
        );

    }

    protected function getPlatformWmList(): array
    {
        /*Platform's Window Manager*/
        return array(
            'x11' => array('name' => 'Linux Desktop,', 'type' => 'X11 Window Manager.',),
            'linux' => array('name' => 'Linux Desktop,', 'type' => 'Unknown Window Manager.',),
            'win' => array('name' => 'Windows Desktop,', 'type' => 'Windows Window Manager.',),
            'mac' => array('name' => 'Macintosh,', 'type' => 'Mac Window Manager.',),
        );

    }

    protected function getWebBrowsersList(): array
    {
        /*Web Browser List*/
        return array(
            /*crawler*/
            '007ac9 Crawler' => array(
                'name' => '007ac9 Crawler',
                'type' => 'Crawler',
                'ui' => 'FullTextMode',
                'developer' => '007ac9',
                'link' => 'http://crawler.007ac9.net',
            ),
            '115Browser' => array(
                'name' => '115 Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => '115 Team', 'link' => 'https://115.com/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Unknown',),
                ),
                'layout' => 'Unknown',
                'latest-release' => array('version' => 'Unknown', 'date' => 'Unknown',)
            ),
            '126BROWSER' => array(
                'name' => '126 BROWSER',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Unknown'),
                ),
                'cost' => 'Free',
                'status' => 'Unknown',
                'licence' => array(
                    array('name' => 'Unknown',),
                ),
                'layout' => 'Unknown',
                'latest-release' => array('version' => 'Unknown', 'date' => 'Unknown',)
            ),
            '1337Browser' => array(
                'name' => '1337 Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Unknown'),
                ),
                'cost' => 'Free',
                'status' => 'Unknown',
                'licence' => array(
                    array('name' => 'Unknown',),
                ),
                'layout' => 'Unknown',
                'latest-release' => array('version' => 'Unknown', 'date' => 'Unknown',)
            ),
            '1Password' => array(
                'name' => '1 Password',
                'type' => 'Password Manager',
                'ui' => 'FullTextMode',
                'creator' => array(
                    array('name' => 'AgileBits Inc', 'link' => 'https://1password.com/'),
                ),
                'cost' => 'Trialware',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Trialware', 'link' => 'https://en.wikipedia.org/wiki/Trialware'),
                ),
                'layout' => array(
                    array('name' => 'Trident', 'link' => 'https://en.wikipedia.org/wiki/Trident_(software)'),
                ),
                'latest-release' => array(
                    'Android' => array('version' => '7.5.1', 'date' => 'May 4, 2020',),
                    'iOS' => array('version' => '7.5.2', 'date' => 'April 22, 2020',),
                    'macOS' => array('version' => '7.5', 'date' => 'May 5, 2020',),
                    'Windows' => array('version' => '7.4.767', 'date' => 'April 27, 2020',),
                )
            ),

            '1stBrowser' => '1st Browser',
            '2345Explorer' => '2345 Explorer',
            'Mb2345Browser' => '2345 Browser',
            '2345chrome' => '2345 Chrome',
            '360SE' => '360 Secure Browser',
            'Amaya' => array(
                'name' => 'Amaya',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'W3C', 'link' => 'https://www.w3.org/'),
                    array('name' => 'INRIA', 'link' => 'http://www.inria.fr/en/'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'W3C', 'link' => 'https://en.wikipedia.org/wiki/W3C_Software_Notice_and_License'),
                ),
                'layout' => 'custom',
                'latest-release' => array('version' => '11.4.4', 'date' => 'January 18, 2012',)
            ),
            'AOL' => array(
                'name' => 'AOL Explorer',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'America Online, Inc', 'link' => 'https://www.aol.com/'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Trident', 'link' => 'https://en.wikipedia.org/wiki/Trident_(software)'),
                ),
                'latest-release' => array('version' => '1.5', 'date' => 'May 10, 2016',)
            ),
            'Arora' => array(
                'name' => 'Arora',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Avant Force'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                ),
                'latest-release' => array('version' => '0.11.0', 'date' => '27 September 2010',)
            ),
            'Avant' => array(
                'name' => 'Avant ',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Benjamin C. Meyer'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/Blink_(layout_engine)'),
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                    array('name' => 'Trident', 'link' => 'https://en.wikipedia.org/wiki/Trident_(layout_engine)'),
                ),
                'latest-release' => array('version' => '2020 build 3', 'date' => 'March 17, 2020',)
            ),
            'Basilisk' => array(
                'name' => 'Basilisk ',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Moonchild Productions', 'link' => 'https://www.basilisk-browser.org/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Goanna', 'link' => 'https://en.wikipedia.org/wiki/Goanna_(software)'),
                ),
                'latest-release' => array('version' => '2020.10.05', 'date' => '5 October 2020',)
            ),
            'Blisk' => array(
                'name' => 'Blisk',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Blisk team'),
                ),
                'cost' => array('Free' => 'Limited', 'Paid' => 'Unlimited Pro'),
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                    array('name' => 'V8', 'link' => 'https://en.wikipedia.org/wiki/V8_(JavaScript_engine)'),
                ),
                'latest-release' => array('version' => '12.0.92.83', 'date' => 'June 29, 2019',)
            ),
            'BeakerBrowser' => array(
                'name' => 'Beaker',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Blue Link Labs', 'link' => 'https://beakerbrowser.com/about'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MIT License', 'link' => 'https://en.wikipedia.org/wiki/MIT_License'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'macOS' => array('version' => '0.8.10', 'date' => 'March 13, 2020',),
                        'Windows' => array('version' => '0.8.10', 'date' => 'March 13, 2020',),
                        'Linux' => array('version' => '0.8.10', 'date' => 'March 13, 2020',),
                    )
            ),
            'Electron' => array(
                'name' => 'Electron',
                'type' => 'Electron (software framework)',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'GitHub', 'link' => 'https://en.wikipedia.org/wiki/GitHub'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MIT License', 'link' => 'https://en.wikipedia.org/wiki/MIT_License'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '10.1.5', 'date' => '23 October 2020',),
                        'Preview release' => array('version' => '11.0.0-beta.16', 'date' => '24 October 2020',),
                    )
            ),
            'Brave' => array(
                'name' => 'Brave Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Brave Software Inc', 'link' => 'https://en.wikipedia.org/wiki/Brave_(browser)'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '1.15.73', 'date' => '15 October 2020',),
                        'iOS' => array('version' => '1.20', 'date' => '25 September 2020',),
                        'macOS' => array('version' => '1.15.75', 'date' => '16 October 2020',),
                        'Windows' => array('version' => '1.15.75', 'date' => '16 October 2020',),
                        'Linux' => array('version' => '1.15.75', 'date' => '16 October 2020',),
                    )
            ),
            'Camino' => array(
                'name' => 'Camino',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'The Camino Project'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'MPL 1.1', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                    array('name' => 'LGPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                ),
                'latest-release' =>
                    array('version' => '2.1.2', 'date' => '14 March 2012',),
            ),
            'Cliqz' => array(
                'name' => 'Cliqz',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Cliqz GmbH'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '1.9.7', 'date' => 'April 4, 2020',),
                        'iOS' => array('version' => '3.6.3', 'date' => 'June 30, 2020',),
                        'macOS' => array('version' => '1.38.0', 'date' => 'July 22, 2020',),
                        'Windows' => array('version' => '1.38.0', 'date' => 'July 22, 2020',),
                        'Linux' => array('version' => '1.38.0', 'date' => 'July 22, 2020',),
                    )
            ),
            'Edg' => array(
                'name' => 'Microsoft Edge',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Microsoft Corp', 'link' => 'https://www.microsoftedgeinsider.com/en-us/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'version' => '88.0.673.0', 'date' => '14 October 2020',
                    )
            ),
            'Opera' => array(
                'name' => 'Opera',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Opera Software', 'link' => 'https://en.wikipedia.org/wiki/Opera_Software'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'version' => '71.0.3770.271', 'date' => '14 October 2020',
                    )
            ),
            'Opera Mobile' => array(
                'name' => 'Opera',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Opera Software', 'link' => 'https://en.wikipedia.org/wiki/Opera_Software'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '59.1.2926.54067', 'date' => 'July 13, 2020',),
                        'Android (classic)' => array('version' => '12.1.9', 'date' => 'June 8, 2016',),
                        'Symbian' => array('version' => 'S60 12.0.22', 'date' => 'June 24, 2012',),
                        'Windows Mobile' => array('version' => '10.0', 'date' => 'March 16, 2010',),
                    )
            ),
            'whale' => array(
                'name' => 'Naver Whale',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Naver Corporation', 'link' => 'https://en.wikipedia.org/wiki/Naver_Corporation'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Freeware', 'link' => 'https://en.wikipedia.org/wiki/Freeware'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '1.5.4.2', 'date' => 'May 26, 2020',),
                        'iOS' => array('version' => '1.5.0', 'date' => 'May 25, 2020',),
                        'macOS' => array('version' => '2.7.100.20', 'date' => 'June 18, 2020',),
                        'Windows' => array('version' => '2.7.100.20', 'date' => 'June 18, 2020',),
                        'Linux' => array('version' => '2.7.100.20', 'date' => 'June 18, 2020',),
                    )
            ),
            'Falkon' => array(
                'name' => 'Falkon',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'David Rosca', 'link' => 'https://en.wikipedia.org/wiki/Links_(web_browser)'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL 3.0', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '3.1.0.75', 'date' => 'March 19, 2019'),
                    )
            ),
            'Konqueror' => array(
                'name' => 'Konqueror Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'KDE', 'link' => 'https://en.wikipedia.org/wiki/KDE'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'KHTML', 'link' => 'https://en.wikipedia.org/wiki/KHTML'),
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '20.08.2', 'date' => '7 June 2018',),
                        'Preview release' => array(),
                    )
            ),
            'YaBrowser' => array(
                'name' => 'Yandex Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Yandex', 'link' => 'https://en.wikipedia.org/wiki/Yandex'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '20.6.3.54', 'date' => 'July 23, 2020',),
                        'iOS' => array('version' => '20.6.2.318', 'date' => 'July 16, 2020',),
                        'macOS' => array('version' => '20.7.2', 'date' => 'July 2020',),
                        'Windows' => array('version' => '20.7.2', 'date' => 'July 2020',),
                        'Linux' => array('version' => '20.7.2', 'date' => 'July 2020',),
                    )
            ),
            'QtWebEngine' => array(
                'name' => 'Qt Web Engine based browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Dooble Project Team', 'link' => 'https://en.wikipedia.org/wiki/Dooble'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'BSD', 'link' => 'https://en.wikipedia.org/wiki/BSD_licenses'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '2020.10.10', 'date' => 'October 10, 2020'),
                    )
            ),
            /*
             * Iron 73.0.3800.0 on Windows 10
Developer(s)	SRWare
Initial release	18 September 2008; 12 years ago[1]
Stable release(s) [±]
Windows	85.0.4350.0 / October 2, 2020; 35 days ago[2]
macOS	84.0.4300.0 / August 29, 2020; 2 months ago[3]
Linux	85.0.4350.0 / October 6, 2020; 31 days ago[4]
Android	74.0.3850.0 / May 10, 2019; 17 months ago[5]
Engine	Blink, V8
Operating system	Windows 7 and later, OS X 10.9 and later, Linux, Android 4.1 and later
Size	47.9 MB (Windows), 45.1 (Android)
Type	Web browser
Licence	BSD, with some parts under other licences.[6] Source code not provided.
Website	www.srware.net/en/software_srware_iron.php
             * */
            'Iron' => array(
                'name' => 'SRWare Iron',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'SRWare', 'link' => 'www.srware.net/en/software_srware_iron.php'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'BSD', 'link' => 'https://en.wikipedia.org/wiki/BSD_licenses'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                    array('name' => 'V8', 'link' => 'https://en.wikipedia.org/wiki/V8_(JavaScript_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '74.0.3850.0', 'date' => 'May 10, 2019',),
                        'macOS' => array('version' => '84.0.4300.0', 'date' => 'August 29, 2020',),
                        'Windows' => array('version' => '85.0.4350.0', 'date' => 'October 2, 2020',),
                        'Linux' => array('version' => '85.0.4350.0', 'date' => 'October 6, 2020',),
                    )
            ),
            'Chrome' => array(
                'name' => 'Google Chrome',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Google LLC', 'link' => 'https://en.wikipedia.org/wiki/Google'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'BSD (Chromium executable) (some closed-source features)', 'link' => 'https://en.wikipedia.org/wiki/BSD_licenses'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Android' => array('version' => '86.0.4240.114', 'date' => 'October 22, 2020',),
                        'iOS' => array('version' => '86.0.4240.93', 'date' => 'October 12, 2020',),
                        'macOS' => array('version' => '86.0.4240.111', 'date' => 'October 20, 2020',),
                        'Windows' => array('version' => '86.0.4240.111', 'date' => 'October 20, 2020',),
                        'Linux' => array('version' => '86.0.4240.111', 'date' => 'October 20, 2020',),
                    )
            ),
            'Chromium' => array(
                'name' => 'Chromium Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'The Chromium Project', 'link' => 'https://www.chromium.org/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'BSD', 'link' => 'https://en.wikipedia.org/wiki/BSD_licenses'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('name' => 'built nightly', 'link' => 'https://chromium.woolyss.com/'),
                    )
            ),
            'Comodo_Dragon' => array(
                'name' => 'Comodo Dragon',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Comodo Group', 'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'BSD', 'link' => 'https://en.wikipedia.org/wiki/BSD_licenses'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '83.0.4103.116', 'date' => 'July 21, 2020'),
                    )
            ),
            'IceDragon' => array(
                'name' => 'Comodo Ice Dragon',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Comodo Group', 'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '65.0.2.15', 'date' => 'June 19, 2019'),
                    )
            ),
            'Dillo' => array(
                'name' => 'Dillo',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'The Dillo team', 'link' => 'https://www.dillo.org/'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'custom',),
                ),
                'latest-release' =>
                    array(
                        array('version' => '3.0.5', 'date' => '30 June 2015'),
                    )
            ),
            'Dooble' => array(
                'name' => 'Dooble',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Dooble Project Team', 'link' => 'https://en.wikipedia.org/wiki/Dooble'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'BSD', 'link' => 'https://en.wikipedia.org/wiki/BSD_licenses'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '2020.10.10', 'date' => 'October 10, 2020'),
                    )
            ),
            'ELinks' => array(
                'name' => 'ELinks',
                'type' => 'Web Browser',
                'ui' => 'TextBasedMode',
                'creator' => array(
                    array('name' => 'Baudis, Fonseca, et al.', 'link' => 'https://en.wikipedia.org/wiki/ELinks'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'custom', 'note' => 'fork of Links'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '0.11.7', 'date' => '22 August 2009'),
                    )
            ),
            'Epiphany' => array(
                'name' => 'GNOME Web',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Marco Pesenti Gritti', 'link' => 'https://www.gnome.org/news/2015/05/goodbye-marco/'),
                    array('name' => 'The GNOME Project', 'link' => 'https://en.wikipedia.org/wiki/The_GNOME_Project'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'WebKitGTK', 'link' => 'https://en.wikipedia.org/wiki/WebKitGTK'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '3.38.1', 'date' => '8 October 2020'),
                        'Preview release' => array('version' => '3.37.92', 'date' => '13 September 2020'),
                    )
            ),
            'Links' => array(
                'name' => 'Links',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Patocka, et al', 'link' => 'https://en.wikipedia.org/wiki/Links_(web_browser)'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'custom'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '2.21', 'date' => '2 August 2020'),
                    )
            ),
            'Flock' => array(
                'name' => 'Flock',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Flock Inc', 'link' => array('https://web.archive.org/web/20110325151017/http://www.flock.com/', 'https://en.wikipedia.org/wiki/Flock_(web_browser)')),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'Proprietary', 'note' => '(as of 3.0)', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                ),
                'layout' => array(
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '3.5.3.4641', 'date' => 'February 1, 2011'),
                    )
            ),
            'Waterfox' => array(
                'name' => 'Waterfox Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Alex Kontos',),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '2020.10', 'date' => '21 October 2020',),
                    )
            ),
            'Eolie' => array(
                'name' => 'Eolie Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Mozilla Foundation', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Foundation'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'note' => '(before v57)', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                    array('name' => 'Gecko w/Servo', 'note' => 'v57 & after', 'link' => 'https://en.wikipedia.org/wiki/Servo_(software)'),
                ),
                'latest-release' =>
                    array(
                        'Standard' => array('version' => '82.0', 'date' => 'October 20, 2020',),
                        'Extended Support Release' => array('version' => '78.4.0', 'date' => 'October 20, 2020',),
                    )
            ),
            'PaleMoon' => array(
                'name' => 'PaleMoon Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Moonchild Productions',),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Goanna', 'link' => 'https://en.wikipedia.org/wiki/Goanna_(software)'),
                ),
                'latest-release' =>
                    array(
                        'Standard' => array('version' => '28.15.0', 'date' => '27 October 2020',),
                    )
            ),
            'SeaMonkey' => array(
                'name' => 'SeaMonkey Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'SeaMonkey Council',),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '2.53.4', 'date' => 'September 22, 2020',),
                        'Preview release' => array('version' => '2.53.5b1', 'date' => 'October 29, 2020',),
                    )
            ),
            'SalamWeb' => array(
                'name' => 'SalamWeb Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'SalamWeb', 'link' => 'https://salamweb.com/',),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Freeware', 'link' => 'https://en.wikipedia.org/wiki/Freeware'),
                ),
                'layout' => array(
                    array('name' => 'Blink', 'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Windows' => array('version' => '4.5', 'date' => 'July 31, 2020',),
                        'Android' => array('version' => '4.5.0.40', 'date' => 'June 25, 2020',),
                        'macOS' => array('version' => '4.5', 'date' => 'June 20, 2020',),
                        'iOS' => array('version' => '4.5', 'date' => 'June 20, 2020',),
                    )
            ),
            'firefox' => array(
                'name' => 'Firefox Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Mozilla Foundation', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Foundation'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'MPL 2.0', 'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'note' => '(before v57)', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                    array('name' => 'Gecko w/Servo', 'note' => 'v57 & after', 'link' => 'https://en.wikipedia.org/wiki/Servo_(software)'),
                ),
                'latest-release' =>
                    array(
                        'Standard' => array('version' => '82.0', 'date' => 'October 20, 2020',),
                        'Extended Support Release' => array('version' => '78.4.0', 'date' => 'October 20, 2020',),
                    )
            ),
            'Galeon' => array(
                'name' => 'Galeon Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Marco Pesenti Gritti', 'link' => 'https://www.gnome.org/news/2015/05/goodbye-marco/'),
                ),
                'cost' => 'Free',
                'status' => 'discontinued',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Gecko', 'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '2.0.7', 'date' => '27 September 2008'),
                    )
            ),
            'iCab' => array(
                'name' => 'iCab Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Alexander Clauss', 'link' => 'https://www.clauss-net.de/'),
                ),
                'cost' => 'Free, $20 (Pro)',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary (browser)', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                    array('name' => 'LGPL (WebKit)', 'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '5.9.2', 'date' => 'March 4, 2020'),
                    )
            ),
            'curl' => array(
                'name' => 'Client URL',
                'type' => 'Web Browser',
                'ui' => 'FullTextMode',
                'creator' => array(
                    array('name' => 'Daniel Stenberg', 'link' => 'https://en.wikipedia.org/wiki/Daniel_Stenberg'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Free Software: MIT/X derivate license', 'link' => 'https://curl.haxx.se/docs/copyright.html'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '7.73.0', 'date' => '14 October 2020'),
                    )
            ),
            'Lynx' => array(
                'name' => 'Lynx',
                'type' => 'FTP client / HTTP client',
                'ui' => 'TextBasedMode',
                'creator' => array(
                    array('name' => 'Montulli, Grobe, Rezac, et al'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'custom, fork of libwww', 'link' => 'https://en.wikipedia.org/wiki/Libwww'),
                ),
                'latest-release' =>
                    array(
                        array('version' => '2.8.9rel.1', 'date' => '8 July 2018'),
                    )
            ),
            'msie' => 'msie',

            'Midori' => array(
                'name' => 'Midori Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Christian Dywan, et al.', 'link' => 'https://astian.org/en/midori-browser/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'LGPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array(),
                        'Preview release' => array('version' => '9.0', 'date' => 'July 29, 2019',),
                    )
            ),
            'NetSurf' => array(
                'name' => 'NetSurf Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'The NetSurf Developers', 'link' => 'http://www.netsurf-browser.org/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPL', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Qt WebEngine', 'link' => 'https://en.wikipedia.org/wiki/Qt_WebEngine'),
                    array('name' => 'QtWebKit', 'link' => 'https://en.wikipedia.org/wiki/QtWebKit'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '3.10', 'date' => 'May 24, 2020',),
                        'Preview release' => array(),
                    )
            ),
            'Otter' => array(
                'name' => 'Otter Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Michał Dutkiewicz', 'link' => 'https://otter-browser.org/'),
                ),
                'cost' => 'Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'GPLv3', 'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'Qt WebEngine', 'link' => 'https://en.wikipedia.org/wiki/Qt_WebEngine'),
                    array('name' => 'QtWebKit', 'link' => 'https://en.wikipedia.org/wiki/QtWebKit'),
                ),
                'latest-release' =>
                    array(
                        'Stable release' => array('version' => '1.0.01', 'date' => '1 January 2019',),
                        'Preview release' => array('version' => 'weekly333', 'date' => 'May 18, 2020',),
                    )
            ),
            'Maxthon' => array(
                'name' => 'Maxthon Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Maxthon International Ltd', 'link' => 'https://en.wikipedia.org/wiki/Maxthon'),
                ),
                'cost' => '	Free',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Freeware', 'link' => 'https://en.wikipedia.org/wiki/Freeware'),
                ),
                'layout' => array(
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                    array('name' => 'Trident', 'link' => 'https://en.wikipedia.org/wiki/Trident_(layout_engine)'),
                ),
                'latest-release' =>
                    array(
                        'Windows' => array('version' => '5.3.8.2000', 'date' => 'October 25, 2019',),
                        'Android' => array('version' => '5.2.3.3241', 'date' => 'January 25, 2019',),
                        'macOS' => array('version' => '5.1.60', 'date' => 'August 27, 2018',),
                        'iOS' => array('version' => '5.4.5', 'date' => 'July 21, 2020',),
                        'Windows Phone' => array('version' => '2.2.0', 'date' => 'March 30, 2017',),
                        'Linux' => array('version' => '1.0.5.3', 'date' => 'September 9, 2014',),
                    )
            ),
            'safari' => array(
                'name' => 'safari Browser',
                'type' => 'Web Browser',
                'ui' => 'GraphicalMode',
                'creator' => array(
                    array('name' => 'Apple Inc.', 'link' => 'https://en.wikipedia.org/wiki/Apple_Inc.'),
                ),
                'cost' => 'Included with macOS and iOS',
                'status' => 'Active',
                'licence' => array(
                    array('name' => 'Proprietary (browser)', 'link' => 'https://en.wikipedia.org/wiki/Proprietary_software'),
                    array('name' => 'LGPL (WebKit) ', 'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License'),
                ),
                'layout' => array(
                    array('name' => 'WebKit', 'link' => 'https://en.wikipedia.org/wiki/WebKit'),
                ),
                'latest-release' =>
                    array(
                        'macOS' => array('version' => '14.0', 'date' => 'September 17, 2020',),
                        'iOS' => array('version' => '14.0', 'date' => 'September 17, 2020',),
                    )
            ),
        );
    }

    protected function getWebBrowserAppCodeList(): array
    {
        /*Parent App of Browser*/
        return array(
            'mozilla' => 'Mozilla'
        );
    }

    protected function getWebBrowsersLayoutList():array
    {
        /*Web Browser Layout List*/
        /*
         * Layout engines
         *
         * Gecko is developed by the Mozilla Foundation.
         * Goanna is a fork of Gecko developed by Moonchild Productions.
         * KHTML is developed by the KDE project.
         * Presto was developed by Opera Software for use in Opera. Development stopped as Opera transitioned to Blink.
         * Tasman was developed by Microsoft for use in Internet Explorer 5 for Macintosh.
         * Trident is developed by Microsoft for use in the Windows versions of Internet Explorer 4 to Internet Explorer 11.
         * EdgeHTML is the engine developed by Microsoft for Edge. It is a largely rewritten fork of Trident with all legacy code removed.
         * WebKit is a fork of KHTML by Apple Inc. used in Apple Safari, and formerly in Chromium and Google Chrome.
         * Blink is a 2013 fork of WebKit's WebCore component by Google used in Chromium, Google Chrome, Microsoft Edge, Opera, and Vivaldi.[19]
         * Servo is an experimental web browser layout engine being developed cooperatively by Mozilla and Samsung.*/

        return  array(
            'EdgeHTML' => array(
                'name' => 'EdgeHTML',
                'developer' => 'Microsoft',
                'contain' => 'Edg',
                'contain_example' => 'Edge/xyz',
            ),
            'Blink' => array(
                'name' => 'Blink',
                'developer' => 'Google',
                'contain' => 'Chrome',
                'contain_example' => 'Chrome/xyz',
            ),
            'Gecko' => array(
                'name' => 'Gecko',
                'developer' => 'Mozilla Foundation',
                'contain' => 'Gecko',
                'contain_example' => 'Gecko/xyz'
            ),
            'Goanna' => array(
                'name' => 'Goanna',
                'developer' => 'Moonchild Productions',
                'contain' => 'Goanna',
                'contain_example' => 'Goanna/xyz'
            ),
            'KHTML' => array(
                'name' => 'KHTML',
                'developer' => 'KDE project',
                'contain' => 'KHTML',
                'contain_example' => 'KHTML/xyz'
            ),
            'Presto' => array(
                'name' => 'Presto',
                'developer' => 'Opera Software',
                'contain' => 'Opera',
                'contain_example' => 'Opera/xyz',
            ),
            'Tasman' => array(
                'name' => 'Tasman',
                'developer' => 'Microsoft',
                'contain' => 'Tasman',
                'contain_example' => 'Tasman/xyz',
            ),
            'Trident' => array(
                'name' => 'Trident',
                'developer' => 'Microsoft',
                'contain' => 'Trident',
                'contain_example' => 'Trident/xyz',
            ),
            'WebKit' => array(
                'name' => 'WebKit',
                'developer' => 'Apple Inc',
                'contain' => 'AppleWebKit',
                'contain_example' => 'AppleWebKit/xyz',
            ),
            'Servo' => array(
                'name' => 'Servo',
                'developer' => 'cooperatively by Mozilla and Samsung',
                'contain' => 'Servo',
                'contain_example' => 'Servo/xyz',
            ),
            'libwww-FM' => array(
                'name' => 'libwww-FM',
                'developer' => 'Tim Berners-Lee',
                'contain' => 'libwww-FM',
                'contain_example' => 'libwww-FM/xyz',
            ),
        );
        
    }


}