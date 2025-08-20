import {useEffect, useState} from "@wordpress/element";

import { getTimeLeft } from '../utils.js';

const Countdown = ( { targetDateTime, displayDays, displayHours, labels } ) => {

	const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDateTime, displayDays, displayHours));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(targetDateTime, displayDays, displayHours));
		}, 1000);

		return () => clearInterval(timer); // cleanup
	}, [targetDateTime, displayDays, displayHours]);

	return (
		<>
		{displayDays && (
			<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--days">
				<span className="wp-block-blocksmith-countdown__number">{ timeLeft.days ?? 0 }</span>
				{labels.days ? (<span className="wp-block-blocksmith-countdown__label">{ labels.days }</span>) : null}
			</span>
		)}
		{displayHours && (
			<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--hours">
				<span className="wp-block-blocksmith-countdown__number">{ timeLeft.hours ?? 0 }</span>
				{labels.hours ? (<span className="wp-block-blocksmith-countdown__label">{ labels.hours }</span>) : null}
			</span>
		)}
		<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--minutes">
			<span className="wp-block-blocksmith-countdown__number">{ timeLeft.minutes ?? 0 }</span>
			{labels.minutes ? (<span className="wp-block-blocksmith-countdown__label">{ labels.minutes }</span>) : null}
		</span>
		<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--seconds">
			<span className="wp-block-blocksmith-countdown__number">{ timeLeft.seconds ?? 0 }</span>
			{labels.seconds ? (<span className="wp-block-blocksmith-countdown__label">{ labels.seconds }</span>) : null}
		</span>
		</>
	);
};

export default Countdown;
