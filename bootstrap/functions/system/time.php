<?php

    /**
     * @param $secs
     *
     * @return string
     * @see https://www.php.net/manual/en/function.time.php
     */
    function time_elapsed_A($secs): string
    {
        $bit = [
            'y' => $secs / 31556926 % 12,
            'w' => $secs / 604800 % 52,
            'd' => $secs / 86400 % 7,
            'h' => $secs / 3600 % 24,
            'm' => $secs / 60 % 60,
            's' => $secs % 60,
        ];
        $ret = [];

        foreach ($bit as $k => $v) {
            if ($v > 0) {
                $ret[] = $v . $k;
            }
        }

        return implode(' ', $ret);
    }


    /**
     * @param $secs
     *
     * @return string
     * @see https://www.php.net/manual/en/function.time.php
     */
    function time_elapsed_B($secs): string
    {
        $bit = [
            ' year'   => $secs / 31556926 % 12,
            ' week'   => $secs / 604800 % 52,
            ' day'    => $secs / 86400 % 7,
            ' hour'   => $secs / 3600 % 24,
            ' minute' => $secs / 60 % 60,
            ' second' => $secs % 60,
        ];
        $ret = [];

        foreach ($bit as $k => $v) {
            if ($v > 1) {
                $ret[] = $v . $k . 's';
            }
            if ($v === 1) {
                $ret[] = $v . $k;
            }
        }
        array_splice($ret, count($ret) - 1, 0, 'and');
        // $ret[] = 'ago.';

        return implode(' ', $ret);
    }
