<?php


namespace Mishusoft\Framework\Chipsets;



use Mishusoft\Framework\Chipsets\Utility\_Debug;

class Preloader
{

    public static function getClassNamespaceFromPath(string $filename): string
    {
        $namespace = str_replace('/', "\\", str_replace('//', "/", substr($filename, 0, (strlen($filename) - (strlen($filename) - strpos($filename, ".php"))))));
        return substr($namespace, (strpos($namespace, rtrim(PHP_RUNTIME_ROOT_PATH, DIRECTORY_SEPARATOR)) + strlen(rtrim(PHP_RUNTIME_ROOT_PATH, DIRECTORY_SEPARATOR))), strlen($namespace));
    }

    public static function getPathFromClassNamespace(string $name_space,string $extension = ".php"): string
    {
        $file = str_replace('\\', DIRECTORY_SEPARATOR, $name_space) . $extension;
        //return PHP_RUNTIME_ROOT_PATH . substr($file, strlen(WHO_AM_I) + 1, strlen($file)); /*old version for remove mishusoft form namespace*/
        return PHP_RUNTIME_ROOT_PATH . $file;
    }

    public static function compatibility()
    {
        _Debug::preOutput(PHP_VERSION);
        
    }


    /**
     * @param $path
     */
    public static function loadGlobals(string $path)
    {
        if (!is_dir($path)) {
            trigger_error("$path not found.");
            //exit;
        }
        if (substr($path, strlen($path) - 1, 1) !== '/') {
            $path .= '/';
        }
        /*self::log("Checking $folderpath.");*/
        $files = glob($path . '*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file)) {
                self::loadGlobals($file);
            } else {
                if (is_file($file)) {
                    /*self::log("Found $file.");
                    self::log("including $file.");*/
                    include_once $file;
                }
            }
        }
    }

}