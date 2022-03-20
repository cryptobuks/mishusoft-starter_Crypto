<?php

/**
 * The main loader of global helper's for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */

/**
 * Make a error for flexible uses
 *
 * @param string $message Text message about error
 * @param int $error_level Error type number
 *
 * @return void
 */
function error(string $message, int $error_level = E_USER_NOTICE)
{
    $array = array_slice(debug_backtrace(), 1);
    $caller = array_shift($array);
    trigger_error(sprintf('%1$s in %2$s on line %3$d', $message, $caller["file"], $caller["line"]), $error_level);
}

/**
 * Get framework absolute path
 *
 * @return string Return full path of framework
 */
function frameworkPath(): string
{
    if (defined("FRAMEWORK_PATH") && file_exists(FRAMEWORK_PATH)) {
        //set framework path from install directory
        $frameworkPath = FRAMEWORK_PATH;
    } elseif (defined("SRC_FRAMEWORK_PATH") && file_exists(SRC_FRAMEWORK_PATH)) {
        //set framework path from sources
        $frameworkPath = SRC_FRAMEWORK_PATH;
    } else {
        //set default framework path
        $frameworkPath = realpath(dirname(__DIR__, 2) . "Framework") . DS;
    }
    return $frameworkPath;
}


