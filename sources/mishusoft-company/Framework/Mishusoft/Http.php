<?php


namespace Mishusoft;

use Mishusoft\Utility\ArrayCollection;

class Http extends Http\Errors
{

    /**
     * Get error records.
     *
     * @param string $format Format of data.
     *
     * @return array|object
     */
    public static function errorsRecords(string $format = 'array'): array|object
    {
        if ($format === 'array') {
            return self::BUILT_IN_HTTP_ERRORS_RECORDS;
        }

        if ($format === 'object') {
            return ArrayCollection::arrayToObject(self::BUILT_IN_HTTP_ERRORS_RECORDS);
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
    public static function errorCode(string $description): int
    {
        foreach (self::errorsRecords() as $errKey => $details) {
            if (array_key_exists('Description', $details) === true
                && strtolower($details['Description']) === strtolower($description)
            ) {
                return $errKey;
            }
        }

        return self::NOT_FOUND;
    }//end getErrorCode()


    /**
     * Get error code by description.
     *
     * @param int $code Error code.
     *
     * @return string
     */
    public static function errorDescription(int $code): string
    {
        if (array_key_exists($code, self::errorsRecords()) === true) {
            return self::errorsRecords()[$code]['Description'];
        }

        return 'Not Found';
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
