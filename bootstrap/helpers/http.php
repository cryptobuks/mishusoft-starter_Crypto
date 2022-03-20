<?php

/**
 * The global unspecific functions for mishusoft application
 *
 * Php version 7.4
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */


/**
 * Get uri
 *
 * @param string $target Relative link for generate absolute uri
 *
 * @return string
 * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
 * @throws \Mishusoft\Exceptions\RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
 */
function uri(string $target): string
{
    return Mishusoft\Http\Runtime::link($target);
}