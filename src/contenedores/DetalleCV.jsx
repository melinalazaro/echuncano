import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/CV.module.css";

function DetalleCV(props) {
  const { curriculums, agregarCarrito, carrito } = useContext(Contexto);

  const { nombre } = useParams();

  if (!curriculums) {
    return <div>map no encontrado</div>;
  }
  const curriculum = curriculums.find(
    (curriculum) => curriculum.nombre == nombre
  );

  if (!curriculum) {
    return <div>producto no encontrado</div>;
  }

  const { id, descripcion, img, intro, precio } = curriculum;

  //escucha evento funcion agregar Carrito
  const handleCarrito = () => {
    //esto convierte a mi precio en un numero
    const precioNumerico = parseFloat(precio) || 0;
    // en el atributo precio le indico que debe ser el precio numerico
    agregarCarrito({
      id,
      nombre,
      descripcion,
      img,
      intro,
      precio: precioNumerico,
    });
    if (carrito) {
      return carrito.map((item, index) => {
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
      <main className={style.main}>
        <div className={style.divImg}>
          <img src={img} alt="" className={style.imgDescr} />
          <div className={style.titulo}>
            <h4>{nombre} </h4>
          </div>
          <div className={style.descripcion}>
            <p className={style.txtDescrip}>{descripcion} </p>
            <h4 className={style.txtDescrip}> $ {precio} </h4>
            <div className={style.botonera}>
              <button className={style.btnCard} onClick={handleCarrito}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DetalleCV;
