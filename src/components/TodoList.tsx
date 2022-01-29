import { FC, useContext } from 'react';
import Todo from '../models/todo';
import { TodoContext } from '../store/todo-context';

// const TODOS: Todo[] = [
// 	{ id: '0', text: 'build components', isDone: false },
// 	{ id: '1', text: 'add typescript', isDone: false },
// 	{ id: '3', text: 'add tests', isDone: false },
// ];

const TodoList: FC = () => {
	const ctx = useContext(TodoContext);
	const listItems = ctx.items.map((todo) => <li key={todo.id}>{todo.text}</li>);
	return <ul>{listItems}</ul>;
};

export default TodoList;
