<?php

    namespace Mishusoft\Databases\MishusoftSQLStandalone;

    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Storage;
    use Mishusoft\System\Base;

    class CommonDependency extends Base
    {
        protected array  $schemaProperties   = [];
        protected array  $databaseProperties = [];
        protected string $currentDatabase    = '';
        private string   $rootStoragePath;

        public function __construct(
            private string $identity,
            private string $dbFileFormat,
            private string $dbTableFileFormat = 'mstbl'
        ) {
            parent::__construct();

            $this->rootStoragePath = path_storage_system('databases');
        }

        protected function rootDataDirectory(): string
        {
            return $this->rootStoragePath . $this->identity;
        }

        protected function databaseDirectory(): string
        {
            return $this->rootDataDirectory() . DS . $this->currentDatabase;
        }

        protected function directory(string $name): string
        {
            return $this->rootDataDirectory() . DS . $name;
        }

        protected function schemaPropertiesFile(): string
        {
            return dFile($this->rootStoragePath . $this->identity . DS . "properties");
        }

        protected function databaseFile(string $name): string
        {
            return dFile($this->directory($name), $this->dbFileFormat);
        }

        protected function tableFile(string $table): string
        {
            return dFile($this->directory($this->currentDatabase) . DS . $table, $this->dbTableFileFormat);
        }


        /**
         * @return array
         */
        protected function schemaProperties(): array
        {
            if (count($this->schemaProperties) === 0) {
                $this->schemaProperties = parse_msf_file($this->schemaPropertiesFile());
            }

            return $this->schemaProperties;
        }

        /**
         */
        protected function databaseProperties(string $name): array
        {
            if (count($this->databaseProperties) === 0) {
                $this->databaseProperties = parse_msf_file($this->databaseFile($name));
            }

            return $this->databaseProperties;
        }


        /**
         * @param string $old
         * @param string $new
         * @param string $file
         * @param string $resource
         *
         * @return bool
         * @throws InvalidArgumentException
         */
        protected function quickRename(string $old, string $new, string $file = 'file', string $resource = 'database'): bool
        {
            return match ($file) {
                'dir'   => rename($this->directory($old), $this->directory($new)),
                'file'  => match ($resource) {
                    'database' => rename($this->databaseFile($old), $this->databaseFile($new)),
                    'table'    => rename($this->tableFile($old), $this->tableFile($new)),
                    default    => throw new InvalidArgumentException('Unsupported parameter $resource ' . $resource)
                },
                'both'  => $this->quickRename($old, $new) && $this->quickRename($old, $new, 'dir'),
                default => throw new InvalidArgumentException(sprintf('Unsupported parameter $file %1$s', $file))
            };
        }

        /**
         * @throws InvalidArgumentException
         */
        protected function quickRemove(string $name, string $file = 'file', string $resource = 'database'): ?bool
        {
            return match ($file) {
                'dir'   => Storage\FileSystem::remove($name),
                'file'  => match ($resource) {
                    'database' => Storage\FileSystem::remove($this->databaseFile($name)),
                    'table'    => Storage\FileSystem::remove($this->tableFile($name)),
                    default    => throw new InvalidArgumentException(sprintf('Unsupported parameter $resource %1$s', $resource))
                },
                'both'  => $this->quickRemove($name) && $this->quickRemove($name, 'dir'),
                default => throw new InvalidArgumentException('Unsupported parameter $file ' . $file)
            };
        }

        /**
         * @throws InvalidArgumentException
         */
        protected function quickEmpty(string $name, string $file = 'file', string $resource = 'database'): ?bool
        {
            return match ($file) {
                'dir'   => Storage\FileSystem::remove($name),
                'file'  => match ($resource) {
                    'database' => Storage\FileSystem::remove($this->databaseFile($name)),
                    'table'    => Storage\FileSystem::remove($this->tableFile($name)),
                    default    => throw new InvalidArgumentException(sprintf('Unsupported parameter $resource %1$s', $resource))
                },
                'both'  => $this->quickRemove($name) && $this->quickRemove($name, 'dir'),
                default => throw new InvalidArgumentException(sprintf('Unsupported parameter $file %1$s', $file))
            };
        }

        /**
         * @param string $currentDatabase
         */
        protected function setCurrentDatabase(string $currentDatabase): void
        {
            $this->currentDatabase = $currentDatabase;
        }

        /**
         * @param array $array
         *
         * @return array
         */
        protected function sort(array $array): array
        {
            $result = [];
            if (count($array) > 0) {
                foreach ($array as $item) {
                    $array[] = $item;
                }
            }
            return $result;
        }
    }
