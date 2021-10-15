<?php

namespace Mishusoft\Ui;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Storage;
use Mishusoft\Ui;
use Mishusoft\Utility\Inflect;

class ProgressiveWebApplication
{

    public const FORMAT = 'webmanifest';
    public const FORMAT_FALLBACK = 'json';

    private static string $manifestFile = 'app.' . self::FORMAT_FALLBACK;
    private static string $fullName = 'Mishusoft Systems Incorporated PWA';
    private static string $shortName = 'Mishusoft App';
    private static string $startUrl = '';
    private static string $background = '#3367D6';
    private static string $theme = '#006194';
    private static string $description = '';

    /**
     * @throws NotFoundException
     * @throws RuntimeException
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
                ]
            ]
        );
    }


    /**
     * @throws NotFoundException
     * @throws RuntimeException
     */
    public static function addFile(string $view = 'local'): void
    {
        Ui::elementList(Ui::getDocumentHeadElement(), [
            'link' => [['rel' => 'manifest', 'href' => self::loadManifestFile($view),],],
        ]);
    }


    /**
     * @param string $view
     * @return string
     * @throws NotFoundException
     * @throws RuntimeException
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
     * @throws NotFoundException
     */
    private static function makeManifestFile(): false|int
    {
        return Storage\FileSystem::write(self::manifestFile(), [
            'name'              => !empty(static::$fullName) ? static::$shortName : DEFAULT_APP_NAME,
            'short_name'        => !empty(static::$shortName) ? static::$shortName : DEFAULT_APP_NAME,
            'description'       => !empty(static::$description) ? static::$description : DEFAULT_APP_DESCRIPTIONS,
            'start_url'         => static::startUrl(),
            'background_color'  => static::$background,
            'theme_color'       => static::$theme,
            'display'           => 'standalone',
            'scope'             => static::scopeUrl(),
            'prefer_related_applications'   => true,
            "related_applications"          => [],
            'icons'             => Storage::assignableWebFavicons('framework', true),
        ]);
    }

    public static function startUrl(): string
    {
        if (!empty(static::$startUrl)) {
            return static::$startUrl;
        }

        return self::scopeUrl() . '?source=pwa';
    }

    /**
     * @return string
     */
    private static function scopeUrl(): string
    {
        if (Inflect::endsWith(BASE_URL, '/')) {
            return BASE_URL;
        }
        return BASE_URL . '/';
    }
}
