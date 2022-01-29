import { FC, useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
	const ctx = useContext(TodoContext);
	const listItems = ctx.items.map((todo) => (
		<TodoItem
			key={todo.id}
			text={todo.text}
			isDone={todo.isDone}
			onRemoveTodo={ctx.removeTodo.bind(null, todo.id)}
			onToggleTodo={ctx.toggleTodo.bind(null, todo.id)}
		/>
	));

	return <ul>{listItems}</ul>;
};

export default TodoList;
