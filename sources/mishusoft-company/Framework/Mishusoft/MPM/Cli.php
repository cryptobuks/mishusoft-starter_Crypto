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
        return self::dFile(self::configDataFile('MPM', 'config.cli'));
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
        //return path [like root://sources/mishusoft-company/Application/CliSurface/Controllers/NameController.php]
        if (file_exists(Storage::applicationDirectivePath())) {
            return sprintf(
                '%1$sCliSurface%3$sControllers%3$s%2$sController.php',
                Storage::applicationDirectivePath(),
                ucfirst($controller),
                DS
            );
        }

        return sprintf(
            '%1$ssources%3$smishusoft-company%3$sApp%3$sCliSurface%3$sControllers%3$s%2$sController.php',
            RUNTIME_ROOT_PATH,
            ucfirst($controller),
            DS
        );
    }//end getControllerOfModule()

}