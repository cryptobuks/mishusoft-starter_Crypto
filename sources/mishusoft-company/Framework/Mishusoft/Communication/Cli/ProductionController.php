<?php

namespace Mishusoft\Communication\Cli;

class ProductionController extends \Mishusoft\Drivers\CliSurfaceController
{
    public function run(): void
    {
        print_r($this->request, false);
    }
}
