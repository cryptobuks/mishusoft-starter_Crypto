<?php declare(strict_types=1);


namespace Mishusoft\Storage\Media;

/**
 * uses
 * $path = 'http://fc04.deviantart.net/fs71/f/2010/227/4/6/PNG_Test_by_Destron23.png';
 * echo "File: ", $path, "\n";
 * $wrapper = new MimeStreamWrapper();
 * $wrapper->setPath($path);
 *
 * $fInfo = new finfo(FILEINFO_MIME);
 * echo "MIME-type: ", $fInfo->file($wrapper->getStreamPath(), FILEINFO_MIME_TYPE, $wrapper->getContext()), "\n";
 */

class MimeStreamWrapper
{
    public const WRAPPER_NAME = 'mime';
    public $context;
    private static bool $isRegistered = false;
    private $callBackFunction;
    private bool $eof = false;
    private $fp;
    private $path;
    private $fileStat;
    private function getStat(): array
    {
        if ($fStat = fstat($this->fp)) {
            return $fStat;
        }

        $size = 100;
        if ($headers = get_headers($this->path, true)) {
            $head = array_change_key_case($headers, CASE_LOWER);
            $size = (int)$head['content-length'];
        }
        $blocks = ceil($size / 512);
        return [
            'dev' => 16777220,
            'ino' => 15764,
            'mode' => 33188,
            'nlink' => 1,
            'uid' => 10000,
            'gid' => 80,
            'rdev' => 0,
            'size' => $size,
            'atime' => 0,
            'mtime' => 0,
            'ctime' => 0,
            'blksize' => 4096,
            'blocks' => $blocks,
        ];
    }
    public function setPath(string $path): void
    {
        $this->path = $path;
        $this->fp = fopen($this->path, 'rb') or die('Cannot open file:  ' . $this->path);
        $this->fileStat = $this->getStat();
    }
    public function read($count): bool|string
    {
        return fread($this->fp, $count);
    }
    public function getStreamPath(): array|string
    {
        return str_replace(['ftp://', 'http://', 'https://'], self::WRAPPER_NAME . '://', $this->path);
    }
    public function getContext()
    {
        if (!self::$isRegistered) {
            stream_wrapper_register(self::WRAPPER_NAME, get_class());
            self::$isRegistered = true;
        }
        return stream_context_create(
            [
                self::WRAPPER_NAME => [
                    'cb' => [$this, 'read'],
                    'fileStat' => $this->fileStat,
                ],
            ]
        );
    }
    public function streamOpen($path, $mode, $options, &$opened_path): bool
    {
        if (!preg_match('/^r[bt]?$/', $mode) || !$this->context) {
            return false;
        }
        $opt = stream_context_get_options($this->context);
        if (!is_array($opt[self::WRAPPER_NAME]) ||
            !isset($opt[self::WRAPPER_NAME]['cb']) ||
            !is_callable($opt[self::WRAPPER_NAME]['cb'])
        ) {
            return false;
        }
        $this->callBackFunction = $opt[self::WRAPPER_NAME]['cb'];
        $this->fileStat = $opt[self::WRAPPER_NAME]['fileStat'];

        return true;
    }
    public function streamRead($count)
    {
        if ($this->eof || !$count) {
            return '';
        }
        if (($s = call_user_func($this->callBackFunction, $count)) == '') {
            $this->eof = true;
        }
        return $s;
    }
    public function streamEof(): bool
    {
        return $this->eof;
    }
    public function streamStat()
    {
        return $this->fileStat;
    }
    public function streamCast($castAs): bool|int
    {
        $read = null;
        $write  = null;
        $except = null;
        return @stream_select($read, $write, $except, $castAs);
    }

    public function __destruct()
    {
    }
}
