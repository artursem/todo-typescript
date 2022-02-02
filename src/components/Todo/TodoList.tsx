import { FC, Fragment, useContext } from 'react';
import { TodoContext } from '../../store/todo-context';
import { UIContext } from '../../store/UI-context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';
import Todo from '../../models/todo';

const TodoList: FC = () => {
	const todoCtx = useContext(TodoContext);
	const UICtx = useContext(UIContext);

	const sortItems = (a: Todo, b: Todo) => {
		let textA = a.id.toUpperCase();
		let textB = b.id.toUpperCase();
		if (UICtx.isSortNew) {
			return textA < textB ? -1 : 1;
		} else {
			return textA < textB ? 1 : -1;
		}
	};

	const listItems = todoCtx.items
		.sort(sortItems)
		.filter((todo) => todo.text.includes(UICtx.filterMatch))
		.map((todo) => (
			<CSSTransition
				mountOnEnter={true}
				unmountOnExit={true}
				timeout={100}
				classNames={{
					enter: '',
					enterActive: classes.fadeIn,
					exit: '',
					exitActive: classes.fadeOut,
				}}
				key={todo.id}
			>
				<TodoItem
					key={todo.id}
					text={todo.text}
					isDone={todo.isDone}
					onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)}
					onToggleTodo={todoCtx.toggleTodo.bind(null, todo.id)}
				/>
			</CSSTransition>
		));
	const ulClasses = `${classes.list} ${
		UICtx.isGridDisplay ? classes.displayAsGrid : classes.displayAsList
	}`;

	return (
		<Fragment>
			<TransitionGroup className={ulClasses} component='ul'>
				{listItems}
			</TransitionGroup>
			{todoCtx.items.length === 0 && <p>Please add item in input above</p>}
		</Fragment>
	);
};

export default TodoList;
