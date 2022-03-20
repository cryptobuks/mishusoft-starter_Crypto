<?php

    namespace Mishusoft\Storage\Path;

    trait Status
    {

        public static function spaceTotal(string $path): float|bool
        {
            return disk_total_space($path);
        }

        public static function spaceFree(string $path): float|bool
        {
            return disk_free_space($path);
        }

    }
