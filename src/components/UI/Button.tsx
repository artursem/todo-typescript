import { FC } from 'react';
import classes from './Button.module.css';

type button = {
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
	onClick?: () => void;
	height?: string;
	width?: string;
};

const Button: FC<button> = ({
	type,
	isDisabled,
	onClick,
	children,
	height,
	width,
}) => {
	const buttonHeigth: string = height || '2rem';
	const buttonWidth: string = width || '2rem';
	const buttonType: 'submit' | 'button' | 'reset' = type || 'button';

	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			type={buttonType}
			className={classes.btn}
			style={{ height: buttonHeigth, width: buttonWidth }}
		>
			{children}
		</button>
	);
};

export default Button;
