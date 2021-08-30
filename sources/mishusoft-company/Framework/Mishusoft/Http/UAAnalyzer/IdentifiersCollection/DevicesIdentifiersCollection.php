<?php


namespace Mishusoft\Http\UAAnalyzer\IdentifiersCollection;

use JsonException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesIdentifiersCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws RuntimeException
     * @throws JsonException
     */
    public function all(): array
    {
        return $this->extractAttribute($this->query('devices', 'categories'), 'identifier-only');
    }
}
