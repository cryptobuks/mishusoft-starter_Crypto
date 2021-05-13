<?php


namespace Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;


use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;
use Mishusoft\Framework\Chipsets\Http;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\Number;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use Mishusoft\Framework\Interfaces\Chipsets\Databases\MishusoftSQLStandalone\DataInterface;

class Data implements DataInterface
{
    private string $tableFile;
    private array $output = array();
    private string $tableName;

    /**
     * Data constructor.
     * @param string $data_dir
     * @param string $table
     */
    public function __construct(string $data_dir, string $table)
    {
        $this->tableName = $table;
        $this->tableFile = $data_dir . "/" . $table . self::dbTableFileFormat;
        if (!file_exists($this->tableFile)) {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Base table $table not exists.");
        }
    }

    /**
     * @param array $options
     * @return array
     */
    public function get(array $options): array
    {
        // TODO: Implement get() method.
        if (count($options) > 0) {
            if (is_readable($this->tableFile)) {
                $contents = json_decode(file_get_contents($this->tableFile), true);
                if (array_key_exists("data", $options)) {
                    if (_Array::value($options, "data") === "*") {
                        $this->output = $contents;
                        //$this->output = $this->DecryptData(json_decode($contents, true));
                    }
                } else {
                    if (!array_key_exists("get", $options) || !array_key_exists("where", $options)) {
                        MishusoftSQLStandalone::error(Http::NOT_FOUND, "Required parameter not found.");
                    }
                    if (empty(_Array::value($options, "get")) || empty(_Array::value($options, "where"))) {
                        MishusoftSQLStandalone::error(Http::NOT_FOUND, "Invalid parameter parsed.");
                    }
                    if (count($contents) > 0) {
                        foreach ($contents as $key => $value) {
                            if (array_key_exists("fetch", $options) and $options["fetch"] === "all") {
                                foreach ($options["get"] as $option) {
                                    if (_Array::value($contents[$key], $option)) {
                                        foreach ($options["where"] as $k => $v) {
                                            $v = is_numeric($v) ? (string)$v : $v;
                                            if (array_key_exists($k, $contents[$key]) and $contents[$key][$k] === $v) {
                                                array_push($this->output, [$option => $contents[$key][$option]]);
                                            }
                                        }
                                    }
                                    /*if (_Array::value($data[$key], Encryption::StaticEncrypt($option))) {
                                        foreach ($options["data"]["where"] as $k => $v) {
                                            if (array_key_exists(Encryption::StaticEncrypt($k),$data[$key]) and $data[$key][Encryption::StaticEncrypt($k)] === Encryption::StaticEncrypt($v)) {
                                                array_push($this->output, [$option => $data[$key][Encryption::StaticEncrypt($option)]]);
                                            }
                                        }
                                    }*/
                                }
                            } else {
                                if (is_array($options["get"])) {
                                    foreach ($options["get"] as $option) {
                                        if (_Array::value($contents[$key], $option)) {
                                            foreach ($options["where"] as $k => $v) {
                                                $v = is_numeric($v) ? (string)$v : $v;
                                                if (array_key_exists($k, $contents[$key]) and $contents[$key][$k] === $v) {
                                                    $this->output = array_merge($this->output, [$option => $contents[$key][$option]]);
                                                }
                                            }
                                        }
                                        /*if (_Array::value($data[$key], Encryption::StaticEncrypt($option))) {
                                            foreach ($options["data"]["where"] as $k => $v) {
                                                if (array_key_exists(Encryption::StaticEncrypt($k),$data[$key]) and $data[$key][Encryption::StaticEncrypt($k)] === Encryption::StaticEncrypt($v)) {
                                                    $this->output = array_merge($this->output, [$option => $data[$key][Encryption::StaticEncrypt($option)]]);
                                                }
                                            }
                                        }*/
                                    }
                                } else {
                                    if ($options["get"] === "*") {
                                        foreach ($options["where"] as $k => $v) {
                                            $v = is_numeric($v) ? (string)$v : $v;
                                            if (array_key_exists($k, $contents[$key]) and $contents[$key][$k] === $v) {
                                                $this->output = $contents[$key];
                                            }
                                            /*if (array_key_exists(Encryption::StaticEncrypt($k), $data[$key]) and $data[$key][Encryption::StaticEncrypt($k)] === Encryption::StaticEncrypt($v)) {
                                                $this->output = $data[$key];
                                            }*/
                                        }
                                    }
                                }

                            }
                        }
                    }

                }
            } else {
                /*MishusoftQL::error(Http::NOT_FOUND, "$this->tableFile is not readable.");*/
                $this->output;
            }
            //json_decode(file_get_contents($this->tableFile), true)

        } else {
            /*MishusoftQL::error(Http::NOT_FOUND, "Empty data parsed.");*/
            return $this->output;
        }

        /*remove duplicate data*/
        $this->output = array_unique($this->output, SORT_ASC);
        array_multisort($this->output, SORT_ASC);
        ksort($this->output, SORT_ASC);

        return array_filter($this->output);
        //return array_filter($this->DecryptData($this->output));
    }


