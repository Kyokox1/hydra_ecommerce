import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: []
};

const productsCartSLice = createSlice({
	name: 'productsCart',
	initialState,
	reducers: {
		addProduct(state, action) {
			state.products.push(action.payload);
		},
		removeProduct(state, action) {
			state.products.filter(
				(product) => product.id !== action.payload.id
			);
		},
		removeAllProducts(state) {
			state.products = initialState.products;
		},
		incrementProductCount(state, action) {
			state.products.map((product) =>
				product.id === action.payload.id
					? ((product.count += action.payload.count),
					  (product.stock -= action.payload.count))
					: product
			);
		},
		decrementProductCount(state, action) {
			state.products.map((product) =>
				product.id === action.payload.id
					? ((product.count -= action.payload.count),
					  (product.stock += action.payload.count))
					: product
			);
		}
	}
});

export const productsInCart = (state) => state.cartProducts.products;

export const {
	addProduct,
	removeProduct,
	removeAllProducts,
	incrementProductCount,
	decrementProductCount
} = productsCartSLice.actions;

export default productsCartSLice.reducer;
