import { FC, Fragment, useContext } from 'react';
import { TodoContext } from '../../store/todo-context';
import { UIContext } from '../../store/UI-context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList: FC = () => {
	const todoCtx = useContext(TodoContext);
	const UICtx = useContext(UIContext);

	const listItems = todoCtx.items
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
