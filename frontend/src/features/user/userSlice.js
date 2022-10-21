import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    password: null,
    email: null,
    cellPhone: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },

        registerUser(state, action) {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.email = action.payload.email;
            state.cellPhone = action.payload.cellPhone;
        }
    }
});

// Action creators are generated for each case reducer function
export const { loginUser, registerUser } = userSlice.actions;

export default userSlice.reducer;
