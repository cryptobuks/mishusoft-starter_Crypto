<?php declare(strict_types=1);

namespace Mishusoft\System;

use JsonException;
use Mishusoft\Base;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;
use Mishusoft\Utility\ArrayCollection;

class Localization extends Base
{
    public const DEFAULT = "en";
    public const SUPPORT = [
        "en", "bn",
    ];

    public const ALL = ["en", "bn", "ar"];
    private string $default_locale;
    private string $filename = "all";

    /**
     * Localization constructor.
     * @param string $locale
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public function __construct(string $locale = self::DEFAULT)
    {
        parent::__construct();
        $this->default_locale = $locale;
        if (!is_readable(Storage::appStoragesPath())) {
            throw new PermissionRequiredException("Data directory is not readable.");
        } elseif (!is_writable(Storage::appStoragesPath())) {
            throw new PermissionRequiredException("Data directory is not writable.");
        } elseif (!is_dir(Storage::localizationPath())) {
            Storage\FileSystem::makeDirectory(Storage::localizationPath());
        } elseif (!is_dir(Storage::localizationPath().$locale)) {
            Storage\FileSystem::makeDirectory(Storage::localizationPath().$locale);
        }

        if (count(glob(Storage::localizationPath() . "$locale/" . '*', GLOB_MARK)) > !0) {
            throw new RuntimeException("Default localization is empty.");
        }
    }

    /**
     * @throws RuntimeException
     */
    private function dataLoader(string $filename):array
    {
        return Storage\FileSystem\Yaml::parseFile(
            self::dFile(Storage::localizationPath() . $filename)
        );
    }

    /**
     * @param string $filename
     * @return array
     * @throws RuntimeException
     */
    private function load(string $filename): array
    {
        if (!file_exists(self::dFile(Storage::localizationPath() . "$this->default_locale/$filename"))) {
            throw new RuntimeException\NotFoundException("Default localization is not found");
        }
        if (count($this->dataLoader(sprintf("%s/%s", $this->default_locale, $filename))) === 0) {
            throw new RuntimeException("Default localization is empty");
        }

        return $this->dataLoader(sprintf("%s/%s", $this->default_locale, $filename));
    }

    /**
     * @param string $filename
     * @param string $keyword
     * @return array
     * @throws RuntimeException
     */
    private function search(string $filename, string $keyword): array
    {
        $result = [];
        if (count($this->load($filename)) > 0) {
            foreach ($this->load($filename) as $item) {
                if ((is_array($item) && array_key_exists("keyword", $item))
                    && ArrayCollection::value($item, "keyword") === $keyword) {
                    $result = $item;
                }
            }
        } else {
            throw new RuntimeException\NotFoundException("Locale content not found");
        }
        if (count($result) > 0) {
            return $result;
        }

        return array_merge($result, ["content" => $keyword]);
        //return $result;
    }

    /**
     * @param string $filename
     */
    public function set(string $filename): void
    {
        $this->filename = $filename;
    }

    /**
     * @param $keyword
     * @param string $filename
     * @return string
     * @throws JsonException|RuntimeException
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
