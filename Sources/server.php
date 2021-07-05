<?php

/**
 * Mishusoft Framework - A PHP Framework For Web travelers
 *
 * @package  Mishusoft Framework
 * @author   Al-Amin Ahamed (Abir) <alamin@mishusoft.com>
 */

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

// This file allows us to emulate Apache's "mod_rewrite" functionality from the
// built-in PHP web server. This provides a convenient way to test a Laravel
// application without having installed a "real" web server software here.
if ($uri !== '/' && file_exists(__DIR__.'/public_html'.$uri)) {
    return false;
}

// https://www.php.net/manual/en/features.commandline.webserver.php
//php -S localhost -S localhost:8080 router.php

require_once __DIR__.'/public_html/index.php';
