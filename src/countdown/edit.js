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
	InspectorControls
} from '@wordpress/block-editor';

import {
	PanelBody,
	DateTimePicker
} from '@wordpress/components';

import {
	useState
} from '@wordpress/element';

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
		setAttributes
	} = props;

	let {
		targetDateTime
	} = attributes;

	if ( ! targetDateTime ) {
		targetDateTime = new Date();
	} else {
		targetDateTime = new Date( targetDateTime );
	}

	const [ days, setDays ] = useState( 0 );
	const [ hours, setHours ] = useState( 0 );
	const [ minutes, setMinutes ] = useState( 0 );
	const [ seconds, setSeconds ] = useState( 0 );

	const onSaveTargetDateTime = ( newTargetDateTime ) => {
		setAttributes({ targetDateTime: newTargetDateTime });

		const currentDate = new Date();

		const diffMs = new Date( newTargetDateTime ) - currentDate;

		const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
		const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
		const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);

		setDays( diffDays );
		setHours( diffHours );
		setMinutes( diffMinutes );

		console.log(`${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes`);
	}

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<DateTimePicker
						currentDate={ targetDateTime }
						onChange={ onSaveTargetDateTime }
						is12Hour={ true }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div>
					{ days }
					{ hours }
					{ minutes }
					{ seconds }
				</div>
			</div>
		</>
	);
}
