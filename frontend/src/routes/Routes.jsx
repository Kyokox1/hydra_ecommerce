import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '~/layout/Layout';
import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import Login from '~/pages/Login';
import Product from '~/pages/Product';
import Promotions from '~/pages/Promotions';
import Checkout from '~/pages/Checkout';
import Sucess from '~/pages/Sucess';
import Flavors from '~/pages/Flavors';

const RoutesComp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='signIn' element={<SignIn />} />
					<Route path='promotions' element={<Promotions />} />
					<Route path='flavors' element={<Flavors />} />
					<Route path='product/:id' element={<Product />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='sucess' element={<Sucess />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComp;
