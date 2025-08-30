/**
 * Components dependencies.
 */
import {
	Button,
	Popover,
	BaseControl,
	DateTimePicker
} from '@wordpress/components';

import { format } from 'date-fns';

import { useState } from '@wordpress/element';


const DateTimePickerControl = ({ label, value, onChange, is12Hour }) => {
	// Format the date using the specified tokens
	const formattedDate = format(new Date( value ), "MMMM d, yyyy h:mm a 'UTC+0'");

	const [ isVisible, setIsVisible ] = useState( false );

	const toggleDateTimePickerPopover = () => {
		setIsVisible( ( state ) => ! state );
	};

	return (
		<BaseControl
			__nextHasNoMarginBottom
			label={label}
		>
			<Button
				variant="secondary"
				tooltipPosition="middle left"
				onClick={ toggleDateTimePickerPopover }
				aria-expanded={ isVisible }
			>
				{formattedDate ? formattedDate : 'Select Date & Time'}
				{ isVisible && (
					<Popover
						placement={ 'left-end'}
					>
						<div
							style={{
								'padding': '20px',
								'minWidth': '320px'
							}}
							onClick={(event) => event.stopPropagation()}
						>
							<DateTimePicker
								currentDate={ value }
								onChange={ onChange }
								is12Hour={ is12Hour }
							/>
						</div>
					</Popover>
				) }
			</Button>
		</BaseControl>
	);
};

export default DateTimePickerControl;
