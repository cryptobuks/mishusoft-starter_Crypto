<?php

    namespace Mishusoft\Services;

    // links
    // domain/resources/framework
    // domain/resources/assets
    // domain/resources/media
    // domain/resources/shared

    class WebResourcesService
    {
        /**
         * @var array|string[]
         */
        protected array $shareableDirectories  = ['framework', 'assets', 'media'];
        protected array $authorizedDirectories = ['users', 'uploads'];


    }
