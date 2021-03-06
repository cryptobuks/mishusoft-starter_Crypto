<!DOCTYPE html>
<html lang="en">
<head>
    <!--meta tags of html document-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="blocked, banned, denied">
    <meta name="company" content="Mishusoft Systems Incorporated">
    <meta name="author" content="Mr Al-Amin Ahmed (Abir)">
    <meta name="description" content="Access denied - Mishusoft Firewall">

    <!--google site verification-->
    <meta name="google-site-verification" content="920ooXJv6lcqtSwPRaqe_b5EJwKNB367u-F7qhfdQGA" />

    <!--title of html document-->
    <title>Under Maintenance</title>

    <!--favicons of html document-->
    <!--icon sets of android devices-->
    <link rel="icon" type="image/png" sizes="36x36" href="<?php echo loadEmbeddedImage("001-android-icon-36x36"); ?>"/>
    <link rel="icon" type="image/png" sizes="48x48" href="<?php echo loadEmbeddedImage("002-android-icon-48x48"); ?>"/>
    <link rel="icon" type="image/png" sizes="72x72" href="<?php echo loadEmbeddedImage("003-android-icon-72x72"); ?>"/>
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo loadEmbeddedImage("004-android-icon-96x96"); ?>"/>
    <link rel="icon" type="image/png" sizes="144x144" href="<?php echo loadEmbeddedImage("005-android-icon-144x144"); ?>"/>
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo loadEmbeddedImage("006-android-icon-192x192"); ?>"/>

    <!--icon sets of iphone devices-->
    <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="<?php echo loadEmbeddedImage("007-apple-icon-57x57"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="<?php echo loadEmbeddedImage("008-apple-icon-60x60"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="<?php echo loadEmbeddedImage("009-apple-icon-72x72"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="<?php echo loadEmbeddedImage("010-apple-icon-76x76"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="<?php echo loadEmbeddedImage("011-apple-icon-120x120"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="<?php echo loadEmbeddedImage("012-apple-icon-144x144"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="<?php echo loadEmbeddedImage("013-apple-icon-152x152"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="<?php echo loadEmbeddedImage("014-apple-icon-180x180"); ?>"/>
    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="<?php echo loadEmbeddedImage("015-apple-icon-192x192"); ?>"/>

    <!--icon sets of all devices-->
    <link rel="icon" type="image/vnd.microsoft.iconpng" sizes="16x16" href="<?php echo loadEmbeddedImage("016-vnd.microsoft.iconpng-16x16"); ?>"/>
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo loadEmbeddedImage("017-favicon-16x16"); ?>"/>
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo loadEmbeddedImage("018-favicon-32x32"); ?>"/>
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo loadEmbeddedImage("019-favicon-96x96"); ?>"/>

    <!--stylesheets for html document-->
    <style><?php echo file_get_contents(dirname(__DIR__).'/framework/views/css/colors.css'); ?></style>
    <style><?php echo file_get_contents(dirname(__DIR__).'/framework/views/css/embedded.css'); ?></style>
</head>
<body>
<section class="application">
    <article class="maintenance-content">
        <img class="maintenance-logo" alt="maintenance" src="<?php echo loadResourceFile("framework","images/icons/maintenance.png"); ?>" width="96" height="96"/>
        <div class="application-content-title text-black">Under Maintenance</div>
        <div class="application-content-body">
            <div class="message-lite" style="margin-bottom: .5rem;">
                <div class="message-title">
                    The site is planned for maintenance mode to fix inevitable errors and increase page load and database speed.
                </div>
                <div>We'll be back in a few hours. Thank you for your patience.</div>
            </div>
            <div class="message-lite">
                <div>Contact us in case of any need: <a href="mailto:mrabir.ahamed@gmail.com">Support center</a> </div>
            </div>
        </div>
    </article>
</section>
</body>
</html>


<?php exit(0); ?>
