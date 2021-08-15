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
//# sourceMappingURL=Assets_typescripts_mishusoft_browser_ts.runtime.bundle.js.map