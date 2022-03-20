<?php

namespace Mishusoft\Http\UAAnalyzer\InformationCollection;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesInformationCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Get details information about specific category
     * @param string $identifier
     * @return mixed
     * @throws RuntimeException
     */
    public function makeDetails(string $identifier): mixed
    {
        $resourcesInfo = $this->extractAttribute($this->query('devices', 'categories'), 'info-only');
        if (array_key_exists($identifier, $resourcesInfo) === true) {
            return $resourcesInfo[$identifier];
        }
        return [];
    }
}
