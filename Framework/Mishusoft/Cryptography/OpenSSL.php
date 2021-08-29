<?php declare(strict_types=1);

namespace Mishusoft\Cryptography;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Framework;

class OpenSSL
{
    // Declare version/
    public const VERSION = '3.0.2';

    /**
     * Encryption key 256bit
     *
     * @var string
     */
    protected static string $encryptionKey256bit = 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU';

    /**
     * Simple secret IV.
     *
     * @var string
     */
    protected static string $secretIv = 'my_simple_secret_iv';

    /**
     * Letter string.
     *
     * @var string
     */
    protected static string $alphanumerics = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=`~[]{};\:|,./<>?';

    /**
     * Cipher algorithm.
     *
     * @var string
     */
    protected static string $cipherAlgo1 = 'aes-256-cbc';

    /**
     * Cipher algorithm
     *
     * @var string
     */
    protected static string $cipherAlgo2 = 'sha256';

    /**
     * Framework name.
     *
     * @var string
     */
    protected static string $waterMark = Framework::NAME;


    /**
     * OpenSSL constructor.
     */
    public function __construct()
    {
        // self::$encryption_key_256bit = base64_encode(openssl_random_pseudo_bytes(32));
    }//end __construct()


    /**
     * Get simple secret IV.
     *
     * @return string
     */
    protected static function getSecretIv(): string
    {
        return self::$secretIv;
    }//end getSecretIv()


    /**
     * Get decoded encrypt key.
     *
     * @return boolean|string
     */
    protected static function getDecodedEncryptKey(): bool|string
    {
        // Remove the base64 encoding from our key.
        return base64_decode(self::$encryptionKey256bit);
    }//end getDecodedEncryptKey()


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
                'Non-cryptographically strong algorithm used for iv generation.'
            );
        }//end if

        return $cipherIvLength;
    }//end getCipherLength()


    /**
     * Get random pseudo bytes.
     *
     * @return string Generated random bytes.
     * @throws RuntimeException
     */
    protected static function getRandomNumber(): string
    {
        $random = openssl_random_pseudo_bytes(self::getCipherLength(), $isSecure);
        if (false === $random || false === $isSecure) {
            throw new RuntimeException('IV generation failed');
        }//end if

        return $random;
    }//end getRandomNumber()


    /**
     * Get static number.
     *
     * @return string Static number.
     */
    protected static function getStaticNumber(): string
    {
        return substr(hash(self::$cipherAlgo2, self::$secretIv), 0, 16);
    }//end getStaticNumber()
}//end class
