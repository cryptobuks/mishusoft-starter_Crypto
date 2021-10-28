<?php

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
 * Load Data.
 *
 * @param string $carrier Carrier name of data loader.
 * @param string[] $options Options of data loader.
 *
 * @return mixed[]|object Return array or object by called, default object return
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function data(string $carrier = "memory", array $options = [])
{
    return Mishusoft\System\Memory::data($carrier, $options);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function preload(string $type, string $href): void
{
    $allowed = ["image", "style", "script"];
    if (!in_array($type, $allowed, true)) {
        throw new \Mishusoft\Exceptions\RuntimeException(
            sprintf('%1$s type not allowed', $type)
        );
    }
    Mishusoft\Ui::element(Mishusoft\Ui::getDocumentHeadElement(), "link", [
        "rel" => "preload",
        "as" => $type,
        "href" =>
            $type === "image"
                ? media_path($href, true)
                : asset_path($href, true),
    ]);
}

/**
 * Get uri
 *
 * @param string $target Relative link for generate absolute uri
 *
 * @return string
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function uri(string $target): string
{
    return Mishusoft\Http\Runtime::link($target);
}

/**
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function redirect(string $url): void
{
    uri($url);
}
