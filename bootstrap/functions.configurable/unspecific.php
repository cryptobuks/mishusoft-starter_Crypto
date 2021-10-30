<?php

/**
 * Load Data.
 *
 * @param string $carrier Carrier name of data loader.
 * @param string[] $options Options of data loader.
 *
 * @return mixed[]|object Return array or object by called, default object return
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function data(string $carrier = "memory", array $options = []): array|object
{
    return Mishusoft\System\Memory::data($carrier, $options);
}

/**
 * Get uri
 *
 * @param string $target Relative link for generate absolute uri
 *
 * @return string
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function uri(string $target): string
{
    return Mishusoft\Http\Runtime::link($target);
}

/**
 * @throws \Mishusoft\Exceptions\ErrorException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function redirect(string $url): void
{
    uri($url);
}
