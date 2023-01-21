import { useSelector } from 'react-redux';
import { currentToken } from '~/features/user/jwtSlice';

export const useUserAuth = () => {
	const jwt = useSelector(currentToken);
	const isUserAuthenticated = Boolean(jwt);

	return { isUserAuthenticated, jwt };
};
