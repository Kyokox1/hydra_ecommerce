import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { signClear } from "../../../features/sigIn/signSlice";

const Form = () => {

  const estado = useSelector((state) => state.sign);
  const dispatch = useDispatch();
  return (
    <div className="form d-flex justify-content-center my-0">
      <form>
        <div className="form-usuario d-flex flex-column my-4">
          <label>USUARIO</label>
          <input type="text" />
        </div>
        <div className="form-contraseña d-flex flex-column my-4">
          <label>CONTRASEÑA</label>
          <input type="pasword" />
        </div>
        <div className="d-flex justify-content-center">
          <button>LOGIN</button>
        </div>
        <h5 className="text-center">Olvidaste la contraseña</h5>
        <h5 onClick={() => dispatch(signClear(!estado.estado))}  className="text-center crear-cuenta">Crea una cuenta</h5>
      </form>
    </div>
  );
};

export default Form;
