<?php

/**
 * The loader of global constants for mishusoft application
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://mishusoft.com
 */

// Start of core constants declarations.
const DS = DIRECTORY_SEPARATOR;
const PHP_CODE_SYNTAX = "PHP_8.*";
const WHO_AM_I = "Mishusoft";
const ROOT_IDENTITY = "app://";
const PUBLIC_ROOT_PATH = "public_html" . DS;
const IS_CLI = PHP_SAPI === "cli";
const LB = IS_CLI ? PHP_EOL : "<br/>";
// Main constants define end.

const PHP_LANG_VERSION = PHP_VERSION;
const HASH_KEY = "57c1d48ba721a";
const HASH_KEY_OPENSSL = "bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU";

// Database info.
const APPLICATION_SYSTEM_USER_NAME = "msu_superuser";
const APPLICATION_SYSTEM_USER_PASSWORD = "superuser";
const MS_DB_USER_NAME = APPLICATION_SYSTEM_USER_NAME;
const MS_DB_USER_PASSWORD = APPLICATION_SYSTEM_USER_PASSWORD;

const PREG_QUOTE_DEFAULT_SEPARATOR = "/@#~";

// enable or disable browser cache data update.
const BROWSERS_CACHE_DATA_UPDATE = true;
// enable or disable memory cache data update.
const MEMORY_CACHE_DATA_UPDATE = false;

// enable or disable logging.
const LOGGING_ON_OPERATION = false;

// Logger style for log writing.
const LOG_STYLE_SMART = "smart";
const LOG_STYLE_SHORTCUT = "shortcut";
const LOG_STYLE_FULL = "full";

// Log flag.
const LOG_TYPE_COMPILE = "compile";
const LOG_TYPE_ACCESS = "access";
const LOG_TYPE_RUNTIME = "runtime";

//Implement

/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const IMPLEMENT_JSON_SLICE = 1;
const IMPLEMENT_JSON_IN_STR = 2;
const IMPLEMENT_JSON_IN_ARR = 3;
const IMPLEMENT_JSON_IN_OBJ = 4;
const IMPLEMENT_JSON_IN_CMT = 5;

/**
 * Behavior switch for Implement::decode()
 */
const IMPLEMENT_JSON_LOOSE_TYPE = 16;
const IMPLEMENT_JSON_SUPPRESS_ERRORS = 32;
const IMPLEMENT_JSON_USE_TO_JSON = 64;

define("CURRENT_YEAR", date("Y"));
define("RUNTIME_ROOT_PATH", realpath(dirname(__DIR__)) . DS);
define("RUNTIME_CACHE_ROOT_PATH", RUNTIME_ROOT_PATH . "tmp" . DS . md5($_SERVER["PHP_SELF"]) . DS);
define("RUNTIME_SOURCES_PATH", RUNTIME_ROOT_PATH . "sources" . DS . "mishusoft-company" . DS);

const SRC_FRAMEWORK_PATH = RUNTIME_SOURCES_PATH . "Framework" . DS;
const FRAMEWORK_PATH = RUNTIME_ROOT_PATH . "Framework" . DS;
const APPLICATION_SYSTEM_TEMP_PATH = RUNTIME_ROOT_PATH . "tmp" . DS;

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
