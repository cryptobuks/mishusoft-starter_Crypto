<?php


namespace Mishusoft\Framework\Chipsets\Cryptography;


class Base64
{


    /**
     * @param string $data
     * @return string
     */
    public static function encode(string $data): string
    {
        return rtrim(
            strtr(base64_encode($data), '+/', '-_'),
            '=');

    }//end url_encode()


    /**
     * @param string $data
     * @return boolean|string
     */
    public static function decode(string $data): bool|string
    {
        return base64_decode(
            str_pad(strtr($data, '-_', '+/'),
            (strlen($data) % 4),
            '=',
            STR_PAD_RIGHT)
        );

    }//end url_decode()


}//end class
