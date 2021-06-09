<?php


namespace Mishusoft\Framework\Chipsets\Http\UserAgents;


use Mishusoft\Framework\Chipsets\Http\UserAgents;

class RenderEngine extends UserAgents
{

    public function list(): array
    {
        // TODO: Implement list() method.
        return  [
            "Blink",
            "Edge",
            "Gecko",
            "Goanna",
            "KHTML",
            "NetFront",
            "Presto",
            "T5",
            "T7",
            "Tasman",
            "Trident",
            "U2",
            "U3",
            "WebKit",
            "X5"
        ];
    }

    public function get(string $keyword): array
    {
        // TODO: Implement get() method.
    }
}