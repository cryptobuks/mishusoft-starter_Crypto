<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

;

class systemController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->access_init();
    }
    public function index()
    {
        // TODO: Implement index() method.
    }
}
