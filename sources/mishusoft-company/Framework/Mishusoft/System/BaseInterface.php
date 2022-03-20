<?php

    namespace Mishusoft\System;

    interface BaseInterface extends Core\VersionControlInterface
    {
        public const SYSTEM_APP_FILE            = "php";
        public const SYSTEM_DATA_FILE           = "yml";
        public const PUBLIC_DATA_FILE           = "json";
        public const SYSTEM_DEFAULT_FILE        = "msf";
        public const SYSTEM_DATAbASE_MAIN_FILE  = "msdb";
        public const SYSTEM_DATAbASE_TABLE_FILE = "mstbl";

        public const DEFAULT_PREFIX_WORD      = 'msu';
        public const DEFAULT_PREFIX_SEPARATOR = '_';

        public const DEFAULT_PREFIX = self::DEFAULT_PREFIX_WORD . self::DEFAULT_PREFIX_SEPARATOR;
    }
