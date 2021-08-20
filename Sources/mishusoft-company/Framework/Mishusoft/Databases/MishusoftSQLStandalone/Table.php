<?php declare(strict_types=1);

namespace Mishusoft\Databases\MishusoftSQLStandalone;

use Mishusoft\Databases\MishusoftSQLStandalone as MishusoftQL;
use Mishusoft\Exceptions\DbException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http;
use Mishusoft\Utility\ArrayCollection as Arr;

class Table extends CommonDependency implements TableInterface
{
    private string $dataDirectory;
    private array $tablesAll = [];

    /**
     * @throws RuntimeException
     * @throws DbException
     */
    public function __construct(
        private string $database
    )
    {
        parent::__construct(MishusoftQL::WHO_AM_I, MishusoftQL::DB_FILE_FORMAT);
        $this->setCurrentDatabase($this->database);
        $this->dataDirectory = $this->directory($this->database);

        if (!file_exists($this->databaseFile($this->database))) {
            throw new DbException(sprintf("Databases %s not exists.", $this->databaseFile($this->database));
        }

        $databaseProperties = $this->databaseProperties($this->database);
        if (array_key_exists("tables", $databaseProperties)) {
            $this->tablesAll = $databaseProperties["tables"];
        }
    }

    /**
     * @return array
     */
    public function getTableAll(): array
    {
        return $this->tablesAll;
    }


    /**
     * @param string|array $table_name
     * @throws DbException
     * @throws RuntimeException
     */
    public function create(array|string $table_name): void
    {
        // TODO: Implement create() method.
        if (is_array($table_name)) {
            foreach ($table_name as $tbl) {
                $this->createTable($tbl);
            }
        } else {
            $this->createTable($table_name);
        }
    }

    /**
     * @param string $table_name
     * @throws DbException
     * @throws RuntimeException
     */
    private function createTable(string $table_name): void
    {
        if (!in_array($table_name, $this->tablesAll, true)
            && !file_exists($this->tableFile($table_name))) {
            $contents = $this->databaseProperties;
            if (array_key_exists("tables", $contents)) {
                $contents["tables"][] = $table_name;
            }
            //sort tables
            $contents["tables"] = $this->sort($properties["tables"]);
            array_multisort($contents["tables"], SORT_ASC);
            ksort($contents["tables"], SORT_ASC);

            $this->writeFile($this->databaseFile($this->database), $contents);
            $this->writeFile($this->tableFile($table_name), array());
        } else {
            throw new DbException("Table ($table_name) is already exists.");
        }
    }


    /**
     * @param string $table_name
     * @return DataInterface
     * @throws DbException
     */
    public function read(string $table_name): DataInterface
    {
        if (in_array($table_name, $this->tablesAll, true)) {
            return new Data($table_name);
        }

        throw new DbException("Unknown table ($table_name).");
    }

    /**
     * @param string $old_name
     * @param string $new_name
     * @return mixed
     */
    public function rename(string $old_name, string $new_name): bool
    {
        if (in_array($old_name, $this->table_all)) {
            if (file_exists(join(DIRECTORY_SEPARATOR, [$this->dataDirectory, $old_name . self::dbTableFileFormat]))) {
                \Mishusoft\Storage\FileSystem::readFile($this->databaseFile($this->database), function ($contents) use ($new_name, $old_name) {
                    $contents = json_decode($contents, true);
                    if (_Array::value($contents, "tables")) {
                        if (!in_array($new_name, $contents["tables"])) {
                            unset($contents["tables"][array_search($old_name, $contents["tables"])]);
                            array_push($contents["tables"], $new_name);
                        }
                    }
                    $tables = [];
                    foreach ($contents["tables"] as $table) {
                        array_push($tables, $table);
                    }
                    $contents["tables"] = $tables;

                    array_multisort($contents["tables"], SORT_ASC);
                    ksort($contents["tables"], SORT_ASC);
                    \Mishusoft\Storage\FileSystem::saveToFile($this->databaseFile($this->database), json_encode($contents));
                });
                rename(
                    join(DIRECTORY_SEPARATOR, [$this->dataDirectory, $old_name . self::dbTableFileFormat]),
                    join(DIRECTORY_SEPARATOR, [$this->dataDirectory, $new_name . self::dbTableFileFormat])
                );
                return true;
            } else {
                MishusoftSQLStandalone::error(404, "Table ($old_name)'s data file is not exists.");
                exit();
            }
        } else {
            MishusoftSQLStandalone::error(404, "Table ($old_name) is not exists.");
            exit();
        }
    }

    /**
     * @param $table_name
     * @return false|void
     */
    public function delete($table_name): bool
    {
        if (is_array($table_name)) {
            foreach ($table_name as $tbl) {
                $this->deleteTable($tbl);
            }
        } else {
            $this->deleteTable($table_name);
        }
    }

    /**
     * @param string $table_name
     */
    private function deleteTable(string $table_name)
    {
        if (in_array($table_name, $this->table_all)) {
            \Mishusoft\Storage\FileSystem::readFile($this->databaseFile($this->database), function ($contents) use ($table_name) {
                $contents = json_decode($contents, true);
                if (ArrayCollection::value($contents, "tables")) {
                    unset($contents["tables"][array_search($table_name, $contents["tables"])]);
                }
                array_multisort($contents["tables"], SORT_ASC);
                ksort($contents["tables"], SORT_ASC);
                \Mishusoft\Storage\FileSystem::saveToFile($this->databaseFile($this->database), json_encode($contents));
            });

            \Mishusoft\Storage\FileSystem::unlink(join(DIRECTORY_SEPARATOR, [$this->dataDirectory, $table_name . self::dbTableFileFormat]));
        } else {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Table ($table_name) is not exists.");
            exit();
        }
    }

    public function update()
    {
        \Mishusoft\Storage\FileSystem::readFile($this->databaseFile($this->database), function ($contents) {
            $contents = json_decode($contents, true);
            if (ArrayCollection::value($contents, "tables")) {
                foreach (\Mishusoft\Storage\FileSystem::getDirectoryList($this->dataDirectory) as $table_name) {
                    if (!in_array(pathinfo($table_name, PATHINFO_FILENAME), $contents["tables"], true)) {
                        array_push($contents["tables"], pathinfo($table_name, PATHINFO_FILENAME));
                    }
                }
            }
            array_multisort($contents["tables"], SORT_ASC);
            ksort($contents["tables"], SORT_ASC);
            $this->table_all = $contents["tables"];
            \Mishusoft\Storage\FileSystem::saveToFile($this->databaseFile($this->database), json_encode($contents));
        });
    }

    public function __destruct()
    {
    }
}
