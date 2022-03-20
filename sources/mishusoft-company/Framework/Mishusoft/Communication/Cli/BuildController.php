<?php

    namespace Mishusoft\Communication\Cli;

    use Mishusoft\Drivers\CliSurfaceController;
    use Mishusoft\Http\UAAnalyzer\UADatabaseBuilder;
    use Mishusoft\Storage;

    class BuildController extends CliSurfaceController
    {
        public function run(): void
        {
            //print_r($this->request, false);
        }

        /**
         * Build media types
         *
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function mime(): void
        {
//        $parameters = func_get_args();

            self::log('Building ' . data_drive_directive('MediaTypes'));
            (new Storage\Media\MediaTypesBuilder(
                data_drive_directive('MediaTypes')
            ))->run();
            self::log('Build completed..', 'completed');
//        Storage\Media\Mime::download([
//            APACHE_MIME_TYPES_URL => Storage::dataDriveStoragesPath(). 'media-types/apache/media-types.txt',
//            NGINX_MIME_TYPES_URL => Storage::dataDriveStoragesPath(). 'media-types/nginx/media-types.txt',
//            IANA_APPLICATION_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/application.csv',
//            IANA_AUDIO_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/audio.csv',
//            IANA_FONT_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/font.csv',
//            IANA_IMAGE_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/image.csv',
//            IANA_MESSAGE_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/message.csv',
//            IANA_MODEL_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/model.csv',
//            IANA_MULTIPART_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/multipart.csv',
//            IANA_TEXT_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/text.csv',
//            IANA_VIDEO_DB_URL => Storage::dataDriveStoragesPath(). 'media-types/iana/video.csv',
//        ]);
//        pp('Completed');
        }

        /**
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function ua(): void
        {
            self::log('Building ' . UA_ANALYZER_SOURCE_PATH);
            (new UADatabaseBuilder(
                UA_ANALYZER_SOURCE_PATH,
                data_drive_directive('UAAnalyzer')
            ))->run();
            self::log('Build completed..', 'completed');
        }
    }
