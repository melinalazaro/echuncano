import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/CV.module.css";

function DetalleCV() {
  const { curriculums } = useContext(Contexto);
  const { nombre } = useParams();
  if (!curriculums) {
    return <div>map no encontrado</div>;
  }
  const curriculum = curriculums.find(
    (curriculum) => curriculum.nombre == nombre
  );
  console.log("curriculum", curriculum);
  console.log("Curriculums:", curriculums);
  console.log("nombre recibido:", nombre);
  if (!curriculum) {
    return <div>producto no encontrado</div>;
  }

  const { descripcion, img, intro, precio } = curriculum;

  return (
    <>
      <div className={style.divImg}>
        <img src={img} alt="" className={style.imgDescr} />
        <div className={style.titulo}>
          <h4>{nombre} </h4>
        </div>
        <div className={style.descripcion}>
          <p className={style.txtDescrip}>{descripcion} </p>
          <h4 className={style.txtDescrip}>{precio} </h4>
          <div className={style.botonera}>
            <button className={style.btnCard}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleCV;
