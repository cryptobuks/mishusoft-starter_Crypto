<?php

    namespace Mishusoft\Storage\Media;

    use Mishusoft\Communication\Cli\BuildController;
    use Mishusoft\Storage\FileSystem;
    use Mishusoft\System\Base;

    // sudo update-mime-database /usr/share/mime

    class MediaTypesBuilder extends Base
    {
        /**
         * File name for lite version db file
         *
         * @var string
         */
        private string $liteFilename = 'db';
        /**
         * File name for full version db file
         *
         * @var string
         */
        private string $fullFilename = 'db.full';

        /**
         * Functional db file path
         *
         * @var string
         */
        private string $functionalFilePath = MEDIA_TYPE_FUNCTIONAL_PATH;

        /**
         * Category list of media type database
         *
         * @var array|string[]
         */
        private array $categories = ['application', 'audio', 'font', 'image', 'inode', 'message', 'model', 'multipart', 'packages', 'text', 'video', 'x-content', 'x-epoc'];

        public function __construct(
            private string $outputPath
        ) {
            parent::__construct();
        }

        /**
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function run(): void
        {
            // build lite version
            $this->buildLiteFile();

            // build full version
            $this->buildFullFile();
        }


        /**
         * Get filename or directory in local db
         *
         * @param string $filename File or directory name
         *
         * @return string
         */
        private function getLocalFileOrDirectory(string $filename): string
        {
            return sprintf('%1$s%2$s', LOCAL_MIME_TYPES_ROOT_PATH, $filename);
        }


        /**
         * Get output filename for build db
         *
         * @param string $filename File name
         * @param string $format
         *
         * @return string
         */
        private function getBuildFile(string $filename, string $format = 'msf'): string
        {
            return dFile(sprintf('%1$s%2$s', $this->outputPath, $filename), $format);
        }


        /**
         * @return void
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Exception
         */
        private function buildLiteFile(): void
        {
            // generate update database from remote server
            // $apache_mime_types = get_updated_media_types_apache_db(APACHE_MIME_TYPES_URL);
            // $nginx_mime_types = get_updated_media_types_nginx_db(NGINX_MIME_TYPES_URL);
            $nginx_mime_types = get_updated_media_types_nginx_db(NGINX_LOCAL_MIME_TYPES_PATH);
            $iana_mime_types  = get_updated_media_types_apache_db(IANA_LOCAL_MIME_TYPES_PATH);
            $local_mime_types = get_updated_media_types_local_db($this->getLocalFileOrDirectory('globs'));

            // pp(file_get_contents(IANA_LOCAL_MIME_TYPES_PATH));
            // pp(file_get_contents($this->getLocalFileOrDirectory('globs')));

            // merge into an array for remove duplication and store management
            $database = array_merge(/*$apache_mime_types, */ $nginx_mime_types, $iana_mime_types, $local_mime_types);

            // sort and write into a file
            array_multisort($database, SORT_ASC);
            ksort($database, SORT_ASC);


            FileSystem::makeDirectory(dirname($this->getBuildFile($this->liteFilename)));
            // build main file
            BuildController::log(sprintf('Building %1$s', $this->getBuildFile($this->liteFilename)));
            emit_msf_file($this->getBuildFile($this->liteFilename), $database);
            // build fallback file
            BuildController::log(sprintf('Building %1$s', $this->getBuildFile($this->liteFilename, 'yml')));
            emit_yaml_file(
                $this->getBuildFile($this->liteFilename, 'yml'),
                $database
            );
            // build fallback file
            BuildController::log(sprintf('Building %1$s', $this->getBuildFile($this->liteFilename, 'json')));
            FileSystem\Any::write($this->getBuildFile($this->liteFilename, 'json'), $database);


            // build backup php file
            BuildController::log(sprintf('Building %1$s%3$s%2$s.php', $this->functionalFilePath, 'lite', DS));
            write_file(
                sprintf('%1$s%3$s%2$s.php', resolveDirectory($this->functionalFilePath), 'lite', DS),
                backup_database_generate(
                    $database,
                    'media_types_all'
                )
            );
            echo PHP_EOL;
        }

        /**
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Exception
         */
        private function buildFullFile(): void
        {
            $fullVersionBuild = [];
            $individualBuild  = [];

            foreach ($this->categories as $category) {
                $filesList = query($this->getLocalFileOrDirectory($category));

                foreach ($filesList as $filename) {
                    BuildController::log(sprintf('Reading %1$s', $filename));
                    $result = get_updated_media_types_local_db_full($filename);

                    foreach ($result as $item) {
                        $fullVersionBuild[] = $item;
                        $individualBuild[]  = $item;
                    }
                }

                FileSystem::makeDirectory(dirname($this->getBuildFile('individual/' . $category)));
                // build main file
                BuildController::log(sprintf('Building %1$s', $this->getBuildFile('individual/' . $category)));
                emit_msf_file($this->getBuildFile('individual/' . $category), $individualBuild);
                // build fallback file
                BuildController::log(sprintf('Building %1$s', $this->getBuildFile('individual/' . $category, 'yml')));
                emit_yaml_file(
                    $this->getBuildFile('individual/' . $category, 'yml'),
                    $individualBuild
                );
                // build fallback file
                BuildController::log(sprintf('Building %1$s', $this->getBuildFile('individual/' . $category, 'json')));
                FileSystem\Any::write($this->getBuildFile('individual/' . $category, 'json'), $individualBuild);

                // build backup php file
                BuildController::log(sprintf('Building %1$s%3$s%2$s.php', $this->functionalFilePath, $category, DS));
                write_file(
                    sprintf('%1$s%3$s%2$s.php', resolveDirectory($this->functionalFilePath), $category, DS),
                    backup_database_generate(
                        $fullVersionBuild,
                        sprintf('media_types_%1$s', trim(str_replace('-', '_', $category)))
                    )
                );

                //reset build database
                $individualBuild = [];
                echo PHP_EOL;
            }

            // build main file
            BuildController::log(sprintf('Building %1$s', $this->getBuildFile($this->fullFilename)));
            emit_msf_file($this->getBuildFile($this->fullFilename), $fullVersionBuild);
            // build fallback file
            BuildController::log(sprintf('Building %1$s', $this->getBuildFile($this->fullFilename, 'yml')));
            emit_yaml_file(
                $this->getBuildFile($this->fullFilename, 'yml'),
                $fullVersionBuild
            );
            // build fallback file
            BuildController::log(sprintf('Building %1$s', $this->getBuildFile($this->fullFilename, 'json')));
            FileSystem\Any::write($this->getBuildFile($this->fullFilename, 'json'), $fullVersionBuild);

            // build backup php file
            BuildController::log(sprintf('Building %1$s%3$s%2$s.php', $this->functionalFilePath, 'full', DS));
            write_file(
                sprintf('%1$s%3$s%2$s.php', resolveDirectory($this->functionalFilePath), 'full', DS),
                backup_database_generate(
                    $fullVersionBuild,
                    'media_types_all_full'
                )
            );
        }
    }
