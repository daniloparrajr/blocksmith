<?php
/**
 * Plugin Name:       Blocksmith
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocksmith
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function blocksmith_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
}
add_action( 'init', 'blocksmith_block_init' );


/**
 * Enqueue Editor scripts and styles.
 */
function blocksmith_block_editor_assets(): void {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/button-icon.asset.php';

	wp_enqueue_script(
		'blocksmith-button-icon',
		plugin_dir_url( __FILE__ ) . 'build/button-icon.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_enqueue_style(
		'enable-button-icons-editor-styles',
		plugin_dir_url( __FILE__ ) . 'build/button-icon-editor.css'
	);

	$store_asset_file = include plugin_dir_path( __FILE__ ) . 'build/store.asset.php';

	wp_enqueue_script(
		'blocksmith-store',
		plugin_dir_url( __FILE__ ) . 'build/store.js',
		$store_asset_file['dependencies'],
		$store_asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'blocksmith_block_editor_assets' );
