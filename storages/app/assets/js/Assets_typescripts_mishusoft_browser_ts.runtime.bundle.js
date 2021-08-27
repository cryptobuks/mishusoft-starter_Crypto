"use strict";
(self["webpackChunkMishusoftRuntime"] = self["webpackChunkMishusoftRuntime"] || []).push([["Assets_typescripts_mishusoft_browser_ts"],{

/***/ "./Assets/typescripts/mishusoft/browser.ts":
/*!*************************************************!*\
  !*** ./Assets/typescripts/mishusoft/browser.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": () => (/* binding */ Browser)
/* harmony export */ });
/**
 * Browser (typescript language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/js/browser.js
 * */
/*import {sendRequest} from "./app-common-required-send";*/
class Browser {
    VERSION = '1.0.2';
    /*cdn link*/
    cdnUrl = '';
    UserAgent = navigator.userAgent;
    browserName = 'Unknown';
    browserNameFull = 'Unknown';
    browserVersion = 'Unknown';
    browserVersionFull = 'Unknown';
    browserArchitecture = 'Unknown';
    browserAppName = 'Unknown';
    browserAppNameFull = 'Unknown';
    browserAppVersion = 'Unknown';
    browserAppCodeName = 'Unknown';
    browserAppCodeVersion = 'Unknown';
    browserEngineName = 'Unknown';
    browserEngineNameFull = 'Unknown';
    browserEngineVersion = 'Unknown';
    browserInfoAll = [];
    deviceName = 'Unknown';
    deviceType = 'Unknown';
    deviceArchitecture = 'Unknown';
    deviceWindowManager = 'Unknown';
    deviceInfoAll;
    deviceNameFull;
    deviceNameOriginal = 'Unknown';
    deviceWmNameOriginal = 'Unknown';
    currentDeviceInfo;
    /*url info*/
    URLProtocol = window.location.protocol;
    URLHostname = window.location.hostname;
    URLPath = window.location.pathname;
    URLPathFull = window.location.href;
    /*device screen info*/
    DeviceScreenWidth = window.screen.width;
    DeviceScreenHeight = window.screen.height;
    DeviceScreenColorDepth = window.screen.colorDepth;
    DeviceScreenPixelDepth = window.screen.pixelDepth;
    UserAgentList;
    devicesList;
    devicesCategoryList;
    devicesArchitectureList;
    devicesPlatformWMNameList;
    webBrowserList;
    webBrowserLayoutList;
    webBrowserAppCodeNameList;
    constructor() {
        /*Device List*/
        this.devicesList = {
            "3DS": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo 3DS", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "3DS", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "DSi": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "Presto.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo DSi", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "DSi", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "New 3DS": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo 3DS", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "New 3DS", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "Playstation Portable": {
                "Browser": {
                    "name": "Sony PSP",
                    "architecture": "32-bit",
                    "developer": "Sony",
                    "type": "Browser."
                },
                "Platform": { "name": "JAVA", "architecture": "32-bit", "developer": "Oracle" },
                "Device": { "name": "Playstation Portable", "type": "Console", "vendor": "Sony", "brand": "Sony" }
            },
            "PlayStation Vita": {
                "Browser": {
                    "name": "Playstation Browser",
                    "developer": "Sony",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "PlayStation Vita", "developer": "Oracle" },
                "Device": { "name": "PlayStation Vita", "type": "Console", "vendor": "Sony", "brand": "Sony" }
            },
            "Switch": {
                "Browser": {
                    "name": "Nintendo Browser",
                    "architecture": "32-bit",
                    "developer": "Nintendo",
                    "rendering engine": "WebKit.",
                    "type": "Browser."
                },
                "Platform": { "name": "Nintendo Switch", "architecture": "32-bit", "developer": "Nintendo" },
                "Device": { "name": "Switch", "type": "Console", "vendor": "Nintendo", "brand": "Nintendo" }
            },
            "Amiga": {
                "Browser": {
                    "name": "IBrowse",
                    "architecture": "32-bit",
                    "developer": "Stefan Burstroem",
                    "type": "Browser."
                },
                "Platform": { "name": "Amiga OS", "architecture": "32-bit", "developer": "Commodore International" },
                "Device": {
                    "name": "Amiga",
                    "type": "Desktop",
                    "vendor": "Commodore International",
                    "brand": "Commodore"
                }
            },
            "DA241HL": {
                "Browser": {
                    "name": "Chrome",
                    "architecture": "32-bit",
                    "developer": "Google Inc",
                    "type": "Browser."
                },
                "Platform": { "name": "Android", "architecture": "32-bit", "developer": "Google Inc" },
                "Device": { "name": "DA 241HL", "type": "Desktop", "vendor": "Acer", "brand": "Acer" }
            },
            "tesla": {
                "Browser": {
                    "name": "Tesla Car Browser",
                    "architecture": "32-bit",
                    "developer": "Tesla Motors.",
                    "rendering engine": "Blink.",
                    "type": "Browser."
                },
                "Platform": { "name": "Linux", "architecture": "32-bit", "developer": "Linux Foundation" },
                "Device": {
                    "name": "Car",
                    "type": "Car Entertainment Framework",
                    "vendor": "Tesla Motors",
                    "brand": "Tesla"
                }
            },
            "QtCarBrowser": {
                "Browser": {
                    "name": "Tesla Car Browser",
                    "architecture": "32-bit",
                    "developer": "Tesla Motors.",
                    "rendering engine": "Blink.",
                    "type": "Browser."
                },
                "Platform": { "name": "Linux", "architecture": "32-bit", "developer": "Linux Foundation" },
                "Device": {
                    "name": "Car",
                    "type": "Car Entertainment Framework",
                    "vendor": "Tesla Motors",
                    "brand": "Tesla"
                }
            },
            "freebsd": {
                "Platform": { "name": "FreeBSD", "architecture": "32-bit", "developer": "FreeBSD Foundation" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "CrOS": {
                "Platform": { "name": "Chrome OS", "architecture": "32-bit", "developer": "Google Inc" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "Ubuntu": {
                "Platform": { "name": "Ubuntu OS", "architecture": "32-bit", "developer": "Canonical Inc" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "Arch Linux": {
                "Platform": { "name": "Arch Linux", "architecture": "32-bit", "developer": "Arch Linux" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "linux": {
                "Platform": { "name": "Linux", "architecture": "32-bit", "developer": "Linux Foundation" },
                "Device": { "name": "Computer", "type": "Linux Desktop" }
            },
            "debian": "Debian",
            "manjaro": "manjaro",
            "sunos": "Sun Solaris",
            "beos": "BeOS",
            "apachebench": "ApacheBench",
            "aix": "AIX",
            "irix": "Irix",
            "osf": "DEC OSF",
            "hp-ux": "HP-UX",
            "netbsd": "NetBSD",
            "bsdi": "BSDi",
            "openbsd": "OpenBSD",
            "gnu": "GNU\/Linux",
            "unix": "Unknown Unix OS",
            "ubuntu": "Ubuntu",
            "RISC OS": "RISC OS",
            "Darwin": "MAC OS",
            "Haiku": "Haiku OS",
            "FreeMiNT": "FreeMiNT OS",
            "windows phone 8": {
                "Platform": {
                    "name": "Windows Phone 8",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Windows Phone", "type": "phone" }
            },
            "windows phone os 7": {
                "Platform": {
                    "name": "Windows Phone 7",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Windows Phone", "type": "phone" }
            },
            "windows nt 10": {
                "Platform": {
                    "name": "Windows 10",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.3": {
                "Platform": {
                    "name": "Windows 8.1",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.2": {
                "Platform": {
                    "name": "Windows 8",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.1": {
                "Platform": {
                    "name": "Windows 7",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 6.0": {
                "Platform": {
                    "name": "Windows Longhorn",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 5.2": {
                "Platform": {
                    "name": "Windows 2003",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 5.1": {
                "Platform": {
                    "name": "Windows XP",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows xp": {
                "Platform": { "name": "Windows XP", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 5.0": {
                "Platform": {
                    "name": "Windows 2000",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows me": {
                "Platform": { "name": "Windows ME", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows nt 4.0": {
                "Platform": {
                    "name": "Windows NT 4.0",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "winnt4.0": {
                "Platform": {
                    "name": "Windows NT 4.0",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "winnt 4.0": {
                "Platform": { "name": "Windows NT", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "winn\\\/t": {
                "Platform": { "name": "Windows NT", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows 98": {
                "Platform": { "name": "Windows 98", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "win98": {
                "Platform": { "name": "Windows 98", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "windows 95": {
                "Platform": { "name": "Windows 95", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "win95": {
                "Platform": { "name": "Windows 95", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "win16": {
                "Platform": { "name": "Windows 3.11", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Computer", "type": "Desktop" }
            },
            "ppc": "Macintosh",
            "macintosh|mac os x": "Mac OS X",
            "mac_powerpc": "Mac OS 9",
            "os x": "Mac OS X",
            "ppc mac": "Power PC Mac",
            "android": "Android",
            "webos": "Mobile",
            "mobileexplorer": "Mobile Explorer",
            "palmsource": "Palm",
            "palmscape": "Palmscape",
            "motorola": "Motorola",
            "nokia": "Nokia",
            "iphone": "Apple iPhone",
            "ipad": "iPad",
            "ipod": "Apple iPod Touch",
            "sony": "Sony Ericsson",
            "ericsson": "Sony Ericsson",
            "blackberry": "BlackBerry",
            "cocoon": "O2 Cocoon",
            "blazer": "Treo",
            "lg": "LG",
            "amoi": "Amoi",
            "xda": "XDA",
            "mda": "MDA",
            "vario": "Vario",
            "htc": "HTC",
            "samsung": "Samsung",
            "sharp": "Sharp",
            "sie-": "Siemens",
            "alcatel": "Alcatel",
            "benq": "BenQ",
            "ipaq": "HP iPaq",
            "mot-": "Motorola",
            "playstation portable": "PlayStation Portable",
            "hiptop": "Danger Hiptop",
            "nec-": "NEC",
            "panasonic": "Panasonic",
            "philips": "Philips",
            "sagem": "Sagem",
            "sanyo": "Sanyo",
            "spv": "SPV",
            "zte": "ZTE",
            "sendo": "Sendo",
            "symbian": "Symbian",
            "SymbianOS": "SymbianOS",
            "elaine": "Palm",
            "palm": "Palm",
            "series60": "Symbian S60",
            "windows ce": "Windows CE",
            "obigo": "Obigo",
            "netfront": "Netfront Browser",
            "openwave": "Openwave Browser",
            "mobilexplorer": "Mobile Explorer",
            "operamini": "Opera Mini",
            "opera mini": "Opera Mini",
            "digital paths": "Digital Paths",
            "avantgo": "AvantGo",
            "xiino": "Xiino",
            "novarra": "Novarra Transcoder",
            "vodafone": "Vodafone",
            "docomo": "NTT DoCoMo",
            "o2": "O2",
            "mobile": "Generic Mobile",
            "wireless": "Generic Mobile",
            "j2me": "Generic Mobile",
            "midp": "Generic Mobile",
            "cldc": "Generic Mobile",
            "up.link": "Generic Mobile",
            "up.browser": "Generic Mobile",
            "smartphone": "Generic Mobile",
            "cellphone": "Generic Mobile",
            "Raspbian": {
                "Platform": {
                    "name": "Raspbian Pi",
                    "architecture": "32-bit",
                    "developer": "Raspberry Pi Foundation"
                }, "Device": { "name": "Computer", "type": "Desktop" }
            },
            "Mail.RU_Bot": {
                "Platform": { "name": "Mail.ru Crawler", "architecture": "32-bit", "developer": "Mail RU" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "Googlebot": {
                "Platform": {
                    "name": "Googlebot Crawler",
                    "architecture": "32-bit",
                    "developer": "Google Inc"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "Baiduspider": {
                "Platform": { "name": "Baidu Spider", "architecture": "32-bit", "developer": "Baidu Inc" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "bingbot": {
                "Platform": { "name": "Bing Bot", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "msnbot": {
                "Platform": { "name": "MSN Bot", "architecture": "32-bit", "developer": "Microsoft Corp" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "MJ12bot": {
                "Platform": {
                    "name": "Majestic-12 Distributed Search Bot",
                    "architecture": "32-bit",
                    "developer": "Majestic"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "Yahoo! Slurp": {
                "Platform": {
                    "name": "Yahoo! Slurp Web Crawler Bot",
                    "architecture": "32-bit",
                    "developer": "Yahoo LLC"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "MegaIndex.ru": {
                "Platform": {
                    "name": "MegaIndex Crawler Bot",
                    "architecture": "32-bit",
                    "developer": "MegaIndex.ru"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "AhrefsBot": {
                "Platform": {
                    "name": "Ahrefs Backlink Research Bot",
                    "architecture": "32-bit",
                    "developer": "Ahrefs"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "DotBot": {
                "Platform": {
                    "name": "OpenSite Explorer Crawler",
                    "architecture": "32-bit",
                    "developer": "The Moz"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "JobboerseBot": {
                "Platform": {
                    "name": "Jobboerse Crawler",
                    "architecture": "32-bit",
                    "developer": "jobboerse.com"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "SemrushBot": {
                "Platform": { "name": "SEMRush Crawler", "architecture": "32-bit", "developer": "SEMrush" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "YandexBot": {
                "Platform": { "name": "Yandex Search Bot", "architecture": "32-bit", "developer": "Yandex" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "seoscanners.net": {
                "Platform": {
                    "name": "SEO Scanners Crawler Bot",
                    "architecture": "32-bit",
                    "developer": "SEO Scanners"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "SEOkicks-Robot": {
                "Platform": {
                    "name": "SEOkicks Crawler",
                    "architecture": "32-bit",
                    "developer": "SEOkicks"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "CheckMarkNetwork": {
                "Platform": {
                    "name": "CheckMark Network Crawler",
                    "architecture": "32-bit",
                    "developer": "CheckMark"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "BingPreview": {
                "Platform": {
                    "name": "Bing Preview Snapshot Generator",
                    "architecture": "32-bit",
                    "developer": "Microsoft Corp"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "VoilaBot BETA": {
                "Platform": {
                    "name": "VoilaBot BETA",
                    "architecture": "32-bit",
                    "developer": "orange ft group"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "adscanner": {
                "Platform": { "name": "AdScanner Crawler", "architecture": "32-bit", "developer": "AdScanner" },
                "Device": { "name": "Crawler", "type": "Server" }
            },
            "Qwantify": {
                "Platform": {
                    "name": "Qwantify Search Crawler",
                    "architecture": "32-bit",
                    "developer": "Qwantify"
                }, "Device": { "name": "Crawler", "type": "Server" }
            },
            "apple tv": { "name": "AppleTV", "device": "Television", "manufacture": "Apple Inc." },
            "chromecast": { "name": "Chromecast", "device": "Television", "manufacture": "Google Inc." },
            "aftb": { "name": "Fire TV", "device": "Television", "manufacture": "Amazon.com, Inc." },
            "freebox": { "name": "Freebox Revolution", "device": "Television", "manufacture": "FREE SAS." },
            "googletv": { "name": "Google TV", "device": "Television", "manufacture": "Sony." },
            "netbox": { "name": "Netbox", "device": "Television", "manufacture": "Sony." },
            "playstation 3": { "name": "Playstation 3", "device": "Television", "manufacture": "Sony." },
            "playstation 4": { "name": "Playstation 4", "device": "Television", "manufacture": "Sony." },
            "kdl32Cx525": { "name": "KDL32CX525", "tdeviceype": "Television", "manufacture": "Sony." },
            "nsz-gs7\\\/gx70": { "name": "NSZ-GS7\/GX70", "device": "Television", "manufacture": "Sony." },
            "h96 pro\\+": { "name": "H96 Pro+", "device": "Television", "manufacture": "Alfawise." },
            "mx enjoy tv": { "name": "MX Enjoy TV BOX", "device": "Television", "manufacture": "Geniatech." },
            "smarttv2016": { "name": "Series J (2016)", "device": "Television", "manufacture": "Samsung." },
            "smart-tv": { "name": "Smart TV", "device": "Television", "manufacture": "Samsung." },
            "tpm171e": { "name": "TPM171E", "device": "Television", "manufacture": "Philips." },
            "smarttva": { "name": "TV", "device": "Television", "manufacture": "LG." },
            "vap430": { "name": "VAP430", "device": "Television", "manufacture": "Vizio." },
            "viera": { "name": "Viera TV", "device": "Television", "manufacture": "Panasonic." },
            "webtv": { "name": "WebTV", "device": "Television", "manufacture": "Microsoft." },
            "xbox": { "name": "Xbox 360", "device": "Television", "manufacture": "Microsoft." },
            "xbox one": { "name": "Xbox One", "device": "Television", "manufacture": "Microsoft." },
            "wii": { "name": "Wii", "device": "Television", "manufacture": "Nintendo." },
            "wiiu": { "name": "WiiU", "device": "Television", "manufacture": "Nintendo." },
            "x96 mini": { "name": "X96 mini", "device": "Television", "manufacture": "ShySky." }
        };
        /*Devices Categories*/
        this.devicesCategoryList = {
            'linux': 'linux',
            'mac': 'mac',
            'win': 'win',
            'mobi': 'mobi',
        };
        /*Devices architecture List*/
        this.devicesArchitectureList = {
            "ARMv1": "32 bit",
            "ARMv2": "32 bit",
            "ARMv3": "32 bit",
            "ARMv4": "32 bit",
            "ARMv4T": "32 bit",
            "ARMv5TE": "32 bit",
            "ARMv6": "32 bit",
            "ARMv6-M": "32 bit",
            "ARMv7-M": "32 bit",
            "ARMv7E-M": "32 bit",
            "ARMv8-M": "32 bit",
            "ARMv7-R": "32 bit",
            "ARMv8-R": "32 bit",
            "ARMv7-A": "32 bit",
            "ARMv8-A": "64 bit",
            "ARMv8.1-A": "64\/32 bit",
            "ARMv8.2-A": "64\/32 bit",
            "ARMv8.3-A": "64\/32 bit",
            "ARMv8.4-A": "64\/32 bit",
            "ARMv8.5-A": "64\/32 bit",
            "ARMv8.6-A": "64\/32 bit",
            "i286": "16 Bit",
            "Win16": "16 Bit",
            "i386": "32 Bit",
            "i486": "32 Bit",
            "i586": "32 Bit",
            "i686": "32 Bit",
            "i786": "32 Bit",
            "x86": "32 Bit",
            "x64": "64 Bit",
            "WOW64": "64 Bit",
            "Win64": "64 Bit",
            "x86_64": "64 Bit",
            "x86-64": "64 Bit",
            "x64\\\/x86": "64 Bit",
            "IA-64": "64 Bit",
            "ARM64": "64 Bit",
            "AMD64": "64 Bit",
            "Intel64": "64 Bit"
        };
        /*Platform's Window Manager*/
        this.devicesPlatformWMNameList = {
            'x11': { 'name': 'Linux Desktop,', 'type': 'X11 Window Manager.' },
            'win': { 'name': 'Windows Desktop,', 'type': 'Windows Window Manager.', },
            'mac': { 'name': 'Macintosh,', 'type': 'Mac Window Manager.', },
        };
        /*Web Browser List*/
        this.webBrowserList = {
            "007ac9 Crawler": {
                "name": "007ac9 Crawler",
                "type": "Crawler",
                "ui": "FullTextMode",
                "developer": "007ac9",
                "link": "http:\/\/crawler.007ac9.net"
            },
            "115Browser": {
                "name": "115 Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "115 Team",
                        "link": "https:\/\/115.com\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Unknown"
                    }
                ],
                "layout": "Unknown",
                "latest-release": {
                    "version": "Unknown",
                    "date": "Unknown"
                }
            },
            "126BROWSER": {
                "name": "126 BROWSER",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Unknown"
                    }
                ],
                "cost": "Free",
                "status": "Unknown",
                "licence": [
                    {
                        "name": "Unknown"
                    }
                ],
                "layout": "Unknown",
                "latest-release": {
                    "version": "Unknown",
                    "date": "Unknown"
                }
            },
            "1337Browser": {
                "name": "1337 Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Unknown"
                    }
                ],
                "cost": "Free",
                "status": "Unknown",
                "licence": [
                    {
                        "name": "Unknown"
                    }
                ],
                "layout": "Unknown",
                "latest-release": {
                    "version": "Unknown",
                    "date": "Unknown"
                }
            },
            "1Password": {
                "name": "1 Password",
                "type": "Password Manager",
                "ui": "FullTextMode",
                "creator": [
                    {
                        "name": "AgileBits Inc",
                        "link": "https:\/\/1password.com\/"
                    }
                ],
                "cost": "Trialware",
                "status": "Active",
                "licence": [
                    {
                        "name": "Trialware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trialware"
                    }
                ],
                "layout": [
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(software)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "7.5.1",
                        "date": "May 4, 2020"
                    },
                    "iOS": {
                        "version": "7.5.2",
                        "date": "April 22, 2020"
                    },
                    "macOS": {
                        "version": "7.5",
                        "date": "May 5, 2020"
                    },
                    "Windows": {
                        "version": "7.4.767",
                        "date": "April 27, 2020"
                    }
                }
            },
            "1stBrowser": "1st Browser",
            "2345Explorer": "2345 Explorer",
            "Mb2345Browser": "2345 Browser",
            "2345chrome": "2345 Chrome",
            "360SE": "360 Secure Browser",
            "Amaya": {
                "name": "Amaya",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "W3C",
                        "link": "https:\/\/www.w3.org\/"
                    },
                    {
                        "name": "INRIA",
                        "link": "http:\/\/www.inria.fr\/en\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "W3C",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/W3C_Software_Notice_and_License"
                    }
                ],
                "layout": "custom",
                "latest-release": {
                    "version": "11.4.4",
                    "date": "January 18, 2012"
                }
            },
            "AOL": {
                "name": "AOL Explorer",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "America Online, Inc",
                        "link": "https:\/\/www.aol.com\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(software)"
                    }
                ],
                "latest-release": {
                    "version": "1.5",
                    "date": "May 10, 2016"
                }
            },
            "Arora": {
                "name": "Arora",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Avant Force"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "version": "0.11.0",
                    "date": "27 September 2010"
                }
            },
            "Avant": {
                "name": "Avant ",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Benjamin C. Meyer"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(layout_engine)"
                    },
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    },
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "version": "2020 build 3",
                    "date": "March 17, 2020"
                }
            },
            "Basilisk": {
                "name": "Basilisk ",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Moonchild Productions",
                        "link": "https:\/\/www.basilisk-browser.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Goanna",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Goanna_(software)"
                    }
                ],
                "latest-release": {
                    "version": "2020.10.05",
                    "date": "5 October 2020"
                }
            },
            "Blisk": {
                "name": "Blisk",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Blisk team"
                    }
                ],
                "cost": {
                    "Free": "Limited",
                    "Paid": "Unlimited Pro"
                },
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    },
                    {
                        "name": "V8",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/V8_(JavaScript_engine)"
                    }
                ],
                "latest-release": {
                    "version": "12.0.92.83",
                    "date": "June 29, 2019"
                }
            },
            "BeakerBrowser": {
                "name": "Beaker",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Blue Link Labs",
                        "link": "https:\/\/beakerbrowser.com\/about"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MIT License",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/MIT_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "macOS": {
                        "version": "0.8.10",
                        "date": "March 13, 2020"
                    },
                    "Windows": {
                        "version": "0.8.10",
                        "date": "March 13, 2020"
                    },
                    "Linux": {
                        "version": "0.8.10",
                        "date": "March 13, 2020"
                    }
                }
            },
            "Electron": {
                "name": "Electron",
                "type": "Electron (software framework)",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "GitHub",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GitHub"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MIT License",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/MIT_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "10.1.5",
                        "date": "23 October 2020"
                    },
                    "Preview release": {
                        "version": "11.0.0-beta.16",
                        "date": "24 October 2020"
                    }
                }
            },
            "Brave": {
                "name": "Brave Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Brave Software Inc",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Brave_(browser)"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "1.15.73",
                        "date": "15 October 2020"
                    },
                    "iOS": {
                        "version": "1.20",
                        "date": "25 September 2020"
                    },
                    "macOS": {
                        "version": "1.15.75",
                        "date": "16 October 2020"
                    },
                    "Windows": {
                        "version": "1.15.75",
                        "date": "16 October 2020"
                    },
                    "Linux": {
                        "version": "1.15.75",
                        "date": "16 October 2020"
                    }
                }
            },
            "Camino": {
                "name": "Camino",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The Camino Project"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "MPL 1.1",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    },
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    },
                    {
                        "name": "LGPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "version": "2.1.2",
                    "date": "14 March 2012"
                }
            },
            "Cliqz": {
                "name": "Cliqz",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Cliqz GmbH"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "1.9.7",
                        "date": "April 4, 2020"
                    },
                    "iOS": {
                        "version": "3.6.3",
                        "date": "June 30, 2020"
                    },
                    "macOS": {
                        "version": "1.38.0",
                        "date": "July 22, 2020"
                    },
                    "Windows": {
                        "version": "1.38.0",
                        "date": "July 22, 2020"
                    },
                    "Linux": {
                        "version": "1.38.0",
                        "date": "July 22, 2020"
                    }
                }
            },
            "Edg": {
                "name": "Microsoft Edge",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Microsoft Corp",
                        "link": "https:\/\/www.microsoftedgeinsider.com\/en-us\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "version": "88.0.673.0",
                    "date": "14 October 2020"
                }
            },
            "Opera": {
                "name": "Opera",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Opera Software",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Opera_Software"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "version": "71.0.3770.271",
                    "date": "14 October 2020"
                }
            },
            "Opera Mobile": {
                "name": "Opera",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Opera Software",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Opera_Software"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "59.1.2926.54067",
                        "date": "July 13, 2020"
                    },
                    "Android (classic)": {
                        "version": "12.1.9",
                        "date": "June 8, 2016"
                    },
                    "Symbian": {
                        "version": "S60 12.0.22",
                        "date": "June 24, 2012"
                    },
                    "Windows Mobile": {
                        "version": "10.0",
                        "date": "March 16, 2010"
                    }
                }
            },
            "whale": {
                "name": "Naver Whale",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Naver Corporation",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Naver_Corporation"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Freeware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Freeware"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "1.5.4.2",
                        "date": "May 26, 2020"
                    },
                    "iOS": {
                        "version": "1.5.0",
                        "date": "May 25, 2020"
                    },
                    "macOS": {
                        "version": "2.7.100.20",
                        "date": "June 18, 2020"
                    },
                    "Windows": {
                        "version": "2.7.100.20",
                        "date": "June 18, 2020"
                    },
                    "Linux": {
                        "version": "2.7.100.20",
                        "date": "June 18, 2020"
                    }
                }
            },
            "Falkon": {
                "name": "Falkon",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "David Rosca",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Links_(web_browser)"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL 3.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "3.1.0.75",
                        "date": "March 19, 2019"
                    }
                ]
            },
            "Konqueror": {
                "name": "Konqueror Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "KDE",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/KDE"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "KHTML",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/KHTML"
                    },
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "20.08.2",
                        "date": "7 June 2018"
                    },
                    "Preview release": []
                }
            },
            "YaBrowser": {
                "name": "Yandex Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Yandex",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Yandex"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "20.6.3.54",
                        "date": "July 23, 2020"
                    },
                    "iOS": {
                        "version": "20.6.2.318",
                        "date": "July 16, 2020"
                    },
                    "macOS": {
                        "version": "20.7.2",
                        "date": "July 2020"
                    },
                    "Windows": {
                        "version": "20.7.2",
                        "date": "July 2020"
                    },
                    "Linux": {
                        "version": "20.7.2",
                        "date": "July 2020"
                    }
                }
            },
            "QtWebEngine": {
                "name": "Qt Web Engine based browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Dooble Project Team",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Dooble"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2020.10.10",
                        "date": "October 10, 2020"
                    }
                ]
            },
            "Iron": {
                "name": "SRWare Iron",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "SRWare",
                        "link": "www.srware.net\/en\/software_srware_iron.php"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    },
                    {
                        "name": "V8",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/V8_(JavaScript_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "74.0.3850.0",
                        "date": "May 10, 2019"
                    },
                    "macOS": {
                        "version": "84.0.4300.0",
                        "date": "August 29, 2020"
                    },
                    "Windows": {
                        "version": "85.0.4350.0",
                        "date": "October 2, 2020"
                    },
                    "Linux": {
                        "version": "85.0.4350.0",
                        "date": "October 6, 2020"
                    }
                }
            },
            "Chrome": {
                "name": "Google Chrome",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Google LLC",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Google"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD (Chromium executable) (some closed-source features)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Android": {
                        "version": "86.0.4240.114",
                        "date": "October 22, 2020"
                    },
                    "iOS": {
                        "version": "86.0.4240.93",
                        "date": "October 12, 2020"
                    },
                    "macOS": {
                        "version": "86.0.4240.111",
                        "date": "October 20, 2020"
                    },
                    "Windows": {
                        "version": "86.0.4240.111",
                        "date": "October 20, 2020"
                    },
                    "Linux": {
                        "version": "86.0.4240.111",
                        "date": "October 20, 2020"
                    }
                }
            },
            "Chromium": {
                "name": "Chromium Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The Chromium Project",
                        "link": "https:\/\/www.chromium.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "name": "built nightly",
                        "link": "https:\/\/chromium.woolyss.com\/"
                    }
                ]
            },
            "Comodo_Dragon": {
                "name": "Comodo Dragon",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Comodo Group",
                        "link": "https:\/\/www.comodo.com\/home\/browsers-toolbars\/internet-products.php"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "83.0.4103.116",
                        "date": "July 21, 2020"
                    }
                ]
            },
            "IceDragon": {
                "name": "Comodo Ice Dragon",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Comodo Group",
                        "link": "https:\/\/www.comodo.com\/home\/browsers-toolbars\/internet-products.php"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "65.0.2.15",
                        "date": "June 19, 2019"
                    }
                ]
            },
            "Dillo": {
                "name": "Dillo",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The Dillo team",
                        "link": "https:\/\/www.dillo.org\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom"
                    }
                ],
                "latest-release": [
                    {
                        "version": "3.0.5",
                        "date": "30 June 2015"
                    }
                ]
            },
            "Dooble": {
                "name": "Dooble",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Dooble Project Team",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Dooble"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "BSD",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/BSD_licenses"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2020.10.10",
                        "date": "October 10, 2020"
                    }
                ]
            },
            "ELinks": {
                "name": "ELinks",
                "type": "Web Browser",
                "ui": "TextBasedMode",
                "creator": [
                    {
                        "name": "Baudis, Fonseca, et al.",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/ELinks"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom",
                        "note": "fork of Links"
                    }
                ],
                "latest-release": [
                    {
                        "version": "0.11.7",
                        "date": "22 August 2009"
                    }
                ]
            },
            "Epiphany": {
                "name": "GNOME Web",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Marco Pesenti Gritti",
                        "link": "https:\/\/www.gnome.org\/news\/2015\/05\/goodbye-marco\/"
                    },
                    {
                        "name": "The GNOME Project",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/The_GNOME_Project"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKitGTK",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKitGTK"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "3.38.1",
                        "date": "8 October 2020"
                    },
                    "Preview release": {
                        "version": "3.37.92",
                        "date": "13 September 2020"
                    }
                }
            },
            "Links": {
                "name": "Links",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Patocka, et al",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Links_(web_browser)"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2.21",
                        "date": "2 August 2020"
                    }
                ]
            },
            "Flock": {
                "name": "Flock",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Flock Inc",
                        "link": [
                            "https:\/\/web.archive.org\/web\/20110325151017\/http:\/\/www.flock.com\/",
                            "https:\/\/en.wikipedia.org\/wiki\/Flock_(web_browser)"
                        ]
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "Proprietary",
                        "note": "(as of 3.0)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": [
                    {
                        "version": "3.5.3.4641",
                        "date": "February 1, 2011"
                    }
                ]
            },
            "Waterfox": {
                "name": "Waterfox Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Alex Kontos"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2020.10",
                        "date": "21 October 2020"
                    }
                ]
            },
            "Eolie": {
                "name": "Eolie Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Mozilla Foundation",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Foundation"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "note": "(before v57)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    },
                    {
                        "name": "Gecko w\/Servo",
                        "note": "v57 & after",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Servo_(software)"
                    }
                ],
                "latest-release": {
                    "Standard": {
                        "version": "82.0",
                        "date": "October 20, 2020"
                    },
                    "Extended Support Release": {
                        "version": "78.4.0",
                        "date": "October 20, 2020"
                    }
                }
            },
            "PaleMoon": {
                "name": "PaleMoon Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Moonchild Productions"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Goanna",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Goanna_(software)"
                    }
                ],
                "latest-release": {
                    "Standard": {
                        "version": "28.15.0",
                        "date": "27 October 2020"
                    }
                }
            },
            "SeaMonkey": {
                "name": "SeaMonkey Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "SeaMonkey Council"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "2.53.4",
                        "date": "September 22, 2020"
                    },
                    "Preview release": {
                        "version": "2.53.5b1",
                        "date": "October 29, 2020"
                    }
                }
            },
            "SalamWeb": {
                "name": "SalamWeb Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "SalamWeb",
                        "link": "https:\/\/salamweb.com\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Freeware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Freeware"
                    }
                ],
                "layout": [
                    {
                        "name": "Blink",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Blink_(web_engine)"
                    }
                ],
                "latest-release": {
                    "Windows": {
                        "version": "4.5",
                        "date": "July 31, 2020"
                    },
                    "Android": {
                        "version": "4.5.0.40",
                        "date": "June 25, 2020"
                    },
                    "macOS": {
                        "version": "4.5",
                        "date": "June 20, 2020"
                    },
                    "iOS": {
                        "version": "4.5",
                        "date": "June 20, 2020"
                    }
                }
            },
            "firefox": {
                "name": "Firefox Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Mozilla Foundation",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Foundation"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "MPL 2.0",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Mozilla_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "note": "(before v57)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    },
                    {
                        "name": "Gecko w\/Servo",
                        "note": "v57 & after",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Servo_(software)"
                    }
                ],
                "latest-release": {
                    "Standard": {
                        "version": "82.0",
                        "date": "October 20, 2020"
                    },
                    "Extended Support Release": {
                        "version": "78.4.0",
                        "date": "October 20, 2020"
                    }
                }
            },
            "Galeon": {
                "name": "Galeon Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Marco Pesenti Gritti",
                        "link": "https:\/\/www.gnome.org\/news\/2015\/05\/goodbye-marco\/"
                    }
                ],
                "cost": "Free",
                "status": "discontinued",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Gecko",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Gecko_(layout_engine)"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2.0.7",
                        "date": "27 September 2008"
                    }
                ]
            },
            "iCab": {
                "name": "iCab Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Alexander Clauss",
                        "link": "https:\/\/www.clauss-net.de\/"
                    }
                ],
                "cost": "Free, $20 (Pro)",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary (browser)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    },
                    {
                        "name": "LGPL (WebKit)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": [
                    {
                        "version": "5.9.2",
                        "date": "March 4, 2020"
                    }
                ]
            },
            "curl": {
                "name": "Client URL",
                "type": "Web Browser",
                "ui": "FullTextMode",
                "creator": [
                    {
                        "name": "Daniel Stenberg",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Daniel_Stenberg"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "Free Software: MIT\/X derivate license",
                        "link": "https:\/\/curl.haxx.se\/docs\/copyright.html"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "7.73.0",
                        "date": "14 October 2020"
                    }
                }
            },
            "Lynx": {
                "name": "Lynx",
                "type": "FTP client \/ HTTP client",
                "ui": "TextBasedMode",
                "creator": [
                    {
                        "name": "Montulli, Grobe, Rezac, et al"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "custom, fork of libwww",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Libwww"
                    }
                ],
                "latest-release": [
                    {
                        "version": "2.8.9rel.1",
                        "date": "8 July 2018"
                    }
                ]
            },
            "msie": "msie",
            "Midori": {
                "name": "Midori Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Christian Dywan, et al.",
                        "link": "https:\/\/astian.org\/en\/midori-browser\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "LGPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": [],
                    "Preview release": {
                        "version": "9.0",
                        "date": "July 29, 2019"
                    }
                }
            },
            "NetSurf": {
                "name": "NetSurf Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "The NetSurf Developers",
                        "link": "http:\/\/www.netsurf-browser.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPL",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Qt WebEngine",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Qt_WebEngine"
                    },
                    {
                        "name": "QtWebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/QtWebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "3.10",
                        "date": "May 24, 2020"
                    },
                    "Preview release": []
                }
            },
            "Otter": {
                "name": "Otter Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Micha\u0142 Dutkiewicz",
                        "link": "https:\/\/otter-browser.org\/"
                    }
                ],
                "cost": "Free",
                "status": "Active",
                "licence": [
                    {
                        "name": "GPLv3",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "Qt WebEngine",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Qt_WebEngine"
                    },
                    {
                        "name": "QtWebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/QtWebKit"
                    }
                ],
                "latest-release": {
                    "Stable release": {
                        "version": "1.0.01",
                        "date": "1 January 2019"
                    },
                    "Preview release": {
                        "version": "weekly333",
                        "date": "May 18, 2020"
                    }
                }
            },
            "Maxthon": {
                "name": "Maxthon Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Maxthon International Ltd",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Maxthon"
                    }
                ],
                "cost": "\tFree",
                "status": "Active",
                "licence": [
                    {
                        "name": "Freeware",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Freeware"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    },
                    {
                        "name": "Trident",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Trident_(layout_engine)"
                    }
                ],
                "latest-release": {
                    "Windows": {
                        "version": "5.3.8.2000",
                        "date": "October 25, 2019"
                    },
                    "Android": {
                        "version": "5.2.3.3241",
                        "date": "January 25, 2019"
                    },
                    "macOS": {
                        "version": "5.1.60",
                        "date": "August 27, 2018"
                    },
                    "iOS": {
                        "version": "5.4.5",
                        "date": "July 21, 2020"
                    },
                    "Windows Phone": {
                        "version": "2.2.0",
                        "date": "March 30, 2017"
                    },
                    "Linux": {
                        "version": "1.0.5.3",
                        "date": "September 9, 2014"
                    }
                }
            },
            "safari": {
                "name": "safari Browser",
                "type": "Web Browser",
                "ui": "GraphicalMode",
                "creator": [
                    {
                        "name": "Apple Inc.",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Apple_Inc."
                    }
                ],
                "cost": "Included with macOS and iOS",
                "status": "Active",
                "licence": [
                    {
                        "name": "Proprietary (browser)",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/Proprietary_software"
                    },
                    {
                        "name": "LGPL (WebKit) ",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/GNU_Lesser_General_Public_License"
                    }
                ],
                "layout": [
                    {
                        "name": "WebKit",
                        "link": "https:\/\/en.wikipedia.org\/wiki\/WebKit"
                    }
                ],
                "latest-release": {
                    "macOS": {
                        "version": "14.0",
                        "date": "September 17, 2020"
                    },
                    "iOS": {
                        "version": "14.0",
                        "date": "September 17, 2020"
                    }
                }
            }
        };
        /*Web Browser Layout engines List*/ /*
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
        this.webBrowserLayoutList = {
            "EdgeHTML": {
                "name": "EdgeHTML",
                "developer": "Microsoft",
                "contain": "Edg",
                "contain_example": "Edge\/xyz"
            },
            "Blink": {
                "name": "Blink",
                "developer": "Google",
                "contain": "Chrome",
                "contain_example": "Chrome\/xyz"
            },
            "Gecko": {
                "name": "Gecko",
                "developer": "Mozilla Foundation",
                "contain": "Gecko",
                "contain_example": "Gecko\/xyz"
            },
            "Goanna": {
                "name": "Goanna",
                "developer": "Moonchild Productions",
                "contain": "Goanna",
                "contain_example": "Goanna\/xyz"
            },
            "KHTML": {
                "name": "KHTML",
                "developer": "KDE project",
                "contain": "KHTML",
                "contain_example": "KHTML\/xyz"
            },
            "Presto": {
                "name": "Presto",
                "developer": "Opera Software",
                "contain": "Opera",
                "contain_example": "Opera\/xyz"
            },
            "Tasman": {
                "name": "Tasman",
                "developer": "Microsoft",
                "contain": "Tasman",
                "contain_example": "Tasman\/xyz"
            },
            "Trident": {
                "name": "Trident",
                "developer": "Microsoft",
                "contain": "Trident",
                "contain_example": "Trident\/xyz"
            },
            "WebKit": {
                "name": "WebKit",
                "developer": "Apple Inc",
                "contain": "AppleWebKit",
                "contain_example": "AppleWebKit\/xyz"
            },
            "Servo": {
                "name": "Servo",
                "developer": "cooperatively by Mozilla and Samsung",
                "contain": "Servo",
                "contain_example": "Servo\/xyz"
            },
            "libwww-FM": {
                "name": "libwww-FM",
                "developer": "Tim Berners-Lee",
                "contain": "libwww-FM",
                "contain_example": "libwww-FM\/xyz"
            }
        };
        /*Parent App of Browser*/
        this.webBrowserAppCodeNameList = [{ 'name': 'mozilla', 'code': 'Mozilla' }];
        /** update db
         *
         * const self = this;
         /!*devices list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-list.json", function (updatedList: any) {
            self.devicesList = updatedList;
        });
         /!*device's architecture list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-architecture-list.json", function (updatedList: any) {
            self.devicesArchitectureList = updatedList;
        });
         /!*devices category list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-category-list.json", function (updatedList: any) {
            self.devicesCategoryList = updatedList;
        });
         /!*devices platform window manager list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-devices-platform-wmn-list.json", function (updatedList: any) {
            self.devicesPlatformWMNameList = updatedList;
        });
         /!*browsers list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-all-list.json", function (updatedList: any) {
            self.webBrowserList = updatedList;
        });
         /!*browsers app code list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-app-code-list.json", function (updatedList: any) {
            self.webBrowserAppCodeNameList = updatedList;
        });
         /!*browsers layout list*!/
         this.GetUpdatedData("http://localhost/libraries/json/browser-layout-list.json", function (updatedList: any) {
            self.webBrowserAppCodeNameList = updatedList;
        });*/
        this.analyze();
    }
    /*private GetUpdatedData(Url: string, callback: any) {
        sendRequest({
            method: "POST",
            url: Url,
            async: true,
        }, function (data: any) {
            try {
                if (JSON.parse(data)) {
                    if (callback) {
                        callback(JSON.parse(data));
                    }
                }
            } catch (e) {
                console.error("Unable to retrieve data from " + Url);
                console.error(e);
            }
        });
    }*/
    analyze() {
        /*start operation*/
        const self = this;
        let cleanUA = self.cleanUserAgentString(this.UserAgent);
        /*first step*/
        if (Array.isArray(self.webBrowserAppCodeNameList)) {
            self.webBrowserAppCodeNameList.forEach((value) => {
                /*search app code form user-agent*/
                if (cleanUA.indexOf(value.name.toLowerCase()) !== -1) {
                    self.browserAppName = value.code;
                    /*split user-agent in to array by space*/
                    cleanUA.split(" ").forEach(function (item) {
                        if (item.indexOf(value.name.toLowerCase()) !== -1) {
                            self.browserAppNameFull = item.replace("/", " ").replace(value.name, value.code);
                            console.log(self.browserAppNameFull);
                            self.browserAppVersion = item.substr(value.name.toLowerCase().length + 1, (item.length - (value.name.toLowerCase().length + 1)));
                            console.log(self.browserAppVersion);
                        }
                    });
                }
            });
        }
        /*second step*/
        /*self.devicesPlatformWMNameList.forEach(function (wm:any){

        })*/
    }
    /**
     * @public
     * @return string
     */
    getURLProtocol() {
        return this.URLProtocol;
    }
    /**
     * @public
     * @return string
     */
    getURLHostname() {
        return this.URLHostname;
    }
    /**
     * @public
     * @return string
     */
    getURLPath() {
        return this.URLPath;
    }
    /**
     * @public
     * @return string
     */
    getURLPathFull() {
        return this.URLPathFull;
    }
    /**
     * @public
     * @return number
     */
    gerDeviceScreenHeight() {
        return this.DeviceScreenHeight;
    }
    /**
     * @public
     * @return number
     */
    gerDeviceScreenWidth() {
        return this.DeviceScreenWidth;
    }
    /**
     * @public
     * @return number
     */
    gerDeviceScreenColorDepth() {
        return this.DeviceScreenColorDepth;
    }
    /**
     * @public
     * @return number
     */
    gerDeviceScreenPixelDepth() {
        return this.DeviceScreenPixelDepth;
    }
    /**
     * @public
     * @return string
     */
    getDeviceWmNameOriginal() {
        return this.deviceWmNameOriginal;
    }
    /**
     * @public
     * @return array
     */
    getDeviceInfoAll() {
        return this.deviceInfoAll;
    }
    /**
     * @public
     * @return mixed
     */
    getUserAgent() {
        return this.UserAgent;
    }
    getDeviceList() {
        return this.devicesList;
    }
    getArchitectureList() {
        return this.devicesArchitectureList;
    }
    getBrowserAppCodeNameList() {
        return this.webBrowserAppCodeNameList;
    }
    getWebBrowserList() {
        return this.webBrowserList;
    }
    getWebBrowserLayoutList() {
        return this.webBrowserLayoutList;
    }
    getPlatformWMNameList() {
        return this.devicesPlatformWMNameList;
    }
    getDevicesCategoryList() {
        return this.devicesCategoryList;
    }
    /**
     * @public
     * @return array
     */
    getUserAgentList() {
        return this.UserAgentList;
    }
    /**
     * @public
     * @return string
     */
    getBrowserEngineName() {
        return (this.browserEngineName).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserEngineNameFull() {
        return (this.browserEngineNameFull).trim();
    }
    /**
     * @public
     * @return array
     */
    getBrowserInfoAll() {
        return this.browserInfoAll;
    }
    /**
     * @public
     * @return string
     */
    getBrowserAppCodeName() {
        return (this.browserAppCodeName).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserAppCodeVersion() {
        return (this.browserAppCodeVersion).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserAppName() {
        return (this.browserAppName).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserAppCodeNameFull() {
        return (this.browserAppName).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserAppVersion() {
        return (this.browserAppVersion).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserArchitecture() {
        return (this.browserArchitecture).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserEngineVersion() {
        return (this.browserEngineVersion).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserName() {
        return (this.browserName).trim();
    }
    getBrowserNameFull() {
        return (this.browserNameFull).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserVersion() {
        return (this.browserVersion).trim();
    }
    /**
     * @public
     * @return string
     */
    getBrowserVersionFull() {
        return (this.browserVersionFull).trim();
    }
    /**
     * @public
     * @return mixed
     */
    getCurrentDeviceInfo() {
        return this.currentDeviceInfo;
    }
    /**
     * @public
     * @return string
     */
    getDeviceName() {
        return (this.deviceName).trim();
    }
    /**
     * @public
     * @return string
     */
    getDeviceNameFull() {
        return (this.deviceNameFull).trim();
    }
    /**
     * @public
     * @return string
     */
    getDeviceNameOriginal() {
        return (this.deviceNameOriginal).trim();
    }
    /**
     * @public
     * @return string
     */
    getDeviceType() {
        return (this.deviceType).trim();
    }
    /**
     * @public
     * @return string
     */
    getDeviceArchitecture() {
        return (this.deviceArchitecture).trim();
    }
    /**
     * @public
     * @return string
     */
    getDeviceWindowManager() {
        return (this.deviceWindowManager).trim();
    }
    gtDeviceDetails(resources) {
        //array_change_key_case($age,CASE_UPPER)
        if (Array.isArray(resources) && (resources).length > 0) {
            if ('Platform' in resources) {
                this.currentDeviceInfo = resources['Platform'];
                this.deviceName = resources['Platform']['name'];
                this.deviceArchitecture = resources['Platform']['architecture'];
                this.deviceType = resources['Device']['type'];
            }
            else {
                if (typeof resources === 'string') {
                    this.deviceName = resources;
                    this.deviceType = resources;
                    this.currentDeviceInfo = resources;
                }
            }
        }
    }
    getPlatformName() {
        return this.deviceName;
    }
    getPlatformArchitecture() {
        return this.deviceArchitecture;
    }
    cleanUserAgentString(UserAgent) {
        // clean up the string
        // replace browser names with their aliases
        return UserAgent.toLowerCase().trim().replace('opr', 'opera').replace('iceweasel', 'firefox');
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvQXNzZXRzX3R5cGVzY3JpcHRzX21pc2h1c29mdF9icm93c2VyX3RzLnJ1bnRpbWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7S0FLSztBQUVMLDJEQUEyRDtBQUVwRCxNQUFNLE9BQU87SUFFVCxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRXpCLFlBQVk7SUFDTCxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRVgsU0FBUyxHQUFXLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFFeEMsV0FBVyxHQUFXLFNBQVMsQ0FBQztJQUNoQyxlQUFlLEdBQVcsU0FBUyxDQUFDO0lBQ3BDLGNBQWMsR0FBVyxTQUFTLENBQUM7SUFDbkMsa0JBQWtCLEdBQVcsU0FBUyxDQUFDO0lBQ3ZDLG1CQUFtQixHQUFXLFNBQVMsQ0FBQztJQUN4QyxjQUFjLEdBQVcsU0FBUyxDQUFDO0lBQ25DLGtCQUFrQixHQUFXLFNBQVMsQ0FBQztJQUN2QyxpQkFBaUIsR0FBVyxTQUFTLENBQUM7SUFDdEMsa0JBQWtCLEdBQVcsU0FBUyxDQUFDO0lBQ3ZDLHFCQUFxQixHQUFXLFNBQVMsQ0FBQztJQUUxQyxpQkFBaUIsR0FBVyxTQUFTLENBQUM7SUFDdEMscUJBQXFCLEdBQVcsU0FBUyxDQUFDO0lBQzFDLG9CQUFvQixHQUFXLFNBQVMsQ0FBQztJQUN6QyxjQUFjLEdBQVEsRUFBRSxDQUFDO0lBRXpCLFVBQVUsR0FBVyxTQUFTLENBQUM7SUFDL0IsVUFBVSxHQUFXLFNBQVMsQ0FBQztJQUMvQixrQkFBa0IsR0FBVyxTQUFTLENBQUM7SUFDdkMsbUJBQW1CLEdBQVcsU0FBUyxDQUFDO0lBRXhDLGFBQWEsQ0FBTTtJQUNuQixjQUFjLENBQVM7SUFFdkIsa0JBQWtCLEdBQVcsU0FBUyxDQUFDO0lBQ3ZDLG9CQUFvQixHQUFXLFNBQVMsQ0FBQztJQUV6QyxpQkFBaUIsQ0FBTTtJQUUvQixZQUFZO0lBQ0osV0FBVyxHQUFXLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lB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TyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXNodXNvZnRSdW50aW1lLy4vQXNzZXRzL3R5cGVzY3JpcHRzL21pc2h1c29mdC9icm93c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQnJvd3NlciAodHlwZXNjcmlwdCBsYW5ndWFnZSkgTGlicmFyeVxuICogRGV2ZWxvcGVyOiBNciBBbC1BbWluIEFobWVkIEFiaXJcbiAqIFdlYnNpdGU6IGh0dHBzOi8vd3d3Lm1pc2h1c29mdC5jb21cbiAqIE9mZmljaWFsIExpbms6IGh0dHBzOi8vd3d3Lm1pc2h1c29mdC5jb20vbGlicmFyaWVzL2pzL2Jyb3dzZXIuanNcbiAqICovXG5cbi8qaW1wb3J0IHtzZW5kUmVxdWVzdH0gZnJvbSBcIi4vYXBwLWNvbW1vbi1yZXF1aXJlZC1zZW5kXCI7Ki9cblxuZXhwb3J0IGNsYXNzIEJyb3dzZXIge1xuXG4gICAgcHVibGljIFZFUlNJT04gPSAnMS4wLjInO1xuXG4gICAgLypjZG4gbGluayovXG4gICAgcHVibGljIGNkblVybCA9ICcnO1xuXG4gICAgcHJpdmF0ZSBVc2VyQWdlbnQ6IHN0cmluZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgICBwcml2YXRlIGJyb3dzZXJOYW1lOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBicm93c2VyTmFtZUZ1bGw6IHN0cmluZyA9ICdVbmtub3duJztcbiAgICBwcml2YXRlIGJyb3dzZXJWZXJzaW9uOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBicm93c2VyVmVyc2lvbkZ1bGw6IHN0cmluZyA9ICdVbmtub3duJztcbiAgICBwcml2YXRlIGJyb3dzZXJBcmNoaXRlY3R1cmU6IHN0cmluZyA9ICdVbmtub3duJztcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBOYW1lOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBicm93c2VyQXBwTmFtZUZ1bGw6IHN0cmluZyA9ICdVbmtub3duJztcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBWZXJzaW9uOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBicm93c2VyQXBwQ29kZU5hbWU6IHN0cmluZyA9ICdVbmtub3duJztcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBDb2RlVmVyc2lvbjogc3RyaW5nID0gJ1Vua25vd24nO1xuXG4gICAgcHJpdmF0ZSBicm93c2VyRW5naW5lTmFtZTogc3RyaW5nID0gJ1Vua25vd24nO1xuICAgIHByaXZhdGUgYnJvd3NlckVuZ2luZU5hbWVGdWxsOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBicm93c2VyRW5naW5lVmVyc2lvbjogc3RyaW5nID0gJ1Vua25vd24nO1xuICAgIHByaXZhdGUgYnJvd3NlckluZm9BbGw6IGFueSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBkZXZpY2VOYW1lOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBkZXZpY2VUeXBlOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBkZXZpY2VBcmNoaXRlY3R1cmU6IHN0cmluZyA9ICdVbmtub3duJztcbiAgICBwcml2YXRlIGRldmljZVdpbmRvd01hbmFnZXI6IHN0cmluZyA9ICdVbmtub3duJztcblxuICAgIHByaXZhdGUgZGV2aWNlSW5mb0FsbDogYW55O1xuICAgIHByaXZhdGUgZGV2aWNlTmFtZUZ1bGw6IHN0cmluZztcblxuICAgIHByaXZhdGUgZGV2aWNlTmFtZU9yaWdpbmFsOiBzdHJpbmcgPSAnVW5rbm93bic7XG4gICAgcHJpdmF0ZSBkZXZpY2VXbU5hbWVPcmlnaW5hbDogc3RyaW5nID0gJ1Vua25vd24nO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50RGV2aWNlSW5mbzogYW55O1xuXG4gICAgLyp1cmwgaW5mbyovXG4gICAgcHJpdmF0ZSBVUkxQcm90b2NvbDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sO1xuICAgIHByaXZhdGUgVVJMSG9zdG5hbWU6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBwcml2YXRlIFVSTFBhdGg6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBwcml2YXRlIFVSTFBhdGhGdWxsOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAgIC8qZGV2aWNlIHNjcmVlbiBpbmZvKi9cbiAgICBwcml2YXRlIERldmljZVNjcmVlbldpZHRoOiBudW1iZXIgPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgIHByaXZhdGUgRGV2aWNlU2NyZWVuSGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgICBwcml2YXRlIERldmljZVNjcmVlbkNvbG9yRGVwdGg6IG51bWJlciA9IHdpbmRvdy5zY3JlZW4uY29sb3JEZXB0aDtcbiAgICBwcml2YXRlIERldmljZVNjcmVlblBpeGVsRGVwdGg6IG51bWJlciA9IHdpbmRvdy5zY3JlZW4ucGl4ZWxEZXB0aDtcblxuXG4gICAgcHJpdmF0ZSBVc2VyQWdlbnRMaXN0OiBhbnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VzTGlzdDogYW55O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlc0NhdGVnb3J5TGlzdDogYW55O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlc0FyY2hpdGVjdHVyZUxpc3Q6IGFueTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRldmljZXNQbGF0Zm9ybVdNTmFtZUxpc3Q6IGFueTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkJyb3dzZXJMaXN0OiBhbnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJCcm93c2VyTGF5b3V0TGlzdDogYW55O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdDogYW55O1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gICAgICAgIC8qRGV2aWNlIExpc3QqL1xuICAgICAgICB0aGlzLmRldmljZXNMaXN0ID0ge1xuICAgICAgICAgICAgXCIzRFNcIjoge1xuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5pbnRlbmRvIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wiLFxuICAgICAgICAgICAgICAgICAgICBcInJlbmRlcmluZyBlbmdpbmVcIjogXCJXZWJLaXQuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIk5pbnRlbmRvIDNEU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk5pbnRlbmRvXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCIzRFNcIiwgXCJ0eXBlXCI6IFwiQ29uc29sZVwiLCBcInZlbmRvclwiOiBcIk5pbnRlbmRvXCIsIFwiYnJhbmRcIjogXCJOaW50ZW5kb1wifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiRFNpXCI6IHtcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOaW50ZW5kbyBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiUHJlc3RvLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJOaW50ZW5kbyBEU2lcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiRFNpXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIk5ldyAzRFNcIjoge1xuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5pbnRlbmRvIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wiLFxuICAgICAgICAgICAgICAgICAgICBcInJlbmRlcmluZyBlbmdpbmVcIjogXCJXZWJLaXQuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIk5pbnRlbmRvIDNEU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk5pbnRlbmRvXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJOZXcgM0RTXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlBsYXlzdGF0aW9uIFBvcnRhYmxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb255IFBTUFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlNvbnlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiSkFWQVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk9yYWNsZVwifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiUGxheXN0YXRpb24gUG9ydGFibGVcIiwgXCJ0eXBlXCI6IFwiQ29uc29sZVwiLCBcInZlbmRvclwiOiBcIlNvbnlcIiwgXCJicmFuZFwiOiBcIlNvbnlcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlBsYXlTdGF0aW9uIFZpdGFcIjoge1xuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBsYXlzdGF0aW9uIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJTb255XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIldlYktpdC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiUGxheVN0YXRpb24gVml0YVwiLCBcImRldmVsb3BlclwiOiBcIk9yYWNsZVwifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiUGxheVN0YXRpb24gVml0YVwiLCBcInR5cGVcIjogXCJDb25zb2xlXCIsIFwidmVuZG9yXCI6IFwiU29ueVwiLCBcImJyYW5kXCI6IFwiU29ueVwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiU3dpdGNoXCI6IHtcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOaW50ZW5kbyBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiV2ViS2l0LlwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJOaW50ZW5kbyBTd2l0Y2hcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiU3dpdGNoXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkFtaWdhXCI6IHtcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJJQnJvd3NlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiU3RlZmFuIEJ1cnN0cm9lbVwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJBbWlnYSBPU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkNvbW1vZG9yZSBJbnRlcm5hdGlvbmFsXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW1pZ2FcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGVza3RvcFwiLFxuICAgICAgICAgICAgICAgICAgICBcInZlbmRvclwiOiBcIkNvbW1vZG9yZSBJbnRlcm5hdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYnJhbmRcIjogXCJDb21tb2RvcmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkRBMjQxSExcIjoge1xuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNocm9tZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIkdvb2dsZSBJbmNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQW5kcm9pZFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkdvb2dsZSBJbmNcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkRBIDI0MUhMXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIiwgXCJ2ZW5kb3JcIjogXCJBY2VyXCIsIFwiYnJhbmRcIjogXCJBY2VyXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0ZXNsYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGVzbGEgQ2FyIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJUZXNsYSBNb3RvcnMuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIkJsaW5rLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJMaW51eFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkxpbnV4IEZvdW5kYXRpb25cIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ2FyIEVudGVydGFpbm1lbnQgRnJhbWV3b3JrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVuZG9yXCI6IFwiVGVzbGEgTW90b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYnJhbmRcIjogXCJUZXNsYVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiUXRDYXJCcm93c2VyXCI6IHtcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUZXNsYSBDYXIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlRlc2xhIE1vdG9ycy5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiQmxpbmsuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkxpbnV4XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTGludXggRm91bmRhdGlvblwifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhclwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDYXIgRW50ZXJ0YWlubWVudCBGcmFtZXdvcmtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZW5kb3JcIjogXCJUZXNsYSBNb3RvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJicmFuZFwiOiBcIlRlc2xhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmcmVlYnNkXCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJGcmVlQlNEXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiRnJlZUJTRCBGb3VuZGF0aW9uXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJMaW51eCBEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDck9TXCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJDaHJvbWUgT1NcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJHb29nbGUgSW5jXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJVYnVudHVcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIlVidW50dSBPU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkNhbm9uaWNhbCBJbmNcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkxpbnV4IERlc2t0b3BcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkFyY2ggTGludXhcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkFyY2ggTGludXhcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJBcmNoIExpbnV4XCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJMaW51eCBEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJsaW51eFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTGludXhcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJMaW51eCBGb3VuZGF0aW9uXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJMaW51eCBEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkZWJpYW5cIjogXCJEZWJpYW5cIixcbiAgICAgICAgICAgIFwibWFuamFyb1wiOiBcIm1hbmphcm9cIixcbiAgICAgICAgICAgIFwic3Vub3NcIjogXCJTdW4gU29sYXJpc1wiLFxuICAgICAgICAgICAgXCJiZW9zXCI6IFwiQmVPU1wiLFxuICAgICAgICAgICAgXCJhcGFjaGViZW5jaFwiOiBcIkFwYWNoZUJlbmNoXCIsXG4gICAgICAgICAgICBcImFpeFwiOiBcIkFJWFwiLFxuICAgICAgICAgICAgXCJpcml4XCI6IFwiSXJpeFwiLFxuICAgICAgICAgICAgXCJvc2ZcIjogXCJERUMgT1NGXCIsXG4gICAgICAgICAgICBcImhwLXV4XCI6IFwiSFAtVVhcIixcbiAgICAgICAgICAgIFwibmV0YnNkXCI6IFwiTmV0QlNEXCIsXG4gICAgICAgICAgICBcImJzZGlcIjogXCJCU0RpXCIsXG4gICAgICAgICAgICBcIm9wZW5ic2RcIjogXCJPcGVuQlNEXCIsXG4gICAgICAgICAgICBcImdudVwiOiBcIkdOVVxcL0xpbnV4XCIsXG4gICAgICAgICAgICBcInVuaXhcIjogXCJVbmtub3duIFVuaXggT1NcIixcbiAgICAgICAgICAgIFwidWJ1bnR1XCI6IFwiVWJ1bnR1XCIsXG4gICAgICAgICAgICBcIlJJU0MgT1NcIjogXCJSSVNDIE9TXCIsXG4gICAgICAgICAgICBcIkRhcndpblwiOiBcIk1BQyBPU1wiLFxuICAgICAgICAgICAgXCJIYWlrdVwiOiBcIkhhaWt1IE9TXCIsXG4gICAgICAgICAgICBcIkZyZWVNaU5UXCI6IFwiRnJlZU1pTlQgT1NcIixcbiAgICAgICAgICAgIFwid2luZG93cyBwaG9uZSA4XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyBQaG9uZSA4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIFBob25lXCIsIFwidHlwZVwiOiBcInBob25lXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5kb3dzIHBob25lIG9zIDdcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIFBob25lIDdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIldpbmRvd3MgUGhvbmVcIiwgXCJ0eXBlXCI6IFwicGhvbmVcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgMTBcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDEwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDYuM1wiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgOC4xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDYuMlwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgOFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2luZG93cyBudCA2LjFcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgNi4wXCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyBMb25naG9yblwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2luZG93cyBudCA1LjJcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDIwMDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndpbmRvd3MgbnQgNS4xXCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyBYUFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2luZG93cyB4cFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyBYUFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDUuMFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgMjAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2luZG93cyBtZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyBNRVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDQuMFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgTlQgNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5udDQuMFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbmRvd3MgTlQgNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW5udCA0LjBcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgTlRcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2lublxcXFxcXC90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIE5UXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndpbmRvd3MgOThcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgOThcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2luOThcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgOThcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2luZG93cyA5NVwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyA5NVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW45NVwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyA5NVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3aW4xNlwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyAzLjExXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBwY1wiOiBcIk1hY2ludG9zaFwiLFxuICAgICAgICAgICAgXCJtYWNpbnRvc2h8bWFjIG9zIHhcIjogXCJNYWMgT1MgWFwiLFxuICAgICAgICAgICAgXCJtYWNfcG93ZXJwY1wiOiBcIk1hYyBPUyA5XCIsXG4gICAgICAgICAgICBcIm9zIHhcIjogXCJNYWMgT1MgWFwiLFxuICAgICAgICAgICAgXCJwcGMgbWFjXCI6IFwiUG93ZXIgUEMgTWFjXCIsXG4gICAgICAgICAgICBcImFuZHJvaWRcIjogXCJBbmRyb2lkXCIsXG4gICAgICAgICAgICBcIndlYm9zXCI6IFwiTW9iaWxlXCIsXG4gICAgICAgICAgICBcIm1vYmlsZWV4cGxvcmVyXCI6IFwiTW9iaWxlIEV4cGxvcmVyXCIsXG4gICAgICAgICAgICBcInBhbG1zb3VyY2VcIjogXCJQYWxtXCIsXG4gICAgICAgICAgICBcInBhbG1zY2FwZVwiOiBcIlBhbG1zY2FwZVwiLFxuICAgICAgICAgICAgXCJtb3Rvcm9sYVwiOiBcIk1vdG9yb2xhXCIsXG4gICAgICAgICAgICBcIm5va2lhXCI6IFwiTm9raWFcIixcbiAgICAgICAgICAgIFwiaXBob25lXCI6IFwiQXBwbGUgaVBob25lXCIsXG4gICAgICAgICAgICBcImlwYWRcIjogXCJpUGFkXCIsXG4gICAgICAgICAgICBcImlwb2RcIjogXCJBcHBsZSBpUG9kIFRvdWNoXCIsXG4gICAgICAgICAgICBcInNvbnlcIjogXCJTb255IEVyaWNzc29uXCIsXG4gICAgICAgICAgICBcImVyaWNzc29uXCI6IFwiU29ueSBFcmljc3NvblwiLFxuICAgICAgICAgICAgXCJibGFja2JlcnJ5XCI6IFwiQmxhY2tCZXJyeVwiLFxuICAgICAgICAgICAgXCJjb2Nvb25cIjogXCJPMiBDb2Nvb25cIixcbiAgICAgICAgICAgIFwiYmxhemVyXCI6IFwiVHJlb1wiLFxuICAgICAgICAgICAgXCJsZ1wiOiBcIkxHXCIsXG4gICAgICAgICAgICBcImFtb2lcIjogXCJBbW9pXCIsXG4gICAgICAgICAgICBcInhkYVwiOiBcIlhEQVwiLFxuICAgICAgICAgICAgXCJtZGFcIjogXCJNREFcIixcbiAgICAgICAgICAgIFwidmFyaW9cIjogXCJWYXJpb1wiLFxuICAgICAgICAgICAgXCJodGNcIjogXCJIVENcIixcbiAgICAgICAgICAgIFwic2Ftc3VuZ1wiOiBcIlNhbXN1bmdcIixcbiAgICAgICAgICAgIFwic2hhcnBcIjogXCJTaGFycFwiLFxuICAgICAgICAgICAgXCJzaWUtXCI6IFwiU2llbWVuc1wiLFxuICAgICAgICAgICAgXCJhbGNhdGVsXCI6IFwiQWxjYXRlbFwiLFxuICAgICAgICAgICAgXCJiZW5xXCI6IFwiQmVuUVwiLFxuICAgICAgICAgICAgXCJpcGFxXCI6IFwiSFAgaVBhcVwiLFxuICAgICAgICAgICAgXCJtb3QtXCI6IFwiTW90b3JvbGFcIixcbiAgICAgICAgICAgIFwicGxheXN0YXRpb24gcG9ydGFibGVcIjogXCJQbGF5U3RhdGlvbiBQb3J0YWJsZVwiLFxuICAgICAgICAgICAgXCJoaXB0b3BcIjogXCJEYW5nZXIgSGlwdG9wXCIsXG4gICAgICAgICAgICBcIm5lYy1cIjogXCJORUNcIixcbiAgICAgICAgICAgIFwicGFuYXNvbmljXCI6IFwiUGFuYXNvbmljXCIsXG4gICAgICAgICAgICBcInBoaWxpcHNcIjogXCJQaGlsaXBzXCIsXG4gICAgICAgICAgICBcInNhZ2VtXCI6IFwiU2FnZW1cIixcbiAgICAgICAgICAgIFwic2FueW9cIjogXCJTYW55b1wiLFxuICAgICAgICAgICAgXCJzcHZcIjogXCJTUFZcIixcbiAgICAgICAgICAgIFwienRlXCI6IFwiWlRFXCIsXG4gICAgICAgICAgICBcInNlbmRvXCI6IFwiU2VuZG9cIixcbiAgICAgICAgICAgIFwic3ltYmlhblwiOiBcIlN5bWJpYW5cIixcbiAgICAgICAgICAgIFwiU3ltYmlhbk9TXCI6IFwiU3ltYmlhbk9TXCIsXG4gICAgICAgICAgICBcImVsYWluZVwiOiBcIlBhbG1cIixcbiAgICAgICAgICAgIFwicGFsbVwiOiBcIlBhbG1cIixcbiAgICAgICAgICAgIFwic2VyaWVzNjBcIjogXCJTeW1iaWFuIFM2MFwiLFxuICAgICAgICAgICAgXCJ3aW5kb3dzIGNlXCI6IFwiV2luZG93cyBDRVwiLFxuICAgICAgICAgICAgXCJvYmlnb1wiOiBcIk9iaWdvXCIsXG4gICAgICAgICAgICBcIm5ldGZyb250XCI6IFwiTmV0ZnJvbnQgQnJvd3NlclwiLFxuICAgICAgICAgICAgXCJvcGVud2F2ZVwiOiBcIk9wZW53YXZlIEJyb3dzZXJcIixcbiAgICAgICAgICAgIFwibW9iaWxleHBsb3JlclwiOiBcIk1vYmlsZSBFeHBsb3JlclwiLFxuICAgICAgICAgICAgXCJvcGVyYW1pbmlcIjogXCJPcGVyYSBNaW5pXCIsXG4gICAgICAgICAgICBcIm9wZXJhIG1pbmlcIjogXCJPcGVyYSBNaW5pXCIsXG4gICAgICAgICAgICBcImRpZ2l0YWwgcGF0aHNcIjogXCJEaWdpdGFsIFBhdGhzXCIsXG4gICAgICAgICAgICBcImF2YW50Z29cIjogXCJBdmFudEdvXCIsXG4gICAgICAgICAgICBcInhpaW5vXCI6IFwiWGlpbm9cIixcbiAgICAgICAgICAgIFwibm92YXJyYVwiOiBcIk5vdmFycmEgVHJhbnNjb2RlclwiLFxuICAgICAgICAgICAgXCJ2b2RhZm9uZVwiOiBcIlZvZGFmb25lXCIsXG4gICAgICAgICAgICBcImRvY29tb1wiOiBcIk5UVCBEb0NvTW9cIixcbiAgICAgICAgICAgIFwibzJcIjogXCJPMlwiLFxuICAgICAgICAgICAgXCJtb2JpbGVcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxuICAgICAgICAgICAgXCJ3aXJlbGVzc1wiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXG4gICAgICAgICAgICBcImoybWVcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxuICAgICAgICAgICAgXCJtaWRwXCI6IFwiR2VuZXJpYyBNb2JpbGVcIixcbiAgICAgICAgICAgIFwiY2xkY1wiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXG4gICAgICAgICAgICBcInVwLmxpbmtcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxuICAgICAgICAgICAgXCJ1cC5icm93c2VyXCI6IFwiR2VuZXJpYyBNb2JpbGVcIixcbiAgICAgICAgICAgIFwic21hcnRwaG9uZVwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXG4gICAgICAgICAgICBcImNlbGxwaG9uZVwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXG4gICAgICAgICAgICBcIlJhc3BiaWFuXCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmFzcGJpYW4gUGlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJSYXNwYmVycnkgUGkgRm91bmRhdGlvblwiXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIk1haWwuUlVfQm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJNYWlsLnJ1IENyYXdsZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNYWlsIFJVXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiR29vZ2xlYm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlYm90IENyYXdsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJHb29nbGUgSW5jXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkJhaWR1c3BpZGVyXCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJCYWlkdSBTcGlkZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJCYWlkdSBJbmNcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJiaW5nYm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJCaW5nIEJvdFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibXNuYm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJNU04gQm90XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJNSjEyYm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFqZXN0aWMtMTIgRGlzdHJpYnV0ZWQgU2VhcmNoIEJvdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1hamVzdGljXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIllhaG9vISBTbHVycFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIllhaG9vISBTbHVycCBXZWIgQ3Jhd2xlciBCb3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJZYWhvbyBMTENcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiTWVnYUluZGV4LnJ1XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVnYUluZGV4IENyYXdsZXIgQm90XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWVnYUluZGV4LnJ1XCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkFocmVmc0JvdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFocmVmcyBCYWNrbGluayBSZXNlYXJjaCBCb3RcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJBaHJlZnNcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiRG90Qm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3BlblNpdGUgRXhwbG9yZXIgQ3Jhd2xlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlRoZSBNb3pcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiSm9iYm9lcnNlQm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9iYm9lcnNlIENyYXdsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJqb2Jib2Vyc2UuY29tXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlNlbXJ1c2hCb3RcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIlNFTVJ1c2ggQ3Jhd2xlclwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIlNFTXJ1c2hcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJZYW5kZXhCb3RcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIllhbmRleCBTZWFyY2ggQm90XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiWWFuZGV4XCJ9LFxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2Vvc2Nhbm5lcnMubmV0XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU0VPIFNjYW5uZXJzIENyYXdsZXIgQm90XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiU0VPIFNjYW5uZXJzXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlNFT2tpY2tzLVJvYm90XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU0VPa2lja3MgQ3Jhd2xlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlNFT2tpY2tzXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkNoZWNrTWFya05ldHdvcmtcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaGVja01hcmsgTmV0d29yayBDcmF3bGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiQ2hlY2tNYXJrXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkJpbmdQcmV2aWV3XCI6IHtcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmluZyBQcmV2aWV3IFNuYXBzaG90IEdlbmVyYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlZvaWxhQm90IEJFVEFcIjoge1xuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJWb2lsYUJvdCBCRVRBXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwib3JhbmdlIGZ0IGdyb3VwXCJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFkc2Nhbm5lclwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQWRTY2FubmVyIENyYXdsZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJBZFNjYW5uZXJcIn0sXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJRd2FudGlmeVwiOiB7XG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF3YW50aWZ5IFNlYXJjaCBDcmF3bGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiUXdhbnRpZnlcIlxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYXBwbGUgdHZcIjoge1wibmFtZVwiOiBcIkFwcGxlVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJBcHBsZSBJbmMuXCJ9LFxuICAgICAgICAgICAgXCJjaHJvbWVjYXN0XCI6IHtcIm5hbWVcIjogXCJDaHJvbWVjYXN0XCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiR29vZ2xlIEluYy5cIn0sXG4gICAgICAgICAgICBcImFmdGJcIjoge1wibmFtZVwiOiBcIkZpcmUgVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJBbWF6b24uY29tLCBJbmMuXCJ9LFxuICAgICAgICAgICAgXCJmcmVlYm94XCI6IHtcIm5hbWVcIjogXCJGcmVlYm94IFJldm9sdXRpb25cIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJGUkVFIFNBUy5cIn0sXG4gICAgICAgICAgICBcImdvb2dsZXR2XCI6IHtcIm5hbWVcIjogXCJHb29nbGUgVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcbiAgICAgICAgICAgIFwibmV0Ym94XCI6IHtcIm5hbWVcIjogXCJOZXRib3hcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcbiAgICAgICAgICAgIFwicGxheXN0YXRpb24gM1wiOiB7XCJuYW1lXCI6IFwiUGxheXN0YXRpb24gM1wiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlNvbnkuXCJ9LFxuICAgICAgICAgICAgXCJwbGF5c3RhdGlvbiA0XCI6IHtcIm5hbWVcIjogXCJQbGF5c3RhdGlvbiA0XCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXG4gICAgICAgICAgICBcImtkbDMyQ3g1MjVcIjoge1wibmFtZVwiOiBcIktETDMyQ1g1MjVcIiwgXCJ0ZGV2aWNleXBlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXG4gICAgICAgICAgICBcIm5zei1nczdcXFxcXFwvZ3g3MFwiOiB7XCJuYW1lXCI6IFwiTlNaLUdTN1xcL0dYNzBcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcbiAgICAgICAgICAgIFwiaDk2IHByb1xcXFwrXCI6IHtcIm5hbWVcIjogXCJIOTYgUHJvK1wiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkFsZmF3aXNlLlwifSxcbiAgICAgICAgICAgIFwibXggZW5qb3kgdHZcIjoge1wibmFtZVwiOiBcIk1YIEVuam95IFRWIEJPWFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkdlbmlhdGVjaC5cIn0sXG4gICAgICAgICAgICBcInNtYXJ0dHYyMDE2XCI6IHtcIm5hbWVcIjogXCJTZXJpZXMgSiAoMjAxNilcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTYW1zdW5nLlwifSxcbiAgICAgICAgICAgIFwic21hcnQtdHZcIjoge1wibmFtZVwiOiBcIlNtYXJ0IFRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU2Ftc3VuZy5cIn0sXG4gICAgICAgICAgICBcInRwbTE3MWVcIjoge1wibmFtZVwiOiBcIlRQTTE3MUVcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJQaGlsaXBzLlwifSxcbiAgICAgICAgICAgIFwic21hcnR0dmFcIjoge1wibmFtZVwiOiBcIlRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiTEcuXCJ9LFxuICAgICAgICAgICAgXCJ2YXA0MzBcIjoge1wibmFtZVwiOiBcIlZBUDQzMFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlZpemlvLlwifSxcbiAgICAgICAgICAgIFwidmllcmFcIjoge1wibmFtZVwiOiBcIlZpZXJhIFRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiUGFuYXNvbmljLlwifSxcbiAgICAgICAgICAgIFwid2VidHZcIjoge1wibmFtZVwiOiBcIldlYlRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiTWljcm9zb2Z0LlwifSxcbiAgICAgICAgICAgIFwieGJveFwiOiB7XCJuYW1lXCI6IFwiWGJveCAzNjBcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJNaWNyb3NvZnQuXCJ9LFxuICAgICAgICAgICAgXCJ4Ym94IG9uZVwiOiB7XCJuYW1lXCI6IFwiWGJveCBPbmVcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJNaWNyb3NvZnQuXCJ9LFxuICAgICAgICAgICAgXCJ3aWlcIjoge1wibmFtZVwiOiBcIldpaVwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIk5pbnRlbmRvLlwifSxcbiAgICAgICAgICAgIFwid2lpdVwiOiB7XCJuYW1lXCI6IFwiV2lpVVwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIk5pbnRlbmRvLlwifSxcbiAgICAgICAgICAgIFwieDk2IG1pbmlcIjoge1wibmFtZVwiOiBcIlg5NiBtaW5pXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU2h5U2t5LlwifVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qRGV2aWNlcyBDYXRlZ29yaWVzKi9cbiAgICAgICAgdGhpcy5kZXZpY2VzQ2F0ZWdvcnlMaXN0ID0ge1xuICAgICAgICAgICAgJ2xpbnV4JzogJ2xpbnV4JyxcbiAgICAgICAgICAgICdtYWMnOiAnbWFjJyxcbiAgICAgICAgICAgICd3aW4nOiAnd2luJyxcbiAgICAgICAgICAgICdtb2JpJzogJ21vYmknLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qRGV2aWNlcyBhcmNoaXRlY3R1cmUgTGlzdCovXG4gICAgICAgIHRoaXMuZGV2aWNlc0FyY2hpdGVjdHVyZUxpc3QgPSB7XG4gICAgICAgICAgICBcIkFSTXYxXCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXYyXCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXYzXCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXY0XCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXY0VFwiOiBcIjMyIGJpdFwiLFxuICAgICAgICAgICAgXCJBUk12NVRFXCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXY2XCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXY2LU1cIjogXCIzMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjctTVwiOiBcIjMyIGJpdFwiLFxuICAgICAgICAgICAgXCJBUk12N0UtTVwiOiBcIjMyIGJpdFwiLFxuICAgICAgICAgICAgXCJBUk12OC1NXCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXY3LVJcIjogXCIzMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjgtUlwiOiBcIjMyIGJpdFwiLFxuICAgICAgICAgICAgXCJBUk12Ny1BXCI6IFwiMzIgYml0XCIsXG4gICAgICAgICAgICBcIkFSTXY4LUFcIjogXCI2NCBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjguMS1BXCI6IFwiNjRcXC8zMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjguMi1BXCI6IFwiNjRcXC8zMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjguMy1BXCI6IFwiNjRcXC8zMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjguNC1BXCI6IFwiNjRcXC8zMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjguNS1BXCI6IFwiNjRcXC8zMiBiaXRcIixcbiAgICAgICAgICAgIFwiQVJNdjguNi1BXCI6IFwiNjRcXC8zMiBiaXRcIixcbiAgICAgICAgICAgIFwiaTI4NlwiOiBcIjE2IEJpdFwiLFxuICAgICAgICAgICAgXCJXaW4xNlwiOiBcIjE2IEJpdFwiLFxuICAgICAgICAgICAgXCJpMzg2XCI6IFwiMzIgQml0XCIsXG4gICAgICAgICAgICBcImk0ODZcIjogXCIzMiBCaXRcIixcbiAgICAgICAgICAgIFwiaTU4NlwiOiBcIjMyIEJpdFwiLFxuICAgICAgICAgICAgXCJpNjg2XCI6IFwiMzIgQml0XCIsXG4gICAgICAgICAgICBcImk3ODZcIjogXCIzMiBCaXRcIixcbiAgICAgICAgICAgIFwieDg2XCI6IFwiMzIgQml0XCIsXG4gICAgICAgICAgICBcIng2NFwiOiBcIjY0IEJpdFwiLFxuICAgICAgICAgICAgXCJXT1c2NFwiOiBcIjY0IEJpdFwiLFxuICAgICAgICAgICAgXCJXaW42NFwiOiBcIjY0IEJpdFwiLFxuICAgICAgICAgICAgXCJ4ODZfNjRcIjogXCI2NCBCaXRcIixcbiAgICAgICAgICAgIFwieDg2LTY0XCI6IFwiNjQgQml0XCIsXG4gICAgICAgICAgICBcIng2NFxcXFxcXC94ODZcIjogXCI2NCBCaXRcIixcbiAgICAgICAgICAgIFwiSUEtNjRcIjogXCI2NCBCaXRcIixcbiAgICAgICAgICAgIFwiQVJNNjRcIjogXCI2NCBCaXRcIixcbiAgICAgICAgICAgIFwiQU1ENjRcIjogXCI2NCBCaXRcIixcbiAgICAgICAgICAgIFwiSW50ZWw2NFwiOiBcIjY0IEJpdFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgLypQbGF0Zm9ybSdzIFdpbmRvdyBNYW5hZ2VyKi9cbiAgICAgICAgdGhpcy5kZXZpY2VzUGxhdGZvcm1XTU5hbWVMaXN0ID0ge1xuICAgICAgICAgICAgJ3gxMSc6IHsnbmFtZSc6ICdMaW51eCBEZXNrdG9wLCcsICd0eXBlJzogJ1gxMSBXaW5kb3cgTWFuYWdlci4nfSxcbiAgICAgICAgICAgICd3aW4nOiB7J25hbWUnOiAnV2luZG93cyBEZXNrdG9wLCcsICd0eXBlJzogJ1dpbmRvd3MgV2luZG93IE1hbmFnZXIuJyx9LFxuICAgICAgICAgICAgJ21hYyc6IHsnbmFtZSc6ICdNYWNpbnRvc2gsJywgJ3R5cGUnOiAnTWFjIFdpbmRvdyBNYW5hZ2VyLicsfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvKldlYiBCcm93c2VyIExpc3QqL1xuICAgICAgICB0aGlzLndlYkJyb3dzZXJMaXN0ID0ge1xuICAgICAgICAgICAgXCIwMDdhYzkgQ3Jhd2xlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiMDA3YWM5IENyYXdsZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDcmF3bGVyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkZ1bGxUZXh0TW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiMDA3YWM5XCIsXG4gICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jcmF3bGVyLjAwN2FjOS5uZXRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMTE1QnJvd3NlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiMTE1IEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiMTE1IFRlYW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcLzExNS5jb21cXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogXCJVbmtub3duXCIsXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiVW5rbm93blwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMTI2QlJPV1NFUlwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiMTI2IEJST1dTRVJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVW5rbm93blwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogXCJVbmtub3duXCIsXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiVW5rbm93blwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMTMzN0Jyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjEzMzcgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVua25vd25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBcIlVua25vd25cIixcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiVW5rbm93blwiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJVbmtub3duXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIxUGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjEgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJQYXNzd29yZCBNYW5hZ2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkZ1bGxUZXh0TW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFnaWxlQml0cyBJbmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcLzFwYXNzd29yZC5jb21cXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJUcmlhbHdhcmVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWFsd2FyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UcmlhbHdhcmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVHJpZGVudF8oc29mdHdhcmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3LjUuMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWF5IDQsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3LjUuMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXByaWwgMjIsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjcuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWF5IDUsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy40Ljc2N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXByaWwgMjcsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMXN0QnJvd3NlclwiOiBcIjFzdCBCcm93c2VyXCIsXG4gICAgICAgICAgICBcIjIzNDVFeHBsb3JlclwiOiBcIjIzNDUgRXhwbG9yZXJcIixcbiAgICAgICAgICAgIFwiTWIyMzQ1QnJvd3NlclwiOiBcIjIzNDUgQnJvd3NlclwiLFxuICAgICAgICAgICAgXCIyMzQ1Y2hyb21lXCI6IFwiMjM0NSBDaHJvbWVcIixcbiAgICAgICAgICAgIFwiMzYwU0VcIjogXCIzNjAgU2VjdXJlIEJyb3dzZXJcIixcbiAgICAgICAgICAgIFwiQW1heWFcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFtYXlhXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlczQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnczLm9yZ1xcL1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIklOUklBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5pbnJpYS5mclxcL2VuXFwvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVzNDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1czQ19Tb2Z0d2FyZV9Ob3RpY2VfYW5kX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBcImN1c3RvbVwiLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxMS40LjRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSmFudWFyeSAxOCwgMjAxMlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQU9MXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBT0wgRXhwbG9yZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW1lcmljYSBPbmxpbmUsIEluY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFvbC5jb21cXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJpZGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UcmlkZW50Xyhzb2Z0d2FyZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS41XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAxMCwgMjAxNlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQXJvcmFcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFyb3JhXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkF2YW50IEZvcmNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjExLjBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjcgU2VwdGVtYmVyIDIwMTBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkF2YW50XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBdmFudCBcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVuamFtaW4gQy4gTWV5ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmlkZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1RyaWRlbnRfKGxheW91dF9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwMjAgYnVpbGQgM1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAxNywgMjAyMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQmFzaWxpc2tcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhc2lsaXNrIFwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb29uY2hpbGQgUHJvZHVjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5iYXNpbGlzay1icm93c2VyLm9yZ1xcL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29hbm5hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dvYW5uYV8oc29mdHdhcmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwMjAuMTAuMDVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiNSBPY3RvYmVyIDIwMjBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkJsaXNrXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlza1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlzayB0ZWFtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJGcmVlXCI6IFwiTGltaXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcIlBhaWRcIjogXCJVbmxpbWl0ZWQgUHJvXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlY4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Y4XyhKYXZhU2NyaXB0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTIuMC45Mi44M1wiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDI5LCAyMDE5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJCZWFrZXJCcm93c2VyXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZWFrZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmx1ZSBMaW5rIExhYnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2JlYWtlcmJyb3dzZXIuY29tXFwvYWJvdXRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNSVQgTGljZW5zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9NSVRfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC44LjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAxMywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjguMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDEzLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjguMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDEzLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkVsZWN0cm9uXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFbGVjdHJvblwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkVsZWN0cm9uIChzb2Z0d2FyZSBmcmFtZXdvcmspXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHaXRIdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2l0SHViXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTUlUIExpY2Vuc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTUlUX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEwLjEuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjMgT2N0b2JlciAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTEuMC4wLWJldGEuMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI0IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJCcmF2ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQnJhdmUgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCcmF2ZSBTb2Z0d2FyZSBJbmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQnJhdmVfKGJyb3dzZXIpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTUuNzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE1IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI1IFNlcHRlbWJlciAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE1Ljc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNiBPY3RvYmVyIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4xNS43NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTYgT2N0b2JlciAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE1Ljc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNiBPY3RvYmVyIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ2FtaW5vXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYW1pbm9cIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIENhbWlubyBQcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDEuMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTEdQTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfTGVzc2VyX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjEuMlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNCBNYXJjaCAyMDEyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDbGlxelwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xpcXpcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xpcXogR21iSFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjkuN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXByaWwgNCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuNi4zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDMwLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjM4LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjIsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4zOC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIyLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjM4LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjIsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiRWRnXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNyb3NvZnQgRWRnZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNyb3NvZnQgQ29ycFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm1pY3Jvc29mdGVkZ2VpbnNpZGVyLmNvbVxcL2VuLXVzXFwvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4OC4wLjY3My4wXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE0IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiT3BlcmFcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9wZXJhXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9wZXJhIFNvZnR3YXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL09wZXJhX1NvZnR3YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3MS4wLjM3NzAuMjcxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE0IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiT3BlcmEgTW9iaWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPcGVyYVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPcGVyYSBTb2Z0d2FyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9PcGVyYV9Tb2Z0d2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Byb3ByaWV0YXJ5X3NvZnR3YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjU5LjEuMjkyNi41NDA2N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAxMywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZCAoY2xhc3NpYylcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTIuMS45XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDgsIDIwMTZcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIlN5bWJpYW5cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiUzYwIDEyLjAuMjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMjQsIDIwMTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3MgTW9iaWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEwLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDE2LCAyMDEwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndoYWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXZlciBXaGFsZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXZlciBDb3Jwb3JhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9OYXZlcl9Db3Jwb3JhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyZWV3YXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0ZyZWV3YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuNS40LjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSAyNiwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuNS4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMjUsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNy4xMDAuMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMTgsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi43LjEwMC4yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAxOCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi43LjEwMC4yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAxOCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJGYWxrb25cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZhbGtvblwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEYXZpZCBSb3NjYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9MaW5rc18od2ViX2Jyb3dzZXIpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMIDMuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMS4wLjc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAxOSwgMjAxOVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJLb25xdWVyb3JcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktvbnF1ZXJvciBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktERVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9LREVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktIVE1MXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0tIVE1MXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIlN0YWJsZSByZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwLjA4LjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjcgSnVuZSAyMDE4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJZYUJyb3dzZXJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIllhbmRleCBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIllhbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9ZYW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC42LjMuNTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjMsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC42LjIuMzE4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDE2LCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC43LjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC43LjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAuNy4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiUXRXZWJFbmdpbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0IFdlYiBFbmdpbmUgYmFzZWQgYnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEb29ibGUgUHJvamVjdCBUZWFtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0Rvb2JsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJTRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMDIwLjEwLjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDEwLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIklyb25cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNSV2FyZSBJcm9uXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNSV2FyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwid3d3LnNyd2FyZS5uZXRcXC9lblxcL3NvZnR3YXJlX3Nyd2FyZV9pcm9uLnBocFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJTRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CU0RfbGljZW5zZXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlY4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Y4XyhKYXZhU2NyaXB0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjc0LjAuMzg1MC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMTAsIDIwMTlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg0LjAuNDMwMC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJBdWd1c3QgMjksIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODUuMC40MzUwLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMiwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODUuMC40MzUwLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgNiwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJDaHJvbWVcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBDaHJvbWVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlIExMQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Hb29nbGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0QgKENocm9taXVtIGV4ZWN1dGFibGUpIChzb21lIGNsb3NlZC1zb3VyY2UgZmVhdHVyZXMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JTRF9saWNlbnNlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Ni4wLjQyNDAuMTE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIyLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODYuMC40MjQwLjkzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDEyLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Ni4wLjQyNDAuMTExXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg2LjAuNDI0MC4xMTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg2LjAuNDI0MC4xMTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ2hyb21pdW1cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNocm9taXVtIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIENocm9taXVtIFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jaHJvbWl1bS5vcmdcXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnVpbHQgbmlnaHRseVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY2hyb21pdW0ud29vbHlzcy5jb21cXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQ29tb2RvX0RyYWdvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29tb2RvIERyYWdvblwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb21vZG8gR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21vZG8uY29tXFwvaG9tZVxcL2Jyb3dzZXJzLXRvb2xiYXJzXFwvaW50ZXJuZXQtcHJvZHVjdHMucGhwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQlNEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JTRF9saWNlbnNlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjgzLjAuNDEwMy4xMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjEsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiSWNlRHJhZ29uXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb21vZG8gSWNlIERyYWdvblwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb21vZG8gR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21vZG8uY29tXFwvaG9tZVxcL2Jyb3dzZXJzLXRvb2xiYXJzXFwvaW50ZXJuZXQtcHJvZHVjdHMucGhwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNjUuMC4yLjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDE5LCAyMDE5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkRpbGxvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEaWxsb1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUaGUgRGlsbG8gdGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRpbGxvLm9yZ1xcL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY3VzdG9tXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMC41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIzMCBKdW5lIDIwMTVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiRG9vYmxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEb29ibGVcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9vYmxlIFByb2plY3QgVGVhbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Eb29ibGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAyMC4xMC4xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAxMCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJFTGlua3NcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVMaW5rc1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIlRleHRCYXNlZE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCYXVkaXMsIEZvbnNlY2EsIGV0IGFsLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9FTGlua3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImN1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IFwiZm9yayBvZiBMaW5rc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjExLjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIyIEF1Z3VzdCAyMDA5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkVwaXBoYW55XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHTk9NRSBXZWJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyY28gUGVzZW50aSBHcml0dGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nbm9tZS5vcmdcXC9uZXdzXFwvMjAxNVxcLzA1XFwvZ29vZGJ5ZS1tYXJjb1xcL1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRoZSBHTk9NRSBQcm9qZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1RoZV9HTk9NRV9Qcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRHVEtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0R1RLXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RhYmxlIHJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4zOC4xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCI4IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMzcuOTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjEzIFNlcHRlbWJlciAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkxpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMaW5rc1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYXRvY2thLCBldCBhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9MaW5rc18od2ViX2Jyb3dzZXIpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjdXN0b21cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi4yMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMiBBdWd1c3QgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJGbG9ja1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxvY2tcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxvY2sgSW5jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6XFwvXFwvd2ViLmFyY2hpdmUub3JnXFwvd2ViXFwvMjAxMTAzMjUxNTEwMTdcXC9odHRwOlxcL1xcL3d3dy5mbG9jay5jb21cXC9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRmxvY2tfKHdlYl9icm93c2VyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCIoYXMgb2YgMy4wKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIzLjUuMy40NjQxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJGZWJydWFyeSAxLCAyMDExXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIldhdGVyZm94XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXYXRlcmZveCBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFsZXggS29udG9zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAyMC4xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjEgT2N0b2JlciAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkVvbGllXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFb2xpZSBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vemlsbGEgRm91bmRhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX0ZvdW5kYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCIoYmVmb3JlIHY1NylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja28gd1xcL1NlcnZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCJ2NTcgJiBhZnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9TZXJ2b18oc29mdHdhcmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RhbmRhcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyMCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiRXh0ZW5kZWQgU3VwcG9ydCBSZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjc4LjQuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyMCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJQYWxlTW9vblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGFsZU1vb24gQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb29uY2hpbGQgUHJvZHVjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvYW5uYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Hb2FubmFfKHNvZnR3YXJlKVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIlN0YW5kYXJkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjI4LjE1LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI3IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJTZWFNb25rZXlcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNlYU1vbmtleSBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNlYU1vbmtleSBDb3VuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjUzLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIlNlcHRlbWJlciAyMiwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNTMuNWIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDI5LCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlNhbGFtV2ViXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYWxhbVdlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhbGFtV2ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zYWxhbXdlYi5jb21cXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmVld2FyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9GcmVld2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI0LjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMzEsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNC41LjAuNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMjUsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjQuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAyMCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjQuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAyMCwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmaXJlZm94XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGaXJlZm94IEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW96aWxsYSBGb3VuZGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfRm91bmRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBcIihiZWZvcmUgdjU3KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrbyB3XFwvU2Vydm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBcInY1NyAmIGFmdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1NlcnZvXyhzb2Z0d2FyZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFuZGFyZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Mi4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJFeHRlbmRlZCBTdXBwb3J0IFJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNzguNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkdhbGVvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FsZW9uIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyY28gUGVzZW50aSBHcml0dGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nbm9tZS5vcmdcXC9uZXdzXFwvMjAxNVxcLzA1XFwvZ29vZGJ5ZS1tYXJjb1xcL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuMC43XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyNyBTZXB0ZW1iZXIgMjAwOFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJpQ2FiXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpQ2FiIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxleGFuZGVyIENsYXVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNsYXVzcy1uZXQuZGVcXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlLCAkMjAgKFBybylcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5IChicm93c2VyKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxHUEwgKFdlYktpdClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0xlc3Nlcl9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjUuOS4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCA0LCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImN1cmxcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsaWVudCBVUkxcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJGdWxsVGV4dE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEYW5pZWwgU3RlbmJlcmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRGFuaWVsX1N0ZW5iZXJnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJlZSBTb2Z0d2FyZTogTUlUXFwvWCBkZXJpdmF0ZSBsaWNlbnNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jdXJsLmhheHguc2VcXC9kb2NzXFwvY29weXJpZ2h0Lmh0bWxcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3LjczLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE0IE9jdG9iZXIgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJMeW54XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMeW54XCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRlRQIGNsaWVudCBcXC8gSFRUUCBjbGllbnRcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiVGV4dEJhc2VkTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vbnR1bGxpLCBHcm9iZSwgUmV6YWMsIGV0IGFsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjdXN0b20sIGZvcmsgb2YgbGlid3d3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0xpYnd3d1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjguOXJlbC4xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCI4IEp1bHkgMjAxOFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJtc2llXCI6IFwibXNpZVwiLFxuICAgICAgICAgICAgXCJNaWRvcmlcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pZG9yaSBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNocmlzdGlhbiBEeXdhbiwgZXQgYWwuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hc3RpYW4ub3JnXFwvZW5cXC9taWRvcmktYnJvd3NlclxcL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxHUExcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0xlc3Nlcl9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RhYmxlIHJlbGVhc2VcIjogW10sXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjkuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyOSwgMjAxOVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJOZXRTdXJmXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOZXRTdXJmIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIE5ldFN1cmYgRGV2ZWxvcGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubmV0c3VyZi1icm93c2VyLm9yZ1xcL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUXQgV2ViRW5naW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0X1dlYkVuZ2luZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0V2ViS2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0V2ViS2l0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RhYmxlIHJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4xMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWF5IDI0LCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJPdHRlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3R0ZXIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNoYVxcdTAxNDIgRHV0a2lld2ljelwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvb3R0ZXItYnJvd3Nlci5vcmdcXC9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUEx2M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUXQgV2ViRW5naW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0X1dlYkVuZ2luZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF0V2ViS2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0V2ViS2l0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RhYmxlIHJlbGVhc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxIEphbnVhcnkgMjAxOVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIndlZWtseTMzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWF5IDE4LCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIk1heHRob25cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1heHRob24gQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXh0aG9uIEludGVybmF0aW9uYWwgTHRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01heHRob25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJcXHRGcmVlXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmVld2FyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9GcmVld2FyZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVHJpZGVudF8obGF5b3V0X2VuZ2luZSlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjUuMy44LjIwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjUsIDIwMTlcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNS4yLjMuMzI0MVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSmFudWFyeSAyNSwgMjAxOVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNS4xLjYwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJBdWd1c3QgMjcsIDIwMThcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI1LjQuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyMSwgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93cyBQaG9uZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWFyY2ggMzAsIDIwMTdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMC41LjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIlNlcHRlbWJlciA5LCAyMDE0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNhZmFyaVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2FmYXJpIEJyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXBwbGUgSW5jLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9BcHBsZV9JbmMuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiSW5jbHVkZWQgd2l0aCBtYWNPUyBhbmQgaU9TXCIsXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeSAoYnJvd3NlcilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMR1BMIChXZWJLaXQpIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfTGVzc2VyX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9XZWJLaXRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJTZXB0ZW1iZXIgMTcsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxNC4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJTZXB0ZW1iZXIgMTcsIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qV2ViIEJyb3dzZXIgTGF5b3V0IGVuZ2luZXMgTGlzdCovIC8qXG4gICAgICAgICAgICAgKiBMYXlvdXQgZW5naW5lc1xuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEdlY2tvIGlzIGRldmVsb3BlZCBieSB0aGUgTW96aWxsYSBGb3VuZGF0aW9uLlxuICAgICAgICAgICAgICogR29hbm5hIGlzIGEgZm9yayBvZiBHZWNrbyBkZXZlbG9wZWQgYnkgTW9vbmNoaWxkIFByb2R1Y3Rpb25zLlxuICAgICAgICAgICAgICogS0hUTUwgaXMgZGV2ZWxvcGVkIGJ5IHRoZSBLREUgcHJvamVjdC5cbiAgICAgICAgICAgICAqIFByZXN0byB3YXMgZGV2ZWxvcGVkIGJ5IE9wZXJhIFNvZnR3YXJlIGZvciB1c2UgaW4gT3BlcmEuIERldmVsb3BtZW50IHN0b3BwZWQgYXMgT3BlcmEgdHJhbnNpdGlvbmVkIHRvIEJsaW5rLlxuICAgICAgICAgICAgICogVGFzbWFuIHdhcyBkZXZlbG9wZWQgYnkgTWljcm9zb2Z0IGZvciB1c2UgaW4gSW50ZXJuZXQgRXhwbG9yZXIgNSBmb3IgTWFjaW50b3NoLlxuICAgICAgICAgICAgICogVHJpZGVudCBpcyBkZXZlbG9wZWQgYnkgTWljcm9zb2Z0IGZvciB1c2UgaW4gdGhlIFdpbmRvd3MgdmVyc2lvbnMgb2YgSW50ZXJuZXQgRXhwbG9yZXIgNCB0byBJbnRlcm5ldCBFeHBsb3JlciAxMS5cbiAgICAgICAgICAgICAqIEVkZ2VIVE1MIGlzIHRoZSBlbmdpbmUgZGV2ZWxvcGVkIGJ5IE1pY3Jvc29mdCBmb3IgRWRnZS4gSXQgaXMgYSBsYXJnZWx5IHJld3JpdHRlbiBmb3JrIG9mIFRyaWRlbnQgd2l0aCBhbGwgbGVnYWN5IGNvZGUgcmVtb3ZlZC5cbiAgICAgICAgICAgICAqIFdlYktpdCBpcyBhIGZvcmsgb2YgS0hUTUwgYnkgQXBwbGUgSW5jLiB1c2VkIGluIEFwcGxlIFNhZmFyaSwgYW5kIGZvcm1lcmx5IGluIENocm9taXVtIGFuZCBHb29nbGUgQ2hyb21lLlxuICAgICAgICAgICAgICogQmxpbmsgaXMgYSAyMDEzIGZvcmsgb2YgV2ViS2l0J3MgV2ViQ29yZSBjb21wb25lbnQgYnkgR29vZ2xlIHVzZWQgaW4gQ2hyb21pdW0sIEdvb2dsZSBDaHJvbWUsIE1pY3Jvc29mdCBFZGdlLCBPcGVyYSwgYW5kIFZpdmFsZGkuWzE5XVxuICAgICAgICAgICAgICogU2Vydm8gaXMgYW4gZXhwZXJpbWVudGFsIHdlYiBicm93c2VyIGxheW91dCBlbmdpbmUgYmVpbmcgZGV2ZWxvcGVkIGNvb3BlcmF0aXZlbHkgYnkgTW96aWxsYSBhbmQgU2Ftc3VuZy4qL1xuICAgICAgICB0aGlzLndlYkJyb3dzZXJMYXlvdXRMaXN0ID0ge1xuICAgICAgICAgICAgXCJFZGdlSFRNTFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWRnZUhUTUxcIixcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIkVkZ1wiLFxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiRWRnZVxcL3h5elwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJCbGlua1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIkdvb2dsZVwiLFxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIkNocm9tZVwiLFxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiQ2hyb21lXFwveHl6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkdlY2tvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTW96aWxsYSBGb3VuZGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiR2Vja29cIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkdlY2tvXFwveHl6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkdvYW5uYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29hbm5hXCIsXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNb29uY2hpbGQgUHJvZHVjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJHb2FubmFcIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkdvYW5uYVxcL3h5elwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJLSFRNTFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS0hUTUxcIixcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIktERSBwcm9qZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiS0hUTUxcIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIktIVE1MXFwveHl6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlByZXN0b1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJlc3RvXCIsXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJPcGVyYSBTb2Z0d2FyZVwiLFxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIk9wZXJhXCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJPcGVyYVxcL3h5elwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJUYXNtYW5cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhc21hblwiLFxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiVGFzbWFuXCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJUYXNtYW5cXC94eXpcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiVHJpZGVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJpZGVudFwiLFxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0XCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiVHJpZGVudFwiLFxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiVHJpZGVudFxcL3h5elwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJXZWJLaXRcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiQXBwbGUgSW5jXCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiQXBwbGVXZWJLaXRcIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkFwcGxlV2ViS2l0XFwveHl6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIlNlcnZvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZXJ2b1wiLFxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiY29vcGVyYXRpdmVseSBieSBNb3ppbGxhIGFuZCBTYW1zdW5nXCIsXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiU2Vydm9cIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIlNlcnZvXFwveHl6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImxpYnd3dy1GTVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGlid3d3LUZNXCIsXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJUaW0gQmVybmVycy1MZWVcIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJsaWJ3d3ctRk1cIixcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcImxpYnd3dy1GTVxcL3h5elwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLypQYXJlbnQgQXBwIG9mIEJyb3dzZXIqL1xuICAgICAgICB0aGlzLndlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3QgPSBbeyduYW1lJzogJ21vemlsbGEnLCAnY29kZSc6ICdNb3ppbGxhJ31dO1xuXG5cbiAgICAgICAgLyoqIHVwZGF0ZSBkYlxuICAgICAgICAgKlxuICAgICAgICAgKiBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgIC8hKmRldmljZXMgbGlzdCohL1xuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1kZXZpY2VzLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5kZXZpY2VzTGlzdCA9IHVwZGF0ZWRMaXN0O1xuICAgICAgICB9KTtcbiAgICAgICAgIC8hKmRldmljZSdzIGFyY2hpdGVjdHVyZSBsaXN0KiEvXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWRldmljZXMtYXJjaGl0ZWN0dXJlLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5kZXZpY2VzQXJjaGl0ZWN0dXJlTGlzdCA9IHVwZGF0ZWRMaXN0O1xuICAgICAgICB9KTtcbiAgICAgICAgIC8hKmRldmljZXMgY2F0ZWdvcnkgbGlzdCohL1xuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1kZXZpY2VzLWNhdGVnb3J5LWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5kZXZpY2VzQ2F0ZWdvcnlMaXN0ID0gdXBkYXRlZExpc3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAgLyEqZGV2aWNlcyBwbGF0Zm9ybSB3aW5kb3cgbWFuYWdlciBsaXN0KiEvXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWRldmljZXMtcGxhdGZvcm0td21uLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xuICAgICAgICAgICAgc2VsZi5kZXZpY2VzUGxhdGZvcm1XTU5hbWVMaXN0ID0gdXBkYXRlZExpc3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAgLyEqYnJvd3NlcnMgbGlzdCohL1xuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1hbGwtbGlzdC5qc29uXCIsIGZ1bmN0aW9uICh1cGRhdGVkTGlzdDogYW55KSB7XG4gICAgICAgICAgICBzZWxmLndlYkJyb3dzZXJMaXN0ID0gdXBkYXRlZExpc3Q7XG4gICAgICAgIH0pO1xuICAgICAgICAgLyEqYnJvd3NlcnMgYXBwIGNvZGUgbGlzdCohL1xuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1hcHAtY29kZS1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcbiAgICAgICAgICAgIHNlbGYud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdCA9IHVwZGF0ZWRMaXN0O1xuICAgICAgICB9KTtcbiAgICAgICAgIC8hKmJyb3dzZXJzIGxheW91dCBsaXN0KiEvXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWxheW91dC1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcbiAgICAgICAgICAgIHNlbGYud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdCA9IHVwZGF0ZWRMaXN0O1xuICAgICAgICB9KTsqL1xuXG4gICAgICAgIHRoaXMuYW5hbHl6ZSgpO1xuXG4gICAgfVxuXG5cbiAgICAvKnByaXZhdGUgR2V0VXBkYXRlZERhdGEoVXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgc2VuZFJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogVXJsLFxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhOiBhbnkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHJldHJpZXZlIGRhdGEgZnJvbSBcIiArIFVybCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSovXG5cblxuICAgIHByaXZhdGUgYW5hbHl6ZSgpIHtcbiAgICAgICAgLypzdGFydCBvcGVyYXRpb24qL1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGNsZWFuVUEgPSBzZWxmLmNsZWFuVXNlckFnZW50U3RyaW5nKHRoaXMuVXNlckFnZW50KTtcbiAgICAgICAgLypmaXJzdCBzdGVwKi9cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZi53ZWJCcm93c2VyQXBwQ29kZU5hbWVMaXN0KSkge1xuICAgICAgICAgICAgc2VsZi53ZWJCcm93c2VyQXBwQ29kZU5hbWVMaXN0LmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvKnNlYXJjaCBhcHAgY29kZSBmb3JtIHVzZXItYWdlbnQqL1xuICAgICAgICAgICAgICAgIGlmIChjbGVhblVBLmluZGV4T2YodmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5icm93c2VyQXBwTmFtZSA9IHZhbHVlLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIC8qc3BsaXQgdXNlci1hZ2VudCBpbiB0byBhcnJheSBieSBzcGFjZSovXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVUEuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmluZGV4T2YodmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb3dzZXJBcHBOYW1lRnVsbCA9IGl0ZW0ucmVwbGFjZShcIi9cIiwgXCIgXCIpLnJlcGxhY2UodmFsdWUubmFtZSwgdmFsdWUuY29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5icm93c2VyQXBwTmFtZUZ1bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnJvd3NlckFwcFZlcnNpb24gPSBpdGVtLnN1YnN0cih2YWx1ZS5uYW1lLnRvTG93ZXJDYXNlKCkubGVuZ3RoICsgMSwgKGl0ZW0ubGVuZ3RoIC0gKHZhbHVlLm5hbWUudG9Mb3dlckNhc2UoKS5sZW5ndGggKyAxKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuYnJvd3NlckFwcFZlcnNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLypzZWNvbmQgc3RlcCovXG4gICAgICAgIC8qc2VsZi5kZXZpY2VzUGxhdGZvcm1XTU5hbWVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHdtOmFueSl7XG5cbiAgICAgICAgfSkqL1xuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRVUkxQcm90b2NvbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5VUkxQcm90b2NvbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRVUkxIb3N0bmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5VUkxIb3N0bmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRVUkxQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLlVSTFBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZ2V0VVJMUGF0aEZ1bGwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuVVJMUGF0aEZ1bGw7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBudW1iZXJcbiAgICAgKi9cbiAgICBnZXJEZXZpY2VTY3JlZW5IZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGV2aWNlU2NyZWVuSGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqL1xuICAgIGdlckRldmljZVNjcmVlbldpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLkRldmljZVNjcmVlbldpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqL1xuICAgIGdlckRldmljZVNjcmVlbkNvbG9yRGVwdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGV2aWNlU2NyZWVuQ29sb3JEZXB0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBudW1iZXJcbiAgICAgKi9cbiAgICBnZXJEZXZpY2VTY3JlZW5QaXhlbERlcHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLkRldmljZVNjcmVlblBpeGVsRGVwdGg7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXREZXZpY2VXbU5hbWVPcmlnaW5hbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VXbU5hbWVPcmlnaW5hbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBhcnJheVxuICAgICAqL1xuICAgIGdldERldmljZUluZm9BbGwoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlSW5mb0FsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBtaXhlZFxuICAgICAqL1xuICAgIGdldFVzZXJBZ2VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuVXNlckFnZW50O1xuICAgIH1cblxuICAgIGdldERldmljZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXNMaXN0O1xuICAgIH1cblxuICAgIGdldEFyY2hpdGVjdHVyZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXNBcmNoaXRlY3R1cmVMaXN0O1xuICAgIH1cblxuICAgIGdldEJyb3dzZXJBcHBDb2RlTmFtZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3Q7XG4gICAgfVxuXG4gICAgZ2V0V2ViQnJvd3Nlckxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlYkJyb3dzZXJMaXN0O1xuICAgIH1cblxuICAgIGdldFdlYkJyb3dzZXJMYXlvdXRMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWJCcm93c2VyTGF5b3V0TGlzdDtcbiAgICB9XG5cbiAgICBnZXRQbGF0Zm9ybVdNTmFtZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXNQbGF0Zm9ybVdNTmFtZUxpc3Q7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlc0NhdGVnb3J5TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlc0NhdGVnb3J5TGlzdDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgZ2V0VXNlckFnZW50TGlzdCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5Vc2VyQWdlbnRMaXN0O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZ2V0QnJvd3NlckVuZ2luZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJFbmdpbmVOYW1lKS50cmltKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZ2V0QnJvd3NlckVuZ2luZU5hbWVGdWxsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyRW5naW5lTmFtZUZ1bGwpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBhcnJheVxuICAgICAqL1xuICAgIGdldEJyb3dzZXJJbmZvQWxsKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXJJbmZvQWxsO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZ2V0QnJvd3NlckFwcENvZGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXBwQ29kZU5hbWUpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyQXBwQ29kZVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJBcHBDb2RlVmVyc2lvbikudHJpbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGdldEJyb3dzZXJBcHBOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXBwTmFtZSkudHJpbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGdldEJyb3dzZXJBcHBDb2RlTmFtZUZ1bGwoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckFwcE5hbWUpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyQXBwVmVyc2lvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckFwcFZlcnNpb24pLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyQXJjaGl0ZWN0dXJlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXJjaGl0ZWN0dXJlKS50cmltKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyRW5naW5lVmVyc2lvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckVuZ2luZVZlcnNpb24pLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3Nlck5hbWUpLnRyaW0oKTtcbiAgICB9XG5cblxuICAgIGdldEJyb3dzZXJOYW1lRnVsbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3Nlck5hbWVGdWxsKS50cmltKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyVmVyc2lvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlclZlcnNpb24pLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRCcm93c2VyVmVyc2lvbkZ1bGwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJWZXJzaW9uRnVsbCkudHJpbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIG1peGVkXG4gICAgICovXG4gICAgZ2V0Q3VycmVudERldmljZUluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnREZXZpY2VJbmZvO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGdldERldmljZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRldmljZU5hbWUpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXREZXZpY2VOYW1lRnVsbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlTmFtZUZ1bGwpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXREZXZpY2VOYW1lT3JpZ2luYWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRldmljZU5hbWVPcmlnaW5hbCkudHJpbSgpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZ2V0RGV2aWNlVHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlVHlwZSkudHJpbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGdldERldmljZUFyY2hpdGVjdHVyZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlQXJjaGl0ZWN0dXJlKS50cmltKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAgZ2V0RGV2aWNlV2luZG93TWFuYWdlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlV2luZG93TWFuYWdlcikudHJpbSgpO1xuICAgIH1cblxuXG4gICAgZ3REZXZpY2VEZXRhaWxzKHJlc291cmNlczogYW55KSB7XG4gICAgICAgIC8vYXJyYXlfY2hhbmdlX2tleV9jYXNlKCRhZ2UsQ0FTRV9VUFBFUilcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzb3VyY2VzKSAmJiAocmVzb3VyY2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoJ1BsYXRmb3JtJyBpbiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREZXZpY2VJbmZvID0gcmVzb3VyY2VzWydQbGF0Zm9ybSddO1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlTmFtZSA9IHJlc291cmNlc1snUGxhdGZvcm0nXVsnbmFtZSddO1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlQXJjaGl0ZWN0dXJlID0gcmVzb3VyY2VzWydQbGF0Zm9ybSddWydhcmNoaXRlY3R1cmUnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZVR5cGUgPSByZXNvdXJjZXNbJ0RldmljZSddWyd0eXBlJ107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZU5hbWUgPSByZXNvdXJjZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlVHlwZSA9IHJlc291cmNlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGV2aWNlSW5mbyA9IHJlc291cmNlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldFBsYXRmb3JtTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlTmFtZTtcbiAgICB9XG5cbiAgICBnZXRQbGF0Zm9ybUFyY2hpdGVjdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlQXJjaGl0ZWN0dXJlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYW5Vc2VyQWdlbnRTdHJpbmcoVXNlckFnZW50OiBzdHJpbmcpOnN0cmluZyB7XG4gICAgICAgIC8vIGNsZWFuIHVwIHRoZSBzdHJpbmdcbiAgICAgICAgLy8gcmVwbGFjZSBicm93c2VyIG5hbWVzIHdpdGggdGhlaXIgYWxpYXNlc1xuICAgICAgICByZXR1cm4gVXNlckFnZW50LnRvTG93ZXJDYXNlKCkudHJpbSgpLnJlcGxhY2UoJ29wcicsICdvcGVyYScpLnJlcGxhY2UoJ2ljZXdlYXNlbCcsICdmaXJlZm94Jyk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==