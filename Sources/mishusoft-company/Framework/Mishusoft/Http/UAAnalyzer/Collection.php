<?php


namespace Mishusoft\Http\UAAnalyzer;

use Closure;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\FileSystem;
use Mishusoft\Storage;
use Mishusoft\Utility\JSON;

abstract class Collection extends UAAnalyzerBase
{
    // Root path of data path
    //protected const USER_AGENT_ANALYZE_DATA_PATH = APPLICATION_STORAGE_PATH . '0/UAAnalyzer' . DIRECTORY_SEPARATOR;
    protected const DATA_FILE_FORMAT ='.yml';

    private string $defaultSeparators = '(\s+|\/|\_|\-|\:|\;|\()';
    //private string $defaultVersionsString
    // = '(v|y|yb\/|nt)?\s*(\d+[.-_]\d+[.-]\d+[.-_]\d+)|(\d+[.-_]\d+[.-_]\d+)|(\d+[.-_]\d+)|(\d+)|(\w+)';
    private string $defaultVersionsString;


    private array $spaces = [];

    /**
     * @throws RuntimeException
     */
    protected function __construct()
    {
        //https://user-agents.net/browsers
        //https://developers.whatismybrowser.com/useragents/explore/software_name/
        //https://deviceatlas.com/blog/list-of-user-agent-strings
        //http://www.useragentstring.com/pages/useragentstring.php
        //https://www.whatsmyua.info/
        //https://useragents.io/
        //http://www.zytrax.com/tech/web/browser_ids.htm

        parent::__construct();
        $this->defaultVersionsString = '(v|y|yb\/|nt)?'; // Add prefix for version number
        $this->defaultVersionsString .= '(\s*|\/|\_|\-|\:|\;|\()?'; // Add additional separator for version number
        $this->defaultVersionsString .= '((\d+[.-_])?(\d+[.-_])?(\d+[.-])?(\d+[.-_])?(\d+))|(\w+)'; // version number

        $directories = array(
            $this->uaStoragePath . 'browsers'. DIRECTORY_SEPARATOR,
            $this->uaStoragePath . 'devices'. DIRECTORY_SEPARATOR,
            $this->uaStoragePath . 'platforms'. DIRECTORY_SEPARATOR,
            $this->uaStoragePath . 'resources'. DIRECTORY_SEPARATOR,
        );

        foreach ($directories as $directory) {
            if (file_exists($directory) === false) {
                throw new RuntimeException(sprintf('%s not exists', $directory));
            }
        }
    }

    /**
     * @throws RuntimeException
     */
    public function dataDictionaryDirectory(string $name):string
    {
        if (in_array(strtolower($name), array('browsers','devices','platforms','resources'), true) === false) {
            throw new RuntimeException(
                sprintf(
                    '%s not exists',
                    sprintf('%s%s%s', $this->uaStoragePath, strtolower($name), DIRECTORY_SEPARATOR)
                )
            );
        }
        return sprintf('%s%s%s', $this->uaStoragePath, strtolower($name), DIRECTORY_SEPARATOR);
    }

    /**
     * @throws RuntimeException
     */
    protected function query(string $category, string $item) : array
    {
        $loc = sprintf('%s%s/%s', $this->uaStoragePath, $category, $item);
        if (file_exists($loc) === true) {
            if (count(FileSystem::globRecursive($loc, GLOB_MARK)) > 0) {
                return $this->dictionariesAll($loc);
            }

            throw new RuntimeException(sprintf('%s is empty directory', $loc));
        } elseif (file_exists(sprintf('%s%s', $loc, self::DATA_FILE_FORMAT)) === true) {
            $dictionary = FileSystem\Yaml::parseFile(sprintf('%s%s', $loc, self::DATA_FILE_FORMAT));
            if (is_array($dictionary) === true) {
                return FileSystem\Yaml::parseFile(sprintf('%s%s', $loc, self::DATA_FILE_FORMAT));
            }

            return  array();
        } else {
            throw new RuntimeException(sprintf('%s not exists', $loc));
        }
    }

    /**
     * @throws RuntimeException
     */
    protected function dictionariesAll(string $directory):array
    {
        $dFiles = FileSystem::globRecursive($directory, GLOB_MARK);
        $dictionaries = array();

        foreach ($dFiles as $dFile) {
            if (Storage::getExtension($dFile) === 'yml') {
                $dictionaries[] = FileSystem\Yaml::parseFile($dFile);
            }
        }

        return $this->merge($dictionaries);
    }

