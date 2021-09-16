<?php


namespace Mishusoft\Http\UAAnalyzer;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Implement;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\JSON;

abstract class Collection extends UAAnalyzerBase
{
    private array $regex = [
        'separator' => '(\s+|\/|\_|\-|\:|\;|\()',
    ];

    private array $dictionaries = [];
    private array $configs = [
        'browsers' => [
            'analysers',
            'applications',
            'browsers',
            'browsers-engines',
            'bots',
            'compatibilities',
            'cloud-platforms',
            'email-clients',
            //'email-collectors',
            'feed-readers',
            //'link-checkers',
            //'libraries',
            'multimedia-players',
            'offline-browsers',
            'tools',
            //'validators',
        ],
        'devices' => [
            'categories',
        ],
        'platforms' => [
            'architectures',
            'os',
            'wm',
        ],
        'resources' => [
            'analysers',
            'applications',
            'authors',
            'bots',
            'browsers',
            'browsers-engines',
            'compatibilities',
            'cloud-platforms',
            'devices',
            'email-clients',
            //'email-collectors',
            'feed-readers',
            'licences',
            //'link-checkers',
            //'libraries',
            'multimedia-players',
            'offline-browsers',
            'platforms',
            'tools',
            'wm',
            //'validators',
        ],
    ];
    private array $directoriesWithFiles = [];
    private array $attributes;
    private string $detailsBuilderAttribute;

    /**
     * @throws RuntimeException
     */
    protected function __construct()
    {
        parent::__construct();

        //https://user-agents.net/browsers
        //https://developers.whatismybrowser.com/useragents/explore/software_name/
        //https://deviceatlas.com/blog/list-of-user-agent-strings
        //http://www.useragentstring.com/pages/useragentstring.php
        //https://www.whatsmyua.info/
        //https://useragents.io/
        //http://www.zytrax.com/tech/web/browser_ids.htm

        // Add regex for prefix for version number
        $this->regex['version'] = '(v|y|yb\/|nt)?';
        // Add regex for additional separator for version number
        $this->regex['version'] .= '(\s*|\/|\_|\-|\:|\;|\()?';
        //Add regex for version number or word
        $this->regex['version'] .= '((\d+[.-_ ])?(\d+[.-_ ])?(\d+[.-_ ])?(\d+[.-_ ])?(\d+))|(\w+)';

        //add attributes
        $this->attributes = ['author', 'licence', 'engines'];

        if (count($this->dictionaries) === 0) {
            $this->loadDictionaries();
        }
    }

