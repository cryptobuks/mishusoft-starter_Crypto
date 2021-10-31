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

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    private static function makePathToNamespace(string $path): string
=======
    private static function startPosition(string $resources, string $path): int
>>>>>>> Stashed changes
    {
        return str_replace(['//', '/'], ['/', '\\'], substr($path, 0, self::lastPosition($path)));
    }

<<<<<<< Updated upstream
    private static function startPosition(string $resources, string $path): string
=======
    private static function makePathToNamespace(string $path): string
>>>>>>> Stashed changes
    {
        $path = rtrim($path, DS);
        //get actual point from path/name/with/file.extension
        return (strpos($resources, $path) + strlen($path));
    }

<<<<<<< Updated upstream
    private static function lastPosition(string $path): string
=======
    private static function lastPosition(string $path): int
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        return strtolower(
            substr(
                $fullPath,
                strlen($rootPath),
                ((strlen($fullPath) - strlen($rootPath)) - 1)
            )
        );
    }public static function rootPath(): string
=======
        return strtolower(substr($fullPath, strlen($rootPath), strlen($fullPath) - strlen($rootPath) - 1));
    }

    public static function frameworkViewsPath(): string
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream

    public static function appStoragesPath(): string
=======
    public static function rootPath(): string
    {
        return RUNTIME_ROOT_PATH;
    }

    public static function cssAssetsPath(): string
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    public static function frameworkViewsPath(): string
=======
    public static function appStoragesPath(): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkDataPath(),
            'views',
            DS
        );
    }

<<<<<<< Updated upstream
    public static function cssAssetsPath(): string
=======
    public static function storagesPath(): string
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    public static function mediaPath(): string
=======
    public static function imagesPath(): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'media',
            DS
        );
    }

<<<<<<< Updated upstream
    public static function imagesPath(): string
=======
    public static function mediaPath(): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'images',
            DS
        );
    }

<<<<<<< Updated upstream
    protected static function frameworkDataPath(): string
=======
    public static function frameworkStoragesPath(): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s%4$s%3$s%4$s',
            self::rootPath(),
            'storages',
            'framework',
            DS
        );
    }

<<<<<<< Updated upstream

    public static function frameworkStoragesPath(): string
=======
    public static function logosDefaultPath(bool $isRemote = false): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'framework',
            DS
        );
    }

<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    public static function logosDefaultPath(bool $isRemote = false): string
=======
    public static function uploadsPath(): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s',
            self::logosPath($isRemote),
            'default/'
        );
    }

<<<<<<< Updated upstream
    public static function uploadsPath(): string
=======
    public static function usersProfilePicturesPath(): string
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream

    protected static function logDirective(string $directive): string
=======
    public static function frameworkSessionsPath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::frameworkDataPath(), "sessions", DS);
    }

    protected static function dataFileFormat(): string
    {
        return "yml";
    }

    protected static function dFile(string $path, string $extension = "yml"): string
>>>>>>> Stashed changes
    {
        return sprintf(
            '%1$s%2$s%4$s%3$s%4$s',
            self::frameworkDataPath(),
            'logs',
            $directive,
            DS
        );
    }

<<<<<<< Updated upstream
    public static function frameworkSessionsPath(): string
=======
    protected static function logDirective(string $directive): string
>>>>>>> Stashed changes
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
