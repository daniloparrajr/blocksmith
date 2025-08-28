/**
 * Block editor dependencies.
 */
import {
	CustomSelectControl
} from '@wordpress/components';

const FontFamilyControl = ({ label, value, onChange, fontFamilies }) => {

	const options = [
		{
			key: 'default',
			name: 'Default',
		},
		...fontFamilies.map( ( { name, slug, fontFamily } ) => {
			return {
				key: slug,
				name,
				style: {
					fontFamily: fontFamily,
				}
			}
		})
	];

	const getValueByKey = ( key, options ) => {
		if ( ! key ) {
			return null;
		}

		return options.find( ( { key: optionKey } ) => optionKey === key );
	}

	return (
		<CustomSelectControl
			__next40pxDefaultSize
			label={label}
			value={getValueByKey( value, options )}
			options={options}
			onChange={onChange}
		/>
	);
};

export default FontFamilyControl;
