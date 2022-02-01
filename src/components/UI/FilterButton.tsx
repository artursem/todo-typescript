import { useState } from 'react';
import Button from './Button';
import IconFilter from './icons/IconFilter';
import classes from './FilterButton.module.css';

const FilterButton = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const toggleFilterHandler = () => {
		setIsFilterOpen((state) => !state);
	};
	return (
		<div className={classes.menuText}>
			<Button type='button' onClick={toggleFilterHandler}>
				<IconFilter />
			</Button>
			{isFilterOpen ? (
				'filter'
			) : (
				<input type='text' id='filter' className={classes.menuText} />
			)}
		</div>
	);
};

export default FilterButton;
