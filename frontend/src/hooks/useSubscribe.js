import { useToast } from '@chakra-ui/react';

export const useSubscribe = () => {
	const toast = useToast();

	const handleSubmit = (event) => {
		event.preventDefault();
		toast({
			description: 'Tu e-mail fue registrado.',
			status: 'success'
		});
		event.target.email.value = '';
	};

	return handleSubmit;
};
