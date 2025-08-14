<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/accordion',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A collapsible content block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/button',
		'version' => '0.1.0',
		'title' => 'Button',
		'category' => 'design',
		'icon' => 'button',
		'description' => 'A simple but essential component for adding visual flair and functionality.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'__experimentalSkipSerialization' => true,
				'gradients' => true,
				'__experimentalDefaultControls' => array(
					'background' => true,
					'text' => true
				)
			),
			'typography' => array(
				'__experimentalSkipSerialization' => array(
					'fontSize',
					'lineHeight',
					'fontFamily',
					'fontWeight',
					'fontStyle',
					'textTransform',
					'textDecoration',
					'letterSpacing'
				),
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalWritingMode' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'spacing' => array(
				'__experimentalSkipSerialization' => true,
				'padding' => array(
					'horizontal',
					'vertical'
				),
				'__experimentalDefaultControls' => array(
					'padding' => true
				)
			)
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html'
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => ''
			),
			'rel' => array(
				'type' => 'string',
				'default' => ''
			),
			'textAlign' => array(
				'type' => 'string'
			)
		),
		'selectors' => array(
			'root' => '.wp-block-blocksmith-button .wp-block-button__link',
			'color' => array(
				'text' => '.wp-block-blocksmith-button .wp-block-button__link'
			),
			'typography' => array(
				'writingMode' => '.wp-block-blocksmith-button'
			)
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'buttons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/buttons',
		'version' => '0.1.0',
		'title' => 'Buttons',
		'category' => 'widgets',
		'icon' => 'button',
		'allowedBlocks' => array(
			'blocksmith/button'
		),
		'description' => 'A simple but essential component for adding visual flair and functionality.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'countdown-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/countdown',
		'version' => '0.1.0',
		'title' => 'Countdown',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A dynamic block that creates urgency.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/gallery',
		'version' => '0.1.0',
		'title' => 'Gallery',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A visually rich component for displaying images.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'modal' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/modal',
		'version' => '0.1.0',
		'title' => 'Modal',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'An interactive pop-up window.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'pricing-table' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/pricing-table',
		'version' => '0.1.0',
		'title' => 'Pricing table',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A complex layout block for displaying service plans.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'progress-bar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/progress-bar',
		'version' => '0.1.0',
		'title' => 'Progress Bar',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A visual indicator of progress.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/slider',
		'version' => '0.1.0',
		'title' => 'Slider',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Displays a series of images, text, videos, or other content in a rotating or "sliding" format within a single space.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'tabs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/tabs',
		'version' => '0.1.0',
		'title' => 'Tabs',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A space-saving component for organizing content.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'team' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocksmith/team',
		'version' => '0.1.0',
		'title' => 'Team',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A structured layout for showcasing team members.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'blocksmith',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
