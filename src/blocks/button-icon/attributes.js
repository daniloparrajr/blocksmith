/**
 * Add the attributes needed for button icons.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
const addAttributes = (settings ) => {
	if ( 'core/button' !== settings.name ) {
		return settings;
	}

	// Add icon attributes.
	const iconAttributes = {
		icon: {
			type: 'string',
		},
		iconPositionLeft: {
			type: 'boolean',
			default: false,
		}
	};

	return {
		...settings,
		attributes: {
			...settings.attributes,
			...iconAttributes,
		},
	};
}

export default addAttributes;
