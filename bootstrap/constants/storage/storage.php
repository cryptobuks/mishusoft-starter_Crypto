<?php

    /**
     * The loader of storage constants for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    (static function ($rootDirectory): void {
        // definitions for sources associate path
        define("RUNTIME_SOURCES_PATH", sprintf('%1$s%2$s%4$s%3$s%4$s', $rootDirectory, "sources", 'mishusoft-company', DS));
        define("SRC_FRAMEWORK_PATH", sprintf('%1$s%2$s%3$s', RUNTIME_SOURCES_PATH, "Framework", DS));

        // definitions for other path
        define("FRAMEWORK_PATH", sprintf('%1$s%2$s%3$s', $rootDirectory, "Framework", DS));
        define("RUNTIME_PUBLIC_PATH", sprintf('%1$s%2$s%3$s', $rootDirectory, "public_html", DS));

        //definitions for temp directory
        define("APPLICATION_SYSTEM_TEMP_PATH", sprintf('%1$s%2$s%3$s', $rootDirectory, "tmp", DS));
        define("RUNTIME_CACHE_ROOT_PATH", sprintf('%1$s%2$s%4$s%3$s%4$s', $rootDirectory, "tmp", md5($_SERVER["PHP_SELF"]), DS));

        // definition for web path
        define("RESOURCE_WEB_PATH", 'resource/');

        // definitions for file type
        define("DEFAULT_FILE_TYPE", 'msf');
        define("DEFAULT_IMAGE_MIME_TYPE", 'image/png');

        // allowed image file types
        define("ALLOWED_FILE_FORMAT", ["png", "svg", "webp"]);
    })(
        defined('RUNTIME_ROOT_PATH') ? RUNTIME_ROOT_PATH : dirname(__DIR__, 3)
    );

