<?php

namespace Mishusoft\Ui;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Storage;

class ProgressiveWebApplication
{

    public const FORMAT = 'webmanifest';
    public const FORMAT_FALLBACK = 'json';

    private static string $manifestFile = 'app.' . self::FORMAT;
    private static string $fullName = 'Mishusoft Systems Incorporated PWA';
    private static string $shortName = 'Mishusoft App';
    private static string $startUrl = '';
    private static string $background = '#3367D6';
    private static string $theme = '#006194';
    private static string $description = '';


    /**
     * @return string
     * @throws NotFoundException
     * @throws RuntimeException
     */
    public static function loadManifestFile(): string
    {
        if (!file_exists(self::manifestFile())) {
            if (is_bool(static::makeManifestFile())) {
                throw new RuntimeException('Progressive Web Application creating failed');
            }
        }

        return Storage::makeDataUri(self::manifestFile());
    }

    /**
     * @return string
     */
    private static function manifestFile(): string
    {
        return Storage::assetsPath().static::$manifestFile;
    }

    /**
     * @throws NotFoundException
     */
    private static function makeManifestFile(): bool|int
    {
        return Storage\FileSystem::write(self::manifestFile(), [
            'name' => !empty(static::$fullName) ? static::$shortName : DEFAULT_APP_NAME,
            'short_name' => !empty(static::$shortName) ? static::$shortName : DEFAULT_APP_NAME,
            'description' => !empty(static::$description) ? static::$description : DEFAULT_APP_DESCRIPTIONS,
            'start_url' => static::startUrl(),
            'background_color' => static::$background,
            'theme_color'=> static::$theme,
            'display' => 'standalone',
            'scope'=> static::scopeUrl(),
            'icons'=> Storage::assignableWebFavicons(true),
        ]);
    }

    public static function startUrl(): string
    {
        if (!empty(static::$startUrl)) {
            return static::$startUrl;
        }

        return self::scopeUrl() . '?source=pwa';
    }

    private static function scopeUrl()
    {
        if (str_ends_with(BASE_URL, '/')) {
            return BASE_URL;
        }
        return BASE_URL . '/';
    }
}
