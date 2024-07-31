import { useContext, useState, useEffect } from "react";
import Contexto from "../contexto/Contexto";
import style from "../assets/estylos/Compras.module.css";
function Compras() {
  const { cargarCompras, compras } = useContext(Contexto);
  useEffect(() => {
    cargarCompras();
  }, []);

  return (
    <div className={style.contCompras}>
      {compras.length > 0 ? (
        <div className={style.divListCompras}>
          <div className={style.tusCompras}>
            <h1>Tus Compras</h1>
            <img
              src="https://www.cvmaker.com.mx/shared/images/illustrations/active/blog-category/all.svg"
              alt="imagen de tus compras"
              height={470}
            />
          </div>

          <ul className={style.uldiv}>
            {compras.map((compra, index) => (
              <li key={index} className={style.listado}>
                <p className={style.liTit}>{compra.nombre}</p>
                <p>
                  Completa el model de cv con tus datos en el siguiente link:
                </p>
                <a className={style.botonEditCV} href={compra.url}>
                  Editar mi CV
                </a>
                <p>Precio: ${compra.precio}</p>
                <img src={compra.img} alt={compra.nombre} width="100" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tienes compras realizadas.</p>
      )}
    </div>
  );
}

export default Compras;
