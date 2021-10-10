<?php declare(strict_types=1);

namespace Mishusoft\Communication;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Http\Runtime;
use Mishusoft\Storage;
use Mishusoft\System;
use ZipArchive;

class SystemConfiguration
{


    /**
     * SystemConfiguration constructor.
     */
    public function __construct()
    {
    }//end __construct()


    /**
     * @param array $request
     * @throws InvalidArgumentException
     */
    public function install(array $request): void
    {
        if (file_get_contents('php://input') !== '') {
            System::checkSystemRequirements();
            System::communicate();
        } else {
            throw new InvalidArgumentException('Empty Data send');
        }
    }//end install()


    /**
     * @param array $request
     * @throws InvalidArgumentException
     * @throws NotFoundException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Mishusoft\Exceptions\ErrorException
     */
    public function update(array $request): void
    {

        //$requestedFile = filter_input_array(FILE_BINARY, 'update');
        if (array_key_exists('update', $_FILES) === true) {
            $uploader = new Storage\Uploader($_FILES['update']);
            if (!$uploader->file_temp_name) {
                Storage\Stream::text('Please browse for a file before clicking upload button.');
            }

            if ($uploader->err_message === 1) {
                Storage\Stream::text("Fetching error to upload $uploader->file_name.");
            }

            if ($uploader->file_type !== 'application/zip') {
                Storage\Stream::text("Please select a zip (.zip) file before clicking upload button.");
            }

            if (file_exists(APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name)) {
                Storage\Stream::text("$uploader->file_name already exists.");
            }

            if (move_uploaded_file($uploader->file_temp_name, APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name)) {
                $filename = strtoupper(str_replace('-', ' ', pathinfo($uploader->file_name, PATHINFO_FILENAME)));
                $zip      = new ZipArchive();
                if ($zip->open(APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name) === true) {
                    $zip->extractTo(RUNTIME_ROOT_PATH);
                    $zip->close();
                    unlink(APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name);
                    Storage\Stream::text("$filename successfully installed on ".Runtime::hostUrl());
                } else {
                    Storage\Stream::text("$filename installation failed on ".Runtime::hostUrl());
                }
            } else {
                Storage\Stream::text(Storage\FileSystem::fileBase($uploader->file_name).' upload failed.');
            }
        } else {
            throw new NotFoundException('Your requested url not found');
        }
    }//end update()
}//end class
