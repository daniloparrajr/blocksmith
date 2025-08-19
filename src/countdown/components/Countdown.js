import {useEffect, useState} from "@wordpress/element";

import { getTimeLeft } from '../utils.js';

const Countdown = ( { targetDateTime } ) => {

	const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDateTime));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(targetDateTime));
		}, 1000);

		return () => clearInterval(timer); // cleanup
	}, [targetDateTime]);

	return (
		<>
		<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--days">
			<span className="wp-block-blocksmith-countdown__number">{ timeLeft.days ?? 0 }</span>
			<span className="wp-block-blocksmith-countdown__label">Days</span>
		</span>
		<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--hours">
			<span className="wp-block-blocksmith-countdown__number">{ timeLeft.hours ?? 0 }</span>
			<span className="wp-block-blocksmith-countdown__label">Hours</span>
		</span>
		<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--minutes">
			<span className="wp-block-blocksmith-countdown__number">{ timeLeft.minutes ?? 0 }</span>
			<span className="wp-block-blocksmith-countdown__label">Minutes</span>
		</span>
		<span className="wp-block-blocksmith-countdown__item wp-block-blocksmith-countdown__item--seconds">
			<span className="wp-block-blocksmith-countdown__number">{ timeLeft.seconds ?? 0 }</span>
			<span className="wp-block-blocksmith-countdown__label">Seconds</span>
		</span>
		</>
	);
};

export default Countdown;
