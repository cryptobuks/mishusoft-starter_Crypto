<?php

/**
 * The loader of complex constants for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */


// Constants for Mishusoft associates.

if (array_key_exists("USER", $_SERVER)) {
    define("CURRENT_SYS_USER", $_SERVER["USER"]);
} else {
    define("CURRENT_SYS_USER", get_current_user());
}

if (array_key_exists("HTTP_HOST", $_SERVER)) {
    define("INSTALLED_HOST_NAME", $_SERVER["HTTP_HOST"]);
} else {
    define("INSTALLED_HOST_NAME", "localhost");
}

if (array_key_exists("SERVER_NAME", $_SERVER)) {
    define("APPLICATION_SERVER_NAME", $_SERVER["SERVER_NAME"]);
} else {
    define("APPLICATION_SERVER_NAME", "localhost");
}
