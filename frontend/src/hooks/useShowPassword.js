import { useState } from 'react';

export const useShowPassword = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	return { showPassword, handleShowPassword };
};
