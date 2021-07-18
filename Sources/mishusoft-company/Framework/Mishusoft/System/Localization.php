<?php declare(strict_types=1);


namespace Mishusoft\System;

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


use Mishusoft\Utility\ArrayCollection;

class Localization
{
    public const DEFAULT = "en_us";
    public const SUPPORT = [
        "en_us", "bn"
    ];

    public const ALL = ["en_us", "bn", "ar"];

    public const DATA_DIRECTORY = APPLICATION_PRIVATE_LOCALIZATIONS_PATH;
    private string $default_locale;
    private string $filename = "all";

    /**
     * Localization constructor.
     * @param string $locale
     */
    public function __construct(string $locale = self::DEFAULT)
    {
        $this->default_locale = $locale;
        if (!is_readable(APPLICATION_STORAGE_PATH)) {
            trigger_error("Data directory is not readable.");
        } elseif (!is_writable(APPLICATION_STORAGE_PATH)) {
            trigger_error("Data directory is not writable.");
        } elseif (!is_dir(self::DATA_DIRECTORY)) {
            if (!mkdir($concurrentDirectory = self::DATA_DIRECTORY, 0777, true) && !is_dir($concurrentDirectory)) {
                throw new \RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
            }
        } elseif (!is_dir(self::DATA_DIRECTORY . "$locale")) {
            if (!mkdir($concurrentDirectory = self::dataDirectory . "$locale", 0777, true) && !is_dir($concurrentDirectory)) {
                throw new \RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
            }
        }

        if (count(glob(self::DATA_DIRECTORY . "$locale/" . '*', GLOB_MARK)) > !0) {
            trigger_error("Default localization is empty.");
        }
    }

    /**
     * @param string $filename
     * @return array
     * @throws \JsonException
     */
    private function load(string $filename): array
    {
        if (!file_exists(self::DATA_DIRECTORY . "$this->default_locale/$filename.json")) {
            trigger_error("Default localization is empty.");
        }

        return json_decode(
            file_get_contents(self::DATA_DIRECTORY . "$this->default_locale/$filename.json"),
            true,
            512,
            JSON_THROW_ON_ERROR
        );
    }

    /**
     * @param string $filename
     * @param string $keyword
     * @return array
     * @throws \JsonException
     */
    private function search(string $filename, string $keyword): array
    {
        $result = array();
        if (count($this->load($filename)) > 0) {
            foreach ($this->load($filename) as $item) {
                if ((is_array($item) and array_key_exists("keyword", $item))
                    && ArrayCollection::value($item, "keyword") === $keyword) {
                    $result = $item;
                }
            }
        } else {
            trigger_error("locale content not found.");
        }
        if (count($result) > 0) {
            return $result;
        }

        return array_merge($result, array("content" => $keyword));
        //return $result;
    }

    /**
     * @param string $filename
     */
    public function set(string $filename)
    {
        $this->filename = $filename;
    }

    /**
     * @param $keyword
     * @param string $filename
     * @return string
     * @throws \JsonException
     */
    public function translate($keyword, string $filename = ""): string
    {
        if (empty($filename)) {
            if (!empty($this->filename)) {
                if (is_array($keyword)) {
                    if ((count($this->search($this->filename, array_key_first($keyword))) > 0)) {
                        return ArrayCollection::value($this->search($this->filename, array_key_first($keyword)), "content");
                    }

                    return ArrayCollection::value($keyword, array_key_first($keyword));
                }

                return ArrayCollection::value($this->search($this->filename, $keyword), "content");
            }

            if (is_array($keyword)) {
                return array_key_first($keyword);
            }

            return $keyword;
        }

        if (is_array($keyword)) {
            if ((count($this->search($filename, array_key_first($keyword))) > 0)) {
                return ArrayCollection::value($this->search($filename, array_key_first($keyword)), "content");
            }

            return ArrayCollection::value($keyword, array_key_first($keyword));
        }

        return ArrayCollection::value($this->search($filename, $keyword), "content");
    }
}
