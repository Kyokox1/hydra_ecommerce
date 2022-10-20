import React from "react";

const Form = () => {
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
        <h5 className="text-center">Crea una cuenta</h5>
      </form>
    </div>
  );
};

export default Form;
