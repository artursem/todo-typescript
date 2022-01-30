import { useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import Button from './UI/Button';
import IconCancel from './UI/icons/IconCancel';
import IconCheck from './UI/icons/IconCheck';
import IconTrash from './UI/icons/IconTrash';
import './TodoItem.css';
import { text } from 'stream/consumers';

type todoItemProps = {
	text: string;
	isDone: boolean;
	onRemoveTodo: () => void;
	onToggleTodo: () => void;
};

const TodoItem = (props: todoItemProps) => {
	const ctx = useContext(TodoContext);
	const textClasses = props.isDone ? 'item__text done' : 'item__text';

	return (
		<li className='item'>
			<p className={textClasses}>{props.text}</p>
			<div className='btns'>
				<Button type='button' onClick={props.onToggleTodo}>
					{props.isDone ? <IconCancel /> : <IconCheck />}
				</Button>
				<Button type='button' onClick={props.onRemoveTodo}>
					<IconTrash />
				</Button>
			</div>
		</li>
	);
};

export default TodoItem;
