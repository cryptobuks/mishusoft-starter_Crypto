<?php

    namespace Mishusoft\System\BIOS;

    use Mishusoft\Cli\Request;
    use Mishusoft\System;
    use Mishusoft\System\Framework;

    class Cli extends System\BIOS
    {
        public static function initialise(): void
        {
            self::singleton(
            /**
             * @throws \Mishusoft\Exceptions\HttpException\HttpRequestException
             * @throws \Mishusoft\Exceptions\RuntimeException
             * @throws \Mishusoft\Exceptions\ErrorException
             * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
             * @throws \Mishusoft\Exceptions\PermissionRequiredException
             * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
             */ function ($registry) {
                $registry->requestCli = new Request();

                // Communicate with framework.
                System\Log::info('Start framework application.');
                Framework::init(function ($framework) use ($registry) {
                    // Instance system memory.
                    System\Log::info('Start system memory.');
                    System\Memory::enable($framework);


                    \Mishusoft\Drivers\Bootstrap\Communication\Cli::run($registry->requestCli());
                });
            }
            );
        }
    }
