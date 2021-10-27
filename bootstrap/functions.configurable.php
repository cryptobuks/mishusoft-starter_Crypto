<?php

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function read_asset(string $path): bool|string
{
    return Mishusoft\Storage\FileSystem::readAssets($path);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function read_asset_framework(string $path): bool|string
{
    return Mishusoft\Storage\FileSystem::readFrameworkAssets($path);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function asset_path(string $path, bool $isRemote = false): string
{
    $feature = $isRemote === true ? "remote" : "local";
    return Mishusoft\Storage::assetsFullPath($path, $feature);
}

/**
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function media_path(string $path, bool $isRemote = false): string
{
    $feature = $isRemote === true ? "remote" : "local";
    return Mishusoft\Storage::mediaFullPath($path, $feature);
}

/**
 * Load Data.
 *
 * @param string $carrier Carrier name of data loader.
 * @param string[] $options Options of data loader.
 *
 * @return string[]|object Return array or object by called, default object return
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function data(string $carrier = "memory", array $options = []): array|object
{
    return Mishusoft\System\Memory::data($carrier, $options);
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
