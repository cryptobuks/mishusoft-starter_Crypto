<?php
// Start enable-mode.
// Enable display error mode.
error_reporting(E_ALL);
// ini_set('display_errors', '0');
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
// End enable-mode.
ini_set('max_input_time', '600');
ini_set('max_execution_time', '600');
ini_set('zlib.output_compression', 'On');
set_time_limit(600);

//Load pre defined constants
include_once __DIR__ . '/pre-defined-constants.php';
include_once __DIR__ . '/pre-defined-base64-files.php';

//Load mishusoft framework
include_once __DIR__ . '/autoload.php';
