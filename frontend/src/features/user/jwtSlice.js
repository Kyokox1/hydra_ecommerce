import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	jwt: null
};

const jwtSlice = createSlice({
	name: 'jwt',
	initialState,
	reducers: {
		updateJwt(state, action) {
			state.jwt = action.payload;
		}
	}
});

export const currentToken = (state) => state.jwt.jwt;

export const { updateJwt } = jwtSlice.actions;

export default jwtSlice.reducer;
