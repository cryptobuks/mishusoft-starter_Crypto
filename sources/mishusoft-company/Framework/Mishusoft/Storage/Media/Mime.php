<?php declare(strict_types=1);

namespace Mishusoft\Storage\Media;

class Mime extends MimeDataObject
{
    // IANA-defined media types
    public const IANA_ALL_DB_URL = 'https://www.iana.org/assignments/media-types/media-types.xhtml';
    public const IANA_APPLICATION_DB_URL = 'https://www.iana.org/assignments/media-types/application.csv';
    public const IANA_AUDIO_DB_URL = 'https://www.iana.org/assignments/media-types/audio.csv';
    public const IANA_FONT_DB_URL = 'https://www.iana.org/assignments/media-types/font.csv';
    public const IANA_IMAGE_DB_URL = 'https://www.iana.org/assignments/media-types/image.csv';
    public const IANA_MESSAGE_DB_URL = 'https://www.iana.org/assignments/media-types/message.csv';
    public const IANA_MODEL_DB_URL = 'https://www.iana.org/assignments/media-types/model.csv';
    public const IANA_MULTIPART_DB_URL = 'https://www.iana.org/assignments/media-types/multipart.csv';
    public const IANA_TEXT_DB_URL = 'https://www.iana.org/assignments/media-types/text.csv';
    public const IANA_VIDEO_DB_URL = 'https://www.iana.org/assignments/media-types/video.csv';

    // Apache common media types
    public const APACHE_COMMON_DB_URL = 'http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types';

    // nginx media types
    public const NGINX_COMMON_DB_URL = 'http://hg.nginx.org/nginx/raw-file/default/conf/mime.types';


    /**
     * Get mime about all applications
     *
     * @return array
     */
    public static function getApplications(): array
    {
        return self::Applications;
    }//end getApplications()


    /**
     * Get mime about all audios
     *
     * @return array
     */
    public static function getAudios(): array
    {
        return self::Audio;
    }//end getAudios()


    /**
     * Get mime about all fonts.
     *
     * @return \string[][]
     */
    public static function getFonts(): array
    {
        return self::Font;
    }//end getFonts()


    /**
     * Get mime about all images.
     *
     * @return array
     */
    public static function getImages(): array
    {
        return self::Image;
    }//end getImages()


    /**
     * Get mime about all message.
     *
     * @return array
     */
    public static function getMessages(): array
    {
        return self::Message;
    }//end getMessages()


    /**
     * Get mime about all models.
     *
     * @return array
     */
    public static function getModels(): array
    {
        return self::Model;
    }//end getModels()


    /**
     * Get mime about all multipart.
     *
     * @return array
     */
    public static function getMultipart(): array
    {
        return self::Multipart;
    }//end getMultipart()


    /**
     * Get mime about all text..
     *
     * @return array
     */
    public static function getTexts(): array
    {
        return self::Text;
    }//end getTexts()


    /**
     * Get mime about all videos.
     *
     * @return array
     */
    public static function getVideos(): array
    {
        return self::Video;
    }//end getVideos()


    /**
     * Get mime about common.
     *
     * @return array
     */
    public static function getCommon(): array
    {
        return self::Common;
    }//end getCommon()


    /**
     * Get mime about all.
     *
     * @return array
     */
    public static function getAll(): array
    {
        return self::All;
    }//end getAll()
}//end class
