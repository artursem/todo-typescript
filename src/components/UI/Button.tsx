import { FC } from 'react';
type button = {
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
	onClick?: () => void;
};

const Button: FC<button> = ({ type, isDisabled, onClick, children }) => {
	return (
		<button onClick={onClick} disabled={isDisabled} type={type}>
			{children}
		</button>
	);
};

export default Button;
