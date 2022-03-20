<?php

    /**
     * The loader of ini configuration
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    ini_set("files_upload", true);
    ini_set("upload_tmp_dir", dirname(__DIR__, 2) . "/tmp/uploads");
    ini_set("max_input_time", "600");
    ini_set("max_execution_time", "600");
    ini_set("zlib.output_compression", "On");

