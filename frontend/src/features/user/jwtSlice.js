import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	jwt: null,
	user: null
};

const jwtSlice = createSlice({
	name: 'jwt',
	initialState,
	reducers: {
		changeJwt(state, action) {
			state.jwt = action.payload.jwt;
		}
	}
});

export const { changeJwt } = jwtSlice.actions;

export default jwtSlice.reducer;
