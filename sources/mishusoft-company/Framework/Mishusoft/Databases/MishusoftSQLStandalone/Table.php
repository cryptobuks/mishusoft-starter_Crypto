<?php declare(strict_types=1);

namespace Mishusoft\Databases\MishusoftSQLStandalone;

use Mishusoft\Exceptions\DbException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Implement;

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
    ) {
        parent::__construct(CommonStructureInterface::WHO_AM_I, CommonStructureInterface::DB_FILE_FORMAT);
        $this->setCurrentDatabase($this->database);
        $this->dataDirectory = $this->directory($this->database);

        if (!file_exists($this->databaseFile($this->database))) {
            throw new DbException(sprintf("Databases %s not exists.", $this->databaseFile($this->database)));
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
            array_multisort($contents["tables"], SORT_ASC);
            ksort($contents["tables"], SORT_ASC);

            $this->writeFile($this->databaseFile($this->database), $contents);
            $this->writeFile($this->tableFile($table_name), []);
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
            return new Data(dirname($this->tableFile($table_name)), $table_name);
        }

        throw new DbException("Unknown table ($table_name).");
    }

    /**
     * @param string $old_name
     * @param string $new_name
     * @return mixed
     * @throws DbException
     */
    public function rename(string $old_name, string $new_name): bool
    {
        if (in_array($old_name, $this->tablesAll, true)) {
            if (file_exists($this->tableFile($old_name))) {
                $contents = $this->databaseProperties;
                if (array_key_exists("tables", $contents)
                    && !in_array($new_name, $contents["tables"], true)) {
                    unset($contents["tables"][array_search($old_name, $contents["tables"], true)]);
                    $contents["tables"][] = $new_name;
                }
                //sort tables
                $contents["tables"] = $this->sort($properties["tables"]);
                $contents = (array) Implement::jsonDecode(
                    FileSystem::read($this->databaseFile($this->database)),
                    IMPLEMENT_JSON_IN_ARR
                );
                if (ArrayCollection::value($contents, "tables")
                    && !in_array($new_name, $contents["tables"], true)) {
                    unset($contents["tables"][array_search($old_name, $contents["tables"], true)]);
                    $contents["tables"][] = $new_name;
                }
                $tables = [];
                foreach ($contents["tables"] as $table) {
                    $tables[] = $table;
                }
                $contents["tables"] = $tables;

                array_multisort($contents["tables"], SORT_ASC);
                ksort($contents["tables"], SORT_ASC);
                FileSystem::saveToFile($this->databaseFile($this->database), Implement::toJson($contents));
                rename(
                    implode(DS, [$this->dataDirectory, $old_name . self::DB_TABLE_FILE_FORMAT]),
                    implode(DS, [$this->dataDirectory, $new_name . self::DB_TABLE_FILE_FORMAT])
                );
                return true;
            }

            throw new DbException("Table ($old_name)'s data file is not exists");
        }

        throw new DbException("Table ($old_name) is not exists");
    }

    /**
     * @param array|string $name
     * @return bool
     */
    public function delete(array|string $name): bool
    {
        if (is_array($name)) {
            foreach ($name as $tbl) {
                $this->deleteTable($tbl);
            }
        } else {
            $this->deleteTable($name);
        }
    }

    /**
     * @param string $table_name
     * @throws DbException
     */
    private function deleteTable(string $table_name): void
    {
        if (in_array($table_name, $this->tablesAll, true)) {
            $contents = Implement::jsonDecode(
                FileSystem::read($this->databaseFile($this->database)),
                IMPLEMENT_JSON_IN_ARR
            );
            if (ArrayCollection::value($contents, "tables")) {
                unset($contents["tables"][array_search($table_name, $contents["tables"], true)]);
            }
            array_multisort($contents["tables"], SORT_ASC);
            ksort($contents["tables"], SORT_ASC);
            FileSystem::saveToFile($this->databaseFile($this->database), Implement::toJson($contents));

            FileSystem::remove(implode(DS, [$this->dataDirectory, $table_name . self::DB_TABLE_FILE_FORMAT]));
        } else {
            throw new DbException("Table ($table_name) is not exists");
        }
    }

    /**
     * @throws RuntimeException
     */
    public function update(array $options):bool
    {
        $contents = (array) Implement::jsonDecode(
            FileSystem::read($this->databaseFile($this->database)),
            IMPLEMENT_JSON_IN_ARR
        );
        if (ArrayCollection::value($contents, "tables")) {
            foreach (FileSystem::list($this->dataDirectory, 'directory') as $table_name) {
                if (!in_array(pathinfo($table_name, PATHINFO_FILENAME), $contents["tables"], true)) {
                    $contents["tables"][] = pathinfo($table_name, PATHINFO_FILENAME);
                }
            }
        }
        array_multisort($contents["tables"], SORT_ASC);
        ksort($contents["tables"], SORT_ASC);
        $this->tablesAll = $contents["tables"];
        return (bool) FileSystem::saveToFile($this->databaseFile($this->database), Implement::toJson($contents));
    }

    public function __destruct()
    {
    }
}
