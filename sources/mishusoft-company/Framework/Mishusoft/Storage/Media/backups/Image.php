<?php

namespace Mishusoft\Framework\Chipsets\Media;

class Image
{
    public const VERSION="1.0.2";
    private $imageResource;
    private int $imageWidthOriginal;
    private int $imageHeightOriginal;
    private int $imageTypeOriginal;
    private int $imageBitsOriginal;
    private string $imageMimeOriginal;
    private int $imageRatioOriginal;
    public static function getImageFormat(string $filename): string
    {
        return [0=>'UNKNOWN',1=>'GIF',2=>'JPEG',3=>'PNG',4=>'SWF',5=>'PSD',6=>'BMP',7=>'TIFF_II',8=>'TIFF_MM',9=>'JPC',10=>'JP2',11=>'JPX',12=>'JB2',13=>'SWC',14=>'IFF',15=>'WBMP',16=>'XBM',17=>'ICO',18=>'COUNT'][getimagesize($filename)[2]];
    }
    public function ___construct()
    {
    }
    public function getImageResource()
    {
        return $this->imageResource;
    }
    public function create(string $filename, int $width=16, int $height=16)
    {
        $this->imageWidthOriginal=getImageSize($filename)[0];
        $this->imageHeightOriginal=getImageSize($filename)[1];
        $this->imageTypeOriginal=getImageSize($filename)[2];
        $this->imageBitsOriginal=getImageSize($filename)["bits"];
        $this->imageMimeOriginal=getImageSize($filename)["mime"];
        $this->imageRatioOriginal=$this->imageWidthOriginal/$this->imageHeightOriginal;
        return $this->processor($filename, $width, $height);
    }
    public function processor(string $filename, int $width, int $height)
    {
        $original="";
        $allowedTypes=[1,2,3,6 ];
        if (!in_array($this->imageTypeOriginal, $allowedTypes)) {
            return false;
        }
        switch ($this->imageTypeOriginal) {case 1:$original=imageCreateFromGif($filename);break;case 2:$original=imageCreateFromJpeg($filename);break;case 3:$original=imageCreateFromPng($filename);break;case 6:$original=imageCreateFromBmp($filename);break;}
        $new_width=$width*$this->imageRatioOriginal;
        $new_height=$height*$this->imageRatioOriginal;
        $this->imageResource=imagecreatetruecolor($width, $height);
        imagesavealpha($this->imageResource, true);
        $color=imagecolorallocatealpha($this->imageResource, 0, 0, 0, 127);
        imagefill($this->imageResource, 0, 0, $color);
        imagecopyresampled($this->imageResource, $original, 0, 0, 0, 0, $new_width, $new_height, $this->imageWidthOriginal, $this->imageHeightOriginal);
        return $this->imageResource;
    }
    public function load(string $format)
    {
        switch (strtolower($format)) {case "gif":header("Content-Type: $this->imageMimeOriginal");
        imagegif($this->imageResource);
        imagedestroy($this->imageResource);
        break;
        case "jpeg"||"jpg":header("Content-Type: $this->imageMimeOriginal");
        imagejpeg($this->imageResource, null, 100);
        imagedestroy($this->imageResource);
        break;
        case "png":header("Content-Type: $this->imageMimeOriginal");
        imagepng($this->imageResource, null, 100);
        imagedestroy($this->imageResource);
        break;
        case "bmp":header("Content-Type: $this->imageMimeOriginal");
        imagebmp($this->imageResource, null, 100);
        imagedestroy($this->imageResource);
        break;
    }
    }
    public function __destruct()
    {
    }
}
