<?php

    declare(strict_types = 1);

    namespace Mishusoft\System;

    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Exceptions\RuntimeException;

    class Memory extends Memory\MemoryBase
    {
        private static Memory $memory;

        /**
         * Enable system memory.
         *
         * @param Framework $framework
         *
         * @return Memory
         * @throws PermissionRequiredException
         * @throws RuntimeException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public static function enable(Framework $framework): self
        {
            if (empty(self::$memory)) {
                self::$memory = new self();
            }


            // load all env variable
            load_environment_variables();

            self::$memory->framework = $framework;

            self::$memory->validation();
            self::$memory::load('memory');

            return self::$memory;
        }
    }
