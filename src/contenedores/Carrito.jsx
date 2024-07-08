import style from "../assets/estylos/Carrito.module.css";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import TotalCompra from "../componentes/TotalCompra";
function Carrito() {
  const { carrito, eliminarDelCarrito } = useContext(Contexto);

  const handleEliminar = (nombre) => {
    eliminarDelCarrito(nombre);
  };

  return (
    <>
      <section className={style.sectCarrito}>
        <div className={style.contElementos}>
          <div className={style.divTitulo}>
            <h1 className={style.carritoTitle}>Tu Pedido</h1>
          </div>
          <div className={style.divElemento}>
            <ul className={style.ulCarrito}>
              {carrito.length > 0 ? (
                carrito.map((curriculum) => (
                  <li key={curriculum.nombre}>
                    <div className={style.liCarrito}>
                      <h3 className={style.nombreElemento}>
                        {curriculum.nombre}
                      </h3>
                      <p>{curriculum.precio} </p>
                      <button
                        onClick={() => handleEliminar(curriculum.nombre)}
                        className={style.btnEliminar}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p>No tienes productos en tu carrito.</p>
              )}
            </ul>
          </div>
          <div>
            <TotalCompra></TotalCompra>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carrito;
