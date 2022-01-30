import { FC, Fragment, useContext, useState } from 'react';
import { TodoContext } from '../store/todo-context';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';
import Button from './UI/Button';
import IconGrid from './UI/icons/IconGrid';
import IconList from './UI/icons/IconList';

const TodoList: FC = () => {
	const [displayGrid, setDisplayGrid] = useState(false);

	const ctx = useContext(TodoContext);

	const toggleListStyle = () => {
		setDisplayGrid((prevState) => {
			return !prevState;
		});
	};
	const listItems = ctx.items.map((todo) => (
		<TodoItem
			key={todo.id}
			text={todo.text}
			isDone={todo.isDone}
			onRemoveTodo={ctx.removeTodo.bind(null, todo.id)}
			onToggleTodo={ctx.toggleTodo.bind(null, todo.id)}
		/>
	));

	const ulClasses = `${classes.list} ${
		displayGrid ? classes.displayAsGrid : classes.displayAsList
	}`;

	return (
		<Fragment>
			<Button onClick={toggleListStyle}>
				{displayGrid ? <IconList /> : <IconGrid />}
			</Button>
			<ul className={ulClasses}>
				{listItems.length > 0 ? (
					listItems
				) : (
					<p>Please add item in input above</p>
				)}
			</ul>
		</Fragment>
	);
};

export default TodoList;
