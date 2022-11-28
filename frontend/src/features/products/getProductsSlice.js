import { createSlice } from '@reduxjs/toolkit';
import { getFiltersProducts } from '~/services/products';
import { getProducts as productApi } from '~/services/products/getProducts';

const initialState = {
	data: [],
	isLoading: false,
	error: {}
};

const getProductsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProductsStart(state) {
			state.isLoading = true;
		},

		getProductsComplete(state, action) {
			state.data = action.payload;
			state.isLoading = false;
		},

		getProductsError(state, action) {
			state.error = action.payload;
			state.isLoading = false;
		}
	}
});

export const getProducts = () => async (dispatch) => {
	try {
		dispatch(getProductsStart());
		// ? Call the API
		const response = await productApi();
		dispatch(getProductsComplete(response));
	} catch (error) {
		dispatch(getProductsError(error));
	}
};

export const searchProducts =
	({ search, name }) =>
	async (dispatch) => {
		try {
			dispatch(getProductsStart());
			// ? Call the API
			const response = await getFiltersProducts({ search, name });
			dispatch(getProductsComplete(response));
		} catch (error) {
			dispatch(getProductsError(error));
		}
	};

export const productsStore = (state) => state.products.data;
export const isLoadingProducts = (state) => state.products.isLoading;

// Action creators are generated for each case reducer function
export const { getProductsStart, getProductsComplete, getProductsError } =
	getProductsSlice.actions;

export default getProductsSlice.reducer;
