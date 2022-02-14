import { useContext } from 'react';
import { UIContext } from '../../store/UI-context';
import Button from '../UI/Button';
import IconCancel from '../UI/icons/IconCancel';
import IconCheck from '../UI/icons/IconCheck';
import IconTrash from '../UI/icons/IconTrash';
import classes from './TodoItem.module.css';

type todoItemProps = {
	text: string;
	isDone: boolean;
	onRemoveTodo: () => void;
	onToggleTodo: () => void;
};

const TodoItem = (props: todoItemProps) => {
	const UICtx = useContext(UIContext);
	const itemClasses = `${classes.item} ${
		UICtx.isGridDisplay ? classes.displayGrid : classes.displayList
	}`;
	const textClasses = `${classes.text} ${props.isDone ? classes.done : null}`;

	return (
		<li className={itemClasses}>
			<p className={textClasses}>{props.text}</p>
			<div className={classes.btns}>
				<Button type='button' onClick={props.onToggleTodo} title='toggle done'>
					{/* {props.isDone ? <IconCancel /> : <IconCheck />} */}
					toggle done
				</Button>
				<Button type='button' onClick={props.onRemoveTodo} title='remove'>
					{/* <IconTrash /> */}
					remove
				</Button>
			</div>
		</li>
	);
};

export default TodoItem;
