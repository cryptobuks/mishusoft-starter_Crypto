<?php declare(strict_types=1);


namespace Mishusoft\Framework\Chipsets\Databases;


use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone\FileSystem;
use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone\Table;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\TableInterface;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandaloneInterface;

class MishusoftSQLStandalone implements MishusoftSQLStandaloneInterface
{
    /*declare property*/
    const Name = "Mishusoft Structure Query Language";
    const ShortName = "MishusoftSQLStandalone";
    const Category = "DBMS";
    const VERSION = "1.0.2";

    private array $propertiesDefault = ["databases" => [], "users" => [["username" => "superuser", "password" => "superuser", "permission" => "all"]]];
    private string $data_dir = MS_DATABASES_PATH . self::who_am_i;
    private string $propertiesFile = MS_DATABASES_PATH . self::who_am_i . DIRECTORY_SEPARATOR . "properties.json";
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
     */
    public function __construct(string $username, string $password)
    {
        $this->username = $username;
        $this->password = $password;

        if (!FileSystem::file_exists(MS_DATABASES_PATH)) {
            FileSystem::createDirectory(MS_DATABASES_PATH);
        }

        /*check databases data dir exists*/
        if (!FileSystem::file_exists($this->data_dir)) {
            FileSystem::createDirectory($this->data_dir);
        }
        /*check databases propertiesFile exists*/
        if (!FileSystem::file_exists($this->propertiesFile)) {
            FileSystem::createFile($this->propertiesFile);
            if (FileSystem::is_file($this->propertiesFile)) {
                self::resetpropertiesFile();
            } else {
                FileSystem::remove($this->propertiesFile);
            }
        }

        /*use contents of propertiesFile*/
        FileSystem::readFile($this->propertiesFile, function ($contents) {
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

    /**
     * @return false|int
     */
    private function resetPropertiesFile()
    {
        return FileSystem::saveToFile($this->propertiesFile, json_encode($this->propertiesDefault));
    }

    /**
     * @param int $code
     * @param string $message
     */
    public static function error(int $code, string $message)
    {
        echo "DbError[$code]: $message";
        trigger_error("DbError[$code]: $message");
    }

    /**
     * @return array
     */
    public function getDatabaseAll(): array
    {
        return $this->database_all;
    }

    /**
     * @param $database_name
     * @return mixed
     */
    public function select(string $database_name): TableInterface
    {
        // TODO: Implement select() method.
        return new Table($this->data_dir, $database_name);
    }

    /**
     * @param $database_name
     */
    public function create($database_name)
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
     */
    private function createDatabase(string $database_name)
    {
        if (!in_array($database_name, $this->database_all)) {
            FileSystem::readFile($this->propertiesFile, function ($contents) use ($database_name) {
                if (count($contents) > 0) {
                    if (_Array::value($contents, "databases")) {
                        array_push($contents["databases"], $database_name);
                    }
                    FileSystem::saveToFile($this->propertiesFile, json_encode($contents));
                }
            });
            FileSystem::createFile(join(DIRECTORY_SEPARATOR, [$this->data_dir, $database_name . self::dbFileFormat]));
            FileSystem::saveToFile(join(DIRECTORY_SEPARATOR, [$this->data_dir, $database_name . self::dbFileFormat]),
                json_encode(array("name" => $database_name, "data_dir" => $database_name, "version" => self::version, "tables" => array())));
            FileSystem::createDirectory(join(DIRECTORY_SEPARATOR, [$this->data_dir, $database_name]));
        } else {
            self::error(Http::NOT_FOUND, "Databases ($database_name) is already exists.");
            exit();
        }
    }

    /**
     * @param $old_database_name
     * @param $new_database_name
     * @return mixed
     */
    public function rename($old_database_name, $new_database_name): bool
    {
        // TODO: Implement rename() method.
        if (in_array($old_database_name, $this->database_all)) {
            if (FileSystem::file_exists(join(DIRECTORY_SEPARATOR, [$this->data_dir, $old_database_name . self::dbFileFormat]))) {
                FileSystem::readFile($this->propertiesFile, function ($contents) use ($new_database_name, $old_database_name) {
                    if (count($contents) > 0) {
                        if (_Array::value($contents, "databases")) {
                            if (!in_array($new_database_name, $contents["databases"])) {
                                unset($contents["databases"][array_search($old_database_name, $contents["databases"])]);
                                array_push($contents["databases"], $new_database_name);
                            }
                        }
                        $databases = array();
                        foreach ($contents["databases"] as $database) {
                            array_push($databases, $database);
                        }
                        $contents["databases"] = $databases;
                        FileSystem::saveToFile($this->propertiesFile, json_encode($contents));
                    }
                });
                rename(
                    join(DIRECTORY_SEPARATOR, [$this->data_dir, $old_database_name]),
                    join(DIRECTORY_SEPARATOR, [$this->data_dir, $new_database_name])
                );
                rename(
                    join(DIRECTORY_SEPARATOR, [$this->data_dir, $old_database_name . self::dbFileFormat]),
                    join(DIRECTORY_SEPARATOR, [$this->data_dir, $new_database_name . self::dbFileFormat])
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
     * @param $database_name
     */
    public function delete($database_name)
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
     */
    private function deleteDatabase(string $database_name)
    {
        if (in_array($database_name, $this->database_all)) {
            FileSystem::readFile($this->propertiesFile, function ($contents) use ($database_name) {
                $contents = json_decode($contents, true);
                if (_Array::value($contents, "databases")) {
                    unset($contents["databases"][array_search($database_name, $contents["databases"])]);
                }
                FileSystem::saveToFile($this->propertiesFile, json_encode($contents));
            });

            FileSystem::remove(join(DIRECTORY_SEPARATOR, [$this->data_dir, $database_name]));
            FileSystem::remove(join(DIRECTORY_SEPARATOR, [$this->data_dir, $database_name . self::dbFileFormat]));
        } else {
            self::error(Http::NOT_FOUND, "Databases ($database_name) is not exists.");
            exit();
        }
    }

    /**
     * @param $database_name
     */
    public function empty($database_name)
    {
        // TODO: Implement empty() method.
        if (in_array($database_name, $this->database_all)) {
            FileSystem::remove(join(DIRECTORY_SEPARATOR, [$this->data_dir, $database_name]));
        } else {
            self::error(Http::NOT_FOUND, "Databases ($database_name) is not exists.");
            exit();
        }
    }

    function __destruct()
    {
    }
}