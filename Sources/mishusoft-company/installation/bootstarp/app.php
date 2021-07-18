<?php


// Constants for Mishusoft associates.
define('APPLICATION_DOCUMENT_ROOT', realpath(dirname(__FILE__, 3)).DS);
define('APPLICATION_SERVER_PATH', dirname($_SERVER['PHP_SELF']));

define('RUNTIME_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH.'tmp'.DS);
define('RUNTIME_CACHE_ROOT_PATH', RUNTIME_ROOT_PATH.'tmp/'.md5($_SERVER['PHP_SELF']).DS);

if (array_key_exists('HTTP_HOST', $_SERVER) === true) {
    define('INSTALLED_HOST_NAME', $_SERVER['HTTP_HOST']);
} else {
    define('INSTALLED_HOST_NAME', 'localhost');
}

if (array_key_exists('SERVER_NAME', $_SERVER) === true) {
    define('APPLICATION_SERVER_NAME', $_SERVER['SERVER_NAME']);
} else {
    define('APPLICATION_SERVER_NAME', 'localhost');
}

// Create root directory for current server.
if ((file_exists(RUNTIME_CACHE_ROOT_PATH) === false)
    && mkdir(RUNTIME_CACHE_ROOT_PATH, 0777, true) === false
    && is_dir(RUNTIME_CACHE_ROOT_PATH) === false
) {
    throw new RuntimeException(sprintf('Directory "%s" was not created', RUNTIME_CACHE_ROOT_PATH));
}


define('RUNTIME_CACHE_TEMP_PATH', RUNTIME_CACHE_ROOT_PATH.'caches'.DS);
define('RUNTIME_REGISTRIES_PATH', RUNTIME_CACHE_ROOT_PATH.'configs'.DS);
define('RUNTIME_LOGS_PATH', RUNTIME_CACHE_ROOT_PATH.'logs'.DS);
define('RUNTIME_CACHE_TEMPLATES_PATH', RUNTIME_CACHE_ROOT_PATH.'templates'.DS);


// Logger style for log writing.
define('LOGGER_WRITE_STYLE_SMART', 'smart');
define('LOGGER_WRITE_STYLE_SHORTCUT', 'shortcut');
define('LOGGER_WRITE_STYLE_FULL', 'full');

// Log flag.
define('LOGGER_FLAG_TYPE_COMPILE', 'compile');
define('LOGGER_FLAG_TYPE_ACCESS', 'access');
define('LOGGER_FLAG_TYPE_RUNTIME', 'runtime');


// System default path declare.
define('APPLICATION_SYSTEM_PATH', RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);
define('APPLICATION_FRAMEWORK_PATH', RUNTIME_SYSTEM_PATH.'Framework'.DIRECTORY_SEPARATOR);
define('APPLICATION_PACKAGES_PATH', RUNTIME_SYSTEM_PATH.'Packages'.DIRECTORY_SEPARATOR);
define('APPLICATION_THEMES_PATH', RUNTIME_SYSTEM_PATH.'Themes'.DIRECTORY_SEPARATOR);
define('APPLICATION_WIDGETS_PATH', RUNTIME_SYSTEM_PATH.'Widgets'.DIRECTORY_SEPARATOR);
define('APPLICATION_PAGINATION_PATH', RUNTIME_SYSTEM_PATH.'Views/Pagination'.DIRECTORY_SEPARATOR);

define('APPLICATION_STORAGE_PATH', RUNTIME_ROOT_PATH.'Storages'.DIRECTORY_SEPARATOR);
define('APPLICATION_DATABASES_PATH', APPLICATION_STORAGE_PATH.'0/databases'.DIRECTORY_SEPARATOR);
define('APPLICATION_ASSETS_MEDIA_PATH', APPLICATION_STORAGE_PATH.'0/assets'.DIRECTORY_SEPARATOR);
define('APPLICATION_PRIVATE_MEDIA_PATH', APPLICATION_STORAGE_PATH.'0/media'.DIRECTORY_SEPARATOR);
define('APPLICATION_PRIVATE_LOCALIZATIONS_PATH', APPLICATION_STORAGE_PATH.'0/localization'.DIRECTORY_SEPARATOR);
define('APPLICATION_UPLOADS_MEDIA_PATH', APPLICATION_STORAGE_PATH.'0/media/uploads'.DIRECTORY_SEPARATOR);

define('APPLICATION_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH.'tmp'.DIRECTORY_SEPARATOR);
// Main constants define end.
define('PHP_LANG_VERSION', PHP_VERSION);
define('HASH_KEY', '57c1d48ba721a');
define('HASH_KEY_OPENSSL', 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU');

// Database info.
define('APPLICATION_SYSTEM_USER_NAME', 'superuser');
define('APPLICATION_SYSTEM_USER_PASSWORD', 'superuser');

define('PREG_QUOTE_DEFAULT_SEPARATOR', '/@#~');


//Load composer files
include_once dirname(__DIR__).'/vendor/autoload.php';
//Load mishusoft framework
include_once __DIR__.'autoload.php';
