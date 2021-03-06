<div class="banner-static <?php echo roots_row_class(); ?>">
<div class="span12 news-banner">

		<?php	// Get First Post in Category. 
		global $post;
		$args = array( 'numberposts' => 1, 'offset'=> 0, 'category' => 1 );  //Post Number, Offset (Exclude post), Category number 
		$myposts = get_posts( $args );
		foreach( $myposts as $post ) :	setup_postdata($post); ?>

       		<div class="news-banner-image">
       		<a href="<?php the_permalink(); ?>">
        	<?php
        	   if (is_page()) {
        		   if (is_mobile()) {
        		   the_post_thumbnail('medium');
        		   } else {
        		   the_post_thumbnail('large');
        			}
        	} ?>
            </a>
       		</div>  
       					
 			<div class="news-banner-text">
 				<div class="news-banner-text-title">
 				<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2></div>
 				<div class="news-banner-text-excerpt"><p><?php the_excerpt(); ?></p></div>
 			</div>
		<?php endforeach; ?>

</div><!-- /.span12 -->
</div><!-- Main banner -->
