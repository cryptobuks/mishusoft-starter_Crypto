<?php

    namespace Mishusoft\Storage;

    class Media
    {
        /**
         * @param string $filename
         *
         * @return array
         */
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

    }//end class
