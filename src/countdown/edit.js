/**
 * Block editor dependencies.
 */
import {
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';

/**
 * Components dependencies.
 */
import {
	DateTimePicker,
	PanelBody
} from '@wordpress/components';

/**
 * Internal dependencies.
 */
import Countdown from './components/Countdown';

import './editor.scss';

export default function Edit( props ) {
	const {
		attributes,
		setAttributes
	} = props;

	let {
		targetDateTime
	} = attributes;

	if ( ! targetDateTime ) {
		targetDateTime = new Date( targetDateTime );
	}
	const onSaveTargetDateTime = ( newTargetDateTime ) => {
		setAttributes({ targetDateTime: newTargetDateTime });
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
				<Countdown targetDateTime={targetDateTime}  />
			</div>
		</>
	);
}
