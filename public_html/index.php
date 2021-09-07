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

include_once dirname(__DIR__).'/bootstrap/app.php';

Mishusoft\System\Log::info(sprintf('%s application started', __NAMESPACE__));

// BIOS initialisation.
Mishusoft\System\BIOS\App::initialise();
