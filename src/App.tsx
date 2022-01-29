import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContextProvider from './store/todo-context';

function App() {
	return (
		<TodoContextProvider>
			<h1>Things to do:</h1>
			<TodoInput />
			<TodoList />
		</TodoContextProvider>
	);
}

export default App;
