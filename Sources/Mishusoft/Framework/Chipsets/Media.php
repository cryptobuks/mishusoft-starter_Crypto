<?php

namespace Mishusoft\Framework\Chipsets;

use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Media\Mime;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Number;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class Media
{
    // declare version
    public const VERSION = '1.0.2';


    /**
     * Media constructor.
     */
    public function __construct()
    {
    }//end __construct()


    /**
     * @param  string $folderPath
     * @return array|false
     */
    public static function FileExplore(string $folderPath=MS_ASSETS_MEDIA_PATH)
    {
        if (substr($folderPath, (strlen($folderPath) - 1), 1) !== '/') {
            $folderPath .= '/';
        }

        return glob($folderPath.'*', GLOB_MARK);
    }//end FileExplore()


    /**
     * @param  string $filename
     * @return string
     */
    public static function getFileType(string $filename): string
    {
        return filetype($filename);
    }//end getFileType()


    /**
     * @param  string $filename
     * @return string
     */
    public static function getOriginalNameOfFile(string $filename): string
    {
        return basename($filename);
    }//end getOriginalNameOfFile()


    /**
     * @param  string $filename
     * @return string
     */
    public static function getFileSize(string $filename): string
    {
        $size = filesize($filename);
        return $size < 1024 ? "$size bytes" : ($size < 1048576 ? Number::format((filesize($filename) / 1024), 2, '.', '').' kb' : ($size < 1073741824 ? Number::format(((filesize($filename) / 1024) / 1024), 2, '.', '').' mb' : Number::format((((filesize($filename) / 1024) / 1024) / 1024), 2, '.', '').' gb'));
    }//end getFileSize()


    /**
     * @param string $filename
     */
    public static function StreamOriginalFile(string $filename)
    {
        if (is_readable($filename)) {
            // Getting headers sent by the client.
            $headers = apache_request_headers();
            // Checking if the client is validating his cache and if it is current.
            if (isset($headers['If-Modified-Since']) && (strtotime($headers['If-Modified-Since']) == filemtime($filename))) {
                // Client's cache IS current, so we just respond '304 Not Modified'.
                header('Last-Modified: '.gmdate('D, d M Y H:i:s', filemtime($filename)).' GMT', true, 304);
            } else {
                // preOutput($filemime);exit();
                ob_start();
                // header("Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval';font-src 'self' data:;img-src 'self' 'unsafe-inline' data:;script-src 'self' 'unsafe-inline';style-src 'self' 'unsafe-inline';style-src-attr 'self' 'unsafe-inline';");
                header('Content-length: '.filesize($filename));
                header('Content-Type: '.self::getMimeContent($filename));
                // We'll be outputting a file
                // header("Content-Type: " . finfo_file(finfo_open(FILEINFO_MIME_TYPE), $filename));// We'll be outputting a file
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
     * @param  string $filename
     * @return string
     */
    public static function getMimeContent(string $filename): string
    {
        if (is_array(self::getFileInfo($filename)) and count(self::getFileInfo($filename)) > 0) {
            return self::getFileInfo($filename)['type'];
        } else {
            return 'text/plain';
        }
    }//end getMimeContent()


    /**
     * @public
     * @param  string $filename
     * @return array
     */
    public static function getFileInfo(string $filename): array
    {
        if (is_array(Mime::Common) and count(Mime::Common) > 0) {
            foreach (Mime::Common as $content) {
                if ($content['extension'] === substr($filename, (strpos($filename, '.') + strlen('.')), (strlen($filename) - (strpos($filename, '.') + strlen('.'))))) {
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
        if (is_array($mimeList) and count($mimeList) > 0) {
            foreach ($mimeList as $mimeItem) {
                if ($mimeItem['type'] === $mime) {
                    return true;
                }
            }
        }

        return false;
    }//end in()


    /**
     * [Backup functions]
     *
     *    static function getMimeContent(string $filename): string
     *    {
     *    if (is_array(MimeCommon::List) and count(MimeCommon::List) > 0) {
     *    foreach (MimeCommon::List as $content) {
     *    if (preg_match('#\.' . preg_quote(_String::lower($content["extension"])) . '\b#', _String::lower($filename), $matches)) {
     *    return $content["type"];
     *    }
     *    }
     *    }
     *    return "text/plain";
     *    }
     * */


    /**
     * @public
     * @param  string $format
     * @return string
     */
    public static function getMimeContentByFormat(string $format): string
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

        return substr($searchable, (strpos($searchable, '.') + strlen('.')), (strlen($searchable) - (strpos($searchable, '.') + strlen('.'))));
    }//end getExtension()


    /**
     * @param  string $indicator
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getRegistriesPath(string $filename, string $feature, string $indicator='libraries/json/'): string
    {
        if (!empty($filename)) {
            if (file_exists(PHP_RUNTIME_REGISTRIES_PATH.$filename)) {
                if (_String::lower($feature) === 'local') {
                    return PHP_RUNTIME_REGISTRIES_PATH.$filename;
                } elseif (_String::lower($feature) === 'remote') {
                    return join([BaseURL, $indicator, $filename]);
                }
            } else {
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                        'debug' => [
                            'file'        => (new Browser())->getURLPath(),
                            'location'    => MS_ASSETS_MEDIA_PATH.$filename,
                            'description' => 'Your requested file not found or deleted!!',
                        ],
                        'error' => ['description' => 'Your requested file not found or deleted!!'],
                    ]
                );
            }
        }//end if

        return '';
    }//end getRegistriesPath()


    /**
     * @param  string $indicator
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getLogosMediaPath(string $filename, string $feature, string $indicator='libraries/logos/'): string
    {
        if (file_exists(MS_PRIVATE_MEDIA_PATH.'logos/'.$filename) === true) {
            if (_String::lower($feature) === 'local') {
                return MS_PRIVATE_MEDIA_PATH.'logos/'.$filename;
            }

            if (_String::lower($feature) === 'remote') {
                return BASEURL.$indicator.$filename;
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => (new Browser())->getURLPath(),
                        'location'    => MS_PRIVATE_MEDIA_PATH.'logos/'.$filename,
                        'description' => 'Your requested file not found or deleted!!',
                    ],
                    'error' => ['description' => 'Your requested file not found or deleted!!'],
                ]
            );
        }//end if

        return '';
    }//end getLogosMediaPath()


    /**
     * @param  string $indicator
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getMediaPathOfUsersPhotos(string $filename, string $feature, string $indicator='libraries/users/'): string
    {
        if (file_exists(MS_PRIVATE_MEDIA_PATH.'users/'.$filename)) {
            if (_String::lower($feature) === 'local') {
                return MS_PRIVATE_MEDIA_PATH.'users/'.$filename;
            }

            if (_String::lower($feature) === 'remote') {
                return BASEURL.$indicator.$filename;
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => (new Browser())->getURLPath(),
                        'location'    => MS_PRIVATE_MEDIA_PATH.'users/'.$filename,
                        'description' => 'Your requested file not found or deleted!!',
                    ],
                    'error' => ['description' => 'Your requested file not found or deleted!!'],
                ]
            );
        }//end if

        return '';
    }//end getMediaPathOfUsersPhotos()


    /**
     * @param  string $filename
     * @return string
     */
    public static function getMediaPathOfTemplatesJavascriptResourcesRoot(string $filename): string
    {
        if (file_exists(MPM::TemplatesJavascriptResourcesRootLocal().$filename) === true) {
            return MPM::TemplatesJavascriptResourcesRootLocal().$filename;
        }

        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => (new Browser())->getURLPath(),
                    'location'    => MPM::TemplatesJavascriptResourcesRootLocal().$filename,
                    'description' => 'Your requested file not found or deleted!!',
                ],
                'error' => ['description' => 'Your requested file not found or deleted!!'],
            ]
        );
        return '';
    }//end getMediaPathOfTemplatesJavascriptResourcesRoot()


    /**
     * @param  string $indicator
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getMediaPathOfUploads(string $filename, string $feature, string $indicator='libraries/uploads/'): string
    {
        if (file_exists(MS_PRIVATE_MEDIA_PATH.'uploads/'.$filename)) {
            if (_String::lower($feature) === 'local') {
                return MS_PRIVATE_MEDIA_PATH.'uploads/'.$filename;
            }

            if (_String::lower($feature) === 'remote') {
                return BASEURL.$indicator.$filename;
            }
        } else {
            Firewall::runtimeFailure(
                'Not Found',
                [
                    'debug' => [
                        'file'        => (new Browser())->getURLPath(),
                        'location'    => MS_PRIVATE_MEDIA_PATH.'uploads/'.$filename,
                        'description' => 'Your requested file not found or deleted!!',
                    ],
                    'error' => ['description' => 'Your requested file not found or deleted!!'],
                ]
            );
        }//end if

        return '';
    }//end getMediaPathOfUploads()


    /**
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function toDataUri(string $filename, string $feature='local'): string
    {
        if ($feature === 'remote') {
            if ((is_readable(self::getAssetsPath($filename)))) {
                return self::getAssetsPath($filename, $feature);
            } elseif ((is_readable(self::getMediaPath($filename)))) {
                return self::getMediaPath($filename, $feature);
            } else {
                return 'link-broken';
            }
        } else {
            if ((is_readable(self::getAssetsPath($filename)))) {
                return 'data:'.self::getMimeContent(self::getAssetsPath($filename)).';base64,'.base64_encode(file_get_contents(self::getAssetsPath($filename)));
            } elseif ((is_readable(self::getMediaPath($filename)))) {
                return 'data:'.self::getMimeContent(self::getMediaPath($filename)).';base64,'.base64_encode(file_get_contents(self::getMediaPath($filename)));
            } else {
                return 'link-broken';
            }
        }
    }//end toDataUri()


    /**
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    /*
        static function getMediaPath(string $filename, string $feature): string
        {
         if (!empty($filename)) {
             $filename = filter_var($filename, FILTER_DEFAULT);
             $filename = explode("_", $filename);
             $filename = array_filter($filename);
             if (file_exists(MS_ASSETS_MEDIA_PATH . join(DIRECTORY_SEPARATOR, $filename))) {
                 if (_String::lower($feature) === "local") {
                     return MS_ASSETS_MEDIA_PATH . join(DIRECTORY_SEPARATOR, $filename);
                 } elseif (_String::lower($feature) === "remote") {
                     return join([self::getWebResourcesPath() . DIRECTORY_SEPARATOR, join(DIRECTORY_SEPARATOR, $filename)]);
                 }
             } else {
                 Firewall::runtimeFailure("Not Found", [
                     "debug" => ["file" => (new Browser())->getURLPath(), "location" => MS_ASSETS_MEDIA_PATH . join(DIRECTORY_SEPARATOR, $filename), "description" => "Your requested file not found or deleted!!"],
                     "error" => ["description" => "Your requested file not found or deleted!!"]
                 ]);
             }
         }
         return "";
     }*/


    /**
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getAssetsPath(string $filename, string $feature='local'): string
    {
        $filename = str_replace(['_', '/'], [DIRECTORY_SEPARATOR, DIRECTORY_SEPARATOR], $filename);
        if (_String::lower($feature) === 'remote') {
            return implode([self::getWebResourcesPath().DIRECTORY_SEPARATOR, $filename]);
        }

        return MS_ASSETS_MEDIA_PATH.$filename;
    }//end getAssetsPath()


    // will be continue


    /**
     * @param  string $pathname
     * @return string
     */
    public static function getWebResourcesPath(string $pathname='assets'): string
    {
        return System::getInstalledURL()."{$pathname}";
    }//end getWebResourcesPath()


    /**
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getMediaPath(string $filename, string $feature='local'): string
    {
        $filename = str_replace('/', DIRECTORY_SEPARATOR, $filename);
        if (_String::lower($feature) === 'remote') {
            return implode([System::getInstalledURL()."media/$filename"]);
        } else {
            return MS_PRIVATE_MEDIA_PATH.$filename;
        }
    }//end getMediaPath()


    /**
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getSharedPath(string $filename, string $feature='local'): string
    {
        $filename = str_replace('/', DIRECTORY_SEPARATOR, $filename);
        if (_String::lower($feature) === 'remote') {
            return implode([System::getInstalledURL()."media/$filename"]);
        } else {
            return MS_PRIVATE_MEDIA_PATH.$filename;
        }
    }//end getSharedPath()


    /**
     * @param  string $filename
     * @param  string $feature
     * @return string
     */
    public static function getStoragePath(string $filename, string $feature='local'): string
    {
        $filename = str_replace('/', DIRECTORY_SEPARATOR, $filename);
        if (_String::lower($feature) === 'remote') {
            return implode([self::getWebResourcesPath().DIRECTORY_SEPARATOR, $filename]);
        } else {
            return MS_STORAGE_PATH."0/$filename";
        }
    }//end getStoragePath()


    /**
     * @param $data
     * @throws \JsonException
     */
    public static function StreamAsJson($data)
    {
        header('Content-type:application/json;charset=UTF-8');
        if (empty($data) === false) {
            echo json_encode($data, JSON_THROW_ON_ERROR);
        } else {
            http_response_code(400);
            echo json_encode(['type' => 'error', 'message' => 'JSONOutput::ERROR: Input message error'], JSON_THROW_ON_ERROR);
        }
    }//end StreamAsJson()


    public function __destruct()
    {
    }//end __destruct()


    /**
     * @public
     */
    private function importCSVDataToJsonFile(string $src_csv_file, string $output_file)
    {
        $data   = [];
        $array  = array_map('str_getcsv', explode("\n", file_get_contents($src_csv_file)));
        $header = array_shift($array);
        foreach ($array as $key => $value) {
            foreach ($header as $k => $v) {
                $data[$value[0]][$v] = $value[$k];
            }
        }

        if (Stream::IsWriteable($output_file)) {
            Stream::saveToFile($output_file, json_encode($data));
        }
    }//end importCSVDataToJsonFile()
}//end class
