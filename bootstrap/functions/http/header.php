<?php

    /**
     * Remove unwanted header that are already sent
     *
     * @return void
     */
    function removal_header(): void
    {
        header_remove('x-powered-by');
    }

    /**
     * Remove unwanted header that are already sent
     *
     * @return void
     */
    function clean_response_header(): void
    {
        if (is_header_sent('X-Powered-By')) {
            header_remove('x-powered-by');
        }
    }

    /**
     * Function to check if a particular header has been added to the list:
     *
     * @param $header
     *
     * @return bool
     */
    function is_header_sent($header): bool
    {
        // https://www.php.net/manual/en/function.headers-list.php

        $headers = headers_list();
        $header  = trim($header, ': ');
        $result  = false;

        foreach ($headers as $hdr) {
            if (stripos($hdr, $header) !== false) {
                $result = true;
            }
        }

        return $result;
    }
