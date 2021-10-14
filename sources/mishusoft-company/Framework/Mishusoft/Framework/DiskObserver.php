<?php

namespace Mishusoft\Framework;

use Mishusoft\Storage\FileSystem;
use Mishusoft\Exceptions;

trait DiskObserver
{
    /**
     * Check whole file system.
     *
     * @param string $rootPath System root path.
     *
     * @return void
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\ErrorException
     * @throws Exceptions\PermissionRequiredException
     */
    protected function checkFileSystem(string $rootPath = RUNTIME_ROOT_PATH): void
    {
        /*
         * Check root directory is directory or not.
         * */
        if (is_dir($rootPath) === false) {
            throw new Exceptions\RuntimeException\NotFoundException($rootPath.' not found.');
        }

        /*
         * Check last string of root directory is backslash or not.
         * */
        if ($rootPath[(strlen($rootPath) - 1)] !== '/') {
            $rootPath .= '/';
        }

        /*
         * Check provided root directory in app installed path.
         * */
        if (in_array(self::getDirectoryName($rootPath), SYSTEM_EXCLUDE_DIRS, true) === true) {
            return;
        }

        /*
         * Browse every file and directory.
         * */
        $files = glob($rootPath.'*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file) === true) {
                $this->checkFileSystem($file);
            } else {
                $this->updateFileSystemDisk($file);
            }
        }
    }//end checkFileSystem()


    /**
     * @param string $file
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\PermissionRequiredException
     */
    protected function updateFileSystemDisk(string $file): void
    {
        if (file_exists($this->listerFile()) === true) {
            if (is_readable($this->listerFile()) === true) {
                $this->updateDirectoryIndex($file);
            } else {
                throw new Exceptions\PermissionRequiredException(sprintf('Unable to read %s', $this->listerFile()));
            }
        } elseif (is_writable(dirname($this->listerFile(), 2)) === true) {
            if (is_dir(dirname($this->listerFile())) === false) {
                FileSystem::makeDirectory(dirname($this->listerFile()));
            }

            if (is_writable(dirname($this->listerFile())) === true) {
                if (file_exists($this->listerFile()) === false) {
                    fclose(fopen($this->listerFile(), 'wb+'));
                    FileSystem::exec($this->listerFile());
                }

                $this->updateDirectoryIndex($file);
            }//end if
        } else {
            throw new Exceptions\PermissionRequiredException(
                sprintf('Unable to write %s', dirname($this->listerFile(), 2))
            );
        }//end if
    }//end updateFileSystemDisk()


    /**
     * @param string $file
     * @throws Exceptions\PermissionRequiredException
     */
    protected function updateDirectoryIndex(string $file): void
    {
        if (is_writable($this->listerFile()) === true) {
            if (is_file($file) === true && file_exists($file) === true) {
                $data  = file_get_contents($this->listerFile());
                $data .= substr(sprintf('%o', fileperms($this->listerFile())), -4)."\t";
                $data .= filetype(realpath($this->listerFile()))."\t$file\n";
                FileSystem::saveToFile($this->listerFile(), $data);
            }
        } else {
            throw new Exceptions\PermissionRequiredException(sprintf('Unable to write %s', $this->listerFile()));
        }//end if
    }//end updateDirectoryIndex()

}