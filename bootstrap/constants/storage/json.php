<?php

/**
 * The loader of json constants for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */


//Implement

/**
 * Marker constant for Implement::decode(), used to flag stack state
 */
const JSON_SLICE = 1;
const JSON_IN_STR = 2;
const JSON_IN_ARR = 3;
const JSON_IN_OBJ = 4;
const JSON_IN_CMT = 5;

/**
 * Behavior switch for Implement::decode()
 */
const JSON_LOOSE_TYPE = 16;
const JSON_SUPPRESS_ERRORS = 32;
const JSON_USE_TO_JSON = 64;