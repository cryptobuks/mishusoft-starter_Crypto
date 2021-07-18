<?php declare(strict_types=1);

namespace Mishusoft\System;

use InvalidArgumentException;
use Mishusoft\Http\IP;
use RuntimeException;

class Logger
{

    /**
     * List of allowed log style.
     *
     * @var array|string[]
     */
    private static array $allowedStyle = [
        LOGGER_WRITE_STYLE_SMART,
        LOGGER_WRITE_STYLE_SHORTCUT,
        LOGGER_WRITE_STYLE_FULL,
    ];

    /**
     * List of allowed log flag.
     *
     * @var array
     */
    private static array $allowedFlags = [
        LOGGER_FLAG_TYPE_COMPILE,
        LOGGER_FLAG_TYPE_ACCESS,
        LOGGER_FLAG_TYPE_RUNTIME,
    ];


    /**
     * Write log into a file.
     *
     * @param string $message Log message.
     * @param string $style   Log wiring style.
     * @param string $flag    Log type flag.
     *
     * @return void                     Return void on action.
     * @throws RuntimeException         Throw a message on runtime execution time.
     * @throws InvalidArgumentException Throw a message on invalid parameter received.
     */
    public static function write(
        string $message,
        string $style = LOGGER_WRITE_STYLE_SMART,
        string $flag = LOGGER_FLAG_TYPE_COMPILE
    ): void {
        date_default_timezone_set('Asia/Dhaka');

        if (in_array($flag, self::$allowedFlags, true) === true) {
            $logFile = self::getLogFilePath($flag);
        } else {
            throw new RuntimeException('Unexpected flag value.');
        }

        $requestedLogDirectory = dirname($logFile);

        if (file_exists($requestedLogDirectory) === false) {
            if (mkdir($requestedLogDirectory, 0777, true) === false
                && is_dir($requestedLogDirectory) === false
            ) {
                throw new RuntimeException(sprintf('Directory "%s" was not created', $requestedLogDirectory));
            }

            if (exec('chmod -R 777 '.$requestedLogDirectory) === false) {
                throw new RuntimeException(sprintf('Unable to change permission of "%s"', $requestedLogDirectory));
            }
        }

        if (is_writable($requestedLogDirectory) === true) {
            if (file_exists($logFile) === true) {
                $resource = fopen($logFile, 'rb+');
            } else {
                $resource = fopen($logFile, 'wb+');
            }

            if (array_key_exists('REQUEST_METHOD', $_SERVER) === true) {
                $mode = $_SERVER['REQUEST_METHOD'];
            } else {
                $mode = 'GET';
            }

            if (array_key_exists('SERVER_NAME', $_SERVER) === true) {
                $server = $_SERVER['SERVER_NAME'];
            } else {
                $server = 'localhost';
            }

            if (array_key_exists('REQUEST_URI', $_SERVER) === true) {
                $url = $_SERVER['REQUEST_URI'];
            } else {
                $url = '/test';
            }

            if (array_key_exists('REQUEST_SCHEME', $_SERVER) === true) {
                $protocol = $_SERVER['REQUEST_SCHEME'];
            } else {
                $protocol = 'http';
            }

            // @codingStandardsIgnoreStart
            $ip         = IP::get();
            // @codingStandardsIgnoreEnd
            $useragent  = self::getHttpUserAgent();
            $httpStatus = http_response_code();
            $time       = date('Y-m-d h:i A');

            $contents = file_get_contents($logFile);

            if (strtolower($style) === LOGGER_WRITE_STYLE_SMART) {
                // [2021-05-29 04:34 PM]    192.168.0.1 "localhost  GET /"  Filter request of client.
                $contents .= sprintf("[%s]\t%s\t\"%s\t%s\t%s\"\t%s\r", $time, $ip, $server, $mode, $url, $message);
            } elseif (strtolower($style) === LOGGER_WRITE_STYLE_SHORTCUT) {
                // [2021-05-29 04:34 PM]    "localhost GET /"   Filter request of client.
                $contents .= sprintf("[%s]\t\"%s\t%s\t%s\"\t%s\r", $time, $server, $mode, $url, $message);
            } elseif (strtolower($style) === LOGGER_WRITE_STYLE_FULL) {
                // [2021-05-29 05:44AM]<tab>127.0.0.1<tab>Mozilla/5.0 (X11; Linux x86_64; rv:88.0) Gecko/20100101
                // Firefox/88.0<tab>http 200<tab>"localhost<tab>GET<tab>/"
                // <tab>Description: Widget's content not readable or found.
                $contents .= sprintf(
                    "[%s]\t%s\t%s\t%s %s\t\"%s\t%s\t%s\"\t%s\r",
                    $time,
                    $ip,
                    $useragent,
                    $protocol,
                    $httpStatus,
                    $server,
                    $mode,
                    $url,
                    $message
                );
            } else {
                throw new InvalidArgumentException('Invalid log style provided.');
            }//end if

            if (is_writable($logFile) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                exec('chmod -R 777 '.$logFile);
            } else {
                throw new RuntimeException('Permission denied. Unable to write or read '.$logFile);
            }
        } else {
            throw new RuntimeException('Permission denied. Unable to write or read '.realpath(dirname($logFile)));
        }//end if
    }//end write()


