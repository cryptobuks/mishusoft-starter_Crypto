<?php

namespace Mishusoft\Http;

class AbsoluteRequest extends Request
{
    /**
     * @return $this
     */
    public function get(string $url, \Closure $resource)
    {
        if ($this->uri === $url) {
            $resource();
        }

        return $this;
    }
}
