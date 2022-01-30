import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContextProvider from './store/todo-context';
import Layout from './components/UI/Layout';
function App() {
	return (
		<TodoContextProvider>
			<Layout>
				<h1>Things to do:</h1>
				<TodoInput />
				<TodoList />
			</Layout>
		</TodoContextProvider>
	);
}

export default App;
