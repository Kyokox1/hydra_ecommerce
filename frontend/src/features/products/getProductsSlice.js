import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	isLoading: false,
	error: {}
};

export const getProductsSlice = createSlice({
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

export const getProducts = (text) => async (dispatch) => {
	try {
		dispatch(getProductsStart());
		// ? Call the API
		// const response = await apiCall(text)
		// dispatch(getProductsComplete(response))
	} catch (error) {
		dispatch(getProductsError(error));
	}
};

// Action creators are generated for each case reducer function
export const { getProductsStart, getProductsComplete, getProductsError } =
	getProductsSlice.actions;

export default getProductsSlice.reducer;