    /**
     * @return string
     */
    private static function getHttpUserAgent() : string
    {
        $userAgent = '';
        if (function_exists('apache_request_headers') === true) {
            if (array_key_exists('User-Agent', apache_request_headers()) === true) {
                $userAgent = apache_request_headers()['User-Agent'];
            }
        } elseif (function_exists('getallheaders') === true) {
            if (array_key_exists('HTTP_USER_AGENT', getallheaders()) === true) {
                $userAgent = getallheaders()['HTTP_USER_AGENT'];
            }
        } elseif (array_key_exists('HTTP_USER_AGENT', $_SERVER) === true) {
            $userAgent = $_SERVER['HTTP_USER_AGENT'];
        } else {
            throw new RuntimeException('Unable to extract user agent.');
        }//end if

        return $userAgent;
    }//end getHttpUserAgent()


    /**
     * Get absolute path of log file by logger flag.
     *
     * @param string $flag String flag.
     *
     * @return string Absolute path of log file.
     * @throws RuntimeException Throw exception when error occurred.
     */
    private static function getLogFilePath(string $flag):string
    {
        $logRootPath   = RUNTIME_LOGS_PATH;
        $appServerName = APPLICATION_SERVER_NAME;
        $todayDate     = date('Ymd');

        // @codingStandardsIgnoreStart
        // LOGGER_FLAG_TYPE_COMPILE => PHP_RUNTIME_LOGS_PATH.$todayDate.DS.'php_compile_'.APPLICATION_SERVER_NAME.'.log',
        // LOGGER_FLAG_TYPE_ACCESS => PHP_RUNTIME_LOGS_PATH.$todayDate.DS.'php_access_'.APPLICATION_SERVER_NAME.'.log',
        // LOGGER_FLAG_TYPE_RUNTIME => PHP_RUNTIME_LOGS_PATH.$todayDate.DS.'php_runtime_'.APPLICATION_SERVER_NAME.'.log',
        // @codingStandardsIgnoreEnd

        return match ($flag) {
            'compile' => sprintf('%s%s%sphp_compile_%s.log', $logRootPath, $todayDate, DS, $appServerName),
            'access' => sprintf('%s%s%sphp_access_%s.log', $logRootPath, $todayDate, DS, $appServerName),
            'runtime' => sprintf('%s%s%sphp_runtime_%s.log', $logRootPath, $todayDate, DS, $appServerName),
            default => throw new RuntimeException('Invalid flag value.')
        };
    }//end getLogFilePath()


    /**
     * Get all allowed log writing style as array.
     *
     * @return array
     */
    public static function getAllowedStyle(): array
    {
        return self::$allowedStyle;
    }//end getAllowedStyle()


    /**
     * Get all allowed log flag as array.
     *
     * @return array
     */
    public static function getAllowedFlags(): array
    {
        return self::$allowedFlags;
    }//end getAllowedFlags()
}//end class
