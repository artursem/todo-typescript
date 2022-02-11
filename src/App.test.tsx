import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
	test('renders header', () => {
		render(<App />);
		const header = screen.getByText(/things to do/i);
		expect(header).toBeInTheDocument();
	});
});

describe('Todo input', () => {
	test('recieves an item', () => {
		render(<App />);

		const todoInput = screen.getByRole('textbox');
		userEvent.clear(todoInput);
		userEvent.type(todoInput, 'add tests to app');

		const addBtn = screen.getByRole('button', { name: 'Add', exact: false });
		userEvent.click(addBtn);

		const sampleTodo = screen
			.getAllByRole('listitem')
			.find((listitem) => listitem.textContent === 'add tests to app');

		expect(sampleTodo).toBeInTheDocument();
	});
});

describe('Todo item', () => {
	test('can be removed', () => {
		render(<App />);
		const todoInput = screen.getByRole('textbox');
		userEvent.clear(todoInput);
		userEvent.type(todoInput, 'add tests to app');

		const addBtn = screen.getByRole('button', { name: 'Add' });
		userEvent.click(addBtn);

		const removeButton = screen.getByRole('button', { name: 'remove' });
		// screen.debug();
		userEvent.click(removeButton);
		const removedTodo = screen.queryByRole('listitem');

		// expect(removedTodo).not.toBeInTheDocument();
	});
});
