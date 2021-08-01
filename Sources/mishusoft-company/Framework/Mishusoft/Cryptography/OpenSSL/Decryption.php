<?php

namespace Mishusoft\Cryptography\OpenSSL;

use Mishusoft\Cryptography\OpenSSL;
use RuntimeException;

class Decryption extends OpenSSL
{
    /**
     * Create dynamic decrypt string.
     *
     * @param string $data Encrypted string.
     * @param string $type Command type, default is advanced.
     *
     * @return string Return decrypted string.
     * @throws RuntimeException \Throwable Exception.
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function dynamic(string $data, string $type = 'advanced'): string
    {
        $result = '';
        if ($type === 'classic') {
            // Remove the base64 encoding from our key.
            $encryptionKey = base64_decode(self::$encryptionKey256bit);
            // To decrypt, split the encrypted data from our IV - our unique separator used was ":DEFAULT_APP_NAME:".
            [
                $encryptedData,
                $iv,
            ]       = explode(':'.self::$waterMark.':', base64_decode($data), 2);
            $result = openssl_decrypt($encryptedData, self::$cipherAlgo1, $encryptionKey, 0, $iv);
        }

        if ($type === 'advanced') {
            // Generate an initialization vector.
            $cipherLength = openssl_cipher_iv_length(self::$cipherAlgo1);
            if (is_int($cipherLength) === true) {
                $random = openssl_random_pseudo_bytes($cipherLength, $isSourceStrong);
                if (false === $isSourceStrong || false === $random) {
                    throw new RuntimeException('IV generation failed');
                } else {
                    // Encrypt the data using AES 256 encryption in CBC mode,
                    // using our encryption key and initialization vector.
                    $result = openssl_encrypt(
                        $data,
                        self::$cipherAlgo1,
                        base64_decode(self::$encryptionKey256bit),
                        0,
                        $random
                    );
                }
            } else {
                throw new \Mishusoft\Exceptions\RuntimeException(
                    'Non-cryptographically strong algorithm used for iv generation.'
                );
            }//end if
        }//end if

        return $result;
    }//end dynamic()


    /**
     * Decrypt static string.
     *
     * @param  string $data Static string.
     * @return string Result.
     */
    public static function static(string $data): string
    {
        // you may change these values to your own
        /*
         * $secret_key = 'my_simple_secret_key';
        */
        // $secret_iv = 'my_simple_secret_iv';
        // $encrypt_method = 'AES-256-CBC';
        $key = hash(self::$cipherAlgo2, HASH_KEY);
        // $iv  = substr(hash(self::$cipherAlgo2, self::$secretIv), 0, 16);

        return openssl_decrypt(
            base64_decode($data),
            self::$cipherAlgo1,
            $key,
            0,
            self::getStaticNumber()
        );
    }//end static()
}//end class
