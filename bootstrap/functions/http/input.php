<?php


    function get_request_input(): string
    {
        return file_get_contents("php://input") ?? '';
    }
