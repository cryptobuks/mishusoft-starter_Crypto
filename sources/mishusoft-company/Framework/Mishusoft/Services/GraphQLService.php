<?php

    declare(strict_types=1);

    namespace Mishusoft\Services;

    use Mishusoft\Http;
    use Mishusoft\Http\UAAnalyzer;
    use stdClass;

    class GraphQLService
    {
        use GraphQLService\DBRequest\Create;
        use GraphQLService\DBRequest\Query;

        private static SecureDataTransferDatabaseService $conOfDatabase;

        public static array $availableServices = ["rest", "db", "activity", "user", "tools", "monitor", "install", "update"];

        protected object $dataObject;

        /**
         * GraphQLService constructor.
         */
        public function __construct()
        {
            self::$conOfDatabase = new SecureDataTransferDatabaseService();
            $this->dataObject    = new stdClass();
        }

        /**
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public function index(): void
        {
            redirectUrl(uri('home'));
        }

        /**
         * @param string $parameter
         *
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\DbException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public function db(string $parameter = 'query'): void
        {
            $this->dataObject = decode_from_json(get_request_input());
            if (property_exists($this->dataObject, 'db')) {
                // $username = property_exists($dataObject, 'user') ? $dataObject->user : DB::USER();
                // $password = property_exists($dataObject, 'password') ? $dataObject->password : DB::PASSWORD();

                // /api/db/create {database, table}
                // {db:'db_name', user:'username', password:'password', 'required:'database'|'table' (sting|array)|both}
                if ($parameter === 'create') {
                    $this->CreateRequestHandle();
                } elseif ($parameter === 'query') {
                    $this->QueryRequestHandle();
                } else {
                    pp('Other options started');
                    pp(get_request_input());
                    pp(func_get_args());
                    pp(get_request_input());
                }
            }
        }

        /**
         * @param string $parameter
         */
        public function activity(string $parameter = 'query'): void
        {
            pp(func_get_args());
        }

        /**
         * @param string $parameter
         */
        public function user(string $parameter = 'query'): void
        {
            pp(func_get_args());
        }

        /**
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Exception
         */
        public function tools(string $parameter = 'query'): void
        {
            $currentTool = $parameter;
            if (!empty(get_request_input())) {
                $data = decode_from_json(get_request_input());
            } elseif (!empty($_POST)) {
                $data = array_to_object($_POST);
            } elseif (!empty($_GET)) {
                $data = array_to_object($_GET);
            } else {
                $data = new stdClass();
            }

            stream_to_json(match ($currentTool) {
                'ipinfo'  => (static function (mixed $data) {
                    if (property_exists($data, 'IpAddress')) {
                        return Http\IP::getInfo('all', $data->IpAddress);
                    }

                    $ipInfo = Http\IP::getInfo();
                    if (is_string($ipInfo)) {
                        return ['ip' => $ipInfo];
                    }

                    return $ipInfo;
                })($data),
                'browser' => (static function (mixed $data) {
                    if (property_exists($data, 'UserAgent')) {
                        $browser = new UAAnalyzer($data->UserAgent);
                        $browser->analyze();
                        return $browser->details();
                    }

                    $browser = Http\Browser::getInstance();
                    return $browser->details();
                })($data),
                'query'   => (
                static function () {
                    return ['object_to_array($data)'];
                }
                )($data),
                default   => [
                    'message' => 'Please choose any service'
                ]
            });
        }
    }
