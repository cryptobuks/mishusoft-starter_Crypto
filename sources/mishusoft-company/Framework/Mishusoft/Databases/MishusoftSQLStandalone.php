<?php

    declare(strict_types=1);

    namespace Mishusoft\Databases;

    use Mishusoft\Exceptions\DbException;
    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Storage;

    class MishusoftSQLStandalone extends MishusoftSQLStandalone\CommonDependency implements MishusoftSQLStandaloneInterface
    {
        /*declare property*/
        public const NAME       = "Mishusoft Structure Query Language";
        public const SHORT_NAME = "MishusoftSQLStandalone";
        public const VERSION    = "1.0.2";

        public const USERNAME_PREFIX = "msu_";

        private array $propertiesDefault
                                    = [
                "databases" => [],
                "users"     => [
                    ["username" => self::USERNAME_PREFIX . "superuser", "password" => "superuser", "permission" => "all"],
                ],
            ];
        private array $databasesAll = [];
        private array $usersAll;

        /**
         * MishusoftQL constructor.
         *
         * @param string $username
         * @param string $password
         *
         * @throws RuntimeException
         * @throws DbException
         */
        public function __construct(private string $username, private string $password)
        {
            parent::__construct(self::WHO_AM_I, self::DB_FILE_FORMAT);


            $inRecord        = false;
            $passwordMatched = false;

            if (!file_exists(path_storage_system('databases'))) {
                Storage\FileSystem::makeDirectory(path_storage_system('databases'));
            }

            /*check databases data dir exists*/
            if (!file_exists($this->rootDataDirectory())) {
                Storage\FileSystem::makeDirectory($this->rootDataDirectory());
            }
            /*check databases propertiesFile exists*/
            if (!is_file($this->schemaPropertiesFile())) {
                emit_msf_file($this->schemaPropertiesFile(), $this->propertiesDefault);
            }

            /*use contents of propertiesFile*/
            $properties = $this->schemaProperties();
            if (count($properties) > 0) {
                if (array_key_exists("databases", $properties)) {
                    $this->databasesAll = $properties["databases"];
                } else {
                    emit_msf_file($this->schemaPropertiesFile(), $this->propertiesDefault);
                }
                if (array_key_exists("users", $properties)) {
                    $this->usersAll = $properties["users"];
                } else {
                    emit_msf_file($this->schemaPropertiesFile(), $this->propertiesDefault);
                }

                foreach ($this->usersAll as $number => $user) {
                    if ($this->usersAll[$number]["username"] === $this->username) {
                        $inRecord = true;
                        if ($this->usersAll[$number]["password"] === $this->password) {
                            $passwordMatched = true;
                        }
                        break;
                    }
                }
                if (!$inRecord) {
                    throw new DbException("$this->username is not registered user");
                }
                if (!$passwordMatched) {
                    throw new DbException(sprintf('The password (%1$s) is not matched for user (%2$s).', $this->password, $this->username));
                }
            }
        }

        /**
         * @param int    $code
         * @param string $message
         *
         * @throws DbException
         */
        public static function error(int $code, string $message): void
        {
            throw new DbException("DbError[$code]: $message");
        }

        /**
         * @return array
         */
        public function getDatabasesAll(): array
        {
            return $this->databasesAll;
        }

        /**
         * @param string $database_name
         *
         * @return mixed
         * @throws DbException
         * @throws RuntimeException
         */
        public function select(string $database_name): MishusoftSQLStandalone\TableInterface
        {
            return new MishusoftSQLStandalone\Table($database_name);
        }

        /**
         * @param array|string $database_name
         *
         * @throws DbException
         * @throws RuntimeException
         */
        public function create(array|string $database_name): void
        {
            if (is_array($database_name)) {
                foreach ($database_name as $db) {
                    $this->createDatabase($db);
                }
            } elseif (is_string($database_name)) {
                $this->createDatabase($database_name);
            } else {
                throw new DbException("Invalid database name");
            }
        }


        /**
         * @param string $database_name
         *
         * @throws RuntimeException|DbException
         */
        private function createDatabase(string $database_name): void
        {
            if (!in_array($database_name, $this->databasesAll, true)) {
                $contents = parse_msf_file($this->schemaPropertiesFile());
                if (count($contents) > 0) {
                    if (array_key_exists("databases", $contents)) {
                        $contents["databases"][] = $database_name;
                    }
                    emit_msf_file($this->schemaPropertiesFile(), $contents);
                }
                emit_msf_file(
                    $this->databasefile($database_name),
                    ["name" => $database_name, "data_dir" => $database_name, "version" => self::VERSION, "tables" => [],]
                );
                Storage\FileSystem::makeDirectory($this->directory($database_name));
            } else {
                throw new DbException("Databases ($database_name) is already exists");
            }
        }

        /**
         * @param string $old_database_name
         * @param string $new_database_name
         *
         * @return bool
         * @throws \Mishusoft\Exceptions\DbException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public function rename(string $old_database_name, string $new_database_name): bool
        {
            if (in_array($old_database_name, $this->databasesAll, true)) {
                if ($this->databasefile($old_database_name)) {
                    $properties = $this->schemaProperties();
                    if (count($properties) > 0) {
                        if (array_key_exists("databases", $properties)
                            && !in_array($new_database_name, $properties["databases"], true)) {
                            $OldDatabaseIndex = array_search($old_database_name, $properties["databases"], true);
                            unset($properties["databases"][$OldDatabaseIndex]);
                            $properties["databases"][] = $new_database_name;
                        }
                        $contents["databases"] = $this->sort($properties["databases"]);
                        emit_msf_file($this->schemaPropertiesFile(), $contents);
                    }
                    return $this->quickRename($old_database_name, $new_database_name, 'both');
                }

                throw new DbException("Databases ($old_database_name)'s data file is not exists");
            }

            throw new DbException("Databases ($old_database_name) is not exists");
        }

        /**
         * @param array|string $name
         *
         * @return bool
         * @throws \Mishusoft\Exceptions\DbException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public function delete(array|string $name): bool
        {
            $isRemoved = false;
            if (is_array($name)) {
                foreach ($name as $db) {
                    $this->deleteDatabase($db);
                    $isRemoved = true;
                }
            } else {
                $this->deleteDatabase($name);
                $isRemoved = true;
            }

            return $isRemoved;
        }


        /**
         * @param string $name
         *
         * @throws \Mishusoft\Exceptions\DbException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        private function deleteDatabase(string $name): void
        {
            if (in_array($name, $this->databasesAll, true)) {
                $properties = $this->schemaProperties();
                if (array_key_exists("databases", $properties)) {
                    $databaseIndex = array_search($name, $properties["databases"], true);
                    unset($properties["databases"][$databaseIndex]);
                }
                $properties["databases"] = $this->sort($properties["databases"]);
                emit_msf_file($this->schemaPropertiesFile(), $properties);
                $this->quickRemove($name, 'both');
            } else {
                throw new DbException("Databases ($name) is not exists");
            }
        }

        /**
         * @param array|string $database_name
         *
         * @throws DbException
         * @throws InvalidArgumentException
         */
        public function empty(array|string $database_name): void
        {
            if (in_array($database_name, $this->databasesAll, true)) {
                $this->quickEmpty($database_name, 'dir');
            } else {
                throw new DbException("Databases ($database_name) is not exists.");
            }
        }

        /**
         * @return mixed
         */
        public function getUsersAll(): mixed
        {
            return $this->usersAll;
        }

        /**
         * @return string
         */
        public function getUsername(): string
        {
            return $this->username;
        }

        /**
         * @return string
         */
        public function getPassword(): string
        {
            return $this->password;
        }
    }
