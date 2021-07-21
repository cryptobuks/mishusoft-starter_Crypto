<?php


namespace Mishusoft\Http\UAAnalyzer\IdentifiersCollection;

use JsonException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class PlatformsIdentifiersCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    //Platform
    //Name
    //Version
    //Architecture
    //Developer

    /**
     * @throws RuntimeException
     * @throws JsonException
     */
    public function all():array
    {
        return $this->extractAttribute($this->query('platforms', 'os'), 'identifier-only');
    }


    /**
     * List of devices architecture
     *
     * @return array
     * @throws RuntimeException
     */
    public function architecturesAll():array
    {
        return $this->extractArchitectures($this->query('platforms', 'architectures'));
    }


    /**
     * List of web browsers window manager
     *
     * @return array
     * @throws RuntimeException
     * @throws JsonException
     */
    public function windowManagers(): array
    {
        // Platform's Window Manager.
        return $this->extractAttribute($this->query('platforms', 'wm'), 'identifier-only');
    }//end getWindowManagers()
}
