<?php

function make(string $mimeType, string $filename): string
{
    return sprintf(
        'data:%s;base64,%s',
        $mimeType,
        base64_encode(fileContent($filename))
    );
}


function fileContent(string $filename): bool|string
{
    return file_get_contents($filename);
}