<?php declare(strict_types=1);


namespace Mishusoft\Cryptography;

class Base64
{


    /**
     * @param  string $data
     * @return string
     */
    public static function encode(string $data): string
    {
        return rtrim(
            strtr(base64_encode($data), '+/', '-_'),
            '='
        );
    }//end encode()


    /**
     * @param  string $data
     * @return boolean|string
     */
    public static function decode(string $data): bool|string
    {
        return base64_decode(
            str_pad(
                strtr($data, '-_', '+/'),
                (strlen($data) % 4),
                '=',
                STR_PAD_RIGHT
            )
        );
    }//end decode()


    /**
     * @param  string $string
     * @return boolean|string
     */
    public static function justEncode(string $string): bool|string
    {
        return base64_encode($string);
    }//end justEncode()


    /**
     * @param  string $string
     * @return boolean|string
     */
    public static function justDecode(string $string): bool|string
    {
        return base64_decode($string);
    }//end justDecode()
}//end class
