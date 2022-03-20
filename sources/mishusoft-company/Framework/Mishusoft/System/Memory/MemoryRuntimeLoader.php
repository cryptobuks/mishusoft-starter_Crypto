<?php

namespace Mishusoft\System\Memory;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\MPM;
use Mishusoft\System\Framework;
use Mishusoft\System\Log;

trait MemoryRuntimeLoader
{

    /**
     * @throws RuntimeException
     * @throws InvalidArgumentException
     */
    protected static function load(string $storage = 'memory'): void
    {
        // pp(func_get_args());
        // memory (framework)
        // framework (framework.install)
        // mpm (mpm.classic.config)

        $repository = match (strtolower($storage)) {
            'memory'    => [
                'filename' => Framework::configFile(),
                'default'  => Framework::defaultConfiguration()
            ],
            'framework' => [
                'filename' => Framework::installFile(),
                'default'  => Framework::postInstall()
            ],
            'mpm' => [
                'filename' => MPM\Classic::configFile(),
                'default'  => MPM\Classic::defaultConfiguration()
            ],
            default     => throw new InvalidArgumentException(sprintf('%1$s not configured', $storage))
        };

        Log::info(sprintf("Check read permission of %s file.", $repository['filename']));
        if (file_exists($repository['filename']) && is_readable($repository['filename'])) {
            Log::info(sprintf("Load data from %s file.", $repository['filename']));
            self::read(parse_msf_file($repository['filename']), $storage);
        } else {
            Log::info(sprintf("Load data from default for %s file.", $repository['filename']));
            self::read($repository['default'], $storage);

        }
    }

    /**
     * Read object of framework
     *
     * @param string[][] $configuration Framework configuration object.
     *
     * @return void Return nothing.
     * @throws RuntimeException Throw exception when runtime error occurred.
     */
    protected static function read(array $configuration, string $storage = 'memory', string $container = 'array'): void
    {
        if (count($configuration) > 0){
            if (!array_key_exists($storage, $GLOBALS[DEFAULT_MEMORY_SCOPE])
                || !array_key_exists($container, $GLOBALS[DEFAULT_MEMORY_SCOPE][$storage])
                || $GLOBALS[DEFAULT_MEMORY_SCOPE][$storage][$container] === []) {
                $GLOBALS[DEFAULT_MEMORY_SCOPE][$storage][$container] = $configuration;
            }
        } else {
            throw new RuntimeException(sprintf('%1$s data is corrupted', $storage));
        }
    }

}