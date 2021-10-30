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
    if ($parameters !== []) {
        // Remove file name form $parameters string.
        array_shift($parameters);
        $options = array_shift($parameters);
        if ($options !== null) {
            // Update release versions of remote server.
            if (strncmp($options, '-update', strlen('-update')) === 0) {
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
            if (strncmp($options, '-u', strlen('-u')) === 0) {
                $compile->updatePRV(realpath('./package.json'));
                $compile->updatePRVALlPackages(realpath(__DIR__.'/Application/Packages'));
                exit();
            }//end if

            // Update node-app and Mishusoft Framework release versions.
            if (strncmp($options, '-copy', strlen('-copy')) === 0) {
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
            if (strncmp($options, '-h', strlen('-h')) === 0) {
                $compile->defaultInfo();
                exit();
            }//end if

            // Release themes sources or compressed files.
            if (strncmp($options, '-compile-themes', strlen('-compile-themes')) === 0
                || strncmp($options, '-test-themes', strlen('-test-themes')) === 0
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
            if (strncmp($options, '-compile-widgets', strlen('-compile-widgets')) === 0
                || strncmp($options, '-test-widgets', strlen('-test-widgets')) === 0
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
            if (strncmp($options, '-compile-static', strlen('-compile-static')) === 0
                || strncmp($options, '-test-static', strlen('-test-static')) === 0
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
            if (strncmp($options, '-compile', strlen('-compile')) === 0 || strncmp($options, '-test', strlen('-test')) === 0) {
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
