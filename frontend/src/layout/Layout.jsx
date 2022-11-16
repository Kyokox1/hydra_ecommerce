import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

import Footer from './Footer';
// import NavBar from './NavBar';
import { NavBarBlack } from './NavBarBlack';

import './layout.css';

const Layout = () => {
	return (
		<Flex flexDir='column' minH='100vh'>
			{/* <NavBar /> */}
			<NavBarBlack />
			<Outlet />
			<Footer />
		</Flex>
	);
};

export default Layout;
