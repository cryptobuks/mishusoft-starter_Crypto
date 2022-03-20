<?php

    namespace Mishusoft\Http\UAAnalyzer;

    use Mishusoft\Communication\Cli\BuildController;
    use Mishusoft\Exceptions\RuntimeException;

    class UADatabaseBuilder extends UAAnalyzerBase
    {
        private string $outputFile;
        private string $filename     = 'dictionaries';
        private array  $dictionaries = [];

        /**
         * @param string $sourcePath
         * @param string $outputPath
         *
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function __construct(
            private string $sourcePath,
            private string $outputPath,
        ) {
            parent::__construct();
            $this->outputFile = dFile($this->outputPath . $this->filename);
        }

        /**
         * @throws RuntimeException
         */
        public function run(): void
        {
            if (count($this->configs) > 0) {
                foreach ($this->configs as $directory => $files) {
                    if (is_array($files) === true) {
                        foreach ($files as $file) {
                            $this->loadDictionariesBuilder($directory, $file);
                        }
                    } elseif (is_string($files) === true) {
                        $this->loadDictionariesBuilder($directory, $files);
                    } else {
                        throw new RuntimeException('UA Analyzer\'s directory list has been corrupted');
                    }
                }

                // build main file
                BuildController::log(sprintf('Building %1$s', $this->outputFile));
                emit_msf_file($this->outputFile, $this->dictionaries);

                $functionalPath = resolveDirectory(RUNTIME_ROOT_PATH . 'bootstrap/functions/http/ua-analyzer/db') . '/full.php';

                // build backup php file
                BuildController::log(sprintf('Building %1$s', $functionalPath));
                write_file($functionalPath, backup_database_generate($this->dictionaries, 'ua_analyzer_db_full'));
            } else {
                throw new RuntimeException('The dictionaries of UA Analyzer could not loaded');
            }
        }

        /**
         * @param string $directory
         * @param string $filename
         *
         * @return void
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        private function loadDictionariesBuilder(string $directory, string $filename): void
        {
            $location = sprintf('%1$s%2$s%3$s', $this->sourcePath, $directory, DS);
            if (file_exists($location)) {
                $diskLocation = sprintf('%1$s%2$s', $location, $filename);
                // source file
                $diskLocationAsFile = dFile($diskLocation, 'yml');
                if (is_dir($diskLocation)) {
                    if (count(query($diskLocation, GLOB_MARK)) > 0) {
                        if (file_exists($diskLocation)) {
                            $this->dictionaries[$directory][$filename] = $this->dictionariesAll($diskLocation);
                        }
                    } else {
                        throw new RuntimeException(sprintf('%s is empty directory', $diskLocation));
                    }
                } elseif (is_file($diskLocationAsFile)) {
                    $dictionary = parse_yaml_file($diskLocationAsFile);
                    if (is_array($dictionary)) {
                        $this->dictionaries[$directory][$filename] = $dictionary;
                    } else {
                        throw new RuntimeException(
                            sprintf('Data type array required, string found in %1$s ', $diskLocationAsFile)
                        );
                    }
                } else {
                    throw new RuntimeException(sprintf('%1$s not exists in %2$s', $diskLocationAsFile, $this->sourcePath));
                }
            } else {
                throw new RuntimeException(sprintf('%1$s not exists in %2$s', $directory, $this->sourcePath));
            }
        }


        /**
         * @param string $directory
         *
         * @return array
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        protected function dictionariesAll(string $directory): array
        {
            $dFiles       = query($directory, GLOB_MARK);
            $dictionaries = [];

            foreach ($dFiles as $dFile) {
                // source file
                if (get_file_ext($dFile) === self::SYSTEM_DATA_FILE) {
                    BuildController::log(sprintf('Reading %1$s', $dFile));
                    $dictionaries[] = parse_yaml_file($dFile);
                }
            }

            return $this->merge($dictionaries);
        }


        /**
         * @param string $name
         *
         * @return string
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function dataDictionaryDirectory(string $name): string
        {
            if (array_key_exists(strtolower($name), $this->configs) === false) {
                throw new RuntimeException(
                    sprintf(
                        '%s not exists',
                        sprintf('%s%s%s', $this->sourcePath, strtolower($name), DS)
                    )
                );
            }
            return sprintf('%s%s%s', $this->sourcePath, strtolower($name), DS);
        }

    }
