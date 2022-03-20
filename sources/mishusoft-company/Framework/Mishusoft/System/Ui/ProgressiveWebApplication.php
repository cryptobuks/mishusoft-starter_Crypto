<?php

    namespace Mishusoft\System\Ui;

    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Exceptions\RuntimeException\NotFoundException;
    use Mishusoft\Storage;
    use Mishusoft\System\Framework;
    use Mishusoft\System\Ui;

    class ProgressiveWebApplication
    {
        public const FORMAT          = 'webmanifest';
        public const FORMAT_FALLBACK = 'json';

        private static string $manifestFile = 'app.' . self::FORMAT_FALLBACK;
        private static string $fullName     = 'Mishusoft Systems Incorporated PWA';
        private static string $shortName    = 'Mishusoft App';
        private static string $startUrl     = '';
        private static string $background   = '#3367D6';
        private static string $theme        = '#006194';
        private static string $description  = '';

        /**
         * @param string $name
         *
         * @throws NotFoundException
         * @throws RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public static function create(string $name): void
        {
            Ui::elementList(
                Ui::getDocumentHeadElement(),
                [
                    'meta' => [
                        ['name' => 'mobile-web-app-capable', 'content' => 'yes',],
                        ['name' => 'apple-mobile-web-app-capable', 'content' => 'yes',],
                        ['name' => 'application-name', 'content' => $name,],
                        ['name' => 'apple-mobile-web-app-title', 'content' => $name,],
                        ['name' => 'msapplication-starturl', 'content' => self::startUrl(),],
                        ['name' => 'theme-color', 'content' => Framework::COLOR,],
                    ],
                    'link' => [['rel' => 'manifest', 'href' => self::loadManifestFile(),],],
                ]
            );
        }

        public static function addMeta(string $name): void
        {
            Ui::elementList(
                Ui::getDocumentHeadElement(),
                [
                    'meta' => [
                        ['name' => 'mobile-web-app-capable', 'content' => 'yes',],
                        ['name' => 'apple-mobile-web-app-capable', 'content' => 'yes',],
                        ['name' => 'application-name', 'content' => $name,],
                        ['name' => 'apple-mobile-web-app-title', 'content' => $name,],
                        ['name' => 'msapplication-starturl', 'content' => self::startUrl(),],
                        ['name' => 'theme-color', 'content' => Framework::COLOR,],
                    ],
                ]
            );
        }


        /**
         * @param string $view
         *
         * @throws NotFoundException
         * @throws RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public static function addFile(string $view = 'local'): void
        {
            Ui::elementList(Ui::getDocumentHeadElement(), [
                'link' => [['rel' => 'manifest', 'href' => self::loadManifestFile($view),],],
            ]);
        }


        /**
         * @param string $view
         *
         * @return string
         * @throws NotFoundException
         * @throws RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public static function loadManifestFile(string $view = 'local'): string
        {
            if (file_exists(self::manifestFile()) === false) {
                if (self::makeManifestFile() === false) {
                    throw new RuntimeException('Progressive Web Application creating failed');
                }
            }

            return Storage::toDataUri('assets', self::$manifestFile, $view);
        }

        /**
         * @return string
         */
        private static function manifestFile(): string
        {
            return Storage::assetsPath() . self::$manifestFile;
        }

        /**
         * @return false|int
         * @throws NotFoundException
         * @throws RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Exception
         */
        private static function makeManifestFile(): false|int
        {
            return Storage\FileSystem\Any::write(self::manifestFile(), [
                'name'                        => !empty(self::$fullName) ? self::$shortName : WHO_AM_I,
                'short_name'                  => !empty(self::$shortName) ? self::$shortName : WHO_AM_I,
                'description'                 => !empty(self::$description) ? self::$description : WHO_AM_I,
                'start_url'                   => self::startUrl(),
                'background_color'            => self::$background,
                'theme_color'                 => self::$theme,
                'display'                     => 'standalone',
                'scope'                       => self::scopeUrl(),
                'prefer_related_applications' => true,
                "related_applications"        => [],
                'icons'                       => Storage::assignableWebFavicons('framework', true),
            ]);
        }

        public static function startUrl(): string
        {
            if (!empty(self::$startUrl)) {
                return self::$startUrl;
            }

            return self::scopeUrl() . '?source=pwa';
        }

        /**
         * @return string
         */
        private static function scopeUrl(): string
        {
            return webDocumentRoot();
        }
    }
