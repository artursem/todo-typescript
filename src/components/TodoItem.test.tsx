import { screen, render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('Todo list item component', () => {
	test('renders text content', () => {
		render(
			<TodoItem
				key='1'
				text='run tests'
				isDone={false}
				onRemoveTodo={() => {}}
				onToggleTodo={() => {}}
			/>
		);
		const text = screen.getByText(/run tests/);
		expect(text).toBeInTheDocument();
	});
});
