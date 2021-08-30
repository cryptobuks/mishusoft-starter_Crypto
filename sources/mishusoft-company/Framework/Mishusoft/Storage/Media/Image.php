<?php declare(strict_types=1);


namespace Mishusoft\Storage\Media;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Utility\ArrayCollection;

class Image
{
    // declare version
    public const VERSION = '1.0.2';

    private static string $imageOriginalName;

    private static array $imageProperty;

    public static $imageObject;

    // create GDImage resource
    private static int|float $imageWidthOriginal;

    // extracted width size from original image
    private static int|float $imageHeightOriginal;

    // extracted heigth size from original image
    private static int $imageTypeOriginal;

    // extracted type integer number from original image
    private static int $imageBitsOriginal;

    // extracted bits integer number from original image
    private static string $imageHtmlAttributeOriginal;

    // extracted attribute  from original image
    private static string $imageMimeOriginal;

    // extracted mime  from original image
    private static int $imageRatioOriginal;


    /**
     * @throws \Exception
     */
    public static function load(string $filename, string $fileNewName, int $width = 16, int $height = 16): bool|string
    {
        // list($width, $height, $type, $attr, $bits, $mime) = getimagesize($filename);
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
        self::$imageProperty     = getimagesize($filename);
        [
            self::$imageWidthOriginal,
            self::$imageHeightOriginal,
            self::$imageTypeOriginal,
            self::$imageHtmlAttributeOriginal,
        ] = getimagesize($filename);
        self::$imageBitsOriginal  = (int) ArrayCollection::value(self::$imageProperty, 'bits');
        self::$imageMimeOriginal  = (string) ArrayCollection::value(self::$imageProperty, 'mime');
        self::$imageRatioOriginal = (self::$imageWidthOriginal / self::$imageHeightOriginal);

        $allowedTypes = [
            1,
        // [] gif
            2,
        // [] jpg
            3,
        // [] png
            6   /*// [] bmp*/,
            18,
        // [] webp
        ];

        if (in_array(self::$imageTypeOriginal, $allowedTypes, true) === true) {
            self::$imageObject = imagecreatetruecolor($width, $height);
            imagecopyresampled(
                self::$imageObject,
                self::getImageResource(self::$imageOriginalName, self::$imageTypeOriginal),
                0,
                0,
                0,
                0,
                ($width * self::$imageRatioOriginal),
                ($height * self::$imageRatioOriginal),
                self::$imageWidthOriginal,
                self::$imageHeightOriginal
            );

            self::save(self::$imageObject, $fileNewName);

            return $fileNewName;
        }

        return false;
    }//end load()


    /**
     * @param string $filename
     * @param integer $type
     * @return \GdImage|bool|string
     */
    public static function getImageResource(string $filename, int $type): \GdImage|bool|string
    {
        return match ($type) {
            1 => imagecreatefromgif($filename),
            2 => imagecreatefromjpeg($filename),
            3 => imagecreatefrompng($filename),
            6 => imagecreatefrombmp($filename),
            18 => imagecreatefromwebp($filename),
            default => '',
        };
    }//end getImageResource()


    /**
     * @param string $filename
     * @param int $w
     * @param int $h
     * @param string|null $newName
     * @param bool $crop
     * @return string
     * @throws RuntimeException
     */
    public static function resize(string $filename, int $w, int $h, string $newName = null, bool $crop = false): string
    {
        [
            self::$imageWidthOriginal,
            self::$imageHeightOriginal,
            self::$imageTypeOriginal,
            self::$imageHtmlAttributeOriginal,
        ]  = getimagesize($filename);
        $r = (self::$imageWidthOriginal / self::$imageHeightOriginal);
        if ($crop === true) {
            if (self::$imageWidthOriginal > self::$imageHeightOriginal) {
                self::$imageWidthOriginal = ceil(self::$imageWidthOriginal - (self::$imageWidthOriginal * abs($r - $w / $h)));
            } else {
                self::$imageHeightOriginal = ceil(self::$imageHeightOriginal - (self::$imageHeightOriginal * abs($r - $w / $h)));
            }

            $newwidth  = $w;
            $newheight = $h;
        } else {
            if (($w / $h) > $r) {
                $newwidth  = ($h * $r);
                $newheight = $h;
            } else {
                $newheight = ($w / $r);
                $newwidth  = $w;
            }
        }

        $dst = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresampled($dst, self::getImageResource($filename, self::$imageTypeOriginal), 0, 0, 0, 0, $newwidth, $newheight, self::$imageWidthOriginal, self::$imageHeightOriginal);

        $image = ($newName !== null) ? $newName : realpath(dirname($filename)).'/'.pathinfo($filename, PATHINFO_FILENAME)."-resized-$w-$h.webp";

        self::save($dst, $image);

        return $image;
    }//end resize()


