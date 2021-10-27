<?php

declare(strict_types=1);

namespace Mishusoft\Services;

use Mishusoft\Singleton;

class WebFontsService extends Singleton
{
    private array $availableAlgo = [];

    public function __construct()
    {
        parent::__construct();

        // set algo for file hashing
        $this->availableAlgo = hash_algos();
    }

    /**
     * Get available algorithm for hashing
     *
     * @return string[]
     */
    public function getAvailableAlgo(): array
    {
        return $this->availableAlgo;
    }
}
