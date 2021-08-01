<?php declare(strict_types=1);


namespace Mishusoft\Databases;

use Mishusoft\Databases\MishusoftSQLStandalone\Table;
use Mishusoft\Exceptions\DbException;
use Mishusoft\Http;
use Mishusoft\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Utility\ArrayCollection;

class MishusoftSQLStandalone extends Storage implements MishusoftSQLStandaloneInterface
{
    /*declare property*/
    public const NAME = "Mishusoft Structure Query Language";
    public const SHORT_NAME = "MishusoftSQLStandalone";
    public const CATEGORY = "DBMS";
    public const VERSION = "1.0.2";

    private array $propertiesDefault =
        ["databases" => [], "users" => [["username" => "superuser", "password" => "superuser", "permission" => "all"]]];
    private array $database_all;
    private array $user_all;
    private bool $in_record = false;
    private bool $password_matched = false;
    private string $username;
    private string $password;

    /**
     * MishusoftQL constructor.
     * @param string $username
     * @param string $password
     * @throws \Mishusoft\Exceptions\RuntimeException|\JsonException
     * @throws DbException
     */
    public function __construct(string $username, string $password)
    {
        parent::__construct();
        $this->username = $username;
        $this->password = $password;

        if (!file_exists(Storage::databasesPath())) {
            FileSystem::makeDirectory(Storage::databasesPath());
        }

        /*check databases data dir exists*/
        if (!file_exists($this->dataDirectory())) {
            FileSystem::makeDirectory($this->dataDirectory());
        }
        /*check databases propertiesFile exists*/
        if (!file_exists($this->propertiesFile())) {
            FileSystem::createFile($this->propertiesFile());
            if (is_file($this->propertiesFile())) {
                $this->resetpropertiesFile();
            } else {
                FileSystem::remove($this->propertiesFile());
            }
        }

        /*use contents of propertiesFile*/
        FileSystem::readFile($this->propertiesFile(), function ($contents) {
            if (count($contents) > 0) {
                if (array_key_exists("databases", $contents)) {
                    $this->database_all = $contents["databases"];
                } else {
                    self::resetPropertiesFile();
                }
                if (array_key_exists("users", $contents)) {
                    $this->user_all = $contents["users"];
                } else {
                    self::resetPropertiesFile();
                }

                foreach ($this->user_all as $number => $user) {
                    if ($this->user_all[$number]["username"] === $this->username) {
                        $this->in_record = true;
                        if ($this->user_all[$number]["password"] === $this->password) {
                            $this->password_matched = true;
                        }
                        break;
                    }
                }
                if (!$this->in_record) {
                    $this->error(Http::NOT_FOUND, "$this->username is not registered user.");
                }
                if (!$this->password_matched) {
                    $this->error(Http::NOT_ACCEPTABLE, "$this->password is not matched for $this->username.");
                }
            }
        });
    }

    private function dataDirectory()
    {
        return Storage::databasesPath() . self::who_am_i;
    }

    private function propertiesFile()
    {
        return self::dFile(Storage::databasesPath() . self::who_am_i . DS . "properties");
    }

    /**
     * @return void
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    private function resetPropertiesFile(): void
    {
        FileSystem\Yaml::emitFile($this->propertiesFile(), $this->propertiesDefault);
    }

    /**
     * @param int $code
     * @param string $message
     * @throws DbException
     */
    public static function error(int $code, string $message):void
    {
        throw new DbException("DbError[$code]: $message");
    }

    /**
     * @return array
     */
    public function getDatabaseAll(): array
    {
        return $this->database_all;
    }

    /**
     * @param string $database_name
     * @return mixed
     */
    public function select(string $database_name): TableInterface
    {
        // TODO: Implement select() method.
        return new Table($this->dataDirectory(), $database_name);
    }

