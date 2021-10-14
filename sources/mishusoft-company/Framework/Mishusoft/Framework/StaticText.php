<?php

namespace Mishusoft\Framework;

trait StaticText
{

    /**
     * @return string
     */
    public static function description():string
    {
        $details  = static::FULL_NAME.' is a robust multi-web platform developed by '.static::COMPANY_NAME.'.';
        $details .= ' This platform is capable of getting start with all categories website quickly and accurately.';
        return $details;
    }

    /**
     * @return string
     */
    public static function companyDescriptionDetails():string
    {
        $details  = static::COMPANY_NAME.' is a software development company that is going to be established with ';
        $details .= 'a view to offering high quality IT solutions at home and abroad. ';
        $details .= 'The company is keen to take the advantage of fast growing global software and data processing ';
        $details .= 'industry by offering professional service and ';
        $details .= 'price for support and benefit of the valued customers.';
        return $details;
    }

    protected static function installWarning():string
    {
        $message = 'Notice: This welcome interface has been shown after successful installation of this framework. ';
        $message .= 'Now you need to install our package(s) to getting start. ';
        $message .= 'If you would install any package but this page shown, ';
        $message .= 'you should to follow our getting start guideline.';

        return $message;
    }

}