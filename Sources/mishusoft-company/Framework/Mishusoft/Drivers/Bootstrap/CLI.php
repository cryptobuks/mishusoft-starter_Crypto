<?php

namespace Mishusoft\Drivers\Bootstrap;

use Mishusoft\Cli\Request;
use Mishusoft\Http;

class CLI
{

    /**
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public static function run(Request $request): void
    {
        if (IS_CLI) {
            print_r(self::cliArguments(), false);
            print_r(RUNTIME_ROOT_PATH, false);
            $arguments = self::cliArguments();
            $controller = '';
            $method = 'run';

            if (array_key_exists('1', $arguments)) {
                if (str_contains($arguments[1], ':')) {
                    [$controller, $method] = explode(':', $arguments[1]);
                } else {
                    $controller = $arguments[1];
                }
            }
        } else {
            Http\Runtime::abort(
                Http\Errors::BAD_REQUEST,
                'debug=file='.Http::browser()->getURLPath(),
                'debug=location='.Http::browser()::getVisitedPage(),
            );
        }
    }

    private static function cliArguments():array
    {
        $argv = $_SERVER['argv'];
        if (array_key_exists('0', $argv)) {
            if ($argv[0] ==='cli') {
                unset($argv[0]);
            }
        }
        return $argv;
    }
}
