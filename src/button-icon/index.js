/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import addAttributes from './attributes.js';
import addControls from './controls.js';

addFilter(
	'blocks.registerBlockType',
	'blocksmith-button-icon/add-attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'blocksmith-button-icon/add-inspector-controls',
	addControls
);
