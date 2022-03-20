<?php

namespace Mishusoft\Communication\Cli;

use Mishusoft\Drivers\CliSurfaceController;

class MainController extends CliSurfaceController
{
    public function run(): void
    {
        print_r($this->request, false);
    }
}
