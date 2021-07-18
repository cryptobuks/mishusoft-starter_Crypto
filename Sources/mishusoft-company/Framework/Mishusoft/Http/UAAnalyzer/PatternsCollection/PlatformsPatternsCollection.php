<?php


namespace Mishusoft\Http\UAAnalyzer\PatternsCollection;

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
     * @throws RuntimeException
     * @throws InvalidArgumentException
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
     * @param string $identifier
     * @return string
     */
    public function architecture(string $identifier):string
    {
        return '/(?<type>('.$this->quote(strtolower($identifier)).'))/i';
    }


    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     */
    public function windowManager(string $identifier):string
    {
        return match (strtolower($identifier)) {
            'x11','linux','windows','cpu','iphone','mac','android','mobi'=> $this->makePattern('(x11|linux|win(dows)|cpu\s*(os|iphone\s*os)|iphone|mac|android|mobi)', false, false),
            default => throw new InvalidArgumentException('Unexpected window manager : '.$identifier)
        };
    }
}
