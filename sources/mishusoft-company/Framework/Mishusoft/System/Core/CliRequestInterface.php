<?php

namespace Mishusoft\System\Core;

interface CliRequestInterface extends VersionControlInterface
{
    /**
     * Get controller name from current request
     *
     * @return string Controller name
     */
    public function getController(): string;

    /**
     * Get module name from current request
     *
     * @return string Module name
     */
    public function getMethod(): string;

    /**
     * Get arguments list from current request
     *
     * @return array<int, string> Arguments list
     */
    public function getArguments(): array;
}
