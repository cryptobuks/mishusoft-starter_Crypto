<?php


namespace Mishusoft\Framework\Chipsets\System;


/*var_dump( MessageFormatter::formatMessage(
    "en_US",
    "I have {0, spellout} apples",
    array( 34 )
) );
var_dump( MessageFormatter::formatMessage(
    "bn",
    "I have {0, spellout} apples",
    array( 34 )
) );

var_dump( MessageFormatter::formatMessage(
    "ar",
    "I have {0, spellout} apples",
    array( 34 )
) );*/

//locale_set_default("en_US");


/*var_dump(
    MessageFormatter::formatMessage(
        "bn",
        "I have {number_apples, number, integer} apples.",
        [ 'number_apples' => 3 ]
    )
);*/


/*
            $time = time();
            var_dump( MessageFormatter::formatMessage(
                "en_US",
                "Today is {0, date, full} - {0, time}",
                array( $time )
            ) );
            var_dump( MessageFormatter::formatMessage(
                "bn",
                "Today is {0, date, full} - {0, time}",
                array( $time )
            ) );
            var_dump( MessageFormatter::formatMessage(
                "ar",
                "Today is {0, date, full} - {0, time}",
                array( $time )
            ) );*/


use Mishusoft\Framework\Chipsets\Utility\_Array;

class Localization
{

    public const default = "en_us";
    const support = [
        "en_us", "bn"
    ];

    const All = ["en_us", "bn", "ar"];

    const dataDirectory = MS_PRIVATE_LOCALIZATIONS_PATH;
    private string $default_locale;
    private string $filename = "all";

    /**
     * Localization constructor.
     * @param string $locale
     */
    public function __construct(string $locale = self::default)
    {
        $this->default_locale = $locale;
        if (!is_readable(MS_STORAGE_PATH)) {
            trigger_error("Data directory is not readable.");
        } else {
            if (!is_writable(MS_STORAGE_PATH)) {
                trigger_error("Data directory is not writable.");
            } else {
                if (!is_dir(self::dataDirectory)) {
                    mkdir(self::dataDirectory, 0777, true);
                } else {
                    if (!is_dir(self::dataDirectory . "$locale")) {
                        mkdir(self::dataDirectory . "$locale", 0777, true);
                    }
                }
            }
        }

        if (count(glob(self::dataDirectory . "$locale/" . '*', GLOB_MARK)) > !0) {
            trigger_error("Default localization is empty.");
        }

    }

    /**
     * @param string $filename
     * @return array
     */
    private function load(string $filename): array
    {
        if (!file_exists(self::dataDirectory . "$this->default_locale/$filename.json")) {
            trigger_error("Default localization is empty.");
        }

        return json_decode(file_get_contents(self::dataDirectory . "$this->default_locale/$filename.json"), true);

    }

    /**
     * @param string $filename
     * @param string $keyword
     * @return array
     */
    private function search(string $filename, string $keyword): array
    {
        $result = array();
        if (count($this->load($filename)) > 0) {
            foreach ($this->load($filename) as $item) {
                if (is_array($item) and array_key_exists("keyword", $item)) {
                    if (_Array::value($item, "keyword") === $keyword) {
                        $result = $item;
                    }
                }
            }
        } else {
            trigger_error("locale content not found.");
        }
        if (count($result) > 0) {
            return $result;
        } else {
            return array_merge($result, array("content" => $keyword));
        }
        //return $result;
    }

    /**
     * @param string $filename
     */
    function set(string $filename)
    {
        $this->filename = $filename;

    }

    /**
     * @param $keyword
     * @param string $filename
     * @return string
     */
    function translate($keyword, string $filename = ""): string
    {
        if (empty($filename)) {
            if (!empty($this->filename)) {
                if (is_array($keyword)) {
                    if ((count($this->search($this->filename, array_key_first($keyword))) > 0)) {
                        return _Array::value($this->search($this->filename, array_key_first($keyword)), "content");
                    } else {
                        return _Array::value($keyword, array_key_first($keyword));
                    }
                } else {
                    return _Array::value($this->search($this->filename, $keyword), "content");
                }
            } else {
                if (is_array($keyword)) {
                    return array_key_first($keyword);
                } else {
                    return $keyword;
                }
            }
        } else {
            if (is_array($keyword)) {
                if ((count($this->search($filename, array_key_first($keyword))) > 0)) {
                    return _Array::value($this->search($filename, array_key_first($keyword)), "content");
                } else {
                    return _Array::value($keyword, array_key_first($keyword));
                }
            } else {
                return _Array::value($this->search($filename, $keyword), "content");
            }
        }
    }
}