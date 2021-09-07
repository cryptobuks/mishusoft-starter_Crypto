<?php declare(strict_types=1);


namespace Mishusoft\Utility;

use JsonException;

class JSON
{


    /**
     * Encode array to json string.
     *
     * @param array|object $array $array Array contents.
     *
     * @return string   Encoded json string.
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public static function encodeToString(array|object $array): string
    {
        try {
            return json_encode($array, JSON_THROW_ON_ERROR);
        } catch (JsonException $jsonException) {
            throw new \Mishusoft\Exceptions\JsonException(
                $jsonException->getMessage(),
                $jsonException->getCode(),
                $jsonException->getCode(),
                $jsonException->getFile(),
                $jsonException->getLine()
            );
        }
    }//end encodeToString()


    /**
     * Encode array to json object.
     *
     * @param array $array Array contents.
     *
     * @return object   Decoded json object.
     * @throws \Mishusoft\Exceptions\JsonException Throw exception on json process error.
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
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public static function decodeToObject(string $string): object
    {

        try {
            return json_decode($string, false, 512, JSON_THROW_ON_ERROR);
        } catch (JsonException $jsonException) {
            throw new \Mishusoft\Exceptions\JsonException(
                $jsonException->getMessage(),
                $jsonException->getCode(),
                $jsonException->getCode(),
                $jsonException->getFile(),
                $jsonException->getLine()
            );
        }
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
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public static function decodeToArray(string $string):array
    {
        try {
            return json_decode($string, true, 512, JSON_THROW_ON_ERROR);
        } catch (JsonException $jsonException) {
            throw new \Mishusoft\Exceptions\JsonException(
                $jsonException->getMessage(),
                $jsonException->getCode(),
                $jsonException->getCode(),
                $jsonException->getFile(),
                $jsonException->getLine()
            );
        }
    }//end decodeToArray()
}//end class
