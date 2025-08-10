<?php
/**
 * Register custom REST API endpoint for Blocksmith icons.
 */
add_action( 'rest_api_init', function () {

	// Collection endpoint: /wp/v2/blocksmith/icons
	register_rest_route( 'wp/v2', '/blocksmith/icons', array(
		'methods'  => 'GET',
		'callback' => 'blocksmith_get_all_icons',
		'permission_callback' => '__return_true', // Public access
	) );

	// Single endpoint: /wp/v2/blocksmith/icons/{slug}
	register_rest_route( 'wp/v2', '/blocksmith/icons/(?P<slug>[a-z0-9\-]+)', array(
		'methods'  => 'GET',
		'callback' => 'blocksmith_get_icon',
		'permission_callback' => '__return_true', // Public access
		'args' => array(
			'slug' => array(
				'required' => true,
				'type'     => 'string',
			),
		),
	) );
});

/**
 * Return all icons.
 *
 * @return array
 */
function blocksmith_get_all_icons() {
	// In real-world use, load these from DB, files, or theme directory
	$icons = array(
		array(
			'name' => 'Star',
			'slug' => 'star',
			'svg'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.214 1.179-5.941 5.787 1.404 8.183L12 18.897l-7.345 3.87 1.404-8.183L.118 9.197l8.214-1.179z"/></svg>',
		),
		array(
			'name' => 'Heart',
			'slug' => 'heart',
			'svg'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.42 3
				7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81
				14.76 3 16.5 3 19.58 3 22 5.41
				22 8.5c0 3.78-3.4 6.86-8.55
				11.54L12 21.35z"/></svg>',
		),
	);

	return $icons;
}

/**
 * Return a single icon by slug.
 *
 * @param WP_REST_Request $request
 * @return array|WP_Error
 */
function blocksmith_get_icon( $request ) {
	$slug = $request->get_param( 'slug' );
	$icons = blocksmith_get_all_icons();

	foreach ( $icons as $icon ) {
		if ( $icon['slug'] === $slug ) {
			return $icon;
		}
	}

	return new WP_Error( 'icon_not_found', 'Icon not found', array( 'status' => 404 ) );
}
