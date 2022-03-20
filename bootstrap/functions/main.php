<?php

    /**
     * The main loader of function's container for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    /**
     * Get domain list of mishusoft app
     *
     * @return string[]
     */
    function domainList(): array
    {
        return [
            'mishusoft.com',
            'dev.mishusoft.com',
            'www.mishusoft.com',
            'localhost:8080',
            'localhost',
        ];
    }


    /**
     * Get absolute path for resource
     *
     * @param string $root
     * @param string $name
     * @param string $module
     *
     * @return string
     */
    function resourceFilePath(string $root, string $name, string $module = 'framework'): string
    {
        $absoluteRoot = sprintf('%1$s%3$s%2$s%3$s', $root, 'storages', DS);
        $resolvedPath = match ($module) {
            'framework' => sprintf('%1$s%4$s%2$s%4$s%3$s', $absoluteRoot, implode(DS, ['framework', 'views']), $name, DS),
            'assets'    => sprintf('%1$s%4$s%2$s%4$s%3$s', $absoluteRoot, implode(DS, ['app', 'assets']), $name, DS),
            'media'     => sprintf('%1$s%4$s%2$s%4$s%3$s', $absoluteRoot, implode(DS, ['app', 'media']), $name, DS),
            default     => ''
        };

        return fixSlash($resolvedPath);
    }


    /**
     * Generate http link for resource file
     *
     * @param string $module Module name for resource file, Module will be in assets, media, framework or shared
     * @param string $filename
     *
     * @return string
     */
    function loadResourceFile(string $module, string $filename): string
    {
        return sprintf(
            '%1$s%2$s/%3$s',
            addSlash(webDocumentRoot()),
            sprintf('%1$s%2$s', RESOURCE_WEB_PATH, $module),
            $filename
        );
    }

    /**
     * Load embedded image from source
     *
     * @param string $filename
     *
     * @return string
     */
    function loadEmbeddedImage(string $filename): string
    {
        $list = defined('IMAGES') ? IMAGES : [];
        return array_key_exists($filename, $list) ? $list[$filename] : '';
    }


    /**
     * Make data uri from file source
     *
     * @param string $filename
     * @param string $mediaType
     *
     * @return string
     */
    function makeDataUri(string $filename, string $mediaType = DEFAULT_IMAGE_MIME_TYPE): string
    {
        $fileContent = file_get_contents($filename);
        return is_string($fileContent) ? sprintf(
            'data:%s;base64,%s',
            $mediaType,
            base64_encode($fileContent)
        ) : '';
    }


    /**
     * @param string $extension
     *
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    function extInst(string $extension): void
    {
        if (!extension_loaded($extension)) {
            // $directoryPath = RUNTIME_ROOT_PATH . "requirements/";
            // $prefix = PHP_SHLIB_SUFFIX === "dll" ? "php_" : "";
            // dl($directoryPath . $prefix . "sqlite." . PHP_SHLIB_SUFFIX);
            throw new Mishusoft\Exceptions\RuntimeException(sprintf('%1$s extension required', upper($extension)));
        }
    }

    // --setcookie('userAgent', $_SERVER['HTTP_USER_AGENT'], strtotime(date('r') . '+2 days'));
