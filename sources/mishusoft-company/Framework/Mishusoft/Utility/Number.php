<?php declare(strict_types=1);

namespace Mishusoft\Utility;

class Number
{
    // declare version
    public const VERSION = '1.0.2';


    /**
     * @param  $number
     * @return boolean
     */
    public static function isPrime($number): bool
    {
        if (($number % 2) != 0) {
            return true;
        }

        for ($i = 0; $i < $number; $i++) {
            // A cheap check to see if $i is even
            if (($i & 1) == 0) {
                continue;
            }

            if (($number % $i) == 0) {
                return false;
            }
        }

        return true;

    }//end isPrime()


    /**
     * @param  $number
     * @return false|integer|string
     */
    public static function next($number)
    {
        if (is_numeric($number)) {
            return ($number + 1);
        }

        echo 'Invalid number.';
        return false;

    }//end next()


    /**
     * @param  $number
     * @return false|integer|string
     */
    public static function previous($number)
    {
        if (is_numeric($number)) {
            return ($number - 1);
        }

        echo 'Invalid number.';
        return false;

    }//end previous()


    /**
     * Format a number with grouped thousands
     *
     * @link   https://php.net/manual/en/function.number-format.php
     * @param  float   $number        <p>
     *          The number being formatted.
     *          </p>
     * @param  integer $decimals      [optional] <p>
     *          Sets the number of decimal points.
     *          </p>
     * @param  string  $dec_point     [optional]
     * @param  string  $thousands_sep [optional]
     * @return string A formatted version of number.
     */
    public static function format(float $number, int $decimals, string $dec_point, string $thousands_sep): string
    {
        // english notation without thousands separator
        /*
            number = 1234.5678;
            $english_format_number = number_format($number, 2, '.', '');
            result:: 1234.57
        */
        return number_format($number, $decimals, $dec_point, $thousands_sep);

    }//end format()


    /**
     * @param  integer $int
     * @return integer
     */
    public static function filterInt(int $int): int
    {
        if (is_int($int) === true) {
            return $int;
        }

        return 0;

    }//end filterInt()


    /**
     * @param  $value
     * @param  array $arraylist
     * @return integer|mixed
     */
    public static function getInt($value, array $arraylist): int
    {
        if (isset($arraylist[$value]) && !empty($arraylist[$value])) {
            $arraylist[$value] = filter_input(INPUT_POST, $value, FILTER_VALIDATE_INT);
            return $arraylist[$value];
        }

        return 0;

    }//end getInt()


    function __destruct()
    {

    }//end __destruct()


}//end class
