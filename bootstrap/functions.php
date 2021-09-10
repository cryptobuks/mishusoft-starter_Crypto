<?php

function error(string $message, int $error_level = E_USER_NOTICE)
{
    $array = array_slice(debug_backtrace(), 1);
    $caller = array_shift($array);
    trigger_error(
        sprintf('%1$s in %2$s on line %3$d', $message, $caller['file'], $caller['line']),
        $error_level
    );
}
