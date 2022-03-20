<?php

    namespace Mishusoft\Storage\Path;

    use function frameworkPath;

    use const DS;

    trait Declaration
    {

        /**
         * @return string
         */
        public static function cliCommunicationDirectory(): string
        {
            return self::communicationDirectory() . "Cli" . DS;
        }

        /**
         * @return string
         */
        public static function communicationDirectory(): string
        {
            return self::frameworkPath() . "Mishusoft" . DS . "Communication" . DS;
        }

        /**
         * @return string
         */
        public static function frameworkPath(): string
        {
            return frameworkPath();
        }

        /**
         * @return string
         */
        public static function communicationHttpCoreDirectory(): string
        {
            return self::communicationDirectory() . "Http" . DS;
        }

        /**
         * @return string
         */
        public static function communicationHttpUserDirectory(): string
        {
            return self::applicationDirectivePath() . "HttpAPIRoutes" . DS;
        }

        /**
         * @return string
         */
        public static function applicationDirectivePath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::rootPath(), "app", DS);
        }

        /**
         * @return string
         */
        public static function emaPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::applicationPackagesPath(), "Ema", DS);
        }

        /**
         * @return string
         */
        public static function applicationPackagesPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Packages", DS);
        }

        /**
         * @return string
         */
        public static function applicationViewsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Views", DS);
        }

        /**
         * @return string
         */
        public static function applicationThemesPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Themes", DS);
        }

        /**
         * @return string
         */
        public static function applicationWidgetsPath(): string
        {
            return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Widgets", DS);
        }
    }
