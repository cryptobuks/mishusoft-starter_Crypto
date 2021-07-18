<?php


namespace Mishusoft\DataObjects;


class BrowserDataObject
{
    // File list of various collected data.
    public const USER_AGENT_LIST_FILE              = RUNTIME_REGISTRIES_PATH.'browser.user.agents.list.csv';
    public const WEB_BROWSER_LIST_FILE             = RUNTIME_REGISTRIES_PATH.'browser.all.list.json';
    public const WEB_BROWSER_APP_CODE_LIST_FILE    = RUNTIME_REGISTRIES_PATH.'browser.app.code.list.json';
    public const WEB_BROWSER_LAYOUT_LIST_FILE      = RUNTIME_REGISTRIES_PATH.'browser.layout.list.json';
    public const DEVICES_LIST_FILE                 = RUNTIME_REGISTRIES_PATH.'browser.devices.list.json';
    public const DEVICES_CATEGORY_LIST_FILE        = RUNTIME_REGISTRIES_PATH.'browser.devices.category.list.json';
    public const DEVICES_PLATFORM_WMNAME_LIST_FILE = RUNTIME_REGISTRIES_PATH.'browser.devices.platform.wmn.list.json';
    public const DEVICES_ARCHITECTURE_LIST_FILE    = RUNTIME_REGISTRIES_PATH.'browser.devices.architecture.list.json';

    // Variables.

    /**
     * Http request method of browser.
     *
     * @var string
     */
    protected string $requestMethod = 'Unknown';

    /**
     * Http request mode of browser.
     *
     * @var string
     */
    protected string $requestMode = 'Unknown';

    /**
     * Http user agent of browser.
     *
     * @var string
     */
    protected string $userAgent = 'Unknown';

    /**
     * Http accept language of browser.
     *
     * @var string
     */
    protected string $acceptLanguage = 'Unknown';

    /**
     * Http accept encoding of browser.
     *
     * @var string
     */
    protected string $acceptEncoding = 'Unknown';

    /**
     * Browser name
     *
     * @var string
     */
    protected string $browserName = 'Unknown';

    /**
     * Browser full name with version
     *
     * @var string
     */
    protected string $browserNameFull = 'Unknown';

    /**
     * Browser version main only
     *
     * @var string
     */
    protected string $browserVersion = 'Unknown';

    /**
     * Browser full version
     *
     * @var string
     */
    protected string $browserVersionFull = 'Unknown';

    /**
     * Browser architecture
     *
     * @var string
     */
    protected string $browserArchitecture = 'Unknown';

    /**
     * Browser app code name
     *
     * @var string
     */
    protected string $browserAppName = 'Unknown';

    /**
     * Browser app version
     *
     * @var string
     */
    protected string $browserAppVersion = 'Unknown';

    /**
     * Browser app code name
     *
     * @var string
     */
    protected string $browserAppCodeName = 'Unknown';

    /**
     * Browser app code version
     *
     * @var string
     */
    protected string $browserAppCodeVersion = 'Unknown';

    /**
     * Browser app engine name
     *
     * @var string
     */
    protected string $browserEngineName = 'Unknown';

    /**
     * Browser full engine name
     *
     * @var string
     */
    protected string $browserEngineNameFull = 'Unknown';

    /**
     * Browser engine version
     *
     * @var string
     */
    protected string $browserEngineVersion = 'Unknown';

    /**
     * Browser full information
     *
     * @var array
     */
    protected array $browserInfoAll = [];

    /**
     * Device name of Browser
     *
     * @var string
     */
    protected string $deviceName = 'Unknown';

    /**
     * Device type
     *
     * @var string
     */
    protected string $deviceType = 'Unknown';

    /**
     * Device architecture
     *
     * @var string
     */
    protected string $deviceArchitecture = 'Unknown';

    /**
     * Device window manager
     *
     * @var string
     */
    protected string $deviceWindowManager = 'Unknown';

    /**
     * Device full information
     *
     * @var array
     */
    protected array $deviceInfoAll = [];

    /**
     * @var string
     */
    protected string $deviceNameFull = 'Unknown';

    /**
     * Device original name
     *
     * @var string
     */
    protected string $deviceNameOriginal = 'Unknown';

    /**
     * Original name of window manager of device
     *
     * @var string
     */
    protected string $deviceWmNameOriginal = 'Unknown';

    /**
     * Current device information
     *
     * @var array
     */
    protected array $currentDeviceInfo = [];

    /**
     * Http protocol
     *
     * @var string
     */
    protected string $urlProtocol = 'Unknown';

    /**
     * Http host name
     *
     * @var string
     */
    protected string $urlHostname = 'Unknown';

    /**
     * Http url path
     *
     * @var string
     */
    protected string $urlPath = 'Unknown';

    /**
     * Runtime storage.
     *
     * @var array
     */
    protected array $userAgentList = [];

    /**
     * List of devices
     *
     * @var array
     */
    protected array $devicesList = [];

    /**
     * List of devices architecture
     *
     * @var array
     */
    protected array $devicesArchitectureList = [];

    /**
     * List of devices window manger
     *
     * @var array
     */
    protected array $devicesPlatformWMNameList = [];

    /**
     * List of devices category
     *
     * @var array
     */
    protected array $devicesCategoryList = [];

    /**
     * List of web browsers
     *
     * @var array
     */
    protected array $webBrowserList = [];

    /**
     * List of web browser app code name
     *
     * @var array
     */
    protected array $webBrowserAppCodeNameList = [];

    /**
     * List of web browsers layout
     *
     * @var array
     */
    protected array $webBrowserLayoutList = [];

    /**
     * Time of today
     *
     * @var string
     */
    protected string $timeOfToday = 'Unknown';

    /**
     * Allowed domains for mishusoft
     *
     * @var string[]
     */
    protected array $allowedDomains = [
        'mishusoft.com',
        'dev.mishusoft.com',
        'www.mishusoft.com',
        'localhost',
    ];


    public function __construct()
    {

    }//end __construct()


