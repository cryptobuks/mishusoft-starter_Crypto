<?php

    namespace Mishusoft\System;

    use Mishusoft\Singleton;

    abstract class Base extends Singleton implements BaseInterface
    {


        //Basic functionalities

        /**
         * @param string $string
         *
         * @return string
         */
        public static function hidePath(string $string): string
        {
            return str_replace(RUNTIME_ROOT_PATH, ROOT_IDENTITY, $string);
        }


        protected static function frameworkDataPath(): string
        {
            return sprintf('%1$s%2$s%4$s%3$s%4$s', self::rootPath(), "storages", "framework", DS);
        }

        //End basic functionalities

        //Path making functionalities

        /**
         * @return string
         */
        public static function rootPath(): string
        {
            return RUNTIME_ROOT_PATH;
        }

        /**
         * @return string
         */
        public static function cssAssetsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::assetsPath(), "css", DS);
        }

        /**
         * @return string
         */
        public static function assetsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::appStoragesPath(), "assets", DS);
        }

        /**
         * @return string
         */
        public static function appStoragesPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::storagesPath(), "app", DS);
        }

        /**
         * @return string
         */
        public static function storagesPath(): string
        {
            return sprintf('%1$s%2$s%3$s', RUNTIME_ROOT_PATH, "storages", DS);
        }

        /**
         * @return string
         */
        public static function jsAssetsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::assetsPath(), "js", DS);
        }

        /**
         * @return string
         */
        public static function webfontsAssetsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::assetsPath(), "webfonts", DS);
        }

        /**
         * @return string
         */
        public static function localizationPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::appStoragesPath(), "localization", DS);
        }

        /**
         * @return string
         */
        public static function imagesPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::mediaPath(), "images", DS);
        }

        /**
         * @return string
         */
        public static function mediaPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::appStoragesPath(), "media", DS);
        }

        /**
         * @return string
         */
        public static function frameworkStoragesPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::storagesPath(), "framework", DS);
        }

        /**
         * @param bool $isRemote
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function logosDefaultPath(bool $isRemote = false): string
        {
            return sprintf('%1$s%2$s', self::logosPath($isRemote), "default/");
        }

        /**
         * @param bool $isRemote
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function logosPath(bool $isRemote = false): string
        {
            if ($isRemote) {
                return sprintf('%1$s%2$s', Memory::getOption("host.url", "framework"), "media/logos/");
            }
            return sprintf('%1$s%2$s%3$s', self::mediaPath(), "logos", DS);
        }

        /**
         * @return string
         */
        public static function uploadsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::mediaPath(), "uploads", DS);
        }


        /**
         * @param string $path
         * @param string $extension
         *
         * @return string
         */
        protected static function dFile(string $path, string $extension = "msf"): string
        {
            return sprintf("%s.%s", $path, $extension);
        }

        /**
         * @param string $directive
         *
         * @return string
         */
        protected static function logDirective(string $directive): string
        {
            return sprintf('%1$s%2$s%4$s%3$s%4$s', self::frameworkDataPath(), "logs", $directive, DS);
        }

        /**
         * @param string $directive
         * @param string $filename
         *
         * @return string
         */
        protected static function cacheDataFile(string $directive, string $filename): string
        {
            return sprintf('%1$s%2$s%5$s%3$s%5$s%4$s', self::frameworkDataPath(), "caches", $directive, $filename, DS);
        }

        /**
         * @param string $directive
         * @param string $filename
         *
         * @return string
         */
        protected static function requiredDataFile(string $directive, string $filename): string
        {
            return sprintf('%1$s%2$s%5$s%3$s%5$s%4$s', self::frameworkDataPath(), "data-drive", $directive, $filename, DS);
        }

        /**
         * @param string $directive
         * @param string $filename
         *
         * @return string
         */
        protected static function logDataFile(string $directive, string $filename): string
        {
            return fixSlash(sprintf('%1$s%2$s%5$s%3$s%5$s%4$s', self::frameworkDataPath(), "logs", $directive, $filename, DS), 'dir');
        }
    }
