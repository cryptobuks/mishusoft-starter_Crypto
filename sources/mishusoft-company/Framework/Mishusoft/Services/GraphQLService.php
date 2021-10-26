<?php

declare(strict_types=1);

namespace Mishusoft\Services;

class GraphQLService
{
    private static SecureDataTransferDatabaseService $conOfDatabase;

    /**
     * SecureDataTransferService constructor.
     */
    public function __construct()
    {
        self::$conOfDatabase = new SecureDataTransferDatabaseService();
    }

    /**
     * Handle api request from client side with graphql
     *
     * @param array $request
     *
     * @return  void
     */
    public static function run(array $request): void
    {
    }
}
