import React, { useState, useContext } from 'react';
import { UIContext } from '../../store/UI-context';
import Button from './Button';
import IconList from './icons/IconList';
import IconGrid from './icons/IconGrid';
import MenuButton from './MenuButton';
import classes from './MenuBar.module.css';

const MenuBar = () => {
	const UICtx = useContext(UIContext);
	const wrapperClasses = `${classes.menuWrapper} ${
		UICtx.isMenuOpen ? classes.menuOpen : classes.menuClose
	}`;
	return (
		<nav className={classes.nav}>
			<div className={wrapperClasses}>
				<MenuButton />
				<ul className={classes.menuList}>
					<li className={classes.menuText}>
						<Button onClick={UICtx.toggleGrid}>
							{UICtx.isGridDisplay ? <IconList /> : <IconGrid />}
						</Button>
						display as {UICtx.isGridDisplay ? 'list' : 'grid'}
					</li>
					<li className={classes.menuText}>
						<Button onClick={UICtx.toggleGrid}>
							{UICtx.isGridDisplay ? <IconList /> : <IconGrid />}
						</Button>
						display as {UICtx.isGridDisplay ? 'list' : 'grid'}
					</li>
					<li className={classes.menuText}>
						<Button onClick={UICtx.toggleGrid}>
							{UICtx.isGridDisplay ? <IconList /> : <IconGrid />}
						</Button>
						display as {UICtx.isGridDisplay ? 'list' : 'grid'}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MenuBar;
