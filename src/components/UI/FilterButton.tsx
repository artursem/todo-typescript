import { useRef, useContext } from 'react';
import { UIContext } from '../../store/UI-context';
import Button from './Button';
import IconFilter from './icons/IconFilter';
import classes from './FilterButton.module.css';

const FilterButton = () => {
	const { isFilterOpen, toggleFilterOpen, setFilterMatch, filterMatch } =
		useContext(UIContext);
	const filterInputRef = useRef<HTMLInputElement>(null);
	const changeHandler = () => {
		const newFilter = filterInputRef.current!.value;
		setFilterMatch(newFilter);
	};
	return (
		<div className={classes.menuText}>
			<Button type='button' onClick={toggleFilterOpen}>
				<IconFilter />
			</Button>
			{isFilterOpen ? (
				<input
					autoFocus
					type='text'
					id='filter'
					className={classes.menuText}
					ref={filterInputRef}
					onBlur={toggleFilterOpen}
					onChange={changeHandler}
					value={filterMatch}
				/>
			) : (
				<a onClick={toggleFilterOpen}>filter</a>
			)}
		</div>
	);
};

export default FilterButton;
