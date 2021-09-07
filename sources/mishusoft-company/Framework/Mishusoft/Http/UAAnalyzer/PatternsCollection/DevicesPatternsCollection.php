<?php


namespace Mishusoft\Http\UAAnalyzer\PatternsCollection;

use JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesPatternsCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     * @throws JsonException
     */
    public function match(string $identifier):string
    {
        $dictionary = $this->extractAttribute($this->query('devices', 'categories'), 'identifier-with-pattern');
        if (array_key_exists($identifier, $dictionary)=== true) {
            return strtolower($dictionary[$identifier]);
        }

        throw new InvalidArgumentException('Unexpected device : '.$identifier);
    }
}
