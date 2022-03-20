<?php

/**
 * The loader of global function for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */

(static function (string $directory) {
    // Load required file
    require_once __DIR__ . '/core/fn.loader.php';

    // Query all files from specific location
    $autoloadFiles = query($directory);

    array_map(static function (string $currentFile) {
        if (is_file($currentFile)) {
            require_once $currentFile;
        }
    }, $autoloadFiles);
})(__DIR__ . '/functions/');
