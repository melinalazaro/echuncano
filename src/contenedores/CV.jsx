import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Contexto from "../contexto/Contexto";
import axios from "axios";
import style from "../assets/estylos/CV.module.css";

function CV() {
  const { curriculums, traerCurriculums } = useContext(Contexto);

  useEffect(() => {
    traerCurriculums();
  }, []);

  return (
    <>
      <div className={style.divImg}>
        <img
          src="https://static-cse.canva.com/blob/1105036/createresume.png"
          alt=""
          className={style.imgDescr}
        />
        <div className={style.titulo}>
          <h4>CV Titulo caca</h4>
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
