import { Button } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { closeSmall } from '@wordpress/icons';

import './style.scss';

const PopoverHeader = ({ title, actions, onClose }) => {
	return (
		<div className="bs-popover-header">
			<h2 className="bs-popover-header__title">{title}</h2>
			{actions.map(({ label, onClick })=> (
				<Button
					key={label}
					className="bs-popover-header__action"
					variant="tertiary"
					onClick={onClick}
				>
					{ label }
				</Button>
			))}
			<Button
				className="bs-popover-header__close"
				size="small"
				label={ __( 'Close' ) }
				icon={ closeSmall }
				onClick={ onClose }
			/>
		</div>
	);
};

export default PopoverHeader;
