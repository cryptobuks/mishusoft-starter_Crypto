<?php declare(strict_types=1);

namespace Mishusoft\Communication;

use Mishusoft\Services\SecureDataTransferService;

class ApplicationProgrammingInterface extends SecureDataTransferService
{
    /**
     * @param array $request
     */
    public function api(array $request):void
    {
        //api/db/{query, add, delete, update}
        //api/activity/{query, add, delete, update}
        //api/user/{query, add, delete, update}
        parent::api($request);
    }//end api()


    /**
     * @param array $request
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
    public function monitor(array $request):void
    {
        parent::monitor($request);
    }//end monitor()
}//end class
