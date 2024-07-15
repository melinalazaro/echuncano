import style from "../assets/estylos/Deslogueado.module.css";
import React from "react";
import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";

function Deslogueado(props) {
  const [crear, setCrear] = useState(false);

  const { crearUsuario, setEmail, setPass, logueoUsuario } =
    useContext(Contexto);

  const handleNoTengo = () => {
    setCrear(!crear);
    console.log("funcion No tengo cuenta ");
  };

  const handleCrear = () => {
    crearUsuario();
  };

  const handleLog = () => {};

  const handleText = (e) => {
    if (e.target.name == "usuario") {
      setEmail(e.target.value);
    } else {
      setPass(e.target.value);
    }
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
                onChange={handleText}
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Mi contraseña"
                className={style.imputLog}
                onChange={handleText}
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
                onChange={handleText}
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Mi contraseña"
                className={style.imputLog}
                onChange={handleText}
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
