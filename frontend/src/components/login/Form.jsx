import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { username, password };
    dispatch(loginUser(userData));
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
            type="pasword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button>LOGIN</button>
        </div>
        <h5 className="text-center">Olvidaste la contraseña</h5>
        <h5 className="text-center">Crea una cuenta</h5>
      </form>
    </div>
  );
};

export default Form;
