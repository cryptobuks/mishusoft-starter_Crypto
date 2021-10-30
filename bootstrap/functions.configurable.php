<?php

/**
 * The loader of global configurable function for mishusoft application
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://mishusoft.com
 */

$directoryPath = __DIR__ . DS . "functions.configurable" . DS;

include_once $directoryPath . "storage.php";
include_once $directoryPath . "unspecific.php";
