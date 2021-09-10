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
        // Check file is use namespace.
        if (is_int(strpos($class, '\\'))) {
            // Extract file namespace to file location.
            $originalFile = FRAMEWORK_PATH . str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
            // Checking local file: $originalFile.
            if (is_file($originalFile) === true) {
                include_once $originalFile;
            }
        } else {
            // Want to load normal File $class.
            foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                $originalFile = FRAMEWORK_PATH  . ucfirst($directory) . DS . ucfirst($class) . '.php';
                if (file_exists($originalFile) === true) {
                    include_once $originalFile;
                }
            }
        }//end if
    }
);