    /**
     * List of devices
     *
     * @return array
     */
    protected function getDevicesList(): array
    {
        // Devices List.
        return [
            // Console.
            '3DS'                  => [
                'Browser'  => [
                    'name'             => 'Nintendo Browser',
                    'architecture'     => '32-bit',
                    'developer'        => 'Nintendo',
                    'rendering engine' => 'WebKit.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Nintendo 3DS',
                    'architecture' => '32-bit',
                    'developer'    => 'Nintendo',
                ],
                'Device'   => [
                    'name'   => '3DS',
                    'type'   => 'Console',
                    'vendor' => 'Nintendo',
                    'brand'  => 'Nintendo',
                ],
            ],
            'DSi'                  => [
                'Browser'  => [
                    'name'             => 'Nintendo Browser',
                    'architecture'     => '32-bit',
                    'developer'        => 'Nintendo',
                    'rendering engine' => 'Presto.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Nintendo DSi',
                    'architecture' => '32-bit',
                    'developer'    => 'Nintendo',
                ],
                'Device'   => [
                    'name'   => 'DSi',
                    'type'   => 'Console',
                    'vendor' => 'Nintendo',
                    'brand'  => 'Nintendo',
                ],
            ],
            'New 3DS'              => [
                'Browser'  => [
                    'name'             => 'Nintendo Browser',
                    'architecture'     => '32-bit',
                    'developer'        => 'Nintendo',
                    'rendering engine' => 'WebKit.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Nintendo 3DS',
                    'architecture' => '32-bit',
                    'developer'    => 'Nintendo',
                ],
                'Device'   => [
                    'name'   => 'New 3DS',
                    'type'   => 'Console',
                    'vendor' => 'Nintendo',
                    'brand'  => 'Nintendo',
                ],
            ],
            'Playstation Portable' => [
                'Browser'  => [
                    'name'         => 'Sony PSP',
                    'architecture' => '32-bit',
                    'developer'    => 'Sony',
                    'type'         => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'JAVA',
                    'architecture' => '32-bit',
                    'developer'    => 'Oracle',
                ],
                'Device'   => [
                    'name'   => 'Playstation Portable',
                    'type'   => 'Console',
                    'vendor' => 'Sony',
                    'brand'  => 'Sony',
                ],
            ],
            'PlayStation Vita'     => [
                'Browser'  => [
                    'name'             => 'Playstation Browser',
                    'developer'        => 'Sony',
                    'rendering engine' => 'WebKit.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'      => 'PlayStation Vita',
                    'developer' => 'Oracle',
                ],
                'Device'   => [
                    'name'   => 'PlayStation Vita',
                    'type'   => 'Console',
                    'vendor' => 'Sony',
                    'brand'  => 'Sony',
                ],
            ],
            'Switch'               => [
                'Browser'  => [
                    'name'             => 'Nintendo Browser',
                    'architecture'     => '32-bit',
                    'developer'        => 'Nintendo',
                    'rendering engine' => 'WebKit.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Nintendo Switch',
                    'architecture' => '32-bit',
                    'developer'    => 'Nintendo',
                ],
                'Device'   => [
                    'name'   => 'Switch',
                    'type'   => 'Console',
                    'vendor' => 'Nintendo',
                    'brand'  => 'Nintendo',
                ],
            ],

            // Desktops.
            'Amiga'                => [
                'Browser'  => [
                    'name'         => 'IBrowse',
                    'architecture' => '32-bit',
                    'developer'    => 'Stefan Burstroem',
                    'type'         => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Amiga OS',
                    'architecture' => '32-bit',
                    'developer'    => 'Commodore International',
                ],
                'Device'   => [
                    'name'   => 'Amiga',
                    'type'   => 'Desktop',
                    'vendor' => 'Commodore International',
                    'brand'  => 'Commodore',
                ],
            ],
            'DA241HL'              => [
                'Browser'  => [
                    'name'         => 'Chrome',
                    'architecture' => '32-bit',
                    'developer'    => 'Google Inc',
                    'type'         => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Android',
                    'architecture' => '32-bit',
                    'developer'    => 'Google Inc',
                ],
                'Device'   => [
                    'name'   => 'DA 241HL',
                    'type'   => 'Desktop',
                    'vendor' => 'Acer',
                    'brand'  => 'Acer',
                ],
            ],

            // car.
            'tesla'                => [
                'Browser'  => [
                    'name'             => 'Tesla Car Browser',
                    'architecture'     => '32-bit',
                    'developer'        => 'Tesla Motors.',
                    'rendering engine' => 'Blink.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Linux',
                    'architecture' => '32-bit',
                    'developer'    => 'Linux Foundation',
                ],
                'Device'   => [
                    'name'   => 'Car',
                    'type'   => 'Car Entertainment Framework',
                    'vendor' => 'Tesla Motors',
                    'brand'  => 'Tesla',
                ],
            ],
            'QtCarBrowser'         => [
                'Browser'  => [
                    'name'             => 'Tesla Car Browser',
                    'architecture'     => '32-bit',
                    'developer'        => 'Tesla Motors.',
                    'rendering engine' => 'Blink.',
                    'type'             => 'Browser.',
                ],
                'Platform' => [
                    'name'         => 'Linux',
                    'architecture' => '32-bit',
                    'developer'    => 'Linux Foundation',
                ],
                'Device'   => [
                    'name'   => 'Car',
                    'type'   => 'Car Entertainment Framework',
                    'vendor' => 'Tesla Motors',
                    'brand'  => 'Tesla',
                ],
            ],

            // Linux Desktop.
            'freebsd'              => [
                'Platform' => [
                    'name'         => 'FreeBSD',
                    'architecture' => '32-bit',
                    'developer'    => 'FreeBSD Foundation',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Linux Desktop',
                ],
            ],
            'CrOS'                 => [
                'Platform' => [
                    'name'         => 'Chrome OS',
                    'architecture' => '32-bit',
                    'developer'    => 'Google Inc',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'Ubuntu'               => [
                'Platform' => [
                    'name'         => 'Ubuntu OS',
                    'architecture' => '32-bit',
                    'developer'    => 'Canonical Inc',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Linux Desktop',
                ],
            ],
            'Arch Linux'           => [
                'Platform' => [
                    'name'         => 'Arch Linux',
                    'architecture' => '32-bit',
                    'developer'    => 'Arch Linux',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Linux Desktop',
                ],
            ],
            'manjaro'              => 'manjaro',
            'linux'                => [
                'Platform' => [
                    'name'         => 'Linux',
                    'architecture' => '32-bit',
                    'developer'    => 'Linux Foundation',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Linux Desktop',
                ],
            ],
            'debian'               => 'Debian',
            'sunos'                => 'Sun Solaris',
            'beos'                 => 'BeOS',
            'apachebench'          => 'ApacheBench',
            'aix'                  => 'AIX',
            'irix'                 => 'Irix',
            'osf'                  => 'DEC OSF',
            'hp-ux'                => 'HP-UX',
            'netbsd'               => 'NetBSD',
            'bsdi'                 => 'BSDi',
            'openbsd'              => 'OpenBSD',
            'gnu'                  => 'GNU/Linux',
            'unix'                 => 'Unknown Unix OS',
            'ubuntu'               => 'Ubuntu',
            'RISC OS'              => 'RISC OS',
            'Darwin'               => 'MAC OS',
            'Haiku'                => 'Haiku OS',
            'FreeMiNT'             => 'FreeMiNT OS',

            // Windows Desktop
            'windows phone 8'      => [
                'Platform' => [
                    'name'         => 'Windows Phone 8',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Windows Phone',
                    'type' => 'phone',
                ],
            ],
            'windows phone os 7'   => [
                'Platform' => [
                    'name'         => 'Windows Phone 7',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Windows Phone',
                    'type' => 'phone',
                ],
            ],
            'windows nt 10'        => [
                'Platform' => [
                    'name'         => 'Windows 10',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 6.3'       => [
                'Platform' => [
                    'name'         => 'Windows 8.1',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 6.2'       => [
                'Platform' => [
                    'name'         => 'Windows 8',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 6.1'       => [
                'Platform' => [
                    'name'         => 'Windows 7',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 6.0'       => [
                'Platform' => [
                    'name'         => 'Windows Longhorn',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 5.2'       => [
                'Platform' => [
                    'name'         => 'Windows 2003',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 5.1'       => [
                'Platform' => [
                    'name'         => 'Windows XP',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows xp'           => [
                'Platform' => [
                    'name'         => 'Windows XP',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 5.0'       => [
                'Platform' => [
                    'name'         => 'Windows 2000',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows me'           => [
                'Platform' => [
                    'name'         => 'Windows ME',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows nt 4.0'       => [
                'Platform' => [
                    'name'         => 'Windows NT 4.0',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'winnt4.0'             => [
                'Platform' => [
                    'name'         => 'Windows NT 4.0',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'winnt 4.0'            => [
                'Platform' => [
                    'name'         => 'Windows NT',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'winn\/t'              => [
                'Platform' => [
                    'name'         => 'Windows NT',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows 98'           => [
                'Platform' => [
                    'name'         => 'Windows 98',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'win98'                => [
                'Platform' => [
                    'name'         => 'Windows 98',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'windows 95'           => [
                'Platform' => [
                    'name'         => 'Windows 95',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'win95'                => [
                'Platform' => [
                    'name'         => 'Windows 95',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            'win16'                => [
                'Platform' => [
                    'name'         => 'Windows 3.11',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],
            // Macintosh
            'ppc'                  => 'Macintosh',
            'macintosh|mac os x'   => 'Mac OS X',
            'mac_powerpc'          => 'Mac OS 9',
            'os x'                 => 'Mac OS X',
            'ppc mac'              => 'Power PC Mac',

            // Phone
            'android'              => 'Android',
            'webos'                => 'Mobile',

            // legacy array, old values commented out
            'mobileexplorer'       => 'Mobile Explorer',
            // 'openwave'        => 'Open Wave',
            // 'opera mini'        => 'Opera Mini',
            // 'operamini'        => 'Opera Mini',
            // 'elaine'            => 'Palm',
            'palmsource'           => 'Palm',
            // 'digital paths'    => 'Palm',
            // 'avantgo'            => 'Avantgo',
            // 'xiino'            => 'Xiino',
            'palmscape'            => 'Palmscape',
            // 'nokia'            => 'Nokia',
            // 'ericsson'        => 'Ericsson',
            // 'blackberry'        => 'BlackBerry',
            // 'motorola'        => 'Motorola'
            // Phones and Manufacturers
            'motorola'             => 'Motorola',
            'nokia'                => 'Nokia',
            'iphone'               => 'Apple iPhone',
            'ipad'                 => 'iPad',
            'ipod'                 => 'Apple iPod Touch',
            'sony'                 => 'Sony Ericsson',
            'ericsson'             => 'Sony Ericsson',
            'blackberry'           => 'BlackBerry',
            'cocoon'               => 'O2 Cocoon',
            'blazer'               => 'Treo',
            'lg'                   => 'LG',
            'amoi'                 => 'Amoi',
            'xda'                  => 'XDA',
            'mda'                  => 'MDA',
            'vario'                => 'Vario',
            'htc'                  => 'HTC',
            'samsung'              => 'Samsung',
            'sharp'                => 'Sharp',
            'sie-'                 => 'Siemens',
            'alcatel'              => 'Alcatel',
            'benq'                 => 'BenQ',
            'ipaq'                 => 'HP iPaq',
            'mot-'                 => 'Motorola',
            'playstation portable' => 'PlayStation Portable',
            'hiptop'               => 'Danger Hiptop',
            'nec-'                 => 'NEC',
            'panasonic'            => 'Panasonic',
            'philips'              => 'Philips',
            'sagem'                => 'Sagem',
            'sanyo'                => 'Sanyo',
            'spv'                  => 'SPV',
            'zte'                  => 'ZTE',
            'sendo'                => 'Sendo',

            // Operating Systems
            'symbian'              => 'Symbian',
            'SymbianOS'            => 'SymbianOS',
            'elaine'               => 'Palm',
            'palm'                 => 'Palm',
            'series60'             => 'Symbian S60',
            'windows ce'           => 'Windows CE',

            // Browsers
            'obigo'                => 'Obigo',
            'netfront'             => 'Netfront Browser',
            'openwave'             => 'Openwave Browser',
            'mobilexplorer'        => 'Mobile Explorer',
            'operamini'            => 'Opera Mini',
            'opera mini'           => 'Opera Mini',

            // Other
            'digital paths'        => 'Digital Paths',
            'avantgo'              => 'AvantGo',
            'xiino'                => 'Xiino',
            'novarra'              => 'Novarra Transcoder',
            'vodafone'             => 'Vodafone',
            'docomo'               => 'NTT DoCoMo',
            'o2'                   => 'O2',

            // Fallback
            'mobile'               => 'Generic Mobile',
            'wireless'             => 'Generic Mobile',
            'j2me'                 => 'Generic Mobile',
            'midp'                 => 'Generic Mobile',
            'cldc'                 => 'Generic Mobile',
            'up.link'              => 'Generic Mobile',
            'up.browser'           => 'Generic Mobile',
            'smartphone'           => 'Generic Mobile',
            'cellphone'            => 'Generic Mobile',

            // Raspberry Pi
            'Raspbian'             => [
                'Platform' => [
                    'name'         => 'Raspbian Pi',
                    'architecture' => '32-bit',
                    'developer'    => 'Raspberry Pi Foundation',
                ],
                'Device'   => [
                    'name' => 'Computer',
                    'type' => 'Desktop',
                ],
            ],

            // Bots
            'Mail.RU_Bot'          => [
                'Platform' => [
                    'name'         => 'Mail.ru Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'Mail RU',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'Googlebot'            => [
                'Platform' => [
                    'name'         => 'Googlebot Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'Google Inc',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'Baiduspider'          => [
                'Platform' => [
                    'name'         => 'Baidu Spider',
                    'architecture' => '32-bit',
                    'developer'    => 'Baidu Inc',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'bingbot'              => [
                'Platform' => [
                    'name'         => 'Bing Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'msnbot'               => [
                'Platform' => [
                    'name'         => 'MSN Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'MJ12bot'              => [
                'Platform' => [
                    'name'         => 'Majestic-12 Distributed Search Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'Majestic',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'Yahoo! Slurp'         => [
                'Platform' => [
                    'name'         => 'Yahoo! Slurp Web Crawler Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'Yahoo LLC',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'MegaIndex.ru'         => [
                'Platform' => [
                    'name'         => 'MegaIndex Crawler Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'MegaIndex.ru',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'AhrefsBot'            => [
                'Platform' => [
                    'name'         => 'Ahrefs Backlink Research Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'Ahrefs',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'DotBot'               => [
                'Platform' => [
                    'name'         => 'OpenSite Explorer Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'The Moz',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'JobboerseBot'         => [
                'Platform' => [
                    'name'         => 'Jobboerse Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'jobboerse.com',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'SemrushBot'           => [
                'Platform' => [
                    'name'         => 'SEMRush Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'SEMrush',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'YandexBot'            => [
                'Platform' => [
                    'name'         => 'Yandex Search Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'Yandex',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'seoscanners.net'      => [
                'Platform' => [
                    'name'         => 'SEO Scanners Crawler Bot',
                    'architecture' => '32-bit',
                    'developer'    => 'SEO Scanners',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'SEOkicks-Robot'       => [
                'Platform' => [
                    'name'         => 'SEOkicks Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'SEOkicks',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'CheckMarkNetwork'     => [
                'Platform' => [
                    'name'         => 'CheckMark Network Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'CheckMark',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'BingPreview'          => [
                'Platform' => [
                    'name'         => 'Bing Preview Snapshot Generator',
                    'architecture' => '32-bit',
                    'developer'    => 'Microsoft Corp',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'VoilaBot BETA'        => [
                'Platform' => [
                    'name'         => 'VoilaBot BETA',
                    'architecture' => '32-bit',
                    'developer'    => 'orange ft group',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'adscanner'            => [
                'Platform' => [
                    'name'         => 'AdScanner Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'AdScanner',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],
            'Qwantify'             => [
                'Platform' => [
                    'name'         => 'Qwantify Search Crawler',
                    'architecture' => '32-bit',
                    'developer'    => 'Qwantify',
                ],
                'Device'   => [
                    'name' => 'Crawler',
                    'type' => 'Server',
                ],
            ],

            /*
                Tablets
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

            // Televisions
            'apple tv'             => [
                'name'        => 'AppleTV',
                'device'      => 'Television',
                'manufacture' => 'Apple Inc.',
            ],
            'chromecast'           => [
                'name'        => 'Chromecast',
                'device'      => 'Television',
                'manufacture' => 'Google Inc.',
            ],
            'aftb'                 => [
                'name'        => 'Fire TV',
                'device'      => 'Television',
                'manufacture' => 'Amazon.com, Inc.',
            ],
            'freebox'              => [
                'name'        => 'Freebox Revolution',
                'device'      => 'Television',
                'manufacture' => 'FREE SAS.',
            ],
            'googletv'             => [
                'name'        => 'Google TV',
                'device'      => 'Television',
                'manufacture' => 'Sony.',
            ],
            'netbox'               => [
                'name'        => 'Netbox',
                'device'      => 'Television',
                'manufacture' => 'Sony.',
            ],
            'playstation 3'        => [
                'name'        => 'Playstation 3',
                'device'      => 'Television',
                'manufacture' => 'Sony.',
            ],
            'playstation 4'        => [
                'name'        => 'Playstation 4',
                'device'      => 'Television',
                'manufacture' => 'Sony.',
            ],
            'kdl32Cx525'           => [
                'name'        => 'KDL32CX525',
                'tdeviceype'  => 'Television',
                'manufacture' => 'Sony.',
            ],
            'nsz-gs7\/gx70'        => [
                'name'        => 'NSZ-GS7/GX70',
                'device'      => 'Television',
                'manufacture' => 'Sony.',
            ],
            'h96 pro\+'            => [
                'name'        => 'H96 Pro+',
                'device'      => 'Television',
                'manufacture' => 'Alfawise.',
            ],
            'mx enjoy tv'          => [
                'name'        => 'MX Enjoy TV BOX',
                'device'      => 'Television',
                'manufacture' => 'Geniatech.',
            ],
            'smarttv2016'          => [
                'name'        => 'Series J (2016)',
                'device'      => 'Television',
                'manufacture' => 'Samsung.',
            ],
            'smart-tv'             => [
                'name'        => 'Smart TV',
                'device'      => 'Television',
                'manufacture' => 'Samsung.',
            ],
            'tpm171e'              => [
                'name'        => 'TPM171E',
                'device'      => 'Television',
                'manufacture' => 'Philips.',
            ],
            'smarttva'             => [
                'name'        => 'TV',
                'device'      => 'Television',
                'manufacture' => 'LG.',
            ],
            'vap430'               => [
                'name'        => 'VAP430',
                'device'      => 'Television',
                'manufacture' => 'Vizio.',
            ],
            'viera'                => [
                'name'        => 'Viera TV',
                'device'      => 'Television',
                'manufacture' => 'Panasonic.',
            ],
            'webtv'                => [
                'name'        => 'WebTV',
                'device'      => 'Television',
                'manufacture' => 'Microsoft.',
            ],
            'xbox'                 => [
                'name'        => 'Xbox 360',
                'device'      => 'Television',
                'manufacture' => 'Microsoft.',
            ],
            'xbox one'             => [
                'name'        => 'Xbox One',
                'device'      => 'Television',
                'manufacture' => 'Microsoft.',
            ],
            'wii'                  => [
                'name'        => 'Wii',
                'device'      => 'Television',
                'manufacture' => 'Nintendo.',
            ],
            'wiiu'                 => [
                'name'        => 'WiiU',
                'device'      => 'Television',
                'manufacture' => 'Nintendo.',
            ],
            'x96 mini'             => [
                'name'        => 'X96 mini',
                'device'      => 'Television',
                'manufacture' => 'ShySky.',
            ],
        ];

    }//end getDevicesList()


    /**
     * List of devices category
     *
     * @return array
     */
    protected function getDevicesCategoryList(): array
    {
        // Devices Categories
        return [
            'linux' => 'linux',
            'mac'   => 'mac',
            'win'   => 'win',
            'mobi'  => 'mobi',
        ];

    }//end getDevicesCategoryList()


    /**
     * List of devices architecture
     *
     * @return array
     */
    protected function getDevicesArchitectureList(): array
    {
        // Devices architecture List
        return [
            // old model computers
            'Babbage'                                      => '50 d',
            'Zuse Z3'                                      => '22 Bit',
            'ABC'                                          => '50 Bit',
            'Harvard Mark I'                               => '23 d',
            'ENIAC I'                                      => '20 d',
            'Manchester Baby'                              => '32 Bit',
            'UNIVAC I'                                     => '12 d',
            'IAS machine'                                  => '40 Bit',
            'Fast Universal Digital Computer M-2'          => '34 bit',
            'IBM 701'                                      => '36 bit',
            'UNIVAC 60|IBM 702|UNIVAC 120|IBM 705|IBM 305' => 'n d',
            'ARRA I|ARRA II'                               => '30 bit',
            'IBM 650|IBM 653'                              => '10 d',
            'IBM 704'                                      => '10 d',
            'IBM NORC'                                     => '16 d',
            'ARMAC'                                        => '34 bit',
            'Autonetics Recomp I'                          => '40 bit',

            // ARM architecture
            'ARMv1'                                        => '32 bit',
            'ARMv2'                                        => '32 bit',
            'ARMv3'                                        => '32 bit',
            'ARMv4'                                        => '32 bit',
            'ARMv4T'                                       => '32 bit',
            'ARMv5TE'                                      => '32 bit',
            'ARMv6'                                        => '32 bit',
            'ARMv6-M'                                      => '32 bit',
            'ARMv7-M'                                      => '32 bit',
            'ARMv7E-M'                                     => '32 bit',
            'ARMv8-M'                                      => '32 bit',
            'ARMv7-R'                                      => '32 bit',
            'ARMv8-R'                                      => '32 bit',
            'ARMv7-A'                                      => '32 bit',
            'ARMv8-A'                                      => '64 bit',
            'ARMv8.1-A'                                    => '64/32 bit',
            'ARMv8.2-A'                                    => '64/32 bit',
            'ARMv8.3-A'                                    => '64/32 bit',
            'ARMv8.4-A'                                    => '64/32 bit',
            'ARMv8.5-A'                                    => '64/32 bit',
            'ARMv8.6-A'                                    => '64/32 bit',

            // Windows/Linux/Mac
            /*
             * Intel's consumer-grade processors have followed an *86 naming convention,
             * dating back to the 8086 chip released in 1978. Later iterations included the 16-bit i286 in 1983,
             *  the 32-bit i386 in 1985, the 32-bit i486 in 1989, the i586 (the original Pentium chip) in 1993,
             *  the i686 (the Pentium Pro) in 1995, and the i786 (Pentium 4, or NetBurst) in 2000.
             * */

            'i286'                                         => '16 Bit',
            'Win16'                                        => '16 Bit',
            'i386'                                         => '32 Bit',
            'i486'                                         => '32 Bit',
            'i586'                                         => '32 Bit',
            'i686'                                         => '32 Bit',
            'i786'                                         => '32 Bit',
            'x86'                                          => '32 Bit',
            'x64'                                          => '64 Bit',
            'WOW64'                                        => '64 Bit',
            'Win64'                                        => '64 Bit',
            'x86_64'                                       => '64 Bit',
            'x86-64'                                       => '64 Bit',
            'x64/x86'                                      => '64 Bit',
            'IA-64'                                        => '64 Bit',
            'ARM64'                                        => '64 Bit',
            'AMD64'                                        => '64 Bit',
            'Intel64'                                      => '64 Bit',
        ];

    }//end getDevicesArchitectureList()


    /**
     * List of web browsers window manager
     *
     * @return array
     */
    protected function getPlatformWmList(): array
    {
        // Platform's Window Manager
        return [
            'x11'   => [
                'name' => 'Linux Desktop,',
                'type' => 'X11 Window Manager.',
            ],
            'linux' => [
                'name' => 'Linux Desktop,',
                'type' => 'Unknown Window Manager.',
            ],
            'win'   => [
                'name' => 'Windows Desktop,',
                'type' => 'Windows Window Manager.',
            ],
            'mac'   => [
                'name' => 'Macintosh,',
                'type' => 'Mac Window Manager.',
            ],
        ];

    }//end getPlatformWmList()


    /**
     * List of web browsers
     *
     * @return array
     */
    protected function getWebBrowsersList(): array
    {
        // Web Browser List
        return [
            // crawler
            '007ac9 Crawler' => [
                'name'      => '007ac9 Crawler',
                'type'      => 'Crawler',
                'ui'        => 'FullTextMode',
                'developer' => '007ac9',
                'link'      => 'http://crawler.007ac9.net',
            ],
            '115Browser'     => [
                'name'           => '115 Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => '115 Team',
                        'link' => 'https://115.com/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    ['name' => 'Unknown'],
                ],
                'layout'         => 'Unknown',
                'latest-release' => [
                    'version' => 'Unknown',
                    'date'    => 'Unknown',
                ],
            ],
            '126BROWSER'     => [
                'name'           => '126 BROWSER',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Unknown'],
                ],
                'cost'           => 'Free',
                'status'         => 'Unknown',
                'licence'        => [
                    ['name' => 'Unknown'],
                ],
                'layout'         => 'Unknown',
                'latest-release' => [
                    'version' => 'Unknown',
                    'date'    => 'Unknown',
                ],
            ],
            '1337Browser'    => [
                'name'           => '1337 Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Unknown'],
                ],
                'cost'           => 'Free',
                'status'         => 'Unknown',
                'licence'        => [
                    ['name' => 'Unknown'],
                ],
                'layout'         => 'Unknown',
                'latest-release' => [
                    'version' => 'Unknown',
                    'date'    => 'Unknown',
                ],
            ],
            '1Password'      => [
                'name'           => '1 Password',
                'type'           => 'Password Manager',
                'ui'             => 'FullTextMode',
                'creator'        => [
                    [
                        'name' => 'AgileBits Inc',
                        'link' => 'https://1password.com/',
                    ],
                ],
                'cost'           => 'Trialware',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Trialware',
                        'link' => 'https://en.wikipedia.org/wiki/Trialware',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Trident',
                        'link' => 'https://en.wikipedia.org/wiki/Trident_(software)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '7.5.1',
                        'date'    => 'May 4, 2020',
                    ],
                    'iOS'     => [
                        'version' => '7.5.2',
                        'date'    => 'April 22, 2020',
                    ],
                    'macOS'   => [
                        'version' => '7.5',
                        'date'    => 'May 5, 2020',
                    ],
                    'Windows' => [
                        'version' => '7.4.767',
                        'date'    => 'April 27, 2020',
                    ],
                ],
            ],

            '1stBrowser'     => '1st Browser',
            '2345Explorer'   => '2345 Explorer',
            'Mb2345Browser'  => '2345 Browser',
            '2345chrome'     => '2345 Chrome',
            '360SE'          => '360 Secure Browser',
            'Amaya'          => [
                'name'           => 'Amaya',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'W3C',
                        'link' => 'https://www.w3.org/',
                    ],
                    [
                        'name' => 'INRIA',
                        'link' => 'http://www.inria.fr/en/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'W3C',
                        'link' => 'https://en.wikipedia.org/wiki/W3C_Software_Notice_and_License',
                    ],
                ],
                'layout'         => 'custom',
                'latest-release' => [
                    'version' => '11.4.4',
                    'date'    => 'January 18, 2012',
                ],
            ],
            'AOL'            => [
                'name'           => 'AOL Explorer',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'America Online, Inc',
                        'link' => 'https://www.aol.com/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Trident',
                        'link' => 'https://en.wikipedia.org/wiki/Trident_(software)',
                    ],
                ],
                'latest-release' => [
                    'version' => '1.5',
                    'date'    => 'May 10, 2016',
                ],
            ],
            'Arora'          => [
                'name'           => 'Arora',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Avant Force'],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'version' => '0.11.0',
                    'date'    => '27 September 2010',
                ],
            ],
            'Avant'          => [
                'name'           => 'Avant ',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Benjamin C. Meyer'],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(layout_engine)',
                    ],
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                    [
                        'name' => 'Trident',
                        'link' => 'https://en.wikipedia.org/wiki/Trident_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '2020 build 3',
                    'date'    => 'March 17, 2020',
                ],
            ],
            'Basilisk'       => [
                'name'           => 'Basilisk ',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Moonchild Productions',
                        'link' => 'https://www.basilisk-browser.org/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Goanna',
                        'link' => 'https://en.wikipedia.org/wiki/Goanna_(software)',
                    ],
                ],
                'latest-release' => [
                    'version' => '2020.10.05',
                    'date'    => '5 October 2020',
                ],
            ],
            'Blisk'          => [
                'name'           => 'Blisk',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Blisk team'],
                ],
                'cost'           => [
                    'Free' => 'Limited',
                    'Paid' => 'Unlimited Pro',
                ],
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
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
                    'date'    => 'June 29, 2019',
                ],
            ],
            'BeakerBrowser'  => [
                'name'           => 'Beaker',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Blue Link Labs',
                        'link' => 'https://beakerbrowser.com/about',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MIT License',
                        'link' => 'https://en.wikipedia.org/wiki/MIT_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'macOS'   => [
                        'version' => '0.8.10',
                        'date'    => 'March 13, 2020',
                    ],
                    'Windows' => [
                        'version' => '0.8.10',
                        'date'    => 'March 13, 2020',
                    ],
                    'Linux'   => [
                        'version' => '0.8.10',
                        'date'    => 'March 13, 2020',
                    ],
                ],
            ],
            'Electron'       => [
                'name'           => 'Electron',
                'type'           => 'Electron (software framework)',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'GitHub',
                        'link' => 'https://en.wikipedia.org/wiki/GitHub',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MIT License',
                        'link' => 'https://en.wikipedia.org/wiki/MIT_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [
                        'version' => '10.1.5',
                        'date'    => '23 October 2020',
                    ],
                    'Preview release' => [
                        'version' => '11.0.0-beta.16',
                        'date'    => '24 October 2020',
                    ],
                ],
            ],
            'Brave'          => [
                'name'           => 'Brave Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Brave Software Inc',
                        'link' => 'https://en.wikipedia.org/wiki/Brave_(browser)',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '1.15.73',
                        'date'    => '15 October 2020',
                    ],
                    'iOS'     => [
                        'version' => '1.20',
                        'date'    => '25 September 2020',
                    ],
                    'macOS'   => [
                        'version' => '1.15.75',
                        'date'    => '16 October 2020',
                    ],
                    'Windows' => [
                        'version' => '1.15.75',
                        'date'    => '16 October 2020',
                    ],
                    'Linux'   => [
                        'version' => '1.15.75',
                        'date'    => '16 October 2020',
                    ],
                ],
            ],
            'Camino'         => [
                'name'           => 'Camino',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'The Camino Project'],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'MPL 1.1',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                    [
                        'name' => 'LGPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '2.1.2',
                    'date'    => '14 March 2012',
                ],
            ],
            'Cliqz'          => [
                'name'           => 'Cliqz',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Cliqz GmbH'],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '1.9.7',
                        'date'    => 'April 4, 2020',
                    ],
                    'iOS'     => [
                        'version' => '3.6.3',
                        'date'    => 'June 30, 2020',
                    ],
                    'macOS'   => [
                        'version' => '1.38.0',
                        'date'    => 'July 22, 2020',
                    ],
                    'Windows' => [
                        'version' => '1.38.0',
                        'date'    => 'July 22, 2020',
                    ],
                    'Linux'   => [
                        'version' => '1.38.0',
                        'date'    => 'July 22, 2020',
                    ],
                ],
            ],
            'Edg'            => [
                'name'           => 'Microsoft Edge',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Microsoft Corp',
                        'link' => 'https://www.microsoftedgeinsider.com/en-us/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '88.0.673.0',
                    'date'    => '14 October 2020',
                ],
            ],
            'Opera'          => [
                'name'           => 'Opera',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Opera Software',
                        'link' => 'https://en.wikipedia.org/wiki/Opera_Software',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'version' => '71.0.3770.271',
                    'date'    => '14 October 2020',
                ],
            ],
            'Opera Mobile'   => [
                'name'           => 'Opera',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Opera Software',
                        'link' => 'https://en.wikipedia.org/wiki/Opera_Software',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android'           => [
                        'version' => '59.1.2926.54067',
                        'date'    => 'July 13, 2020',
                    ],
                    'Android (classic)' => [
                        'version' => '12.1.9',
                        'date'    => 'June 8, 2016',
                    ],
                    'Symbian'           => [
                        'version' => 'S60 12.0.22',
                        'date'    => 'June 24, 2012',
                    ],
                    'Windows Mobile'    => [
                        'version' => '10.0',
                        'date'    => 'March 16, 2010',
                    ],
                ],
            ],
            'whale'          => [
                'name'           => 'Naver Whale',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Naver Corporation',
                        'link' => 'https://en.wikipedia.org/wiki/Naver_Corporation',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '1.5.4.2',
                        'date'    => 'May 26, 2020',
                    ],
                    'iOS'     => [
                        'version' => '1.5.0',
                        'date'    => 'May 25, 2020',
                    ],
                    'macOS'   => [
                        'version' => '2.7.100.20',
                        'date'    => 'June 18, 2020',
                    ],
                    'Windows' => [
                        'version' => '2.7.100.20',
                        'date'    => 'June 18, 2020',
                    ],
                    'Linux'   => [
                        'version' => '2.7.100.20',
                        'date'    => 'June 18, 2020',
                    ],
                ],
            ],
            'Falkon'         => [
                'name'           => 'Falkon',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'David Rosca',
                        'link' => 'https://en.wikipedia.org/wiki/Links_(web_browser)',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL 3.0',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '3.1.0.75',
                        'date'    => 'March 19, 2019',
                    ],
                ],
            ],
            'Konqueror'      => [
                'name'           => 'Konqueror Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'KDE',
                        'link' => 'https://en.wikipedia.org/wiki/KDE',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'KHTML',
                        'link' => 'https://en.wikipedia.org/wiki/KHTML',
                    ],
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [
                        'version' => '20.08.2',
                        'date'    => '7 June 2018',
                    ],
                    'Preview release' => [],
                ],
            ],
            'YaBrowser'      => [
                'name'           => 'Yandex Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Yandex',
                        'link' => 'https://en.wikipedia.org/wiki/Yandex',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '20.6.3.54',
                        'date'    => 'July 23, 2020',
                    ],
                    'iOS'     => [
                        'version' => '20.6.2.318',
                        'date'    => 'July 16, 2020',
                    ],
                    'macOS'   => [
                        'version' => '20.7.2',
                        'date'    => 'July 2020',
                    ],
                    'Windows' => [
                        'version' => '20.7.2',
                        'date'    => 'July 2020',
                    ],
                    'Linux'   => [
                        'version' => '20.7.2',
                        'date'    => 'July 2020',
                    ],
                ],
            ],
            'QtWebEngine'    => [
                'name'           => 'Qt Web Engine based browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Dooble Project Team',
                        'link' => 'https://en.wikipedia.org/wiki/Dooble',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '2020.10.10',
                        'date'    => 'October 10, 2020',
                    ],
                ],
            ],
            /*
             * Iron 73.0.3800.0 on Windows 10
                Developer(s)    SRWare
                Initial release    18 September 2008; 12 years ago[1]
                Stable release(s) [±]
                Windows    85.0.4350.0 / October 2, 2020; 35 days ago[2]
                macOS    84.0.4300.0 / August 29, 2020; 2 months ago[3]
                Linux    85.0.4350.0 / October 6, 2020; 31 days ago[4]
                Android    74.0.3850.0 / May 10, 2019; 17 months ago[5]
                Engine    Blink, V8
                Operating system    Windows 7 and later, OS X 10.9 and later, Linux, Android 4.1 and later
                Size    47.9 MB (Windows), 45.1 (Android)
                Type    Web browser
                Licence    BSD, with some parts under other licences.[6] Source code not provided.
                Website    www.srware.net/en/software_srware_iron.php
             * */
            'Iron'           => [
                'name'           => 'SRWare Iron',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'SRWare',
                        'link' => 'www.srware.net/en/software_srware_iron.php',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout'         => [
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
                        'date'    => 'May 10, 2019',
                    ],
                    'macOS'   => [
                        'version' => '84.0.4300.0',
                        'date'    => 'August 29, 2020',
                    ],
                    'Windows' => [
                        'version' => '85.0.4350.0',
                        'date'    => 'October 2, 2020',
                    ],
                    'Linux'   => [
                        'version' => '85.0.4350.0',
                        'date'    => 'October 6, 2020',
                    ],
                ],
            ],
            'Chrome'         => [
                'name'           => 'Google Chrome',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Google LLC',
                        'link' => 'https://en.wikipedia.org/wiki/Google',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'BSD (Chromium executable) (some closed-source features)',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Android' => [
                        'version' => '86.0.4240.114',
                        'date'    => 'October 22, 2020',
                    ],
                    'iOS'     => [
                        'version' => '86.0.4240.93',
                        'date'    => 'October 12, 2020',
                    ],
                    'macOS'   => [
                        'version' => '86.0.4240.111',
                        'date'    => 'October 20, 2020',
                    ],
                    'Windows' => [
                        'version' => '86.0.4240.111',
                        'date'    => 'October 20, 2020',
                    ],
                    'Linux'   => [
                        'version' => '86.0.4240.111',
                        'date'    => 'October 20, 2020',
                    ],
                ],
            ],
            'Chromium'       => [
                'name'           => 'Chromium Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'The Chromium Project',
                        'link' => 'https://www.chromium.org/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'name' => 'built nightly',
                        'link' => 'https://chromium.woolyss.com/',
                    ],
                ],
            ],
            'Comodo_Dragon'  => [
                'name'           => 'Comodo Dragon',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Comodo Group',
                        'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '83.0.4103.116',
                        'date'    => 'July 21, 2020',
                    ],
                ],
            ],
            'IceDragon'      => [
                'name'           => 'Comodo Ice Dragon',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Comodo Group',
                        'link' => 'https://www.comodo.com/home/browsers-toolbars/internet-products.php',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '65.0.2.15',
                        'date'    => 'June 19, 2019',
                    ],
                ],
            ],
            'Dillo'          => [
                'name'           => 'Dillo',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'The Dillo team',
                        'link' => 'https://www.dillo.org/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    ['name' => 'custom'],
                ],
                'latest-release' => [
                    [
                        'version' => '3.0.5',
                        'date'    => '30 June 2015',
                    ],
                ],
            ],
            'Dooble'         => [
                'name'           => 'Dooble',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Dooble Project Team',
                        'link' => 'https://en.wikipedia.org/wiki/Dooble',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'BSD',
                        'link' => 'https://en.wikipedia.org/wiki/BSD_licenses',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '2020.10.10',
                        'date'    => 'October 10, 2020',
                    ],
                ],
            ],
            'ELinks'         => [
                'name'           => 'ELinks',
                'type'           => 'Web Browser',
                'ui'             => 'TextBasedMode',
                'creator'        => [
                    [
                        'name' => 'Baudis, Fonseca, et al.',
                        'link' => 'https://en.wikipedia.org/wiki/ELinks',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'custom',
                        'note' => 'fork of Links',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '0.11.7',
                        'date'    => '22 August 2009',
                    ],
                ],
            ],
            'Epiphany'       => [
                'name'           => 'GNOME Web',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Marco Pesenti Gritti',
                        'link' => 'https://www.gnome.org/news/2015/05/goodbye-marco/',
                    ],
                    [
                        'name' => 'The GNOME Project',
                        'link' => 'https://en.wikipedia.org/wiki/The_GNOME_Project',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'WebKitGTK',
                        'link' => 'https://en.wikipedia.org/wiki/WebKitGTK',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [
                        'version' => '3.38.1',
                        'date'    => '8 October 2020',
                    ],
                    'Preview release' => [
                        'version' => '3.37.92',
                        'date'    => '13 September 2020',
                    ],
                ],
            ],
            'Links'          => [
                'name'           => 'Links',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Patocka, et al',
                        'link' => 'https://en.wikipedia.org/wiki/Links_(web_browser)',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    ['name' => 'custom'],
                ],
                'latest-release' => [
                    [
                        'version' => '2.21',
                        'date'    => '2 August 2020',
                    ],
                ],
            ],
            'Flock'          => [
                'name'           => 'Flock',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Flock Inc',
                        'link' => [
                            'https://web.archive.org/web/20110325151017/http://www.flock.com/',
                            'https://en.wikipedia.org/wiki/Flock_(web_browser)',
                        ],
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'Proprietary',
                        'note' => '(as of 3.0)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '3.5.3.4641',
                        'date'    => 'February 1, 2011',
                    ],
                ],
            ],
            'Waterfox'       => [
                'name'           => 'Waterfox Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Alex Kontos'],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '2020.10',
                        'date'    => '21 October 2020',
                    ],
                ],
            ],
            'Eolie'          => [
                'name'           => 'Eolie Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Mozilla Foundation',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Foundation',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
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
                    'Standard'                 => [
                        'version' => '82.0',
                        'date'    => 'October 20, 2020',
                    ],
                    'Extended Support Release' => [
                        'version' => '78.4.0',
                        'date'    => 'October 20, 2020',
                    ],
                ],
            ],
            'PaleMoon'       => [
                'name'           => 'PaleMoon Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'Moonchild Productions'],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Goanna',
                        'link' => 'https://en.wikipedia.org/wiki/Goanna_(software)',
                    ],
                ],
                'latest-release' => [
                    'Standard' => [
                        'version' => '28.15.0',
                        'date'    => '27 October 2020',
                    ],
                ],
            ],
            'SeaMonkey'      => [
                'name'           => 'SeaMonkey Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    ['name' => 'SeaMonkey Council'],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [
                        'version' => '2.53.4',
                        'date'    => 'September 22, 2020',
                    ],
                    'Preview release' => [
                        'version' => '2.53.5b1',
                        'date'    => 'October 29, 2020',
                    ],
                ],
            ],
            'SalamWeb'       => [
                'name'           => 'SalamWeb Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'SalamWeb',
                        'link' => 'https://salamweb.com/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Blink',
                        'link' => 'https://en.wikipedia.org/wiki/Blink_(web_engine)',
                    ],
                ],
                'latest-release' => [
                    'Windows' => [
                        'version' => '4.5',
                        'date'    => 'July 31, 2020',
                    ],
                    'Android' => [
                        'version' => '4.5.0.40',
                        'date'    => 'June 25, 2020',
                    ],
                    'macOS'   => [
                        'version' => '4.5',
                        'date'    => 'June 20, 2020',
                    ],
                    'iOS'     => [
                        'version' => '4.5',
                        'date'    => 'June 20, 2020',
                    ],
                ],
            ],
            'firefox'        => [
                'name'           => 'Firefox Browser',
                'keyword'           => 'firefox',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Mozilla Foundation',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Foundation',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'MPL 2.0',
                        'link' => 'https://en.wikipedia.org/wiki/Mozilla_Public_License',
                    ],
                ],
                'layout'         => [
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
                    'Standard'                 => [
                        'version' => '82.0',
                        'date'    => 'October 20, 2020',
                    ],
                    'Extended Support Release' => [
                        'version' => '78.4.0',
                        'date'    => 'October 20, 2020',
                    ],
                ],
            ],
            'Galeon'         => [
                'name'           => 'Galeon Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Marco Pesenti Gritti',
                        'link' => 'https://www.gnome.org/news/2015/05/goodbye-marco/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'discontinued',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Gecko',
                        'link' => 'https://en.wikipedia.org/wiki/Gecko_(layout_engine)',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '2.0.7',
                        'date'    => '27 September 2008',
                    ],
                ],
            ],
            'iCab'           => [
                'name'           => 'iCab Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Alexander Clauss',
                        'link' => 'https://www.clauss-net.de/',
                    ],
                ],
                'cost'           => 'Free, $20 (Pro)',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary (browser)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                    [
                        'name' => 'LGPL (WebKit)',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '5.9.2',
                        'date'    => 'March 4, 2020',
                    ],
                ],
            ],
            'curl'           => [
                'name'           => 'Client URL',
                'type'           => 'Web Browser',
                'ui'             => 'FullTextMode',
                'creator'        => [
                    [
                        'name' => 'Daniel Stenberg',
                        'link' => 'https://en.wikipedia.org/wiki/Daniel_Stenberg',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Free Software: MIT/X derivate license',
                        'link' => 'https://curl.haxx.se/docs/copyright.html',
                    ],
                ],
                'latest-release' => [
                    'Stable release' => [
                        'version' => '7.73.0',
                        'date'    => '14 October 2020',
                    ],
                ],
            ],
            'Lynx'           => [
                'name'           => 'Lynx',
                'type'           => 'FTP client / HTTP client',
                'ui'             => 'TextBasedMode',
                'creator'        => [
                    ['name' => 'Montulli, Grobe, Rezac, et al'],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'custom, fork of libwww',
                        'link' => 'https://en.wikipedia.org/wiki/Libwww',
                    ],
                ],
                'latest-release' => [
                    [
                        'version' => '2.8.9rel.1',
                        'date'    => '8 July 2018',
                    ],
                ],
            ],
            'msie'           => 'msie',

            'Midori'         => [
                'name'           => 'Midori Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Christian Dywan, et al.',
                        'link' => 'https://astian.org/en/midori-browser/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'LGPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [],
                    'Preview release' => [
                        'version' => '9.0',
                        'date'    => 'July 29, 2019',
                    ],
                ],
            ],
            'NetSurf'        => [
                'name'           => 'NetSurf Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'The NetSurf Developers',
                        'link' => 'http://www.netsurf-browser.org/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPL',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Qt WebEngine',
                        'link' => 'https://en.wikipedia.org/wiki/Qt_WebEngine',
                    ],
                    [
                        'name' => 'QtWebKit',
                        'link' => 'https://en.wikipedia.org/wiki/QtWebKit',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [
                        'version' => '3.10',
                        'date'    => 'May 24, 2020',
                    ],
                    'Preview release' => [],
                ],
            ],
            'Otter'          => [
                'name'           => 'Otter Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Michał Dutkiewicz',
                        'link' => 'https://otter-browser.org/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'GPLv3',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'Qt WebEngine',
                        'link' => 'https://en.wikipedia.org/wiki/Qt_WebEngine',
                    ],
                    [
                        'name' => 'QtWebKit',
                        'link' => 'https://en.wikipedia.org/wiki/QtWebKit',
                    ],
                ],
                'latest-release' => [
                    'Stable release'  => [
                        'version' => '1.0.01',
                        'date'    => '1 January 2019',
                    ],
                    'Preview release' => [
                        'version' => 'weekly333',
                        'date'    => 'May 18, 2020',
                    ],
                ],
            ],
            'Maxthon'        => [
                'name'           => 'Maxthon Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Maxthon International Ltd',
                        'link' => 'https://en.wikipedia.org/wiki/Maxthon',
                    ],
                ],
                'cost'           => '	Free',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Freeware',
                        'link' => 'https://en.wikipedia.org/wiki/Freeware',
                    ],
                ],
                'layout'         => [
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
                    'Windows'       => [
                        'version' => '5.3.8.2000',
                        'date'    => 'October 25, 2019',
                    ],
                    'Android'       => [
                        'version' => '5.2.3.3241',
                        'date'    => 'January 25, 2019',
                    ],
                    'macOS'         => [
                        'version' => '5.1.60',
                        'date'    => 'August 27, 2018',
                    ],
                    'iOS'           => [
                        'version' => '5.4.5',
                        'date'    => 'July 21, 2020',
                    ],
                    'Windows Phone' => [
                        'version' => '2.2.0',
                        'date'    => 'March 30, 2017',
                    ],
                    'Linux'         => [
                        'version' => '1.0.5.3',
                        'date'    => 'September 9, 2014',
                    ],
                ],
            ],
            'safari'         => [
                'name'           => 'safari Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => 'Apple Inc.',
                        'link' => 'https://en.wikipedia.org/wiki/Apple_Inc.',
                    ],
                ],
                'cost'           => 'Included with macOS and iOS',
                'status'         => 'Active',
                'licence'        => [
                    [
                        'name' => 'Proprietary (browser)',
                        'link' => 'https://en.wikipedia.org/wiki/Proprietary_software',
                    ],
                    [
                        'name' => 'LGPL (WebKit) ',
                        'link' => 'https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License',
                    ],
                ],
                'layout'         => [
                    [
                        'name' => 'WebKit',
                        'link' => 'https://en.wikipedia.org/wiki/WebKit',
                    ],
                ],
                'latest-release' => [
                    'macOS' => [
                        'version' => '14.0',
                        'date'    => 'September 17, 2020',
                    ],
                    'iOS'   => [
                        'version' => '14.0',
                        'date'    => 'September 17, 2020',
                    ],
                ],
            ],
        ];

    }//end getWebBrowsersList()


    /**
     * List of web browsers.
     *
     * @return array
     */
    protected function getWebBrowsers(): array
    {
        return [
            '007ac9-crawler' => [
                'name'      => '007ac9 Crawler',
                'keyword'   => '007ac9 Crawler',
                'type'      => 'Crawler',
                'ui'        => 'FullTextMode',
                'developer' => 'SISTRIX GmbH',
                'link'      => 'http://crawler.007ac9.net',
            ],
            '115-browser'     => [
                'name'           => '115 Browser',
                'keyword'           => '115 Browser',
                'type'           => 'Web Browser',
                'ui'             => 'GraphicalMode',
                'creator'        => [
                    [
                        'name' => '115 Team',
                        'link' => 'https://115.com/',
                    ],
                ],
                'cost'           => 'Free',
                'status'         => 'Active',
                'licence'        => [
                    ['name' => 'Unknown'],
                ],
                'layout'         => 'Unknown',
                'latest-release' => [
                    'version' => 'Unknown',
                    'date'    => 'Unknown',
                ],
            ],
            '12345',
            '1password',
            '1stbrowser',
            '2345-browser',
            '2345-chrome',
            '2345-explorer',
            '2gdpr',
            '360-secure-browser',
            '360-speed-browser',
            '360spider',
            '37abc',
            '7-star',
            'a1-website-analyzer',
            'a6-indexer',
            'abonti-websearch',
            'abrowse',
            'ace-explorer',
            'acoo-browser',
            'acoonbot',
            'activebookmark',
            'activerefresh',
            'activeworlds-bot',
            'ad-muncher',
            'adbeat-bot',
            'addthis-com-robot',
            'adidxbot',
            'adobe-air',
            'adsbot-google',
            'adsbot-google-mobile',
            'adscanner-bot',
            'adsense-bot',
            'adstxtcrawler',
            'adstxtlab-com-crawler',
            'agentname',
            'ahrefsbot',
            'aihitbot',
            'airmail',
            'alamofire-http-client',
            'alexa',
            'alexa-mediaplayer',
            'alexa-site-audit',
            'alexa-voice-service-device-sdk',
            'alexabot',
            'aliapp',
            'alienforce',
            'alignabot',
            'alitrip',
            'aloha-browser',
            'alphabot',
            'altervista-org',
            'amaya',
            'amazon-cloudfront',
            'amiga',
            'amigo',
            'anders-pink-bot',
            'android',
            'android-download-manager',
            'android-webview',
            'anglesharp',
            'annotate-google',
            'anonymizied',
            'anyevent-http-client',
            'aol-desktop',
            'aol-shield',
            'apache-httpclient',
            'apache-synapse',
            'apis-google',
            'apple-mail',
            'apple-news',
            'apple-pubsub',
            'applebot',
            'applecoremedia',
            'applenewsbot',
            'apt-http-transport',
            'apusbrowser',
            'arc-reader',
            'archivebot',
            'arora',
            'astute-social',
            'asus',
            'asynchronous-http-client',
            'asynchttp',
            'atomic-browser',
            'automated-security-analyser',
            'avant',
            'avast-safezone',
            'avira-scout',
            'axios',
            'azureus',
            'b-line',
            'backgroundtransferservice',
            'baidu-box-app',
            'baidu-browser',
            'baidu-browser-hd',
            'baidu-image-search',
            'baiduspider',
            'bandscraper',
            'barca-mail-client',
            'barkrowler',
            'basilisk',
            'battle-net-overlay',
            'bdfetch',
            'beaker',
            'beamrise',
            'begun-advertising-bot',
            'beonex-communicator',
            'bidswitchbot',
            'bing',
            'bing-ipad',
            'bing-search-app',
            'bingbot',
            'bingpreview',
            'bitlybot',
            'bits',
            'bl-uk-lddc-bot',
            'blackberry',
            'blackberry-playbook-tablet',
            'blackboard-safeassign',
            'blackhawk',
            'blackwidow',
            'blazer',
            'blekkobot',
            'blexbot',
            'blocknote-net',
            'bloglines-web',
            'bloglovin-bot',
            'bluecoat',
            'bnf-fr-bot',
            'boardreader-favicon-fetcher',
            'boardreader-indexer',
            'bot',
            'bot-for-jce',
            'bot-revolt',
            'brandverity-bot',
            'brokenlinkcheck',
            'browsershots',
            'browserspybot',
            'browsex',
            'browzar',
            'bubing-bot',
            'bumble-bee-bot',
            'cakephp',
            'camino',
            'camo-asset-proxy',
            'captivenetworkagent',
            'catchbot',
            'catchpoint-monitoring-service',
            'catexplorador',
            'ccbot',
            'cent-browser',
            'cfnetwork',
            'charlotte',
            'check-get',
            'checklinks',
            'checkmarknetwork-bot',
            'checksite-verification-agent',
            'chedot',
            'cheshire',
            'chimera',
            'chrome',
            'chromeplus',
            'chromium',
            'cincraw',
            'ckhttpgenerator',
            'classilla',
            'clementine',
            'clickagy-intelligence-bot',
            'cliqzbot',
            'cloudflare-alwaysonline',
            'cloudflare-amp-discovery-fetcher',
            'cm-browser',
            'cms-crawler',
            'coast',
            'cobweb',
            'coc-coc-browser',
            'coccoc-bot',
            'cocolyzebot',
            'cocrawler',
            'coda',
            'coldfusion',
            'cometbird',
            'comodo-ssl-checker',
            'conkeror',
            'contxbot',
            'coolnovo',
            'crawlboy',
            'crawler4j',
            'crazy-browser',
            'crazywebcrawler',
            'crosswalk-app',
            'cunaguaro',
            'curl',
            'curl-php',
            'custo',
            'cxensebot',
            'cyberdog',
            'cyberduck',
            'cyberfox',
            'dalvik',
            'dareboost-bot',
            'darwin-browser',
            'datagnion-bot',
            'datanyze',
            'daum',
            'daum-bot',
            'daumoa',
            'david-client',
            'dead-link-checker',
            'deepnet-explorer',
            'deg-degan-browser',
            'deluge',
            'diffbot',
            'digg-feed-fetcher',
            'diglo',
            'diigo-browser',
            'dillo',
            'discord-bot',
            'dispatch',
            'dmca-page-protection-crawling-service',
            'docbase-crawler',
            'docomo',
            'dolfin',
            'domaincrawler',
            'domainsigmacrawler',
            'domainsono-crawler',
            'domainstatsbot',
            'dorado-wap-browser',
            'dotbot',
            'download-accelerator',
            'download-accelerator-plus',
            'download-demon',
            'download-master',
            'dragon',
            'dreamweaver',
            'drupal',
            'duckduck-app',
            'duckduck-favicons-bot',
            'duckduckbot',
            'duckduckgo-browser',
            'e-ventures-investment-crawler',
            'easouspider',
            'easy-thumb-bot',
            'easybib-autocite',
            'ecatch',
            'echoboxbot',
            'ecosia',
            'edge',
            'edge-mobile',
            'electron',
            'elefent',
            'element-browser',
            'elements-browser',
            'elinks',
            'elmer',
            'emacs-w3',
            'emailwolf',
            'embed-php-library',
            'embedly',
            'enigma-browser',
            'entireweb',
            'epiphany',
            'eudora-ose',
            'eudoraweb',
            'evernote-app',
            'evernote-clip-resolver',
            'everyfeed-spider',
            'evolution',
            'evopdf',
            'exabot',
            'exalead',
            'excel',
            'exoplayerdemo',
            'ezooms',
            'facebook',
            'facebook-app',
            'facebook-messenger',
            'facebook-pages-admin',
            'facebookexternalhit',
            'facebookscraper',
            'facebot',
            'fantomas-fantomcrew-browser',
            'faraday',
            'fast-webcrawler',
            'fastbrowser',
            'faveeo-bot',
            'fccn-crawler',
            'fdm',
            'feedblitz',
            'feedburner',
            'feeddemon',
            'feedly-app',
            'feedly-feed-fetcher',
            'feedlybot',
            'feedshow',
            'feedspot',
            'feedvalidator',
            'fennec',
            'findlinks',
            'firebird',
            'firefox',
            'firefox-focus',
            'firefox-for-ios',
            'flashget',
            'flipboard-app',
            'flipboardproxy',
            'flock',
            'fluid',
            'fluid-app',
            'flyflow',
            'foobar2000',
            'freebox-browser',
            'freewebmonitoring-sitechecker',
            'friendica',
            'frontpage',
            'fuelbot',
            'gaisbot',
            'galeon',
            'garlikcrawler',
            'generic-crawler',
            'generic-ruby-crawler',
            'genieo-web-filter',
            'getintent-crawler',
            'getlinkinfo-bot',
            'getright',
            'gg-peekbot',
            'ghost-inspector-test-runner',
            'gigablast-search-engine',
            'gigabot',
            'gluten-free-crawler',
            'go-fasthttp',
            'go-httpclient',
            'gomez-site-monitor',
            'gooblog',
            'google',
            'google-adwords-displayads-webrender',
            'google-adwords-express',
            'google-app',
            'google-app-engine',
            'google-apps-script',
            'google-bot',
            'google-bot-mobile',
            'google-desktop',
            'google-earth',
            'google-earth-pro',
            'google-favicon',
            'google-feedfetcher',
            'google-http-client-library-for-java',
            'google-image-search',
            'google-lighthouse',
            'google-mail',
            'google-pagespeed-insights',
            'google-search-console',
            'google-searchbyimage',
            'google-shopping-quality-bot',
            'google-site-verification',
            'google-sitemaps',
            'google-structured-data-testing-tool',
            'google-toolbar',
            'google-web-preview',
            'google-web-snippet',
            'google-widget-server',
            'google-wireless-transcoder',
            'googlebot-news',
            'googlebot-video',
            'goose-extractor',
            'gozilla',
            'grammarly',
            'grapeshotcrawler',
            'greatnews',
            'greenbrowser',
            'gregarius',
            'grouphigh-bot',
            'grub',
            'gtmetrix-monitor',
            'gulper-web-bot',
            'guzzle-http-client',
            'gvfs',
            'gwpimages',
            'hatena-antenna',
            'hatena-bookmark',
            'hatena-favicon',
            'hatena-fetcher',
            'hatena-mobile-gateway',
            'hatena-scissors',
            'hatena-useragent',
            'headless-chrome',
            'headless-edge',
            'heartrails-capture-bot',
            'heritrix',
            'heytapbrowser',
            'hggh-screenshot-system-with-phantomjs',
            'hiqpdf',
            'hotzonu',
            'houzz-bot',
            'htmlparser',
            'http-kit',
            'http-request',
            'http-requester',
            'httpclient',
            'httpie',
            'httping',
            'httpunit',
            'httrack',
            'huaweibrowser',
            'huaweisymantecspider',
            'hubpages-bot',
            'hubspot-webcrawler',
            'i-mode-browser',
            'ias-crawler',
            'ibisbrowser',
            'ibrowse',
            'ibrowser',
            'icab',
            'icab-mobile',
            'icc-crawler',
            'iceape',
            'icecat',
            'icedove',
            'icedragon',
            'iceweasel',
            'ichiro-bot',
            'ie',
            'iemobile',
            'iframely-bot',
            'igetter',
            'ilse',
            'ilunascape',
            'impact-radius-compliance-bot',
            'implisensebot',
            'incoming-links-wordpress-plugin',
            'ineturl',
            'infegy-collection-bot',
            'infox-wisg',
            'instagram-app',
            'installatron',
            'instant-payment-notification',
            'integrity',
            'internet-archive',
            'internet-archive-special-archiver',
            'intravnews',
            'iridium-browser',
            'iron',
            'iron-mobile',
            'irssiurllog',
            'istella-bot',
            'itunes',
            'iweb',
            'jakarta-commons-httpclient',
            'jamesbot',
            'jasmine',
            'java-standard-library',
            'jbrowser',
            'jeode',
            'jersey-httpurlconnection',
            'jigsaw-css-validator',
            'jigsaw-w3c-css-validator',
            'jobboerse-bot',
            'js-kit-echo',
            'juzi-browser',
            'k-meleon',
            'k-ninja',
            'ka-radio',
            'kazehakase',
            'keeper',
            'kindle',
            'kindle-fire',
            'kinza',
            'kioclient',
            'kiwi',
            'kkman',
            'klondike',
            'kmail2',
            'kmlite',
            'kodi-media-center',
            'komodiabot',
            'konqueror',
            'kontact',
            'kulturarw3',
            'larbin',
            'lavf',
            'lcc',
            'leikibot',
            'let-s-encrypt-validator',
            'letsearchbot',
            'lg',
            'lg-browser',
            'libreoffice',
            'libtorrent',
            'libwww',
            'liebao',
            'liebao-fast',
            'liferea',
            'light',
            'lightspeed-systems-crawler',
            'line-app',
            'linguee-bot',
            'linkcheck',
            'linkdex-bot',
            'linkedinapp',
            'linkedinbot',
            'linkfluence-yak-bot',
            'linkis-bot',
            'linkpadbot',
            'links',
            'linkwalker',
            'lipperhey-kaus-australis',
            'lipperhey-seo-service',
            'livelap-crawler',
            'lolifox',
            'longurl-bot',
            'lotus-notes',
            'lovense-browser',
            'ltx71-bot',
            'lua-http-client-cosocket-driver',
            'luakit',
            'lucidworks-bot',
            'lunascape',
            'lwp',
            'lynx',
            'm3gate',
            'magpie-crawler',
            'magpierss',
            'mail-master',
            'mail-ru-bot',
            'mailchimp-com',
            'mappy',
            'marketing-grader',
            'marketwirebot',
            'maui-wap-browser',
            'mauibot',
            'maxpointcrawler',
            'maxthon',
            'maxthon-nitro',
            'mazbot',
            'mechanize',
            'mediamonkey',
            'mediatoolkit-bot',
            'megaindex-bot',
            'meizu-browser',
            'meltwaternews',
            'mercury',
            'metainspector',
            'metajobbot',
            'metauri-bot',
            'microadbot',
            'microb',
            'microsoft-cryptoapi',
            'microsoft-office-existence-discovery',
            'microsoft-office-picture-manager',
            'microsoft-url-control',
            'microsoft-webdav',
            'microsoft-windows-network-diagnostics',
            'midori',
            'mignify-bot',
            'minimo',
            'mint-browser',
            'miui-browser',
            'mixmax-link-preview',
            'mixrankbot',
            'mj12bot',
            'moat-bot',
            'mobicip',
            'mobile-safari-uiwebview',
            'mobileexplorer',
            'mobileiron',
            'mobmail',
            'mojeekbot',
            'monitor-backlinks-crawler',
            'moreover',
            'morfeus-fucking-scanner',
            'motorola-internet-browser',
            'movabletype-web-log',
            'mozilla',
            'mplayer',
            'ms-ipp-dav',
            'ms-ipppd',
            'ms-opd',
            'msnbot',
            'msnbot-media',
            'multizilla',
            'my-internet-browser',
            'nagios',
            'naver',
            'naverbot',
            'navigator',
            'nec',
            'netbox',
            'netcast',
            'netcraft-webserver-survey',
            'netcraftsurveyagent',
            'netestate-ne-crawler',
            'netfront',
            'netfront-nx',
            'netgem-set-top-box',
            'netnewswire',
            'netscape',
            'netseer-crawler',
            'netsurf',
            'nettrack-scanner',
            'netvibes',
            'neuron',
            'neustar-web-page-monitor',
            'newsblur-favicon-fetcher',
            'newsbrain',
            'newsfox',
            'newsgator-fetchlinks',
            'newsgatoronline',
            'newspaper',
            'nicebot',
            'nichrome',
            'nigma-ru',
            'nimbostratus-bot',
            'nintendo-browser',
            'nmap-scripting-engine',
            'node-fetch',
            'nokia-browser',
            'nokia-proxy-browser',
            'notetextview',
            'notify-ninja-monitor',
            'novell-bordermanager',
            'ntent',
            'nutch',
            'nuzzel-bot',
            'obigo-q',
            'obot',
            'oculus-browser',
            'odyssey-web-browser',
            'offbyone',
            'office',
            'offline-explorer',
            'okhttp',
            'omea-pro',
            'omea-reader',
            'omgili-bot',
            'omniweb',
            'oncrawl',
            'onebrowser',
            'onenote',
            'oneplus-browser',
            'open-web-analytics-bot',
            'open-webkit-sharp',
            'openindexspider',
            'openoffice',
            'openwave-mobile-browser',
            'openwebspider',
            'opera',
            'opera-mini',
            'opera-mobile',
            'opera-neon',
            'opera-touch',
            'oppo-browser',
            'optimizer-bot',
            'orca',
            'oregano',
            'origin',
            'ossproxy',
            'otter',
            'outlook',
            'overwolf-browser',
            'p3p-validator',
            'pagepeeker',
            'palemoon',
            'panscient-com',
            'paper-li-bot',
            'pdrlabs-bot',
            'pear-http-request2',
            'pear-php',
            'pearltrees-bot',
            'petalbot',
            'phantom-browser',
            'phantom-js-bot',
            'phantomjs',
            'phoenix',
            'photon',
            'php',
            'phpcrawl',
            'pic-collage',
            'pingadmin-ru-monitor',
            'pingdom',
            'pingdom-pagespeed',
            'pingdom-transaction-monitoring',
            'pinterest-app',
            'pinterest-bot',
            'pirate-browser',
            'player',
            'playstation',
            'playstation-browser',
            'plukkie',
            'pmoz-info-odp-link-checker',
            'pocket-pc',
            'pocketparser-bot',
            'podcastaddict',
            'poe-component-client-http',
            'polaris',
            'polarity',
            'pompos',
            'postbox',
            'postman-runtime',
            'powermarks',
            'powerpoint',
            'pr-cy-ru-bot',
            'prerender',
            'prism',
            'prismatic-app',
            'privacybrowser',
            'prlog',
            'proximic',
            'proxomitron',
            'publiclibraryarchive-bot',
            'puffin',
            'pycurl',
            'python',
            'python-requests',
            'python-urllib',
            'qiyu-browser',
            'qq-app',
            'qqbrowser',
            'qqdownload',
            'qt',
            'qtweb-browser',
            'qtwebengine',
            'qtwebkit',
            'qualidator-com-bot',
            'queryseekerspider',
            'quicklook',
            'quicktime',
            'quicktime-agent',
            'quite-rss',
            'quora-bot',
            'quora-link-preview-bot',
            'qupzilla',
            'qutebrowser',
            'qwantbrowser',
            'qwantify',
            'r6-commentreader',
            'r6-feedfetcher',
            'radio',
            'ramblermail-bot',
            'rankflex',
            'raptr',
            'rddocuments-app',
            'realdownload',
            'rebelmouse',
            'reddit',
            'reeder',
            'refindbot',
            'rekonq',
            'riddler',
            'rippers',
            'rma',
            'rockmelt',
            'rogerbot',
            'roku-dvp',
            'rssbandit',
            'rssowl',
            'ryte-bot',
            'safari',
            'safedns-bot',
            'sailfish-browser',
            'saina',
            'samsung',
            'samsung-browser',
            'samsung-crossapp',
            'samsung-tv',
            'samsung-webview',
            'sbooksnet',
            'schoology',
            'scoutjet',
            'scrapy',
            'screaming-frog-seo-spider',
            'screenshot-bot',
            'seamonkey',
            'second-life-commerce-client',
            'secondlife',
            'seekport-crawler',
            'semantic-visions-com-crawler',
            'semanticbot',
            'semc',
            'semrushbot',
            'sentibot',
            'seo-scanners-bot',
            'seobilitybot',
            'seodiver-bot',
            'seokicks-robot',
            'seoprofiler',
            'seositecheckup',
            'seostats',
            'serf',
            'serpstatbot',
            'seznam-browser',
            'seznam-email-proxy',
            'seznam-screenshot-generator',
            'seznambot',
            'shareaza',
            'shiira',
            'shockwave-flash',
            'short-url-checker',
            'shortlinktranslate',
            'shrinktheweb-bot',
            'silk',
            'simplepie',
            'simplescraper',
            'sindice-fetcher',
            'sistrix-crawler',
            'site-shot-bot',
            'sitebulb',
            'siteexplorer',
            'siteimprove-linkchecker',
            'siteimprove-match-bot',
            'sitesucker',
            'sitetruth',
            'skypeuripreview',
            'slack-imgproxy',
            'slackbot',
            'slackbot-link-expanding',
            'sleipnir',
            'slimboat',
            'slimbrowser',
            'slimerjs',
            'slimjet-browser',
            'smallproxy',
            'smarttv-webbrowser',
            'smartviera',
            'smtbot',
            'snap',
            'snapchat',
            'snapchat-agent',
            'snapchat-proxy',
            'socialrank-io-bot',
            'sogou-explorer',
            'sogou-image-crawler',
            'sogou-mobile',
            'sogou-web-spider',
            'sohunews-app',
            'songbird-app',
            'sony-psp',
            'sonycebrowser',
            'sosospider',
            'sparrow',
            'speedcurve-webpage-test',
            'splash',
            'spotify',
            'sprinklr',
            'sputnik-browser',
            'spyonweb-bot',
            'squid',
            'sraf',
            'ssearch-crawler',
            'stagefright',
            'stainless',
            'start-browser',
            'statuscake-monitor',
            'steam',
            'steam-big-picture',
            'steam-overlay',
            'steeler',
            'streaming-player',
            'stumbleupon',
            'sundance',
            'sunrise',
            'superagent',
            'superbird',
            'superbot',
            'supercleaner',
            'sur-ly-bot',
            'surf-browser',
            'surveybot',
            'svn',
            'swing',
            'swiss-search-engine',
            't-online-browser',
            'taringa-bot',
            'tazweb',
            'teleca-obigo',
            'telegrambot',
            'tenfourfox',
            'tenta-browser',
            'teoma',
            'tesla-car-browser',
            'teslabrowser',
            'test-certificate-info',
            'testcrawler',
            'the-bat',
            'the-knowledge-ai',
            'the-old-reader',
            'theworld',
            'thumbnail-ws-bot',
            'thumbor',
            'thumbshotsbot',
            'thumbsniper',
            'thunderbird',
            'tieba-app',
            'tineye-bot',
            'tiny-tiny-rss',
            'tinyurl',
            'tizen-browser',
            'toutiaospider',
            'traackr',
            'tracemyfile',
            'transmission',
            'trendiction-bot',
            'tumblr-agent',
            'tungsten-browser',
            'turnitinbot',
            'tweetbot',
            'tweetedtimes-bot',
            'tweetmeme-bot',
            'twingly-recon',
            'twitter-app',
            'twitterbot',
            'typhoeus',
            'uc-browser',
            'uc-browser-hd',
            'uc-browser-mini',
            'ucmore',
            'uipbot',
            'uipcrawler',
            'umbot',
            'unity-web-player',
            'universalfeedparser',
            'uptimebot',
            'uptimerobot',
            'ur-browser',
            'url-access',
            'urlappendbot',
            'utorrent',
            'vagabondo',
            'validator-nu-lv',
            'vbulletin-bot',
            'vbulletin-seo-bot',
            'vebidoo-bot',
            'verisign-ips-agent',
            'virtuoso',
            'visicom-toolbar',
            'vivaldi',
            'vivo-browser',
            'vkshare',
            'vlc-media-player',
            'vmware-browser',
            'vobsub',
            'vodafone',
            'voilabot',
            'vox-music-player',
            'voyager',
            'vse-link-tester',
            'vsentry',
            'w3c-checklink',
            'w3c-unicorn',
            'w3c-validator',
            'w3clinemode',
            'w3m',
            'wap-browser',
            'wappalyzer',
            'waterfox',
            'wayback-archive-bot',
            'wbsrch-web-search',
            'wdg-html-validator',
            'web-downloader',
            'web-explorer',
            'web-glance',
            'webbandit',
            'webbot-ru',
            'webcapture',
            'webceo-bot',
            'webclip-app',
            'webcollage',
            'webcopier',
            'webcorp',
            'webfetch',
            'webkit-webos',
            'webkit2png',
            'webmaster-tips-bot',
            'weborama-fetcher',
            'webpirate-browser',
            'webtv-msntv',
            'webzip',
            'wechat-app',
            'weibo',
            'werbefreie-deutsche-suchmaschine',
            'wesee-search',
            'wetab-browser',
            'wget',
            'whale-browser',
            'whatsapp',
            'whatsapp-bot',
            'whatweb-web-scanner',
            'whitehat-aviator',
            'wi-job-roboter',
            'willow-internet-crawler',
            'winamp',
            'windmaker-bot',
            'windows-live-mail',
            'windows-media-player',
            'windows-powershell',
            'windows-rss-platform',
            'windows-update-agent',
            'winhttp',
            'winwap',
            'wkbrowser',
            'wkhtmltoimage',
            'wkhtmltopdf',
            'wnvpdf',
            'woorank-review',
            'word',
            'wordpress',
            'wordpress-com-mshots-thumbnailer',
            'wotbox',
            'www-mechanize',
            'wyzo',
            'xaldon-webspider',
            'xenus-link-sleuth',
            'xml-sitemaps-generator',
            'xovibot',
            'xspider',
            'y-j-agent',
            'yaanibrowser',
            'yaapp',
            'yacy-bot',
            'yahoo',
            'yahoo-ad-monitoring',
            'yahoo-link-preview',
            'yahoo-mailproxy',
            'yahoo-my-browser',
            'yahoo-slurp',
            'yahoo-slurp-china',
            'yahoocachesystem',
            'yahooseeker',
            'yandex',
            'yandex-browser',
            'yandex-mirrordetector',
            'yandex-mobile-bot',
            'yandex-search',
            'yandexaccessibilitybot',
            'yandexblogs',
            'yandexbot',
            'yandexcalendarbot',
            'yandexdirectfetcher',
            'yandexdynamicbannerbot',
            'yandexfavicons',
            'yandeximageresizer',
            'yandeximages',
            'yandexmedia',
            'yandexmetrika',
            'yandexnews',
            'yandexpagechecker',
            'yandexscreenshotbot',
            'yandexsitelinksbot',
            'yandexvertisbot',
            'yandexvideo',
            'yandexvideoparser',
            'yandexwebmaster',
            'yioopbot',
            'yisouspider',
            'yoozbot',
            'yourls',
            'youtube-links-bot',
            'zend-http-client',
            'zeus',
            'zgrab',
            'zhihu-app',
            'zimbra-desktop',
            'zmeu',
            'zombiebot',
            'zoombot',
            'zumbot',
            'zune',
            'zvu'
        ];

    }//end getWebBrowsers()


    /**
     * List of web browsers app code
     *
     * @return array
     */
    protected function getWebBrowserAppCodeList(): array
    {
        // Parent App of Browser
        return ['mozilla' => 'Mozilla'];

    }//end getWebBrowserAppCodeList()


    /**
     * List of web browsers layout
     *
     * @return array
     */
    protected function getWebBrowsersLayoutList(): array
    {
        /*
            Web Browser Layout List*/
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

        return [
            'EdgeHTML'  => [
                'name'            => 'EdgeHTML',
                'developer'       => 'Microsoft',
                'contain'         => 'Edg',
                'contain_example' => 'Edge/xyz',
            ],
            'Blink'     => [
                'name'            => 'Blink',
                'developer'       => 'Google',
                'contain'         => 'Chrome',
                'contain_example' => 'Chrome/xyz',
            ],
            'Gecko'     => [
                'name'            => 'Gecko',
                'developer'       => 'Mozilla Foundation',
                'contain'         => 'Gecko',
                'contain_example' => 'Gecko/xyz',
            ],
            'Goanna'    => [
                'name'            => 'Goanna',
                'developer'       => 'Moonchild Productions',
                'contain'         => 'Goanna',
                'contain_example' => 'Goanna/xyz',
            ],
            'KHTML'     => [
                'name'            => 'KHTML',
                'developer'       => 'KDE project',
                'contain'         => 'KHTML',
                'contain_example' => 'KHTML/xyz',
            ],
            'Presto'    => [
                'name'            => 'Presto',
                'developer'       => 'Opera Software',
                'contain'         => 'Opera',
                'contain_example' => 'Opera/xyz',
            ],
            'Tasman'    => [
                'name'            => 'Tasman',
                'developer'       => 'Microsoft',
                'contain'         => 'Tasman',
                'contain_example' => 'Tasman/xyz',
            ],
            'Trident'   => [
                'name'            => 'Trident',
                'developer'       => 'Microsoft',
                'contain'         => 'Trident',
                'contain_example' => 'Trident/xyz',
            ],
            'WebKit'    => [
                'name'            => 'WebKit',
                'developer'       => 'Apple Inc',
                'contain'         => 'AppleWebKit',
                'contain_example' => 'AppleWebKit/xyz',
            ],
            'Servo'     => [
                'name'            => 'Servo',
                'developer'       => 'cooperatively by Mozilla and Samsung',
                'contain'         => 'Servo',
                'contain_example' => 'Servo/xyz',
            ],
            'libwww-FM' => [
                'name'            => 'libwww-FM',
                'developer'       => 'Tim Berners-Lee',
                'contain'         => 'libwww-FM',
                'contain_example' => 'libwww-FM/xyz',
            ],
        ];

    }//end getWebBrowsersLayoutList()


}//end class
