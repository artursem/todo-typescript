import React, { useState, FC } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
	toggleTodo: (id: string) => {},
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

	const toggleTodoHandler = (todoId: string) => {
		const allTodos = [...todoList];
		const changeTodoIdx = allTodos.findIndex((todo) => todo.id === todoId);
		allTodos[changeTodoIdx].isDone = !allTodos[changeTodoIdx].isDone;
		setTodoList(allTodos);
	};

	const contextValue: TodosContextObj = {
		items: todoList,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		toggleTodo: toggleTodoHandler,
	};

	return (
		<TodoContext.Provider value={contextValue}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
