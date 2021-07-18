<?php


namespace Mishusoft\Http\UAAnalyzer\IdentifiersCollection;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class PlatformsIdentifiersCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    //Platform
    //Name
    //Version
    //Architecture
    //Developer

    public function all(): array
    {
        return [
            'AIX' => [
                'name' => 'AIX',
                'architecture' => '32-bit',
                'developer' => 'IBM',
            ],
            'AmigaOS' => [
                'name' => 'Amiga OS',
                'architecture' => '32-bit',
                'developer' => 'Commodore International',
            ],
            'Android' => [
                'name' => 'Android',
                'architecture' => '32-bit',
                'developer' => 'Goggle Inc',
            ],
            'GoogleTV' => [
                'name' => 'Android for GoogleTV',
                'architecture' => '32-bit',
                'developer' => 'Goggle Inc',
            ],
            // 'Asha',
            // 'ATV OS X',
            // 'Bada',
            // 'BeOS',
            // 'Brew',
            // 'BSD',
            // 'CellOS',
            // 'Chromecast OS',
            // 'Chrome OS',
            // 'CygWin',
            // 'Darwin',
            // 'Debian',
            // 'DragonFly BSD',
            // 'Fedora',
            // 'Firefox OS',
            // 'FreeBSD',
            // 'HP-UX',
            'iOS' => [
                'name' => 'iOS for iPhone',
                'architecture' => '32-bit',
                'developer' => 'Apple Inc',
            ],
            // 'ipadOS',
            // 'IRIX64',
            // 'JAVA',
            // 'KaiOS',
            // 'Linux',
            // 'Mac68K',
            // 'macOS',
            // 'Mac OS X',
            // 'MacPPC',
            // 'Maemo',
            // 'MAUI',
            // 'MeeGo',
            // 'Miui OS',
            // 'NetBSD',
            // 'Nintendo 3DS',
            // 'Nintendo DSi',
            // 'Nintendo Switch',
            // 'Nintendo Wii',
            // 'Nintendo WiiU',
            // 'OpenBSD',
            // 'Orbis OS',
            // 'OS/2',
            // 'PalmOS',
            // 'Playstation Vita',
            // 'Red Hat',
            // 'BlackBerry',
            // 'RIM Tablet OS',
            // 'RISC OS',
            // 'SailfishOS',
            // 'Nokia S40',
            // 'SunOS',
            // 'Syllable',
            // 'Symbian',
            // 'Tizen',
            // 'Tru64 UNIX',
            // 'Ubuntu',
            // 'Ubuntu Touch',
            // 'Unix',
            // 'webOS',
            'Windows 10' => [
                'name' => 'Windows 10',
                'architecture' => '64-bit',
                'developer' => 'Microsoft Corporation',
            ],
            'Win16' => [
                'name' => 'Win16',
                'architecture' => '16-bit',
                'developer' => 'Microsoft Corporation',
            ],
            'Windows 2000' => [
                'name' => 'Win16',
                'architecture' => '16-bit',
                'developer' => 'Microsoft Corporation',
            ],
            'Win31' => [
                'name' => 'Win31',
                'architecture' => '16-bit',
                'developer' => 'Microsoft Corporation',
            ],
            'Win32' => [
                'name' => 'Win32',
                'architecture' => '16-bit',
                'developer' => 'Microsoft Corporation',
            ],
            // 'Win32',
            // 'Win64',
            // 'Windows 7',
            // 'Windows 8',
            // 'Windows 8.1',
            // 'Windows 95',
            // 'Windows 98',
            // 'WinCE',
            // 'Windows ME',
            // 'Windows Mobile',
            // 'Windows NT',
            // 'WinPhone',
            // 'Windows Phone 10',
            // 'WinPhone6',
            // 'WinPhone7',
            // 'Windows Phone 7.5',
            // 'Windows Phone 8',
            // 'Windows Phone 8.1',
            // 'WinRT8',
            // 'Windows RT 8.1',
            // 'Windows Vista',
            // 'Windows XP',
            // 'Xbox 360',
            // 'Xbox 360 (Mobile View)',
            // 'Xbox OS',
            // 'Xbox OS 10',
            // 'Xbox OS 10 (Mobile View)',
        ];
    }

    /**
     * @throws RuntimeException
     */
    public function nameAll():array
    {
        return $this->extractAttribute($this->query('platforms', 'os'), 'identifier-only');
    }


    /**
     * List of devices architecture
     *
     * @return array
     * @throws RuntimeException
     */
    public function architecturesAll():array
    {
        return $this->extractArchitectures($this->query('platforms', 'architectures'));
    }


    /**
     * List of web browsers window manager
     *
     * @return array
     */
    public function windowManagers(): array
    {
        // Platform's Window Manager.
        return [
            'x11' => [
                'name' => 'Linux Desktop,',
                'type' => 'X11 Window Manager.',
            ],
            'linux' => [
                'name' => 'Linux Desktop,',
                'type' => 'Unknown Window Manager.',
            ],
            'windows' => [
                'name' => 'Windows Desktop,',
                'type' => 'Windows Window Manager.',
            ],
            'android' => [
                'name' => 'Android Device,',
                'type' => 'Unknown Window Manager.',
            ],
            'cpu' => [
                'name' => 'iOS,',
                'type' => 'Mac Window Manager.',
            ],
            'mac' => [
                'name' => 'Macintosh,',
                'type' => 'Mac Window Manager.',
            ],
        ];
    }//end getWindowManagers()
}