    /**
     * @param $resource
     * @param $newName
     * @param int $quality
     * @throws RuntimeException
     */
    public static function save($resource, $newName, int $quality = 100): void
    {
        switch (self::$imageTypeOriginal) {
            case 1:
                imagegif($resource, $newName);
                imagedestroy($resource);
                break;

            case 2:
                imagejpeg($resource, $newName, $quality);
                imagedestroy($resource);
                break;

            case 3:
                imagepng($resource, $newName, 0);
                imagedestroy($resource);
                break;

            case 6:
                imagebmp($resource, $newName, false);
                imagedestroy($resource);
                break;

            case 18:
                imagewebp($resource, $newName, $quality);
                imagedestroy($resource);
                break;

            default:
                throw new RuntimeException('Unexpected value');
        }//end switch
    }//end save()


    // useful functions


    /**
     * @param  string $imageMimeType
     * @return false|string
     */
    public function getExtension(string $imageMimeType): bool|string
    {
        if (empty($imageMimeType) === true) {
            return false;
        }

        return match ($imageMimeType) {
            'image/bmp' => '.bmp',
            'image/cis-cod' => '.cod',
            'image/gif' => '.gif',
            'image/ief' => '.ief',
            'image/jpeg' => '.jpg',
            'image/pipeg' => '.jfif',
            'image/tiff' => '.tif',
            'image/x-cmu-raster' => '.ras',
            'image/x-cmx' => '.cmx',
            'image/x-icon' => '.ico',
            'image/x-portable-anymap' => '.pnm',
            'image/x-portable-bitmap' => '.pbm',
            'image/x-portable-graymap' => '.pgm',
            'image/x-portable-pixmap' => '.ppm',
            'image/x-rgb' => '.rgb',
            'image/x-xbitmap' => '.xbm',
            'image/x-xpixmap' => '.xpm',
            'image/x-xwindowdump' => '.xwd',
            'image/png' => '.png',
            'image/x-jps' => '.jps',
            'image/x-freehand' => '.fh',
            default => false,
        };//end match
    }//end getExtension()


    /**
     * @param  string $filename
     * @return string
     */
    public static function getImageFormat(string $filename): string
    {
        /*
            Value     Constant
            1     IMAGETYPE_GIF
            2     IMAGETYPE_JPEG
            3     IMAGETYPE_PNG
            4     IMAGETYPE_SWF
            5     IMAGETYPE_PSD
            6     IMAGETYPE_BMP
            7     IMAGETYPE_TIFF_II (intel byte order)
            8     IMAGETYPE_TIFF_MM (motorola byte order)
            9     IMAGETYPE_JPC
            10     IMAGETYPE_JP2
            11     IMAGETYPE_JPX
            12     IMAGETYPE_JB2
            13     IMAGETYPE_SWC
            14     IMAGETYPE_IFF
            15     IMAGETYPE_WBMP
            16     IMAGETYPE_XBM
            17     IMAGETYPE_ICO
            18     IMAGETYPE_WEBP
        */

        return [
            0  => 'UNKNOWN',
            1  => 'GIF',
            2  => 'JPEG',
            3  => 'PNG',
            4  => 'SWF',
            5  => 'PSD',
            6  => 'BMP',
            7  => 'TIFF_II',
            8  => 'TIFF_MM',
            9  => 'JPC',
            10 => 'JP2',
            11 => 'JPX',
            12 => 'JB2',
            13 => 'SWC',
            14 => 'IFF',
            15 => 'WBMP',
            16 => 'XBM',
            17 => 'ICO',
            18 => 'WBMP',
        ][getimagesize($filename)[2]];
    }//end getImageFormat()


    public function __destruct()
    {
    }//end __destruct()
}//end class
