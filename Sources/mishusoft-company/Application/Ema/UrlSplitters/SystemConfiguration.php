<?php declare(strict_types=1);

namespace App\Ema\UrlSplitters;

use Mishusoft\Http;
use Mishusoft\Storage\Uploader;
use Mishusoft\Ui;
use Mishusoft\Ui\Firewall;
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
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function install(array $request): void
    {
        if (file_get_contents('php://input') !== '') {
            System::checkSystemRequirements();
            System::communicate();
            exit();
        }

        Firewall::runtimeFailure(
            'Not Found',
            [
                'debug' => [
                    'file'        => ucfirst($request['controller']),
                    'location'    => Http::browser()::getVisitedPage(),
                    'description' => 'Your requested url not found!!',
                ],
                'error' => ['description' => 'Your requested url not found!!'],
            ]
        );
    }//end install()


    /**
     * @param array $request
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
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

            if (file_exists(APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name)) {
                echo "$uploader->file_name already exists.";
                exit();
            }

            if (move_uploaded_file($uploader->file_temp_name, APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name)) {
                $filename = strtoupper(str_replace('-', ' ', pathinfo($uploader->file_name, PATHINFO_FILENAME)));
                $zip      = new ZipArchive();
                if ($zip->open(APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name) === true) {
                    $zip->extractTo(RUNTIME_ROOT_PATH);
                    $zip->close();
                    unlink(APPLICATION_SYSTEM_TEMP_PATH.$uploader->file_name);
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
                    'location'    => Http::browser()::getVisitedPage(),
                    'description' => 'Your requested url not found!!',
                ],
                'error' => ['description' => 'Your requested url not found!!'],
            ]
        );//end if
    }//end update()
}//end class
