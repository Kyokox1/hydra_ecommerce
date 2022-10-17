import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const exampleSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {}
});

// Action creators are generated for each case reducer function
export const {} = exampleSlice.actions;

export default exampleSlice.reducer;
