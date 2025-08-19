import {differenceInDays, differenceInHours, differenceInMinutes, intervalToDuration} from "date-fns";

export const getTimeLeft = ( future, displayDays = true, displayHours = true ) => {
	const startDate = new Date();
	const endDate = new Date(future);

	let { hours, minutes, seconds } = intervalToDuration({
		start: startDate,
		end: endDate
	});

	const days = differenceInDays(endDate, startDate);

	if ( ! displayDays ) {
		hours = differenceInHours( endDate, startDate );
	}

	if ( ! displayHours ) {
		minutes = differenceInMinutes( endDate, startDate );
	}

	return {
		days,
		hours,
		minutes,
		seconds
	};
}
