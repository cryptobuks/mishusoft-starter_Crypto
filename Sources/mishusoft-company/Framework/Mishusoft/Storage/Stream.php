<?php declare(strict_types=1);

namespace Mishusoft\Storage;

use JsonException;

class Stream
{
    /**
     * @param string $filename
     */
    public static function originalFile(string $filename): void
    {
        if (is_readable($filename) === true) {
            // Getting headers sent by the client.
            $headers = apache_request_headers();
            // Checking if the client is validating his cache and if it is current.
            if (array_key_exists('If-Modified-Since', $headers) === true) {
                // Client's cache IS current, so we just respond '304 Not Modified'.
                if (strtotime($headers['If-Modified-Since']) === filemtime($filename)) {
                    header('Last-Modified: '.gmdate('D, d M Y H:i:s', filemtime($filename)).' GMT', true, 304);
                }
            } else {
                ob_start();
                // header(
                //"Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval';
                //font-src 'self' data:;img-src 'self' 'unsafe-inline' data:;
                //script-src 'self' 'unsafe-inline';style-src 'self' 'unsafe-inline';
                //style-src-attr 'self' 'unsafe-inline';"
                //);
                header('Content-length: '.filesize($filename));
                header('Content-Type: '.Media::mimeContent($filename));
                // We'll be outputting a file
                // header("Content-Type: " . finfo_file(finfo_open(FILEINFO_MIME_TYPE), $filename));
                header('Cache-Control: no-cache, must-revalidate');
                // HTTP/1.1
                // file not cached or cache outdated, we respond '200 OK' and output the file.
                header('Last-Modified: '.gmdate('D, d M Y H:i:s', filemtime($filename)).' GMT', true, 200);
                // The source is in $filename
                readfile($filename);
                ob_end_flush();
            }
        }//end if
    }//end StreamOriginalFile()


    /**
     * @param $data
     * @throws JsonException
     */
    public static function json($data): void
    {
        header('Content-type:application/json;charset=UTF-8');
        if (empty($data) === false) {
            echo json_encode($data, JSON_THROW_ON_ERROR);
        } else {
            http_response_code(400);
            echo json_encode(
                ['type' => 'error', 'message' => 'JSONOutput::ERROR: Input message error'],
                JSON_THROW_ON_ERROR
            );
        }
    }//end StreamAsJson()


    public function __destruct()
    {
    }//end __destruct()
}//end class
