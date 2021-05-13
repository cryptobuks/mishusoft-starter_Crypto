<?php

namespace Mishusoft\Framework\Chipsets\Cryptography\OpenSSL;

use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL;

class Decryption extends OpenSSL
{
    /**
     * @param string $data
     * @param string $type
     * @return string
     */
    public static function dynamic(string $data, string $type = "advanced"): string
    {
        if ($type === "classic"){
            // Remove the base64 encoding from our key
            $encryption_key = base64_decode(self::$encryption_key_256bit);
            // To decrypt, split the encrypted data from our IV - our unique separator used was ":DEFAULT_APP_NAME:"
            list($encrypted_data, $iv) = explode(':' . self::$waterMark . ':', base64_decode($data), 2);
            return openssl_decrypt($encrypted_data, self::$cipherAlgo1, $encryption_key, 0, $iv);
        } else {
            // Generate an initialization vector
            $initialization_vector = openssl_random_pseudo_bytes(openssl_cipher_iv_length(self::$cipherAlgo1));
            // Encrypt the data using AES 256 encryption in CBC mode using our encryption key and initialization vector.
            return openssl_encrypt($data, self::$cipherAlgo1, base64_decode(self::$encryption_key_256bit), 0, $initialization_vector);
        }
    }


    /**
     * @param string $data
     * @return string
     */
    public static function static(string $data): string
    {
        // you may change these values to your own
        /*$secret_key = 'my_simple_secret_key';*/
        //$secret_iv = 'my_simple_secret_iv';

        //$encrypt_method = 'AES-256-CBC';
        $key = hash(self::$cipherAlgo2, HASH_KEY);
        $iv = substr(hash(self::$cipherAlgo2, self::$secretIv), 0, 16);

        return openssl_decrypt(base64_decode($data), self::$cipherAlgo1, $key, 0, $iv);
    }

}