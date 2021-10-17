<?php

/**
 * The loader of http interface for mishusoft application
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://mishusoft.com
 */

//Load runtime defined ini file
require_once __DIR__ . '/ini.php';

//Load pre defined constants
require_once __DIR__ . '/constants.php';
require_once __DIR__ . '/base64-files.php';
require_once __DIR__ . '/functions.php';

//Load mishusoft framework
require_once __DIR__ . '/autoload.php';
