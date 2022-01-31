import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContextProvider from './store/todo-context';
import UIContextProvider from './store/UI-context';
import Layout from './components/UI/Layout';
import MenuBar from './components/UI/MenuBar';

function App() {
	return (
		<TodoContextProvider>
			<UIContextProvider>
				<Layout>
					<h1>Things to do:</h1>
					<TodoInput />
					<MenuBar />
					<TodoList />
				</Layout>
			</UIContextProvider>
		</TodoContextProvider>
	);
}

export default App;
