<?php

declare(strict_types=1);

namespace Mishusoft\Storage;

// https://www.php.net/manual/en/features.file-upload.errors.php

use Mishusoft\Exceptions\RuntimeException;

//class Uploader
//{
//    public string $file_name;
//    public string $file_temp_name;
//    public string $file_type;
//    public string $file_size;
//    public string $err_message;
//
//    /**
//     * @param array<string, mixed> $file
//     */
//    public function __construct(array $file)
//    {
//        if (array_key_exists("name", $file)) {
//            $this->file_name = $file['name']; //the file name
//            $this->file_temp_name = $file['tmp_name']; //File in the php tmp folder
//            $this->file_type = $file['type']; //the type of file it is
//            $this->file_size = $file['size']; //File size in bytes
//            $this->err_message = $file['error']; //0 for false ... and 1 for true
//        } else {
//            trigger_error(sprintf('Invalid file %1$s', $file['name']));
//        }
//    }
//}

class Uploader
{
    private $destinationPath;
    private $errorMessage;
    private $extensions;
    private $allowAll;
    private $maxSize;
    private $uploadName;
    private $seqnence;
    public string $name = 'Uploader';
    public bool $useTable = false;

    public function setDir($path)
    {
        $this->destinationPath = $path;
        $this->allowAll = false;
    }

    public function allowAllFormats()
    {
        $this->allowAll = true;
    }

    public function setMaxSize($sizeMB)
    {
        $this->maxSize = $sizeMB * (1024 * 1024);
    }

    public function setExtensions($options)
    {
        $this->extensions = $options;
    }

    public function setSameFileName()
    {
        $this->sameFileName = true;
        $this->sameName = true;
    }

    public function getExtension($string): string
    {
        $ext = "";
        try {
            $parts = explode(".", $string);
            $ext = strtolower($parts[count($parts) - 1]);
        } catch (RuntimeException $c) {
            $ext = "";
        }
        return $ext;
    }

    public function setMessage($message)
    {
        $this->errorMessage = $message;
    }

    public function getMessage()
    {
        return $this->errorMessage;
    }

    public function getUploadName()
    {
        return $this->uploadName;
    }

    public function setSequence($seq)
    {
        $this->imageSeq = $seq;
    }

    function getRandom(): string
    {
        return strtotime(date('Y-m-d H:i:s')) . rand(1111, 9999) . rand(11, 99) . rand(111, 999);
    }

    public function sameName($true)
    {
        $this->sameName = $true;
    }

    function uploadFile($fileBrowse): bool
    {
        $result = false;
        $size = $_FILES[$fileBrowse]["size"];
        $name = $_FILES[$fileBrowse]["name"];
        $ext = $this->getExtension($name);
        if (!is_dir($this->destinationPath)) {
            $this->setMessage("Destination folder is not a directory ");
        } else if (!is_writable($this->destinationPath)) {
            $this->setMessage("Destination is not writable !");
        } else if (empty($name)) {
            $this->setMessage("File not selected ");
        } else if ($size > $this->maxSize) {
            $this->setMessage("Too large file !");
        } else if ($this->allowAll || (!$this->allowAll && in_array($ext, $this->extensions))) {

            if ($this->sameName == false) {
                $this->uploadName = $this->imageSeq . "-" . substr(md5(rand(1111, 9999)), 0, 8) . $this->getRandom() . rand(1111, 1000) . rand(99, 9999) . "." . $ext;
            } else {
                $this->uploadName = $name;
            }
            if (move_uploaded_file($_FILES[$fileBrowse]["tmp_name"], $this->destinationPath . $this->uploadName)) {
                $result = true;
            } else {
                $this->setMessage("Upload failed , try later !");
            }
        } else {
            $this->setMessage("Invalid file format !");
        }
        return $result;
    }

    public function deleteUploaded()
    {
        unlink($this->destinationPath . $this->uploadName);
    }

}
