import React, { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { signClear } from "../../../features/sigIn/signSlice";
import { registerUser } from "../../../features/user/userSlice";

const FormSign = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [cellPhone, setCellPhone] = useState("");

	const dispatch = useDispatch();

	// validaciones
	const isFormComplete =
		username && email && password && confirmPassword && cellPhone;
	const isPasswordEqual = password === confirmPassword;

	// submit
	const handleSubmit = (event) => {
		event.preventDefault();

		if (!isFormComplete || !isPasswordEqual) return;
		const userData = { username, password, email, cellPhone };

		dispatch(registerUser(userData));
		dispatch(signClear(false));
	};

	return (
		<div className="formSignIn">
			<form onSubmit={handleSubmit}>
				<div className="d-flex justify-content-center">
					<button>Crear Cuenta</button>
				</div>
				<div className="formSignIn-usuario d-flex flex-column my-4">
					<label>USUARIO</label>
					<input
						type="text"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className="formSignIn-usuario d-flex flex-column my-4">
					<label>CORREO ELECTRONICO</label>
					<input
						type="text"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="formSignIn-contraseña d-flex flex-column my-4">
					<label>CONTRASEÑA</label>
					<input
						type="pasword"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<div className="formSignIn-usuario d-flex flex-column my-4">
					<label>REPETIR CONTRASEÑA</label>
					<input
						type="text"
						value={confirmPassword}
						onChange={(event) =>
							setConfirmPassword(event.target.value)
						}
					/>
				</div>
				<div className="formSignIn-usuario d-flex flex-column my-4">
					<label>Telefono/movil</label>
					<input
						type="text"
						value={cellPhone}
						onChange={(event) => setCellPhone(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormSign;
