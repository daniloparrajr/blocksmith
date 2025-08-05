<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<a href="" class="wp-block-button__link wp-element-button">
		<?php echo wp_kses_post( $content ); ?>
	</a>
</div>
