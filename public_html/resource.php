<?php

// resource.php

    // Although not exhaustive,
    // the possible return values include
    // apache, apache2handler, cgi (until PHP 5.3), cgi-fcgi, cli, cli-server, embed, fpm-fcgi, litespeed, phpdbg.

    if (in_array(PHP_SAPI, ['cli-server', 'apache2handler', 'litespeed'], true)) {
        // add functions and helpers files
        require_once dirname(__DIR__) . '/bootstrap/constants.php';
        require_once dirname(__DIR__) . '/bootstrap/functions.php';


        // expected urls
        // http://localhost:8080/index.php
        // http://localhost:8080/resource.php/framework/images/icons/maintenance.png
        // http://localhost/dev/public_html/resource.php/framework/images/icons/maintenance.png
        // http://localhost:8080/framework/images/icons/maintenance.png
        // http://localhost/dev/public_html/framework/images/icons/maintenance.png

        // implement required variables
        $requestedUrl = fixSlash(requestedUrl());
        $urlRoute     = webInstalledRoot();
        $urls         = [];

        // implement provides files and allowed modules
        $providedFiles  = 'css|js|jpe?g|png|svg|webp|woff2?|ttf';
        $allowedModules = ['assets', 'media', 'framework', 'shared'];

        if ($urlRoute !== '/') {
            $requestedUrl = str_replace($urlRoute, '', $requestedUrl);
        }

        // explode and filter urls
        $urls = explode('/', $requestedUrl);
        $urls = array_filter($urls);

        // extract module and arguments
        $moduleRoute = array_shift($urls);
        $module      = array_shift($urls);
        $arguments   = $urls;

//        pp($moduleRoute);
//        pp(get_http_request_method());
//        pp($module);

//        pp(in_array($module, $allowedModules, true));


        // verify request method and allowed modules for stream
        if ($moduleRoute === 'resource' && get_http_request_method() === 'GET' && in_array($module, $allowedModules, true)) {
            $rootPath = realpath(dirname(__DIR__));

//            pp($rootPath);
//            pp(file_exists($rootPath));

            if (is_string($rootPath) && file_exists($rootPath)) {
//                pp($arguments);
                // In case of provided files, add the appropriate header
                // https://www.php.net/manual/en/features.commandline.webserver.php
                if (count($arguments) > 0 && preg_match(sprintf('/\.(?:%1$s)$/', $providedFiles), $requestedUrl)) {
                    stream_file(fixDoubleSlash(resourceFilePath($rootPath, implode('/', $arguments))));
                } elseif (get_visited_current_page() !== webDocumentRoot()) {
                    redirectUrl(webDocumentRoot());
                } else {
//                    pp($rootPath);
//                    pp(reset($urls));
//                    pp(reset($arguments));
//                    pp(fixDoubleSlash(resourceFilePath($rootPath, implode('/', $arguments))));
                    exit();
                }
            }
        }
    }
    /* go on with normal index.php operations */
