import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/CV.module.css";
function ProductoDetalle() {
  const { curriculums } = useContext(Contexto);

  const mostrarCV = (curriculum) => {};
  return (
    <>
      <div className={style.divImg}>
        <div className={style.titulo}>
          <h4>CV Titulo {nombre} </h4>
        </div>
        <div className={style.descripcion}>
          <p className={style.txtDescrip}>
            Descripcion del producto {descripcion}{" "}
          </p>
          <div className={style.botonera}>
            <button className={style.btnCard}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductoDetalle;
