<?php

    declare(strict_types = 1);

    namespace Mishusoft\Storage;

    use Mishusoft\System\Framework;
    use Mishusoft\Utility\Implement;

    class Stream
    {
        /**
         * @param string $filename
         *
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function file(string $filename): void
        {
//        pp(func_get_args());
//        pp(is_readable($filename));
//        pp(apache_request_headers());
//        pp(get_file_ext($filename));
//       // pp(media_types_all());
//        pp(get_file_info($filename));
//       pp(get_mime_content($filename));
//       pp(filesize($filename));
//
//        exit();
            if (is_readable($filename)) {
                // Getting headers sent by the client.
                $headers = apache_request_headers();
                // Checking if the client is validating his cache and if it is current.
                if (array_key_exists('If-Modified-Since', $headers) === true) {
                    // Client's cache IS current, so we just respond '304 Not Modified'.
                    if (strtotime($headers['If-Modified-Since']) === filemtime($filename)) {
                        header('Last-Modified: ' . gmdate('D, d M Y H:i:s', filemtime($filename)) . ' GMT', true, 304);
                    }
                } else {
                    ob_start();
                    // header(
                    //"Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval';
                    //font-src 'self' data:;img-src 'self' 'unsafe-inline' data:;
                    //script-src 'self' 'unsafe-inline';style-src 'self' 'unsafe-inline';
                    //style-src-attr 'self' 'unsafe-inline';"
                    //);
                    header('Content-length: ' . filesize($filename));
                    header('Content-Type: ' . get_mime_content($filename));
                    // We'll be outputting a file
                    // header("Content-Type: " . finfo_file(finfo_open(FILEINFO_MIME_TYPE), $filename));
                    header('Cache-Control: no-cache, must-revalidate');
                    //Date: Tue, 02 Nov 2021 10:28:52 GMT
                    //Expires: Thu, 19 Nov 1981 08:52:00 GMT
                    header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 360000) . ' GMT', true);
                    if (is_int(filemtime($filename))) {
                        // HTTP/1.1
                        // file not cached or cache outdated, we respond '200 OK' and output the file.
                        header('Last-Modified: ' . gmdate('D, d M Y H:i:s', filemtime($filename)) . ' GMT', true, 200);
                    }
                    header_remove('x-powered-by');
                    // The source is in $filename
                    // Storage\FileSystem\Any::readfile_chunked($filename);
                    readfile($filename);
                    ob_end_flush();
                }
                Framework::terminate();
            }//end if
        }//end StreamOriginalFile()


        /**
         * @param array $data
         *
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function json(array $data): void
        {
            header('Content-type:application/json;charset=UTF-8');
            if (empty($data) === false) {
                echo Implement::toJson($data);
            } else {
                http_response_code(400);
                echo Implement::toJson(
                    ['type' => 'error', 'message' => 'JSONOutput::ERROR: Input message error']
                );
            }
            Framework::terminate();
        }//end StreamAsJson()


        /**
         * @param string $data
         *
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function text(string $data): void
        {
            header('Content-type:text/plain;charset=UTF-8');
            if (empty($data) === false) {
                echo $data;
            } else {
                http_response_code(400);
                echo 'TextOutput::ERROR: Input message error';
            }
            Framework::terminate();
        }//end StreamAsJson()


        public function __destruct() {}//end __destruct()
    }//end class
