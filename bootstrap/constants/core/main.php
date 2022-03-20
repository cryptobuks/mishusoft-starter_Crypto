<?php

    /**
     * The loader of global constants for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    // Start of core constants declarations.
    const PHP_CODE_SYNTAX  = "PHP_8.*";
    const ROOT_IDENTITY    = "app://";
    const PUBLIC_ROOT_PATH = "public_html" . DS;
    const IS_CLI           = PHP_SAPI === "cli";
    const LB               = IS_CLI ? PHP_EOL : "<br/>";
    // Main constants define end.

    const PHP_LANG_VERSION             = PHP_VERSION;
    const PREG_QUOTE_DEFAULT_SEPARATOR = "/@#~";

    define("CURRENT_YEAR", date("Y"));
    define("FRAMEWORK_INSTALLED", $GLOBALS[DEFAULT_MEMORY_SCOPE]['memory']['array'] !== []);
