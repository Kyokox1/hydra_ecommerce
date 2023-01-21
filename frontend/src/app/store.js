import { configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ?reducers
import userReducer from '~/features/user/userSlice';
import productsReducer from '~/features/products/getProductsSlice';
import jwtReducer from '~/features/user/jwtSlice';
import productsCartReducer from '~/features/products/productsCartSlice';
import cartReducer from '~/features/cart/cartSlice';

// ?persist state
const persistConfigToken = {
	key: 'jwt',
	version: 1,
	storage
};

const persistConfigProducts = {
	key: 'products',
	version: 1,
	storage
};

const persistedReducerToken = persistReducer(persistConfigToken, jwtReducer);
const persistedReducerCartProducts = persistReducer(
	persistConfigProducts,
	productsCartReducer
);

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		jwt: persistedReducerToken,
		cartProducts: persistedReducerCartProducts,
		cart: cartReducer
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
});
