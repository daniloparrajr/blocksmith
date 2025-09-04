/**
 * Components dependencies.
 */
import {
	Button,
	Dropdown,
	ColorIndicator,
	ColorPalette,
	BaseControl,
	useBaseControlProps
} from '@wordpress/components';

/**
 * Block editor dependencies.
 */
import {
	useSettings,
} from '@wordpress/block-editor';

const ColorPickerControl = ({ value, onChange, onClose, ...baseProps }) => {
	const { baseControlProps, controlProps } = useBaseControlProps( baseProps );
	const [ blockThemeColors ] = useSettings('color.palette');
	return (
		<BaseControl
			__nextHasNoMarginBottom
			{...baseControlProps}
		>
			<Dropdown
				focusOnMount
				popoverProps={{
					"offset": 36,
					"placement": "left-start",
					"shift": true,
					"onClose": onClose
				}}
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Button
						onClick={ onToggle }
						aria-expanded={ isOpen }
						{...controlProps}
					>
						<ColorIndicator colorValue={value} /> Text
					</Button>
				) }
				renderContent={ () => (
					<ColorPalette
						colors={ blockThemeColors }
						value={ value }
						onChange={ onChange }
					/>
				) }
			/>
		</BaseControl>
	);
};

export default ColorPickerControl;
