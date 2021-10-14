<?php

// Set customize error controller.

use Mishusoft\Exceptions\Handler;

set_error_handler(
    static function ($number, $message, $file, $line) {
        //print_r(debug_backtrace(), false);
        Handler::fetchError($number, $message, $file, $line, array_slice(debug_backtrace(), 1));
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
 *
 */
spl_autoload_register(
    static function (string $class) {
        if (strncmp($class, WHO_AM_I, strlen(WHO_AM_I)) !== 0) {
            $class = sprintf('%1$s\\%2$s', WHO_AM_I, $class);
        }

        //print_r(' SYS PATH : ' . $frameworkPath . '<br/>', false);
        //print_r(' REQUIRED : ' . $class . '<br/>', false);
        //print_r('<br/>', false);

        // Check file is use namespace.
        if (is_int(strpos($class, '\\'))) {
            // Extract file namespace to file location.
            $originalFile = frameworkPath() . str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';

            //print_r(' PHYSICAL FILE : ' . $originalFile . '<br/>', false);
            //print_r('<br/>', false);
            // Checking local file: $originalFile.
            if (is_file($originalFile)) {
                // print_r(' PHYSICAL FILE IS FOUND<br/>', false);
                // print_r('<br/>', false);
                // print_r('<br/>', false);
                include_once $originalFile;
            }
        } else {
            // Want to load normal File $class.
            foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                $originalFile = frameworkPath() . ucfirst($directory) . DS . ucfirst($class) . '.php';
                if (is_file($originalFile)) {
                    include_once $originalFile;
                }
            }
        }//end if
    }
);
