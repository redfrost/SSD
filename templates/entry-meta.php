<p class="byline author vcard"><span><?php echo __('By', 'roots'); ?></span>
    <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author" class="fn">
    <?php echo get_the_author(); ?>
    </a>
</p>

<time class="updated" datetime="<?php echo get_the_time('c'); ?>" pubdate>
<p><span>Published on</span> <?php echo get_the_date('F jS, Y'); ?> in <?php the_category(', ') ?></p>
</time>

<p class="comment-number"><?php comments_number('No Comments', '1 Comment', '% Comments' ); ?></p>
