<?php

    /**
     * The loader of media types functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    // https://www.iana.org/protocols
    // https://github.com/jshttp/mime-db (best)
    // https://github.com/broofa/mime/
    // https://github.com/sindresorhus/file-type
    // https://github.com/ralouphie/mimey

    //https://www.php.net/manual/en/function.mime-content-type.php

    declare(strict_types=1);


    /**
     * @public
     *
     * @param string $filename
     *
     * @return array
     */
    function get_file_info(string $filename): array
    {
        // preset default extension
        $media_type = 'unknown';

        if (count(media_types_all()) > 0) {
            foreach (media_types_all() as $ext => $mediaType) {
                if ($ext === get_file_ext($filename)) {
                    $media_type = $mediaType;
                    break;
                }
            }
        }

        return [
            'extension' => get_file_ext($filename),
            'document' => get_document_type($filename),
            'type' => $media_type,
        ];
    }


    /**
     * Get mime content from collected information about file
     *
     * @param string $filename Filename with absolute path
     *
     * @return string
     */
    function get_mime_content(string $filename): string
    {
        return array_key_exists('type', get_file_info($filename)) ? get_file_info($filename)['type'] : 'unknown';
    }

    /**
     * @param string $ext
     *
     * @return string
     */
    function get_mime_type_from_ext(string $ext): string
    {
        if (media_types_all_full() !== []) {
            foreach (media_types_all_full() as $mimeDetails) {
                if (in_array($ext, $mimeDetails['extension'], true)) {
                    return $mimeDetails['type'];
                }
            }
        }

        return 'unknown';
    }

    /**
     * @param string $filename
     *
     * @return string
     */
    function get_document_type(string $filename): string
    {
        if (media_types_all_full() !== []) {
            foreach (media_types_all_full() as $mimeDetails) {
                if (in_array(get_file_ext($filename), $mimeDetails['extension'], true)) {
                    return $mimeDetails['document'];
                }
            }
        }

        return sprintf('%1$s file', get_file_ext($filename));
    }


    /**
     * @param string $filename
     *
     * @return string
     */
    function get_file_ext(string $filename): string
    {
        // set default needle for query
        $needle = '.';

        if (contains($filename, $needle)) {
            $ext_word_start = strrpos($filename, $needle) + 1;
            return substr($filename, $ext_word_start, strlen($filename));
        }

        return basename($filename);
    }


    /**
     * Check in list of media types
     *
     * @param array[] $mimeList
     * @param string $mime
     *
     * @return bool
     */
    function mime_in(array $mimeList, string $mime): bool
    {
        if (count($mimeList) > 0) {
            foreach ($mimeList as $mimeItem) {
                if ($mimeItem['type'] === $mime) {
                    return true;
                }
            }
        }

        return false;
    }


    /**
     * Quick loader for Media Types
     *
     * @param string $filename Filename with absolute path
     *
     * @return string[][]
     */
    function media_types_quick_loader(string $filename): array
    {
        $result = parse_msf_file($filename);

        //sort tables
        array_multisort($result, SORT_ASC);
        ksort($result, SORT_ASC);
        return $result;
    }
