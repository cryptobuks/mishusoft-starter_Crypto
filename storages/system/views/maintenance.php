<!DOCTYPE html>
<html lang="en">
<head>
    <!--meta tags of html document-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no maximum-scale=5.0">
    <meta name="keywords" content="blocked, banned, denied">
    <meta name="company" content="Mishusoft Systems Incorporated">
    <meta name="author" content="Al-Amin Ahmed (Abir)">
    <meta name="description" content="Access denied - Mishusoft Firewall">

    <!--google site verification-->
    <meta name="google-site-verification" content="920ooXJv6lcqtSwPRaqe_b5EJwKNB367u-F7qhfdQGA"/>

    <!--title of html document-->
    <title>Under Maintenance</title>

    <!-- set module-->
    <?php
        // https://visionandvalor.com/
        $module = "framework";
    ?>

    <!--favicons of html document-->
    <!--icon sets of android devices-->
    <link rel="icon" type="image/png" sizes="36x36" href="<?php
        echo loadResourceFile($module, "logos/default/android-icon-36x36.png"); ?>"/>
    <link rel="icon" type="image/png" sizes="48x48" href="<?php
        echo loadResourceFile($module, "logos/default/android-icon-48x48.png"); ?>"/>

    <link rel="icon" type="image/png" sizes="72x72" href="<?php
        echo loadResourceFile($module, "logos/default/android-icon-72x72.png"); ?>"/>
    <link rel="icon" type="image/png" sizes="96x96" href="<?php
        echo loadResourceFile($module, "logos/default/android-icon-96x96.png"); ?>"/>
    <link rel="icon" type="image/png" sizes="144x144" href="<?php
        echo loadResourceFile($module, "logos/default/android-icon-144x144.png"); ?>"/>
    <link rel="icon" type="image/png" sizes="192x192" href="<?php
        echo loadResourceFile($module, "logos/default/android-icon-192x192.png"); ?>"/>

    <!--icon sets of iphone devices-->
    <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-57x57.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-60x60.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-72x72.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-76x76.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-120x120.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-144x144.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-152x152.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-180x180.png"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="<?php
        echo loadResourceFile($module, "logos/default/apple-icon-192x192.png"); ?>"/>

    <!--icon sets of all devices-->
    <link rel="icon" type="image/vnd.microsoft.iconpng" sizes="16x16" href="<?php
        echo loadResourceFile($module, "logos/default/favicon.ico"); ?>"/>
    <link rel="icon" type="image/png" sizes="16x16" href="<?php
        echo loadResourceFile($module, "logos/default/favicon-16x16.png"); ?>"/>
    <link rel="icon" type="image/png" sizes="32x32" href="<?php
        echo loadResourceFile($module, "logos/default/favicon-32x32.png"); ?>"/>
    <link rel="icon" type="image/png" sizes="96x96" href="<?php
        echo loadResourceFile($module, "logos/default/favicon-96x96.png"); ?>"/>

    <!--stylesheets for html document-->
    <style><?php
            echo file_get_contents(dirname(__DIR__) . '/framework/views/css/colors.css'); ?></style>
    <style><?php
            echo file_get_contents(dirname(__DIR__) . '/framework/views/css/embedded.css'); ?></style>

    <style>

        .maintenance-logo {
            margin-bottom: 50px !important;
        }

        /*.message-wait {
            color: var(--gray-200);
        }*/

        .social-media-links {
            display: block;
            text-align: center;
            margin-top: 30px;
        }

        .social-media-links a {
            margin-right: 15px;
        }


        .social-media-links a:last-child {
            margin-right: 0;
        }


        .social-media-links a * {
            display: inline;
        }

        .social-media-links a img {
            width: 30px;
            height: 30px;
        }

    </style>
</head>
<body>
<section class="application">
    <article class="maintenance-content">
        <img class="maintenance-logo" alt="maintenance" src="<?php
            echo loadResourceFile($module, "images/icons/maintenance.png"); ?>" width="96" height="96"/>
        <!--<img class="maintenance-logo" alt="maintenance" src="<?php
            /*echo make(DEFAULT_IMAGE_DIRECTORY_ROOT . "icons/maintenance.png"); */ ?>"/>-->
        <div class="application-content-title text-black">Sorry, we're doing some work on the site</div>
        <div class="application-content-body">
            <div class="message-wait" style="margin-bottom: .5rem;">
                <!--                <div class="message-title">-->
                <!--                    The site is planned for maintenance mode to fix inevitable errors and increase page load and database speed.-->
                <!--                </div>-->
                <div>Thank you for being patient. We are doing some work on the site and will be back shortly.</div>
            </div>
            <div class="social-media-links">
                <a href="mailto:mrabir.ahamed@gmail.com"><img src="<?php
                        echo loadResourceFile($module, "images/icons/envelope-solid.svg"); ?>" alt="mail"/></a>
                <a href="https://facebook.com/mralaminahamed"><img src="<?php
                        echo loadResourceFile($module, "images/icons/social-media/facebook-new.png"); ?>" alt="facebook"/></a>
                <a href="https://twitter.com/mralaminahamed"><img src="<?php
                        echo loadResourceFile($module, "images/icons/social-media/twitter.png"); ?>" alt="twitter"/></a>
                <a href="https://linkedin.com/in/mralaminahamed"><img src="<?php
                        echo loadResourceFile($module, "images/icons/social-media/linkedin.png"); ?>" alt="linkedin"/></a>
            </div>
        </div>
    </article>
</section>
</body>
</html>
