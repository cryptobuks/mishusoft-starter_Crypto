<?php

    namespace Mishusoft\Services\GraphQLService\DBRequest;

    use Mishusoft\Http;

    trait Create
    {
        /**
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\DbException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         * @throws \Exception
         */
        protected function CreateRequestHandle(): void
        {
            if (property_exists($this->dataObject, 'required')) {
                if (is_array($this->dataObject->required)) {
                    if (array_key_exists('database', $this->dataObject->required)) {
                        pp($this->dataObject);
                    } else {
                        pp('more queried option');
                        pp(func_get_args());
                    }
                } elseif (is_string($this->dataObject->required)) {
                    if ($this->dataObject->required === 'database') {
                        self::$conOfDatabase->create($this->dataObject->db);
                        stream_to_json(['message' => 'success', 'details' => sprintf('%1$s successfully created.', $this->dataObject->db)]);
                    } elseif ($this->dataObject->required === 'table') {
                        if (property_exists($this->dataObject, 'table')) {
                            if (is_string($this->dataObject->table)) {
                                self::$conOfDatabase->select($this->dataObject->db)->create($this->dataObject->table);
                                stream_to_json(['message' => ['type' => 'success', 'details' => sprintf('%1$s successfully created.', $dataObject->table)]]);
                            } elseif (is_array($this->dataObject->table)) {
                                self::$conOfDatabase->select($this->dataObject->db)->create($this->dataObject->table);
                                stream_to_json(['message' => ['type' => 'success', 'success', 'details' => sprintf('%1$s successfully created.', implode(', ', $this->dataObject->table))]]);
                            } else {
                                Http\Runtime::abort(
                                    Http\Errors::BAD_REQUEST,
                                    'debug@file@' . get_http_request_uri(),
                                    'debug@location@' . __METHOD__,
                                    'debug@description@invalid data type table name',
                                );
                            }
                        }
                    } else {
                        Http\Runtime::abort(
                            Http\Errors::BAD_REQUEST,
                            'debug@file@' . get_http_request_uri(),
                            'debug@location@' . __METHOD__,
                            'debug@description@unknown value for required',
                        );
                    }
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@' . get_http_request_uri(),
                        'debug@location@' . __METHOD__,
                        'debug@description@invalid data type required',
                    );
                }
            }
        }
    }
