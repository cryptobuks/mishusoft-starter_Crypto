<?php

namespace Mishusoft\System\Firewall;

trait Config
{

    protected function requiredProperties(): array
    {
        return  [
            'status' => 'enable',
            'granted-device-access-limit-filter' => 'enable',
            'granted-device-access-limit' => '600',
            'granted-device-time-limit' => '60',
            'granted-device-limit-time-format' => 'minute',
            'blocked-device-access-limit-filter' => 'enable',
            'blocked-device-access-limit' => '10',
            'blocked-device-time-limit' => '60',
            'blocked-device-limit-time-format' => 'minute',
        ];
    }

    protected function defaultProperties(): array
    {
        return [
            'granted-device-count-down-time' => [],
            'blocked-device-count-down-time' => [],
            'accept' => [
                'request-method' => [
                    'get',
                    'post',
                    'accept',
                    'ms-feedback-data',
                    'options',
                ],
            ],
            'browser' => [
                'order' => 'blacklist',
                'banned' => ['curl', 'zmeu'],
                'whitelist' => [],
                'blacklist' => [],
            ],
            'ip' => [
                'order' => 'blacklist',
                'banned' => [],
                'whitelist' => [],
                'blacklist' => [],
            ],
            'device' => [
                'order' => 'blacklist',
                'banned' => [],
                'whitelist' => [],
                'blacklist' => [],
            ],
            'continent' => [
                'order' => 'blacklist',
                'banned' => [],
                'whitelist' => [],
                'blacklist' => [],
            ],
            'country' => [
                'order' => 'blacklist',
                'banned' => [],
                'whitelist' => [],
                'blacklist' => [],
            ],
            'city' => [
                'order' => 'blacklist',
                'banned' => [],
                'whitelist' => [],
                'blacklist' => [],
            ],
        ];
    }

}