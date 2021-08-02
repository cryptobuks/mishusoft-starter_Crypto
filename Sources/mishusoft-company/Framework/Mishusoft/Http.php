<?php


namespace Mishusoft;

use Mishusoft\Http\Browser;
use Mishusoft\Http\ErrorsData;
use Mishusoft\Utility\JSON;

class Http extends ErrorsData
{

    private static Browser $browser;

    public static function makeCacheBrowser(): void
    {
        self::$browser = new Browser();
    }

    public static function browser():Browser
    {
        return self::$browser;
    }


    /**
     * Get error records.
     *
     * @param string $format Format of data.
     *
     * @return array|object
     * @throws Exceptions\JsonException
     */
    public static function errorsRecords(string $format = 'array'): array|object
    {
        if ($format === 'array') {
            return self::BUILT_IN_HTTP_ERRORS_RECORDS;
        }

        if ($format === 'object') {
            return JSON::encodeToObject(self::BUILT_IN_HTTP_ERRORS_RECORDS);
        }

        return ['container' => 'empty'];
    }//end getErrorsRecord()


    /**
     * Get error code by description.
     *
     * @param string $description Error description.
     *
     * @return integer
     * @throws Exceptions\JsonException
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
