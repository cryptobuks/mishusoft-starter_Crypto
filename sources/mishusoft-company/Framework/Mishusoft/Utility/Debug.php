<?php declare(strict_types=1);

namespace Mishusoft\Utility;

class Debug
{

    public static function preOutput($argument): void
    {
        echo '<pre>';
        print_r($argument, false);
        echo '</pre>';
    }

    public static function preVarDump($argument)
    {
        echo '<pre>';
        var_dump($argument, []);
        echo '</pre>';
    }

    /**
     * @param $user
     * @return false|string[]
     */
    public static function get_passwd_info($user)
    {
        $fp = fopen("/etc/passwd", 'rb');
        //preOutput($fp);
        while (!feof($fp)) {
            $line = fgets($fp);
            $fields = explode(";", $line);
            if ($user === $fields[0]) {
                return $fields;
            }
        }
        return false;
    }
}



//print_r(get_passwd_info( 'www'));
