<?php

namespace Mishusoft\System\BIOS;

use Mishusoft\Cli\Request;
use Mishusoft\System\BIOS;

class Cli extends BIOS
{
    public static function initialise(): void
    {
        self::singleton(
        /**
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         * @throws \Mishusoft\Exceptions\HttpException\HttpRequestException
         */
            function ($registry) {
                $registry->requestCli = new Request();
                \Mishusoft\Drivers\Bootstrap\Communication\Cli::run(new $registry->requestCli());
            }
        );
    }
}
