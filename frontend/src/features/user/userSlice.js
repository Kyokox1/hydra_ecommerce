import { createSlice } from '@reduxjs/toolkit';
import { postLoginUser, postLogoutUser, postSignUpUser } from '~/services/auth';
import { updateJwt } from './jwtSlice';

const initialState = {
	user: {},
	jwt: '',
	isLoading: false,
	error: null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUserStart(state) {
			state.isLoading = true;
		},
		fetchUserCancelLoading(state) {
			state.isLoading = false;
		},
		fetchUserComplete(state, action) {
			state.user = action.payload.user;
			state.jwt = action.payload.jwt;
			state.error = null;
			state.isLoading = false;
		},
		fetchUserError(state, action) {
			state.error = action.payload;
			state.isLoading = false;
		},
		fetchUserReset(state) {
			state.jwt = '';
			state.user = {};
			state.isLoading = false;
			state.error = null;
		}
	}
});

export const currentUser = (state) => state.user.user;
export const userIsLoading = (state) => state.user.isLoading;
export const userError = (state) => state.user.error;

// ? middlewares
export const registerUser =
	({
		email,
		name,
		password,
		confirmPassword,
		navigate,
		resetForm,
		setisEmailInvalid
	}) =>
	async (dispatch) => {
		try {
			dispatch(fetchUserStart());
			// ? Call the API
			const response = await postSignUpUser({
				email,
				name,
				password,
				confirmPassword
			});
			const { token: jwt, user, status } = response;

			if (!status || status !== 'success') {
				setisEmailInvalid(true);
				dispatch(fetchUserCancelLoading());
				return;
			}

			dispatch(fetchUserComplete({ user, jwt }));
			dispatch(updateJwt(jwt));
			navigate('/');
			resetForm();
		} catch (error) {
			dispatch(fetchUserError(error));
		}
	};

export const loginUser =
	({ email, password, navigate }) =>
	async (dispatch) => {
		try {
			dispatch(fetchUserStart());
			// ? Call the API
			const { status, token, user } = await postLoginUser({
				email,
				password
			});

			if (!status || status !== 'success')
				return dispatch(fetchUserError(true));
			dispatch(fetchUserComplete({ user, jwt: token }));
			dispatch(updateJwt(token));
			navigate('/');
		} catch (error) {
			dispatch(fetchUserError(error));
		}
	};

export const logoutUser =
	({ jwt, navigate, closePopover }) =>
	async (dispatch) => {
		try {
			dispatch(fetchUserStart());
			// ? Call the API
			const { status } = await postLogoutUser({ jwt });

			if (!status || status !== 'success') return;

			closePopover();
			dispatch(fetchUserReset());
			dispatch(updateJwt(null));
			navigate('/login');
		} catch (error) {
			dispatch(fetchUserError(error));
		}
	};

// Action creators are generated for each case reducer function
export const {
	fetchUserStart,
	fetchUserCancelLoading,
	fetchUserComplete,
	fetchUserError,
	fetchUserReset
} = userSlice.actions;

export default userSlice.reducer;