    /**
     * @throws RuntimeException
     */
    private function loadDictionaries(): void
    {
        $configFile = self::dFile(self::configDataFile('UAAnalyzer', 'configs'));

        if (file_exists($configFile)) {
            $loadedConfig = Storage\FileSystem\Yaml::parseFile($configFile);
            if ((count($loadedConfig) > 0)) {
                $this->directoriesWithFiles = $loadedConfig;
            }
        } else {
            Storage\FileSystem::makeDirectory(dirname($configFile));
            Storage\FileSystem\Yaml::emitFile($configFile, $this->configs);
            $this->directoriesWithFiles = $this->configs;
        }

        //check modification of data files

        $cacheDictionariesFile = self::dFile(self::configDataFile('UAAnalyzer', 'dictionaries'));
        if (file_exists($cacheDictionariesFile)) {
            $this->dictionaries = Storage\FileSystem\Yaml::parseFile($cacheDictionariesFile);
            //Debug::preOutput(Implement::arrayToJson($this->dictionaries));
        } elseif (count($this->directoriesWithFiles) > 0) {
            foreach ($this->directoriesWithFiles as $directory => $files) {
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
            if (BROWSERS_CACHE_DATA_UPDATE === true) {
                Storage\FileSystem::makeDirectory(dirname($cacheDictionariesFile));
                Storage\FileSystem\Yaml::emitFile($cacheDictionariesFile, $this->dictionaries);
            }
        } else {
            throw new RuntimeException('The dictionaries of UA Analyzer could not loaded');
        }
    }

    /**
     * @throws RuntimeException
     */
    private function loadDictionariesBuilder(string $directory, string $filename): void
    {
        if (file_exists($this->uaStoragePath . $directory . DS) === true) {
            $diskLocation = sprintf('%1$s%2$s%3$s%4$s', $this->uaStoragePath, $directory, DS, $filename);
            $diskLocationAsFile = self::dFile($diskLocation);
            if (is_dir($diskLocation) === true) {
                if (count(Storage::globRecursive($diskLocation, GLOB_MARK)) > 0) {
                    $this->dictionaries[$directory][$filename] = $this->dictionariesAll($diskLocation);
                } else {
                    throw new RuntimeException(sprintf('%s is empty directory', $diskLocation));
                }
            } elseif (is_file($diskLocationAsFile) === true) {
                $dictionary = Storage\FileSystem\Yaml::parseFile($diskLocationAsFile);
                if (is_array($dictionary) === true) {
                    $this->dictionaries[$directory][$filename] = $dictionary;
                } else {
                    throw new RuntimeException(
                        sprintf('Data type array required, string found in %s ', $diskLocationAsFile)
                    );
                }
            } else {
                throw new RuntimeException(sprintf('%s not exists', $diskLocationAsFile));
            }
        } else {
            throw new RuntimeException(sprintf('%s not exists', $directory));
        }
    }

    /**
     * @throws RuntimeException
     */
    protected function dictionariesAll(string $directory): array
    {
        $dFiles = Storage::globRecursive($directory, GLOB_MARK);
        $dictionaries = [];

        foreach ($dFiles as $dFile) {
            if (Storage::extension($dFile) === self::SYSTEM_DATA_FILE) {
                $dictionaries[] = Storage\FileSystem\Yaml::parseFile($dFile);
            }
        }

        return $this->merge($dictionaries);
    }

    /**
     * @throws RuntimeException
     */
    public function dataDictionaryDirectory(string $name): string
    {
        if (array_key_exists(strtolower($name), $this->directoriesWithFiles) === false) {
            throw new RuntimeException(
                sprintf(
                    '%s not exists',
                    sprintf('%s%s%s', $this->uaStoragePath, strtolower($name), DS)
                )
            );
        }
        return sprintf('%s%s%s', $this->uaStoragePath, strtolower($name), DS);
    }

    /**
     * @throws RuntimeException
     */
    protected function query(string $category, string $item): array
    {
        if (array_key_exists($category, $this->directoriesWithFiles) === true) {
            if (array_key_exists($item, $this->dictionaries[$category]) === true) {
                return $this->dictionaries[$category][$item];
            }

            throw new RuntimeException(sprintf('Unknown file %s', $item));
        }

        throw new RuntimeException(sprintf('Unknown directory %s', $category));
    }


    /**
     * @param array $dictionaries
     * @return array
     */
    protected function merge(array $dictionaries): array
    {
        $result = [];
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
     * @return array
     */
    protected function extractArchitectures(array $dictionaries): array
    {
        $result = [];
        foreach ($dictionaries as $dictionary) {
            if (array_key_exists('architecture', $dictionary) === true) {
                $result[$dictionary['architecture']] = $dictionary['word'];
            }
        }
        return $result;
    }


    /**
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    protected function extractAttribute(array $dictionaries, string $job): array
    {
        $result = [];
        $job = strtolower($job);

        if (in_array($job, ['identifier-only', 'identifier-with-pattern', 'info-only']) === true) {
            foreach ($dictionaries as $dictionary) {
                if ($job === 'identifier-only') {
                    if (array_key_exists('identifiers', $dictionary) === true) {
                        foreach ($dictionary['identifiers'] as $identifier => $ignore) {
                            $result[] = $identifier;
                        }
                    } else {
                        throw new RuntimeException(
                            sprintf(
                                'Identifier attribute not exists in %s',
                                Implement::toJson($dictionary)
                            )
                        );
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
                                throw new RuntimeException(
                                    sprintf(
                                        'Pattern attribute not exists in %s',
                                        $properties
                                    )
                                );
                            }
                        }
                    } else {
                        throw new RuntimeException(
                            sprintf('Identifier attribute not exists in (%s)', $dictionary)
                        );
                    }
                }
                if ($job === 'info-only') {
                    if (array_key_exists('info', $dictionary) === true) {
                        if (array_key_exists('identifiers', $dictionary) === true) {
                            foreach ($dictionary['identifiers'] as $component => $details) {
                                if (is_string($dictionary['info']) === true) {
                                    // Make details about browser/device/platform
                                    [$attribute, $identifier] = $this->makeArguments($dictionary['info']);
                                    $result[$component] = $this->attributeDetails($attribute, $identifier);

                                    if (is_array($result[$component]) === true) {
                                        // Make details about author/licence/engine
                                        $result[$component] = $this->attributeDetailsBuilder($result[$component]);
                                    } else {
                                        throw new RuntimeException(
                                            sprintf(
                                                'The details has been string like (%s)',
                                                $result[$component]
                                            )
                                        );
                                    }
                                } else {
                                    $result[$component] = $dictionary['info'];
                                    //throw new RuntimeException('The resource caller has been array');
                                }
                            }
                        } else {
                            throw new RuntimeException(
                                sprintf('Identifier attribute not exists in (%s)', $dictionary)
                            );
                        }
                    } else {
                        throw new RuntimeException(
                            sprintf('Info attribute not exists in (%s)', $dictionary)
                        );
                    }
                }
            }
            return $result;
        }

        throw new RuntimeException('Unknown job' . $job);
    }


    /**
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    protected function extractAttributeRecursive(string $category, array $items, string $job): array
    {
        $result = [];
        $category = strtolower($category);
        $job = strtolower($job);

        if (count($items) > 0) {
            foreach ($items as $item) {
                $item = strtolower($item);
                $temp = $this->extractAttribute($this->query($category, $item), $job);
                if (count($temp) > 0) {
                    foreach ($temp as $key => $value) {
                        if (is_int($key)) {
                            $result[]=$value;
                        } else {
                            $result[$key]=$value;
                        }
                    }
                }
            }
        }
        return $result;
    }

    /**
     * @throws RuntimeException
     */
    protected function attributeDetailsBuilder(array $resources): array
    {
        // Details builder of specific attributes
        foreach ($this->attributes as $attribute) {
            if (array_key_exists($attribute, $resources) === true) {
                if (is_array($resources[$attribute]) === true) {
                    foreach ($resources[$attribute] as $attr) {
                        //remove old position
                        unset($resources[$attribute][array_search($attr, $resources[$attribute], true)]);

                        //append new position with details
                        $resources[$attribute][$attr] = $this->attributeDetails(
                            Inflect::singularize($attribute),
                            $attr
                        );
                    }
                } else {
                    $foundedDetails = $this->attributeDetails(Inflect::singularize($attribute), $resources[$attribute]);

                    if (is_array($foundedDetails) === true) {
                        $resources[$attribute] = [$resources[$attribute] => $foundedDetails];
                    } else {
                        $resources[$attribute] = $foundedDetails;
                    }
                }
            }
        }

        return $resources;
    }

    /**
     * @throws RuntimeException
     */
    protected function attributeDetails(string $attribute, array|string $identifiers): array|string
    {
        $this->detailsBuilderAttribute = $this->cleanContent($attribute);
        $attributeDetails = array_change_key_case($this->attributeDetailsQuery());

        if (is_string($identifiers)) {
            return $this->makeAttributeDetails($attributeDetails, $identifiers);
        }

        if (count($identifiers) > 0) {
            $info = [];
            foreach ($identifiers as $identifier) {
                $info[$identifier] = $this->makeAttributeDetails($attributeDetails, $identifier);
            }

            return $info;
        }

        throw new RuntimeException('Unknown error occurred');
    }

    /**
     * @throws RuntimeException
     */
    protected function attributeDetailsQuery(): array
    {
        return match ($this->detailsBuilderAttribute) {
            // All about browser related
            'analyser' => $this->contentQuery('analysers'),
            'application' => $this->contentQuery('applications'),
            'bot' => $this->contentQuery('bots'),
            'browser' => $this->contentQuery('browsers'),
            'compatible' => $this->contentQuery('compatibilities'),
            'engine' => $this->contentQuery('browsers-engines'),
            'email.client' => $this->contentQuery('email-clients'),
            'feed.reader' => $this->contentQuery('feed-readers'),
            'multimedia.player' => $this->contentQuery('multimedia-players'),
            'offline.browser' => $this->contentQuery('offline-browsers'),
            'tool' => $this->contentQuery('tools'),

            // About licence related
            'licence' => $this->contentQuery('licences'),

            // About author related
            'author' => $this->contentQuery('authors'),

            // About device related
            'device' => $this->contentQuery('devices'),

            // About platform related
            'platform' => $this->contentQuery('platforms'),
            'wm' => $this->contentQuery('wm'),
            default => []
        };
    }

    /**
     * @throws RuntimeException
     */
    private function contentQuery(string $filename): array
    {
        if (array_key_exists($filename, $this->dictionaries['resources']) === true) {
            return $this->dictionaries['resources'][$filename];
        }

        throw new RuntimeException(sprintf('Unknown file %s', $filename));
    }

    /**
     * @throws RuntimeException
     */
    protected function makeAttributeDetails(array $attributeDetails, string|array $identifier): array|string
    {
        $identifier = strtolower($identifier);

        if (is_string($identifier) === true) {
            return $this->makeAttributeDetailsBuilder($attributeDetails, $identifier);
        }

        if (is_array($identifier) === true) {
            foreach ($identifier as $identity) {
                if (count($attributeDetails) > 0) {
                    return $this->makeAttributeDetailsBuilder($attributeDetails, $identity);
                }

                throw new RuntimeException(sprintf('Resources %s is empty', $this->detailsBuilderAttribute));
            }
        }
        throw new RuntimeException('Identifier\'s type is corrupted');
    }


    protected function makeAttributeDetailsBuilder(array $attributeDetails, string $identifier): array|string
    {
        $identifier = strtolower($identifier);

        if ($identifier === 'unknown') {
            return $identifier;
        }
        if (array_key_exists($identifier, $attributeDetails) === true) {
            return $attributeDetails[$identifier];
        }

        return $identifier;
    }


    protected function makeArguments(string|array $stringContent): array
    {
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
    protected function makePattern(string $name, string|bool $separator, string|bool $version): string
    {
        //https://www.php.net/manual/en/regexp.reference.subpatterns.php
        //https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php
        if ($name !== '') {
            $namePattern = sprintf('(?<name>%s)', $name);
        } else {
            throw new RuntimeException('\$name can not be empty');
        }


        return sprintf(
            '/%s%s%s/imu',
            $namePattern,
            $this->validate('separator', $this->regex['separator'], $separator),
            $this->validate('version', $this->regex['version'], $version)
        );
    }

    /**
     * @param string $identifier
     * @param string $default
     * @param string|bool $variable
     * @return string
     */
    private function validate(string $identifier, string $default, string|bool $variable): string
    {
        if (is_string($variable) && $variable !== '') {
            return sprintf('(?<%s>%s)', $identifier, $variable);
        }

        if (is_bool($variable) && $variable === false) {
            return '';
        }

        return sprintf('(?<%s>%s)', $identifier, $default);
    }
}
