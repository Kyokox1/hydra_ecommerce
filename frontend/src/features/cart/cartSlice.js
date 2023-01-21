import { createSlice } from '@reduxjs/toolkit';
import { optionsShipping } from '~/constans/optionsShipping';

const initialState = {
	isPresent: false,
	shippingOption: optionsShipping[0].value
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeIsPresent(state, action) {
			state.isPresent = action.payload;
		},
		changeShippingOption(state, action) {
			state.shippingOption = action.payload;
		}
	}
});

export const presentCartState = (state) => state.cart.isPresent;
export const shippingCartState = (state) => state.cart.shippingOption;

export const { changeIsPresent, changeShippingOption } = cartSlice.actions;
export default cartSlice.reducer;
