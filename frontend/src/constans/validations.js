import * as yup from 'yup';

export const schema = yup.object().shape({
	username: yup
		.string()
		.max(20, 'el usuario debe tener menos de 20 caracteres')
		.required('usuario requerido'),
	email: yup.string().email('email inválido').required('email requerido'),
	password: yup
		.string()
		.required('contraseña requerida')
		.min(6, 'la contraseña debe tener más de 6 caracteres')
		.max(20, 'la contraseña debe tener menos de 20 caracteres'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'las contraseñas no coinciden')
		.required('confirmación requerido'),
	cellPhone: yup.string().required('celular requerido (solo números)')
});