    /**
     * @param array $dictionaries
     * @return array
     */
    protected function merge(array $dictionaries):array
    {
        $result = array();
        foreach ($dictionaries as $dictionary) {
            if (is_array($dictionary) === true) {
                foreach ($dictionary as $value) {
                    $result[] = $value;
                }
            }
        }
        return $result;
    }

    /**
     * @param array $dictionaries
     */
    protected function loadSpaces(array $dictionaries):void
    {
        foreach ($dictionaries as $dictionary) {
            if (array_key_exists('identifiers', $dictionary) === true) {
                foreach ($dictionary['identifiers'] as $identifier => $ignore) {
                    if (array_key_exists('space', $dictionary) === true) {
                        $this->setSpaces($identifier, $dictionary['space']);
                    }
                }
            }
        }
    }

    /**
     * @param array $dictionaries
     * @return array
     */
    protected function extractArchitectures(array $dictionaries):array
    {
        $result = array();
        foreach ($dictionaries as $dictionary) {
            if (array_key_exists('architecture', $dictionary) === true) {
                $result[$dictionary['architecture']] = $dictionary['word'];
            }
        }
        return $result;
    }

    /**
     * @param array $dictionaries
     * @param Closure $callback
     * @return array
     */
    protected function extractInformation(array $dictionaries, Closure $callback):array
    {
        $result = array();
        foreach ($dictionaries as $dictionary) {
            if (array_key_exists('info', $dictionary) === true) {
                $resources = $dictionary['info'];
                if (array_key_exists('identifiers', $dictionary) === true) {
                    foreach ($dictionary['identifiers'] as $identifier => $details) {
                        $result[$identifier] = $callback($resources);
                        //$result = $callback($resources);
                    }
                }
            }
        }
        return $result;
    }


    /**
     * @throws RuntimeException
     */
    protected function extractAttribute(array $dictionaries, string $job, Closure|bool $callback = false) : array
    {
        $result = array();
        $job = strtolower($job);

        if (in_array($job, array('identifier-only','identifier-with-pattern','info-only','associates-only'))) {
            foreach ($dictionaries as $dictionary) {
                if ($job === 'identifier-only') {
                    if (array_key_exists('identifiers', $dictionary) === true) {
                        foreach ($dictionary['identifiers'] as $identifier => $ignore) {
                            $result[] = $identifier;
                        }
                    } else {
                        throw new RuntimeException('Identifier attribute not exists in current database');
                    }
                }
                if ($job === 'identifier-with-pattern') {
                    if (array_key_exists('identifiers', $dictionary) === true) {
                        foreach ($dictionary['identifiers'] as $identifier => $properties) {
                            if (array_key_exists('pattern', $properties) === true) {
                                if ($properties['functional'] === true) {
                                    $regex = $this->makePattern(
                                        $properties['pattern']['name'],
                                        $properties['pattern']['separator'],
                                        $properties['pattern']['version']
                                    );
                                } else {
                                    if (is_bool($properties['pattern']['separator']) === true) {
                                        $properties['pattern']['separator'] = '';
                                    }
                                    if (is_bool($properties['pattern']['version']) === true) {
                                        $properties['pattern']['version'] = '';
                                    }
                                    $regex = sprintf(
                                        '/%s%s%s/i',
                                        $properties['pattern']['name'],
                                        $properties['pattern']['separator'],
                                        $properties['pattern']['version']
                                    );
                                }

                                $result[$identifier] = $regex;
                            } else {
                                throw new RuntimeException('Pattern attribute not exists in current database');
                            }
                        }
                    } else {
                        throw new RuntimeException('Identifier attribute not exists in current database');
                    }
                }
                if ($job === 'info-only') {
                    if (array_key_exists('info', $dictionary) === true) {
                        if (is_string($dictionary['info']) === true) {
                            if (array_key_exists('identifiers', $dictionary) === true) {
                                foreach ($dictionary['identifiers'] as $identifierKey => $details) {
                                    // Make details about browser/device/platform
                                    [$attribute, $identifier] = $this->makeArguments($dictionary['info']);
                                    $result[$identifierKey] = $this->attributeDetails($attribute, $identifier);

                                    // Make details about author/developer
                                    [$attribute, $identifier] = $this->makeArguments( $result[$identifierKey]['author']);
                                    $result[$identifierKey]['author'] = $this->attributeDetails($attribute, $identifier);

                                    // Make details about licence
                                    if (is_array($result[$identifierKey]['licence']) === true) {
                                        foreach ($result[$identifierKey]['licence'] as $licence) {
                                            [$attribute, $identifier] = $this->makeArguments( $licence);
                                            $result[$identifierKey]['licence'] = $this->attributeDetails($attribute, $identifier);
                                        }
                                    } else {
                                        [$attribute, $identifier] = $this->makeArguments($result[$identifierKey]['licence']);
                                        $result[$identifierKey]['licence'] = $this->attributeDetails($attribute, $identifier);
                                    }
                                    // Make details about engines
                                    if (is_array($result[$identifierKey]['engines']) === true) {
                                        foreach ($result[$identifierKey]['engines'] as $engine) {
                                            [$attribute, $identifier] = $this->makeArguments($engine);
                                            $result[$identifierKey]['engines'][$engine] = $this->attributeDetails($attribute, $identifier);
                                        }
                                    } else {
                                        [$attribute, $identifier] = $this->makeArguments($result[$identifierKey]['engines']);
                                        $result[$identifierKey]['engines'] = $this->attributeDetails($attribute, $identifier);
                                    }
                                }
                            }
                        } else {
                            throw new RuntimeException('Identifier attribute not exists in current database');
                        }
                    } else {
                        throw new RuntimeException('Info attribute not exists in current database');
                    }
                }
                if ($job === 'associates-only') {
                    if (array_key_exists('identifiers', $dictionary) === true) {
                        foreach ($dictionary['identifiers'] as $identifier => $details) {
                            $result[$identifier] = $dictionary;
                            unset($result[$identifier]['identifiers'], $result[$identifier]['info']);
                        }
                    } else {
                        throw new RuntimeException('Attributes not exists in current database');
                    }
                }
            }
            return $result;
        }

        throw new RuntimeException('Unknown job .' . $job);
    }

