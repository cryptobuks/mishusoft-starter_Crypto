<?php

namespace Mishusoft;

use Mishusoft\Utility\Inflect;

class CacheManager extends Base
{
    protected static array $observation = [
        'app://'.PUBLIC_ROOT_PATH.'.htaccess',
        'app://'.PUBLIC_ROOT_PATH.'index.html',
        'app://'.PUBLIC_ROOT_PATH.'index.php',
        'app://'.PUBLIC_ROOT_PATH.'favicon.ico',
        'app://'.PUBLIC_ROOT_PATH.'robots.txt',
        'app://storages/app/assets/',
        'app://storages/app/media/images/icons/',
        'app://storages/framework/views/',
    ];

    protected static string $cacheDirectory = '';

    /**
     * @throws Exceptions\RuntimeException
     */
    public static function start(): void
    {
        self::$cacheDirectory = Storage::cachesStoragesPath();
        Storage\FileSystem::makeDirectory(self::$cacheDirectory);

        self::observe();
    }

    /**
     * @throws Exceptions\RuntimeException
     */
    private static function observe(): void
    {

        if (!file_exists(self::$cacheDirectory)) {
            Storage\FileSystem::makeDirectory(self::$cacheDirectory);
        }

        if (count(self::$observation)>0) {
            foreach (self::$observation as $item) {
                $fullName = Inflect::replace($item, ROOT_IDENTITY, RUNTIME_ROOT_PATH);
                $fullName = Inflect::replace($fullName, '/', DS);

                if (file_exists($fullName)) {
                    if (is_dir($fullName)) {
                        $willBe = self::directive(Inflect::replace($fullName, RUNTIME_ROOT_PATH));

                        if (!file_exists($willBe)) {
                            Storage\FileSystem::makeDirectory($willBe);
                        }

                        foreach (Storage::globRecursive($fullName) as $filename) {
                            self::process($filename);
                        }
                    }

                    if (is_file($fullName)) {
                        if (file_exists(self::file(Inflect::replace($fullName, RUNTIME_ROOT_PATH)))) {
                            self::process($fullName);
                        } else {
                            self::make($fullName);
                        }
                    }
                } else {
                    self::restore(Inflect::replace($fullName, RUNTIME_ROOT_PATH));
                }
            }
        }
    }

    /**
     * @throws Exceptions\RuntimeException
     */
    private static function process(string $resourceName): void
    {
        $properties = self::readProperties();
        if (in_array($resourceName, $properties, true)) {
            if (Storage\FileSystem::lastModifiedAt($resourceName) > $properties[$resourceName]['lastModified']) {
                self::make($resourceName);
            }
        } else {
            self::make($resourceName);
        }
    }

    /**
     * @return string
     */
    private static function propertyFile():string
    {
        return self::dFile(self::configDataFile('Cache', 'properties'));
    }

    /**
     * @throws Exceptions\RuntimeException
     */
    private static function readProperties():array
    {
        if (file_exists(self::propertyFile())) {
            return Storage\FileSystem\Yaml::parseFile(self::propertyFile());
        }

        Storage\FileSystem\Yaml::emitFile(self::propertyFile(), []);
        return [];
    }

    /**
     * @throws Exceptions\RuntimeException
     */
    private static function make(string $resource):void
    {
        $willBe = self::file(Inflect::replace($resource, RUNTIME_ROOT_PATH));

        Storage\FileSystem::makeDirectory(dirname(self::propertyFile()));
        Storage\FileSystem::makeDirectory(dirname($willBe));
        Storage\FileSystem::copy($resource, $willBe);

        $properties = self::readProperties();
        $properties[Inflect::replace($resource, RUNTIME_ROOT_PATH)] = Storage\FileSystem::lastModifiedAt($resource);
        Storage\FileSystem\Yaml::emitFile(self::propertyFile(), $properties);
    }

    private static function restore(string $keyword):void
    {
        $cacheFile  = self::file($keyword);
        $originalFile  = RUNTIME_ROOT_PATH.$keyword;

        if (file_exists($cacheFile)) {
            if (is_dir($cacheFile)) {
                foreach (Storage::globRecursive($cacheFile) as $filename) {
                    Storage\FileSystem::copy($filename, RUNTIME_ROOT_PATH.$filename);
                    Storage\FileSystem::copy(
                        $filename,
                        Inflect::replace($filename, Storage::cachesStoragesPath(), RUNTIME_ROOT_PATH)
                    );
                }
            }
            if (is_file($cacheFile)) {
                Storage\FileSystem::copy($cacheFile, $originalFile);
            }
        }
    }


    /**
     * @param string $filename
     * @return string
     */
    private static function originalFile(string $filename):string
    {
        return sprintf('%s%s', RUNTIME_ROOT_PATH /*. 'public_html'*/, $filename);
    }

    /**
     * @param string $directive
     * @return string
     */
    public static function directive(string $directive):string
    {
        return sprintf(
            '%1$s%2$s',
            Storage::cachesStoragesPath(),
            $directive
        );
    }

    /**
     * @param string $filename
     * @return string
     */
    public static function file(string $filename):string
    {
        return sprintf(
            '%1$s%2$s.cache',
            Storage::cachesStoragesPath(),
            $filename
        );
    }

    /**
     * @param string $directive
     * @param string $filename
     * @return string
     */
    public static function directiveDataFile(string $directive, string $filename):string
    {
        return sprintf(
            '%1$s%3$s%2$s',
            self::directive($directive),
            $filename,
            DS
        );
    }
}
