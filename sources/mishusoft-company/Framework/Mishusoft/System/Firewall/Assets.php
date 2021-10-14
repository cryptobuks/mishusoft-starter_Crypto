<?php

namespace Mishusoft\System\Firewall;

use Mishusoft\System\Time;

trait Assets
{


    /**
     * @return string
     */
    protected static function logDirectory(): string
    {
        //data-drive/Firewall/logs/
        return sprintf(
            '%1$s%3$s%2$s',
            'Firewall',
            Time::todayDateOnly(),
            DS
        );
    }



    /**
     * @param string $underTakenAction
     * @return string
     */
    protected static function logFile(string $underTakenAction): string
    {
        //logs/Firewall/date/blocked.yml
        //logs/Firewall/date/banned.yml
        //logs/Firewall/date/granted.yml
        return self::dFile(self::logDataFile(self::logDirectory(), $underTakenAction));
    }


    /**
     * @return string
     */
    protected static function configFile(): string
    {
        return self::dFile(self::configDataFile('Firewall', 'config'));
    }


    /**
     * @return string
     */
    protected static function siteFile(): string
    {
        return self::dFile(self::configDataFile('Firewall', 'sites'));
    }

}