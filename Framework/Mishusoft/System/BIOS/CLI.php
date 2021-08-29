<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Cli\Request;
use Mishusoft\Exceptions\Handler;
use Mishusoft\Registry;
use Mishusoft\System\BIOS;

class CLI extends BIOS
{
    public static function initialise(): void
    {
        try {
            $registry          = Registry::getInstance();
            $registry->requestCli = new Request();

            \Mishusoft\Drivers\Bootstrap\Cli::run(new $registry->requestCli);
        } catch (\Error | \Exception $e) {
            Handler::fetch($e);
        }
    }

}