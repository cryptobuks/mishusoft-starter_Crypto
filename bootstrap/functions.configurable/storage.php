<?php

/**
 * The global storage functions for mishusoft application
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://mishusoft.com
 */

/**
 * @return string
 */
function logos_path_default(): string
{
    return Mishusoft\Storage::logosDefaultPath();
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 * @return bool|string
 */
function read_asset(string $path)
{
    return Mishusoft\Storage\FileSystem::readAssets($path);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 * @return bool|string
 */
function read_asset_framework(string $path)
{
    return Mishusoft\Storage\FileSystem::readFrameworkAssets($path);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function asset_framework(string $path, bool $isRemote = false): string
{
    $feature = $isRemote ? "remote" : "local";
    return Mishusoft\Storage::fViewsFullPath($path, $feature);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function asset_path(string $path, bool $isRemote = false): string
{
    $feature = $isRemote ? "remote" : "local";
    return Mishusoft\Storage::assetsFullPath($path, $feature);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function media_path(string $path, bool $isRemote = false): string
{
    $feature = $isRemote ? "remote" : "local";
    return Mishusoft\Storage::mediaFullPath($path, $feature);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function logos_path(string $path, bool $isRemote = false): string
{
    $feature = $isRemote ? "remote" : "local";
    return Mishusoft\Storage::logoFullPath($path, $feature);
}

/**
 * @throws \Mishusoft\Exceptions\PermissionRequiredException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
 */
function stream_file(string $path): void
{
    Mishusoft\Storage\Stream::file($path);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function preload(string $type, string $href, string $env = "app"): void
{
    $allowed = ["image", "style", "script"];
    if (!in_array($type, $allowed, true)) {
        throw new \Mishusoft\Exceptions\RuntimeException(sprintf('%1$s type not allowed', $type));
    }

    if ($env === "framework") {
        Mishusoft\Ui::element(Mishusoft\Ui::getDocumentHeadElement(), "link", [
            "rel" => "preload",
            "as" => $type,
            "href" => asset_framework($href, true),
        ]);
    } else {
        Mishusoft\Ui::element(Mishusoft\Ui::getDocumentHeadElement(), "link", [
            "rel" => "preload",
            "as" => $type,
            "href" => $type === "image" ? media_path($href, true) : asset_path($href, true),
        ]);
    }
}
