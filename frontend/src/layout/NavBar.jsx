import { Flex, Image, Stack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// assets
import whiteLogo from '/assets/logo-white.png';
import navBarBg from '/assets/navBar.png';

// components
import { NavList } from '~/components/layout/navbar/NavList';
import { NavSearch } from '~/components/layout/navbar/NavSearch';
import { NavIcons } from '~/components/layout/navbar/NavIcons';

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
				<Link to='/'>
					<Heading as='h1'>
						<Image src={whiteLogo} alt='HYRA STORE' />
					</Heading>
				</Link>
				<Stack
					as='nav'
					direction='row'
					w='70%'
					gap='30px'
					justifyContent={{
						base: 'flex-end',
						md: 'space-evenly'
					}}
					alignItems='center'
				>
					<Flex
						display={{ base: 'none', md: 'flex' }}
						gap='30px'
						flex='1'
					>
						<NavList gap='20px' mayus={true} />
					</Flex>
					<Flex display={{ base: 'none', sm: 'flex' }}>
						<NavSearch />
					</Flex>
					<NavIcons />
				</Stack>
			</Flex>
		</Flex>
	);
};
