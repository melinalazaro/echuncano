import React from "react";
import style from "../assets/estylos/Card.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

function Card(props) {
  const { nombre, descripcion, img, intro, precio } = props;
  const { agregarCarrito, carrito } = useContext(Contexto);
  //escucha evento funcion agregar Carrito
  const handleCarrito = () => {
    //esto convierte a mi precio en un numero
    const precioNumerico = parseFloat(precio) || 0;
    // en el atributo precio le indico que debe ser el precio numerico
    agregarCarrito({ nombre, descripcion, img, intro, precio: precioNumerico });
    if (carrito) {
      return carrito.map((item) => {
        if (item.nombre == nombre) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
  };
  return (
    <>
      <div className={style.contCard}>
        <img src={img} alt="" className={style.imgCard} />
        <h4> {nombre} </h4>
        <p className={style.txtIntro}> {intro} </p>
        <p> $ {precio} </p>
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
