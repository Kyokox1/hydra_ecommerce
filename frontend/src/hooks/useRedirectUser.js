import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserAuth } from './useUserAuth';

export const useRedirectUser = () => {
	const { isUserLogged } = useUserAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isUserLogged) navigate('/');
	}, [isUserLogged]);
};
