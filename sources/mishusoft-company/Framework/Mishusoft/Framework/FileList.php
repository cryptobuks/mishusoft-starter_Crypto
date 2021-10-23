<?php

namespace Mishusoft\Framework;

use Mishusoft\Http;
use Mishusoft\Storage;

trait FileList
{
    /**
     * @return string
     */
    public static function getAbsoluteInstalledURL(): string
    {
        return Http::getHost().Storage::applicationWebDirectivePath();
    }//end getAbsoluteInstalledURL()


    /**
     * @return string
     */
    public static function configFile(): string
    {
        return self::dFile(
            self::configDataFile(
                self::APP_TYPE,
                'config'
            )
        );
    }

    /**
     * @return string
     */
    public static function installFile(): string
    {
        return self::dFile(
            self::configDataFile(
                self::APP_TYPE,
                'install'
            )
        );
    }

    /**
     * @return string
     */
    public function listerFile(): string
    {
        return self::dFile(
            self::configDataFile(
                self::APP_TYPE,
                'files/' . APPLICATION_SERVER_NAME
            ),
            'ext4'
        );
    }
}
