<?php

/**
 * The loader of image functions for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */

//https://stackoverflow.com/questions/11418594/how-to-reduce-the-image-size-without-losing-quality-in-php#:~:text=php%20function%20compress(%24source%2C,image%20%3D%20imagecreatefrompng(%24source)%3B
// https://github.com/whizzzkid/phpimageresize


/**
 * Get image information
 *
 * @param string $filename
 * @return array
 */
function get_image_size(string $filename): array
{
    if (in_array(
        get_mime_content($filename),
        ['image/png', 'image/webp', 'image/vnd.microsoft.icon'],
        true
    )) {
        $size = getimagesize($filename);
        return is_array($size) ? $size : [];
    }

    return [];
}

function compress($source, $destination, $quality)
{
    $info = is_array(getimagesize($source)) ? getimagesize($source) : [];

    if ($info['mime'] === 'image/jpeg') {
        $image = imagecreatefromjpeg($source);
    } elseif ($info['mime'] === 'image/gif') {
        $image = imagecreatefromgif($source);
    } elseif ($info['mime'] === 'image/png') {
        $image = imagecreatefrompng($source);
    }


    imagejpeg($image, $destination, $quality);

    return $destination;
}

//$source_img = 'source.jpg';
//$destination_img = 'destination .jpg';
//
//$d = compress($source_img, $destination_img, 90);
