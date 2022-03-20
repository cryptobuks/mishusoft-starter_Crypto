<?php

    /**
     * The loader of mishusoft application
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

// Set customize error controller.

    set_error_handler(
    /**
     * @throws MaxMind\Db\Reader\InvalidDatabaseException
     * @throws Mishusoft\Exceptions\RuntimeException
     * @throws GeoIp2\Exception\AddressNotFoundException
     * @throws Mishusoft\Exceptions\ErrorException
     * @throws Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws Mishusoft\Exceptions\PermissionRequiredException
     */ // static function (int $errno, string $errstr, string $errfile, int $errline, array $errcontext): bool  {
        static function (int $errno, string $errstr, string $errfile, int $errline): bool {
            if (!(error_reporting() & $errno)) {
                // This error code is not included in error_reporting, so let it fall
                // through to the standard PHP error handler
                return false;
            }
            // $errstr may need to be escaped:
            $errstr = htmlspecialchars($errstr);

            //print_r(debug_backtrace(), false);
            Mishusoft\Exceptions\Handler::fetchError($errno, $errstr, $errfile, $errline, array_slice(debug_backtrace(), 1));

            /* Don't execute PHP internal error handler */
            return true;
        },
        E_ALL
    );

//set exception handler
    set_exception_handler(
    /**
     * @throws MaxMind\Db\Reader\InvalidDatabaseException
     * @throws Mishusoft\Exceptions\RuntimeException
     * @throws GeoIp2\Exception\AddressNotFoundException
     * @throws Mishusoft\Exceptions\ErrorException
     * @throws Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws Mishusoft\Exceptions\PermissionRequiredException
     */ 
        static function ($e) {
        Mishusoft\Exceptions\Handler::fetchException($e);
    }
    );

    /**
     * Automatically load all required classes.
     */
    spl_autoload_register(static function (string $class) {
        if (strncmp($class, WHO_AM_I, strlen(WHO_AM_I)) !== 0) {
            $class = sprintf('%1$s\\%2$s', WHO_AM_I, $class);
        }

        // Check file is use namespace.
        if (is_int(strpos($class, "\\"))) {
            // Extract file namespace to file location.
            $originalFile = sprintf('%1$s%2$s.php', frameworkPath(), str_replace("\\", DS, $class));
            if (is_file($originalFile)) {
                include_once $originalFile;
            }
        } else {
            // Want to load normal File $class.
            $path = realpath(dirname(__FILE__, 2));
            if (is_string($path)) {
                $array_files = scandir($path);
                if (is_array($array_files)) {
                    foreach ($array_files as $directory) {
                        $originalFile = sprintf('%1$s%2$s%4$s%3$s.php', frameworkPath(), ucfirst($directory), ucfirst($class), DS);
                        if (is_file($originalFile)) {
                            include_once $originalFile;
                        }
                    }
                }
            }
        } //end if
    });
