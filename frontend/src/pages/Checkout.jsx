import { Flex, Stack, Text, Box, Input, useDisclosure } from '@chakra-ui/react';

// ? components and hooks
import { PaymentInformation } from '~/components/checkout/PaymentInformation';
import { PaypalCheckoutButton } from '~/components/checkout/PaypalCheckoutButton';
import { PayModal } from '~/components/pay-modal/PayModal';
// import { PaymentOptions } from '~/components/checkout/PaymentOptions';
// import { ButtonOrange } from '~/components/home/ButtonOrange';
import { useShipping } from '~/hooks/useShipping';
import { NoProductsCheckout } from '~/components/checkout/NoProductsCheckout';

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
				p='150px 5% 50px'
				gap='30px'
			>
				{/* header */}
				<PaymentInformation
					selectOption={selectOption}
					totalCost={totalCost}
				/>
				{/* header */}

				<Flex w='65%' flexDir='column' align='initial' gap='30px'>
					{/* <PaymentOptions /> */}

					{/* optional */}
					{isPresent && (
						<Stack gap='20px'>
							<Text>DEDICATORIA PARA REGALO</Text>
							<Input
								as='textarea'
								minH='8rem'
								maxH='8rem'
								w='100%'
								p='15px'
							/>
						</Stack>
					)}
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
