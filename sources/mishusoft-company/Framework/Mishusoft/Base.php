<?php


namespace Mishusoft;

abstract class Base extends Singleton
{

    public const SYSTEM_APP_FILE    = 'php';
    public const SYSTEM_DATA_FILE   = 'yml';
    public const PUBLIC_DATA_FILE   = 'json';

    /**
     * @return string
     */
    protected static function dataFileFormat(): string
    {
        return 'yml';
    }

    /**
     * @param string $path
     * @param string $extension
     * @return string
     */
    protected static function dFile(string $path, string $extension = 'yml'):string
    {
        return sprintf('%s.%s', $path, $extension);
    }

    /**
     * @return string
     */
    protected static function rootPath():string
    {
        return RUNTIME_ROOT_PATH;
    }

    /**
     * @param string $directive
     * @param string $filename
     * @return string
     */
    protected static function configDataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%2$s%7$s%3$s%7$s%4$s%7$s%5$s%7$s%6$s',
            RUNTIME_ROOT_PATH,
            'storages',
            'framework',
            'configs',
            $directive,
            $filename,
            DS
        );
    }

    /**
     * @param string $directive
     * @param string $filename
     * @return string
     */
    protected static function dataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%2$s%7$s%3$s%7$s%4$s%7$s%5$s%7$s%6$s',
            RUNTIME_ROOT_PATH,
            'storages',
            'framework',
            'data-drive',
            $directive,
            $filename,
            DS
        );
    }

    /**
     * @param string $directive
     * @param string $filename
     * @return string
     */
    protected static function cacheDataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%2$s%7$s%3$s%7$s%4$s%7$s%5$s%7$s%6$s',
            RUNTIME_ROOT_PATH,
            'storages',
            'framework',
            'caches',
            $directive,
            $filename,
            DS
        );
    }


    /**
     * @param string $filename
     * @return string
     */
    public static function getClassNamespace(string $filename): string
    {
        if (str_starts_with($filename, RUNTIME_SOURCES_PATH)) {
            $filename = substr($filename, self::currentPosition($filename, RUNTIME_SOURCES_PATH), strlen($filename));
            return self::getNamespace($filename);
        }

        $namespace = self::getNamespace($filename);
        return substr($namespace, self::currentPosition($namespace, RUNTIME_ROOT_PATH), strlen($namespace));
    }//end getClassNamespace()

    private static function currentPosition(string $resources, string $path):string
    {
        return (strpos($resources, rtrim($path, DS)) + strlen(rtrim($path, DS)));
    }

    private static function getNamespace(string $path):string
    {
        return str_replace(['//', '/'], ['/', '\\'], substr(
            $path,
            0,
            (strlen($path) - (strlen($path) - strpos($path, '.php')))
        ));
    }


    /**
     * @param string $name_space
     * @param string $extension
     * @return string
     */
    public static function getPath(string $name_space, string $extension = '.php'): string
    {
        $file = str_replace('\\', DS, $name_space).$extension;
        return RUNTIME_ROOT_PATH.$file;
    }//end getPathFromClassNamespace()
}
