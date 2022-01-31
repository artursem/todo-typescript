import React, { ReactNode, FC, useContext } from 'react';
import { UIContext } from '../../store/UI-context';
import Button from './Button';

const MenuButton = () => {
	const UICtx = useContext(UIContext);

	const buttonOffStyles = {
		clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)',
		width: 100,
		transition: 'clip-path .3s ease-in',
	};
	const buttonOnStyles = {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)',
		width: '2rem',
		transition: 'clip-path .3s ease-in',
	};
	return (
		<Button
			style={UICtx.isMenuOpen ? buttonOnStyles : buttonOffStyles}
			width='100px'
			onClick={UICtx.toggleMenu}
		>
			{UICtx.isMenuOpen ? 'M' : 'MENU'}
		</Button>
	);
};

export default MenuButton;
