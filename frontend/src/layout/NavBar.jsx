import { Flex, Image, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// assets
import whiteLogo from '/assets/logo-white.png';
import navBarBg from '/assets/navBar.png';

// components
import { NavList } from '~/components/Layout/NavList';
import { NavSearch } from '~/components/Layout/NavSearch';
import { NavIcons } from '~/components/Layout/NavIcons';

export const NavBar = () => {
	return (
		<Flex
			as='header'
			pos='fixed'
			top='0'
			w='100vw'
			color='white'
			zIndex='900'
			fontFamily='Roboto, sans-serif'
		>
			<Flex pos='relative' justify='space-around' w='inherit'>
				<Image
					pos='absolute'
					src={navBarBg}
					top='0'
					left='0'
					h='100%'
					w='100%'
					opacity='0.9'
					zIndex='-1'
				/>
				<Link to='/productos'>
					<Image src={whiteLogo} alt='logo' />
				</Link>
				<Stack
					as='nav'
					direction='row'
					w='70%'
					gap='30px'
					justifyContent='space-evenly'
					alignItems='center'
				>
					<NavList gap='20px' mayus={true} />
					<NavSearch />
					<NavIcons />
				</Stack>
			</Flex>
		</Flex>
	);
};
