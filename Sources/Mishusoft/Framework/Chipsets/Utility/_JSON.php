<?php declare(strict_types=1);


namespace Mishusoft\Framework\Chipsets\Utility;

class _JSON
{


    /**
     * @param array $array
     * @return string
     * @throws \JsonException
     */
    public static function encodeToString(array $array): string
    {
        return json_encode($array, JSON_THROW_ON_ERROR);

    }//end encodeToString()


    /**
     * @param  array $array
     * @return string
     */
    public static function encodeToObject(array $array): string
    {
        return self::decodeToObject(self::encodeToString($array));

    }//end encodeToObject()


    /**
     * Json string to object converting
     * <code>
     * return json_decode($string);
     * </code>
     *
     * @param string $string
     * @return string
     * @throws \JsonException
     */
    public static function decodeToObject(string $string): string
    {
        return json_decode($string, true, 512, JSON_THROW_ON_ERROR);

    }//end decodeToObject()


    /**
     * Json string to array converting
     * <code>
     * return json_decode($string,true);
     * </code>
     *
     * @param  string $string
     * @return array
     * @throws \JsonException
     */
    public static function decodeToArray(string $string):array
    {
        return json_decode($string, true, 512, JSON_THROW_ON_ERROR);

    }//end decodeToArray()


}//end class
