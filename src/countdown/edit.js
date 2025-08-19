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
	PanelBody,
	DateTimePicker,
	ToggleControl
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
		targetDateTime,
		displayDaysUnit,
		displayHoursUnit
	} = attributes;

	if ( ! targetDateTime ) {
		targetDateTime = new Date( targetDateTime );
	}

	const onSaveTargetDateTime = ( newTargetDateTime ) => {
		setAttributes({ targetDateTime: newTargetDateTime });
	}

	const onChangeDisplayDaysUnit = () => {
		const newDisplayDaysUnit = !displayDaysUnit;
		setAttributes({ displayDaysUnit: newDisplayDaysUnit });

		if ( newDisplayDaysUnit ) {
			setAttributes({ displayHoursUnit: true });
		}
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
					<ToggleControl
						__nextHasNoMarginBottom
						label="Display Days Unit"
						checked={displayDaysUnit}
						onChange={ onChangeDisplayDaysUnit }
					/>
					{!displayDaysUnit ? (
							<ToggleControl
								__nextHasNoMarginBottom
								label="Display Seconds Unit"
								checked={displayHoursUnit}
								onChange={() => setAttributes({ displayHoursUnit: !displayHoursUnit })}
							/>
						) : null}
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<Countdown
					targetDateTime={targetDateTime}
					displayDays={displayDaysUnit}
					displayHours={displayHoursUnit}
				/>
			</div>
		</>
	);
}
