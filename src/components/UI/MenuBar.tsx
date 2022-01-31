import React, { useState, useContext } from 'react';
import { UIContext } from '../../store/UI-context';
import Button from './Button';
import IconList from './icons/IconList';
import IconGrid from './icons/IconGrid';
import MenuButton from './MenuButton';
import classes from './MenuBar.module.css';

const MenuBar = () => {
	const UICtx = useContext(UIContext);
	return (
		<nav className={classes.nav}>
			<MenuButton>MENU</MenuButton>
			<Button onClick={UICtx.toggleGrid}>
				{UICtx.isGridDisplay ? <IconList /> : <IconGrid />}
			</Button>
		</nav>
	);
};

export default MenuBar;
