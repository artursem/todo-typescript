import { FC, FormEvent, useRef, useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import Button from './UI/Button';
import classes from './TodoInput.module.css';

const isValid = (text: string) => {
	return text.trim().length > 0;
};

const TodoInput: FC = () => {
	const todoCtx = useContext(TodoContext);
	const todoInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const todoText = todoInputRef.current!.value;
		if (!isValid(todoText)) return;
		todoCtx.addTodo(todoText);
		todoInputRef.current!.value = '';
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<input
				type='text'
				id='todoText'
				ref={todoInputRef}
				className={classes.input}
			/>
			<Button type='submit' width='60px'>
				Add
			</Button>
		</form>
	);
};

export default TodoInput;
