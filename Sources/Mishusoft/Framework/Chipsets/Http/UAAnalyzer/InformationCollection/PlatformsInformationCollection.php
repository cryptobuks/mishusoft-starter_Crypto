<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer\InformationCollection;

use Mishusoft\Framework\Chipsets\Http\UAAnalyzer\Collection;

class PlatformsInformationCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
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
            'win' => [
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
