<?php
/**
 * Default Page Template
 *
 * The default page template.
 *
 * @package Themestrap
 * @since 1.0.0
 */

 get_header();

if (
	class_exists( 'WooCommerce' ) && is_woocommerce() ||
	class_exists( 'WooCommerce' ) && is_cart() || 
	class_exists( 'WooCommerce' ) && is_checkout() || 
	class_exists( 'WooCommerce' ) && is_account_page()
) {
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			?>
			<div class="page-header">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<?php the_title('<h1>','</h1>'); ?>
						</div>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="row">
					<div class="col-12">
						<?php the_content(); ?>
					</div>
				</div>
			</div>
			<?php
		endwhile;
	endif;
} else {
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();

			if (!get_field('landing_page')) {
				get_template_part('template-parts/components/content', 'page-header');
			}

			get_template_part( 'template-parts/content', 'flex' );
		endwhile;
	endif;
}

get_footer();
