<?php

    // Load debug ini file
    require_once __DIR__ . "/ini_debug.php";

    // Load memory setting file
    require_once __DIR__ . "/ini_memory.php";

    // Load runtime defined ini file
    require_once __DIR__ . "/ini.php";

    // Add secondary php directory to path
    require_once __DIR__ . '/ini_add_php_path.php';

    // Enable logging
    require_once __DIR__ . '/ini_logs.php';
