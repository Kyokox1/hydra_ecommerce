import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { currentToken, logoutUser } from '../features/user/userSlice';

// assets
import whiteLogo from '../assets/logo-white.png';

const NavBar = () => {
	const jwt = useSelector(currentToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser({ jwt, navigate }));
	};

	return (
		<div className='navBar'>
			<div className='container navBar-contenedor d-flex justify-content-between'>
				<img src={whiteLogo} alt='logo' />

				<div className='d-flex '>
					<ul
						className='d-flex'
						// className={mobile ? "show" : "deploy-nav"}
						// onClick={() => setMobile(false)}
					>
						<li>
							<NavLink className='nav-link' to='/'>
								INICIO
							</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='productos'>
								PRODUCTOS
							</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='promociones'>
								PROMOCIONES
							</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='comprar'>
								COMO COMPRO
							</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='contacto'>
								CONTACTO
							</NavLink>
						</li>
					</ul>
					<div className='navBar-contenedor__buscar d-flex'>
						Buscar <FiSearch />
					</div>
					<div className='navBar-contenedor__carrito d-flex'>
						<IconButton
							onClick={handleLogout}
							variant='ghost'
							color='white'
							colorScheme='whiteAlpha'
							isRound
							icon={<BsFillPersonFill />}
						/>
						<span>
							<NavLink className='nav-link' to='carrito'>
								<AiOutlineShoppingCart />
							</NavLink>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
