<?php

//https://stackoverflow.com/questions/9262109/simplest-two-way-encryption-using-php

    declare(strict_types=1);

    namespace Mishusoft\Cryptography;

    use Mishusoft\Exceptions\RuntimeException;

    class OpenSSL
    {
        // Declare version/
        public const VERSION = "3.0.2";

        /**
         * Encryption key 256bit
         *
         * @var string
         */
        protected static string $encryptionKey256bit = "bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU";

        /**
         * Simple secret IV.
         *
         * @var string
         */
        protected static string $secretIv = "my_simple_secret_iv";

        /**
         * Cipher algorithm.
         *
         * @var string
         */
        protected static string $cipherAlgo1 = "aes-256-cbc";

        /**
         * Cipher algorithm
         *
         * @var string
         */
        protected static string $cipherAlgo2 = "sha256";

        /**
         * Framework name.
         *
         * @var string
         */
        protected static string $waterMark = WHO_AM_I;

        /**
         * OpenSSL constructor.
         */
        public function __construct()
        {
            // self::$encryption_key_256bit = base64_encode(openssl_random_pseudo_bytes(32));
        }

        /**
         * Get simple secret IV.
         *
         * @return string
         */
        protected static function getSecretIv(): string
        {
            return self::$secretIv;
        }

        /**
         * Get decoded encrypt key.
         *
         * @return bool|string
         */
        protected static function getDecodedEncryptKey(): bool|string
        {
            // Remove the base64 encoding from our key.
            return base64_decode(self::$encryptionKey256bit);
        }

        /**
         * Generate cipher iv length.
         *
         * @return int Generated cipher iv length.
         * @throws RuntimeException
         */
        protected static function getCipherLength(): int
        {
            // Generate an initialization vector.
            $cipherIvLength = openssl_cipher_iv_length(self::$cipherAlgo1);
            if (is_int($cipherIvLength) === false) {
                throw new RuntimeException(
                    "Non-cryptographically strong algorithm used for iv generation."
                );
            } //end if

            return $cipherIvLength;
        }

        /**
         * Get static number.
         *
         * @return string Static number.
         */
        protected static function getStaticNumber(): string
        {
            return substr(hash(self::$cipherAlgo2, self::$secretIv), 0, 16);
        }
    }
