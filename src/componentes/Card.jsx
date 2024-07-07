import React from "react";
import style from "../assets/estylos/Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const { nombre, descripcion, img, intro, precio } = props;

  return (
    <>
      <div className={style.contCard}>
        <img
          src="https://static-cse.canva.com/blob/1105036/createresume.png"
          alt=""
          className={style.imgCard}
        />
        <h4> {nombre} </h4>
        <p className={style.txtIntro}> {intro} </p>
        <p>{precio} </p>
        <div className={style.divBtn}>
          <button className={style.btnCard}>
            <Link to={"/productos/*"}>Ver Detalle</Link>
          </button>
          <button className={style.btnCard}>Agregar al carrito</button>
        </div>
      </div>
    </>
  );
}

export default Card;
