<?php

    declare(strict_types=1);

    namespace Mishusoft\Communication\Http;

    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\RuntimeException\NotFoundException;
    use Mishusoft\Http;
    use Mishusoft\Http\Runtime;
    use Mishusoft\Services\GraphQLService;
    use Mishusoft\Services\SecureDataTransferService;
    use Mishusoft\Storage;
    use Mishusoft\System;
    use ZipArchive;

    class ApplicationProgrammingInterface extends SecureDataTransferService
    {
        public function __construct(protected $request)
        {
            parent::__construct();
        }

        /**
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public function run(): void
        {
            $service   = $this->request->getMethod();
            $arguments = $this->request->getArguments();

            if (in_array($service, GraphQLService::$availableServices, true)) {
                $class = new GraphQLService();

                //api/db/{create, query, add, delete, update}
                //api/activity/{query, add, delete, update}
                //api/user/{query, add, delete, update}

                if (method_exists($class, $service)) {
                    $class->$service(array_shift($arguments));
                } else {
                    Http\Runtime::abort(
                        Http\Errors::BAD_REQUEST,
                        'debug@file@' . get_http_request_uri(),
                        'debug@location@' . __METHOD__,
                    );
                }
            }
        }

        /**
         * @param array<string, mixed> $request
         */
        public function api(array $request): void
        {
            //api/db/{query, add, delete, update}
            //api/activity/{query, add, delete, update}
            //api/user/{query, add, delete, update}

            ['method' => $method, 'arguments' => $arguments] = $request;
            call_user_func_array([new GraphQLService(), $method], $arguments);
        }

        /**
         * @param array<string, mixed> $request
         */
        public function rapi(array $request): void
        {
            //api/db/query
            //api/db/add
            //api/db/delete
            //api/db/update
            parent::api($request);
        }

        /**
         * @param array<string, mixed> $request
         *
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \JsonException
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\ErrorException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         * @throws \Mishusoft\Exceptions\JsonException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function monitor(array $request): void
        {
            parent::monitor($request);
        }

        /**
         * @param array<string, mixed> $request
         *
         * @throws InvalidArgumentException
         */
        public function install(array $request): void
        {
            if (get_request_input() !== '') {
                System::checkSystemRequirements();
                System::communicate();
            } else {
                throw new InvalidArgumentException('Empty Data send');
            }
        }

        /**
         * @param array<string, mixed> $request
         *
         * @throws InvalidArgumentException
         * @throws NotFoundException
         * @throws \Mishusoft\Exceptions\PermissionRequiredException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public function update(array $request): void
        {
            //$requestedFile = filter_input_array(FILE_BINARY, 'update');
            if (array_key_exists('update', $_FILES) === true) {
                $uploader = new Storage\Uploader($_FILES['update']);
                if (!$uploader->file_temp_name) {
                    Storage\Stream::text('Please browse for a file before clicking upload button.');
                }

                if ($uploader->err_message === 1) {
                    Storage\Stream::text("Fetching error to upload $uploader->file_name.");
                }

                if ($uploader->file_type !== 'application/zip') {
                    Storage\Stream::text("Please select a zip (.zip) file before clicking upload button.");
                }

                if (file_exists(APPLICATION_SYSTEM_TEMP_PATH . $uploader->file_name)) {
                    Storage\Stream::text("$uploader->file_name already exists.");
                }

                if (move_uploaded_file($uploader->file_temp_name, APPLICATION_SYSTEM_TEMP_PATH . $uploader->file_name)) {
                    $filename = strtoupper(str_replace('-', ' ', pathinfo($uploader->file_name, PATHINFO_FILENAME)));
                    $zip      = new ZipArchive();
                    if ($zip->open(APPLICATION_SYSTEM_TEMP_PATH . $uploader->file_name) === true) {
                        $zip->extractTo(RUNTIME_ROOT_PATH);
                        $zip->close();
                        unlink(APPLICATION_SYSTEM_TEMP_PATH . $uploader->file_name);
                        Storage\Stream::text("$filename successfully installed on " . Runtime::hostUrl());
                    } else {
                        Storage\Stream::text("$filename installation failed on " . Runtime::hostUrl());
                    }
                } else {
                    Storage\Stream::text(Storage\FileSystem::fileBase($uploader->file_name) . ' upload failed.');
                }
            } else {
                throw new NotFoundException('Your requested url not found');
            }
        }//end update()
    }
