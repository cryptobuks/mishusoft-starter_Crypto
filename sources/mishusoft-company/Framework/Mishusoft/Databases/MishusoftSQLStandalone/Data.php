<?php

    declare(strict_types=1);

    namespace Mishusoft\Databases\MishusoftSQLStandalone;

    use Mishusoft\Exceptions\DbException;
    use Mishusoft\Storage\FileSystem;
    use Mishusoft\Utility\Number;

    class Data implements DataInterface
    {
        private string $tableFile;
        private array  $output = [];
        private string $tableName;

        /**
         * Data constructor.
         *
         * @param string $data_dir
         * @param string $table
         *
         * @throws DbException
         */
        public function __construct(string $data_dir, string $table)
        {
            $this->tableName = $table;
            $this->tableFile = $data_dir . "/" . $table . self::DB_TABLE_FILE_FORMAT;
            if (!file_exists($this->tableFile)) {
                throw new DbException("Base table $table not exists.");
            }
        }

        /**
         * @param array $options
         *
         * @return array
         * @throws DbException
         */
        public function get(array $options): array
        {
            // TODO: Implement get() method.
            if ((count($options) > 0) && is_readable($this->tableFile) && is_string(file_get_contents($this->tableFile))) {
                $contents = decode_from_json(file_get_contents($this->tableFile), JSON_IN_ARR);
                if (array_key_exists("data", $options)) {
                    if (array_value($options, "data") === "*") {
                        $this->output = is_array($contents) ? $contents : [];
                    }
                } else {
                    if (!array_key_exists("get", $options) || !array_key_exists("where", $options)) {
                        throw new DbException("Required parameter not found.");
                    }
                    if (empty(array_value($options, "get"))
                        || empty(array_value($options, "where"))) {
                        throw new DbException("Invalid parameter parsed.");
                    }
                    if (count($contents) > 0) {
                        foreach ($contents as $key => $value) {
                            if (array_key_exists("fetch", $options) and $options["fetch"] === "all") {
                                foreach ($options["get"] as $option) {
                                    if (array_value($contents[$key], $option)) {
                                        foreach ($options["where"] as $k => $v) {
                                            $v = is_numeric($v) ? (string)$v : $v;
                                            if (array_key_exists($k, $contents[$key]) === true
                                                && $contents[$key][$k] === $v) {
                                                $this->output[] = [$option => $contents[$key][$option]];
                                            }
                                        }
                                    }
                                    /*if (array_value($data[$key], Encryption::StaticEncrypt($option))) {
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
                                        if (array_value($contents[$key], $option)) {
                                            foreach ($options["where"] as $k => $v) {
                                                $v = is_numeric($v) ? (string)$v : $v;
                                                if (array_key_exists($k, $contents[$key]) && $contents[$key][$k] === $v) {
                                                    //$this->output = array_merge($this->output, [$option => $contents[$key][$option]]);
                                                    $this->output[$option] = $contents[$key][$option];
                                                }
                                            }
                                        }
                                        /*if (array_value($data[$key], Encryption::StaticEncrypt($option))) {
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
                                            if (array_key_exists($k, $contents[$key]) && $contents[$key][$k] === $v) {
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
         *
         * @return bool
         * @throws DbException
         * @throws \Exception
         */
        public function update(array $options): bool
        {
            // TODO: Implement update() method.
            if (count($options) > 0) {
                if (is_readable($this->tableFile) && is_string(file_get_contents($this->tableFile))) {
                    $contents = decode_from_json(file_get_contents($this->tableFile), JSON_IN_ARR);

                    if (empty(array_value($options, "update")) || empty(array_value($options, "where"))) {
                        throw new DbException("Invalid parameter parsed.");
                    }

                    foreach ($contents as $key => $value) {
                        if (array_intersect($value, $options["where"])) {
                            $contents[$key] = array_replace_recursive($value, $options["update"]);
                        }
                    }

                    /*remove duplicate data*/
                    $contents = array_unique($contents, SORT_ASC);
                    array_multisort($contents, SORT_ASC);
                    ksort($contents, SORT_ASC);

                    FileSystem::saveToFile($this->tableFile, encode_to_json($contents));
                    return true;
                }

                throw new DbException("$this->tableFile is not readable.");
                //json_decode(file_get_contents($this->tableFile), true)
            }

            throw new DbException("Empty data parsed.");
        }

        /**
         * @param array|string $name
         *
         * @return bool
         * @throws DbException
         * @throws \Exception
         */
        public function delete(array|string $name): bool
        {
            // TODO: Implement delete() method.

            if (count($name) > 0) {
                if (is_readable($this->tableFile) && is_string(file_get_contents($this->tableFile))) {
                    $contents = decode_from_json(file_get_contents($this->tableFile), JSON_IN_ARR);

                    foreach ($contents as $key => $value) {
                        foreach ($name as $ok => $ov) {
                            if ($contents[$key][$ok] === $ov) {
                                unset($contents[$key]);
                            }
                        }
                    }

                    /*remove duplicate data*/
                    $contents = array_unique($contents, SORT_ASC);
                    array_multisort($contents, SORT_ASC);
                    ksort($contents, SORT_ASC);

                    FileSystem::saveToFile($this->tableFile, encode_to_json($contents));
                    return true;
                }

                throw new DbException("$this->tableFile is not readable.");
            }

            throw new DbException("Empty data parsed.");
        }

        /**
         * @param array $haystack
         *
         * @return bool
         * @throws DbException
         * @throws \Exception
         */
        public function insert(array $haystack): bool
        {
            // TODO: Implement insert() method.
            if (count($haystack) > 0) {
                if (is_readable($this->tableFile) && is_string(file_get_contents($this->tableFile))) {
                    $contents = (array)decode_from_json(file_get_contents($this->tableFile), JSON_IN_ARR);
                    /*add data unique id for every data row*/
                    array_merge($haystack, ["id" => Number::next($this->getLastInsertedId())]);
                    /*merge all data*/
                    $contents[] = $haystack;
                    //array_push($data, $this->EncryptData(array_value($options["data"], "insert")));

                    /*remove duplicate data*/
                    $contents = array_unique($contents, SORT_ASC);
                    array_multisort($contents, SORT_ASC);
                    ksort($contents, SORT_ASC);

                    FileSystem::saveToFile($this->tableFile, encode_to_json(array_reverse($contents)));
                    return true;
                }

                throw new DbException("$this->tableFile is not readable.");
                //json_decode(file_get_contents($this->tableFile), true)
            }

            throw new DbException("Empty data parsed.");
            /*
            if (empty(array_value($haystack, "data"))) {
                MishusoftQL::error(Http::NOT_FOUND, "Data calling error.");
                return false;
            }

            FileSystem::readFile($this->tableFile, function ($contents) use ($haystack) {
                if (is_array(array_value($haystack, "data"))) {
                    if (empty(array_value($haystack["data"], "insert"))) {
                        MishusoftQL::error(Http::NOT_FOUND, "Invalid parameter parsed.");
                    }
                    array_push($contents, array_value($haystack["data"], "insert"));
                    //array_push($data, $this->EncryptData(array_value($options["data"], "insert")));

                    //remove duplicate data
                    $contents = array_unique($contents, SORT_ASC);
                    array_multisort($contents, SORT_ASC);
                    ksort($contents, SORT_ASC);

                    \Mishusoft\Storage\FileSystem::saveToFile($this->tableFile, json_encode($contents));
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
            $contents = decode_from_json(file_get_contents($this->tableFile), JSON_IN_ARR);
            /*remove for upgrade*/
            //return count($contents) > 0 ? Encryption::StaticDecrypt(array_value(end($contents)
            //, Encryption::StaticEncrypt("id"))) : 0;
            return count($contents) > 0 ? array_value(end($contents), "id") : 0;
        }

        public function __destruct()
        {
        }

        /**
         * @return string
         */
        public function getTableName(): string
        {
            return $this->tableName;
        }
    }
