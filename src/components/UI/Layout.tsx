import { ReactNode } from 'react';
import classes from './Layout.module.css';

type LayoutType = {
	children: ReactNode;
};

const Layout = (props: LayoutType) => {
	return (
		<div className={classes.app}>
			<div className={classes.layout}>{props.children}</div>
		</div>
	);
};

export default Layout;
