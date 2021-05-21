<?php

namespace Mishusoft\Framework\Chipsets;

use Mishusoft\Framework\Chipsets\Utility\_Debug;

class Preloader
{


    /**
     * @param string $filename
     * @return string
     */
    public static function getClassNamespaceFromPath(string $filename): string
    {
        $namespace = str_replace(['//', '/'], ['/', '\\'], substr(
            $filename,
            0,
            (strlen($filename) - (strlen($filename) - strpos($filename, '.php')))
        ));
        return substr($namespace,
            (strpos($namespace, rtrim(PHP_RUNTIME_ROOT_PATH, DIRECTORY_SEPARATOR)) + strlen(rtrim(PHP_RUNTIME_ROOT_PATH, DIRECTORY_SEPARATOR))),
            strlen($namespace));

    }//end getClassNamespaceFromPath()


    /**
     * @param string $name_space
     * @param string $extension
     * @return string
     */
    public static function getPathFromClassNamespace(string $name_space, string $extension='.php'): string
    {
        $file = str_replace('\\', DIRECTORY_SEPARATOR, $name_space).$extension;
        // return PHP_RUNTIME_ROOT_PATH . substr($file, strlen(WHO_AM_I) + 1, strlen($file)); /*old version for remove mishusoft form namespace*/
        return PHP_RUNTIME_ROOT_PATH.$file;

    }//end getPathFromClassNamespace()


    public static function compatibility(): void
    {
        _Debug::preOutput(PHP_VERSION);

    }//end compatibility()


    /**
     * @param $path
     */
    public static function loadGlobals(string $path): void
    {
        if (is_dir($path)=== false) {
            trigger_error("$path not found.");
            // exit;
        }

        if ($path[(strlen($path) - 1)] !== '/') {
            $path .= '/';
        }

        // self::log("Checking $folderpath.");
        $files = glob($path.'*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file) === true) {
                self::loadGlobals($file);
            } else {
                if (is_file($file) === true) {
                    /*
                        self::log("Found $file.");
                    self::log("including $file.");*/
                    include_once $file;
                }
            }
        }

    }//end loadGlobals()


}//end class
