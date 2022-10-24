import React from "react";

const FormSign = () => {
  return (
    <div className="formSignIn">
      <form>
        <div className="d-flex justify-content-center">
          <button>Crear Cuenta</button>
        </div>
        <div className="formSignIn-usuario d-flex flex-column my-4">
          <label>USUARIO</label>
          <input type="text" />
        </div>
        <div className="formSignIn-usuario d-flex flex-column my-4">
          <label>CORREO ELECTRONICO</label>
          <input type="text" />
        </div>
        <div className="formSignIn-contraseña d-flex flex-column my-4">
          <label>CONTRASEÑA</label>
          <input type="pasword" />
        </div>
        <div className="formSignIn-usuario d-flex flex-column my-4">
          <label>REPETIR CONTRASEÑA</label>
          <input type="text" />
        </div>
        <div className="formSignIn-usuario d-flex flex-column my-4">
          <label>Telefono/movil</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default FormSign;
