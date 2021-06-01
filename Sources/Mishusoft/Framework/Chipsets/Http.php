<?php


namespace Mishusoft\Framework\Chipsets;


use JsonException;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\DataObjects\HttpErrorsDataObject;

class Http extends HttpErrorsDataObject
{


    /**
     * Get error records.
     *
     * @param string $format Format of data.
     *
     * @return array|object
     * @throws JsonException Throw exception when json error occurred.
     */
    public static function getErrorsRecord(string $format='array'): array|object
    {
        if ($format === 'array') {
            return self::builtInHttpErrorsRecords;
        }

        if ($format === 'object') {
            return _JSON::encodeToObject(self::builtInHttpErrorsRecords);
        }

        return ['container' => 'empty'];

    }//end getErrorsRecord()


    /**
     * Get error code by description.
     *
     * @param string $description Error description.
     *
     * @return integer
     */
    public static function getErrorCode(string $description): int
    {
        foreach (self::getErrorsRecord() as $errKey => $details) {
            if (array_key_exists('Description', $details) === true
                && strtolower($details['Description']) === strtolower($description)
            ) {
                return $errKey;
            }
        }

        return self::NOT_FOUND;

    }//end getErrorCode()


    /**
     * Set Header
     *
     * @param array $contents Parameters.
     *
     * @return void
     */
    public static function setHeader(array $contents): void
    {
        /*
            HTTP::setHeader(array(
            "Access-Control-Allow-Origin"=>"*",
            "Access-Control-Allow-Methods"=>"POST,OPTIONS",
            "Access-Control-Allow-Headers"=>"ms-feedback-data,Accept"
        ));*/

        if (count($contents) > 0) {
            foreach ($contents as $keyword => $value) {
                header(sprintf('%s : %s', $keyword, $value));
            }
        }

    }//end setHeader()


}//end class