    /**
     * @throws RuntimeException
     */
    protected function attributeDetails(string $attribute, array|string $identifiers): array
    {

        $attributeDetails  = array_change_key_case($this->attributeDetailsQuery($attribute));

        if (is_string($identifiers)) {
            return $this->makeAttributeDetails($attribute, $attributeDetails, $identifiers);
        }

        if (count($identifiers) > 0) {
            $info = array();
            foreach ($identifiers as $identifier) {
                $info[$identifier] = $this->makeAttributeDetails($attribute, $attributeDetails, $identifier);
            }

            return $info;
        }

        throw new RuntimeException('Unknown error occurred');
    }

    /**
     * @throws RuntimeException
     */
    protected function attributeDetailsQuery(string $attribute): array
    {
        return match (strtolower($attribute)) {
            'browser'           => $this->contentQuery('browsers'),
            'browser-engine'    => $this->contentQuery('browsers-engines'),
            'licence'           => $this->contentQuery('licenses'),
            'author'            => $this->contentQuery('authors'),
            'device'            => $this->contentQuery('devices'),
            'platform'          => $this->contentQuery('platforms'),
            default => array()
        };
    }

    /**
     * @throws RuntimeException
     */
    private function contentQuery(string $filename):array
    {
        return FileSystem\Yaml::parseFile(
            sprintf('%s%s.yml', $this->dataDictionaryDirectory('resources'), $filename)
        );
    }

    /**
     * @throws RuntimeException
     */
    protected function makeAttributeDetails(string $attribute, array $attributeDetails, string $identifier): array
    {
        $identifier = strtolower($identifier);
        if ($identifier === 'unknown') {
            return array($identifier);
        }

        if (count($attributeDetails) > 0) {
            if (array_key_exists($identifier, $attributeDetails)) {
                return $attributeDetails[$identifier];
            }

            throw new RuntimeException(
                sprintf('Unknown attribute %s (%s)', ucwords(str_replace('-', ' ', $identifier)), $attribute)
            );
        }
        
        throw new RuntimeException(sprintf('Resources %s is empty', $attribute));
    }


    /**
     * Check database are updated.
     *
     * @param array $database Loaded database.
     * @param string $filename Database file name.
     *
     * @return boolean
     * @throws \JsonException Throw exception when json process error occurred.
     */
    protected function isUpdateDatabase(array $database, string $filename): bool
    {
        return ((is_readable($filename) === true)
                && (FileSystem::read($filename) !== '')
                && (count(array_keys($database)) > count(array_keys(JSON::decodeToArray(FileSystem::read($filename))))))
            || (strlen(JSON::encodeToString($database)) > strlen(FileSystem::read($filename)));
    }//end isUpdateDatabase()


