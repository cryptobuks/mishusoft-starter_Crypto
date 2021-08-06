<?php declare(strict_types=1);

namespace App\EmbeddedWebUrlDirectory;

use Mishusoft\Services\SecureDataTransferService;

class ApplicationProgrammingInterface extends SecureDataTransferService
{


    /**
     * @param array $request
     */
    public function api(array $request)
    {
        parent::api($request);
    }//end api()


    /**
     * @param array $request
     * @throws \JsonException
     */
    public function monitor(array $request)
    {
        parent::monitor($request);
    }//end monitor()
}//end class
