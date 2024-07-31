import style from "../assets/estylos/Deslogueado.module.css";
import React from "react";
import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";

function Deslogueado(props) {
  const [crear, setCrear] = useState(false);

  const { crearUsuario, setEmail, setPass, setNombre, logueoUsuario } =
    useContext(Contexto);

  const handleNoTengo = () => {
    setCrear(!crear);
  };

  const handleCrear = () => {
    crearUsuario();
  };

  const handleLog = () => {
    logueoUsuario();
  };

  const handleText = (e) => {
    if (e.target.name == "usuario") {
      setEmail(e.target.value);
      if (e.target.name == "nombre") {
        setNombre(e.target.value);
      }
    } else {
      setPass(e.target.value);
    }
  };

  return (
    <>
      <div className={style.contenedorCrarCuenta}>
        <div className={style.divLog}>
          {!crear ? (
            <>
              <h4>Logueate </h4>
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
              <p onClick={handleNoTengo} className={style.txtlink}>
                Aun no tengo crenta
              </p>
            </>
          ) : (
            <>
              <h4>Completá tus datos </h4>

              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                className={style.imputLog}
                onChange={handleText}
              />
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
            </>
          )}
        </div>
        <div className={style.divImg}>
          <img
            src="https://www.cvmaker.com.mx/shared/images/illustrations/active/BuildCV.svg"
            alt=""
            width={"300px"}
            height={"300px"}
            className={style.imagen}
          />
        </div>
      </div>
    </>
  );
}

export default Deslogueado;
