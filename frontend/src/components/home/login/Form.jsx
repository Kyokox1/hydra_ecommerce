import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { signClear } from "../../../features/sigIn/signSlice";

// router
import { useNavigate } from "react-router-dom";

const Form = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isInvalidUser, setIsInvalidUser] = useState(false);

	const estado = useSelector((state) => state.sign);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (username !== user.username || password !== user.password)
			return setIsInvalidUser(true);

		navigate("/productos");
	};

	return (
		<div className="form d-flex justify-content-center my-0">
			<form onSubmit={handleSubmit}>
				<div className="form-usuario d-flex flex-column my-4">
					<label>USUARIO</label>
					<input
						type="text"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className="form-contraseña d-flex flex-column my-4">
					<label>CONTRASEÑA</label>
					<input
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					{isInvalidUser && (
						<Text
							as="span"
							pos="absolute"
							bottom="-20px"
							color="red"
							fontSize="xs"
						>
							Usario o Contraseña incorrecto
						</Text>
					)}
				</div>
				<div className="d-flex justify-content-center">
					<button>LOGIN</button>
				</div>
				<h5 className="text-center">Olvidaste la contraseña</h5>
				<h5
					onClick={() => dispatch(signClear(!estado.estado))}
					className="text-center crear-cuenta"
				>
					Crea una cuenta
				</h5>
			</form>
		</div>
	);
};

export default Form;
