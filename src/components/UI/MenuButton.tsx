import React, { ReactNode, FC } from 'react';
import Button from './Button';

type MenuButtonProps = {
	children: ReactNode;
	isOpen?: boolean;
};

const MenuButton = ({ children, isOpen }: MenuButtonProps) => {
	const buttonOffStyles = {
		width: 100,
		clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)',
	};
	const buttonOnStyles = {
		width: 100,
		clipPath: 'none',
	};
	return (
		<Button style={buttonOffStyles} width='100px'>
			{children}
		</Button>
	);
};

export default MenuButton;
