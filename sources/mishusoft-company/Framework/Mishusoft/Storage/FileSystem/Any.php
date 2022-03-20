<?php

    namespace Mishusoft\Storage\FileSystem;

    use Mishusoft\Storage\FileSystem;

    class Any extends FileSystem
    {
        /**
         * @param string $filename
         * @param bool   $retbytes
         *
         * @return int|bool
         */
        public static function streamFileOrUrl(string $filename, bool $retbytes = true): int|bool
        {
            $chunksize = 1 * (1024 * 1024); // how many bytes per chunk
            $buffer    = '';
            $cnt       = 0;
            $handle    = fopen($filename, 'rb');
            if ($handle === false) {
                return false;
            }
            while (!feof($handle)) {
                $buffer = fread($handle, $chunksize);
                echo $buffer;
                if ($retbytes) {
                    $cnt += strlen($buffer);
                }
            }
            $status = fclose($handle);
            if ($retbytes && $status) {
                return $cnt; // return num. bytes delivered like readfile() does.
            }
            return $status;
        }

        /**
         * @param string $filename
         *
         * @return bool
         */
        public static function createFile(string $filename): bool
        {
            if (is_writable(dirname($filename))) {
                return (bool)fopen($filename, "wb+");
            }

            return false;
        }

        /**
         * Emit file with array data
         *
         * @param string       $filename File name which is exists or not
         * @param string|array $content  Valid string and array to write file
         *
         * @return bool Return boolean answer true when is written otherwise false
         */
        public static function emitFile(string $filename, string|array $content): bool
        {
            $isWritten   = false;
            $createdFile = fopen($filename, "wb+");
            if (is_resource($createdFile)) {
                if (is_array($content)) {
                    $isWritten = file_put_contents($filename, $content);
                } else {
                    $isWritten = fwrite($createdFile, $content);
                }
                fclose($createdFile);
            }

            return (bool)$isWritten;
        }

        /**
         * @param string   $filename
         * @param array    $contents
         * @param int|null $length
         *
         * @return false|int
         * @throws \Exception
         */
        public static function write(string $filename, array $contents, int|null $length = null): false|int
        {
            $isWritten   = false;
            $createdFile = fopen($filename, "wb+");
            if (is_resource($createdFile)) {
                $isWritten = fwrite($createdFile, encode_to_json($contents), $length);
                fclose($createdFile);
            }

            return $isWritten;
        }

        /**
         * Parse target string  from file to string content
         *
         * @see https://www.php.net/manual/en/function.fread.php
         *
         * @param string $filename File name which is already exists
         *
         * @return string|false Return string when is file exists and data parse otherwise false
         */
        public static function readFile(string $filename): string|false
        {
            $fileContent = '';
            if (file_exists($filename)) {
                $openFile = fopen($filename, "rb");
                if (is_resource($openFile)) {
                    while (!feof($openFile)) {
                        $fileContent .= fread($openFile, 8192);
                    }
                    fclose($openFile);
                } else {
                    return false;
                }
            } else {
                return false;
            }


            return $fileContent;
        }

        public static function parseFile(string $filename): array
        {
            $result = [];
            if (file_exists($filename)) {
                $fileContent = file_get_contents($filename);
                if (is_string($fileContent)) {
                    $oldContent = decode_from_json($fileContent, JSON_LOOSE_TYPE);

                    //Merge file's content with logs
                    if (is_array($oldContent) && count($oldContent) !== 0) {
                        $result = array_merge($result, $oldContent);
                    }//end if
                }
            }

            return $result;
        }
    }
