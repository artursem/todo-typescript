import { ReactNode } from 'react';
import './Layout.css';

type LayoutType = {
	children: ReactNode;
};

const Layout = (props: LayoutType) => {
	return <div className='layout'>{props.children}</div>;
};

export default Layout;
