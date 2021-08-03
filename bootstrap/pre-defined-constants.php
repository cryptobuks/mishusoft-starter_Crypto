<?php


// Start of core constants declarations.
define('DS', DIRECTORY_SEPARATOR);
define('PHP_CODE_SYNTAX', 'PHP_8.*');
define('WHO_AM_I', 'Mishusoft');
define('RUNTIME_ROOT_PATH', realpath(dirname(__DIR__)) . DS);


define('APPLICATION_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH . 'tmp' . DS);
// Main constants define end.
define('PHP_LANG_VERSION', PHP_VERSION);
define('HASH_KEY', '57c1d48ba721a');
define('HASH_KEY_OPENSSL', 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU');

// Database info.
define('APPLICATION_SYSTEM_USER_NAME', 'superuser');
define('APPLICATION_SYSTEM_USER_PASSWORD', 'superuser');

define('PREG_QUOTE_DEFAULT_SEPARATOR', '/@#~');


// Logger style for log writing.
define('LOG_STYLE_SMART', 'smart');
define('LOG_STYLE_SHORTCUT', 'shortcut');
define('LOG_STYLE_FULL', 'full');

// Log flag.
define('LOG_TYPE_COMPILE', 'compile');
define('LOG_TYPE_ACCESS', 'access');
define('LOG_TYPE_RUNTIME', 'runtime');





// Constants for Mishusoft associates.
//
//define('RUNTIME_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH . 'tmp' . DS);
//
//define('RUNTIME_CACHE_ROOT_PATH', RUNTIME_ROOT_PATH . 'tmp/' . md5($_SERVER['PHP_SELF']) . DS);
//
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

