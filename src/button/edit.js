/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	BlockControls
} from '@wordpress/block-editor';

import {
	ToolbarButton,
} from '@wordpress/components';

import { link, linkOff } from '@wordpress/icons';

import { displayShortcut } from '@wordpress/keycodes';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { content, url } = attributes;

	const isURLSet = !! url;


	const blockProps = useBlockProps();

	const buttonAllowedFormats = [
		'core/bold',
		'core/italic',
		'core/strikethrough',
		'core/underline',
		'core/text-color',
		'core/keyboard-shortcut',
		'core/image',
	];

	const onSaveContent = ( content ) => {
		return setAttributes( { content } );
	}

	const unlink = ()=>  {
		setAttributes( {
			url: "",
			linkTarget: "",
			rel: "",
		} );
	}

	const startEditing = ( event ) => {
		event.preventDefault();
	}

	return (
		<>
			<BlockControls group="block">
				<ToolbarButton
					name="link"
					icon={ ! isURLSet ? link : linkOff }
					title={ ! isURLSet ? __( 'Link' ) : __( 'Unlink' ) }
					shortcut={
						! isURLSet
							? displayShortcut.primary( 'k' )
							: displayShortcut.primaryShift( 'k' )
					}
					onClick={ ! isURLSet ? startEditing : unlink }
					isActive={ isURLSet }
				/>
			</BlockControls>
			<div { ...blockProps }>
				<RichText
					tagName="a"
					className="wp-block-button__link wp-element-button"
					value={ content }
					allowedFormats={ buttonAllowedFormats }
					placeholder={ __( 'Add Text...' ) }
					onChange={ onSaveContent }
				/>
			</div>
		</>
	);
}
