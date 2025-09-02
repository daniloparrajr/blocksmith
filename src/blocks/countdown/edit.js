import { __ } from '@wordpress/i18n';

/**
 * Block editor dependencies.
 */
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	useSettings,
	AlignmentToolbar
} from '@wordpress/block-editor';

import {
	FontFamilyControl,
	DateTimePickerControl
} from '../../controls';

/**
 * Components dependencies.
 */
import {
	PanelBody,
	DateTimePicker,
	ToggleControl,
	TextControl,
	FontSizePicker
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
		alignment,
		labelFontFamily,
		labelFontSize
	} = attributes;

	if ( ! targetDateTime ) {
		targetDateTime = addDays(new Date(), 1);
	}

	const [ blockLevelFontFamilies ] = useSettings( 'typography.fontFamilies' );
	let [ fontSizes ] = useSettings( 'typography.fontSizes' );
	const [ fontSizeUnits ] = useSettings( 'typography.units' );

	const getFontSizeValue = ( fontSizeValue ) => {
		const preset = fontSizes.find( ( font ) => font.slug === fontSizeValue );
		return preset ? preset.size : fontSizeValue;
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

	const blockClassNames = [];

	blockClassNames.push( `has-text-align-${ alignment }` );

	/**
	 * Function to disable past dates.
	 * It's passed to the isInvalidDate prop of the DateTimePicker.
	 *
	 * @param {Date} date The date to check.
	 * @return {boolean} True if the date is in the past, false otherwise.
	 */
	const isInvalidDate = ( date ) => {
		return date < new Date();
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(newAlignment) => {
						setAttributes({ alignment: newAlignment });
					}}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<DateTimePickerControl
						label={ __( 'Target Date & Time' ) }
						value={ targetDateTime }
						onChange={ onSaveTargetDateTime }
						is12Hour={ true }
						isInvalidDate={ isInvalidDate }
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
				<PanelBody title="Labels" initialOpen={ false }>
					<FontFamilyControl
						label={__("Font Family", "blocksmith")}
						fontFamilies={blockLevelFontFamilies.theme}
						onChange={(newFontFamily) => {
							setAttributes({
								labelFontFamily: 'default' === newFontFamily.selectedItem.key
								? newFontFamily.selectedItem.key : undefined
							});
						}}
						value={labelFontFamily}
					/>
					<FontSizePicker
						__next40pxDefaultSize
						fallbackFontSize={0}
						units={fontSizeUnits}
						fontSizes={fontSizes}
						value={getFontSizeValue(labelFontSize)}
						onChange={(newFontSize, selectedFontsize) => {
							setAttributes({
								labelFontSize: selectedFontsize
									? selectedFontsize.slug : newFontSize
							});
						}}
					/>
					<div style={{marginBottom: '200px'}}></div>
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
