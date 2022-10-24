import { createSlice } from "@reduxjs/toolkit";

export const signSlice = createSlice({
  name: "sign",
  initialState:{
    estado: true
  },
  reducers:{
    signClear: (state, action) => {
        state.estado = action.payload
    }
  }
});

export const {signClear} = signSlice.actions
export default signSlice.reducer;
       