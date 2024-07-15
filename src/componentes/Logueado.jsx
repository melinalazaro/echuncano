import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/Logueado.module.css";

function Logueado() {
  const { desloguearUsuario } = useContext(Contexto);
  const handleDeslogueo = () => {
    desloguearUsuario();
  };

  return (
    <>
      <h3>Cntenido Exclusivo</h3>
      <button onClick={handleDeslogueo} className={style.btnDeslogueo}>
        Desloguearse
      </button>
    </>
  );
}

export default Logueado;
