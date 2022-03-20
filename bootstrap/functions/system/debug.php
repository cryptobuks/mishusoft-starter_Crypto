<?php

/**
 * The loader of debug functions for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */


/**
 * Pretty print
 * @param mixed $content
 */
function pp(mixed $content): void
{
    echo PHP_SAPI === "cli" ? "\n" : "<pre>";
    print_r($content, false);
    echo PHP_SAPI === "cli" ? "\n" : "</pre>";
}

/**
 * Pretty debug backtrace
 * @return void
 */
function pretty_debug_backtrace(): void
{
    pp(debug_backtrace());
}