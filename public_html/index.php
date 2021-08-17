<?php
/**
 * Mishusoft application player.
 *
 * @package    Mishusoft
 * @subpackage website
 * @author     Squiz Pty Ltd <products@squiz.net>
 * @copyright  2021 Squiz Pty Ltd (ABN 77 084 670 600)
 *  */

declare(strict_types=1);

//echo '<pre>';
//print_r($_SERVER, false);
//echo '</pre>';
//exit(0);

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists(__DIR__.'/../storages/framework/maintenance.php')) {
    require dirname(__DIR__).'/storages/framework/resolver.php';
    require dirname(__DIR__).'/storages/framework/maintenance.php';
}


/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/
include_once dirname(__DIR__) . '/vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

include_once dirname(__DIR__) . '/bootstrap/app.php';


Mishusoft\System\Log::info(sprintf('%s application started', __NAMESPACE__));
// BIOS initialisation.
Mishusoft\System\BIOS::initialise();
