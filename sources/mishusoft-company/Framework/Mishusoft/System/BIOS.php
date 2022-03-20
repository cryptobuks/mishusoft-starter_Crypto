<?php

declare(strict_types=1);

namespace Mishusoft\System;

use Closure;
use Mishusoft\Registry;
use Mishusoft\Singleton;

class BIOS extends Singleton
{
    // Declare version.
    public const VERSION = '2.0.0';

    /**
     * @param Closure $closure
     * @return BIOS
     */
    protected static function singleton(Closure $closure): self
    {
        $closure(Registry::getInstance());
        return self::getInstance();
    }
}//end class
