<?php

namespace Mishusoft\Storage;

/**
 * Disk Status Class
 *
 * http://pmav.eu/stuff/php-disk-status/
 * https://pmav.eu/stuff/php-disk-status/source.html
 * https://gist.github.com/fredbradley/6266dcbcbda46fc0e4bc
 *
 * v1.0 - 17/Oct/2008
 * v1.1 - 22/Ago/2009 (Exceptions added.)
 */

class DiskStatus {

  public const RAW_OUTPUT = true;

  private string $diskPath;


  public function __construct(string $diskPath) {
    $this->diskPath = $diskPath;
  }


    /**
     * @throws \RuntimeException
     */
    public function totalSpace($rawOutput = false): float|string
  {
    $diskTotalSpace = @disk_total_space($this->diskPath);

    if ($diskTotalSpace === FALSE) {
      throw new \RuntimeException('totalSpace(): Invalid disk path.');
    }

    return $rawOutput ? $diskTotalSpace : $this->addUnits($diskTotalSpace);
  }


    /**
     * @throws \RuntimeException
     */
    public function freeSpace($rawOutput = false): float|string
  {
    $diskFreeSpace = @disk_free_space($this->diskPath);

    if ($diskFreeSpace === FALSE) {
      throw new \RuntimeException('freeSpace(): Invalid disk path.');
    }

    return $rawOutput ? $diskFreeSpace : $this->addUnits($diskFreeSpace);
  }


    /**
     * @throws \RuntimeException
     */
    public function usedSpace($precision = 1): float
  {
    try {
      return round((100 - ($this->freeSpace(self::RAW_OUTPUT) / $this->totalSpace(self::RAW_OUTPUT)) * 100), $precision);
    } catch (\RuntimeException $e) {
      throw $e;
    }
  }


    /**
     * @return string
     */
    public function getDiskPath(): string
    {
    return $this->diskPath;
  }


  public function addUnits($bytes): string
  {
    $units = array( 'B', 'KB', 'MB', 'GB', 'TB' );

    for($i = 0; $bytes >= 1024 && $i < count($units) - 1; $i++ ) {
      $bytes /= 1024;
    }

    return round($bytes, 1).' '.$units[$i];
  }

}