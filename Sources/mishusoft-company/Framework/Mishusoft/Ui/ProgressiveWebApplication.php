<?php

namespace Mishusoft\Ui;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Storage;

class ProgressiveWebApplication
{

    public const FORMAT = 'webmanifest';
    public const FORMAT_FALLBACK = 'json';

    private static string $manifestFile = 'app.' . self::FORMAT;
    private static string $fullName = '';
    private static string $shortName = '';
    private static string $startUrl = '';
    private static string $background = '#3367D6';
    private static string $theme = '#006194';
    private static string $description = '';


    /**
     * @throws RuntimeException
     * @throws AddressNotFoundException
     * @throws PermissionRequiredException
     * @throws JsonException
     * @throws InvalidDatabaseException
     * @throws \JsonException
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws HttpResponseException
     * @throws NotFoundException
     */
    public static function loadManifestFile(): string
    {
        if (!file_exists(self::manifestFile())) {
            static::makeManifestFile();
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
     * @throws AddressNotFoundException
     * @throws ErrorException
     * @throws HttpResponseException
     * @throws InvalidArgumentException
     * @throws InvalidDatabaseException
     * @throws JsonException
     * @throws NotFoundException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \JsonException
     */
    private static function makeManifestFile(): void
    {
        Storage\FileSystem::write(self::manifestFile(), [
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
