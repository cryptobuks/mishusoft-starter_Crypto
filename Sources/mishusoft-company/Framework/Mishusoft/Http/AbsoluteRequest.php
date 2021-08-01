<?php


namespace Mishusoft\Http;

class AbsoluteRequest extends Request
{


    public function get(string $url, \Closure $resource): static
    {
        if ($this->uri === $url) {
            $resource();
        }

        return $this;
    }
}
