<?php

namespace Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;


use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\DataInterface;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\TableInterface;

class Table implements TableInterface
{
    private string $configFile;
    private string $data_dir;
    private array $table_all = array();

    public function __construct(string $data_dir, string $database)
    {
        $this->data_dir = join(DIRECTORY_SEPARATOR, [$data_dir, $database]);
        $this->configFile = join(DIRECTORY_SEPARATOR, [$data_dir, $database . self::dbFileFormat]);
        if (!FileSystem::file_exists($this->configFile)) {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Databases $this->configFile not exists.");
        }
        FileSystem::readFile($this->configFile, function ($contents) {
            if (_Array::value($contents, "tables")) {
                $this->table_all = $contents["tables"];
            }
        });
    }

    /**
     * @return array
     */
    public function getTableAll(): array
    {
        return $this->table_all;
    }


    /**
     * @param string|array $table_name
     */
    public function create($table_name)
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
     */
    private function createTable(string $table_name)
    {
        if (!in_array($table_name, $this->table_all)) {
            FileSystem::readFile($this->configFile, function ($contents) use ($table_name) {
                $contents = json_decode($contents, true);
                if (_Array::value($contents, "tables")) {
                    array_push($contents["tables"], $table_name);
                }
                array_multisort($contents["tables"], SORT_ASC);
                ksort($contents["tables"], SORT_ASC);
                FileSystem::saveToFile($this->configFile, json_encode($contents));
            });

            FileSystem::createFile(join(DIRECTORY_SEPARATOR, [$this->data_dir, $table_name . self::dbTableFileFormat]));
            FileSystem::saveToFile(join(DIRECTORY_SEPARATOR, [$this->data_dir, $table_name . self::dbTableFileFormat]), json_encode(array()));
        } else {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Table ($table_name) is already exists.");
            exit();
        }
    }


    /**
     * @param string $table_name
     * @return DataInterface
     */
    public function read(string $table_name): DataInterface
    {
        // TODO: Implement read() method.
        if (in_array($table_name, $this->table_all)) {
            return new Data($this->data_dir, $table_name);
        } else {
            MishusoftSQLStandalone::error(00404, "Unknown table ($table_name).");
            exit();
        }
    }

    /**
     * @param string $old_name
     * @param string $new_name
     * @return mixed
     */
    public function rename(string $old_name, string $new_name): bool
    {
        // TODO: Implement rename() method.
        if (in_array($old_name, $this->table_all)) {
            if (FileSystem::file_exists(join(DIRECTORY_SEPARATOR, [$this->data_dir, $old_name . self::dbTableFileFormat]))) {
                FileSystem::readFile($this->configFile, function ($contents) use ($new_name, $old_name) {
                    $contents = json_decode($contents, true);
                    if (_Array::value($contents, "tables")) {
                        if (!in_array($new_name, $contents["tables"])) {
                            unset($contents["tables"][array_search($old_name, $contents["tables"])]);
                            array_push($contents["tables"], $new_name);
                        }
                    }
                    $tables = array();
                    foreach ($contents["tables"] as $table) {
                        array_push($tables, $table);
                    }
                    $contents["tables"] = $tables;

                    array_multisort($contents["tables"], SORT_ASC);
                    ksort($contents["tables"], SORT_ASC);
                    FileSystem::saveToFile($this->configFile, json_encode($contents));
                });
                rename(
                    join(DIRECTORY_SEPARATOR, [$this->data_dir, $old_name . self::dbTableFileFormat]),
                    join(DIRECTORY_SEPARATOR, [$this->data_dir, $new_name . self::dbTableFileFormat])
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
        // TODO: Implement delete() method.
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
            FileSystem::readFile($this->configFile, function ($contents) use ($table_name) {
                $contents = json_decode($contents, true);
                if (_Array::value($contents, "tables")) {
                    unset($contents["tables"][array_search($table_name, $contents["tables"])]);
                }
                array_multisort($contents["tables"], SORT_ASC);
                ksort($contents["tables"], SORT_ASC);
                FileSystem::saveToFile($this->configFile, json_encode($contents));
            });

            FileSystem::unlink(join(DIRECTORY_SEPARATOR, [$this->data_dir, $table_name . self::dbTableFileFormat]));
        } else {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Table ($table_name) is not exists.");
            exit();
        }
    }

    public function update()
    {
        FileSystem::readFile($this->configFile, function ($contents) {
            $contents = json_decode($contents, true);
            if (_Array::value($contents, "tables")) {
                foreach (FileSystem::getDirectoryList($this->data_dir) as $table_name) {
                    if (!in_array(pathinfo($table_name,PATHINFO_FILENAME), $contents["tables"], true)) {
                        array_push($contents["tables"],pathinfo($table_name,PATHINFO_FILENAME));
                    }
                }
            }
            array_multisort($contents["tables"], SORT_ASC);
            ksort($contents["tables"], SORT_ASC);
            $this->table_all = $contents["tables"];
            FileSystem::saveToFile($this->configFile, json_encode($contents));
        });
    }

    function __destruct()
    {
    }
}