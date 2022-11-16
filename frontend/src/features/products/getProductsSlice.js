import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '~/services/products/getProducts';

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

export const getProducts1 =
	({ jwt }) =>
	async (dispatch) => {
		try {
			dispatch(getProductsStart());
			// ? Call the API
			const response = await getProducts({ jwt });
			dispatch(getProductsComplete(response));
		} catch (error) {
			dispatch(getProductsError(error));
		}
	};

// Action creators are generated for each case reducer function
export const { getProductsStart, getProductsComplete, getProductsError } =
	getProductsSlice.actions;

export default getProductsSlice.reducer;
