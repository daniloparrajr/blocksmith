/**
 * Components dependencies.
 */
import {
	Button,
	Dropdown,
	ColorIndicator,
	ColorPalette
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { reset as resetIcon } from '@wordpress/icons';

/**
 * Block editor dependencies.
 */
import {
	useSettings,
} from '@wordpress/block-editor';

import './style.scss';

const ColorPickerControl = ({ label, value, onChange, onClose }) => {
	const [ blockThemeColors ] = useSettings('color.palette');

	const onReset = () => {
		onChange();
	};

	return (
		<Dropdown
			focusOnMount
			className="bs-color-picker-control"
			contentClassName={"bs-color-picker-control__content"}
			popoverProps={{
				"offset": 36,
				"placement": "left-start",
				"shift": true,
				"onClose": onClose
			}}
			renderToggle={ ( { isOpen, onToggle } ) => (
				<>
					<Button
						__next40pxDefaultSize
						onClick={ onToggle }
						aria-expanded={ isOpen }
						className="bs-color-picker-control__button"
					>
						<ColorIndicator colorValue={value} />
						<span className="bs-color-picker-control__button-text">{label}</span>
					</Button>
					{ value ? (
						<Button
							__next40pxDefaultSize
							onClick={ onReset }
							size="small"
							icon={ resetIcon }
							aria-label="Reset"
							label="Reset"
							className="bs-color-picker-control__button-reset"
						/>
					) : null }
				</>
			) }
			renderContent={ () => (
				<ColorPalette
					__experimentalIsRenderedInSidebar
					colors={ blockThemeColors }
					value={ value }
					onChange={ onChange }
				/>
			) }
		/>
	);
};

export default ColorPickerControl;
