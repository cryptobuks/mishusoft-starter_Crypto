<?php declare(strict_types=1);

namespace Mishusoft\Ema\UrlSplitters;

use Mishusoft\Framework\Chipsets\Services\SecureDataTransferService;

class ApplicationProgrammingInterface extends SecureDataTransferService
{


    /**
     * ApplicationProgrammingInterface constructor.
     */
    public function __construct()
    {
        parent::__construct();

    }//end __construct()


    /**
     * @param array $request
     */
    public function api(array $request)
    {
        parent::api($request);

    }//end api()


    /**
     * @param array $request
     */
    public function monitor(array $request)
    {
        parent::monitor($request);

    }//end monitor()


}//end class
