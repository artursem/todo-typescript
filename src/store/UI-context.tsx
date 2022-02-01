import React, { FC, ReactChild, useState } from 'react';

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

	const toggleMenuHandler = () => {
		setIsMenu((prevState) => !prevState);
	};

	const toggleGridHandler = () => {
		setIsGrid((prevState) => !prevState);
	};

	const toggleDarkModeHandler = () => {
		document.body.classList.toggle('darkMode');
		setIsDark((prevState) => !prevState);
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
