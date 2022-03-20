<?php

    namespace Mishusoft\Cryptography\OpenSSL;

    use Mishusoft\Cryptography\OpenSSL;

    class Encryption extends OpenSSL
    {

        /**
         * Encrypt data dynamically.
         *
         * @param string $data String for encryption.
         * @param string $type Action filter.
         *
         * @return string|false Encrypted string.
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Exception
         */
        public static function dynamic(
            string $data,
            string $type = "advanced"
        ): string|false {
            $result = "";

            if ($type === "classic") {
                // Encrypt the data using AES 256 encryption in CBC mode,
                // using our encryption key and initialization vector.
                $encrypted = openssl_encrypt(
                    $data,
                    self::$cipherAlgo1,
                    self::getDecodedEncryptKey(),
                    0,
                    get_random_salt(self::getCipherLength())
                );
                // The $random is just as important as the key for decrypting,
                // so save it with our encrypted data.
                $result = base64_encode(
                    $encrypted .
                    ":" .
                    self::$waterMark .
                    ":" .
                    get_random_salt(self::getCipherLength())
                );
            } //end if

            if ($type === "advanced") {
                // Encrypt the data using AES 256 encryption in CBC mode,
                // using our encryption key and initialization vector.
                $result = openssl_encrypt(
                    $data,
                    self::$cipherAlgo1,
                    base64_decode(self::$encryptionKey256bit),
                    0,
                    get_random_salt(self::getCipherLength())
                );
            } //end if

            return $result;
        }

        /**
         * Encrypt data statically.
         *
         * @param string $data String for encryption.
         *
         * @return string Encrypted string.
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Exception
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
                    get_random_salt(self::getCipherLength())
                )
            );
        } //end static()
    } //end class
