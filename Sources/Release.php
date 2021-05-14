<?php

/**
 * #!/bin/php
 *
 * add bash command
 * alias mishusoft-release="php /srv/http/Sources/Release.php"
 */

declare(strict_types=1);

namespace Release;

use Mishusoft\Release\Compile;

/*
 * Declare constants
 */

define('PHP_RUNTIME_ROOT_PATH', realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
define('PHP_RUNTIME_SYSTEM_PATH', PHP_RUNTIME_ROOT_PATH . 'Mishusoft' . DIRECTORY_SEPARATOR);

define('PHP_SOURCES_ROOT_PATH', realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
define('CURRENT_YEAR', date('Y'));
define('CURRENT_SYS_USER', array_key_exists('USER', $_SERVER) ? $_SERVER['USER'] : get_current_user());
define('FILE_BASE_NAME', basename(__FILE__));

define('RELEASE_FILE_ROOT', realpath(__FILE__));
define('RELEASE_DOCUMENT_ROOT', realpath('./'));

// set customize error controller
set_error_handler(
    function ($errorMessage, $errorFile, $errorLine) {
        echo "Error : {$errorMessage} from {$errorFile} on line {$errorLine}." . PHP_EOL;
    },
    E_ALL
);

function preOutput(string $argument) {
    echo '<pre>';
    print_r($argument);
    echo '</pre>';

}


// Add autoload file.
require_once realpath(dirname(__FILE__)) . '/Mishusoft/Release/Compile.php';

(function (array $parameters) {
    if (count($parameters) > 0) {
        array_shift($parameters);
        // remove file name form argv string
        $options = array_shift($parameters);
        if (!is_null($options)) {
            // update release versions of remote server
            if (str_starts_with($options, '-update') === true) {
                if (count($parameters) > 1) {
                    Compile::updateOldVersion($parameters);
                } else {
                    Compile::release_log(
                        'Error in argument 2, no source code or target destination provided.',
                        'error');
                    echo Compile::defaultInfo;
                    exit();
                }

                exit();
            }

            // update node-app and Mishusoft Framework release versions
            if (str_starts_with($options, '-u') === true) {
                Compile::updatePRV(realpath('./package.json'));
                Compile::updatePRVALlPackages(realpath(dirname(__FILE__) . '/Mishusoft/Packages'));
                exit();
            }

            // update node-app and Mishusoft Framework release versions
            if (str_starts_with($options, '-copy') === true) {
                if (count($parameters) > 1) {
                    Compile::start('copy', $parameters);
                } else {
                    Compile::release_log('Error in argument 2, no source or destination provided.', 'error');
                    echo Compile::defaultInfo;
                    exit();
                }

                exit();
            }

            // show help information
            if (str_starts_with($options, '-h') === true) {
                echo Compile::defaultInfo;
                exit();
            }

            // release themes sources or compressed files
            if (str_starts_with($options, '-t') === true || str_starts_with($options, '-tc') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rThemes', $parameters);
                } else {
                    Compile::release_log(
                        'Error in argument 2, no source code or target destination provided.',
                        'error');
                    echo Compile::defaultInfo;
                    exit();
                }

                exit();
            }

            // release themes sources or compressed files
            if (str_starts_with($options, '-w') === true || str_starts_with($options, '-wc') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rWidgets', $parameters);
                } else {
                    Compile::release_log(
                        'Error in argument 2, no source code or target destination provided.',
                        'error');
                    echo Compile::defaultInfo;
                    exit();
                }

                exit();
            }

            // release static html pages sources files
            if (str_starts_with($options, '-sp') === true || str_starts_with($options, '-spc') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rStaticHTMLPages', $parameters);
                } else {
                    Compile::release_log('Error in argument 2, no source code destination provided.', 'error');
                    echo Compile::defaultInfo;
                    exit();
                }

                exit();
            }

            // Compress sources code
            if (str_starts_with($options, '-c') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rPHP', $parameters);
                } else {
                    Compile::release_log('Error in argument 2, no source code destination provided.', 'error');
                    echo Compile::defaultInfo;
                    exit();
                }
            } else {
                Compile::release_log('Error in argument 1, invalid option.', 'error');
                echo Compile::defaultInfo;
            }
        } else {
            Compile::release_log('Error in argument 1, empty option.', 'error');
            echo Compile::defaultInfo;
        }//end if
    } else {
        echo Compile::defaultInfo;
    }//end if

    exit();
})($argv);
