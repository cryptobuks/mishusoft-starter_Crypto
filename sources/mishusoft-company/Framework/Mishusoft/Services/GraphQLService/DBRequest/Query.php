<?php

    namespace Mishusoft\Services\GraphQLService\DBRequest;

    trait Query
    {

        protected function QueryRequestHandle(): void
        {
            pp('Query started');
            pp(get_request_input());
        }

    }