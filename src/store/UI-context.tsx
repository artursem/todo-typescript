import React, { FC, useState, useEffect } from 'react';

type UIObj = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	isGridDisplay: boolean;
	toggleGrid: () => void;
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

export const UIContext = React.createContext<UIObj>({
	isMenuOpen: false,
	toggleMenu: () => {},
	isGridDisplay: false,
	toggleGrid: () => {},
	isDarkMode: false,
	toggleDarkMode: () => {},
});

const UIContextProvider: FC = ({ children }) => {
	const [isMenu, setIsMenu] = useState<boolean>(false);
	const [isGrid, setIsGrid] = useState<boolean>(false);
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const storedDarkMode = localStorage.getItem('darkMode');
		if (storedDarkMode === 'true') {
			document.body.classList.add('darkMode');
			setIsDark(true);
		} else {
			localStorage.setItem('darkMode', 'false');
			document.body.classList.remove('darkMode');
			setIsDark(false);
		}
	}, []);

	const toggleDarkModeHandler = () => {
		if (isDark) {
			document.body.classList.remove('darkMode');
			setIsDark(false);
			localStorage.setItem('darkMode', 'false');
		} else {
			document.body.classList.add('darkMode');
			setIsDark(true);
			localStorage.setItem('darkMode', 'true');
		}
	};

	const toggleMenuHandler = () => {
		setIsMenu((prevState) => !prevState);
	};

	const toggleGridHandler = () => {
		setIsGrid((prevState) => !prevState);
	};

	const contextValue: UIObj = {
		isMenuOpen: isMenu,
		toggleMenu: toggleMenuHandler,
		isGridDisplay: isGrid,
		toggleGrid: toggleGridHandler,
		isDarkMode: isDark,
		toggleDarkMode: toggleDarkModeHandler,
	};

	return (
		<UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
	);
};

export default UIContextProvider;
