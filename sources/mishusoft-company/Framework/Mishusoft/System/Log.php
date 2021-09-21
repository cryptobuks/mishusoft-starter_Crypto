<?php


namespace Mishusoft\System;

use JsonException;
use Mishusoft\Exceptions;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\IP;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Utility\Implement;
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
     * List of allowed log flag.
     *
     * @var array
     */
    private static array $allowedFlags = [
        LOG_TYPE_COMPILE,
        LOG_TYPE_ACCESS,
        LOG_TYPE_RUNTIME,
    ];

    protected static array $messages = [];
    protected static string $logDriver = 'daily';

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function emergency(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'emergency', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function alert(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'alert', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function critical(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'critical', $style, $flag);
    }


    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function error(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'error', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function warning(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'warning', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function notice(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'notice', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function info(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'info', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $style
     * @param string $flag
     */
    public static function debug(
        string $message,
        string $style = LOG_STYLE_SMART,
        string $flag = LOG_TYPE_COMPILE
    ): void {
        static::addMessage($message, 'debug', $style, $flag);
    }

    /**
     * @param string $message
     * @param string $type
     * @param string $style
     * @param string $flag
     */
    private static function addMessage(string $message, string $type, string $style, string $flag): void
    {
        //Debug::preOutput(func_get_args());;
        static::$messages[] = [
            'message'   => $message,
            'time'      => date('Y-m-d h:i:s A'),
            'response'  => http_response_code(),
            'type'      => static::makeType($type),
            'flag'      => $flag,
            'style'      => $style,
        ];


        //Debug::preOutput(static::$messages);;
    }

    /**
     * @param string $methodName
     * @return string
     */
    private static function makeType(string $methodName): string
    {
        return basename(
            Inflect::lower(
                Inflect::replace(Inflect::replace($methodName, '::', DS), '\\', DS)
            )
        );
    }

    /**
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\PermissionRequiredException
     */
    public static function terminate(): void
    {
        if (LOGGING_ON_OPERATION) {
            //we found all message but not written
            static::writer();
        }
        exit();
    }


    /**
     * Write log into a file.
     *
     * @return void
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    private static function writer(): void
    {
        if (count(self::$messages) > 0) {
            date_default_timezone_set('Asia/Dhaka');

            foreach (self::$messages as $log) {
                if (in_array($log['flag'], static::$allowedFlags, true) === true) {
                    $logFile = static::logFilePath($log['type'], $log['flag']);
                } else {
                    throw new RuntimeException(
                        'Unexpected flag value (\'' . $log['flag'] . '\') on '
                        . Implement::toJson($log)
                    );
                }

                $requestedLogDirectory = dirname($logFile);

                Storage\FileSystem::makeDirectory($requestedLogDirectory);

                if (is_writable($requestedLogDirectory) === true) {
                    if (file_exists($logFile) === true) {
                        $resource = fopen($logFile, 'rb+');
                    } else {
                        $resource = fopen($logFile, 'wb+');
                    }

                    //writable component
                    $log['host'] = [
                        'name'   => Registry::Browser()->getURLHostname()
                    ];
                    $log['client'] = [
                        'ip' => IP::get(),
                        'browser' =>  [
                            'pc'    => Registry::Browser()->getURLProtocol(),
                            'ua'    => Registry::Browser()->getUserAgent(),
                            'rm'    => Registry::Browser()->getRequestMethod(),
                            'path'  => Registry::Browser()->getURLPath(),
                        ],
                    ];

                    $contents   = file_get_contents($logFile);

                    $contents .= self::makeTidyMessage($log);

                    if (is_writable($logFile) === true) {
                        fwrite($resource, $contents);
                        fclose($resource);
                    } else {
                        throw new PermissionRequiredException(
                            'Permission denied. Unable to write or read ' . $logFile
                        );
                    }
                } else {
                    throw new PermissionRequiredException(
                        'Permission denied. Unable to write or read ' . realpath(dirname($logFile))
                    );
                }//end if
            }//end foreach
        }//end if
    }//end write()

    /**
     * @throws InvalidArgumentException
     */
    private static function makeTidyMessage(array $log):string
    {
        $infix = '';

        if (strtolower($log['style']) === LOG_STYLE_SHORTCUT) {
            $infix .= sprintf("\t%s", $log['host']['name']);
        } elseif (strtolower($log['style']) === LOG_STYLE_SMART) {
            $infix .= sprintf("\t%s\t%s", $log['client']['ip'], $log['host']['name']);
        } elseif (strtolower($log['style']) === LOG_STYLE_FULL) {
            $infix .= sprintf(
                "\t%s\t%s\t%s\t%s\t%s",
                $log['client']['ip'],
                $log['client']['browser']['ua'],
                $log['client']['browser']['pc'],
                $log['response'],
                $log['host']['name']
            );
        } else {
            throw new InvalidArgumentException('Invalid log style provided.');
        }//end if

        return sprintf(
            "[%s]\t%s\t\"%s\t%s\t%s\"\t%s\r",
            $log['time'],
            $log['type'],
            $infix,
            $log['client']['browser']['rm'],
            $log['client']['browser']['path'],
            $log['message']
        );
    }


    /**
     * Get absolute path of log file by logger flag.
     *
     * @return string Absolute path of log file.
     */
    private static function logFilePath(string $type, string $flag): string
    {
        //filename
        // [root/] date > type > flag > host.ext
        return sprintf(
            '%1$s%2$s%6$s%3$s%6$s%4$s%6$s%5$s.log',
            Storage::logsStoragesPath(),
            date('Ymd'),
            $type,
            $flag,
            APPLICATION_SERVER_NAME,
            DS
        );
    }//end getLogFilePath()
}
