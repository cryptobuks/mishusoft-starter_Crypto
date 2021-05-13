<?php

namespace Mishusoft\Framework\Chipsets\Utility;

class _Debug {

    public static function preOutput($argument)
    {
        echo '<pre>';
        print_r($argument);
        echo '</pre>';
    }

    public static function preVarDump($argument)
    {
        echo '<pre>';
        var_dump($argument);
        echo '</pre>';
    }

    /**
     * @param $user
     * @return false|string[]
     */
    public static function get_passwd_info($user)
    {
        $fp = fopen("/etc/passwd", "r");
        //preOutput($fp);
        while (!feof($fp)) {
            $line = fgets($fp);
            $fields = explode(";", $line);
            if ($user == $fields[0]) {
                return $fields;
            }
        }
        return false;
    }
}



//print_r(get_passwd_info( 'www'));