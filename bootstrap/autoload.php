<?php

/**
 * The loader of mishusoft application
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://mishusoft.com
 */

// Set customize error controller.

use Mishusoft\Exceptions\Handler;

set_error_handler(
    static function ($number, $message, $file, $line) {
        //print_r(debug_backtrace(), false);
        Handler::fetchError(
            $number,
            $message,
            $file,
            $line,
            array_slice(debug_backtrace(), 1)
        );
    },
    E_ALL
);

//set exception handler
set_exception_handler(
    static function ($e) {
        Handler::fetchException($e);
    }
);

/**
 * Automatically load all required classes.
 */
spl_autoload_register(
    static function (string $class) {
        if (strncmp($class, \WHO_AM_I, strlen(\WHO_AM_I)) !== 0) {
            $class = sprintf('%1$s\\%2$s', \WHO_AM_I, $class);
        }

        // Check file is use namespace.
        if (is_int(strpos($class, '\\'))) {
            // Extract file namespace to file location.
            $originalFile = sprintf(
                '%1$s%2$s.php',
                frameworkPath(),
                str_replace('\\', DIRECTORY_SEPARATOR, $class)
            );

            if (is_file($originalFile)) {
                include_once $originalFile;
            }
        } else {
            // Want to load normal File $class.
            foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                $originalFile = sprintf(
                    '%1$s%2$s%4$s%3$s.php',
                    frameworkPath(),
                    ucfirst($directory),
                    ucfirst($class),
                    DS
                );
                if (is_file($originalFile)) {
                    include_once $originalFile;
                }
            }
        }//end if
    }
);
