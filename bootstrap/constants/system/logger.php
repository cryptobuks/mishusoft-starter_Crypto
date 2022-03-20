<?php

/**
 * The loader of logger constants for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */

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