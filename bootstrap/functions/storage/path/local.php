<?php

    /**
     * The global path functions for mishusoft application
     *
     * Php version 7.4
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    // Architectures of storage directories
    //
    // storage paths list
    // root : /storage
    //
    // shareable(resource) : /storage/shareable (public shareable without authentication)
    //                       /storage/shareable/assets (build by webpack)
    //                       /storage/shareable/assets/css
    //                       /storage/shareable/assets/js
    //                       /storage/shareable/assets/webfonts
    //
    //                       /storage/shareable/media (copied and compressed)
    //                       /storage/shareable/media/images (un-categories and all)
    //                       /storage/shareable/media/logos (user defined and updated by framework)
    //
    //                       /storage/shareable/framework (build by webpack)
    //                       /storage/shareable/framework/css
    //                       /storage/shareable/framework/images
    //                       /storage/shareable/framework/logos
    //                       /storage/shareable/framework/webfonts
    //
    // authorized (file)  : /storage/authorized (shareable with authorized user)
    //                      /storage/authorized/uploads (any uploads files)
    //                      /storage/authorized/users (users profile photos, cover photos)
    //
    // internal (system) : /storage/system
    //                     /storage/system/databases (resettable)
    //                     /storage/system/caches (resettable)
    //                     /storage/system/configs (resettable)
    //                     /storage/system/logs (resettable)
    //                     /storage/system/sessions (resettable)
    //                     /storage/system/localization (upgradeable by upload new lang pack)
    //                     /storage/system/cert (default ssl certificate and key)
    //                     /storage/system/views (php files that are used in special section)
    //                     /storage/system/data-drive (data directories for different libraries)

    /**
     * @return string
     */
    function path_runtime_root(): string
    {
        return RUNTIME_ROOT_PATH;
    }

    /**
     * @return string
     */
    function path_default_storage_directory(): string
    {
        return 'storages';
    }

    /**
     * @return string
     */
    function path_default_storage_web(): string
    {
        return 'resource';
    }

    /**
     * @param string $path_name
     *
     * @return string
     */
    function path_intelligent_storage(string $path_name): string
    {
        return str_replace(path_runtime_root(), ROOT_IDENTITY, $path_name);
    }

    /**
     * @return string
     */
    function path_storage_root(): string
    {
        return path_storage();
    }


    /**
     * @param string $type
     *
     * @return string
     */
    function path_storage(string $type = 'root'): string
    {
        $container = path_default_storage_directory();
        return sprintf(
            '%1$s%2$s/',
            path_runtime_root(),
            match (strtolower($type)) {
                'resource'   => $container . '/resource',
                'authorized' => $container . '/authorized',
                'internal'   => $container . '/system',
                default      => $container,
            }
        );
    }

    /**
     * @param string $type
     *
     * @return string
     */
    function path_storage_authorized(string $type = 'uploads'): string
    {
        return sprintf(
            '%1$s/%2$s/',
            path_storage('authorized'),
            match (strtolower($type)) {
                'users'             => 'users',
                'users.backgrounds' => 'users/backgrounds',
                'users.covers'      => 'users/covers',
                'users.profiles'    => 'users/profiles',
                default             => 'uploads',
            }
        );
    }

    /**
     * @param string $type
     *
     * @return string
     */
    function path_storage_resource(string $type = 'default'): string
    {
        return sprintf(
            '%1$s%2$s/',
            path_storage('resource'),
            match (strtolower($type)) {
                // media
                'media'              => 'media',
                'media.images'       => 'media/images',
                'media.logos'        => 'media/logos',
                'media.users'        => 'media/users',
                // framework
                'framework'          => 'framework',
                'framework.css'      => 'framework/css',
                'framework.js'       => 'framework/js',
                'framework.logos'    => 'framework/logos',
                'framework.webfonts' => 'framework/webfonts',
                // assets
                'assets'             => 'assets',
                'assets.css'         => 'assets/css',
                'assets.js'          => 'assets/js',
                'assets.webfonts'    => 'assets/webfonts',
                default              => '',
            }
        );
    }

    /**
     * @param string $type
     *
     * @return string
     */
    function path_storage_system(string $type = 'cert'): string
    {
        return sprintf(
            '%1$s%2$s/',
            path_storage('internal'),
            match (strtolower($type)) {
                // Data Drive
                'data.drive'             => 'data-drive',
                'data.drive.geo.ip'      => 'data-drive/GeoIP',
                'data.drive.media.types' => 'data-drive/MediaTypes',
                'data.drive.ua.analyzer' => 'data-drive/UAAnalyzer',
                // Location
                'location'               => 'location',
                // resettable
                'resettable'             => 'resettable',
                'caches'                 => 'resettable/caches',
                'configs'                => 'resettable/configs',
                'databases'              => 'resettable/databases',
                'logs'                   => 'resettable/logs',
                'sessions'               => 'resettable/sessions',
                //views
                'views'                  => 'views',
                default                  => 'cert',
            }
        );
    }


    /**
     * Get current directory name from full path
     *
     * @param string $fullPath
     * @param string $rootPath
     *
     * @return string
     */
    function path_directory_name(string $fullPath, string $rootPath = RUNTIME_ROOT_PATH): string
    {
        return substr($fullPath, strlen($rootPath), strlen($fullPath) - strlen($rootPath) - 1);
    }

    /**
     * @param string $directive
     *
     * @return string
     */
    function data_drive_directive(string $directive): string
    {
        return sprintf('%1$s%2$s%3$s', path_storage_system('data.drive'), $directive, DS);
    }

    /**
     * @param string $directive
     *
     * @return string
     */
    function configs_data_directive(string $directive): string
    {
        return sprintf('%1$s%2$s%3$s', path_storage_system('configs'), $directive, DS);
    }

    /**
     * @param string $directive
     *
     * @return string
     */
    function logs_directive(string $directive): string
    {
        return sprintf('%1$s%2$s%3$s', path_storage_system('logs'), $directive, DS);
    }
