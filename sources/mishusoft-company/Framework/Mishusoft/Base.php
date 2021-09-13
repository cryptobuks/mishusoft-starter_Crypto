<?php


namespace Mishusoft;

abstract class Base extends Singleton
{

    public const SYSTEM_APP_FILE    = 'php';
    public const SYSTEM_DATA_FILE   = 'yml';
    public const PUBLIC_DATA_FILE   = 'json';

    protected static function frameworkDataPath(): string
    {
        return sprintf(
            '%1$s%2$s%4$s%3$s',
            RUNTIME_ROOT_PATH,
            'storages',
            'framework',
            DS
        );
    }

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
    protected static function cacheDataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%2$s%5$s%3$s%5$s%4$s',
            self::frameworkDataPath(),
            'caches',
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
    protected static function configDataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%2$s%5$s%3$s%5$s%4$s',
            self::frameworkDataPath(),
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
    protected static function requiredDataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%2$s%5$s%3$s%5$s%4$s',
            self::frameworkDataPath(),
            'data-drive',
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
            $filename = substr($filename, self::startPosition($filename, RUNTIME_SOURCES_PATH), strlen($filename));
            return self::getPathNamespace($filename);
        }

        $namespace = self::getPathNamespace($filename);
        return substr($namespace, self::startPosition($namespace, RUNTIME_ROOT_PATH), strlen($namespace));
    }//end getClassNamespace()

    private static function startPosition(string $resources, string $path):string
    {
        $path = rtrim($path, DS);
        //get actual point from path/name/with/file.extension
        return (strpos($resources, $path) + strlen($path));
    }

    private static function lastPosition(string $path):string
    {
        return (strlen($path) - (strlen($path) - strpos($path, '.php')));
    }

    private static function getPathNamespace(string $path):string
    {
        return str_replace(['//', '/'], ['/', '\\'], substr($path, 0, self::lastPosition($path)));
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
