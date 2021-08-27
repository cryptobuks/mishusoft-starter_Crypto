<?php

namespace Mishusoft\Drivers\Bootstrap;

class CLI
{

    public static function run()
    {
        print_r(func_get_args(), false);
        print_r($_SERVER, false);

    }

}