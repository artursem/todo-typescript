import React, { useState, FC } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodoContextProvider: FC = (props) => {
	const [todoList, setTodoList] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);
		setTodoList((state) => {
			return [...state, newTodo];
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodoList((state) => {
			return state.filter((todo) => todo.id !== todoId);
		});
	};

	const contextValue: TodosContextObj = {
		items: todoList,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodoContext.Provider value={contextValue}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
