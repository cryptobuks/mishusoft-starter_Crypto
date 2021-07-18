<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;


use Mishusoft\Framework\Drivers\Controller;

class testController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        // TODO: Implement index() method.
        echo 'test page';
    }

    public function phpinfo()
    {
        phpinfo();
    }

    public function global_vars()
    {
        echo 'COOKIE<pre>';
        print_r($_COOKIE);
        echo '</pre>';
        echo 'ENV<pre>';
        print_r($_ENV);
        echo '</pre>';
        echo 'FILES<pre>';
        print_r($_FILES);
        echo '</pre>';
        echo 'GET<pre>';
        print_r($_GET);
        echo '</pre>';
        echo 'POST<pre>';
        print_r($_POST);
        echo '</pre>';
        echo 'REQUEST<pre>';
        print_r($_REQUEST);
        echo '</pre>';
        echo 'SERVER<pre>';
        print_r($_SERVER);
        echo '</pre>';
    }


}
