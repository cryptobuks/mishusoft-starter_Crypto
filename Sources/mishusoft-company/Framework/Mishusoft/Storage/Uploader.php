<?php declare(strict_types=1);


namespace Mishusoft\Storage;

class Uploader
{
    public string $file_name;
    public string $file_temp_name;
    public string $file_type;
    public string $file_size;
    public string $err_message;

    public function __construct(array $file)
    {
        if (array_key_exists("name", $file)) {
            $this->file_name = $file['name']; //the file name
            $this->file_temp_name = $file['tmp_name']; //File in the php tmp folder
            $this->file_type = $file['type']; //the type of file it is
            $this->file_size = $file['size']; //File size in bytes
            $this->err_message = $file['error']; //0 for false ... and 1 for true
        } else {
            trigger_error("Invalid file $file");
        }
    }
}
