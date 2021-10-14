<?php

namespace Mishusoft\Storage;

use Mishusoft\Storage\Media\Mime;

class Media
{
    // declare version
    public const VERSION = '2.0.0';


    /**
     * Media constructor.
     */
    public function __construct()
    {
    }//end __construct()



    /**
     * @param  string $filename
     * @return string
     */
    public static function mimeContent(string $filename): string
    {
        if (is_array(self::fileInfo($filename)) && count(self::fileInfo($filename)) > 0) {
            return self::fileInfo($filename)['type'];
        }

        return 'text/plain';
    }//end getMimeContent()


    /**
     * @public
     * @param  string $filename
     * @return array
     */
    public static function fileInfo(string $filename): array
    {
        if (is_array(Media\MimeDataObject::Common) && count(Media\MimeDataObject::Common) > 0) {
            foreach (Media\MimeDataObject::Common as $content) {
                if ($content['extension'] === self::getExtension($filename)) {
                    return $content;
                }
            }
        }

        return [
            'extension' => pathinfo($filename, PATHINFO_EXTENSION),
            'document'  => pathinfo($filename, PATHINFO_EXTENSION).' file',
            'type'      => finfo_file(finfo_open(FILEINFO_MIME_TYPE), $filename),
        ];
    }//end getFileInfo()


    public static function in(array $mimeList, string $mime): bool
    {
        if (count($mimeList) > 0) {
            foreach ($mimeList as $mimeItem) {
                if ($mimeItem['type'] === $mime) {
                    return true;
                }
            }
        }

        return false;
    }//end in()


    /**
     * @public
     * @param  string $format
     * @return string
     */
    public static function mimeByFormat(string $format): string
    {
        if (is_array(Mime::Common) and count(Mime::Common) > 0) {
            foreach (Mime::Common as $content) {
                if ($content['extension'] === $format) {
                    return $content['type'];
                }
            }
        }

        // return "text/plain";
        return finfo_file(finfo_open(FILEINFO_MIME_TYPE), "test.$format");
    }//end getMimeContentByFormat()


    /**
     * @param  string $filename
     * @return string
     */
    public static function getExtension(string $filename): string
    {
        if (strlen($filename) > 8) {
            $searchable = substr($filename, (strlen($filename) - 8), 8);
        } else {
            $searchable = $filename;
        }

        $needle = '.';
        $offset = (strpos($searchable, $needle) + strlen($needle));
        $length = (strlen($searchable) - (strpos($searchable, $needle) + strlen($needle)));
        return substr($searchable, $offset, $length);
    }//end getExtension()


    public static function imageFileInformation(string $filename): array
    {
        if (in_array(
            finfo_file(finfo_open(FILEINFO_MIME_TYPE), $filename),
            ['image/png', 'image/webp', 'image/vnd.microsoft.icon'],
            true
        )) {
            return getimagesize($filename);
        }

        return [];
    }

    public function __destruct()
    {
    }//end __destruct()
}//end class
