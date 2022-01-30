import { useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import Button from './UI/Button';

type todoItemProps = {
	text: string;
	isDone: boolean;
	onRemoveTodo: () => void;
	onToggleTodo: () => void;
};

const TodoItem = (props: todoItemProps) => {
	const ctx = useContext(TodoContext);

	return (
		<li>
			{props.text}
			{props.isDone && <span>v</span>}
			<Button type='button' onClick={props.onRemoveTodo}>
				remove
			</Button>
			<Button type='button' onClick={props.onToggleTodo}>
				toggle
			</Button>
		</li>
	);
};

export default TodoItem;
