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
import userReducer from '../features/user/userSlice';
import productsReducer from '../features/products/getProductsSlice';
import signReducer from '../features/sigIn/signSlice';
import jwtReducer from '../features/user/jwtSlice';
import productsCartReducer from '../features/products/productsCartSlice';

// ?persist state
const persistConfig = {
	key: 'jwt',
	version: 1,
	storage
};

const persistConfigUser = {
	key: 'user',
	version: 1,
	storage
};

const persistedReducer = persistReducer(persistConfig, jwtReducer);
const persistedUserReducer = persistReducer(persistConfigUser, userReducer);

export const store = configureStore({
	reducer: {
		user: persistedUserReducer,
		products: productsReducer,
		sign: signReducer,
		jwt: persistedReducer,
		cartProducts: productsCartReducer
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
