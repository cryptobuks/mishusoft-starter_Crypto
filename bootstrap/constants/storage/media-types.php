<?php
    /**
     * The loader of constants for mishusoft application
     *
     * php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    // media type db url
    // https://www.iana.org/protocols
    // IANA-defined media types
    const MEDIA_TYPE_IANA_ALL_URL = 'https://www.iana.org/assignments/media-types/media-types.xhtml';
    const IANA_APPLICATION_DB_URL = 'https://www.iana.org/assignments/media-types/application.csv';
    const IANA_AUDIO_DB_URL       = 'https://www.iana.org/assignments/media-types/audio.csv';
    const IANA_FONT_DB_URL        = 'https://www.iana.org/assignments/media-types/font.csv';
    const IANA_IMAGE_DB_URL       = 'https://www.iana.org/assignments/media-types/image.csv';
    const IANA_MESSAGE_DB_URL     = 'https://www.iana.org/assignments/media-types/message.csv';
    const IANA_MODEL_DB_URL       = 'https://www.iana.org/assignments/media-types/model.csv';
    const IANA_MULTIPART_DB_URL   = 'https://www.iana.org/assignments/media-types/multipart.csv';
    const IANA_TEXT_DB_URL        = 'https://www.iana.org/assignments/media-types/text.csv';
    const IANA_VIDEO_DB_URL       = 'https://www.iana.org/assignments/media-types/video.csv';

    // MIME Media Type Parameters
    const MIME_TO_X400_DB_URL          = "https://www.iana.org/assignments/media-types-parameters/media-types-parameters-1.csv";
    const X400_TO_MIME_DB_URL          = "https://www.iana.org/assignments/media-types-parameters/media-types-parameters-2.csv";
    const X400_TO_MIME_EXTENDED_DB_URL = "https://www.iana.org/assignments/media-types-parameters/media-types-parameters-3.csv";

    // MIME Media Type Sub-Parameter Registries
    const MIME_SUB = "https://www.iana.org/assignments/media-type-sub-parameters/media-type-sub-parameters.xhtml";

    // Provisional Standard Media Type Registry
    const PROVISIONAL_MIME        = "https://www.iana.org/assignments/provisional-standard-media-types/provisional-standard-media-types.xhtml";
    const PROVISIONAL_MIME_DB_URL = "https://www.iana.org/assignments/provisional-standard-media-types/provisional-standard-types.csv";

// Apache common media types
    const APACHE_MIME_TYPES_URL = 'https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types';

    // nginx media types
    const NGINX_MIME_TYPES_URL = 'https://hg.nginx.org/nginx/raw-file/default/conf/mime.types';

    // local nginx media types
    const NGINX_LOCAL_MIME_TYPES_PATH = '/etc/nginx/mime.types';

    // local iana media types
    const IANA_LOCAL_MIME_TYPES_PATH = '/etc/mime.types';
    ///etc/imageMagick-7/mime.xml

    // local media types
    const LOCAL_MIME_TYPES_PATH = '/usr/share/mime/globs';

    // local media types root path
    const LOCAL_MIME_TYPES_ROOT_PATH = '/usr/share/mime/';

    // Build media types path

    const MEDIA_TYPE_FUNCTIONAL_PATH = RUNTIME_ROOT_PATH . 'bootstrap/functions/media-types/db';
    const MEDIA_TYPE_BUILD_PATH      = RUNTIME_ROOT_PATH . 'system/data-drive/MediaTypes/';

    const MEDIA_TYPE_BUILD_FILE      = MEDIA_TYPE_BUILD_PATH . 'db.msf';
    const MEDIA_TYPE_FULL_BUILD_FILE = MEDIA_TYPE_BUILD_PATH . 'db.full.msf';
