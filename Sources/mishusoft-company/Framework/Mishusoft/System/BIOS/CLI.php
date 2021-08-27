<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Cli\Request;
use Mishusoft\Exceptions\Handler;
use Mishusoft\System\BIOS;

class CLI extends BIOS
{
    public static function initialise(): void
    {
        try {
            \Mishusoft\Drivers\Bootstrap\CLI::run(new Request);
        } catch (\Error | \Exception $e) {
            Handler::fetch($e);
        }
    }

}