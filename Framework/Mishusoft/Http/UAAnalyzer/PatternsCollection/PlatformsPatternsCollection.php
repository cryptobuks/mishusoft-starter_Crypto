<?php


namespace Mishusoft\Http\UAAnalyzer\PatternsCollection;

use JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class PlatformsPatternsCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @param string $identifier
     * @return string
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function name(string $identifier):string
    {
        $dictionary = $this->extractAttribute($this->query('platforms', 'os'), 'identifier-with-pattern');
        if (array_key_exists($identifier, $dictionary)=== true) {
            return strtolower($dictionary[$identifier]);
        }

        throw new InvalidArgumentException('Unexpected platform : '.$identifier);
    }


    /**
     * Architecture pattern maker
     *
     * @param string $identifier
     * @return string
     */
    public function arch(string $identifier):string
    {
        return '/(?<type>('.$this->quote(strtolower($identifier)).'))/i';
    }


    /**
     * @param string $identifier
     * @return string
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function wm(string $identifier):string
    {
        $dictionary = $this->extractAttribute($this->query('platforms', 'wm'), 'identifier-with-pattern');
        if (array_key_exists($identifier, $dictionary)=== true) {
            return strtolower($dictionary[$identifier]);
        }

        throw new InvalidArgumentException('Unexpected platform : '.$identifier);
    }
}
