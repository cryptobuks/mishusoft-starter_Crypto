<?php

    namespace Mishusoft\Http;

    use Mishusoft\Exceptions\HttpException\HttpResponseException;
    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Storage;
    use Mishusoft\System\Memory;

    class Session
    {
        /**
         * @throws HttpResponseException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function init(): void
        {
            $session_directory = path_storage_system('sessions');

            // verify curren session path is created by current user
            // if not created, then deleted current path and recreate it
            if (file_exists($session_directory)) {
                $current_user = getmyuid();
                $file_owner   = fileowner($session_directory);

                if ($file_owner !== $current_user) {
                    Storage\FileSystem::delete($session_directory);
                }
            }

            // set session name, path, cache expire time
            session_name(WHO_AM_I);
            session_save_path(resolveDirectory($session_directory));
            session_cache_expire(600);
            session_start();
            if (
                (self::get('auth') === true)
                && self::get('RememberMe') === false
            ) {
                self::sessionTime();
            }
        }

        /**
         * Check session validity
         *
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function validity(): void
        {
            if (self::get('auth') === false) {
                if (count(array_clean($_GET, ["url"])) > 0) {
                    redirectUrl(
                        'account/login?'
                        . Runtime::actualUrl("Your session time out. Please log in to continue.")
                    );
                } else {
                    redirectUrl('account/login?' . Runtime::actualUrl());
                }
            }
        }

        /**
         * Get session value
         *
         * @param mixed $value
         *
         * @return mixed
         */
        public static function get(mixed $value): mixed
        {
            if (array_key_exists($value, $_SESSION)) {
                return $_SESSION[$value];
            }

            return false;
        }

        /**
         * @throws HttpResponseException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function sessionTime(): void
        {
            if (empty(Memory::getConstant('SESSION_TIME')) || !self::get('time')) {
                throw new HttpResponseException('Session Time is not set!!');
            }

            if ((int)Memory::getConstant('SESSION_TIME') === 0) {
                return;
            }

            if ((time() - self::get('time')) > ((int)Memory::getConstant('SESSION_TIME') * 60)) {
                self::destroy();
                redirectUrl('account/login?' . Runtime::actualUrl());
            } else {
                self::set('time', time());
            }
        }

        /**
         * @param string[] $items
         */
        public static function destroy(array $items = []): void
        {
            if ($items !== []) {
                foreach ($items as $currentItem) {
                    if (isset($_SESSION[$currentItem])) {
                        unset($_SESSION[$currentItem]);
                    }
                }
            } else {
                session_destroy();
            }
        }

        /**
         * Set an item in session
         *
         * @param string $value
         * @param mixed  $source
         */
        public static function set(string $value, mixed $source): void
        {
            if (!empty($value)) {
                $_SESSION[$value] = $source;
            }
        }

        /**
         * @param string $level
         *
         * @throws PermissionRequiredException
         */
        public static function access(string $level): void
        {
            if (!self::get('auth')) {
                throw new PermissionRequiredException('You have no permission to access the requested url!!');
            }

            if (self::getLevel($level) > self::getLevel(self::get('level'))) {
                throw new PermissionRequiredException('You have no permission to access the requested url!!');
            }
        }

        /**
         * @param string $level
         *
         * @return int
         * @throws PermissionRequiredException
         */
        public static function getLevel(string $level): int
        {
            /*$db = new Database(DbHOST, DbNAME, DbUSER, DbPASS, DbCHAR);
            $roles = $db->query('SELECT * FROM `' . DbPREFIX . 'roles`;')->fetch(PDO::FETCH_ASSOC);
            print_r($roles);*/
            $role['root']   = 1;
            $role['admin']  = 2;
            $role['stuff']  = 3;
            $role['client'] = 4;

            if (!array_key_exists($level, $role)) {
                throw new PermissionRequiredException('You have no permission to access the requested url!!');
            }

            return $role[$level];
        }

        /**
         * @param string $level
         *
         * @return bool
         * @throws HttpResponseException
         * @throws PermissionRequiredException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function accessView(string $level): bool
        {
            if (!self::get('auth')) {
                return false;
            }

            self::sessionTime();

            return !(self::getLevel($level) > self::getLevel(self::get('level')));
        }

        /**
         * @param string[] $level
         * @param bool     $noAdmin
         *
         * @throws HttpResponseException
         * @throws PermissionRequiredException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function accessRestrict(array $level, bool $noAdmin = false): void
        {
            if (!self::get('auth')) {
                throw new PermissionRequiredException('You have no permission to access the requested url!!');
            }

            self::sessionTime();

            if (
                ($noAdmin === false)
                && self::get('level') === 'admin'
            ) {
                return;
            }

            if (
                $level !== []
                && in_array(self::get('level'), $level, true)
            ) {
                return;
            }

            throw new PermissionRequiredException('You have no permission to access the requested url!!');
        }

        /**
         * @param string[] $level
         * @param bool     $noAdmin
         *
         * @return bool
         * @throws HttpResponseException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function accessViewRestrict(array $level, bool $noAdmin = false): bool
        {
            if (!self::get('auth')) {
                return false;
            }

            self::sessionTime();

            if (
                ($noAdmin === false)
                && self::get('level') === 'admin'
            ) {
                return true;
            }

            if (
                $level !== []
                && in_array(self::get('level'), $level, true)
            ) {
                return true;
            }

            return false;
        }

        public function __destruct() {}
    }
