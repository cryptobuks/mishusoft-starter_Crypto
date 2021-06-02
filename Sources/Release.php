<?php
/**
 * Release Manager
 *
 * @package    Mishusoft
 * @subpackage Release
 * @author     Squiz Pty Ltd <products@squiz.net>
 * @copyright  2021 Squiz Pty Ltd (ABN 77 084 670 600)
 *
 * Add bash command "alias mishusoft-release="php /srv/http/Sources/Release.php""
 */

declare(strict_types=1);

namespace Release;

use Mishusoft\Release\Compile;

/*
 * Declare constants
 */

define('RUNTIME_ROOT_PATH', realpath(__DIR__).DIRECTORY_SEPARATOR);
define('RUNTIME_SYSTEM_PATH', RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);

define('SOURCES_ROOT_PATH', realpath(__DIR__).DIRECTORY_SEPARATOR);
define('CURRENT_YEAR', date('Y'));

define('FILE_BASE_NAME', basename(__FILE__));

define('RELEASE_FILE_ROOT', realpath(__FILE__));
define('RELEASE_DOCUMENT_ROOT', realpath('./'));

if (array_key_exists('USER', $_SERVER) === true) {
    define('CURRENT_SYS_USER', $_SERVER['USER']);
} else {
    define('CURRENT_SYS_USER', get_current_user());
}


// Set customize error controller.
set_error_handler(
    static function ($errorMessage, $errorFile, $errorLine) {
        echo 'Error : '.$errorMessage.' from '.$errorFile.' on line '.$errorLine.PHP_EOL;
    },
    E_ALL
);

// Add Compiler class file.
require_once realpath(__DIR__).'/Mishusoft/Release/Compile.php';

(static function (array $parameters) {
    if (count($parameters) > 0) {
        // Remove file name form $parameters string.
        array_shift($parameters);
        $options = array_shift($parameters);
        if ($options !== null) {
            // Update release versions of remote server.
            if (str_starts_with($options, '-update') === true) {
                if (count($parameters) > 1) {
                    Compile::updateOldVersion($parameters);
                    exit();
                }

                Compile::log(
                    'Error in argument 2, no source code or target destination provided.',
                    'error'
                );
                Compile::defaultInfo();
                exit();
                // end if
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (str_starts_with($options, '-u') === true) {
                Compile::updatePRV(realpath('./package.json'));
                Compile::updatePRVALlPackages(realpath(__DIR__.'/Mishusoft/Packages'));
                exit();
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (str_starts_with($options, '-copy') === true) {
                if (count($parameters) > 1) {
                    Compile::start('copy', $parameters, $options);
                    exit();
                }

                Compile::log('Error in argument 2, no source or destination provided.', 'error');
                Compile::defaultInfo();
                exit();
                // end if
            }//end if

            // Show help information.
            if (str_starts_with($options, '-h') === true) {
                Compile::defaultInfo();
                exit();
            }//end if

            // Release themes sources or compressed files.
            if (str_starts_with($options, '-compile-themes') === true
                || str_starts_with($options, '-test-themes') === true
            ) {
                if (count($parameters) > 1) {
                    $options = substr($options, 0, strpos($options, '-themes'));
                    Compile::start('rThemes', $parameters, $options);
                    exit();
                }

                Compile::log(
                    'Error in argument 2, no source code or target destination provided.',
                    'error'
                );
                Compile::defaultInfo();
                exit();
                // end if
            }//end if

            // Release themes sources or compressed files.
            if (str_starts_with($options, '-compile-widgets') === true
                || str_starts_with($options, '-test-widgets') === true
            ) {
                if (count($parameters) > 1) {
                    $options = substr($options, 0, strpos($options, '-widgets'));
                    Compile::start('rWidgets', $parameters, $options);
                    exit();
                }

                Compile::log(
                    'Error in argument 2, no source code or target destination provided.',
                    'error'
                );
                Compile::defaultInfo();
                exit();
                // end if
            }//end if

            // Release static html pages sources files.
            if (str_starts_with($options, '-compile-static') === true
                || str_starts_with($options, '-test-static') === true
            ) {
                if (count($parameters) > 1) {
                    $options = substr($options, 0, strpos($options, '-static'));
                    Compile::start('rStaticHTMLPages', $parameters, $options);
                    exit();
                }

                Compile::log('Error in argument 2, no source code destination provided.', 'error');
                Compile::defaultInfo();
                exit();
                // end if
            }//end if

            // Compress sources code.
            if (str_starts_with($options, '-compile') === true || str_starts_with($options, '-test') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rPHP', $parameters, $options);
                    exit();
                }

                Compile::log('Error in argument 2, no source code destination provided.', 'error');
                Compile::defaultInfo();
                exit();
                // end if
            }

            Compile::log('Error in argument 1, invalid option.', 'error');
            Compile::defaultInfo();
            // end if
            exit();
        }//end if

        Compile::log('Error in argument 1, empty option.', 'error');
        Compile::defaultInfo();
        exit();
        // end if
    }//end if

    Compile::defaultInfo();
    exit();
    // end if
})($argv);
