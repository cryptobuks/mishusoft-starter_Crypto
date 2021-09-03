<?php

// Set customize error controller.

use Mishusoft\Exceptions\Handler;

set_error_handler(
    static function ($number, $message, $file, $line, $errcontext = false) {
        include_once FRAMEWORK_PATH . 'Mishusoft' . DS. 'Utility' . DS . 'Number.php';
        include_once FRAMEWORK_PATH . 'Mishusoft' . DS. 'Exceptions' . DS . 'Handler.php';
        echo sprintf("%s:: %s in file %s on line %d\n", Handler::codeToName($number), $message, $file, $line);
        echo 'Stack trace:'.PHP_EOL;
        foreach (Handler::makeBeautifulStackTrace(debug_backtrace()) as $serial => $details) {
            echo sprintf('%d) %s ', Mishusoft\Utility\Number::next($serial), $details).PHP_EOL;
        }
        exit();
    },
    E_ALL
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
