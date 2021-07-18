<?php


namespace Mishusoft\Http\UAAnalyzer\InformationCollection;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class PlatformsInformationCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws RuntimeException
     */
    public function platformDetails(string $identifier)
    {
        $resourcesInfo = $this->extractAttribute($this->query('platforms', 'os'), 'info-only');
        if (array_key_exists($identifier, $resourcesInfo) === true) {
            return $resourcesInfo[$identifier];
        }
        return array();
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
            'iphone' => [
                'name' => 'iPhone,',
                'type' => 'iOS Window Manager.',
            ],
        ];
    }//end getWindowManagers()
}
