<?php

namespace Mishusoft\Framework\Chipsets\Cryptography;

use Mishusoft\Framework\Chipsets\Framework;

class OpenSSL
{
    /*declare version*/
    const VERSION = "3.0.2";

    protected static string $encryption_key_256bit = "bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU";
    protected static string $secretIv = "my_simple_secret_iv";
    protected static string $alphanumerics = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:"|",./<>?";
    protected static string $cipherAlgo1 = "aes-256-cbc";
    protected static string $cipherAlgo2 = "sha256";
    protected static string $waterMark = Framework::NAME;

    public function __construct()
    {
         //self::$encryption_key_256bit = "bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU";
        /*self::$encryption_key_256bit = base64_encode(openssl_random_pseudo_bytes(32));*/
    }

    /**
     * @param int $digit
     * @return false|string
     */
    public static function RandomPassword(int $digit)
    {
        $data = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:"|",./<>?";
        return substr(str_shuffle(self::$alphanumerics), 0, $digit);
    }

}