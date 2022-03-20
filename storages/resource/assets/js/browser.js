/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./typescripts/mishusoft/browser.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Browser": function() { return /* binding */ Browser; }
/* harmony export */ });
/**
 * Browser (typescript language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/js/browser.js
 * */
/*import {sendRequest} from "./app-common-required-send";*/
var Browser = /** @class */ (function () {
    function Browser() {
        this.VERSION = '1.0.2';
        /*cdn link*/
        this.cdnUrl = '';
        this.UserAgent = navigator.userAgent;
        this.browserName = 'Unknown';
        this.browserNameFull = 'Unknown';
        this.browserVersion = 'Unknown';
        this.browserVersionFull = 'Unknown';
        this.browserArchitecture = 'Unknown';
        this.browserAppName = 'Unknown';
        this.browserAppNameFull = 'Unknown';
        this.browserAppVersion = 'Unknown';
        this.browserAppCodeName = 'Unknown';
        this.browserAppCodeVersion = 'Unknown';
        this.browserEngineName = 'Unknown';
        this.browserEngineNameFull = 'Unknown';
        this.browserEngineVersion = 'Unknown';
        this.browserInfoAll = [];
        this.deviceName = 'Unknown';
        this.deviceType = 'Unknown';
        this.deviceArchitecture = 'Unknown';
        this.deviceWindowManager = 'Unknown';
        this.deviceNameOriginal = 'Unknown';
        this.deviceWmNameOriginal = 'Unknown';
        /*url info*/
        this.URLProtocol = window.location.protocol;
        this.URLHostname = window.location.hostname;
        this.URLPath = window.location.pathname;
        this.URLPathFull = window.location.href;
        /*device screen info*/
        this.DeviceScreenWidth = window.screen.width;
        this.DeviceScreenHeight = window.screen.height;
        this.DeviceScreenColorDepth = window.screen.colorDepth;
        this.DeviceScreenPixelDepth = window.screen.pixelDepth;
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
    Browser.prototype.analyze = function () {
        /*start operation*/
        var self = this;
        var cleanUA = self.cleanUserAgentString(this.UserAgent);
        /*first step*/
        if (Array.isArray(self.webBrowserAppCodeNameList)) {
            self.webBrowserAppCodeNameList.forEach(function (value) {
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
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLProtocol = function () {
        return this.URLProtocol;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLHostname = function () {
        return this.URLHostname;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLPath = function () {
        return this.URLPath;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getURLPathFull = function () {
        return this.URLPathFull;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenHeight = function () {
        return this.DeviceScreenHeight;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenWidth = function () {
        return this.DeviceScreenWidth;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenColorDepth = function () {
        return this.DeviceScreenColorDepth;
    };
    /**
     * @public
     * @return number
     */
    Browser.prototype.gerDeviceScreenPixelDepth = function () {
        return this.DeviceScreenPixelDepth;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceWmNameOriginal = function () {
        return this.deviceWmNameOriginal;
    };
    /**
     * @public
     * @return array
     */
    Browser.prototype.getDeviceInfoAll = function () {
        return this.deviceInfoAll;
    };
    /**
     * @public
     * @return mixed
     */
    Browser.prototype.getUserAgent = function () {
        return this.UserAgent;
    };
    Browser.prototype.getDeviceList = function () {
        return this.devicesList;
    };
    Browser.prototype.getArchitectureList = function () {
        return this.devicesArchitectureList;
    };
    Browser.prototype.getBrowserAppCodeNameList = function () {
        return this.webBrowserAppCodeNameList;
    };
    Browser.prototype.getWebBrowserList = function () {
        return this.webBrowserList;
    };
    Browser.prototype.getWebBrowserLayoutList = function () {
        return this.webBrowserLayoutList;
    };
    Browser.prototype.getPlatformWMNameList = function () {
        return this.devicesPlatformWMNameList;
    };
    Browser.prototype.getDevicesCategoryList = function () {
        return this.devicesCategoryList;
    };
    /**
     * @public
     * @return array
     */
    Browser.prototype.getUserAgentList = function () {
        return this.UserAgentList;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserEngineName = function () {
        return (this.browserEngineName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserEngineNameFull = function () {
        return (this.browserEngineNameFull).trim();
    };
    /**
     * @public
     * @return array
     */
    Browser.prototype.getBrowserInfoAll = function () {
        return this.browserInfoAll;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppCodeName = function () {
        return (this.browserAppCodeName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppCodeVersion = function () {
        return (this.browserAppCodeVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppName = function () {
        return (this.browserAppName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppCodeNameFull = function () {
        return (this.browserAppName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserAppVersion = function () {
        return (this.browserAppVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserArchitecture = function () {
        return (this.browserArchitecture).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserEngineVersion = function () {
        return (this.browserEngineVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserName = function () {
        return (this.browserName).trim();
    };
    Browser.prototype.getBrowserNameFull = function () {
        return (this.browserNameFull).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserVersion = function () {
        return (this.browserVersion).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getBrowserVersionFull = function () {
        return (this.browserVersionFull).trim();
    };
    /**
     * @public
     * @return mixed
     */
    Browser.prototype.getCurrentDeviceInfo = function () {
        return this.currentDeviceInfo;
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceName = function () {
        return (this.deviceName).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceNameFull = function () {
        return (this.deviceNameFull).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceNameOriginal = function () {
        return (this.deviceNameOriginal).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceType = function () {
        return (this.deviceType).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceArchitecture = function () {
        return (this.deviceArchitecture).trim();
    };
    /**
     * @public
     * @return string
     */
    Browser.prototype.getDeviceWindowManager = function () {
        return (this.deviceWindowManager).trim();
    };
    Browser.prototype.gtDeviceDetails = function (resources) {
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
    };
    Browser.prototype.getPlatformName = function () {
        return this.deviceName;
    };
    Browser.prototype.getPlatformArchitecture = function () {
        return this.deviceArchitecture;
    };
    Browser.prototype.cleanUserAgentString = function (UserAgent) {
        // clean up the string
        // replace browser names with their aliases
        return UserAgent.toLowerCase().trim().replace('opr', 'opera').replace('iceweasel', 'firefox');
    };
    return Browser;
}());



//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGtCQUFrQixDQUFDO0lBQ25DLENBQUM7SUFFTyxzQ0FBb0IsR0FBNUIsVUFBNkIsU0FBaUI7UUFDMUMsc0JBQXNCO1FBQ3RCLDJDQUEyQztRQUMzQyxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdHMvbWlzaHVzb2Z0L2Jyb3dzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIEJyb3dzZXIgKHR5cGVzY3JpcHQgbGFuZ3VhZ2UpIExpYnJhcnlcclxuICogRGV2ZWxvcGVyOiBNciBBbC1BbWluIEFobWVkIEFiaXJcclxuICogV2Vic2l0ZTogaHR0cHM6Ly93d3cubWlzaHVzb2Z0LmNvbVxyXG4gKiBPZmZpY2lhbCBMaW5rOiBodHRwczovL3d3dy5taXNodXNvZnQuY29tL2xpYnJhcmllcy9qcy9icm93c2VyLmpzXHJcbiAqICovXHJcblxyXG4vKmltcG9ydCB7c2VuZFJlcXVlc3R9IGZyb20gXCIuL2FwcC1jb21tb24tcmVxdWlyZWQtc2VuZFwiOyovXHJcblxyXG5leHBvcnQgY2xhc3MgQnJvd3NlciB7XHJcblxyXG4gICAgcHVibGljIFZFUlNJT04gPSAnMS4wLjInO1xyXG5cclxuICAgIC8qY2RuIGxpbmsqL1xyXG4gICAgcHVibGljIGNkblVybCA9ICcnO1xyXG5cclxuICAgIHByaXZhdGUgVXNlckFnZW50OiBzdHJpbmcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICAgIHByaXZhdGUgYnJvd3Nlck5hbWU6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3Nlck5hbWVGdWxsOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJWZXJzaW9uOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJWZXJzaW9uRnVsbDogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyQXJjaGl0ZWN0dXJlOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBOYW1lOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGJyb3dzZXJBcHBOYW1lRnVsbDogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyQXBwVmVyc2lvbjogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyQXBwQ29kZU5hbWU6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlckFwcENvZGVWZXJzaW9uOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyRW5naW5lTmFtZTogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBicm93c2VyRW5naW5lTmFtZUZ1bGw6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlckVuZ2luZVZlcnNpb246IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgYnJvd3NlckluZm9BbGw6IGFueSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgZGV2aWNlTmFtZTogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBkZXZpY2VUeXBlOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcbiAgICBwcml2YXRlIGRldmljZUFyY2hpdGVjdHVyZTogc3RyaW5nID0gJ1Vua25vd24nO1xyXG4gICAgcHJpdmF0ZSBkZXZpY2VXaW5kb3dNYW5hZ2VyOiBzdHJpbmcgPSAnVW5rbm93bic7XHJcblxyXG4gICAgcHJpdmF0ZSBkZXZpY2VJbmZvQWxsOiBhbnk7XHJcbiAgICBwcml2YXRlIGRldmljZU5hbWVGdWxsOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBkZXZpY2VOYW1lT3JpZ2luYWw6IHN0cmluZyA9ICdVbmtub3duJztcclxuICAgIHByaXZhdGUgZGV2aWNlV21OYW1lT3JpZ2luYWw6IHN0cmluZyA9ICdVbmtub3duJztcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnREZXZpY2VJbmZvOiBhbnk7XHJcblxyXG4gICAgLyp1cmwgaW5mbyovXHJcbiAgICBwcml2YXRlIFVSTFByb3RvY29sOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgICBwcml2YXRlIFVSTEhvc3RuYW1lOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICBwcml2YXRlIFVSTFBhdGg6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIHByaXZhdGUgVVJMUGF0aEZ1bGw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAgIC8qZGV2aWNlIHNjcmVlbiBpbmZvKi9cclxuICAgIHByaXZhdGUgRGV2aWNlU2NyZWVuV2lkdGg6IG51bWJlciA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XHJcbiAgICBwcml2YXRlIERldmljZVNjcmVlbkhlaWdodDogbnVtYmVyID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XHJcbiAgICBwcml2YXRlIERldmljZVNjcmVlbkNvbG9yRGVwdGg6IG51bWJlciA9IHdpbmRvdy5zY3JlZW4uY29sb3JEZXB0aDtcclxuICAgIHByaXZhdGUgRGV2aWNlU2NyZWVuUGl4ZWxEZXB0aDogbnVtYmVyID0gd2luZG93LnNjcmVlbi5waXhlbERlcHRoO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIFVzZXJBZ2VudExpc3Q6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlc0xpc3Q6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGV2aWNlc0NhdGVnb3J5TGlzdDogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VzQXJjaGl0ZWN0dXJlTGlzdDogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXZpY2VzUGxhdGZvcm1XTU5hbWVMaXN0OiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkJyb3dzZXJMaXN0OiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkJyb3dzZXJMYXlvdXRMaXN0OiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3Q6IGFueTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG5cclxuICAgICAgICAvKkRldmljZSBMaXN0Ki9cclxuICAgICAgICB0aGlzLmRldmljZXNMaXN0ID0ge1xyXG4gICAgICAgICAgICBcIjNEU1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5pbnRlbmRvIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlbmRlcmluZyBlbmdpbmVcIjogXCJXZWJLaXQuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIk5pbnRlbmRvIDNEU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk5pbnRlbmRvXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIjNEU1wiLCBcInR5cGVcIjogXCJDb25zb2xlXCIsIFwidmVuZG9yXCI6IFwiTmludGVuZG9cIiwgXCJicmFuZFwiOiBcIk5pbnRlbmRvXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRFNpXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmludGVuZG8gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIlByZXN0by5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTmludGVuZG8gRFNpXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiRFNpXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJOZXcgM0RTXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmludGVuZG8gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIldlYktpdC5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTmludGVuZG8gM0RTXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiTmV3IDNEU1wiLCBcInR5cGVcIjogXCJDb25zb2xlXCIsIFwidmVuZG9yXCI6IFwiTmludGVuZG9cIiwgXCJicmFuZFwiOiBcIk5pbnRlbmRvXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiUGxheXN0YXRpb24gUG9ydGFibGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb255IFBTUFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJTb255XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkpBVkFcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJPcmFjbGVcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiUGxheXN0YXRpb24gUG9ydGFibGVcIiwgXCJ0eXBlXCI6IFwiQ29uc29sZVwiLCBcInZlbmRvclwiOiBcIlNvbnlcIiwgXCJicmFuZFwiOiBcIlNvbnlcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJQbGF5U3RhdGlvbiBWaXRhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGxheXN0YXRpb24gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiU29ueVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIldlYktpdC5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiUGxheVN0YXRpb24gVml0YVwiLCBcImRldmVsb3BlclwiOiBcIk9yYWNsZVwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJQbGF5U3RhdGlvbiBWaXRhXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJTb255XCIsIFwiYnJhbmRcIjogXCJTb255XCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiU3dpdGNoXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmludGVuZG8gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJOaW50ZW5kb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmVuZGVyaW5nIGVuZ2luZVwiOiBcIldlYktpdC5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTmludGVuZG8gU3dpdGNoXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTmludGVuZG9cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiU3dpdGNoXCIsIFwidHlwZVwiOiBcIkNvbnNvbGVcIiwgXCJ2ZW5kb3JcIjogXCJOaW50ZW5kb1wiLCBcImJyYW5kXCI6IFwiTmludGVuZG9cIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJBbWlnYVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIklCcm93c2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiU3RlZmFuIEJ1cnN0cm9lbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyb3dzZXIuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJBbWlnYSBPU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkNvbW1vZG9yZSBJbnRlcm5hdGlvbmFsXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFtaWdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRGVza3RvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmVuZG9yXCI6IFwiQ29tbW9kb3JlIEludGVybmF0aW9uYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJyYW5kXCI6IFwiQ29tbW9kb3JlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJEQTI0MUhMXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiQnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hyb21lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIkdvb2dsZSBJbmNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQW5kcm9pZFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkdvb2dsZSBJbmNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiREEgMjQxSExcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwiLCBcInZlbmRvclwiOiBcIkFjZXJcIiwgXCJicmFuZFwiOiBcIkFjZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0ZXNsYVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIkJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRlc2xhIENhciBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlRlc2xhIE1vdG9ycy5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlbmRlcmluZyBlbmdpbmVcIjogXCJCbGluay5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJCcm93c2VyLlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiTGludXhcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJMaW51eCBGb3VuZGF0aW9uXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNhciBFbnRlcnRhaW5tZW50IEZyYW1ld29ya1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidmVuZG9yXCI6IFwiVGVzbGEgTW90b3JzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJicmFuZFwiOiBcIlRlc2xhXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJRdENhckJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUZXNsYSBDYXIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJUZXNsYSBNb3RvcnMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZW5kZXJpbmcgZW5naW5lXCI6IFwiQmxpbmsuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQnJvd3Nlci5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkxpbnV4XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTGludXggRm91bmRhdGlvblwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDYXIgRW50ZXJ0YWlubWVudCBGcmFtZXdvcmtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInZlbmRvclwiOiBcIlRlc2xhIE1vdG9yc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYnJhbmRcIjogXCJUZXNsYVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZnJlZWJzZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJGcmVlQlNEXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiRnJlZUJTRCBGb3VuZGF0aW9uXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkxpbnV4IERlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJDck9TXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkNocm9tZSBPU1wiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkdvb2dsZSBJbmNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlVidW50dVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJVYnVudHUgT1NcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJDYW5vbmljYWwgSW5jXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkxpbnV4IERlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJBcmNoIExpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIkFyY2ggTGludXhcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJBcmNoIExpbnV4XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkxpbnV4IERlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJsaW51eFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJMaW51eFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIkxpbnV4IEZvdW5kYXRpb25cIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiTGludXggRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRlYmlhblwiOiBcIkRlYmlhblwiLFxyXG4gICAgICAgICAgICBcIm1hbmphcm9cIjogXCJtYW5qYXJvXCIsXHJcbiAgICAgICAgICAgIFwic3Vub3NcIjogXCJTdW4gU29sYXJpc1wiLFxyXG4gICAgICAgICAgICBcImJlb3NcIjogXCJCZU9TXCIsXHJcbiAgICAgICAgICAgIFwiYXBhY2hlYmVuY2hcIjogXCJBcGFjaGVCZW5jaFwiLFxyXG4gICAgICAgICAgICBcImFpeFwiOiBcIkFJWFwiLFxyXG4gICAgICAgICAgICBcImlyaXhcIjogXCJJcml4XCIsXHJcbiAgICAgICAgICAgIFwib3NmXCI6IFwiREVDIE9TRlwiLFxyXG4gICAgICAgICAgICBcImhwLXV4XCI6IFwiSFAtVVhcIixcclxuICAgICAgICAgICAgXCJuZXRic2RcIjogXCJOZXRCU0RcIixcclxuICAgICAgICAgICAgXCJic2RpXCI6IFwiQlNEaVwiLFxyXG4gICAgICAgICAgICBcIm9wZW5ic2RcIjogXCJPcGVuQlNEXCIsXHJcbiAgICAgICAgICAgIFwiZ251XCI6IFwiR05VXFwvTGludXhcIixcclxuICAgICAgICAgICAgXCJ1bml4XCI6IFwiVW5rbm93biBVbml4IE9TXCIsXHJcbiAgICAgICAgICAgIFwidWJ1bnR1XCI6IFwiVWJ1bnR1XCIsXHJcbiAgICAgICAgICAgIFwiUklTQyBPU1wiOiBcIlJJU0MgT1NcIixcclxuICAgICAgICAgICAgXCJEYXJ3aW5cIjogXCJNQUMgT1NcIixcclxuICAgICAgICAgICAgXCJIYWlrdVwiOiBcIkhhaWt1IE9TXCIsXHJcbiAgICAgICAgICAgIFwiRnJlZU1pTlRcIjogXCJGcmVlTWlOVCBPU1wiLFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgcGhvbmUgOFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIFBob25lIDhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIldpbmRvd3MgUGhvbmVcIiwgXCJ0eXBlXCI6IFwicGhvbmVcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIHBob25lIG9zIDdcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyBQaG9uZSA3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIFBob25lXCIsIFwidHlwZVwiOiBcInBob25lXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyBudCAxMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyBudCA2LjNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyA4LjFcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDYuMlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDYuMVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDYuMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIExvbmdob3JuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyBudCA1LjJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyAyMDAzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyBudCA1LjFcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyBYUFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgeHBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyBYUFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG50IDUuMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIDIwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dzIG1lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgTUVcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDb21wdXRlclwiLCBcInR5cGVcIjogXCJEZXNrdG9wXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid2luZG93cyBudCA0LjBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2luZG93cyBOVCA0LjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW5udDQuMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaW5kb3dzIE5UIDQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbm50IDQuMFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIE5UXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbm5cXFxcXFwvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIE5UXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgOThcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyA5OFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW45OFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIDk4XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbmRvd3MgOTVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiV2luZG93cyA5NVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aW45NVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJXaW5kb3dzIDk1XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ29tcHV0ZXJcIiwgXCJ0eXBlXCI6IFwiRGVza3RvcFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIndpbjE2XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIldpbmRvd3MgMy4xMVwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcGNcIjogXCJNYWNpbnRvc2hcIixcclxuICAgICAgICAgICAgXCJtYWNpbnRvc2h8bWFjIG9zIHhcIjogXCJNYWMgT1MgWFwiLFxyXG4gICAgICAgICAgICBcIm1hY19wb3dlcnBjXCI6IFwiTWFjIE9TIDlcIixcclxuICAgICAgICAgICAgXCJvcyB4XCI6IFwiTWFjIE9TIFhcIixcclxuICAgICAgICAgICAgXCJwcGMgbWFjXCI6IFwiUG93ZXIgUEMgTWFjXCIsXHJcbiAgICAgICAgICAgIFwiYW5kcm9pZFwiOiBcIkFuZHJvaWRcIixcclxuICAgICAgICAgICAgXCJ3ZWJvc1wiOiBcIk1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcIm1vYmlsZWV4cGxvcmVyXCI6IFwiTW9iaWxlIEV4cGxvcmVyXCIsXHJcbiAgICAgICAgICAgIFwicGFsbXNvdXJjZVwiOiBcIlBhbG1cIixcclxuICAgICAgICAgICAgXCJwYWxtc2NhcGVcIjogXCJQYWxtc2NhcGVcIixcclxuICAgICAgICAgICAgXCJtb3Rvcm9sYVwiOiBcIk1vdG9yb2xhXCIsXHJcbiAgICAgICAgICAgIFwibm9raWFcIjogXCJOb2tpYVwiLFxyXG4gICAgICAgICAgICBcImlwaG9uZVwiOiBcIkFwcGxlIGlQaG9uZVwiLFxyXG4gICAgICAgICAgICBcImlwYWRcIjogXCJpUGFkXCIsXHJcbiAgICAgICAgICAgIFwiaXBvZFwiOiBcIkFwcGxlIGlQb2QgVG91Y2hcIixcclxuICAgICAgICAgICAgXCJzb255XCI6IFwiU29ueSBFcmljc3NvblwiLFxyXG4gICAgICAgICAgICBcImVyaWNzc29uXCI6IFwiU29ueSBFcmljc3NvblwiLFxyXG4gICAgICAgICAgICBcImJsYWNrYmVycnlcIjogXCJCbGFja0JlcnJ5XCIsXHJcbiAgICAgICAgICAgIFwiY29jb29uXCI6IFwiTzIgQ29jb29uXCIsXHJcbiAgICAgICAgICAgIFwiYmxhemVyXCI6IFwiVHJlb1wiLFxyXG4gICAgICAgICAgICBcImxnXCI6IFwiTEdcIixcclxuICAgICAgICAgICAgXCJhbW9pXCI6IFwiQW1vaVwiLFxyXG4gICAgICAgICAgICBcInhkYVwiOiBcIlhEQVwiLFxyXG4gICAgICAgICAgICBcIm1kYVwiOiBcIk1EQVwiLFxyXG4gICAgICAgICAgICBcInZhcmlvXCI6IFwiVmFyaW9cIixcclxuICAgICAgICAgICAgXCJodGNcIjogXCJIVENcIixcclxuICAgICAgICAgICAgXCJzYW1zdW5nXCI6IFwiU2Ftc3VuZ1wiLFxyXG4gICAgICAgICAgICBcInNoYXJwXCI6IFwiU2hhcnBcIixcclxuICAgICAgICAgICAgXCJzaWUtXCI6IFwiU2llbWVuc1wiLFxyXG4gICAgICAgICAgICBcImFsY2F0ZWxcIjogXCJBbGNhdGVsXCIsXHJcbiAgICAgICAgICAgIFwiYmVucVwiOiBcIkJlblFcIixcclxuICAgICAgICAgICAgXCJpcGFxXCI6IFwiSFAgaVBhcVwiLFxyXG4gICAgICAgICAgICBcIm1vdC1cIjogXCJNb3Rvcm9sYVwiLFxyXG4gICAgICAgICAgICBcInBsYXlzdGF0aW9uIHBvcnRhYmxlXCI6IFwiUGxheVN0YXRpb24gUG9ydGFibGVcIixcclxuICAgICAgICAgICAgXCJoaXB0b3BcIjogXCJEYW5nZXIgSGlwdG9wXCIsXHJcbiAgICAgICAgICAgIFwibmVjLVwiOiBcIk5FQ1wiLFxyXG4gICAgICAgICAgICBcInBhbmFzb25pY1wiOiBcIlBhbmFzb25pY1wiLFxyXG4gICAgICAgICAgICBcInBoaWxpcHNcIjogXCJQaGlsaXBzXCIsXHJcbiAgICAgICAgICAgIFwic2FnZW1cIjogXCJTYWdlbVwiLFxyXG4gICAgICAgICAgICBcInNhbnlvXCI6IFwiU2FueW9cIixcclxuICAgICAgICAgICAgXCJzcHZcIjogXCJTUFZcIixcclxuICAgICAgICAgICAgXCJ6dGVcIjogXCJaVEVcIixcclxuICAgICAgICAgICAgXCJzZW5kb1wiOiBcIlNlbmRvXCIsXHJcbiAgICAgICAgICAgIFwic3ltYmlhblwiOiBcIlN5bWJpYW5cIixcclxuICAgICAgICAgICAgXCJTeW1iaWFuT1NcIjogXCJTeW1iaWFuT1NcIixcclxuICAgICAgICAgICAgXCJlbGFpbmVcIjogXCJQYWxtXCIsXHJcbiAgICAgICAgICAgIFwicGFsbVwiOiBcIlBhbG1cIixcclxuICAgICAgICAgICAgXCJzZXJpZXM2MFwiOiBcIlN5bWJpYW4gUzYwXCIsXHJcbiAgICAgICAgICAgIFwid2luZG93cyBjZVwiOiBcIldpbmRvd3MgQ0VcIixcclxuICAgICAgICAgICAgXCJvYmlnb1wiOiBcIk9iaWdvXCIsXHJcbiAgICAgICAgICAgIFwibmV0ZnJvbnRcIjogXCJOZXRmcm9udCBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgIFwib3BlbndhdmVcIjogXCJPcGVud2F2ZSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgIFwibW9iaWxleHBsb3JlclwiOiBcIk1vYmlsZSBFeHBsb3JlclwiLFxyXG4gICAgICAgICAgICBcIm9wZXJhbWluaVwiOiBcIk9wZXJhIE1pbmlcIixcclxuICAgICAgICAgICAgXCJvcGVyYSBtaW5pXCI6IFwiT3BlcmEgTWluaVwiLFxyXG4gICAgICAgICAgICBcImRpZ2l0YWwgcGF0aHNcIjogXCJEaWdpdGFsIFBhdGhzXCIsXHJcbiAgICAgICAgICAgIFwiYXZhbnRnb1wiOiBcIkF2YW50R29cIixcclxuICAgICAgICAgICAgXCJ4aWlub1wiOiBcIlhpaW5vXCIsXHJcbiAgICAgICAgICAgIFwibm92YXJyYVwiOiBcIk5vdmFycmEgVHJhbnNjb2RlclwiLFxyXG4gICAgICAgICAgICBcInZvZGFmb25lXCI6IFwiVm9kYWZvbmVcIixcclxuICAgICAgICAgICAgXCJkb2NvbW9cIjogXCJOVFQgRG9Db01vXCIsXHJcbiAgICAgICAgICAgIFwibzJcIjogXCJPMlwiLFxyXG4gICAgICAgICAgICBcIm1vYmlsZVwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwid2lyZWxlc3NcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcImoybWVcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcIm1pZHBcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcImNsZGNcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcInVwLmxpbmtcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcInVwLmJyb3dzZXJcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcInNtYXJ0cGhvbmVcIjogXCJHZW5lcmljIE1vYmlsZVwiLFxyXG4gICAgICAgICAgICBcImNlbGxwaG9uZVwiOiBcIkdlbmVyaWMgTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiUmFzcGJpYW5cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmFzcGJpYW4gUGlcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiUmFzcGJlcnJ5IFBpIEZvdW5kYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNvbXB1dGVyXCIsIFwidHlwZVwiOiBcIkRlc2t0b3BcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJNYWlsLlJVX0JvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJNYWlsLnJ1IENyYXdsZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNYWlsIFJVXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiR29vZ2xlYm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZWJvdCBDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIkdvb2dsZSBJbmNcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQmFpZHVzcGlkZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQmFpZHUgU3BpZGVyXCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiQmFpZHUgSW5jXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiYmluZ2JvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJCaW5nIEJvdFwiLCBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLCBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdCBDb3JwXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibXNuYm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIk1TTiBCb3RcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJNaWNyb3NvZnQgQ29ycFwifSxcclxuICAgICAgICAgICAgICAgIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIk1KMTJib3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFqZXN0aWMtMTIgRGlzdHJpYnV0ZWQgU2VhcmNoIEJvdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNYWplc3RpY1wiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJZYWhvbyEgU2x1cnBcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiWWFob28hIFNsdXJwIFdlYiBDcmF3bGVyIEJvdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJZYWhvbyBMTENcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTWVnYUluZGV4LnJ1XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1lZ2FJbmRleCBDcmF3bGVyIEJvdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNZWdhSW5kZXgucnVcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQWhyZWZzQm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFocmVmcyBCYWNrbGluayBSZXNlYXJjaCBCb3RcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiQWhyZWZzXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkRvdEJvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPcGVuU2l0ZSBFeHBsb3JlciBDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIlRoZSBNb3pcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiSm9iYm9lcnNlQm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvYmJvZXJzZSBDcmF3bGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcImpvYmJvZXJzZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiU2VtcnVzaEJvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcIm5hbWVcIjogXCJTRU1SdXNoIENyYXdsZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJTRU1ydXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiWWFuZGV4Qm90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1wibmFtZVwiOiBcIllhbmRleCBTZWFyY2ggQm90XCIsIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsIFwiZGV2ZWxvcGVyXCI6IFwiWWFuZGV4XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2Vvc2Nhbm5lcnMubmV0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNFTyBTY2FubmVycyBDcmF3bGVyIEJvdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJTRU8gU2Nhbm5lcnNcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiU0VPa2lja3MtUm9ib3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU0VPa2lja3MgQ3Jhd2xlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJTRU9raWNrc1wiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJDaGVja01hcmtOZXR3b3JrXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNoZWNrTWFyayBOZXR3b3JrIENyYXdsZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiQ2hlY2tNYXJrXCJcclxuICAgICAgICAgICAgICAgIH0sIFwiRGV2aWNlXCI6IHtcIm5hbWVcIjogXCJDcmF3bGVyXCIsIFwidHlwZVwiOiBcIlNlcnZlclwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkJpbmdQcmV2aWV3XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiUGxhdGZvcm1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJpbmcgUHJldmlldyBTbmFwc2hvdCBHZW5lcmF0b3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFyY2hpdGVjdHVyZVwiOiBcIjMyLWJpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0IENvcnBcIlxyXG4gICAgICAgICAgICAgICAgfSwgXCJEZXZpY2VcIjoge1wibmFtZVwiOiBcIkNyYXdsZXJcIiwgXCJ0eXBlXCI6IFwiU2VydmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiVm9pbGFCb3QgQkVUQVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJWb2lsYUJvdCBCRVRBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIm9yYW5nZSBmdCBncm91cFwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJhZHNjYW5uZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJQbGF0Zm9ybVwiOiB7XCJuYW1lXCI6IFwiQWRTY2FubmVyIENyYXdsZXJcIiwgXCJhcmNoaXRlY3R1cmVcIjogXCIzMi1iaXRcIiwgXCJkZXZlbG9wZXJcIjogXCJBZFNjYW5uZXJcIn0sXHJcbiAgICAgICAgICAgICAgICBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJRd2FudGlmeVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIlBsYXRmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRd2FudGlmeSBTZWFyY2ggQ3Jhd2xlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYXJjaGl0ZWN0dXJlXCI6IFwiMzItYml0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJRd2FudGlmeVwiXHJcbiAgICAgICAgICAgICAgICB9LCBcIkRldmljZVwiOiB7XCJuYW1lXCI6IFwiQ3Jhd2xlclwiLCBcInR5cGVcIjogXCJTZXJ2ZXJcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJhcHBsZSB0dlwiOiB7XCJuYW1lXCI6IFwiQXBwbGVUVlwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkFwcGxlIEluYy5cIn0sXHJcbiAgICAgICAgICAgIFwiY2hyb21lY2FzdFwiOiB7XCJuYW1lXCI6IFwiQ2hyb21lY2FzdFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkdvb2dsZSBJbmMuXCJ9LFxyXG4gICAgICAgICAgICBcImFmdGJcIjoge1wibmFtZVwiOiBcIkZpcmUgVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJBbWF6b24uY29tLCBJbmMuXCJ9LFxyXG4gICAgICAgICAgICBcImZyZWVib3hcIjoge1wibmFtZVwiOiBcIkZyZWVib3ggUmV2b2x1dGlvblwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkZSRUUgU0FTLlwifSxcclxuICAgICAgICAgICAgXCJnb29nbGV0dlwiOiB7XCJuYW1lXCI6IFwiR29vZ2xlIFRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXHJcbiAgICAgICAgICAgIFwibmV0Ym94XCI6IHtcIm5hbWVcIjogXCJOZXRib3hcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJTb255LlwifSxcclxuICAgICAgICAgICAgXCJwbGF5c3RhdGlvbiAzXCI6IHtcIm5hbWVcIjogXCJQbGF5c3RhdGlvbiAzXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXHJcbiAgICAgICAgICAgIFwicGxheXN0YXRpb24gNFwiOiB7XCJuYW1lXCI6IFwiUGxheXN0YXRpb24gNFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlNvbnkuXCJ9LFxyXG4gICAgICAgICAgICBcImtkbDMyQ3g1MjVcIjoge1wibmFtZVwiOiBcIktETDMyQ1g1MjVcIiwgXCJ0ZGV2aWNleXBlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU29ueS5cIn0sXHJcbiAgICAgICAgICAgIFwibnN6LWdzN1xcXFxcXC9neDcwXCI6IHtcIm5hbWVcIjogXCJOU1otR1M3XFwvR1g3MFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlNvbnkuXCJ9LFxyXG4gICAgICAgICAgICBcImg5NiBwcm9cXFxcK1wiOiB7XCJuYW1lXCI6IFwiSDk2IFBybytcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJBbGZhd2lzZS5cIn0sXHJcbiAgICAgICAgICAgIFwibXggZW5qb3kgdHZcIjoge1wibmFtZVwiOiBcIk1YIEVuam95IFRWIEJPWFwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIkdlbmlhdGVjaC5cIn0sXHJcbiAgICAgICAgICAgIFwic21hcnR0djIwMTZcIjoge1wibmFtZVwiOiBcIlNlcmllcyBKICgyMDE2KVwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlNhbXN1bmcuXCJ9LFxyXG4gICAgICAgICAgICBcInNtYXJ0LXR2XCI6IHtcIm5hbWVcIjogXCJTbWFydCBUVlwiLCBcImRldmljZVwiOiBcIlRlbGV2aXNpb25cIiwgXCJtYW51ZmFjdHVyZVwiOiBcIlNhbXN1bmcuXCJ9LFxyXG4gICAgICAgICAgICBcInRwbTE3MWVcIjoge1wibmFtZVwiOiBcIlRQTTE3MUVcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJQaGlsaXBzLlwifSxcclxuICAgICAgICAgICAgXCJzbWFydHR2YVwiOiB7XCJuYW1lXCI6IFwiVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJMRy5cIn0sXHJcbiAgICAgICAgICAgIFwidmFwNDMwXCI6IHtcIm5hbWVcIjogXCJWQVA0MzBcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJWaXppby5cIn0sXHJcbiAgICAgICAgICAgIFwidmllcmFcIjoge1wibmFtZVwiOiBcIlZpZXJhIFRWXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiUGFuYXNvbmljLlwifSxcclxuICAgICAgICAgICAgXCJ3ZWJ0dlwiOiB7XCJuYW1lXCI6IFwiV2ViVFZcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJNaWNyb3NvZnQuXCJ9LFxyXG4gICAgICAgICAgICBcInhib3hcIjoge1wibmFtZVwiOiBcIlhib3ggMzYwXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiTWljcm9zb2Z0LlwifSxcclxuICAgICAgICAgICAgXCJ4Ym94IG9uZVwiOiB7XCJuYW1lXCI6IFwiWGJveCBPbmVcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJNaWNyb3NvZnQuXCJ9LFxyXG4gICAgICAgICAgICBcIndpaVwiOiB7XCJuYW1lXCI6IFwiV2lpXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiTmludGVuZG8uXCJ9LFxyXG4gICAgICAgICAgICBcIndpaXVcIjoge1wibmFtZVwiOiBcIldpaVVcIiwgXCJkZXZpY2VcIjogXCJUZWxldmlzaW9uXCIsIFwibWFudWZhY3R1cmVcIjogXCJOaW50ZW5kby5cIn0sXHJcbiAgICAgICAgICAgIFwieDk2IG1pbmlcIjoge1wibmFtZVwiOiBcIlg5NiBtaW5pXCIsIFwiZGV2aWNlXCI6IFwiVGVsZXZpc2lvblwiLCBcIm1hbnVmYWN0dXJlXCI6IFwiU2h5U2t5LlwifVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qRGV2aWNlcyBDYXRlZ29yaWVzKi9cclxuICAgICAgICB0aGlzLmRldmljZXNDYXRlZ29yeUxpc3QgPSB7XHJcbiAgICAgICAgICAgICdsaW51eCc6ICdsaW51eCcsXHJcbiAgICAgICAgICAgICdtYWMnOiAnbWFjJyxcclxuICAgICAgICAgICAgJ3dpbic6ICd3aW4nLFxyXG4gICAgICAgICAgICAnbW9iaSc6ICdtb2JpJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKkRldmljZXMgYXJjaGl0ZWN0dXJlIExpc3QqL1xyXG4gICAgICAgIHRoaXMuZGV2aWNlc0FyY2hpdGVjdHVyZUxpc3QgPSB7XHJcbiAgICAgICAgICAgIFwiQVJNdjFcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12MlwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXYzXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjRcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12NFRcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12NVRFXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjZcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12Ni1NXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjctTVwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY3RS1NXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjgtTVwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY3LVJcIjogXCIzMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12OC1SXCI6IFwiMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjctQVwiOiBcIjMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY4LUFcIjogXCI2NCBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12OC4xLUFcIjogXCI2NFxcLzMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY4LjItQVwiOiBcIjY0XFwvMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjguMy1BXCI6IFwiNjRcXC8zMiBiaXRcIixcclxuICAgICAgICAgICAgXCJBUk12OC40LUFcIjogXCI2NFxcLzMyIGJpdFwiLFxyXG4gICAgICAgICAgICBcIkFSTXY4LjUtQVwiOiBcIjY0XFwvMzIgYml0XCIsXHJcbiAgICAgICAgICAgIFwiQVJNdjguNi1BXCI6IFwiNjRcXC8zMiBiaXRcIixcclxuICAgICAgICAgICAgXCJpMjg2XCI6IFwiMTYgQml0XCIsXHJcbiAgICAgICAgICAgIFwiV2luMTZcIjogXCIxNiBCaXRcIixcclxuICAgICAgICAgICAgXCJpMzg2XCI6IFwiMzIgQml0XCIsXHJcbiAgICAgICAgICAgIFwiaTQ4NlwiOiBcIjMyIEJpdFwiLFxyXG4gICAgICAgICAgICBcImk1ODZcIjogXCIzMiBCaXRcIixcclxuICAgICAgICAgICAgXCJpNjg2XCI6IFwiMzIgQml0XCIsXHJcbiAgICAgICAgICAgIFwiaTc4NlwiOiBcIjMyIEJpdFwiLFxyXG4gICAgICAgICAgICBcIng4NlwiOiBcIjMyIEJpdFwiLFxyXG4gICAgICAgICAgICBcIng2NFwiOiBcIjY0IEJpdFwiLFxyXG4gICAgICAgICAgICBcIldPVzY0XCI6IFwiNjQgQml0XCIsXHJcbiAgICAgICAgICAgIFwiV2luNjRcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJ4ODZfNjRcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJ4ODYtNjRcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJ4NjRcXFxcXFwveDg2XCI6IFwiNjQgQml0XCIsXHJcbiAgICAgICAgICAgIFwiSUEtNjRcIjogXCI2NCBCaXRcIixcclxuICAgICAgICAgICAgXCJBUk02NFwiOiBcIjY0IEJpdFwiLFxyXG4gICAgICAgICAgICBcIkFNRDY0XCI6IFwiNjQgQml0XCIsXHJcbiAgICAgICAgICAgIFwiSW50ZWw2NFwiOiBcIjY0IEJpdFwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypQbGF0Zm9ybSdzIFdpbmRvdyBNYW5hZ2VyKi9cclxuICAgICAgICB0aGlzLmRldmljZXNQbGF0Zm9ybVdNTmFtZUxpc3QgPSB7XHJcbiAgICAgICAgICAgICd4MTEnOiB7J25hbWUnOiAnTGludXggRGVza3RvcCwnLCAndHlwZSc6ICdYMTEgV2luZG93IE1hbmFnZXIuJ30sXHJcbiAgICAgICAgICAgICd3aW4nOiB7J25hbWUnOiAnV2luZG93cyBEZXNrdG9wLCcsICd0eXBlJzogJ1dpbmRvd3MgV2luZG93IE1hbmFnZXIuJyx9LFxyXG4gICAgICAgICAgICAnbWFjJzogeyduYW1lJzogJ01hY2ludG9zaCwnLCAndHlwZSc6ICdNYWMgV2luZG93IE1hbmFnZXIuJyx9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qV2ViIEJyb3dzZXIgTGlzdCovXHJcbiAgICAgICAgdGhpcy53ZWJCcm93c2VyTGlzdCA9IHtcclxuICAgICAgICAgICAgXCIwMDdhYzkgQ3Jhd2xlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCIwMDdhYzkgQ3Jhd2xlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ3Jhd2xlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkZ1bGxUZXh0TW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCIwMDdhYzlcIixcclxuICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3Jhd2xlci4wMDdhYzkubmV0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIxMTVCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjExNSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCIxMTUgVGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC8xMTUuY29tXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiVW5rbm93blwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiMTI2QlJPV1NFUlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCIxMjYgQlJPV1NFUlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVW5rbm93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiVW5rbm93blwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVua25vd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJVbmtub3duXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIxMzM3QnJvd3NlclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCIxMzM3IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVua25vd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIlVua25vd25cIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbmtub3duXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCJVbmtub3duXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiVW5rbm93blwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiMVBhc3N3b3JkXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIjEgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBhc3N3b3JkIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJGdWxsVGV4dE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBZ2lsZUJpdHMgSW5jXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcLzFwYXNzd29yZC5jb21cXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJUcmlhbHdhcmVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJpYWx3YXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVHJpYWx3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVHJpZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1RyaWRlbnRfKHNvZnR3YXJlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjcuNS4xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1heSA0LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNy41LjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXByaWwgMjIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjcuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgNSwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3LjQuNzY3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkFwcmlsIDI3LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiMXN0QnJvd3NlclwiOiBcIjFzdCBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgIFwiMjM0NUV4cGxvcmVyXCI6IFwiMjM0NSBFeHBsb3JlclwiLFxyXG4gICAgICAgICAgICBcIk1iMjM0NUJyb3dzZXJcIjogXCIyMzQ1IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgXCIyMzQ1Y2hyb21lXCI6IFwiMjM0NSBDaHJvbWVcIixcclxuICAgICAgICAgICAgXCIzNjBTRVwiOiBcIjM2MCBTZWN1cmUgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICBcIkFtYXlhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFtYXlhXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXM0NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnczLm9yZ1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIklOUklBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmlucmlhLmZyXFwvZW5cXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlczQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1czQ19Tb2Z0d2FyZV9Ob3RpY2VfYW5kX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBcImN1c3RvbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTEuNC40XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSmFudWFyeSAxOCwgMjAxMlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQU9MXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFPTCBFeHBsb3JlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW1lcmljYSBPbmxpbmUsIEluY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYW9sLmNvbVxcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9UcmlkZW50Xyhzb2Z0d2FyZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMTAsIDIwMTZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkFyb3JhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFyb3JhXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBdmFudCBGb3JjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC4xMS4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjcgU2VwdGVtYmVyIDIwMTBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkF2YW50XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkF2YW50IFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVuamFtaW4gQy4gTWV5ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKGxheW91dF9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmlkZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVHJpZGVudF8obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMDIwIGJ1aWxkIDNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAxNywgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQmFzaWxpc2tcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmFzaWxpc2sgXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb29uY2hpbGQgUHJvZHVjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJhc2lsaXNrLWJyb3dzZXIub3JnXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvYW5uYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dvYW5uYV8oc29mdHdhcmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAyMC4xMC4wNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjUgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJCbGlza1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlza1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpc2sgdGVhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJGcmVlXCI6IFwiTGltaXRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGFpZFwiOiBcIlVubGltaXRlZCBQcm9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVjhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9WOF8oSmF2YVNjcmlwdF9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMTIuMC45Mi44M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMjksIDIwMTlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkJlYWtlckJyb3dzZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVha2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbHVlIExpbmsgTGFic1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9iZWFrZXJicm93c2VyLmNvbVxcL2Fib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNSVQgTGljZW5zZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01JVF9MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC44LjEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDEzLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjAuOC4xMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAxMywgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMC44LjEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDEzLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRWxlY3Ryb25cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWxlY3Ryb25cIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkVsZWN0cm9uIChzb2Z0d2FyZSBmcmFtZXdvcmspXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdpdEh1YlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dpdEh1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTUlUIExpY2Vuc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9NSVRfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEwLjEuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyMyBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxMS4wLjAtYmV0YS4xNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyNCBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJCcmF2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCcmF2ZSBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCcmF2ZSBTb2Z0d2FyZSBJbmNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CcmF2ZV8oYnJvd3NlcilcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE1LjczXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE1IE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjUgU2VwdGVtYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTUuNzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTYgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMTUuNzVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTYgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTGludXhcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjE1Ljc1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjE2IE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkNhbWlub1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYW1pbm9cIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRoZSBDYW1pbm8gUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDEuMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfTGVzc2VyX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuMS4yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTQgTWFyY2ggMjAxMlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQ2xpcXpcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xpcXpcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsaXF6IEdtYkhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjkuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJBcHJpbCA0LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy42LjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAzMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4zOC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4zOC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bHkgMjIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMzguMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIyLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRWRnXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pY3Jvc29mdCBFZGdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNyb3NvZnQgQ29ycFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubWljcm9zb2Z0ZWRnZWluc2lkZXIuY29tXFwvZW4tdXNcXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg4LjAuNjczLjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxNCBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIk9wZXJhXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9wZXJhXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPcGVyYSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL09wZXJhX1NvZnR3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcm9wcmlldGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Byb3ByaWV0YXJ5X3NvZnR3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3MS4wLjM3NzAuMjcxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTQgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJPcGVyYSBNb2JpbGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3BlcmFcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9wZXJhIFNvZnR3YXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvT3BlcmFfU29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjU5LjEuMjkyNi41NDA2N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDEzLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZCAoY2xhc3NpYylcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxMi4xLjlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSA4LCAyMDE2XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3ltYmlhblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIlM2MCAxMi4wLjIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMjQsIDIwMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaW5kb3dzIE1vYmlsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEwLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWFyY2ggMTYsIDIwMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3aGFsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXZlciBXaGFsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmF2ZXIgQ29ycG9yYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9OYXZlcl9Db3Jwb3JhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJlZXdhcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9GcmVld2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS41LjQuMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMjYsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjUuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMjUsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNy4xMDAuMjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAxOCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjcuMTAwLjIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkp1bmUgMTgsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNy4xMDAuMjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAxOCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkZhbGtvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGYWxrb25cIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhdmlkIFJvc2NhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTGlua3NfKHdlYl9icm93c2VyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMIDMuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMS4wLjc1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk1hcmNoIDE5LCAyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiS29ucXVlcm9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktvbnF1ZXJvciBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLREVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9LREVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS0hUTUxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9LSFRNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhYmxlIHJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC4wOC4yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjcgSnVuZSAyMDE4XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiWWFCcm93c2VyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIllhbmRleCBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJZYW5kZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9ZYW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb3ByaWV0YXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JsaW5rXyh3ZWJfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwLjYuMy41NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIzLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjAuNi4yLjMxOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDE2LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMC43LjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwLjcuMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwLjcuMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJRdFdlYkVuZ2luZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdCBXZWIgRW5naW5lIGJhc2VkIGJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvb2JsZSBQcm9qZWN0IFRlYW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Eb29ibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJTRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0JTRF9saWNlbnNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQmxpbmtfKHdlYl9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyMDIwLjEwLjEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMTAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJJcm9uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNSV2FyZSBJcm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTUldhcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwid3d3LnNyd2FyZS5uZXRcXC9lblxcL3NvZnR3YXJlX3Nyd2FyZV9pcm9uLnBocFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQlNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJWOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1Y4XyhKYXZhU2NyaXB0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3NC4wLjM4NTAuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMTAsIDIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg0LjAuNDMwMC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIkF1Z3VzdCAyOSwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4NS4wLjQzNTAuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaW51eFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg1LjAuNDM1MC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgNiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkNocm9tZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHb29nbGUgQ2hyb21lXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHb29nbGUgTExDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR29vZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCU0QgKENocm9taXVtIGV4ZWN1dGFibGUpIChzb21lIGNsb3NlZC1zb3VyY2UgZmVhdHVyZXMpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Ni4wLjQyNDAuMTE0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI4Ni4wLjQyNDAuOTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAxMiwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm1hY09TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODYuMC40MjQwLjExMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2luZG93c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjg2LjAuNDI0MC4xMTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODYuMC40MjQwLjExMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiQ2hyb21pdW1cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hyb21pdW0gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhlIENocm9taXVtIFByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNocm9taXVtLm9yZ1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQlNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJ1aWx0IG5pZ2h0bHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY2hyb21pdW0ud29vbHlzcy5jb21cXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJDb21vZG9fRHJhZ29uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbW9kbyBEcmFnb25cIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbW9kbyBHcm91cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY29tb2RvLmNvbVxcL2hvbWVcXC9icm93c2Vycy10b29sYmFyc1xcL2ludGVybmV0LXByb2R1Y3RzLnBocFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQlNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjgzLjAuNDEwMy4xMTZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyMSwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkljZURyYWdvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb21vZG8gSWNlIERyYWdvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29tb2RvIEdyb3VwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21vZG8uY29tXFwvaG9tZVxcL2Jyb3dzZXJzLXRvb2xiYXJzXFwvaW50ZXJuZXQtcHJvZHVjdHMucGhwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI2NS4wLjIuMTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAxOSwgMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkRpbGxvXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpbGxvXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUaGUgRGlsbG8gdGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZGlsbG8ub3JnXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImN1c3RvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy4wLjVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMzAgSnVuZSAyMDE1XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRG9vYmxlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvb2JsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9vYmxlIFByb2plY3QgVGVhbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0Rvb2JsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQlNEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvQlNEX2xpY2Vuc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwMjAuMTAuMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAxMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkVMaW5rc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFTGlua3NcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiVGV4dEJhc2VkTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhdWRpcywgRm9uc2VjYSwgZXQgYWwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRUxpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJkaXNjb250aW51ZWRcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImN1c3RvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCJmb3JrIG9mIExpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIwLjExLjdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjIgQXVndXN0IDIwMDlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJFcGlwaGFueVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHTk9NRSBXZWJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcmNvIFBlc2VudGkgR3JpdHRpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nbm9tZS5vcmdcXC9uZXdzXFwvMjAxNVxcLzA1XFwvZ29vZGJ5ZS1tYXJjb1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRoZSBHTk9NRSBQcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVGhlX0dOT01FX1Byb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0R1RLXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0R1RLXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMzguMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCI4IE9jdG9iZXIgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIlByZXZpZXcgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMzcuOTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTMgU2VwdGVtYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJMaW5rc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMaW5rc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGF0b2NrYSwgZXQgYWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9MaW5rc18od2ViX2Jyb3dzZXIpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHUExcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HTlVfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImN1c3RvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMi4yMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyIEF1Z3VzdCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRmxvY2tcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxvY2tcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZsb2NrIEluY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczpcXC9cXC93ZWIuYXJjaGl2ZS5vcmdcXC93ZWJcXC8yMDExMDMyNTE1MTAxN1xcL2h0dHA6XFwvXFwvd3d3LmZsb2NrLmNvbVxcL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0Zsb2NrXyh3ZWJfYnJvd3NlcilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiZGlzY29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IFwiKGFzIG9mIDMuMClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Qcm9wcmlldGFyeV9zb2Z0d2FyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMy41LjMuNDY0MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJGZWJydWFyeSAxLCAyMDExXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiV2F0ZXJmb3hcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2F0ZXJmb3ggQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxleCBLb250b3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIwMjAuMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjEgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiRW9saWVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW9saWUgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW96aWxsYSBGb3VuZGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9Gb3VuZGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBcIihiZWZvcmUgdjU3KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dlY2tvXyhsYXlvdXRfZW5naW5lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvIHdcXC9TZXJ2b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCJ2NTcgJiBhZnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1NlcnZvXyhzb2Z0d2FyZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YW5kYXJkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiODIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXh0ZW5kZWQgU3VwcG9ydCBSZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNzguNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjAsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJQYWxlTW9vblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYWxlTW9vbiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb29uY2hpbGQgUHJvZHVjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1QTCAyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9Nb3ppbGxhX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29hbm5hXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR29hbm5hXyhzb2Z0d2FyZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlN0YW5kYXJkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMjguMTUuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIyNyBPY3RvYmVyIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJTZWFNb25rZXlcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2VhTW9ua2V5IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNlYU1vbmtleSBDb3VuY2lsXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNUEwgMi4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTW96aWxsYV9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlY2tvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR2Vja29fKGxheW91dF9lbmdpbmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuNTMuNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJTZXB0ZW1iZXIgMjIsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcmV2aWV3IHJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjUzLjViMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDI5LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiU2FsYW1XZWJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2FsYW1XZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2FsYW1XZWJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2FsYW13ZWIuY29tXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmVld2FyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0ZyZWV3YXJlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxpbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9CbGlua18od2ViX2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI0LjVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAzMSwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI0LjUuMC40MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDI1LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI0LjVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVuZSAyMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjQuNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdW5lIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiZmlyZWZveFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGaXJlZm94IEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vemlsbGEgRm91bmRhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfRm91bmRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTVBMIDIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01vemlsbGFfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogXCIoYmVmb3JlIHY1NylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHZWNrbyB3XFwvU2Vydm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IFwidjU3ICYgYWZ0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9TZXJ2b18oc29mdHdhcmUpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFuZGFyZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjgyLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiT2N0b2JlciAyMCwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkV4dGVuZGVkIFN1cHBvcnQgUmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjc4LjQuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJPY3RvYmVyIDIwLCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiR2FsZW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdhbGVvbiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkdyYXBoaWNhbE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXJjbyBQZXNlbnRpIEdyaXR0aVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ25vbWUub3JnXFwvbmV3c1xcLzIwMTVcXC8wNVxcL2dvb2RieWUtbWFyY29cXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcImRpc2NvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9HZWNrb18obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjIuMC43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjI3IFNlcHRlbWJlciAyMDA4XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaUNhYlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJpQ2FiIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFsZXhhbmRlciBDbGF1c3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNsYXVzcy1uZXQuZGVcXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlLCAkMjAgKFBybylcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnkgKGJyb3dzZXIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMR1BMIChXZWJLaXQpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0xlc3Nlcl9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI1LjkuMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCA0LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY3VybFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDbGllbnQgVVJMXCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJXZWIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIkZ1bGxUZXh0TW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhbmllbCBTdGVuYmVyZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0RhbmllbF9TdGVuYmVyZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJlZSBTb2Z0d2FyZTogTUlUXFwvWCBkZXJpdmF0ZSBsaWNlbnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2N1cmwuaGF4eC5zZVxcL2RvY3NcXC9jb3B5cmlnaHQuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhYmxlIHJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI3LjczLjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTQgT2N0b2JlciAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTHlueFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMeW54XCIsXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGVFAgY2xpZW50IFxcLyBIVFRQIGNsaWVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1aVwiOiBcIlRleHRCYXNlZE1vZGVcIixcclxuICAgICAgICAgICAgICAgIFwiY3JlYXRvclwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb250dWxsaSwgR3JvYmUsIFJlemFjLCBldCBhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjdXN0b20sIGZvcmsgb2YgbGlid3d3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvTGlid3d3XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjguOXJlbC4xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjggSnVseSAyMDE4XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibXNpZVwiOiBcIm1zaWVcIixcclxuICAgICAgICAgICAgXCJNaWRvcmlcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWlkb3JpIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNocmlzdGlhbiBEeXdhbiwgZXQgYWwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FzdGlhbi5vcmdcXC9lblxcL21pZG9yaS1icm93c2VyXFwvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjb3N0XCI6IFwiRnJlZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcclxuICAgICAgICAgICAgICAgIFwibGljZW5jZVwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0xlc3Nlcl9HZW5lcmFsX1B1YmxpY19MaWNlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViS2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvV2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBcIlByZXZpZXcgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjkuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKdWx5IDI5LCAyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiTmV0U3VyZlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOZXRTdXJmIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIldlYiBCcm93c2VyXCIsXHJcbiAgICAgICAgICAgICAgICBcInVpXCI6IFwiR3JhcGhpY2FsTW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjcmVhdG9yXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRoZSBOZXRTdXJmIERldmVsb3BlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubmV0c3VyZi1icm93c2VyLm9yZ1xcL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiY29zdFwiOiBcIkZyZWVcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR1BMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdCBXZWJFbmdpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9RdF9XZWJFbmdpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdFdlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0V2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiTWF5IDI0LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUHJldmlldyByZWxlYXNlXCI6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiT3R0ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3R0ZXIgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWljaGFcXHUwMTQyIER1dGtpZXdpY3pcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvb3R0ZXItYnJvd3Nlci5vcmdcXC9cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdQTHYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvR05VX0dlbmVyYWxfUHVibGljX0xpY2Vuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdCBXZWJFbmdpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9RdF9XZWJFbmdpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdFdlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1F0V2ViS2l0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJsYXRlc3QtcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFibGUgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjEuMC4wMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCIxIEphbnVhcnkgMjAxOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIlByZXZpZXcgcmVsZWFzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIndlZWtseTMzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXkgMTgsIDIwMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJNYXh0aG9uXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1heHRob24gQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWF4dGhvbiBJbnRlcm5hdGlvbmFsIEx0ZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL01heHRob25cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJcXHRGcmVlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaWNlbmNlXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyZWV3YXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvRnJlZXdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxheW91dFwiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZW4ud2lraXBlZGlhLm9yZ1xcL3dpa2lcXC9XZWJLaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUcmlkZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvVHJpZGVudF8obGF5b3V0X2VuZ2luZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxhdGVzdC1yZWxlYXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI1LjMuOC4yMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIk9jdG9iZXIgMjUsIDIwMTlcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmRyb2lkXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNS4yLjMuMzI0MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJKYW51YXJ5IDI1LCAyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCI1LjEuNjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiQXVndXN0IDI3LCAyMDE4XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaU9TXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiNS40LjVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiSnVseSAyMSwgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIldpbmRvd3MgUGhvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIyLjIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJNYXJjaCAzMCwgMjAxN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpbnV4XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjUuM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGVcIjogXCJTZXB0ZW1iZXIgOSwgMjAxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNhZmFyaVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzYWZhcmkgQnJvd3NlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiV2ViIEJyb3dzZXJcIixcclxuICAgICAgICAgICAgICAgIFwidWlcIjogXCJHcmFwaGljYWxNb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNyZWF0b3JcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXBwbGUgSW5jLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0FwcGxlX0luYy5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImNvc3RcIjogXCJJbmNsdWRlZCB3aXRoIG1hY09TIGFuZCBpT1NcIixcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpY2VuY2VcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHJvcHJpZXRhcnkgKGJyb3dzZXIpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VuLndpa2lwZWRpYS5vcmdcXC93aWtpXFwvUHJvcHJpZXRhcnlfc29mdHdhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMR1BMIChXZWJLaXQpIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL0dOVV9MZXNzZXJfR2VuZXJhbF9QdWJsaWNfTGljZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF5b3V0XCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lbi53aWtpcGVkaWEub3JnXFwvd2lraVxcL1dlYktpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwibGF0ZXN0LXJlbGVhc2VcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibWFjT1NcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxNC4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIlNlcHRlbWJlciAxNywgMjAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcImlPU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjE0LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiU2VwdGVtYmVyIDE3LCAyMDIwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKldlYiBCcm93c2VyIExheW91dCBlbmdpbmVzIExpc3QqLyAvKlxyXG4gICAgICAgICAgICAgKiBMYXlvdXQgZW5naW5lc1xyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBHZWNrbyBpcyBkZXZlbG9wZWQgYnkgdGhlIE1vemlsbGEgRm91bmRhdGlvbi5cclxuICAgICAgICAgICAgICogR29hbm5hIGlzIGEgZm9yayBvZiBHZWNrbyBkZXZlbG9wZWQgYnkgTW9vbmNoaWxkIFByb2R1Y3Rpb25zLlxyXG4gICAgICAgICAgICAgKiBLSFRNTCBpcyBkZXZlbG9wZWQgYnkgdGhlIEtERSBwcm9qZWN0LlxyXG4gICAgICAgICAgICAgKiBQcmVzdG8gd2FzIGRldmVsb3BlZCBieSBPcGVyYSBTb2Z0d2FyZSBmb3IgdXNlIGluIE9wZXJhLiBEZXZlbG9wbWVudCBzdG9wcGVkIGFzIE9wZXJhIHRyYW5zaXRpb25lZCB0byBCbGluay5cclxuICAgICAgICAgICAgICogVGFzbWFuIHdhcyBkZXZlbG9wZWQgYnkgTWljcm9zb2Z0IGZvciB1c2UgaW4gSW50ZXJuZXQgRXhwbG9yZXIgNSBmb3IgTWFjaW50b3NoLlxyXG4gICAgICAgICAgICAgKiBUcmlkZW50IGlzIGRldmVsb3BlZCBieSBNaWNyb3NvZnQgZm9yIHVzZSBpbiB0aGUgV2luZG93cyB2ZXJzaW9ucyBvZiBJbnRlcm5ldCBFeHBsb3JlciA0IHRvIEludGVybmV0IEV4cGxvcmVyIDExLlxyXG4gICAgICAgICAgICAgKiBFZGdlSFRNTCBpcyB0aGUgZW5naW5lIGRldmVsb3BlZCBieSBNaWNyb3NvZnQgZm9yIEVkZ2UuIEl0IGlzIGEgbGFyZ2VseSByZXdyaXR0ZW4gZm9yayBvZiBUcmlkZW50IHdpdGggYWxsIGxlZ2FjeSBjb2RlIHJlbW92ZWQuXHJcbiAgICAgICAgICAgICAqIFdlYktpdCBpcyBhIGZvcmsgb2YgS0hUTUwgYnkgQXBwbGUgSW5jLiB1c2VkIGluIEFwcGxlIFNhZmFyaSwgYW5kIGZvcm1lcmx5IGluIENocm9taXVtIGFuZCBHb29nbGUgQ2hyb21lLlxyXG4gICAgICAgICAgICAgKiBCbGluayBpcyBhIDIwMTMgZm9yayBvZiBXZWJLaXQncyBXZWJDb3JlIGNvbXBvbmVudCBieSBHb29nbGUgdXNlZCBpbiBDaHJvbWl1bSwgR29vZ2xlIENocm9tZSwgTWljcm9zb2Z0IEVkZ2UsIE9wZXJhLCBhbmQgVml2YWxkaS5bMTldXHJcbiAgICAgICAgICAgICAqIFNlcnZvIGlzIGFuIGV4cGVyaW1lbnRhbCB3ZWIgYnJvd3NlciBsYXlvdXQgZW5naW5lIGJlaW5nIGRldmVsb3BlZCBjb29wZXJhdGl2ZWx5IGJ5IE1vemlsbGEgYW5kIFNhbXN1bmcuKi9cclxuICAgICAgICB0aGlzLndlYkJyb3dzZXJMYXlvdXRMaXN0ID0ge1xyXG4gICAgICAgICAgICBcIkVkZ2VIVE1MXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVkZ2VIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIk1pY3Jvc29mdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiRWRnXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkVkZ2VcXC94eXpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIkJsaW5rXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsaW5rXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIkdvb2dsZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiQ2hyb21lXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIkNocm9tZVxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiR2Vja29cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2Vja29cIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTW96aWxsYSBGb3VuZGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJHZWNrb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJHZWNrb1xcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiR29hbm5hXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdvYW5uYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJNb29uY2hpbGQgUHJvZHVjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcIkdvYW5uYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJHb2FubmFcXC94eXpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIktIVE1MXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICBcImRldmVsb3BlclwiOiBcIktERSBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJLSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJLSFRNTFxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiUHJlc3RvXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByZXN0b1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJPcGVyYSBTb2Z0d2FyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluXCI6IFwiT3BlcmFcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiT3BlcmFcXC94eXpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIlRhc21hblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUYXNtYW5cIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJUYXNtYW5cIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpbl9leGFtcGxlXCI6IFwiVGFzbWFuXFwveHl6XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJUcmlkZW50XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRyaWRlbnRcIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiTWljcm9zb2Z0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJUcmlkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5fZXhhbXBsZVwiOiBcIlRyaWRlbnRcXC94eXpcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIldlYktpdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJLaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiQXBwbGUgSW5jXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJBcHBsZVdlYktpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJBcHBsZVdlYktpdFxcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiU2Vydm9cIjoge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2Vydm9cIixcclxuICAgICAgICAgICAgICAgIFwiZGV2ZWxvcGVyXCI6IFwiY29vcGVyYXRpdmVseSBieSBNb3ppbGxhIGFuZCBTYW1zdW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRhaW5cIjogXCJTZXJ2b1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJTZXJ2b1xcL3h5elwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibGlid3d3LUZNXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImxpYnd3dy1GTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXZlbG9wZXJcIjogXCJUaW0gQmVybmVycy1MZWVcIixcclxuICAgICAgICAgICAgICAgIFwiY29udGFpblwiOiBcImxpYnd3dy1GTVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb250YWluX2V4YW1wbGVcIjogXCJsaWJ3d3ctRk1cXC94eXpcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLypQYXJlbnQgQXBwIG9mIEJyb3dzZXIqL1xyXG4gICAgICAgIHRoaXMud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdCA9IFt7J25hbWUnOiAnbW96aWxsYScsICdjb2RlJzogJ01vemlsbGEnfV07XHJcblxyXG5cclxuICAgICAgICAvKiogdXBkYXRlIGRiXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgLyEqZGV2aWNlcyBsaXN0KiEvXHJcbiAgICAgICAgIHRoaXMuR2V0VXBkYXRlZERhdGEoXCJodHRwOi8vbG9jYWxob3N0L2xpYnJhcmllcy9qc29uL2Jyb3dzZXItZGV2aWNlcy1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi5kZXZpY2VzTGlzdCA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAvISpkZXZpY2UncyBhcmNoaXRlY3R1cmUgbGlzdCohL1xyXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWRldmljZXMtYXJjaGl0ZWN0dXJlLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLmRldmljZXNBcmNoaXRlY3R1cmVMaXN0ID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIC8hKmRldmljZXMgY2F0ZWdvcnkgbGlzdCohL1xyXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWRldmljZXMtY2F0ZWdvcnktbGlzdC5qc29uXCIsIGZ1bmN0aW9uICh1cGRhdGVkTGlzdDogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYuZGV2aWNlc0NhdGVnb3J5TGlzdCA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAvISpkZXZpY2VzIHBsYXRmb3JtIHdpbmRvdyBtYW5hZ2VyIGxpc3QqIS9cclxuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1kZXZpY2VzLXBsYXRmb3JtLXdtbi1saXN0Lmpzb25cIiwgZnVuY3Rpb24gKHVwZGF0ZWRMaXN0OiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi5kZXZpY2VzUGxhdGZvcm1XTU5hbWVMaXN0ID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIC8hKmJyb3dzZXJzIGxpc3QqIS9cclxuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1hbGwtbGlzdC5qc29uXCIsIGZ1bmN0aW9uICh1cGRhdGVkTGlzdDogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYud2ViQnJvd3Nlckxpc3QgPSB1cGRhdGVkTGlzdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAgLyEqYnJvd3NlcnMgYXBwIGNvZGUgbGlzdCohL1xyXG4gICAgICAgICB0aGlzLkdldFVwZGF0ZWREYXRhKFwiaHR0cDovL2xvY2FsaG9zdC9saWJyYXJpZXMvanNvbi9icm93c2VyLWFwcC1jb2RlLWxpc3QuanNvblwiLCBmdW5jdGlvbiAodXBkYXRlZExpc3Q6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLndlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3QgPSB1cGRhdGVkTGlzdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAgLyEqYnJvd3NlcnMgbGF5b3V0IGxpc3QqIS9cclxuICAgICAgICAgdGhpcy5HZXRVcGRhdGVkRGF0YShcImh0dHA6Ly9sb2NhbGhvc3QvbGlicmFyaWVzL2pzb24vYnJvd3Nlci1sYXlvdXQtbGlzdC5qc29uXCIsIGZ1bmN0aW9uICh1cGRhdGVkTGlzdDogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYud2ViQnJvd3NlckFwcENvZGVOYW1lTGlzdCA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICAgIH0pOyovXHJcblxyXG4gICAgICAgIHRoaXMuYW5hbHl6ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLypwcml2YXRlIEdldFVwZGF0ZWREYXRhKFVybDogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHJldHJpZXZlIGRhdGEgZnJvbSBcIiArIFVybCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9Ki9cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhbmFseXplKCkge1xyXG4gICAgICAgIC8qc3RhcnQgb3BlcmF0aW9uKi9cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgY2xlYW5VQSA9IHNlbGYuY2xlYW5Vc2VyQWdlbnRTdHJpbmcodGhpcy5Vc2VyQWdlbnQpO1xyXG4gICAgICAgIC8qZmlyc3Qgc3RlcCovXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZi53ZWJCcm93c2VyQXBwQ29kZU5hbWVMaXN0KSkge1xyXG4gICAgICAgICAgICBzZWxmLndlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3QuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLypzZWFyY2ggYXBwIGNvZGUgZm9ybSB1c2VyLWFnZW50Ki9cclxuICAgICAgICAgICAgICAgIGlmIChjbGVhblVBLmluZGV4T2YodmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmJyb3dzZXJBcHBOYW1lID0gdmFsdWUuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAvKnNwbGl0IHVzZXItYWdlbnQgaW4gdG8gYXJyYXkgYnkgc3BhY2UqL1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVUEuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5kZXhPZih2YWx1ZS5uYW1lLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm93c2VyQXBwTmFtZUZ1bGwgPSBpdGVtLnJlcGxhY2UoXCIvXCIsIFwiIFwiKS5yZXBsYWNlKHZhbHVlLm5hbWUsIHZhbHVlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5icm93c2VyQXBwTmFtZUZ1bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5icm93c2VyQXBwVmVyc2lvbiA9IGl0ZW0uc3Vic3RyKHZhbHVlLm5hbWUudG9Mb3dlckNhc2UoKS5sZW5ndGggKyAxLCAoaXRlbS5sZW5ndGggLSAodmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpLmxlbmd0aCArIDEpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLmJyb3dzZXJBcHBWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKnNlY29uZCBzdGVwKi9cclxuICAgICAgICAvKnNlbGYuZGV2aWNlc1BsYXRmb3JtV01OYW1lTGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh3bTphbnkpe1xyXG5cclxuICAgICAgICB9KSovXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldFVSTFByb3RvY29sKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVVJMUHJvdG9jb2w7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRVUkxIb3N0bmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlVSTEhvc3RuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VVJMUGF0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlVSTFBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRVUkxQYXRoRnVsbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlVSTFBhdGhGdWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGdlckRldmljZVNjcmVlbkhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRldmljZVNjcmVlbkhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGdlckRldmljZVNjcmVlbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGV2aWNlU2NyZWVuV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIG51bWJlclxyXG4gICAgICovXHJcbiAgICBnZXJEZXZpY2VTY3JlZW5Db2xvckRlcHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGV2aWNlU2NyZWVuQ29sb3JEZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGdlckRldmljZVNjcmVlblBpeGVsRGVwdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZXZpY2VTY3JlZW5QaXhlbERlcHRoO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZVdtTmFtZU9yaWdpbmFsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlV21OYW1lT3JpZ2luYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIGFycmF5XHJcbiAgICAgKi9cclxuICAgIGdldERldmljZUluZm9BbGwoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VJbmZvQWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBtaXhlZFxyXG4gICAgICovXHJcbiAgICBnZXRVc2VyQWdlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuVXNlckFnZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERldmljZUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlc0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJjaGl0ZWN0dXJlTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VzQXJjaGl0ZWN0dXJlTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcm93c2VyQXBwQ29kZU5hbWVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYkJyb3dzZXJBcHBDb2RlTmFtZUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2ViQnJvd3Nlckxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViQnJvd3Nlckxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2ViQnJvd3NlckxheW91dExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViQnJvd3NlckxheW91dExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhdGZvcm1XTU5hbWVMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZXNQbGF0Zm9ybVdNTmFtZUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV2aWNlc0NhdGVnb3J5TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VzQ2F0ZWdvcnlMaXN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gYXJyYXlcclxuICAgICAqL1xyXG4gICAgZ2V0VXNlckFnZW50TGlzdCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlVzZXJBZ2VudExpc3Q7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlckVuZ2luZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckVuZ2luZU5hbWUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJFbmdpbmVOYW1lRnVsbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyRW5naW5lTmFtZUZ1bGwpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gYXJyYXlcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlckluZm9BbGwoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5icm93c2VySW5mb0FsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyQXBwQ29kZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckFwcENvZGVOYW1lKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyQXBwQ29kZVZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckFwcENvZGVWZXJzaW9uKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyQXBwTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXBwTmFtZSkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlckFwcENvZGVOYW1lRnVsbCgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJBcHBOYW1lKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyQXBwVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXBwVmVyc2lvbikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlckFyY2hpdGVjdHVyZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyQXJjaGl0ZWN0dXJlKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlckVuZ2luZVZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYnJvd3NlckVuZ2luZVZlcnNpb24pLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldEJyb3dzZXJOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJOYW1lKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEJyb3dzZXJOYW1lRnVsbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyTmFtZUZ1bGwpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRCcm93c2VyVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5icm93c2VyVmVyc2lvbikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0QnJvd3NlclZlcnNpb25GdWxsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmJyb3dzZXJWZXJzaW9uRnVsbCkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBtaXhlZFxyXG4gICAgICovXHJcbiAgICBnZXRDdXJyZW50RGV2aWNlSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50RGV2aWNlSW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlTmFtZSkudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQHJldHVybiBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlTmFtZUZ1bGwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlTmFtZUZ1bGwpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZU5hbWVPcmlnaW5hbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kZXZpY2VOYW1lT3JpZ2luYWwpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXREZXZpY2VUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmRldmljZVR5cGUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZUFyY2hpdGVjdHVyZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5kZXZpY2VBcmNoaXRlY3R1cmUpLnRyaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEByZXR1cm4gc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZVdpbmRvd01hbmFnZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGV2aWNlV2luZG93TWFuYWdlcikudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBndERldmljZURldGFpbHMocmVzb3VyY2VzOiBhbnkpIHtcclxuICAgICAgICAvL2FycmF5X2NoYW5nZV9rZXlfY2FzZSgkYWdlLENBU0VfVVBQRVIpXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzb3VyY2VzKSAmJiAocmVzb3VyY2VzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICgnUGxhdGZvcm0nIGluIHJlc291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGV2aWNlSW5mbyA9IHJlc291cmNlc1snUGxhdGZvcm0nXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlTmFtZSA9IHJlc291cmNlc1snUGxhdGZvcm0nXVsnbmFtZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VBcmNoaXRlY3R1cmUgPSByZXNvdXJjZXNbJ1BsYXRmb3JtJ11bJ2FyY2hpdGVjdHVyZSddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VUeXBlID0gcmVzb3VyY2VzWydEZXZpY2UnXVsndHlwZSddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VOYW1lID0gcmVzb3VyY2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlVHlwZSA9IHJlc291cmNlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREZXZpY2VJbmZvID0gcmVzb3VyY2VzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQbGF0Zm9ybU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF0Zm9ybUFyY2hpdGVjdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXZpY2VBcmNoaXRlY3R1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhblVzZXJBZ2VudFN0cmluZyhVc2VyQWdlbnQ6IHN0cmluZyk6c3RyaW5nIHtcclxuICAgICAgICAvLyBjbGVhbiB1cCB0aGUgc3RyaW5nXHJcbiAgICAgICAgLy8gcmVwbGFjZSBicm93c2VyIG5hbWVzIHdpdGggdGhlaXIgYWxpYXNlc1xyXG4gICAgICAgIHJldHVybiBVc2VyQWdlbnQudG9Mb3dlckNhc2UoKS50cmltKCkucmVwbGFjZSgnb3ByJywgJ29wZXJhJykucmVwbGFjZSgnaWNld2Vhc2VsJywgJ2ZpcmVmb3gnKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==