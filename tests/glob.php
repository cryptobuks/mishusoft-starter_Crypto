<?php

function glo($directory, $flags): bool|array
{
    $result = glob($directory . '/*', $flags);
    foreach ($result as $item) {
        if (is_dir($item) === true) {
            array_push($result, ...glo($item, $flags));
        }//end if
    }


    return $result;
}

print_r(glo(realpath(dirname("./", 2)) . '*', GLOB_MARK));



