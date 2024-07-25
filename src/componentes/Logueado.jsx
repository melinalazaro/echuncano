import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/Logueado.module.css";
import Compras from "./Compras";

function Logueado() {
  return (
    <>
      <Compras></Compras>
    </>
  );
}

export default Logueado;
