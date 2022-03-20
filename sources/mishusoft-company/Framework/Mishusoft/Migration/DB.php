<?php

    namespace Mishusoft\Migration;

    use Mishusoft\System\Memory;

    class DB
    {
        /**
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function NAME(): string
        {
            return Memory::getOption('preset.db');
        }

        /**
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function USER(): string
        {
            return sprintf(
                '%1$s%2$s%3$s',
                Memory::getOption('prefix.char'),
                Memory::getOption('prefix.separator'),
                Memory::getOption('preset.user')
            );
        }

        /**
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function PASSWORD(): string
        {
            return Memory::getOption('preset.password');
        }
    }
