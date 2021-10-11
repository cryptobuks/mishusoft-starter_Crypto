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
        if (defined('FRAMEWORK_PATH') && file_exists(FRAMEWORK_PATH)) {
            //set framework path from install directory
            $frameworkPath = FRAMEWORK_PATH;
        } elseif (defined('SRC_FRAMEWORK_PATH') && file_exists(SRC_FRAMEWORK_PATH)) {
            //set framework path from sources
            $frameworkPath = SRC_FRAMEWORK_PATH;
        } else {
            //set default framework path
            $frameworkPath = realpath(dirname(__DIR__, 2)  . 'Framework');
        }

        // Check file is use namespace.
        if (is_int(strpos($class, '\\'))) {
            // Extract file namespace to file location.
            $originalFile = $frameworkPath . str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
            // Checking local file: $originalFile.
            if (is_file($originalFile) === true) {
                include_once $originalFile;
            }
        } else {
            // Want to load normal File $class.
            foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                $originalFile = $frameworkPath  . ucfirst($directory) . DS . ucfirst($class) . '.php';
                if (file_exists($originalFile) === true) {
                    include_once $originalFile;
                }
            }
        }//end if
    }
);
