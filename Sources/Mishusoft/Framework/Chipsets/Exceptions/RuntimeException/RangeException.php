<?php


namespace Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;

use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;

/**
 * Exception thrown to indicate range errors during program execution.
 * Normally this means there was an arithmetic error other than
 * under/overflow. This is the runtime version of
 * <b>DomainException</b>.
 */
class RangeException extends RuntimeException
{
}
