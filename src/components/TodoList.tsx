import { FC } from 'react';
import TodoInput from './TodoInput';
type todo = {
	id: number;
	text: string;
	isDone: boolean;
};

const TODOS: todo[] = [
	{ id: 0, text: 'build components', isDone: false },
	{ id: 1, text: 'add typescript', isDone: false },
	{ id: 3, text: 'add tests', isDone: false },
];

const TodoList: FC = () => {
	const listItems = TODOS.map((todo) => <li key={todo.id}>{todo.text}</li>);
	return <ul>{listItems}</ul>;
};

export default TodoList;
