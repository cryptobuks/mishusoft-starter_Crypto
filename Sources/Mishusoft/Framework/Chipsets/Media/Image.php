<?php


namespace Mishusoft\Framework\Chipsets\Media;


use Mishusoft\Framework\Chipsets\Utility\_Array;

class Image
{
    /*declare version*/
    const VERSION = "1.0.2";

    private static string $imageOriginalName;
    private static array $imageProperty;
    public static $imageObject; /*create GDImage resource*/
    private static int $imageWidthOriginal; /*extracted width size from original image*/
    private static int $imageHeightOriginal; /*extracted heigth size from original image*/
    private static int $imageTypeOriginal; /*extracted type integer number from original image*/
    private static int $imageBitsOriginal; /*extracted bits integer number from original image*/
    private static string $imageHtmlAttributeOriginal; /*extracted attribute  from original image*/
    private static string $imageMimeOriginal; /*extracted mime  from original image*/

    private static int $imageRatioOriginal;


    public function ___construct()
    {
    }

    public static function load(string $filename, string $file_new_name, int $width = 16, int $height = 16)
    {
        //list($width, $height, $type, $attr, $bits, $mime) = getimagesize($filename);

        /*
         * Array
(
    [0] => 100
    [1] => 100
    [2] => 3
    [3] => width="100" height="100"
    [bits] => 16
    [mime] => image/png
)
*/
        self::$imageOriginalName = $filename;
        self::$imageProperty = getimagesize($filename);
        list(self::$imageWidthOriginal, self::$imageHeightOriginal, self::$imageTypeOriginal, self::$imageHtmlAttributeOriginal) = getimagesize($filename);
        self::$imageBitsOriginal = (int)_Array::value(self::$imageProperty, "bits");
        self::$imageMimeOriginal = (string)_Array::value(self::$imageProperty, "mime");
        self::$imageRatioOriginal = self::$imageWidthOriginal / self::$imageHeightOriginal;

        $allowedTypes = array(
            1,  /*// [] gif*/
            2,  /*// [] jpg*/
            3,  /*// [] png*/
            6   /*// [] bmp*/,
            18   /*// [] webp*/
        );

        if (in_array(self::$imageTypeOriginal, $allowedTypes)) {
            self::$imageObject = imagecreatetruecolor($width, $height);
            imagecopyresampled(self::$imageObject,
                self::getImageResource(self::$imageOriginalName, self::$imageTypeOriginal),
                0, 0, 0, 0, ($width * self::$imageRatioOriginal), ($height * self::$imageRatioOriginal),
                self::$imageWidthOriginal, self::$imageHeightOriginal);

            self::save(self::$imageObject, $file_new_name);

            return $file_new_name;
        } else {
            return false;
        }
    }

    /**
     * @param string $filename
     * @param int $type
     * @return false|\GdImage|resource|string
     */
    public static function getImageResource(string $filename, int $type)
    {
        $original = "";
        switch ($type) {
            case 1 :
                $original = imagecreatefromgif($filename);
                break;
            case 2 :
                $original = imagecreatefromjpeg($filename);
                break;
            case 3 :
                $original = imagecreatefrompng($filename);
                break;
            case 6 :
                $original = imagecreatefrombmp($filename);
                break;
            case 18 :
                $original = imagecreatefromwebp($filename);
                break;
        }

        return $original;
    }

    static function resize(string $filename, int $w, int $h, string $newName = null, bool $crop = FALSE): string
    {
        list(self::$imageWidthOriginal, self::$imageHeightOriginal, self::$imageTypeOriginal, self::$imageHtmlAttributeOriginal) = getimagesize($filename);
        $r = self::$imageWidthOriginal / self::$imageHeightOriginal;
        if ($crop) {
            if (self::$imageWidthOriginal > self::$imageHeightOriginal) {
                self::$imageWidthOriginal = ceil(self::$imageWidthOriginal - (self::$imageWidthOriginal * abs($r - $w / $h)));
            } else {
                self::$imageHeightOriginal = ceil(self::$imageHeightOriginal - (self::$imageHeightOriginal * abs($r - $w / $h)));
            }
            $newwidth = $w;
            $newheight = $h;
        } else {
            if ($w / $h > $r) {
                $newwidth = $h * $r;
                $newheight = $h;
            } else {
                $newheight = $w / $r;
                $newwidth = $w;
            }
        }

        $dst = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresampled($dst, self::getImageResource($filename, self::$imageTypeOriginal), 0, 0, 0, 0, $newwidth, $newheight, self::$imageWidthOriginal, self::$imageHeightOriginal);

        $image = ($newName !== null) ? $newName : realpath(dirname($filename)) . "/" . pathinfo($filename, PATHINFO_FILENAME) . "-resized-$w-$h.webp";

        self::save($dst, $image);

        return $image;
    }

