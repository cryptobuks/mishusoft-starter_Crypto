<?php

    /**
     * The loader of http interface for mishusoft application
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    //Load runtime defined ini file
    require_once __DIR__ . "/core/main.php";

    //Load pre defined constants
    require_once __DIR__ . "/constants.php";
    require_once __DIR__ . "/base64-files.php";
    require_once __DIR__ . "/functions.php";
    require_once __DIR__ . "/helpers.php";

    //Load mishusoft framework
    require_once __DIR__ . "/autoload.php";
