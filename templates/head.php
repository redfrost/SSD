<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
  <meta charset="utf-8">

<!--
|~)[~|~\|~|~)/~\(~~|~
|~\[_|_/|~|~\\_/_) | 
When you look into an abyss, the abyss also looks into you. 
-->   

<!-- Site info -->  
    <title><?php wp_title('|', true, 'right'); ?></title>   
    <meta property="og:title" content="<?php echo get_the_title(); ?>" />
    <meta property="og:url" content="<?php echo home_url(); ?>" />
    <meta property="og:description" name="description" content="<?php echo SITE_DESC; ?>" />
    <meta property="og:type" content="website" />
    
    <meta name="author" content="<?php echo SITE_AUTHOR; ?>">
    <meta name="designer" content="<?php echo SITE_PUBLISHER; ?>">
    <meta name="dcterms.rightsHolder" content="(c) <?php wp_title('|', true, 'right'); ?>">
    <meta name="keywords" content="<?php echo SITE_KEYWORDS; ?>"> 
    

    <?php if (FB_APPID) : ?>
    <meta property="fb:app_id" content="<?php echo FB_APPID; ?>" />
    <?php endif; ?>

<!-- Favicon & Touch icon -->
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/assets/img/apple-touch-icon.png"><!-- Matt -->  
	<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/thumbnail.png" />		

<!-- For Mobile View Responsive On/Off -->
    <?php if (current_theme_supports('bootstrap-responsive')) { ?>   
    <meta name="viewport" content="width=device-width">
    <? } else { ?><meta name="viewport" content="width=<?php echo STATIC_WIDTH_VALUE; ?>" />
    <?php } ?>

<!-- Scripts -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/<?php echo JQUERY_VERSION; ?>/jquery.min.js"></script>
  
<!-- Custom -->  
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css">

<!-- Typekit -->
    <?php if (TYPEKIT_ID) : ?>
	<script type="text/javascript" src="//use.typekit.net/<?php echo TYPEKIT_ID; ?>.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <?php endif; ?>

    <?php wp_head(); ?>
    <link rel="alternate" type="application/rss+xml" title="<?php echo get_bloginfo('name'); ?> Feed" href="<?php echo home_url(); ?>/feed/">

    <?php if (current_theme_supports('bootstrap-responsive')) { ?>   
    <!-- Responsive layout width -->
    <style type="text/css"> .container-fluid { margin: auto; max-width: <?php echo WIDTH_VALUE; ?>px; } </style>   
    <?php } ?>

</head>


<!-- Body starts -->
<body id="top" <?php body_class(); ?> data-spy="">


  <!-- Browser Warning -->  
  <!--[if lt IE 9]><div class="alert">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a>.</div><![endif]-->


  <!-- Menu changer -->
  <?php
    do_action('get_header');
    if (current_theme_supports('bootstrap-top-navbar')) {
      get_template_part('templates/header-top-navbar');
    } else {
      get_template_part('templates/header');
    }
  ?>


  
<div id="master-wrap">