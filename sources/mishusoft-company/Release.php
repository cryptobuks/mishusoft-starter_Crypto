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

use Release\Compile;

// Set customize error controller.
set_error_handler(
    static function ($errorMessage, $errorFile, $errorLine) {
        echo 'Error : '.$errorMessage.' from '.$errorFile.' on line '.$errorLine.PHP_EOL;
    },
    E_ALL
);


// Add Compiler class file.
require_once realpath(__DIR__).'/Release/runtime-variables.php';
require_once realpath(__DIR__).'/Release/Compile.php';

(static function (array $parameters) {
    $compile  = new Compile();
    if (count($parameters) > 0) {
        // Remove file name form $parameters string.
        array_shift($parameters);
        $options = array_shift($parameters);
        if ($options !== null) {
            // Update release versions of remote server.
            if (str_starts_with($options, '-update') === true) {
                if (count($parameters) > 1) {
                    $compile->updateOldVersion($parameters);
                    exit();
                }

                $compile->log(
                    'Error in argument 2, no source code or target destination provided.',
                    'error'
                );
                $compile->defaultInfo();
                exit();
                // end if
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (str_starts_with($options, '-u') === true) {
                $compile->updatePRV(realpath('./package.json'));
                $compile->updatePRVALlPackages(realpath(__DIR__.'/Application/Packages'));
                exit();
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (str_starts_with($options, '-copy') === true) {
                if (count($parameters) > 1) {
                    $compile->start('copy', $parameters, $options);
                    exit();
                }

                $compile->log('Error in argument 2, no source or destination provided.', 'error');
                $compile->defaultInfo();
                exit();
                // end if
            }//end if

            // Show help information.
            if (str_starts_with($options, '-h') === true) {
                $compile->defaultInfo();
                exit();
            }//end if

            // Release themes sources or compressed files.
            if (str_starts_with($options, '-compile-themes') === true
                || str_starts_with($options, '-test-themes') === true
            ) {
                if (count($parameters) > 1) {
                    $options = substr($options, 0, strpos($options, '-themes'));
                    $compile->start('rThemes', $parameters, $options);
                    exit();
                }

                $compile->log(
                    'Error in argument 2, no source code or target destination provided.',
                    'error'
                );
                $compile->defaultInfo();
                exit();
                // end if
            }//end if

            // Release themes sources or compressed files.
            if (str_starts_with($options, '-compile-widgets') === true
                || str_starts_with($options, '-test-widgets') === true
            ) {
                if (count($parameters) > 1) {
                    $options = substr($options, 0, strpos($options, '-widgets'));
                    $compile->start('rWidgets', $parameters, $options);
                    exit();
                }

                $compile->log(
                    'Error in argument 2, no source code or target destination provided.',
                    'error'
                );
                $compile->defaultInfo();
                exit();
                // end if
            }//end if

            // Release static html pages sources files.
            if (str_starts_with($options, '-compile-static') === true
                || str_starts_with($options, '-test-static') === true
            ) {
                if (count($parameters) > 1) {
                    $options = substr($options, 0, strpos($options, '-static'));
                    $compile->start('rStaticHTMLPages', $parameters, $options);
                    exit();
                }

                $compile->log('Error in argument 2, no source code destination provided.', 'error');
                $compile->defaultInfo();
                exit();
                // end if
            }//end if

            // Compress sources code.
            if (str_starts_with($options, '-compile') === true || str_starts_with($options, '-test') === true) {
                if (count($parameters) > 1) {
                    $compile->start('rPHP', $parameters, $options);
                    exit();
                }

                $compile->log('Error in argument 2, no source code destination provided.', 'error');
                $compile->defaultInfo();
                exit();
                // end if
            }

            $compile->log('Error in argument 1, invalid option.', 'error');
            $compile->defaultInfo();
            // end if
            exit();
        }//end if

        $compile->log('Error in argument 1, empty option.', 'error');
        $compile->defaultInfo();
        exit();
        // end if
    }//end if

    $compile->defaultInfo();
    exit();
    // end if
})($argv);
