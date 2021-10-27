<?php

declare(strict_types=1);

namespace Mishusoft\Services;

use Mishusoft\Singleton;

class GraphQLService extends Singleton
{
    private static SecureDataTransferDatabaseService $conOfDatabase;

    /**
     * SecureDataTransferService constructor.
     */
    public function __construct()
    {
        parent::__construct();
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
        $self = self::getInstance();
    }
}
