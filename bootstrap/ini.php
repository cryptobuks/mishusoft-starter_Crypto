<?php

/**
 * The loader of ini configuration
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://mishusoft.com
 */

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
