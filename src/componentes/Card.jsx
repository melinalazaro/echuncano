import React from "react";
import style from "../assets/estylos/Card.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

function Card(props) {
  const { nombre, descripcion, img, intro, precio } = props;
  const { agregarCarrito } = useContext(Contexto);
  //escucha evento funcion agregar Carrito
  const handleCarrito = () => {
    agregarCarrito({ nombre, descripcion, img, intro, precio });
  };
  return (
    <>
      <div className={style.contCard}>
        <img src={img} alt="" className={style.imgCard} />
        <h4> {nombre} </h4>
        <p className={style.txtIntro}> {intro} </p>
        <p>{precio} </p>
        <div className={style.divBtn}>
          <button className={style.btnCard}>
            <Link to={"/productos/*"}>Ver Detalle</Link>
          </button>
          <button className={style.btnCard} onClick={handleCarrito}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
