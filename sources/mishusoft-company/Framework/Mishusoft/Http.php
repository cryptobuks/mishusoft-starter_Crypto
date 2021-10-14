<?php


namespace Mishusoft;

use Mishusoft\Utility\Implement;

class Http extends Http\Errors
{

    /**
     * Store Server information in this array and use on runtime requirements
     *
     * @var array
     */
    public static array $details = [];

    /**
     * Get server information in runtime requirements
     *
     * @return array
     */
    public static function getDetails():array
    {
        if (self::$details ===[]) {
            self::$details = $_SERVER;
        }

        return self::$details;
    }
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
            return Implement::arrayToObject(self::BUILT_IN_HTTP_ERRORS_RECORDS);
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

    /**
     * Check is use ssl certificate in domain
     *
     * @return bool
     */
    public static function isSecured():bool
    {
        return (!empty(self::getDetails()['HTTPS']) && self::getDetails()['HTTPS'] === 'on');
    }

    /**
     * Get server http host name from details
     *
     * @param bool $useForwardedHost
     * @return string
     */
    public static function getHost(bool $useForwardedHost = false):string
    {
        $s = self::getDetails();
        $sp = strtolower($s['SERVER_PROTOCOL']);
        $protocol = substr($sp, 0, strpos($sp, '/')) . ((self::isSecured()) ? 's' : '');

        if (($useForwardedHost && isset($s['HTTP_X_FORWARDED_HOST']))) {
            $host = $s['HTTP_X_FORWARDED_HOST'];
        } else {
            $host = ($s['HTTP_HOST'] ?? null);
        }
        $host = ($host ?? $s['SERVER_NAME']) . self::getPort();
        return $protocol . '://' . $host;
    }

    /**
     * Get server http port from details
     *
     * @return string
     */
    public static function getPort():string
    {
        //url:http://localhost:8080
        //url:http://localhost
        //url:https://localhost

        $s = self::getDetails();
        $ssl = self::isSecured();

        $port = $s['SERVER_PORT'];
        $definedPort = ':' . $port;
        $definedPortLen = strlen($definedPort);

        if (substr($s['HTTP_HOST'], (strlen($s['HTTP_HOST']) - $definedPortLen)) === $definedPort) {
            $port = '';
        } elseif ((!$ssl && $port === '80') || ($ssl && $port === '443')) {
            $port = '';
        } else {
            $port = $definedPort;
        }

        return ltrim($port, ':');
    }
}//end class
