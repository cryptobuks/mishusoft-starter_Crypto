<?php

$imageList = [];

$imageMimeType = 'image/png';

$rootMediaDirectory = sprintf(
    '%1$s%6$s%2$s%6$s%3$s%6$s%4$s%6$s%5$s%6$s',
    dirname(__DIR__),
    'app',
    'media',
    'logos',
    'default',
    DIRECTORY_SEPARATOR
);
$rootImagesDirectory = sprintf(
    '%1$s%4$s%2$s%4$s%3$s%4$s',
    __DIR__,
    'views',
    'images',
    DIRECTORY_SEPARATOR
);
$rootCssDirectory = sprintf(
    '%1$s%5$s%2$s%5$s%3$s%5$s%4$s%5$s',
    dirname(__DIR__),
    'app',
    'assets',
    'css',
    DIRECTORY_SEPARATOR
);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="blocked, banned, denied">
    <meta name="company" content="Mishusoft Systems Incorporated">
    <meta name="author" content="Mr Al-Amin Ahmed (Abir)">
    <meta name="description" content="Access denied - Mishusoft Firewall">
    <title>Under Maintenance</title>
    <link rel="icon" type="image/png" sizes="36x36"
    href="<?php echo make($imageMimeType, $rootMediaDirectory . 'android-icon-36x36.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="48x48"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'android-icon-48x48.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="72x72"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'android-icon-72x72.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="96x96"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'android-icon-96x96.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="114x114"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'android-icon-144x144.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="192x192"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'android-icon-192x192.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="57x57"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-57x57.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="60x60"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-60x60.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="72x72"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-72x72.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="76x76"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-76x76.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="120x120"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-120x120.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="144x144"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-144x144.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="152x152"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-152x152.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="180x180"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon-180x180.png'); ?>"
    />
    <link rel="apple-touch-icon" type="image/png" sizes="192x192"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'apple-icon.png'); ?>"
    />
    <link rel="icon" type="image/vnd.microsoft.iconpng" sizes="16x16"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'favicon.ico'); ?>"
    />
    <link rel="icon" type="image/png" sizes="16x16"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'favicon-16x16.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="32x32"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'favicon-32x32.png'); ?>"
    />
    <link rel="icon" type="image/png" sizes="96x96"
          href="<?php echo make($imageMimeType, $rootMediaDirectory . 'favicon-96x96.png'); ?>"
    />

    <style>
        <?php echo fileContent($rootCssDirectory . 'embedded.css'); ?>
    </style>
</head>
<body>
<section class="application">
    <article class="maintenance-content">
        <img class="maintenance-logo"
             alt="maintenance"
             src="<?php echo make($imageMimeType, $rootImagesDirectory . 'icons/maintenance.png'); ?>"
        />
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