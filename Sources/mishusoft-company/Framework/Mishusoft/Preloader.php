<?php

namespace Mishusoft;

use Mishusoft\Utility\Debug;

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
        return substr(
            $namespace,
            (strpos($namespace, rtrim(RUNTIME_ROOT_PATH, DS)) + strlen(rtrim(RUNTIME_ROOT_PATH, DS))),
            strlen($namespace)
        );
    }//end getClassNamespaceFromPath()


    /**
     * @param string $name_space
     * @param string $extension
     * @return string
     */
    public static function getPathFromClassNamespace(string $name_space, string $extension = '.php'): string
    {
        $file = str_replace('\\', DS, $name_space).$extension;
        return RUNTIME_ROOT_PATH.$file;
    }//end getPathFromClassNamespace()


    public static function compatibility(): void
    {
        Debug::preOutput(PHP_VERSION);
    }//end compatibility()


    /**
     * @param string $path
     */
    public static function loadGlobals(string $path): void
    {
        if (is_dir($path)=== false) {
            trigger_error("$path not found.");
        }

        if ($path[(strlen($path) - 1)] !== '/') {
            $path .= '/';
        }

        $files = glob($path.'*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file) === true) {
                self::loadGlobals($file);
            } else {
                include_once $file;
            }
        }
    }//end loadGlobals()
}//end class
