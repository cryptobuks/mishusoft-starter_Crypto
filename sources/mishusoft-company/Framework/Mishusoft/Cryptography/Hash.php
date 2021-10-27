<?php

declare(strict_types=1);

namespace Mishusoft\Cryptography;

use HashContext;
use Mishusoft\Singleton;

class Hash extends Singleton
{
    /**
     * Get available algorithm for hashing
     *
     * @return string[]
     */
    public static function availableAlgo(): array
    {
        return hash_algos();
    }

    public static function copy(HashContext $context): HashContext
    {
        return hash_copy($context);
    }
}
