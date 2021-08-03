<?php

namespace Mishusoft\Storage\FileSystem;

use Mishusoft\Exceptions\RuntimeException;

class Lua extends \Lua
{
    /**
     * @throws RuntimeException
     */
    private static function validation():void
    {
        $ext = get_loaded_extensions();
        if (in_array('lua', $ext)=== false) {
            throw new RuntimeException('Lua extension required.');
        }
    }

}