    protected function makeArguments(string|array $stringContent):array
    {
        $this->knownIdentifers = [
            'browser',
            'analyser',
            'compatibility',
            'application',
            'bot',
            'email-client',
            'feed-reader',
            'multimedia-player',
            'offline-browser',
            'tool',
            'platform',
            'device',
            'author',
            'licence',
            'engine',
        ];
        if (is_string($stringContent)) {
            return explode(' ', $stringContent);
        }

        throw new \RuntimeException('Argument #1 is not string');
    }

    /**
     * @param string $name
     * @param string|bool $separator
     * @param string|bool $version
     * @return string
     * @throws RuntimeException
     */
    protected function makePattern(string $name, string|bool $separator, string|bool $version):string
    {
        //https://www.php.net/manual/en/regexp.reference.subpatterns.php
        //https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php

        //Simple regex
        //
        //Regex quick reference
        //[abc]     A single character: a, b or c
        //[^abc]     Any single character but a, b, or c
        //[a-z]     Any single character in the range a-z
        //[a-zA-Z]     Any single character in the range a-z or A-Z
        //^     Start of line
        //$     End of line
        //\A     Start of string
        //\z     End of string
        //.     Any single character
        //\s     Any whitespace character
        //\S     Any non-whitespace character
        //\d     Any digit
        //\D     Any non-digit
        //\w     Any word character (letter, number, underscore)
        //\W     Any non-word character
        //\b     Any word boundary character
        //(...)     Capture everything enclosed
        //(a|b)     a or b
        //a?     Zero or one of a
        //a*     Zero or more of a
        //a+     One or more of a
        //a{3}     Exactly 3 of a
        //a{3,}     3 or more of a
        //a{3,6}     Between 3 and 6 of a
        //
        //options:
        // i case insensitive m make dot match newlines x ignore whitespace in regex
        // o perform #{...} substitutions only once

        //$default = '/(?<name>(mozilla))(?<separator>(\s*|\/|\-|\:))(?<version>(\d+[.]\d+))/i';
        //$defaultSeparatorPattern = '(\s*|\/|\_|\-|\:)';

        // Android 6.0.1
        // Baiduspider/2.0
        // Chrome/91.0.4472.77
        // PTST/210609.200427
        // Apache-HttpClient/4.5.5
        // ActiveBookmark 1.x
        // Muncher YB/3.5.1
        // Ad Muncher YB/3.5.1
        // Ad Muncher v4.94.34121/7137 (Free)
        // Windows NT 10.0
        // 1337Browser_V3.1
        // 2345chrome v3.0.0.9739 ok
        //Silk/1.0.13.81_10003810
        //CPU OS 11_2_2
        //$defaultVersionPattern = '(v|y|yb\/|nt)?\s*(\d+[.-]\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+)|(\d+)|(\w+)';
        //$defaultVersionPattern = 'v?(\d+[.-]\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+)|(\d+)|(\w+)';
        if ($name!=='') {
            $namePattern = sprintf('(?<name>%s)', $name);
        } else {
            throw new RuntimeException('\$name can not be empty');
        }


        return sprintf(
            '/%s%s%s/imu',
            $namePattern,
            $this->validate('separator', $this->defaultSeparators, $separator),
            $this->validate('version', $this->defaultVersionsString, $version)
            //$this->validate('version', $defaultVersionPattern, $version)
        );
    }

    /**
     * @param string $identifier
     * @param string $default
     * @param string|bool $variable
     * @return string
     */
    private function validate(string $identifier, string $default, string|bool $variable):string
    {
        if (is_string($variable) && $variable !=='') {
            return sprintf('(?<%s>%s)', $identifier, $variable);
        }

        if (is_bool($variable) && $variable === false) {
            return '';
        }

        return sprintf('(?<%s>%s)', $identifier, $default);
    }

    /**
     * @param string $key
     * @param mixed $value
     */
    private function setSpaces(string $key, mixed $value): void
    {
        $this->spaces[$key] = $value;
    }

    /**
     * @return array
     */
    protected function getSpaces(): array
    {
        return $this->spaces;
    }

    /**
     * @return array
     */
    protected function getSpace(string $key): mixed
    {
        if (array_key_exists($key, $this->spaces) === true) {
            return $this->spaces[$key];
        }
        return '';
    }
}
