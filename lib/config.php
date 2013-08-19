<?php

// Enable theme features


// RELATIVE URL
add_theme_support('root-relative-urls');   // Enable relative URLs
add_theme_support('rewrites');             // Enable URL rewrites


// THEME FEATURES
//add_theme_support('bootstrap-top-navbar'); // Enable Bootstrap's top navbar
add_theme_support('bootstrap-responsive');   // On/Off Responsive Mobile view
//add_theme_support('header-searchform');      // Display search form in header
//add_theme_support('postbox');              // Display list in box style (4 boxes)
//add_theme_support('bootstrap-gallery');      // Enable Bootstrap's thumbnails component on [gallery]
add_theme_support('nice-search');            // Enable /?s= to /search/ redirect
add_theme_support('breadcrumb');           // On/Off Breadcrumb
add_theme_support('pagetitle');              // On/Off Page title
//add_theme_support('bootstrap-test');         // On/Off Test mode



// CONFIGURATION
if (!isset($content_width)) { $content_width = 960; } //Default Bootstrap container width.
define('WIDTH_VALUE', '960'); // RESPONSIVE LAYOUT MAX CONTENT WIDTH VALUE 
define('STATIC_WIDTH_VALUE', '1050'); // STATIC LAYOUT MAX WIDTH VALUE FOR MOBILE (default = 1024)
define('JQUERY_VERSION', '1.8.3'); // Set jQuery CDN version
define('FB_APPID', '');  // Facebook App ID
define('GOOGLE_ANALYTICS_ID', 'UA-34388684-1'); // UA-XXXXX-Y
define('TYPEKIT_ID', 'ieg5weq'); // ADOBE TYPEKIT ID
define('POST_EXCERPT_LENGTH', 40);
define('LAYOUT_STYLE', 2);
// CHOOSE LAYOUT STYLE: 
// 1.DEFAULT 
// 2.LEFT SIDEBAR 
// 3.SINGLE COLUMN 
// 4.THREE COLUMNS



// SITE INFORMATION
define('SITE_DESC', 'Sydney Smiles Dental - Chatswood Cosmetic and Implant Dentists');  // Website description 
define('SITE_AUTHOR', 'Redfrost');  // Site owner
define('SITE_PUBLISHER', 'Redfrost');  // Site developer or publisher
define('SITE_KEYWORDS', 'change my smile, new teeth, deals, groupon, living social, cudo, redmyre dental clinic, dental lounge, dental implant specialist, appledental, drfinkelsteindentist, hillsdentaldesign, painfreedentist,dentartistry, thaiimplantcenter, overseas dental implants, cosmeticdentistaustralia,smileconcepts, abcdental,abettersmile, abetterdeal, abettersmile,cosmeticdentalcare, artarmonfinedental, dental corporation, Smilecare family dentists, budget dental, budget dentist, smile.com.au, dental warranty, crown guarantee, dental guarantee, chatswood dental centre, 7 day emergency dentist, cheap dentist, dentist sydney, sydney dentist, north sydney dentist, emergency dentist, cheap implants, best implant deal, create, simple dentistry, simple dental implants, creation,pleasing,capable,skillful,style,stylish,bridal,wedding,beautiful,smile,appearance,dental,wishes,crown,crowns,bridge,bridges,implant,dental implant,desired,fabulous,happy,experienced,pretty,perfect,your smile,bonus,discount,specials,deal,dental deal,promotion,dental promotions,reshape,recontour,happy,good looking,improvement,gentle,satisfied,lovely,best dentist,find,cheap dentist,establish,dentist,do it now, different,can be done,change, new teeth,brand new,tired of my teeth, broken teeth, sexy, fresh, new, clean, white, convienient location, two locations');  //Search keywords



// CUSTOM LOGO
add_theme_support('custom_logo');  // Add a custom image logo
define('LOGO_PATH', 'http://sydneysmilesdental.com.au/media/Logo.jpg');  // Set image URL
define('LOGO_WIDTH', '310'); // Set 1/2 size of image width for Retina display


// main classes
function roots_main_class() {
  if (roots_display_sidebar()) {
    // Classes on pages with the sidebar
    $class = 'span8';
  } else {
    // Classes on full width pages
    $class = 'span12';
  }

  return $class;
}

/**
 * .sidebar classes
 */
function roots_sidebar_class() {
  return 'span4';
}


// Responsive-Max Class change

function roots_container_class() {
  if (current_theme_supports('bootstrap-responsive')) {
    $class = 'container-fluid';
  } else {
    $class = 'container';
  }
  return $class;
}
function roots_row_class() {
  if (current_theme_supports('bootstrap-responsive')) {
    $class = 'row-fluid';
  } else {
    $class = 'row';
  }
  return $class;
}



// Define which pages shouldn't have the sidebar
function roots_display_sidebar() {
  $sidebar_config = new Roots_Sidebar(
    
  // Conditional tag checks
    array(
      'is_404'
    ),
    
  //Page template checks (via is_page_template())
    array(
      'template-fullwidth.php',
      'template-featured.php'
    )
  );

  return apply_filters('roots_display_sidebar', $sidebar_config->display);
}


