import { FC, FormEvent, useRef } from 'react';
import Button from './UI/Button';

const TodoInput: FC = () => {
	const todoInputRef = useRef<HTMLInputElement>(null);
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const todoText = todoInputRef.current!.value;
		console.log('addtodo', todoText);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' id='todoText' ref={todoInputRef} />
			<Button type='submit'>Add</Button>
		</form>
	);
};

export default TodoInput;
