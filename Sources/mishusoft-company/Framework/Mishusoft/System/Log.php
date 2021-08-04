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
use Mishusoft\Http\IP;
use Mishusoft\RAM;
use Mishusoft\Storage;

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
        protected string $logFilename,
    ) {
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
        $registrar = new self($message, __METHOD__);
        $registrar->setStyle($style)->setFlag($flag)->writer();
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
            $logFile = $this->logFilePath($this->logFlag);
        } else {
            throw new RuntimeException('Unexpected flag value.');
        }

        //print_r($logFile . PHP_EOL, false);

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
            $ip         = IP::get();
            // @codingStandardsIgnoreEnd
            $useragent  = RAM::http()->browser()->getUserAgent();
            $httpStatus = http_response_code();
            $time       = date('Y-m-d h:i A');

            $contents = file_get_contents($logFile);

            if (strtolower($this->logStyle) === LOG_STYLE_SMART) {
                // [2021-05-29 04:34 PM]    192.168.0.1 "localhost  GET /"  Filter request of client.
                $contents .= sprintf("[%s]\t%s\t\"%s\t%s\t%s\"\t%s\r", $time, $ip, $server, $mode, $url, $this->message);
            } elseif (strtolower($this->logStyle) === LOG_STYLE_SHORTCUT) {
                // [2021-05-29 04:34 PM]    "localhost GET /"   Filter request of client.
                $contents .= sprintf("[%s]\t\"%s\t%s\t%s\"\t%s\r", $time, $server, $mode, $url, $message);
            } elseif (strtolower($this->logStyle) === LOG_STYLE_FULL) {
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
                    $this->message
                );
            } else {
                throw new InvalidArgumentException('Invalid log style provided.');
            }//end if

            if (is_writable($logFile) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                exec('chmod -R 777 '.$logFile);
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
     * @param string $flag String flag.
     *
     * @return string Absolute path of log file.
     * @throws RuntimeException
     */
    private function logFilePath(string $flag):string
    {
        $logRootPath   = Storage::logsPath();
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
}