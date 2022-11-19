import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '~/layout/Layout';
import Carrito from '~/pages/Carrito';
import Comprar from '~/pages/Comprar';
import Contacto from '~/pages/Contacto';
import Login from '~/pages/Login';
import { Productos } from '~/pages/Productos';
import Promociones from '~/pages/Promociones';
import SignIn from '~/pages/SignIn';

const RoutesComp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Login />} />
					<Route path='signIn' element={<SignIn />} />
					<Route path='productos' element={<Productos />} />
					<Route path='promociones' element={<Promociones />} />
					<Route path='comprar' element={<Comprar />} />
					<Route path='contacto' element={<Contacto />} />
					<Route path='carrito' element={<Carrito />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComp;
