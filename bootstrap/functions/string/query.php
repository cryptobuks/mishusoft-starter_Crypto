<?php

/**
 * The loader of query functions for mishusoft application
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
 * Find the position of the first occurrence of a substring in a string
 * @link https://php.net/manual/en/function.strpos.php
 * @param string $haystack
 * @param mixed $needle
 * @param int $offset [optional]
 * @return int|false
 */
function position(string $haystack, mixed $needle, int $offset = 0): int|false
{
    return strpos($haystack, $needle, $offset);
}


/**
 * @see  https://www.php.net/manual/en/function.strrpos.php Passing an int as needle is no longer supported.
 * @param string $haystack
 * @param string $needle
 * @return bool
 */
function contains(string $haystack, string $needle): bool
{
    return '' === $needle || false !== strpos($haystack, $needle);
}

/**
 * @param string $haystack
 * @param string $needle
 * @return bool
 */
function startsWith(string $haystack, string $needle): bool
{
    return 0 === strncmp($haystack, $needle, strlen($needle));
}

/**
 * @param string $haystack
 * @param string $needle
 * @return bool
 */
function endsWith(string $haystack, string $needle): bool
{
    return '' === $needle || ('' !== $haystack && 0 === substr_compare($haystack, $needle, -strlen($needle)));
}

/**
 * @param string $filename
 * @param string $needle
 * @return string
 */
function original(string $filename, string $needle = '\\'): string
{
    $path = explode($needle, $filename);
    return array_pop($path);
}

/**
 * @param string $haystack
 * @param string $needle
 * @param int $offset
 * @return bool|int
 */
function search(string $haystack, string $needle, int $offset = 0): bool|int
{
    return strpos($haystack, $needle);
}
