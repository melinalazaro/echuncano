import style from "../assets/estylos/Deslogueado.module.css";
import React from "react";
import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";

function Deslogueado(props) {
  const [crear, setCrear] = useState(false);

  const {
    crearUsuario,
    logueoUsuario,
    guardarDatosUsuario,

    email,
    pass,
  } = useContext(Contexto);

  const { verifLog } = props;

  const handleNoTengo = () => {
    setCrear(!crear);
    console.log("funcion No tengo cuenta ");
  };

  const handleCrear = () => {
    crearUsuario(email, pass);
  };

  const handleLog = () => {
    logueoUsuario(email, pass);
  };

  const handleEmail = (e) => {
    guardarDatosUsuario(e);
  };
  const handlePass = (e) => {
    guardarDatosUsuario(e);
  };
  return (
    <>
      <div className={style.contenedorCrarCuenta}>
        <h4>Logueate </h4>
        {!crear ? (
          <>
            <div>
              <input
                type="text"
                name="usuario"
                placeholder="Mi email"
                className={style.imputLog}
                onChange={handleEmail}
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Mi contraseña"
                className={style.imputLog}
                onChange={handlePass}
              />
              <button onClick={handleLog} className={style.btnDeslogueo}>
                Logueate
              </button>{" "}
              <p onClick={handleNoTengo}>Aun no tengo crenta</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <input
                type="text"
                name="usuario"
                placeholder="Mi email"
                className={style.imputLog}
                onChange={handleEmail}
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Mi contraseña"
                className={style.imputLog}
                onChange={handlePass}
              />
              <button onClick={handleCrear} className={style.btnDeslogueo}>
                Crear cuenta
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Deslogueado;
