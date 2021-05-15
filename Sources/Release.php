<?php
/**
 * Release Manager
 *
 * @package    Mishusoft
 * @subpackage Release
 * @author     Mishusoft System Inc <products@mishusoft.com>
 * @copyright  2021 Mishusoft System Inc (ABN 77 084 670 600)
 *
 * Add bash command "alias mishusoft-release="php /srv/http/Sources/Release.php""
 */

declare(strict_types=1);

namespace Release;

use Mishusoft\Release\Compile;

/*
 * Declare constants
 */

define('PHP_RUNTIME_ROOT_PATH', realpath(dirname(__FILE__)).DIRECTORY_SEPARATOR);
define('PHP_RUNTIME_SYSTEM_PATH', PHP_RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);

define('PHP_SOURCES_ROOT_PATH', realpath(dirname(__FILE__)).DIRECTORY_SEPARATOR);
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
    function ($errorMessage, $errorFile, $errorLine) {
        echo 'Error : '.$errorMessage.' from '.$errorFile.' on line '.$errorLine.PHP_EOL;
    },
    E_ALL
);

// Add Compile file.
require_once realpath(dirname(__FILE__)).'/Mishusoft/Release/Compile.php';

(function (array $parameters) {
    if (count($parameters) > 0) {
        // Remove file name form $parameters string.
        array_shift($parameters);
        $options = array_shift($parameters);
        if ($options !== null) {
            // Update release versions of remote server.
            if (str_starts_with($options, '-update') === true) {
                if (count($parameters) > 1) {
                    Compile::updateOldVersion($parameters);
                } else {
                    Compile::release_log(
                        'Error in argument 2, no source code or target destination provided.',
                        'error'
                    );
                    Compile::defaultInfo();
                    exit();
                }//end if

                exit();
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (str_starts_with($options, '-u') === true) {
                Compile::updatePRV(realpath('./package.json'));
                Compile::updatePRVALlPackages(realpath(dirname(__FILE__).'/Mishusoft/Packages'));
                exit();
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (str_starts_with($options, '-copy') === true) {
                if (count($parameters) > 1) {
                    Compile::start('copy', $parameters);
                } else {
                    Compile::release_log('Error in argument 2, no source or destination provided.', 'error');
                    Compile::defaultInfo();
                    exit();
                }//end if

                exit();
            }//end if

            // Show help information.
            if (str_starts_with($options, '-h') === true) {
                Compile::defaultInfo();
                exit();
            }//end if

            // Release themes sources or compressed files.
            if (str_starts_with($options, '-t') === true || str_starts_with($options, '-tc') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rThemes', $parameters);
                } else {
                    Compile::release_log(
                        'Error in argument 2, no source code or target destination provided.',
                        'error'
                    );
                    Compile::defaultInfo();
                    exit();
                }//end if

                exit();
            }//end if

            // Release themes sources or compressed files.
            if (str_starts_with($options, '-w') === true || str_starts_with($options, '-wc') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rWidgets', $parameters);
                } else {
                    Compile::release_log(
                        'Error in argument 2, no source code or target destination provided.',
                        'error'
                    );
                    Compile::defaultInfo();
                    exit();
                }//end if

                exit();
            }//end if

            // Release static html pages sources files.
            if (str_starts_with($options, '-sp') === true || str_starts_with($options, '-spc') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rStaticHTMLPages', $parameters);
                } else {
                    Compile::release_log('Error in argument 2, no source code destination provided.', 'error');
                    Compile::defaultInfo();
                    exit();
                }//end if

                exit();
            }//end if

            // Compress sources code.
            if (str_starts_with($options, '-c') === true) {
                if (count($parameters) > 1) {
                    Compile::start('rPHP', $parameters);
                } else {
                    Compile::release_log('Error in argument 2, no source code destination provided.', 'error');
                    Compile::defaultInfo();
                    exit();
                }//end if
            } else {
                Compile::release_log('Error in argument 1, invalid option.', 'error');
                Compile::defaultInfo();
            }//end if
        } else {
            Compile::release_log('Error in argument 1, empty option.', 'error');
            Compile::defaultInfo();
        }//end if
    } else {
        Compile::defaultInfo();
    }//end if

    exit();
})($argv);
