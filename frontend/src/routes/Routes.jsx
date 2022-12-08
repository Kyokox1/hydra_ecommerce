import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '~/layout/Layout';
import Comprar from '~/pages/Comprar';
import Login from '~/pages/Login';
import { Product } from '~/pages/Product';
import { Productos } from '~/pages/Productos';
import Promociones from '~/pages/Promociones';
import SignIn from '~/pages/SignIn';

const RoutesComp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Productos />} />
					<Route path='login' element={<Login />} />
					<Route path='signIn' element={<SignIn />} />
					<Route path='promociones' element={<Promociones />} />
					<Route path='sabores' element={<Comprar />} />
					<Route path='product/:id' element={<Product />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComp;
