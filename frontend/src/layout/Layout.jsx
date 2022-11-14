import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import './layout.css';

const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
