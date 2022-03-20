<?php

namespace Mishusoft\System\Core;

interface RequestInterface extends VersionControlInterface
{
    /**
     * Get locale name from request
     *
     * @return string Locale name
     */
    public function getLocale(): string;

    /**
     * Get module list for current request
     *
     * @return string[] Module list
     */
    public function getModules(): array;

    /**
     * Get module name from current request
     *
     * @return string Module name
     */
    public function getModule(): string;

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
     * @return string[] Arguments list
     */
    public function getArguments(): array;

}