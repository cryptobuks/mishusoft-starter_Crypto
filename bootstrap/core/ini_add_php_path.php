<?php

    // add php
    if (file_exists('/home/mishusof/php')) {
        ini_set("include_path", '/home/mishusof/php:' . ini_get("include_path"));
    }