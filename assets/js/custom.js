// Hide content until the page is fully loaded
$(document).ready(function() {
    $(window).load(function() {
      // When the page has loaded
      $("body.home").fadeTo("slow", 1);
    });
});



// iPhone pull addressbar
/mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);



// Mobile dropdown menu
$(function() {
$("<select />").appendTo(".nav-hover-box"); 

$("<option />", 
{ 
   "selected": "selected", 
   "value"   : "", 
   "text"    : "Site Menu" // default <option> to display in dropdown 

}).appendTo("nav select"); 

$("nav a").each(function()
{ 
 var el = $(this); 
 $("<option />", { 
	 "value"   : el.attr("href"), 
	 "text"    : el.text() 
 }).appendTo("nav select"); 
});

$("nav select").change(function() 
{ 
  window.location = $(this).find("option:selected").val(); 
}); });


// To Top
		$(document).ready(function() {		    
		  $('.back-top a').smoothScroll({offset: 0});
		});

	
// Tooltip
	  jQuery(document).ready(function () {
	    $("[rel=tooltip]").tooltip();
	  });

	
// Popover
	  jQuery(document).ready(function () {
	    $("[rel=popover]").popover();
	  });



// Carousel	Auto
		jQuery(document).ready(function() {
			 $('#myCarousel-auto').carousel({
				   interval: 8000,
					  cycle: true
			 });
		});
		var $ = jQuery.noConflict();


// Carousel	Auto
		jQuery(document).ready(function() {
			 $('#myCarousel.slide').carousel({
				   interval: 6000,
					  cycle: true
			 });
		});
		var $ = jQuery.noConflict();


// Affix
		$(function(){
		$('.bs-docs-sidenav').affix({
			offset: {
			top: 120, 
			bottom: 1500
				}
			})
		});
		
		
// Top menu Affix
		$(function(){
		$('.navbar-fixed-top').affix({
			offset: {
			top: 20, 
			bottom:0
				}
			})
		});





//Convert Address tags into a map link
	jQuery(document).ready(function () {
        $('address').each(function () {
            var link = "<a href='http://maps.apple.com/?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
            $(this).html(link);
        });
    });


//Convert Address into an embedded map
    jQuery(document).ready(function(){
      $(".mapaddress").each(function(){                        
        var embed ="<iframe width='425' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
          $(this).html(embed);                               
       });
    });
		


// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".nav-hover-box li.dropdown").hover(
         function() { $('ul', this).fadeIn("fast");
        },
        function() { $('ul', this).fadeOut("fast");
    });
});



// Crawler control
jQuery(document).ready(function() {
		marqueeInit({
		uniqueid: 'scrollingBanner',
		style: {
		'padding': '2px',
		'width': '100%',
		'height': '140px'
		},
		inc: 5, //speed - pixel increment for each iteration of this marquee's movement
		mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
		moveatleast: 2,
		neutral: 150,
		savedirection: true,
		random: true
		});
});
