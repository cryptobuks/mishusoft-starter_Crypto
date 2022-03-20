<?php

    /**
     * The loader of maintenance templates functions for mishusoft application
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
     * @param string $year
     * @param string $company
     * @return string
     */
    function get_copy_right_text(string $year, string $company): string
    {
        // Copyright © 2020 Winstarit LTD. All Right Reserved.
        return sprintf('Copyright © %1$s %2$s. All Right Reserved.', $year, $company);
    }
