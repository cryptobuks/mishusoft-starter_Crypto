<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer\PatternsCollection;

use Mishusoft\Framework\Chipsets\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;
use Mishusoft\Framework\Chipsets\Http\UAAnalyzer\PatternsCollection;

class PlatformsIdentificationPatternsCollection extends PatternsCollection
{
    public function __construct()
    {
    }



    /**
     * @throws InvalidArgumentException
     * @throws RuntimeException
     */
    public function windowManager(string $identifier):string
    {
        return match (strtolower($identifier)) {
            'x11','linux','win','cpu','iphone','mac','android','mobi'=> $this->makePattern('(x11|linux|win(dows)|cpu\s*(os|iphone\s*os)|iphone|mac|android|mobi)', false, false),
            default => throw new InvalidArgumentException('Unexpected window manager : '.$identifier)
        };
    }
}
