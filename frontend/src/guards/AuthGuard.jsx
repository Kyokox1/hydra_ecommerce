import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../hooks/useUserAuth';

const AuthGuard = () => {
	const { isUserAuthenticated } = useUserAuth();
	return !isUserAuthenticated ? <Outlet /> : <Navigate replace to='/' />;
};

export default AuthGuard;
