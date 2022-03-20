<?php

    /**
     * The loader of cryptography functions for mishusoft application
     *
     * Php version 8.0
     *
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     * @category Loader
     */

    declare(strict_types=1);

    /**
     * Get randomly generated encrypted code
     *
     * @param int $length
     *
     * @return string
     * @throws \Exception
     */
    function get_random_salt(int $length = 32): string
    {
        if ($length <= 8) {
            $length = 32;
        }
        if (function_exists('random_bytes')) {
            return bin2hex(random_bytes($length));
        }
        if (function_exists('openssl_random_pseudo_bytes')) {
            $result = openssl_random_pseudo_bytes($length, $isSecure);
            if ($result !== false && $isSecure !== false) {
                return bin2hex($result);
            }
        }
        return '';
    }

    /**
     * Generate random string.
     *
     * @param int $length Length of string.
     *
     * @return string Generated string.
     */
    function get_random_password(int $length): string
    {
        // $data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:"|",./<>?';
        return substr(str_shuffle(get_alpha_numerics()), 0, $length);
    }

    /**
     * @return string
     */
    function get_alpha_numerics(): string
    {
        return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:|,./<>?';
    }

    /**
     * Get encoded random salt
     *
     * @return string
     * @throws \Exception
     */
    function get_encoded_salt(): string
    {
        return substr(str_replace('+', '.', base64_encode(hex2bin(get_random_salt(32)))), 0, 44);
    }

    //    echo(get_random_salt());
    //    echo "\n";
    //    echo(get_random_salt(10));
    //    echo "\n";
    //    echo get_encoded_salt();
    //    echo "\n";
