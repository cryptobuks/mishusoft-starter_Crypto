<?php

namespace App\CliSurface\Controllers;

use Mishusoft\Drivers\CliSurfaceController;
use Mishusoft\Storage\FileSystem;

class UpdateController extends CliSurfaceController
{
    public function run(string $source = '', string $destination = ''): void
    {
        print_r(__METHOD__ . PHP_EOL, false);
        print_r($this->request, false);
    }


    public function robots(string $source, string $destination): void
    {
        $this->update($source, $destination);
    }

    public function indexPHP(string $source, string $destination): void
    {
        $this->update($source, $destination);
    }

    public function indexHTML(string $source, string $destination): void
    {
        $this->update($source, $destination);
    }

    public function framework(string $source, string $destination): void
    {
        $this->update($source, $destination);
    }
}
