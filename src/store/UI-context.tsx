import React, { FC, useState, useEffect } from 'react';

type UIObj = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	isGridDisplay: boolean;
	toggleGrid: () => void;
	isDarkMode: boolean;
	toggleDarkMode: () => void;
	isFilterOpen: boolean;
	toggleFilterOpen: () => void;
	filterMatch: string;
	setFilterMatch: (filter: string) => void;
};

export const UIContext = React.createContext<UIObj>({
	isMenuOpen: false,
	toggleMenu: () => {},
	isGridDisplay: false,
	toggleGrid: () => {},
	isDarkMode: false,
	toggleDarkMode: () => {},
	isFilterOpen: false,
	toggleFilterOpen: () => {},
	filterMatch: '',
	setFilterMatch: (filter: string) => {},
});

const UIContextProvider: FC = ({ children }) => {
	const [isMenu, setIsMenu] = useState<boolean>(false);
	const [isGrid, setIsGrid] = useState<boolean>(false);
	const [isDark, setIsDark] = useState<boolean>(false);
	const [isFilter, setIsFilter] = useState<boolean>(false);
	const [filterText, setFilterText] = useState<string>('');

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

	// extract toggleHandlers into function?
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

	const toggleFilterHandler = () => {
		setIsFilter((prevState) => !prevState);
	};

	const filterTextHandler = (filter: string) => {
		setFilterText(filter);
	};

	const contextValue: UIObj = {
		isMenuOpen: isMenu,
		toggleMenu: toggleMenuHandler,
		isGridDisplay: isGrid,
		toggleGrid: toggleGridHandler,
		isDarkMode: isDark,
		toggleDarkMode: toggleDarkModeHandler,
		isFilterOpen: isFilter,
		toggleFilterOpen: toggleFilterHandler,
		filterMatch: filterText,
		setFilterMatch: filterTextHandler,
	};

	return (
		<UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
	);
};

export default UIContextProvider;
