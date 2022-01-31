import { FC, ReactNode } from 'react';
import classes from './Button.module.css';

type ButtonProps = {
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
	onClick?: () => void;
	height?: string;
	width?: string;
	children?: ReactNode;
	style?: React.CSSProperties;
};

const Button = ({
	type,
	isDisabled,
	onClick,
	children,
	height,
	width,
	style,
}: ButtonProps) => {
	const buttonHeigth: string = height || '2rem';
	const buttonWidth: string = width || '2rem';
	const buttonType: 'submit' | 'button' | 'reset' = type || 'button';

	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			type={buttonType}
			className={classes.btn}
			style={{ height: buttonHeigth, width: buttonWidth, ...style }}
		>
			{children}
		</button>
	);
};

export default Button;
