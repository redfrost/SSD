<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <header class="post-header">
      <h1 class="entry-title"><?php the_title(); ?></h1>

        <?php // Subtitle. Use [post_subtitle] in custom field.
        if ( get_post_meta($post->ID, 'post_subtitle', true) ) {
        	echo '<small>';
            echo do_shortcode(get_post_meta($post->ID, 'post_subtitle', $single = true));
            echo '</small>';
            }
        ?>

      <div class="meta-data">
      <?php get_template_part('templates/entry-meta'); ?>
      </div>
    </header>
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
    <footer>
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
      <?php the_tags('<ul class="entry-tags"><li>','</li><li>','</li></ul>'); ?>
    </footer>
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>

			<!-- Navigation -->
			<nav id="nav-single">
			<span class="nav-previous"><?php previous_post_link( '%link', __( '<span class="meta-nav">&larr;</span>' ) . ' %title' ); ?></span>
			
			<span class="nav-next"><?php next_post_link( '%link', '%title ' . __( '<span class="meta-nav">&rarr;</span>' ) ); ?></span>
			</nav><!-- #nav-single -->
