<?php


namespace Mishusoft\Http\UAAnalyzer\InformationCollection;

use JsonException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesInformationCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws RuntimeException|JsonException
     */
    public function makeDetails(string $identifier)
    {
        $resourcesInfo = $this->extractAttribute($this->query('devices', 'categories'), 'info-only');
        if (array_key_exists($identifier, $resourcesInfo) === true) {
            return $resourcesInfo[$identifier];
        }
        return array();
    }
}
