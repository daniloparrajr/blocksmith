/**
 * Components dependencies.
 */
import {
	Button,
	Dropdown,
	BaseControl,
	DateTimePicker
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import {
	PopoverHeader,
} from '../../components';

import { format } from 'date-fns';

import './style.scss';

const DateTimePickerControl = ({ label, value, onChange, is12Hour, isInvalidDate }) => {
	// Format the date using the specified tokens
	const formattedDate = format(new Date( value ), "MMMM d, yyyy h:mm a 'UTC+0'");

	return (
		<BaseControl
			__nextHasNoMarginBottom
			label={label}
		>
			<Dropdown
				focusOnMount
				contentClassName={"bs-date-time-picker-control__content"}
				popoverProps={{
					"offset": 36,
					"placement": "left-start",
					"shift": true,
				}}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						variant="secondary"
						tooltipPosition="middle left"
						aria-expanded={ isOpen }
						onClick={ onToggle }
					>
						{formattedDate ? formattedDate : 'Select Date & Time'}
					</Button>
				)}
				renderContent={() => (
					<>
						<PopoverHeader
							title={ label }
							actions={[
								{
									"label": __( "Now", "blocksmith" ),
									"onClick": () => {
										onChange( new Date() );
									}
								}
							]}
							onClose={() => {
								console.log('close');
							}}
						/>
						<DateTimePicker
							currentDate={ value }
							onChange={ onChange }
							is12Hour={ is12Hour }
							isInvalidDate={ isInvalidDate }
						/>
					</>
				)}
			/>
		</BaseControl>
	);
};

export default DateTimePickerControl;
