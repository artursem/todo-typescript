class Todo {
	id: string;
	text: string;
	isDone: boolean;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
		this.isDone = false;
	}
}

export default Todo;
