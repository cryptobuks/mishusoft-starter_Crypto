<?php

    /**
     * The loader of media types builder functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    /**
     * Generate updated database from Apache media types
     *
     * @see https://www.php.net/manual/en/function.mime-content-type.php
     *
     * @param string $url Valid url from Apache server
     *
     * @return string[] Generated media types array
     */
    function get_updated_media_types_apache_db(string $url): array
    {
        $result      = [];
        $mimeContent = file_get_contents($url);
        $mimeContent = is_string($mimeContent) ? $mimeContent : '';


        foreach (explode("\n", $mimeContent) as $x) {
            if (isset($x[0]) && $x[0] !== '#' && preg_match_all('#([^\s]+)#', $x, $out) && isset($out[1]) && ($c = count($out[1])) > 1) {
                for ($i = 1; $i < $c; $i++) {
                    //if ($result[$out[1][$i]] !== "") {
                    $result[$out[1][$i]] = $out[1][0];
                    //}
                }
            }
        }
        return $result;
    }

    /**
     * Generate updated database from NGINX media types
     *
     * @see https://www.php.net/manual/en/function.mime-content-type.php
     *
     * @param string $url Valid url from NGINX server
     *
     * @return string[] Generated media types array
     */
    function get_updated_media_types_nginx_db(string $url): array
    {
        $result      = [];
        $mimeContent = file_get_contents($url);
        $mimeContent = is_string($mimeContent) ? $mimeContent : '';

        $curlyFirst  = strpos($mimeContent, '{') + 1;
        $mimeContent = substr($mimeContent, $curlyFirst, -2);

        foreach (explode("\n", $mimeContent) as $x) {
            if (preg_match_all('#([^\s]+)#', $x, $out) && isset($out[1]) && ($c = count($out[1])) > 1) {
                for ($i = 1; $i < $c; $i++) {
                    $result[rtrim($out[1][$i], ';')] = rtrim($out[1][0], ';');
                }
            }
        }

        return $result;
    }


    /**
     * Generate updated database from local db
     *
     * @see https://www.php.net/manual/en/function.mime-content-type.php
     *
     * @param string $filename Absolute file path
     *
     * @return string[] Generated media types array
     */
    function get_updated_media_types_local_db(string $filename): array
    {
        $result        = [];
        $replacedItems = ['*' => '', ',' => '', /*'[0-9][0-9][0-9]' => '',*/];
        $mimeContent   = file_get_contents($filename);
        $mimeContent   = is_string($mimeContent) ? $mimeContent : '';

        foreach (explode("\n", $mimeContent) as $line) {
            if (isset($line[0]) && $line[0] !== '#') {
                [$mime, $ext] = explode(':', $line);
                $result[ltrim(strtr($ext, $replacedItems), '.')] = strtr($mime, $replacedItems);
                //str_replace(['"',"'"], "", $text)
            }
        }

        return $result;
    }

    /**
     * Get full database from local media types database
     *
     * @see https://stackoverflow.com/questions/17917539/read-xml-file-with-php
     *
     * @param string $filename Absolute file path
     *
     * @return array Generated media types array
     */
    function get_updated_media_types_local_db_full(string $filename): array
    {
        $db          = [];
        $mimeContent = file_get_contents($filename);
        $mimeContent = is_string($mimeContent) ? $mimeContent : '';
        $mimeContent = substr($mimeContent, strpos($mimeContent, '<mime-info'));

        $dom = new DOMDocument();
        $dom->loadXML(trim($mimeContent));

        // collect mime type from db file
        foreach ($dom->getElementsByTagName('mime-type') as $mimeType) {
            // initiate result variable
            $result = [
                "extension" => [],
                "type"      => $mimeType->getAttribute('type'),
            ];

            // collect document name from db file
            foreach ($mimeType->getElementsByTagName('comment') as $comment) {
                if (count($comment->attributes) === 0) {
                    $result['document'] = $comment->textContent;
                }
            }
            // collect acronym from db file
            foreach ($mimeType->getElementsByTagName('acronym') as $acronym) {
                $result['acronym'] = $acronym->textContent;
            }
            // collect expanded acronym from db file
            foreach ($mimeType->getElementsByTagName('expanded-acronym') as $expandedAcronym) {
                $result['expanded-acronym'] = $expandedAcronym->textContent;
            }
            // collect parent class from db file
            foreach ($mimeType->getElementsByTagName('sub-class-of') as $subClassOf) {
                $result['sub-class-of'] = $subClassOf->getAttribute('type');
            }

            // collect alias mime from db file
            foreach ($mimeType->getElementsByTagName('alias') as $alias) {
                $result['alias'] = $alias->getAttribute('type');
            }

            if (count($mimeType->getElementsByTagName('glob')) > 0) {
                // collect extension list from db file
                foreach ($mimeType->getElementsByTagName('glob') as $globFileExt) {
                    $result['extension'][] = str_replace('*.', '', $globFileExt->getAttribute('pattern'));
                }
            } elseif (count($mimeType->getElementsByTagName('match')) > 0) {
                // collect extension list from db file
                foreach ($mimeType->getElementsByTagName('match') as $matchFileExt) {
                    $result['extension'][] = str_replace('*.', '', $matchFileExt->getAttribute('value'));
                }
            } else {
                // collect extension list from db file
                foreach ($mimeType->getElementsByTagName('treematch') as $matchFileExt) {
                    $result['extension'][] = str_replace('*.', '', $matchFileExt->getAttribute('path'));
                }
            }

            $db[] = $result;
        }
        return $db;
    }
