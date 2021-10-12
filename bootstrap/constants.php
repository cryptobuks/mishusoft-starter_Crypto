<?php


// Start of core constants declarations.
const DS = DIRECTORY_SEPARATOR;
const PHP_CODE_SYNTAX = 'PHP_8.*';
const WHO_AM_I = 'Mishusoft';
const ROOT_IDENTITY = 'app://';
const PUBLIC_ROOT_PATH = 'public_html' . DS;
const IS_CLI = (PHP_SAPI === 'cli');
const LB = IS_CLI ? PHP_EOL : '<br/>';
// Main constants define end.

const PHP_LANG_VERSION = PHP_VERSION;
const HASH_KEY = '57c1d48ba721a';
const HASH_KEY_OPENSSL = 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU';

// Database info.
const APPLICATION_SYSTEM_USER_NAME = 'msu_superuser';
const APPLICATION_SYSTEM_USER_PASSWORD = 'superuser';
const MS_DB_USER_NAME = APPLICATION_SYSTEM_USER_NAME;
const MS_DB_USER_PASSWORD = APPLICATION_SYSTEM_USER_PASSWORD;

const PREG_QUOTE_DEFAULT_SEPARATOR = '/@#~';


// enable or disable browser cache data update.
const BROWSERS_CACHE_DATA_UPDATE = true;
// enable or disable memory cache data update.
const MEMORY_CACHE_DATA_UPDATE = false;

// enable or disable logging.
const LOGGING_ON_OPERATION = false;

// Logger style for log writing.
const LOG_STYLE_SMART = 'smart';
const LOG_STYLE_SHORTCUT = 'shortcut';
const LOG_STYLE_FULL = 'full';

// Log flag.
const LOG_TYPE_COMPILE = 'compile';
const LOG_TYPE_ACCESS = 'access';
const LOG_TYPE_RUNTIME = 'runtime';


//Implement


/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const IMPLEMENT_JSON_SLICE = 1;

/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const IMPLEMENT_JSON_IN_STR = 2;

/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const IMPLEMENT_JSON_IN_ARR = 3;

/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const IMPLEMENT_JSON_IN_OBJ = 4;

/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const IMPLEMENT_JSON_IN_CMT = 5;

/**
 * Behavior switch for Implement::decode()
 */
const IMPLEMENT_JSON_LOOSE_TYPE = 16;

/**
 * Behavior switch for Implement::decode()
 */
const IMPLEMENT_JSON_SUPPRESS_ERRORS = 32;

/**
 * Behavior switch for Implement::decode()
 */
const IMPLEMENT_JSON_USE_TO_JSON = 64;




define('CURRENT_YEAR', date('Y'));
define('RUNTIME_ROOT_PATH', realpath(dirname(__DIR__)) . DS);
define('RUNTIME_CACHE_ROOT_PATH', RUNTIME_ROOT_PATH . 'tmp' . DS . md5($_SERVER['PHP_SELF']) . DS);

const RUNTIME_SOURCES_PATH = RUNTIME_ROOT_PATH . 'sources' . DS. 'mishusoft-company' . DS;
const SRC_FRAMEWORK_PATH = RUNTIME_SOURCES_PATH. 'Framework' . DS;
const FRAMEWORK_PATH = RUNTIME_ROOT_PATH . 'Framework' . DS;
const APPLICATION_SYSTEM_TEMP_PATH = RUNTIME_ROOT_PATH . 'tmp' . DS;


// Constants for Mishusoft associates.

if (array_key_exists('USER', $_SERVER)) {
    define('CURRENT_SYS_USER', $_SERVER['USER']);
} else {
    define('CURRENT_SYS_USER', get_current_user());
}



//
//define('RUNTIME_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH . 'tmp' . DS);
//
//define('RUNTIME_CACHE_ROOT_PATH', RUNTIME_ROOT_PATH . 'tmp/' . md5($_SERVER['PHP_SELF']) . DS);
//
if (array_key_exists('HTTP_HOST', $_SERVER)) {
    define('INSTALLED_HOST_NAME', $_SERVER['HTTP_HOST']);
} else {
    define('INSTALLED_HOST_NAME', 'localhost');
}

if (array_key_exists('SERVER_NAME', $_SERVER)) {
    define('APPLICATION_SERVER_NAME', $_SERVER['SERVER_NAME']);
} else {
    define('APPLICATION_SERVER_NAME', 'localhost');
}

//
//// Create root directory for current server.
//if ((file_exists(RUNTIME_CACHE_ROOT_PATH) === false)
//    && mkdir(RUNTIME_CACHE_ROOT_PATH, 0777, true) === false
//    && is_dir(RUNTIME_CACHE_ROOT_PATH) === false
//) {
//    throw new RuntimeException(sprintf('Directory "%s" was not created', RUNTIME_CACHE_ROOT_PATH));
//}
//
//
//define('RUNTIME_CACHE_TEMP_PATH', RUNTIME_CACHE_ROOT_PATH . 'caches' . DS);
//define('RUNTIME_REGISTRIES_PATH', RUNTIME_CACHE_ROOT_PATH . 'configs' . DS);
//define('RUNTIME_LOGS_PATH', RUNTIME_CACHE_ROOT_PATH . 'logs' . DS);
//define('RUNTIME_CACHE_TEMPLATES_PATH', RUNTIME_CACHE_ROOT_PATH . 'templates' . DS);


//
//
//// System default path declare.
//define('APPLICATION_SYSTEM_PATH', RUNTIME_ROOT_PATH . 'Mishusoft' . DS);
//define('APPLICATION_FRAMEWORK_PATH', RUNTIME_SYSTEM_PATH . 'Framework' . DS);
//define('APPLICATION_PACKAGES_PATH', RUNTIME_SYSTEM_PATH . 'Packages' . DS);
//define('APPLICATION_THEMES_PATH', RUNTIME_SYSTEM_PATH . 'Themes' . DS);
//define('APPLICATION_WIDGETS_PATH', RUNTIME_SYSTEM_PATH . 'Widgets' . DS);
//define('APPLICATION_PAGINATION_PATH', RUNTIME_SYSTEM_PATH . 'Views/Pagination' . DS);
//
//define('APPLICATION_STORAGE_PATH', RUNTIME_ROOT_PATH . 'Storages' . DS);
//define('APPLICATION_DATABASES_PATH', APPLICATION_STORAGE_PATH . '0/databases' . DS);
//define('APPLICATION_ASSETS_MEDIA_PATH', APPLICATION_STORAGE_PATH . '0/assets' . DS);
//define('APPLICATION_PRIVATE_MEDIA_PATH', APPLICATION_STORAGE_PATH . '0/media' . DS);
//define('APPLICATION_PRIVATE_LOCALIZATIONS_PATH', APPLICATION_STORAGE_PATH . '0/localization' . DS);
//define('APPLICATION_UPLOADS_MEDIA_PATH', APPLICATION_STORAGE_PATH . '0/media/uploads' . DS);
//
//define('APPLICATION_PACKAGES_PATH', RUNTIME_ROOT_PATH . 'app' . DS);
