<?php

/*
 * Declare constants
 */

define('DS', DIRECTORY_SEPARATOR);
define('RUNTIME_ROOT_PATH', realpath(__DIR__).DS);
//define('RUNTIME_SYSTEM_PATH', RUNTIME_ROOT_PATH.'Framework/Mishusoft'.DIRECTORY_SEPARATOR);

define('SOURCES_ROOT_PATH', dirname(__DIR__).DS);
define('CURRENT_YEAR', date('Y'));

define('FILE_BASE_NAME', basename(__FILE__));

define('RELEASE_FILE_ROOT', realpath(__FILE__));
define('RELEASE_DOCUMENT_ROOT', realpath('./'));

if (array_key_exists('USER', $_SERVER) === true) {
    define('CURRENT_SYS_USER', $_SERVER['USER']);
} else {
    define('CURRENT_SYS_USER', get_current_user());
}

