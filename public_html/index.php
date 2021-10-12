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

$getFile = static function ($name) {
    return sprintf(
        '%1$s%5$s%2$s%5$s%3$s%5$s%4$s',
        realpath(dirname(__DIR__)),
        'storages',
        'framework',
        $name,
        DIRECTORY_SEPARATOR
    );
};

//fetch maintenance mode
if (file_exists($getFile('maintenance.php'))) {
    include_once $getFile('resolver.php');
    include_once $getFile('maintenance.php');
    exit(0);
}

include_once dirname(__DIR__).'/bootstrap/app.php';

Mishusoft\System\Log::info(sprintf('%s application started', __NAMESPACE__));

// BIOS initialisation.
Mishusoft\System\BIOS\App::initialise();
