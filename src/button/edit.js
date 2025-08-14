/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { NEW_TAB_TARGET, NOFOLLOW_REL } from './constants';
import { getUpdatedLinkAttributes } from './get-updated-link-attributes';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentControl,
	LinkControl,
	InspectorControls,
	__experimentalUseColorProps as useColorProps,
	getTypographyClassesAndStyles as useTypographyProps,
	__experimentalGetSpacingClassesAndStyles as useSpacingProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import {
	ToolbarButton,
	Popover
} from '@wordpress/components';

import {
	useState,
	useMemo,
	useRef,
	createInterpolateElement
} from '@wordpress/element';

import { link, linkOff } from '@wordpress/icons';

import { displayShortcut } from '@wordpress/keycodes';

import { useSelect } from '@wordpress/data';

import {
	getBlockBindingsSource,
} from '@wordpress/blocks';

import {
	useMergeRefs
} from '@wordpress/compose';

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
export default function Edit( props ) {

	const {
		attributes,
		setAttributes,
		isSelected,
		context,
		clientId
	} = props;

	const {
		content,
		url,
		rel,
		linkTarget,
		textAlign,
		metadata
	} = attributes;

	const colorProps = useColorProps( attributes );
	const typographyProps = useTypographyProps( attributes );
	const spacingProps = useSpacingProps( attributes );

	const isURLSet = !! url;
	const [ isEditingURL, setIsEditingURL ] = useState( false );
	const opensInNewTab = linkTarget === NEW_TAB_TARGET;
	const nofollow = !! rel?.includes( NOFOLLOW_REL );

	// Memoize link value to avoid overriding the LinkControl's internal state.
	// This is a temporary fix. See https://github.com/WordPress/gutenberg/issues/51256.
	const linkValue = useMemo(
		() => ( { url, opensInNewTab, nofollow } ),
		[ url, opensInNewTab, nofollow ]
	);

	const ref = useRef();
	const richTextRef = useRef();

	// Use internal state instead of a ref to make sure that the component
	// re-renders when the popover's anchor updates.
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );

	const blockProps = useBlockProps( {
		ref: useMergeRefs( [ setPopoverAnchor, ref ] ),
	} );

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
		setIsEditingURL( false );
	}

	const startEditing = ( event ) => {
		event.preventDefault();
		setIsEditingURL( true );
	}

	const LINK_SETTINGS = [
		...LinkControl.DEFAULT_LINK_SETTINGS,
		{
			id: 'nofollow',
			title: __( 'Mark as nofollow' ),
		},
	];

	const {
		createPageEntity,
		userCanCreatePages,
		lockUrlControls = false,
	} = useSelect(
		( select ) => {
			if ( ! isSelected ) {
				return {};
			}

			const _settings = select( blockEditorStore ).getSettings();

			const blockBindingsSource = getBlockBindingsSource(
				metadata?.bindings?.url?.source
			);

			return {
				createPageEntity: _settings.__experimentalCreatePageEntity,
				userCanCreatePages: _settings.__experimentalUserCanCreatePages,
				lockUrlControls:
					!! metadata?.bindings?.url &&
					! blockBindingsSource?.canUserEditValue?.( {
						select,
						context,
						args: metadata?.bindings?.url?.args,
					} ),
			};
		},
		[ context, isSelected, metadata?.bindings?.url ]
	);

	const createButtonText = ( searchTerm ) => {
		return createInterpolateElement(
			sprintf(
				/* translators: %s: search term. */
				__( 'Create page: <mark>%s</mark>' ),
				searchTerm
			),
			{ mark: <mark /> }
		);
	}

	async function handleCreate( pageTitle ) {
		const page = await createPageEntity( {
			title: pageTitle,
			status: 'draft',
		} );

		return {
			id: page.id,
			type: page.type,
			title: page.title.rendered,
			url: page.link,
			kind: 'post-type',
		};
	}

	const onChangeTextColor = ( newTextColor ) => {
		setAttributes( { textColor: newTextColor } );
	}

	const onChangeBackgroundColor = ( newBackgroundColor ) => {
		setAttributes( { backgroundColor: newBackgroundColor } );
	}

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
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
			{ isSelected &&
				( isEditingURL || isURLSet ) && (
					<Popover
						placement="bottom"
						onClose={ () => {
							setIsEditingURL( false );
							richTextRef.current?.focus();
						} }
						anchor={ popoverAnchor }
						focusOnMount={ isEditingURL ? 'firstElement' : false }
						__unstableSlotName="__unstable-block-tools-after"
						shift
					>
						<LinkControl
							key={clientId}
							value={ linkValue }
							onChange={ ( {
								 url: newURL,
								 opensInNewTab: newOpensInNewTab,
								 nofollow: newNofollow,
								} ) =>
								setAttributes(
									getUpdatedLinkAttributes( {
										rel,
										url: newURL,
										opensInNewTab: newOpensInNewTab,
										nofollow: newNofollow,
									} )
								)
							}
							onRemove={ () => {
								unlink();
								richTextRef.current?.focus();
							} }
							forceIsEditingLink={ isEditingURL }
							settings={ LINK_SETTINGS }
							createSuggestion={
								createPageEntity && handleCreate
							}
							withCreateSuggestion={ userCanCreatePages }
							createSuggestionButtonText={ createButtonText }
						/>
					</Popover>
				) }
			<InspectorControls group="styles">
			</InspectorControls>
			<div { ...blockProps }>
				<RichText
					ref={ richTextRef }
					tagName="a"
					className={ clsx(
						'wp-block-button__link',
						'wp-element-button',
						colorProps.className,
						typographyProps.className,
					) }
					style={ {
						...colorProps.style,
						...typographyProps.style,
						...spacingProps.style,
					} }
					value={ content }
					allowedFormats={ buttonAllowedFormats }
					placeholder={ __( 'Add Text...' ) }
					onChange={ onSaveContent }
				/>
			</div>
		</>
	);
}
