<?php


    function lowerDocumentTitle(): string
    {
        return strtolower(get_document_title_clean());
    }

    function messageDescriptionOnly(array $messageDetails): string
    {
        if (array_key_exists('description', array_change_key_case($messageDetails)) === true) {
            return $messageDetails['description'];
        }
        return 'An error occurred!';
    }

    function isFailureMessage(array $messageDetails): bool
    {
        return array_key_exists('file', $messageDetails) && array_key_exists('location', $messageDetails);
    }

    function isDebugMessage(array $messageDetails): bool
    {
        return array_key_exists('caption', $messageDetails) && array_key_exists('stack', $messageDetails);
    }

    function isUnavailable(array $messageDetails): bool
    {
        return lowerDocumentTitle() === 'not found' || str_contains(lowerDocumentTitle(), 'unavailable');
    }
