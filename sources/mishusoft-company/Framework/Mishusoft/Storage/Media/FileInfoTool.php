<?php

    // https://www.php.net/manual/en/ref.fileinfo.php

    namespace Mishusoft\Storage\Media;

    use RuntimeException;

    class FileInfoTool
    {

        /**
         * @var string $file      path to file (ABSOLUTE OR RELATIVE)
         * @var array  $file_info array containing the information obtained from the informed file
         */
        private string $file;
        private array  $file_info;

        /**
         * @param string $file path to file (ABSOLUTE OR RELATIVE)
         *
         * @throws \RuntimeException
         */
        public function get_file(string $file): static
        {
            clearstatcache();
            $file = str_replace(['/', '\\'], [DS, DS], $file);
            if (!is_file($file) && !is_executable($file) && !is_readable($file)) {
                throw new RuntimeException('File information has not been concentrated!');
            }
            $this->file = $file;
            $this->set_file_info();
            return $this;
        }

        /**
         * @param string $index if an index is entered, specific information from the file is returned.
         *
         * @retrun array
         * @throws \RuntimeException
         */
        public function get_info(string $index = ''): array
        {
            if ($this->get_file_is_called()) {
                if ($index === '') {
                    return $this->file_info;
                }

                if (!array_key_exists($index, $this->file_info)) {
                    throw new RuntimeException('The requested information was not found!');
                }
                return $this->file_info;
            }
            return [];
        }

        /**
         * @throws \RuntimeException
         * @todo verifier if the get_file() method was used to inform the file path
         */
        private function get_file_is_called(): bool
        {
            if (!$this->file) {
                throw new RuntimeException('No files were provided for analysis. Use the get_file() method for that!');
            }
            return true;
        }

        private function set_file_info(): void
        {
            $this->file_info                = [];
            $pathinfo                       = pathinfo($this->file);
            $stat                           = stat($this->file);
            $this->file_info['realpath']    = realpath($this->file);
            $this->file_info['dirname']     = $pathinfo['dirname'];
            $this->file_info['basename']    = $pathinfo['basename'];
            $this->file_info['filename']    = $pathinfo['filename'];
            $this->file_info['extension']   = $pathinfo['extension'];
            $this->file_info['mime']        = finfo_file(finfo_open(FILEINFO_MIME_TYPE), $this->file);
            $this->file_info['encoding']    = finfo_file(finfo_open(FILEINFO_MIME_ENCODING), $this->file);
            $this->file_info['size']        = $stat[7];
            $this->file_info['size_string'] = $this->format_bytes($stat[7]);
            $this->file_info['atime']       = $stat[8];
            $this->file_info['mtime']       = $stat[9];
            $this->file_info['permission']  = substr(sprintf('%o', fileperms($this->file)), -4);
            $this->file_info['fileowner']   = getenv('USERNAME');
        }

        /**
         * @param int $size = valor em bytes a ser formatado
         */
        private function format_bytes(int $size): string
        {
            $base     = log($size, 1024);
            $suffixes = ['', 'KB', 'MB', 'GB', 'TB'];
            return round(1024 ** ($base - floor($base)), 2) . '' . $suffixes[floor($base)];
        }
    }
