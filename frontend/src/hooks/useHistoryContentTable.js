import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { productsInCart } from '~/features/products/productsCartSlice';

export const useHistoryContentTable = ({ productsHistory }) => {
	const productsCart = useSelector(productsInCart);

	const myCount = useMemo(
		() => [
			{ title: 0, content: 'Ordenes Pendientes' },
			{ title: 0, content: 'Pagos Pendientes' },
			{ title: 0, content: 'Mensajes Pendientes' },
			{ title: productsCart.length, content: 'Productos en Carrito' }
		],
		[productsHistory, productsInCart]
	);

	const newArr = useMemo(() => {
		if (!productsHistory.length) return [];
		return productsHistory.map((product) => ({
			numOrder: product.num_sale,
			subtotal: product.products.reduce(
				(acc, curr) => acc + curr.pivot.total,
				0
			),
			discount: 0,
			shippingAmount: 1300,
			total:
				product.products.reduce(
					(acc, curr) => acc + curr.pivot.total,
					0
				) + 1300,
			state: 'enviado',
			dateSale: product.date_sale
		}));
	}, [productsHistory]);

	const lastOrders = useMemo(
		() => ({
			titles: [
				'# orden',
				'Subtotal',
				'Descuento',
				'Monto de Envio',
				'Total',
				'Estado'
			],
			content: [...newArr]
		}),
		[newArr, productsHistory]
	);

	return { myCount, lastOrders };
};
