import {differenceInDays, intervalToDuration} from "date-fns";

export const getTimeLeft = ( future ) => {
	const startDate = new Date();
	const endDate = new Date(future);

	const { hours, minutes, seconds } = intervalToDuration({
		start: startDate,
		end: endDate
	});

	const days = differenceInDays(endDate, startDate);

	return {
		days,
		hours,
		minutes,
		seconds
	};
}
