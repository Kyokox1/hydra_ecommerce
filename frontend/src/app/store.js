import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/getProductsSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer
	}
});
