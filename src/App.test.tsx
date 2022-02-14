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
	test('has correct initial state', () => {
		render(<App />);

		const noItemsAlert = screen.getByText(/please add item in input above/i);
		expect(noItemsAlert).toBeInTheDocument();
	});

	test('recieves an item', () => {
		render(<App />);

		const todoInput = screen.getByRole('textbox');
		const addBtn = screen.getByRole('button', { name: 'Add', exact: false });
		userEvent.clear(todoInput);
		userEvent.type(todoInput, 'add tests to app');
		userEvent.click(addBtn);
		userEvent.type(todoInput, 'add typescript');
		userEvent.click(addBtn);

		const noItemsAlertGone = screen.queryByText(
			/please add item in input above/i
		);
		expect(noItemsAlertGone).not.toBeInTheDocument();

		const todo1 = screen.getByText(/add tests to app/i);
		expect(todo1).toBeInTheDocument();

		const listItems = screen.getAllByRole('listitem');

		expect(listItems).toHaveLength(2);
	});
});

describe('Todo item', () => {
	test.skip('can be removed', () => {
		render(<App />);
		const todoInput = screen.getByRole('textbox');
		userEvent.clear(todoInput);
		userEvent.type(todoInput, 'remove this todo');

		const addBtn = screen.getByRole('button', { name: 'Add' });
		userEvent.click(addBtn);

		const removeButton = screen.getByRole('button', { name: /remove/i });
		userEvent.click(removeButton);

		const removedTodo = screen.queryByText('remove this todo');
		// expect(removedTodo).not.toBeInTheDocument();
	});
});