    static function save($resource, $newName, int $quality = 100)
    {
        switch (self::$imageTypeOriginal) {
            case 1 :
                imagegif($resource, $newName);
                imagedestroy($resource);
                break;
            case 2 :
                imagejpeg($resource, $newName, $quality);
                imagedestroy($resource);
                break;
            case 3 :
                imagepng($resource, $newName, 0);
                imagedestroy($resource);
                break;
            case 6 :
                imagebmp($resource, $newName, $quality);
                imagedestroy($resource);
                break;
            case 18 :
                imagewebp($resource, $newName, $quality);
                imagedestroy($resource);
                break;
        }
    }




    /*useful functions*/

    /**
     * @param string $image_mime_type
     * @return false|string
     */
    function getExtension(string $image_mime_type)
    {
        if (empty($image_mime_type)) return false;
        switch ($image_mime_type) {
            case 'image/bmp':
                return '.bmp';
            case 'image/cis-cod':
                return '.cod';
            case 'image/gif':
                return '.gif';
            case 'image/ief':
                return '.ief';
            case 'image/jpeg':
                return '.jpg';
            case 'image/pipeg':
                return '.jfif';
            case 'image/tiff':
                return '.tif';
            case 'image/x-cmu-raster':
                return '.ras';
            case 'image/x-cmx':
                return '.cmx';
            case 'image/x-icon':
                return '.ico';
            case 'image/x-portable-anymap':
                return '.pnm';
            case 'image/x-portable-bitmap':
                return '.pbm';
            case 'image/x-portable-graymap':
                return '.pgm';
            case 'image/x-portable-pixmap':
                return '.ppm';
            case 'image/x-rgb':
                return '.rgb';
            case 'image/x-xbitmap':
                return '.xbm';
            case 'image/x-xpixmap':
                return '.xpm';
            case 'image/x-xwindowdump':
                return '.xwd';
            case 'image/png':
                return '.png';
            case 'image/x-jps':
                return '.jps';
            case 'image/x-freehand':
                return '.fh';
            default:
                return false;
        }
    }


    /**
     * @param string $filename
     * @return string
     */
    static function getImageFormat(string $filename): string
    {
        /*Value 	Constant
1 	IMAGETYPE_GIF
2 	IMAGETYPE_JPEG
3 	IMAGETYPE_PNG
4 	IMAGETYPE_SWF
5 	IMAGETYPE_PSD
6 	IMAGETYPE_BMP
7 	IMAGETYPE_TIFF_II (intel byte order)
8 	IMAGETYPE_TIFF_MM (motorola byte order)
9 	IMAGETYPE_JPC
10 	IMAGETYPE_JP2
11 	IMAGETYPE_JPX
12 	IMAGETYPE_JB2
13 	IMAGETYPE_SWC
14 	IMAGETYPE_IFF
15 	IMAGETYPE_WBMP
16 	IMAGETYPE_XBM
17 	IMAGETYPE_ICO
18 	IMAGETYPE_WEBP
    */

        return array
        (
            0 => 'UNKNOWN',
            1 => 'GIF',
            2 => 'JPEG',
            3 => 'PNG',
            4 => 'SWF',
            5 => 'PSD',
            6 => 'BMP',
            7 => 'TIFF_II',
            8 => 'TIFF_MM',
            9 => 'JPC',
            10 => 'JP2',
            11 => 'JPX',
            12 => 'JB2',
            13 => 'SWC',
            14 => 'IFF',
            15 => 'WBMP',
            16 => 'XBM',
            17 => 'ICO',
            18 => 'WBMP'
        )[getimagesize($filename)[2]];
    }

    function __destruct()
    {

    }

}