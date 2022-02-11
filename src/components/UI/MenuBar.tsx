import React, { useContext } from 'react';
import { UIContext } from '../../store/UI-context';
import { CSSTransition } from 'react-transition-group';
import Button from './Button';
import MenuLink from './MenuLink';
import IconList from './icons/IconList';
import IconGrid from './icons/IconGrid';
import MenuButton from './MenuButton';
import classes from './MenuBar.module.css';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';
import IconMenu from './icons/IconMenu';
import FilterButton from './FilterButton';

const MenuBar = () => {
	const UICtx = useContext(UIContext);
	const {
		isGridDisplay,
		toggleGrid,
		isMenuOpen,
		isDarkMode,
		toggleDarkMode,
		toggleSort,
		isSortNew,
	} = UICtx;

	return (
		<nav className={classes.nav}>
			<div className={classes.menuWrapper}>
				<CSSTransition
					in={isMenuOpen}
					timeout={300}
					classNames={{
						enter: classes.btnDone,
						enterActive: classes.btnIn,
						exit: '',
						exitActive: classes.btnOut,
						exitDone: classes.btnDone,
					}}
				>
					<div className={classes.btnDone}>
						<MenuButton />
					</div>
				</CSSTransition>
				<CSSTransition
					mountOnEnter={true}
					unmountOnExit={true}
					in={isMenuOpen}
					timeout={300}
					classNames={{
						enter: '',
						enterActive: classes.menuIn,
						exit: '',
						exitActive: classes.menuOut,
					}}
				>
					<ul className={classes.menuList}>
						<li className={classes.menuText}>
							<Button onClick={toggleGrid}>
								{isGridDisplay ? <IconList /> : <IconGrid />}
							</Button>
							<MenuLink onClick={toggleGrid}>
								display as {isGridDisplay ? 'list' : 'grid'}
							</MenuLink>
						</li>
						<li className={classes.menuText}>
							<Button onClick={toggleDarkMode}>
								{isDarkMode ? <IconSun /> : <IconMoon />}
							</Button>
							<MenuLink onClick={toggleDarkMode}>
								{isDarkMode ? 'light' : 'dark'} mode
							</MenuLink>
						</li>
						<li className={classes.menuText}>
							<FilterButton />
						</li>
						<li className={classes.menuText}>
							<Button onClick={toggleSort}>
								<div
									style={{
										transform: isSortNew ? 'rotate(90deg)' : 'rotate(-90deg)',
									}}
								>
									<IconMenu />
								</div>
							</Button>
							<MenuLink onClick={toggleSort}>sort</MenuLink>
						</li>
					</ul>
				</CSSTransition>
			</div>
		</nav>
	);
};

export default MenuBar;
