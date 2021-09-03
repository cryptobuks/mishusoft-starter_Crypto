<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Cli\Request;
use Mishusoft\System\BIOS;

class CLI extends BIOS
{
    public static function initialise(): void
    {
        self::singleton(function ($registry) {
            $registry->requestCli = new Request();
            \Mishusoft\Authentication\Bootstrap\Cli::run(new $registry->requestCli);
        });
    }
}
