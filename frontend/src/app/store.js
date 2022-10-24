import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import productsReducer from "../features/products/getProductsSlice";
import signReducer from "../features/sigIn/signSlice"

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		sign: signReducer
	}
});
