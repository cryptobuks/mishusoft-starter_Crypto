<?php

function make(string $filename)
{
    return sprintf(
        'data:%s;base64,%s',
        DEFAULT_IMAGE_MIME_TYPE,
        base64_encode(fileContent($filename))
    );
}

function load(string $filename)
{
    $list = IMAGES;
    return array_key_exists($filename, $list) ? $list[$filename] : '';
}


function fileContent(string $filename)
{
    return file_get_contents($filename);
}