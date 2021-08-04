<?php


namespace Mishusoft;

abstract class Base
{

    public const SYSTEM_APP_FILE= 'php';
    public const SYSTEM_DATA_FILE= 'yml';
    public const PUBLIC_DATA_FILE= 'json';

    /**
     * Base constructor.
     */
    public function __construct()
    {
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
            'cache',
            $directive,
            $filename,
            DS
        );
    }


    /**
     * @param string $filename
     * @return string
     */
    protected static function cacheFile(string $filename):string
    {
        return sprintf(
            '%1$s%2$s%6$s%3$s%6$s%4$s%6$s%5$s.cache',
            RUNTIME_ROOT_PATH,
            'storages',
            'framework',
            'cache',
            $filename,
            DS
        );
    }
}