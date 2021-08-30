<?php

namespace App\CliSurface\Controllers;

use Mishusoft\Drivers\CliSurfaceController;

class UpdateController extends CliSurfaceController
{
    public function run(string $source = '', string $destination = ''): void
    {
        print_r($this->request, false);
    }

    public function robots(string $source, string $destination): void
    {
        print_r($this->request, false);
    }
}