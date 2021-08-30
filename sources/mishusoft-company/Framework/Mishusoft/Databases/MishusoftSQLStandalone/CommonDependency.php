<?php

namespace Mishusoft\Databases\MishusoftSQLStandalone;

use Mishusoft\Base;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;

class CommonDependency extends Base
{
    protected array $schemaProperties = [];
    protected array $databaseProperties = [];
    protected string $currentDatabase = '';

    public function __construct(
        private string $identity,
        private string $dbFileFormat,
        private string $dbTableFileFormat = ''
    ) {
        parent::__construct();
    }

    protected function rootDataDirectory(): string
    {
        return Storage::databasesPath() . $this->identity;
    }

    protected function databaseDirectory(): string
    {
        return $this->rootDataDirectory() . DS. $this->currentDatabase;
    }

    protected function directory(string $name): string
    {
        return $this->rootDataDirectory() . DS . $name;
    }

    protected function schemaPropertiesFile(): string
    {
        return self::dFile(Storage::databasesPath() . $this->identity . DS . "properties");
    }

    protected function databaseFile(string $name): string
    {
        return self::dFile($this->directory($name), $this->dbFileFormat);
    }

    protected function tableFile(string $table): string
    {
        return self::dFile($this->directory($this->currentDatabase) . DS . $table, $this->dbTableFileFormat);
    }

    /**
     * @throws RuntimeException
     */
    protected function readFile(string $path):array
    {
        return Storage\FileSystem\Yaml::parseFile($path);
    }

    /**
     * @param string $filename
     * @param array $data
     * @return void
     * @throws RuntimeException
     */
    protected function writeFile(string $filename, array $data): void
    {
        Storage\FileSystem\Yaml::emitFile($filename, $data);
    }


    /**
     * @throws RuntimeException
     */
    protected function schemaProperties(): array
    {
        if (count($this->schemaProperties) === 0) {
            $properties  = $this->readFile($this->schemaPropertiesFile());
            $this->schemaProperties  = is_array($properties)?$properties:[];
        }

        return $this->schemaProperties;
    }

    /**
     * @throws RuntimeException
     */
    protected function databaseProperties(string $name): array
    {
        if (count($this->databaseProperties) === 0) {
            $properties  = $this->readFile($this->databaseFile($name));
            $this->databaseProperties  = is_array($properties)?$properties:[];
        }

        return $this->databaseProperties;
    }


    /**
     * @param string $old
     * @param string $new
     * @param string $file
     * @param string $resource
     * @return bool
     * @throws InvalidArgumentException
     */
    protected function quickRename(string $old, string $new, string $file = 'file', string $resource = 'database'): bool
    {
        return match ($file) {
            'dir' => rename($this->directory($old), $this->directory($new)),
            'file' => match ($resource) {
                'database' => rename($this->databaseFile($old), $this->databaseFile($new)),
                'table' => rename($this->tableFile($old), $this->tableFile($new)),
                default => throw new InvalidArgumentException('Unsupported parameter $resource ' . $resource)
            },
            'both' => $this->quickRename($old, $new) && $this->quickRename($old, $new, 'dir'),
            default => throw new InvalidArgumentException('Unsupported parameter $file ' . $file)
        };
    }

    /**
     * @throws InvalidArgumentException
     */
    protected function quickRemove(string $name, string $file = 'file', string $resource = 'database'): ?bool
    {
        return match ($file) {
            'dir' => Storage\FileSystem::remove($name),
            'file' => match ($resource) {
                'database' => Storage\FileSystem::remove($this->databaseFile($name)),
                'table' => Storage\FileSystem::remove($this->tableFile($name)),
                default => throw new InvalidArgumentException('Unsupported parameter $resource ' . $resource)
            },
            'both' => $this->quickRemove($name) && $this->quickRemove($name, 'dir'),
            default => throw new InvalidArgumentException('Unsupported parameter $file ' . $file)
        };
    }

    /**
     * @throws InvalidArgumentException
     */
    protected function quickEmpty(string $name, string $file = 'file', string $resource = 'database'): ?bool
    {
        return match ($file) {
            'dir' => Storage\FileSystem::remove($name),
            'file' => match ($resource) {
                'database' => Storage\FileSystem::remove($this->databaseFile($name)),
                'table' => Storage\FileSystem::remove($this->tableFile($name)),
                default => throw new InvalidArgumentException('Unsupported parameter $resource ' . $resource)
            },
            'both' => $this->quickRemove($name) && $this->quickRemove($name, 'dir'),
            default => throw new InvalidArgumentException('Unsupported parameter $file ' . $file)
        };
    }

    /**
     * @param string $currentDatabase
     */
    protected function setCurrentDatabase(string $currentDatabase): void
    {
        $this->currentDatabase = $currentDatabase;
    }

    protected function sort(array $array):array
    {
        $result = [];
        if (count($array)> 0) {
            foreach ($array as $item) {
                $array[] = $item;
            }
        }
        return $result;
    }
}
