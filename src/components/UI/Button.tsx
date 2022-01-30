import { FC } from 'react';
import './Button.css';

type button = {
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
	onClick?: () => void;
};

const Button: FC<button> = ({ type, isDisabled, onClick, children }) => {
	return (
		<button onClick={onClick} disabled={isDisabled} type={type} className='btn'>
			{children}
		</button>
	);
};

export default Button;
