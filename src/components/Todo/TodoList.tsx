import { FC, Fragment, useContext } from 'react';
import { TodoContext } from '../../store/todo-context';
import { UIContext } from '../../store/UI-context';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList: FC = () => {
	const todoCtx = useContext(TodoContext);
	const UICtx = useContext(UIContext);

	const listItems = todoCtx.items.map((todo) => (
		<TodoItem
			key={todo.id}
			text={todo.text}
			isDone={todo.isDone}
			onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)}
			onToggleTodo={todoCtx.toggleTodo.bind(null, todo.id)}
		/>
	));

	const ulClasses = `${classes.list} ${
		UICtx.isGridDisplay ? classes.displayAsGrid : classes.displayAsList
	}`;

	return (
		<Fragment>
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
