<?php


//Log::emergency($message);
//Log::alert($message);
//Log::critical($message);
//Log::error($message);
//Log::warning($message);
//Log::notice($message);
//Log::info($message);
//Log::debug($message);

namespace Mishusoft\System;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http;
use Mishusoft\Http\IP;
use Mishusoft\Storage;
use Mishusoft\Utility\Inflect;

class Log
{
    protected array $types = [
        'info',
        'warning',
        'error',
        'emergency',
        'alert',
        'critical',
        'notice',
        'debug',
    ];

    /**
     * List of allowed log style.
     *
     * @var array|string[]
     */
    private static array $allowedStyle = [
        LOG_STYLE_SMART,
        LOG_STYLE_SHORTCUT,
        LOG_STYLE_FULL,
    ];

    /**
     * List of allowed log flag.
     *
     * @var array
     */
    private static array $allowedFlags = [
        LOG_TYPE_COMPILE,
        LOG_TYPE_ACCESS,
        LOG_TYPE_RUNTIME,
    ];

    protected string $logStyle;
    protected string $logFlag;
    protected string $logDriver = 'daily';


    public function __construct(
        protected string $message,
        protected string $logType,
    ) {
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function emergency(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function alert(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function critical(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }


    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function error(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function warning(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function notice(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function info(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    public static function debug(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        self::make($message, self::makeLogType(__METHOD__), $style, $flag);
    }

    /**
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    private static function make(string $message, string $logType, string $style, string $flag):void
    {
        if (LOGGING_ON_OPERATION) {
            (new self($message, $logType))->setStyle($style)->setFlag($flag)->writer();
        }
    }

    private function setStyle(string $name = LOG_STYLE_SMART): static
    {
        $this->logStyle  = $name;
        return $this;
    }

    private function setFlag(string $flag = LOG_TYPE_COMPILE): static
    {
        $this->logFlag  = $flag;
        return $this;
    }

    private static function makeLogType(string $methodName):string
    {
        return basename(
            Inflect::lower(
                Inflect::replace(Inflect::replace($methodName, '::', DS), '\\', DS)
            )
        );
    }


    /**
     * Write log into a file.
     *
     * @return void                     Return void on action.
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    private function writer(): void
    {
        date_default_timezone_set('Asia/Dhaka');

        if (in_array($this->logFlag, self::$allowedFlags, true) === true) {
            $logFile = $this->logFilePath();
        } else {
            throw new RuntimeException('Unexpected flag value.');
        }

        $requestedLogDirectory = dirname($logFile);

        Storage\FileSystem::makeDirectory($requestedLogDirectory);

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
            //$ip         = IP::get();
            $ip         = '::1';
            // @codingStandardsIgnoreEnd
            $useragent  = Http::browser()->getUserAgent();
            $httpStatus = http_response_code();
            $time       = date('Y-m-d h:i A');

            $contents = file_get_contents($logFile);

            if (strtolower($this->logStyle) === LOG_STYLE_SMART) {
                // [2021-05-29 04:34 PM]    192.168.0.1 "localhost  GET /"  Filter request of client.
                $contents .= sprintf(
                    "[%s]\t%s\t%s\t\"%s\t%s\t%s\"\t%s\r",
                    $time,
                    $ip,
                    $this->logType,
                    $server,
                    $mode,
                    $url,
                    $this->message
                );
            } elseif (strtolower($this->logStyle) === LOG_STYLE_SHORTCUT) {
                // [2021-05-29 04:34 PM]    "localhost GET /"   Filter request of client.
                $contents .= sprintf(
                    "[%s]\t%s\t\"%s\t%s\t%s\"\t%s\r",
                    $time,
                    $this->logType,
                    $server,
                    $mode,
                    $url,
                    $this->message
                );
            } elseif (strtolower($this->logStyle) === LOG_STYLE_FULL) {
                // [2021-05-29 05:44AM]<tab>127.0.0.1<tab>Mozilla/5.0 (X11; Linux x86_64; rv:88.0) Gecko/20100101
                // Firefox/88.0<tab>http 200<tab>"localhost<tab>GET<tab>/"
                // <tab>Description: Widget's content not readable or found.
                $contents .= sprintf(
                    "[%s]\t%s\t%s\t%s\t%s %s\t\"%s\t%s\t%s\"\t%s\r",
                    $time,
                    $this->logType,
                    $ip,
                    $useragent,
                    $protocol,
                    $httpStatus,
                    $server,
                    $mode,
                    $url,
                    $this->message
                );
            } else {
                throw new InvalidArgumentException('Invalid log style provided.');
            }//end if

            if (is_writable($logFile) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                //exec('chmod -R 777 '.$logFile);
            } else {
                throw new PermissionRequiredException('Permission denied. Unable to write or read '.$logFile);
            }
        } else {
            throw new PermissionRequiredException(
                'Permission denied. Unable to write or read '.realpath(dirname($logFile))
            );
        }//end if
    }//end write()


    /**
     * Get absolute path of log file by logger flag.
     *
     * @return string Absolute path of log file.
     */
    private function logFilePath():string
    {
        //filename
        // [root/] date > type > flag > host.ext

        return sprintf(
            '%1$s%2$s%6$s%3$s%6$s%4$s%6$s%5$s.log',
            Storage::logsPath(),
            date('Ymd'),
            $this->logType,
            $this->logFlag,
            APPLICATION_SERVER_NAME,
            DS
        );
    }//end getLogFilePath()
}
