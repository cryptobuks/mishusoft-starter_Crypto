<?php

    namespace Mishusoft\System\Memory;

    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\System\Base;
    use Mishusoft\System\Framework;

    abstract class MemoryBase extends Base
    {
        use MemoryPublicRelation;
        use MemoryRuntimeLoader;

        protected Framework $framework;

        private mixed  $data = [];
        private string $dataDrive;

        public function __construct()
        {
            parent::__construct();

            $this->dataDrive = path_storage_system('data.drive');
        }

        /**
         * Check memory directory, create directory when not found.
         * Check config file, create and store default data when not found.
         * Check validation of stored data, restore to default data when configuration data corrupted
         *
         * @throws PermissionRequiredException
         */
        protected function validation(): void
        {
            /*
             * Framework configuration directory [default data path]
             *
             * Check read permission of parent directory of Framework configuration directory;
             * throw read error message when not permitted;
             */

            if (is_writable($this->dataDrive) === false) {
                throw new PermissionRequiredException(
                    sprintf("Unable to write %s", $this->dataDrive)
                );
            }

            /*
             * Check read permission of Framework configuration directory [default php runtime registries path]
             * throw read error message when not permitted
             */

            if (is_readable(dirname($this->dataDrive)) === false) {
                throw new PermissionRequiredException(
                    sprintf("Unable to read %s", dirname($this->dataDrive))
                );
            }
        }
    }
