<?php

    namespace Mishusoft\System;

    interface FrameworkInterface extends BaseInterface
    {
        // Declare framework others constants.
        public const NAME      = 'Mishusoft';
        public const APP_TYPE  = 'Framework';
        public const FULL_NAME = 'Mishusoft Framework';

        // Declare framework authors info.
        public const AUTHOR_NAME          = 'Al-Amin Ahamed';
        public const AUTHOR_PROFILE_LINK  = 'https://www.mishusoft.com/about';
        public const AUTHOR_DATE_OF_BIRTH = '17/01/1996';

        // Declare framework company info.
        public const COMPANY_NAME = 'Mishusoft Systems Incorporated';

        public const COMPANY_ADDRESS       = 'Dhaka Cantonment, Mirpur -14, Dhaka- 1206, Bangladesh.';
        public const COMPANY_ADDRESS_MAP   = 'https://goo.gl/maps/awk7LSU9Rex192Dq8';
        public const COMPANY_CONSUMER_CARE = '+880 963-8570830';

        public const COMPANY_DESCRIPTION_SHORT = 'Security first, Service must.';

        public const COMPANY_WEBSITE_LINK = 'https://www.mishusoft.com';
        public const COMPANY_SUPPORT_LINK = 'https://support.mishusoft.com';
        public const COMPANY_MAIL_LINK    = 'support@mishusoft.com';
        public const COMPANY_EST_YEAR     = '2014';

        public const DEFAULT_USER     = 'superuser';
        public const DEFAULT_DATABASE = 'system';
        public const DEFAULT_THEME    = 'anatomy';

        public const DEFAULT_DIRECTORY_INDEX = 'index';
        public const DEFAULT_FRAMEWORK_LOGO  = 'mishusoft-logo.webp';

        public const COLOR = '#0577cc';
    }