    /**
     * @param array $options
     * @return bool
     */
    public function update(array $options): bool
    {
        // TODO: Implement update() method.
        if (count($options) > 0) {
            if (is_readable($this->tableFile)) {
                $contents = json_decode(file_get_contents($this->tableFile), true);

                if (empty(_Array::value($options, "update")) || empty(_Array::value($options, "where"))) {
                    MishusoftSQLStandalone::error(Http::NOT_FOUND, "Invalid parameter parsed.");
                }

                foreach ($contents as $key => $value) {
                    if (array_intersect($contents[$key], $options["where"])) {
                        $contents[$key] = array_replace_recursive($contents[$key], $options["update"]);
                    }
                }

                /*remove duplicate data*/
                $contents = array_unique($contents, SORT_ASC);
                array_multisort($contents, SORT_ASC);
                ksort($contents, SORT_ASC);

                Stream::saveToFile($this->tableFile, json_encode($contents));
                return true;
            } else {
                MishusoftSQLStandalone::error(Http::NOT_FOUND, "$this->tableFile is not readable.");
                return false;
            }
            //json_decode(file_get_contents($this->tableFile), true)

        } else {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Empty data parsed.");
            return false;
        }
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function delete(array $haystack): bool
    {
        // TODO: Implement delete() method.

        if (count($haystack) > 0) {
            if (is_readable($this->tableFile)) {
                $contents = json_decode(file_get_contents($this->tableFile), true);

                foreach ($contents as $key => $value) {
                    foreach ($haystack as $ok => $ov) {
                        if ($contents[$key][$ok] === $ov) {
                            unset($contents[$key]);
                        }
                    }
                }

                /*remove duplicate data*/
                $contents = array_unique($contents, SORT_ASC);
                array_multisort($contents, SORT_ASC);
                ksort($contents, SORT_ASC);

                Stream::saveToFile($this->tableFile, json_encode($contents));
                return true;
            } else {
                MishusoftSQLStandalone::error(Http::NOT_FOUND, "$this->tableFile is not readable.");
                return false;
            }

        } else {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Empty data parsed.");
            return false;
        }
    }

    /**
     * @param array $haystack
     * @return bool
     */
    public function insert(array $haystack): bool
    {
        // TODO: Implement insert() method.
        if (count($haystack) > 0) {
            if (is_readable($this->tableFile)) {
                $contents = json_decode(file_get_contents($this->tableFile), true);
                /*add data unique id for every data row*/
                array_merge($haystack, ["id" => Number::next($this->getLastInsertedId())]);
                /*merge all data*/
                array_push($contents, $haystack);
                //array_push($data, $this->EncryptData(_Array::value($options["data"], "insert")));

                /*remove duplicate data*/
                $contents = array_unique($contents, SORT_ASC);
                array_multisort($contents, SORT_ASC);
                ksort($contents, SORT_ASC);

                Stream::saveToFile($this->tableFile, json_encode(array_reverse($contents)));
                return true;
            } else {
                MishusoftSQLStandalone::error(Http::NOT_FOUND, "$this->tableFile is not readable.");
                return false;
            }
            //json_decode(file_get_contents($this->tableFile), true)

        } else {
            MishusoftSQLStandalone::error(Http::NOT_FOUND, "Empty data parsed.");
            return false;
        }
        /*
        if (empty(_Array::value($haystack, "data"))) {
            MishusoftQL::error(Http::NOT_FOUND, "Data calling error.");
            return false;
        }

        FileSystem::readFile($this->tableFile, function ($contents) use ($haystack) {
            if (is_array(_Array::value($haystack, "data"))) {
                if (empty(_Array::value($haystack["data"], "insert"))) {
                    MishusoftQL::error(Http::NOT_FOUND, "Invalid parameter parsed.");
                }
                array_push($contents, _Array::value($haystack["data"], "insert"));
                //array_push($data, $this->EncryptData(_Array::value($options["data"], "insert")));

                //remove duplicate data
                $contents = array_unique($contents, SORT_ASC);
                array_multisort($contents, SORT_ASC);
                ksort($contents, SORT_ASC);

                Stream::saveToFile($this->tableFile, json_encode($contents));
                return true;
            } else {
                MishusoftQL::error(Http::NOT_FOUND, "Invalid parameter parsed.");
                return false;
            }
        });
        return true;*/
    }

    public function getLastInsertedId(): int
    {
        // TODO: Implement getLastInsertedId() method.
        $contents = json_decode(file_get_contents($this->tableFile), true);
        /*remove for upgrade*/
        //return count($contents) > 0 ? Encryption::StaticDecrypt(_Array::value(end($contents), Encryption::StaticEncrypt("id"))) : 0;
        return count($contents) > 0 ? _Array::value(end($contents), "id") : 0;
    }

    function __destruct()
    {
    }
}