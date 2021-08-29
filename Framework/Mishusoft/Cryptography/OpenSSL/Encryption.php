<?php

namespace Mishusoft\Cryptography\OpenSSL;

use Mishusoft\Cryptography\OpenSSL;

class Encryption extends OpenSSL
{
    /**
     * Generate random string.
     *
     * @param  integer $digit Length of string.
     * @return string Generated string.
     */
    public static function password(int $digit): string
    {
        // $data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:"|",./<>?';
        return substr(
            str_shuffle(self::$alphanumerics),
            0,
            $digit
        );
    }//end password()


    /**
     * Encrypt data dynamically.
     *
     * @param string $data String for encryption.
     * @param string $type Action filter.
     * @return string Encrypted string.
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function dynamic(string $data, string $type = 'advanced'): string
    {
        $result = '';

        if ($type === 'classic') {
            // Encrypt the data using AES 256 encryption in CBC mode,
            // using our encryption key and initialization vector.
            $encrypted = openssl_encrypt(
                $data,
                self::$cipherAlgo1,
                self::getDecodedEncryptKey(),
                0,
                self::getRandomNumber()
            );
            // The $random is just as important as the key for decrypting,
            // so save it with our encrypted data.
            $result = base64_encode($encrypted.':'.self::$waterMark.':'.self::getRandomNumber());
        }//end if

        if ($type === 'advanced') {
            // Encrypt the data using AES 256 encryption in CBC mode,
            // using our encryption key and initialization vector.
            $result = openssl_encrypt(
                $data,
                self::$cipherAlgo1,
                base64_decode(self::$encryptionKey256bit),
                0,
                self::getRandomNumber()
            );
        }//end if

        return $result;
    }//end dynamic()


    /**
     * Encrypt data statically.
     *
     * @param string $data String for encryption.
     * @return string Encrypted string.
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function static(string $data): string
    {
        // you may change these values to your own
        // $secret_iv = 'my_simple_secret_iv';
        // $encrypt_method = 'AES-256-CBC';

        // $key = hash(self::$cipherAlgo2, HASH_KEY);
        // $iv  = substr(hash(self::$cipherAlgo2, self::$secretIv), 0, 16);

        return base64_encode(
            openssl_encrypt(
                $data,
                self::$cipherAlgo1,
                hash(self::$cipherAlgo2, HASH_KEY),
                0,
                self::getRandomNumber()
            )
        );
    }//end static()
}//end class
