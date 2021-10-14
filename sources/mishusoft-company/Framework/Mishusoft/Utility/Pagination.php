<?php

/**
 * Pagination class for Mishusoft Framework.
 *
 * This class can create well pagination system
 * PHP version 8.0
 *
 * @category  PHP_Framework
 * @package   Mishusoft_Framework
 * @author    Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @copyright 2021 Al-Amin Ahamed
 * @license   GPL 2.0 https://opensource.org/licenses/gpl-2.0.php
 * @link      https://www.mishusoft.com
 *
 * @since 4.0
 */


declare(strict_types=1);

namespace Mishusoft\Utility;

use Mishusoft\Storage;

/**
 * Class Pagination
 *
 * Paginating webpage with ajax or normal page
 *
 * @category  PHP_Framework
 * @package   Mishusoft_Framework
 * @author    Al-Amin Ahamed <alamin.rohita@hotmail.com>
 * @copyright 2021 Al-Amin Ahamed
 * @license   GPL 2.0 https://opensource.org/licenses/gpl-2.0.php
 * @link      https://www.mishusoft.com
 */
class Pagination
{
    /*declare version*/
    public const VERSION = "1.0.2";

    /**
     * Pagination list with array
     *
     * @var array
     */
    private array $pagination = array();

    /**
     * Pagination constructor.
     */
    public function __construct()
    {
    }

    /**
     * Make page for each pagination
     *
     * @param array $query      Data array of pagination
     * @param int   $page       Page number
     * @param int   $limit      Pagination limit
     * @param array $pagination All data of pagination
     *
     * @return array Return array data
     */
    public function pager(
        array $query,
        int $page = 1,
        int $limit = 10,
        array $pagination = array()
    ): array {
        if ($page > 1) {
            $offset = ($page - 1) * $limit;
        } else {
            $page = 1;
            $offset = 0;
        }

        $records = count($query);
        $total = ceil($records / $limit);
        $data_all = array_slice($query, $offset, $limit);

        $pagination['current'] = $page;
        $pagination['total'] = $total;
        $pagination['limit'] = $limit;

        if ($page > 1) {
            $pagination['first'] = 1;
            $pagination['previous'] = $page - 1;
        } else {
            $pagination['first'] = '';
            $pagination['previous'] = '';
        }

        if ($page < $total) {
            $pagination['last'] = $total;
            $pagination['next'] = $page + 1;
        } else {
            $pagination['last'] = '';
            $pagination['next'] = '';
        }

        $this->pagination = $pagination;
        $this->makePaginationRange($limit);

        return $data_all;
    }

    /**
     * Set pagination range for navigation button and pagination
     *
     * @param int $limit Limit integer of pagination
     *
     * @return void
     */
    private function makePaginationRange(int $limit = 10): void
    {
        $total = $this->pagination['total'];
        $selected = $this->pagination['current'];
        $range = ceil($limit / 2);

        $pages = array();

        $next = $total - $selected;
        $exists = ($next < $range) ? ($range - $next) : 0;
        $range_left = $selected - ($range + $exists);

        for ($i = $selected; $i > $range_left; $i--) {
            if ($i === 0) {
                break;
            }
            $pages[] = $i;
        }

        sort($pages);
        $next = ($selected < $range) ? $limit : ($selected + $range);

        for ($i = $selected + 1; $i <= $next; $i++) {
            if ($i > $total) {
                break;
            }
            $pages[] = $i;
        }

        $this->pagination['range'] = $pages;
    }

    /**
     * Generate viewable interface with template
     *
     * @param string $view The template name of pagination
     * @param string $link Dynamic link of paginated page
     *
     * @return false|string Return data if file found or error
     */
    public function getView(string $view, string $link = "#"): bool|string
    {
        $rootView = sprintf(
            '%1$sPagination%3$s%2$s.php',
            Storage::applicationWidgetsPath(),
            $view,
            DS
        );
        $link = $link !== BASE_URL ? BASE_URL . $link . '/' :  $link;

        if (is_readable($rootView)) {
            ob_start();
            include $rootView;
            return ob_get_clean();
        }

        return trigger_error("Pagination's views content not found");
    }

    /**
     *  Destruct class
     */
    public function __destruct()
    {
    }
}
