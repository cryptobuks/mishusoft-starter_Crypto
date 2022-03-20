<?php

    /**
     * The loader of dot env functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    // https://dev.to/fadymr/php-create-your-own-php-dotenv-3k2i
    // https://github.com/devcoder-xyz/php-dotenv

    declare(strict_types=1);

    /**
     * Load own variable in $_ENV and $_SERVER
     *
     * @return void
     */
    function load_environment_variables(): void
    {
        if (is_usable_this_file(default_env_file())) {
            foreach (environment_variables() as $key => $value) {
                if (!array_key_exists($key, $_ENV) && !array_key_exists($key, $_SERVER)) {
                    load_variable_to_env([$key => $value]);
                }
            }
        }
    }
