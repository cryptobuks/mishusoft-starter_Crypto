<?php


namespace Mishusoft\Framework\Chipsets\Utility;


class _String
{
    /**
     * Make a string lowercase
     * @link https://php.net/manual/en/function.strtolower.php
     * @param string $string
     * @return string the lowercased string.
     */
    public static function lower(string $string): string
    {
        return "" !== $string ? strtolower($string) : "";
    }

    /**
     * Make a string uppercase
     * @link https://php.net/manual/en/function.strtoupper.php
     * @param string $string
     * @return string the uppercased string.
     */
    public static function upper(string $string): string
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
    public static function ucfirst(string $string): string
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
    public static function lcfirst(string $string): string
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
    public static function ucwords(string $string, $separators = " \t\r\n\f\v"): string
    {
        return "" !== $string ? ucwords($string, $separators) : "";
    }

    /**
     * Find the position of the first occurrence of a substring in a string
     * @link https://php.net/manual/en/function.strpos.php
     * @param string $haystack
     * @param mixed $needle
     * @param int $offset [optional]
     * @return int|false
     */
    public static function position(string $haystack, $needle, $offset = 0): int
    {
        return strpos($haystack, $needle, $offset);
    }

    /**
     * @param string $contents
     * @return string
     */
    public static function removeTags(string $contents): string
    {
        return "" !== $contents ? trim(strip_tags($contents)) : "";
    }

    public static function strpos(string $needle, string $string): int
    {
        return strpos($string, $needle);
    }

    /**
     * @param $contents
     * @return string
     */
    public static function toHtml(string $contents): string
    {
        return "" !== $contents ? htmlspecialchars($contents, ENT_QUOTES) : "";
    }


    /**
     * @param string $haystack
     * @param string $needle
     * @return bool
     */
    public static function contains(string $haystack, string $needle): bool
    {
        return '' === $needle || false !== strpos($haystack, $needle);
    }

    /**
     * @param string $haystack
     * @param string $needle
     * @return bool
     */
    public static function startsWith(string $haystack, string $needle): bool
    {
        return 0 === strncmp($haystack, $needle, strlen($needle));
    }

    /**
     * @param string $haystack
     * @param string $needle
     * @return bool
     */
    public static function endsWith(string $haystack, string $needle): bool
    {
        return '' === $needle || ('' !== $haystack && 0 === substr_compare($haystack, $needle, -strlen($needle)));
    }

}