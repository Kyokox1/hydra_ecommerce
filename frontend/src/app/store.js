import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/getProductsSlice";
import signReducer from "../features/sigIn/signSlice"

export const store = configureStore({
	reducer: {
		products: productsReducer,
		sign: signReducer
	}
});
