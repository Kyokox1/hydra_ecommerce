export const extractInfoResgisterProducts = (products) => {
	return products.map(({ id, count, cost }) => ({
		product_id: id,
		quantity: count,
		total: count * cost
	}));
};
