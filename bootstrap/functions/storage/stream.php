<?php

    /**
     * The loader of stream functions for mishusoft application
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
     * Stream file with http response
     *
     * @param string $filename File name or path for stream
     */
    function stream_file(string $filename): void
    {
        if (is_readable($filename)) {
            // set last modified time with fallback time
            $info = new SplFileInfo($filename);
            // Getting headers sent by the client.
            $requestedHeaders = apache_request_headers();
            // 7 days; 24 hours; 60 mins; 60 secs
            $nextWeek = time() + (7 * 24 * 60 * 60);

            // Checking if the client is validating his cache and if it is current.
            if (array_key_exists('If-Modified-Since', $requestedHeaders)) {
                // Client's cache IS current, so we just respond '304 Not Modified'.
                if (strtotime($requestedHeaders['If-Modified-Since']) === $info->getMTime()) {
                    header(
                        sprintf(
                            'Last-Modified: %1$s GMT',
                            gmdate('D, d M Y H:i:s', $info->getMTime())
                        ),
                        true,
                        304
                    );
                }
            } else {
                // Enable GZip encoding.
                ob_start();
                // Add additional headers
                header(sprintf('Content-length: %1$s', filesize($filename)));
                header(sprintf('Content-Type: %1$s', get_mime_content($filename)));
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
                // https://stackoverflow.com/questions/49547/how-do-we-control-web-page-caching-across-all-browsers
                // header('Cache-Control: no-cache, must-revalidate');
                header('Cache-Control: public, must-revalidate');
                header('Pragma: public, must-revalidate');
                header(sprintf('Expires: %1$s GMT', gmdate('D, d M Y H:i:s', $nextWeek)), true);
                // file not cached or cache outdated, we respond '200 OK' and output the file.
                header(sprintf('Last-Modified: %1$s GMT', gmdate('D, d M Y H:i:s', $info->getMTime())), true, 200);

                // Stream a file
                // echo read_file_sync($filename);
                readfile($filename);

                ob_end_flush();
            }
        }//end if
    }


    /**
     * @param array $data
     *
     * @throws Exception
     */
    function stream_to_json(array $data): void
    {
        if (empty($data) === false) {
            header('Content-type:application/json;charset=UTF-8');
            echo encode_to_json($data);
        } else {
            http_response_code(400);
            echo encode_to_json(
                ['type' => 'error', 'message' => 'JSONOutput::ERROR: Input message error']
            );
        }
    }//end StreamAsJson()
