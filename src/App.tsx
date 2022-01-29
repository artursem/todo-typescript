import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	return (
		<main>
			<h1>Things to do:</h1>
			<TodoInput />
			<TodoList />
		</main>
	);
}

export default App;
