<?php

// Start enable-mode.
// Enable display error mode.
error_reporting(E_ALL);
// ini_set('display_errors', '0');
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
// End enable-mode.
ini_set('max_input_time', '600');
ini_set('max_execution_time', '300');
ini_set('zlib.output_compression', 'On');
set_time_limit(600);