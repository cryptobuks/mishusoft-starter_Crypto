<?php

function make(string $filename): string
{
    return sprintf(
        'data:%s;base64,%s',
        DEFAULT_IMAGE_MIME_TYPE,
        base64_encode(file_get_contents($filename))
    );
}

function load(string $filename): string
{
    $list = IMAGES;
    return array_key_exists($filename, $list) ? $list[$filename] : '';
}