<?php

namespace Mishusoft\Framework\Chipsets\Utility;

class Pagination
{
    /*declare version*/
    const VERSION = "1.0.2";

    private array $pagination = array();

    /**
     * Pagination constructor.
     */
    public function __construct(){}

    /**
     * @param $query
     * @param int $page
     * @param int $limit
     * @param array $pagination
     * @return array
     */
    public function pager($query, int $page = 1, int $limit = 10, array $pagination = array()): array
    {
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
        $this->rangePagination($limit);

        return $data_all;
    }

    /**
     * @param int $limit
     * @return array
     */
    private function rangePagination(int $limit = 10): array
    {

        $total = $this->pagination['total'];
        $selected = $this->pagination['current'];
        $range = ceil($limit / 2);

        $pages = array();

        $next = $total - $selected;
        $exists = ($next < $range) ? ($range - $next) : 0;
        $range_left = $selected - ($range + $exists);

        for ($i = $selected; $i > $range_left; $i--) {
            if ($i == 0) {
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
        return $this->pagination;
    }

    /**
     * @param $view
     * @param string $link
     * @return false|string
     */
    public function getView($view, $link = "#")
    {
        $rootView = MS_PAGINATION_PATH . $view . '.php';
        $link = $link !== BaseURL ? BaseURL . $link . '/' : $link;

        if (is_readable($rootView)) {
            ob_start();
            include $rootView;
            $content = ob_get_contents();
            ob_end_clean();
            return $content;
        }

        return trigger_error("Pagination's views content not found or Pagination loading error.");
    }

    function __destruct()
    {

    }
}
