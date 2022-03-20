<?php

    /**
     * The global storage functions for mishusoft application
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    /**
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    function logos_path_default(): string
    {
        return Mishusoft\Storage::logosDefaultPath();
    }

    /**
     * @param string $path
     *
     * @return bool|string
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function read_asset(string $path): bool|string
    {
        return Mishusoft\Storage\FileSystem::readAssets($path);
    }

    /**
     * @param string $path
     *
     * @return bool|string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function read_asset_framework(string $path): bool|string
    {
        return Mishusoft\Storage\FileSystem::readFrameworkAssets($path);
    }

    /**
     * @param string $path
     * @param bool   $isRemote
     *
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function asset_framework(string $path, bool $isRemote = false): string
    {
        $feature = $isRemote ? "remote" : "local";
        return Mishusoft\Storage::fViewsFullPath($path, $feature);
    }

    /**
     * @param string $path
     * @param bool   $isRemote
     *
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function asset_path(string $path, bool $isRemote = false): string
    {
        $feature = $isRemote ? "remote" : "local";
        return Mishusoft\Storage::assetsFullPath($path, $feature);
    }

    /**
     * @param string $path
     * @param bool   $isRemote
     *
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function media_path(string $path, bool $isRemote = false): string
    {
        $feature = $isRemote ? "remote" : "local";
        return Mishusoft\Storage::mediaFullPath($path, $feature);
    }

    /**
     * @param string $path
     * @param bool   $isRemote
     *
     * @return string
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function logos_path(string $path, bool $isRemote = false): string
    {
        $feature = $isRemote ? "remote" : "local";
        return Mishusoft\Storage::logoFullPath($path, $feature);
    }

    /**
     * @param string $type
     * @param string $href
     * @param string $env
     *
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    function preload(string $type, string $href, string $env = "app"): void
    {
        $allowed = ["image", "style", "script"];

        if (!in_array($type, $allowed, true)) {
            throw new \Mishusoft\Exceptions\RuntimeException(sprintf('%1$s type not allowed', $type));
        }

        if ($env === "framework") {
            Mishusoft\System\Ui::element(Mishusoft\System\Ui::getDocumentHeadElement(), "link", [
                "rel"  => "preload",
                "as"   => $type,
                "href" => asset_framework($href, true),
            ]);
        } else {
            Mishusoft\System\Ui::element(Mishusoft\System\Ui::getDocumentHeadElement(), "link", [
                "rel"  => "preload",
                "as"   => $type,
                "href" => $type === "image" ? media_path($href, true) : asset_path($href, true),
            ]);
        }
    }
