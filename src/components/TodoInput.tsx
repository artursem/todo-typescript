import { FC, FormEvent, useRef, useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import Button from './UI/Button';

const isValid = (text: string) => {
	return text.trim().length > 0;
};

const TodoInput: FC = () => {
	const ctx = useContext(TodoContext);
	const todoInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const todoText = todoInputRef.current!.value;
		if (!isValid(todoText)) return;
		ctx.addTodo(todoText);
		todoInputRef.current!.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' id='todoText' ref={todoInputRef} />
			<Button type='submit'>Add</Button>
		</form>
	);
};

export default TodoInput;
