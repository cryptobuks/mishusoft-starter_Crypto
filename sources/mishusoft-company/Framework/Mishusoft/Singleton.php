<?php

namespace Mishusoft;

class Singleton
{
    private static array $instances = [];
    protected function __construct()
    {
    }
    protected function __clone()
    {
    }

    /**
     * @throws \RuntimeException
     */
    public function __wakeup()
    {
        throw new \RuntimeException("Cannot un-serialize singleton");
    }

    public static function getInstance()
    {
        $cls = get_called_class(); // late-static-bound class name
        if (!isset(self::$instances[$cls])) {
            self::$instances[$cls] = new static();
        }
        return self::$instances[$cls];
    }
}
