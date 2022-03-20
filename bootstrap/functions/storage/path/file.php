<?php


    /**
     * Generate full file path
     *
     * @param string $path      Full path name, path must be absolute local
     * @param string $extension File extension, msf is default
     *
     * @return string Full path of provided file
     */
    function dFile(string $path, string $extension = "msf"): string
    {
        return sprintf('%1$s.%2$s', $path, $extension);
    }


    /**
     * Data drive file for specific directive
     *
     * @param string $directive Directive name
     * @param string $filename  File name
     *
     * @return string Full path of data directive
     */
    function data_drive_file(string $directive, string $filename): string
    {
        return sprintf('%1$s%2$s', data_drive_directive($directive), $filename);
    }

    /**
     * Config file for specific directive
     *
     * @param string $directive Directive name
     * @param string $filename  File name
     *
     * @return string Full path of config file
     */
    function configs_data_file(string $directive, string $filename): string
    {
        return sprintf('%1$s%2$s', configs_data_directive($directive), $filename);
    }


    /**
     * Log data file for specific directive
     *
     * @param string $directive Directive name
     * @param string $filename  File Name
     *
     * @return string Full path of log data file
     */
    function log_data_file(string $directive, string $filename): string
    {
        return sprintf('%1$s%2$s', logs_directive($directive), $filename);
    }

    /**
     * Get shareable resource path
     *
     * @param string      $directive Directive name
     * @param string|null $filename  File name
     *
     * @return string full path of resource file
     */
    function resource_path_full(string $directive, string $filename = null): string
    {
        return sprintf('%1$s%2$s', path_storage_resource($directive), $filename);
    }


    /**
     * Get shareable authorized file path
     *
     * @param string      $directive Directive name
     * @param string|null $filename  File name
     *
     * @return string full path of resource file
     */
    function authorized_path_full(string $directive, string $filename = null): string
    {
        return sprintf('%1$s%2$s', path_storage_authorized($directive), $filename);
    }
