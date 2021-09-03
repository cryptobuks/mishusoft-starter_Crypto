<?php declare(strict_types=1);


namespace Mishusoft\Databases;

use Mishusoft\Exceptions\DbException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;

class MishusoftSQLStandalone extends MishusoftSQLStandalone\CommonDependency implements MishusoftSQLStandaloneInterface
{
    /*declare property*/
    public const NAME = "Mishusoft Structure Query Language";
    public const SHORT_NAME = "MishusoftSQLStandalone";
    public const VERSION = "1.0.2";

    public const USERNAME_PREFIX= "msu_";

    private array $propertiesDefault = [
        "databases" => [], "users" => [
            ["username" => self::USERNAME_PREFIX."superuser", "password" => "superuser", "permission" => "all"],
        ],
    ];
    private array $databasesAll = [];
    private array $usersAll;
    private string $username;
    private string $password;

    /**
     * MishusoftQL constructor.
     *
     * @param string $username
     * @param string $password
     * @throws RuntimeException
     * @throws DbException
     */
    public function __construct(string $username, string $password)
    {
        parent::__construct(self::WHO_AM_I, self::DB_FILE_FORMAT);

        $this->username = $username;
        $this->password = $password;

        $inRecord = false;
        $passwordMatched = false;

        if (!file_exists(Storage::databasesPath())) {
            Storage\FileSystem::makeDirectory(Storage::databasesPath());
        }

        /*check databases data dir exists*/
        if (!file_exists($this->rootDataDirectory())) {
            Storage\FileSystem::makeDirectory($this->rootDataDirectory());
        }
        /*check databases propertiesFile exists*/
        if (!is_file($this->schemaPropertiesFile())) {
            $this->writeFile($this->schemaPropertiesFile(), $this->propertiesDefault);
        }

        /*use contents of propertiesFile*/
        $properties = $this->schemaProperties();
        if (count($properties) > 0) {
            if (array_key_exists("databases", $properties)) {
                $this->databasesAll = $properties["databases"];
            } else {
                $this->writeFile($this->schemaPropertiesFile(), $this->propertiesDefault);
            }
            if (array_key_exists("users", $properties)) {
                $this->usersAll = $properties["users"];
            } else {
                $this->writeFile($this->schemaPropertiesFile(), $this->propertiesDefault);
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
                throw new DbException("$this->password is not matched for $this->username.");
            }
        }
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
    public function getDatabasesAll(): array
    {
        return $this->databasesAll;
    }

    /**
     * @param string $database_name
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
     * @throws DbException
     * @throws RuntimeException
     */
    public function create(array|string$database_name):void
    {
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
     * @throws RuntimeException|DbException
     */
    private function createDatabase(string $database_name): void
    {
        if (!in_array($database_name, $this->databasesAll, true)) {
            $contents = $this->readFile($this->schemaPropertiesFile());
            if (count($contents) > 0) {
                if (array_key_exists("databases", $contents)) {
                    $contents["databases"][] = $database_name;
                }
                $this->writeFile($this->schemaPropertiesFile(), $contents);
            }
            $this->writeFile(
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
     * @return mixed
     * @throws DbException
     * @throws InvalidArgumentException
     * @throws RuntimeException
     */
    public function rename(string$old_database_name, string $new_database_name): bool
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
                    $this->writeFile($this->schemaPropertiesFile(), $contents);
                }
                return $this->quickRename($old_database_name, $new_database_name, 'both');
            }

            throw new DbException("Databases ($old_database_name)'s data file is not exists");
        }

        throw new DbException("Databases ($old_database_name) is not exists");
    }

    /**
     * @param array|string $name
     * @return bool
     * @throws DbException
     * @throws InvalidArgumentException
     * @throws RuntimeException
     */
    public function delete(array|string $name) : bool
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
     * @throws DbException
     * @throws InvalidArgumentException
     * @throws RuntimeException
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
            $this->writeFile($this->schemaPropertiesFile(), $properties);
            $this->quickRemove($name, 'both');
        } else {
            throw new DbException("Databases ($name) is not exists");
        }
    }

    /**
     * @param array|string $database_name
     * @throws DbException
     * @throws InvalidArgumentException
     */
    public function empty(array|string $database_name):void
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
