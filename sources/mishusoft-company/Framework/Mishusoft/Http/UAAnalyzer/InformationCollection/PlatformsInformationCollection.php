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
     * @throws RuntimeException
     */
    public function makeWMDetails(string $identifier)
    {
        $resourcesInfo = $this->extractAttribute($this->query('platforms', 'wm'), 'info-only');
        if (array_key_exists($identifier, $resourcesInfo) === true) {
            return $resourcesInfo[$identifier];
        }
        return array();
    }
}
