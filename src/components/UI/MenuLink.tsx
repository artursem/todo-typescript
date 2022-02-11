import React, { ReactNode } from 'react';
import classes from './MenuLink.module.css';

type MenuLinkType = {
	children: ReactNode;
	onClick: () => void;
};

const MenuLink = (props: MenuLinkType) => {
	return (
		<button onClick={props.onClick} className={classes.link}>
			{props.children}
		</button>
	);
};

export default MenuLink;
