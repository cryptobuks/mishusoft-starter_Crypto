<?php declare(strict_types=1);

namespace Mishusoft\Ema\UrlSplitters;

use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\System;
use Mishusoft\Framework\Chipsets\System\Firewall;
use Mishusoft\Framework\Chipsets\Utility\Uploader;
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
     */
    public function install(array $request): void
    {
        if (strlen(file_get_contents('php://input')) > 0) {
            System::checkSystemRequirements();
            System::communicate();
            exit();
        }

        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => ucfirst($request['controller']),
                    'location'    => Browser::getVisitedPage(),
                    'description' => 'Your requested url not found!!',
                ],
                'error' => ['description' => 'Your requested url not found!!'],
            ]
        );

    }//end install()


    /**
     * @param array $request
     */
    public function update(array $request): void
    {

        //$requestedFile = filter_input_array(FILE_BINARY, 'update');
        if (array_key_exists('update', $_FILES) === true) {
            $uploader = new Uploader($_FILES['update']);
            if (!$uploader->file_temp_name) {
                echo 'Please browse for a file before clicking upload button.';
                exit();
            }

            if ($uploader->err_message === 1) {
                echo "Fetching error to upload $uploader->file_name.";
                exit();
            }

            if ($uploader->file_type !== 'application/zip') {
                echo 'Please select a zip (.zip) file before clicking upload button.';
                exit();
            }

            if (file_exists(PHP_RUNTIME_SYSTEM_TEMP_PATH.$uploader->file_name)) {
                echo "$uploader->file_name already exists.";
                exit();
            }

            if (move_uploaded_file($uploader->file_temp_name, PHP_RUNTIME_SYSTEM_TEMP_PATH.$uploader->file_name)) {
                $filename = strtoupper(str_replace('-', ' ', pathinfo($uploader->file_name, PATHINFO_FILENAME)));
                $zip      = new ZipArchive();
                if ($zip->open(PHP_RUNTIME_SYSTEM_TEMP_PATH.$uploader->file_name) === true) {
                    $zip->extractTo(PHP_RUNTIME_ROOT_PATH);
                    $zip->close();
                    unlink(PHP_RUNTIME_SYSTEM_TEMP_PATH.$uploader->file_name);
                    echo "$filename successfully installed on ".System::getAbsoluteInstalledURL();
                } else {
                    echo "$filename installation failed on ".System::getAbsoluteInstalledURL();
                }
            } else {
                echo pathinfo($uploader->file_name, PATHINFO_BASENAME).' upload failed.';
            }

            exit();
        }

        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => ucfirst($request['controller']),
                    'location'    => Browser::getVisitedPage(),
                    'description' => 'Your requested url not found!!',
                ],
                'error' => ['description' => 'Your requested url not found!!'],
            ]
        );//end if

    }//end update()


}//end class
