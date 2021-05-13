<?php


namespace Mishusoft\Framework\Chipsets\Utility;

class _JSON
{
    /**
     * @param array $array
     * @return string
     */
    public static function encode_to_string(array $array): string
    {
        return json_encode($array);
    }
    /**
     * @param array $array
     * @return string
     */
    public static function encode_to_object(array $array): string
    {
        return self::decode_to_object(self::encode_to_string($array));
    }
    /**
     * Json string to object converting
     * <code>
     * return json_decode($string);
     * </code>
     * @param string $string
     * @return string
     */
    public static function decode_to_object(string $string): string
    {
        return json_decode($string);
    }

    /**
     * Json string to array converting
     * <code>
     * return json_decode($string,true);
     * </code>
     * @param string $string
     * @return array
     */
    public static function decode_to_array(string $string):array
    {
        return json_decode($string,true);
    }

}