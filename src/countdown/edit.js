import { __ } from '@wordpress/i18n';

/**
 * Block editor dependencies.
 */
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	useSettings,
	AlignmentToolbar,
	__experimentalFontFamilyControl  as FontFamilyControl
} from '@wordpress/block-editor';


/**
 * Components dependencies.
 */
import {
	PanelBody,
	DateTimePicker,
	ToggleControl,
	TextControl
} from '@wordpress/components';

import {
	addDays
} from 'date-fns';

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
		displayHoursUnit,
		daysLabel,
		hoursLabel,
		minutesLabel,
		secondsLabel,
		showSeparator,
		prependZero,
		countItemFontFamily,
		alignment
	} = attributes;

	if ( ! targetDateTime ) {
		targetDateTime = addDays(new Date(), 1);
	}

	const [ blockLevelFontFamilies ] = useSettings( 'typography.fontFamilies' );

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

	const blockClassNames = [];

	blockClassNames.push( `has-text-align-${ alignment }` );

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(newAlignment) => {
						console.log(newAlignment);
						setAttributes({ alignment: newAlignment });
					}}
				/>
			</BlockControls>
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
					<ToggleControl
						__nextHasNoMarginBottom
						label="Show Separators"
						checked={showSeparator}
						onChange={ () => setAttributes({ showSeparator: !showSeparator }) }
					/>
					<ToggleControl
						__nextHasNoMarginBottom
						label="Prepend Zero"
						checked={prependZero}
						onChange={ () => setAttributes({ prependZero: !prependZero }) }
					/>
				</PanelBody>
				<PanelBody title="Labels" initialOpen={ false }>
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label="Days"
						help="Update the default days label."
						onChange={( newDaysLabel ) => setAttributes({ daysLabel: newDaysLabel })}
						placeholder="Days"
						value={daysLabel}
					/>
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label="Hours"
						help="Update the default hours label."
						onChange={( newHoursLabel ) => setAttributes({ hoursLabel: newHoursLabel })}
						placeholder="Hours"
						value={hoursLabel}
					/>
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label="Minutes"
						help="Update the default minutes label."
						onChange={( newMinutesLabel ) => setAttributes({ minutesLabel: newMinutesLabel })}
						placeholder="Minutes"
						value={minutesLabel}
					/>
					<TextControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						label="Seconds"
						help="Update the default seconds label."
						onChange={( newSecondsLabel ) => setAttributes({ secondsLabel: newSecondsLabel })}
						placeholder="Seconds"
						value={secondsLabel}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody title="Count item" initialOpen={ false }>
					<FontFamilyControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						fontFamilies={blockLevelFontFamilies.theme}
						onChange={(newFontFamily) => setAttributes({ countItemFontFamily: newFontFamily })}
						value={countItemFontFamily}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps( { className: blockClassNames.join( ' ' ) } ) }>
				<Countdown
					targetDateTime={targetDateTime}
					displayDays={displayDaysUnit}
					displayHours={displayHoursUnit}
					labels={{
						days: daysLabel,
						hours: hoursLabel,
						minutes: minutesLabel,
						seconds: secondsLabel,
					}}
					showSeparator={showSeparator}
					prependZero={prependZero}
				/>
			</div>
		</>
	);
}
