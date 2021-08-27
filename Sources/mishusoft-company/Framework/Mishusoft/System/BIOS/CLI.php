<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\System\BIOS;

class CLI extends BIOS
{
    public static function initialise()
    {
        \Mishusoft\Drivers\Bootstrap\CLI::run();
    }

}