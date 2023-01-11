import { Flex, Box, useDisclosure } from '@chakra-ui/react';

// ? components and hooks
import { PaymentInformation } from '~/components/checkout/PaymentInformation';
import { PaypalCheckoutButton } from '~/components/checkout/PaypalCheckoutButton';
import { PayModal } from '~/components/pay-modal/PayModal';
import { PresentDedication } from '~/components/checkout/PresentDedication';
import { useShipping } from '~/hooks/useShipping';
import { NoProductsCheckout } from '~/components/checkout/NoProductsCheckout';
// import { ButtonOrange } from '~/components/home/ButtonOrange';
// import { PaymentOptions } from '~/components/checkout/PaymentOptions';

// ? redux
import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';
import { presentCartState } from '~/features/cart/cartSlice';

const Checkout = () => {
	const productsCart = useSelector(productsInCart);

	const isPresent = useSelector(presentCartState);

	const { selectOption, totalCost } = useShipping();

	const { isOpen, onOpen, onClose } = useDisclosure();

	if (!productsCart.length) return <NoProductsCheckout />;

	return (
		<>
			<Flex
				as='main'
				flexDir='column'
				color='white'
				minH='100vh'
				p={{
					base: '150px 0  50px',
					lg: '150px 2% 50px',
					xl: '150px 5% 50px'
				}}
				gap='40px'
				align={{ base: 'center', lg: 'initial' }}
			>
				{/* header */}
				<PaymentInformation
					selectOption={selectOption}
					totalCost={totalCost}
				/>
				{/* header */}

				<Flex
					w={{ base: '100%', lg: '65%' }}
					flexDir='column'
					align='initial'
					gap='30px'
				>
					{/* <PaymentOptions /> */}

					{/* optional */}
					{isPresent && <PresentDedication />}
					{/* optional */}

					{/* <Flex justify='flex-end' > */}
					{/* <ButtonOrange onClick={onOpen} color='black'> */}
					{/* PAGAR */}
					{/* </ButtonOrange> */}
					{/* </Flex> */}
					<Box w='310px' m='0 auto'>
						<PaypalCheckoutButton
							amount={totalCost}
							products={productsCart}
						/>
					</Box>
				</Flex>
			</Flex>
			{/* Modal */}
			<PayModal isOpen={isOpen} onClose={onClose} />
			{/* Modal */}
		</>
	);
};

export default Checkout;
