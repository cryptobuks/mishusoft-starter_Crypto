<?php

/**
 * The loader of text transform functions for mishusoft application
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
 * Make a string lowercase
 * @link https://php.net/manual/en/function.strtolower.php
 * @param string $string
 * @return string the lowercased string.
 */
function lower(string $string): string
{
    return "" !== $string ? strtolower($string) : "";
}

/**
 * Make a string uppercase
 * @link https://php.net/manual/en/function.strtoupper.php
 * @param string $string
 * @return string the uppercased string.
 */
function upper(string $string): string
{
    return "" !== $string ? strtoupper($string) : "";
}


/**
 * Make a string's first character uppercase
 * @link https://php.net/manual/en/function.ucfirst.php
 * @param string $string <p>
 * The input string.
 * </p>
 * @return string the resulting string.
 */
function uc_first(string $string): string
{
    return "" !== $string ? ucfirst($string) : "";
}

/**
 * Make a string's first character lowercase
 * @link https://php.net/manual/en/function.lcfirst.php
 * @param string $string <p>
 * The input string.
 * </p>
 * @return string the resulting string.
 */
function lc_first(string $string): string
{
    return "" !== $string ? lcfirst($string) : "";
}

/**
 * Uppercase the first character of each word in a string
 * @link https://php.net/manual/en/function.ucwords.php
 * @param string $string <p>
 * The input string.
 * </p>
 * @param string $separators [optional] <p>
 * @return string the modified string.
 */
function uc_words(string $string, $separators = " \t\r\n\f\v"): string
{
    return "" !== $string ? ucwords($string, $separators) : "";
}