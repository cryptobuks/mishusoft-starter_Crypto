<?php

namespace Mishusoft\Communication\Cli;

use Mishusoft\Drivers\CliSurfaceController;
use Mishusoft\Storage;

class CopyController extends CliSurfaceController
{
    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function run(string $source = '', string $destination = ''): void
    {
        $this->log('Coping ' . Storage\FileSystem::realpath($source));
        $this->copy(Storage\FileSystem::realpath($source), lcfirst(Storage\FileSystem::realpath($destination)));
        $this->log('Copy completed..', 'completed');
    }
}
