<?php declare(strict_types=1);


namespace Mishusoft\Utility;

use JsonException;

class JSON
{


    /**
     * Encode array to json string.
     *
     * @param array $array Array contents.
     *
     * @return string   Encoded json string.
     * @throws JsonException Throw exception on json process error.
     */
    public static function encodeToString(array $array): string
    {
        return json_encode($array, JSON_THROW_ON_ERROR);
    }//end encodeToString()


    /**
     * Encode array to json object.
     *
     * @param array $array Array contents.
     *
     * @return object   Decoded json object.
     * @throws JsonException Throw exception on json process error.
     */
    public static function encodeToObject(array $array): object
    {
        return self::decodeToObject(self::encodeToString($array));
    }//end encodeToObject()


    /**
     * Json string to object converting
     * <code>
     * return json_decode($string, false, 512, JSON_THROW_ON_ERROR);
     * </code>
     *
     * @param string $string Encoded json string.
     *
     * @return object   Decoded json object.
     * @throws JsonException Throw exception on json process error.
     */
    public static function decodeToObject(string $string): object
    {
        return json_decode($string, false, 512, JSON_THROW_ON_ERROR);
    }//end decodeToObject()


    /**
     * Json string to array converting
     * <code>
     * return json_decode($string,true);
     * </code>
     *
     * @param string $string Encoded json string.
     *
     * @return array Decoded array data.
     * @throws JsonException Throw exception on json process error.
     */
    public static function decodeToArray(string $string):array
    {
        return json_decode($string, true, 512, JSON_THROW_ON_ERROR);
    }//end decodeToArray()
}//end class