    /**
     * @param array|string $database_name
     * @throws DbException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function create(array|string$database_name):void
    {
        // TODO: Implement create() method.
        if (is_array($database_name)) {
            foreach ($database_name as $db) {
                $this->createDatabase($db);
            }
        } else {
            $this->createDatabase($database_name);
        }
    }


    /**
     * @param string $database_name
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\RuntimeException|DbException
     */
    private function createDatabase(string $database_name): void
    {
        if (!in_array($database_name, $this->database_all, true)) {
            $contents = FileSystem\Yaml::parseFile($this->propertiesFile());
            if (count($contents) > 0) {
                if (ArrayCollection::value($contents, "databases")) {
                    $contents["databases"][] = $database_name;
                }
                FileSystem::saveToFile($this->propertiesFile(), json_encode($contents, JSON_THROW_ON_ERROR));
            }
            FileSystem\Yaml::emitFile(
                $this->dataDirectory() . DS . $database_name . self::dbFileFormat,
                ["name" => $database_name, "data_dir" => $database_name, "version" => self::version, "tables" => []]
            );
            FileSystem::makeDirectory($this->dataDirectory() . DS . $database_name);
        } else {
            self::error(Http::NOT_FOUND, "Databases ($database_name) is already exists.");
        }
    }

    /**
     * @param $old_database_name
     * @param $new_database_name
     * @return mixed
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws DbException
     */
    public function rename($old_database_name, $new_database_name): bool
    {
        // TODO: Implement rename() method.
        if (in_array($old_database_name, $this->database_all, true)) {
            if (FileSystem::file_exists(implode(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $old_database_name . self::dbFileFormat]))) {
                FileSystem::readFile($this->propertiesFile, function ($contents) use ($new_database_name, $old_database_name) {
                    if (count($contents) > 0) {
                        if (ArrayCollection::value($contents, "databases")) {
                            if (!in_array($new_database_name, $contents["databases"], true)) {
                                unset($contents["databases"][array_search($old_database_name, $contents["databases"], true)]);
                                $contents["databases"][] = $new_database_name;
                            }
                        }
                        $databases = [];
                        foreach ($contents["databases"] as $database) {
                            $databases[] = $database;
                        }
                        $contents["databases"] = $databases;
                        FileSystem\Yaml::emitFile($this->propertiesFile, $contents);
                    }
                });
                rename(
                    join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $old_database_name]),
                    join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $new_database_name])
                );
                rename(
                    join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $old_database_name . self::dbFileFormat]),
                    join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $new_database_name . self::dbFileFormat])
                );
                return true;
            } else {
                self::error(Http::NOT_FOUND, "Databases ($old_database_name)'s data file is not exists.");
                exit();
            }
        } else {
            self::error(Http::NOT_FOUND, "Databases ($old_database_name) is not exists.");
            exit();
        }
    }

    /**
     * @param array|string $database_name
     * @throws \JsonException
     * @throws DbException
     */
    public function delete(array|string$database_name)
    {
        // TODO: Implement delete() method.
        if (is_array($database_name)) {
            foreach ($database_name as $db) {
                $this->deleteDatabase($db);
            }
        } else {
            $this->deleteDatabase($database_name);
        }
    }


    /**
     * @param string $database_name
     * @throws \JsonException
     * @throws DbException
     */
    private function deleteDatabase(string $database_name)
    {
        if (in_array($database_name, $this->database_all, true)) {
            FileSystem::readFile($this->propertiesFile, function ($contents) use ($database_name) {
                $contents = json_decode($contents, true, 512, JSON_THROW_ON_ERROR);
                if (ArrayCollection::value($contents, "databases")) {
                    unset($contents["databases"][array_search($database_name, $contents["databases"], true)]);
                }
                FileSystem::saveToFile($this->propertiesFile, json_encode($contents, JSON_THROW_ON_ERROR));
            });

            FileSystem::remove(join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $database_name]));
            FileSystem::remove(join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $database_name . self::dbFileFormat]));
        } else {
            self::error(Http::NOT_FOUND, "Databases ($database_name) is not exists.");
            exit();
        }
    }

    /**
     * @param array|string $database_name
     * @throws DbException
     */
    public function empty(array|string $database_name):void
    {
        // TODO: Implement empty() method.
        if (in_array($database_name, $this->database_all, true)) {
            FileSystem::remove(join(DIRECTORY_SEPARATOR, [$this->dataDirectory(), $database_name]));
        } else {
            self::error(Http::NOT_FOUND, "Databases ($database_name) is not exists.");
            exit();
        }
    }
}
