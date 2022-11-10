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
		incrementProduct(state, action) {
			state.products.map((product) =>
				product.id === action.payload.id ? product.count++ : product
			);
		},
		decreaseProduct(state, action) {
			state.products.map((product) =>
				product.id === action.payload.id && product.count > 0
					? product.count--
					: product
			);
		}
	}
});

export const { addProduct, removeProduct, incrementProduct, decreaseProduct } =
	productsCartSLice.actions;

export default productsCartSLice.reducer;
