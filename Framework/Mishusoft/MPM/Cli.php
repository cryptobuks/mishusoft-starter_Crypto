<?php

namespace Mishusoft\MPM;

use Mishusoft\MPM;
use Mishusoft\Storage;

class Cli extends MPM
{

    /**
     * @return string
     */
    public static function configFile(): string
    {
        return self::dFile(self::dataFile('MPM', 'config.cli'));
    }

    /**
     * @param string $controller
     * @return string
     */
    public static function runtimeRootController(string $controller): string
    {
        return self::controllerPath($controller);
    }//end runtimeRootController()

    /**
     * @param string $controller
     * @return string
     */
    private static function controllerPath(string $controller): string
    {
        //return path [like root://app/CliSurface/Controllers/NameController.php]
        return sprintf(
            '%1$sCliSurface%3$sControllers%3$s%2$sController.php',
            Storage::applicationDirectivePath(),
            ucfirst($controller),
            DS
        );
    }//end getControllerOfModule()

}