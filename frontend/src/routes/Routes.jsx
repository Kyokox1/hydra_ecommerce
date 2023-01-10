import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '~/layout/Layout';
import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import Login from '~/pages/Login';
import Product from '~/pages/Product';
import Promotions from '~/pages/Promotions';
import Checkout from '~/pages/Checkout';
import Success from '~/pages/Success';
import Flavors from '~/pages/Flavors';
import AuthGuard from '~/guards/AuthGuard';
import { PATHS } from '~/constans/pathsRoutes';

const RoutesComp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route element={<AuthGuard />}>
						<Route path={PATHS.LOGIN} element={<Login />} />
						<Route path={PATHS.REGISTER} element={<SignIn />} />
					</Route>
					<Route path={PATHS.PROMOTIONS} element={<Promotions />} />
					<Route path={PATHS.FLAVORS} element={<Flavors />} />
					<Route path={PATHS.PRODUCT} element={<Product />} />
					<Route path='*' element={<Home />} />
					<Route path={PATHS.CHECKOUT} element={<Checkout />} />
					<Route path={PATHS.SUCCESS} element={<Success />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesComp;
