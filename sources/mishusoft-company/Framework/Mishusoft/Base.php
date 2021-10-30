<?php

namespace Mishusoft;

use Mishusoft\Utility\Inflect;

abstract class Base extends Singleton
{
    public const SYSTEM_APP_FILE    = 'php';
    public const SYSTEM_DATA_FILE   = 'yml';
    public const PUBLIC_DATA_FILE   = 'json';


    protected static function dataFileFormat(): string
    {
        return 'yml';
    }


    protected static function dFile(string $path, string $extension = 'yml'): string
    {
        return sprintf('%s.%s', $path, $extension);
    }


    public static function hidePath(string $string): string
    {
        return str_replace(RUNTIME_ROOT_PATH, ROOT_IDENTITY, $string);
    }

    public static function getClassNamespace(string $filename): string
    {
        //make namespace from source path (if development, app://sources/company/Framework)
        if (Inflect::startsWith($filename, RUNTIME_SOURCES_PATH)) {
            return self::namespaceBuilder(RUNTIME_SOURCES_PATH . 'Framework' . DS, $filename);
        }

        //make namespace from (app://Framework) production
        return self::namespaceBuilder(RUNTIME_ROOT_PATH . 'Framework' . DS, $filename);
    }//end getClassNamespace()

    private static function namespaceBuilder(string $rootPath, string $filename): string
    {
        $filename = substr($filename, self::startPosition($filename, $rootPath), strlen($filename));
        return self::makePathToNamespace($filename);
    }

    private static function makePathToNamespace(string $path): string
    {
        return str_replace(['//', '/'], ['/', '\\'], substr($path, 0, self::lastPosition($path)));
    }

    private static function startPosition(string $resources, string $path): string
    {
        $path = rtrim($path, DS);
        //get actual point from path/name/with/file.extension
        return (strpos($resources, $path) + strlen($path));
    }

    private static function lastPosition(string $path): string
    {
        return (strlen($path) - (strlen($path) - strpos($path, '.php')));
    }


    /**
     * Get path from psr_4 namespace
     */
    public static function getPath(string $name_space, string $extension = '.php'): string
    {
        $file = str_replace('\\', DS, $name_space).$extension;
        return RUNTIME_ROOT_PATH.$file;
    }//end getPath()
    /**
     * Get current directory name from full path
     */
    public static function getDirectoryName(string $fullPath, string $rootPath = RUNTIME_ROOT_PATH): string
    {
        return strtolower(
            substr(
                $fullPath,
                strlen($rootPath),
                ((strlen($fullPath) - strlen($rootPath)) - 1)
            )
        );
    }public static function rootPath(): string
    {
        return RUNTIME_ROOT_PATH;
    }

    public static function storagesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            RUNTIME_ROOT_PATH,
            'storages',
            DS
        );
    }


    public static function appStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'app',
            DS
        );
    }

    public static function assetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'assets',
            DS
        );
    }

    public static function frameworkViewsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkDataPath(),
            'views',
            DS
        );
    }

    public static function cssAssetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::assetsPath(),
            'css',
            DS
        );
    }

    public static function jsAssetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::assetsPath(),
            'js',
            DS
        );
    }

    public static function webfontsAssetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::assetsPath(),
            'webfonts',
            DS
        );
    }

    public static function localizationPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'localization',
            DS
        );
    }

    public static function mediaPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'media',
            DS
        );
    }

    public static function imagesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'images',
            DS
        );
    }

    protected static function frameworkDataPath(): string
    {
        return sprintf(
            '%1$s%2$s%4$s%3$s%4$s',
            self::rootPath(),
            'storages',
            'framework',
            DS
        );
    }


    public static function frameworkStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'framework',
            DS
        );
    }



    public static function logosPath(bool $isRemote = false): string
    {
        if ($isRemote) {
            return sprintf(
                '%1$s%2$s',
                BASE_URL,
                'media/logos/'
            );
        }
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'logos',
            DS
        );
    }

    public static function logosDefaultPath(bool $isRemote = false): string
    {
        return sprintf(
            '%1$s%2$s',
            self::logosPath($isRemote),
            'default/'
        );
    }

    public static function uploadsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'uploads',
            DS
        );
    }

    public static function usersPicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'users',
            DS
        );
    }

    public static function usersProfilePicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'profiles',
            DS
        );
    }

    public static function usersCoverPicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'covers',
            DS
        );
    }

    public static function usersBackgroundPicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'backgrounds',
            DS
        );
    }

    public static function databasesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'databases',
            DS
        );
    }

    public static function cachesStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkDataPath(),
            'caches',
            DS
        );
    }

    public static function logsStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkDataPath(),
            'logs',
            DS
        );
    }

    public static function dataDriveStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkDataPath(),
            'data-drive',
            DS
        );
    }

    public static function configDataDirective(string $directive): string
    {
        return sprintf(
            '%1$s%2$s%4$s%3$s',
            self::frameworkDataPath(),
            'configs',
            $directive,
            DS
        );
    }


    protected static function logDirective(string $directive): string
    {
        return sprintf(
            '%1$s%2$s%4$s%3$s%4$s',
            self::frameworkDataPath(),
            'logs',
            $directive,
            DS
        );
    }

    public static function frameworkSessionsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkDataPath(),
            'sessions',
            DS
        );
    }

    protected static function cacheDataFile(string $directive, string $filename): string
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

    protected static function configDataFile(string $directive, string $filename): string
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

    protected static function requiredDataFile(string $directive, string $filename): string
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

    protected static function logDataFile(string $directive, string $filename): string
    {
        return sprintf(
            '%1$s%2$s%5$s%3$s%5$s%4$s',
            self::frameworkDataPath(),
            'logs',
            $directive,
            $filename,
            DS
        );
    }
}
