import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContextProvider from './store/todo-context';
import Layout from './components/UI/Layout';
import './App.css';

function App() {
	return (
		<TodoContextProvider>
			<main className='app'>
				<Layout>
					<h1>Things to do:</h1>
					<TodoInput />
					<TodoList />
				</Layout>
			</main>
		</TodoContextProvider>
	);
}

export default App;
