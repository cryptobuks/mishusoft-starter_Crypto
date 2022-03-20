<?php

/**
 * The loader of storage functions for mishusoft application
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
 * Resolve directory path if not exists
 *
 * @param string $directory
 * @param int    $permissions
 * @param bool   $recursive
 *
 * @return string
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function resolveDirectory(string $directory, int $permissions = 0777, bool $recursive = true): string
{
    if ((file_exists($directory) === false) && mkdir($directory, $permissions, $recursive) === false && is_dir($directory) === false) {
        throw new Mishusoft\Exceptions\RuntimeException(sprintf('Directory "%s" was not created', $directory));
    }
    
    // return valid directory path
    return $directory;
}
