import { ReactNode } from 'react';
import classes from './Button.module.css';

type ButtonProps = {
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
	onClick?: () => void;
	height?: string;
	width?: string;
	children?: ReactNode;
	style?: React.CSSProperties;
	title?: string;
};

const Button = ({
	type,
	isDisabled,
	onClick,
	children,
	height,
	width,
	style,
	title,
}: ButtonProps) => {
	const buttonHeigth: string = height || '2rem';
	const buttonWidth: string = width || '2rem';
	const buttonType: 'submit' | 'button' | 'reset' = type || 'button';
	const buttonTitle: string = title || 'button';

	return (
		<button
			onClick={onClick}
			disabled={isDisabled}
			type={buttonType}
			className={classes.btn}
			style={{ height: buttonHeigth, width: buttonWidth, ...style }}
			title={buttonTitle}
			name={buttonTitle}
			aria-label={buttonTitle}
		>
			{children}
		</button>
	);
};

export default Button;
