import { useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import Button from './UI/Button';

type todoItemProps = {
	text: string;
	isDone: boolean;
	onRemoveTodo: () => void;
};

const TodoItem = (props: todoItemProps) => {
	const ctx = useContext(TodoContext);

	return (
		<li>
			{props.text}
			<Button type='button' onClick={props.onRemoveTodo}>
				remove
			</Button>
		</li>
	);
};

export default TodoItem;
