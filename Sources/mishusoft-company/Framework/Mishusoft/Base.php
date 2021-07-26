<?php


namespace Mishusoft;

abstract class Base
{

    public function __construct()
    {
    }

    protected static function rootPath():string
    {
        return RUNTIME_ROOT_PATH;
    }

    protected static function applicationWebPath():string
    {
        return dirname($_SERVER['PHP_SELF']);
    }

}
