<?php

    namespace Mishusoft\System\Core;

    use Mishusoft\System\Base;

    abstract class BootstrapCore extends Base
    {
        /**
         * Run application for current request
         *
         * @param \Mishusoft\System\Core\RequestCore $request CLI|HTTP request
         *
         * @return void
         */
        abstract public static function run(RequestCore $request): void;
    }
