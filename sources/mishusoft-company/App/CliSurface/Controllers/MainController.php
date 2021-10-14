<?php

namespace App\CliSurface\Controllers;

use Mishusoft\Drivers\CliSurfaceController;

class MainController extends CliSurfaceController
{
    public function run():void
    {
        print_r($this->request, false);
    }
}
