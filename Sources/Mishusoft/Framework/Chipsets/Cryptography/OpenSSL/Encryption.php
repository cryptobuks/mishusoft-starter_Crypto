<?php

namespace Mishusoft\Framework\Chipsets\Cryptography\OpenSSL;


use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL;

class Encryption extends OpenSSL
{


    /**
     * @param  integer $digit
     * @return string
     */
    public static function password(int $digit): string
    {
        // $data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:"|",./<>?';
        return substr(str_shuffle(self::$alphanumerics), 0, $digit);

    }//end password()


    /**
     * @param  string $data
     * @param  string $type
     * @return string
     */
    public static function dynamic(string $data, string $type='advanced'): string
    {
        if ($type === 'classic') {
            // Remove the base64 encoding from our key
            $encryption_key = base64_decode(self::$encryption_key_256bit);
            // Generate an initialization vector
            $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length(self::$cipherAlgo1));
            // Encrypt the data using AES 256 encryption in CBC mode using our encryption key and initialization vector.
            $encrypted = openssl_encrypt($data, self::$cipherAlgo1, $encryption_key, 0, $iv);
            // The $iv is just as important as the key for decrypting, so save it with our encrypted data
            return base64_encode($encrypted.':'.self::$waterMark.':'.$iv);
        } else {
            // Generate an initialization vector
            $initialization_vector = openssl_random_pseudo_bytes(openssl_cipher_iv_length(self::$cipherAlgo1));
            // Encrypt the data using AES 256 encryption in CBC mode using our encryption key and initialization vector.
            return openssl_encrypt($data, self::$cipherAlgo1, base64_decode(self::$encryption_key_256bit), 0, $initialization_vector);
        }

    }//end dynamic()


    /**
     * @param  string $data
     * @return string
     */
    public static function static(string $data): string
    {
        // you may change these values to your own
        /*
            $secret_key = 'my_simple_secret_key';*/
        // $secret_iv = 'my_simple_secret_iv';
        // $encrypt_method = 'AES-256-CBC';
        $key = hash(self::$cipherAlgo2, HASH_KEY);
        $iv  = substr(hash(self::$cipherAlgo2, self::$secretIv), 0, 16);
        return base64_encode(openssl_encrypt($data, self::$cipherAlgo1, $key, 0, $iv));

    }//end static()


}//end class
