<?php

    /**
     * The loader of files namespace functions for mishusoft application
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    /**
     * @param string $filename
     *
     * @return string
     */
    function get_namespace_from_filename(string $filename): string
    {
        //make namespace from source path (if development, app://sources/company/Framework)
        if (startsWith($filename, RUNTIME_SOURCES_PATH)) {
            return namespace_builder_from_filename(RUNTIME_SOURCES_PATH . "Framework" . DS, $filename);
        }

        //make namespace from (app://Framework) production
        return namespace_builder_from_filename(RUNTIME_ROOT_PATH . "Framework" . DS, $filename);
    }

    function namespace_builder_from_filename(string $rootPath, string $filename): string
    {
        return build_path_to_namespace(substr($filename, namespace_start_at($filename, $rootPath), strlen($filename)));
    }

    /**
     * @param string $path
     *
     * @return string
     */
    function build_path_to_namespace(string $path): string
    {
        return str_replace(["//", "/"], ["/", "\\"], substr($path, 0, namespace_end_at($path)));
    }

    /**
     * @param string $resources
     * @param string $path
     *
     * @return int
     */
    function namespace_start_at(string $resources, string $path): int
    {
        $path = rtrim($path, DS);
        //get actual point from path/name/with/file.extension
        return strpos($resources, $path) + strlen($path);
    }

    /**
     * @param string $path
     *
     * @return int
     */
    function namespace_end_at(string $path): int
    {
        return strlen($path) - (strlen($path) - strpos($path, ".php"));
    }

    /**
     * @param string $name_space
     * @param string $extension
     *
     * @return string
     */
    function get_filename_from_namespace(string $name_space, string $extension = ".php"): string
    {
        $file = str_replace("\\", DS, $name_space) . $extension;
        return RUNTIME_ROOT_PATH . $file;
    }
