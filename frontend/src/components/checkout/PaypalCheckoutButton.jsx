import { PayPalButtons } from '@paypal/react-paypal-js';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '~/hooks/useUserAuth';
import { PATHS } from '~/constans/pathsRoutes';
import {
	extractInfoResgisterProducts,
	postRegisterOrder
} from '~/services/orders';
import { useDispatch } from 'react-redux';
import { removeAllProducts } from '~/features/products/productsCartSlice';

export const PaypalCheckoutButton = ({ amount, products }) => {
	const { isUserAuthenticated, jwt } = useUserAuth();
	const toast = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const sendOrder = (name, data) => {
		if (data.status === 'COMPLETED') {
			const purchaseOrder = extractInfoResgisterProducts(products);
			postRegisterOrder({
				purchaseOrder,
				jwt
			}).then(dispatch(removeAllProducts()));

			navigate(PATHS.SUCCESS);

			toast({
				description: `Transacción completada por ${name}`,
				status: 'success',
				duration: 8000
			});
		}
	};

	const handleCancel = (data) => {
		toast({
			description: `Transacción cancelada`,
			status: 'warning'
		});
		console.log(data);
	};

	const handleError = (error) => {
		toast({
			description: `Hubo un error, intentelo más tarde`,
			status: 'error'
		});
		console.error(error);
	};

	const handleClick = () => {
		if (!isUserAuthenticated) navigate('/login');
	};

	return (
		<PayPalButtons
			style={{
				layout: 'vertical',
				color: 'gold'
			}}
			createOrder={(data, actions) => {
				return actions.order.create({
					purchase_units: [
						{
							amount: {
								value: `${amount}`
							}
						}
					]
				});
			}}
			onApprove={(data, actions) => {
				return actions.order.capture().then((details) => {
					const name = details.payer.name.given_name;
					sendOrder(name, details);
				});
			}}
			onError={handleError}
			onCancel={handleCancel}
			onClick={handleClick}
		/>
	);
};
