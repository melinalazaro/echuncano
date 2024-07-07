import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/CV.module.css";

function CV() {
  return (
    <>
      <div className={style.divImg}>
        <img
          src="https://static-cse.canva.com/blob/1105036/createresume.png"
          alt=""
          className={style.imgDescr}
        />
        <div className={style.titulo}>
          <h4>CV Titulo </h4>
        </div>
        <div className={style.descripcion}>
          <p className={style.txtDescrip}>Descripcion del producto</p>
          <div className={style.botonera}>
            <button className={style.btnCard}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CV;
