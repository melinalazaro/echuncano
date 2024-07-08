import style from "../assets/estylos/TotalCompra.module.css";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
function TotalCompra() {
  const { carrito } = useContext(Contexto);

  // aca usamos el metodo de reducer de react que espera un acumulador y un elemento
  //entonces voy a sumarle un acumulado a un elemento con su atributo precio
  //y por ultimo le paso el valor inicial del acumulador que es un 0
  const total = carrito.reduce(
    (previousValue, product) => previousValue + parseFloat(product.precio),
    0
  );
  return (
    <div className={style.contTotal}>
      <div className={style.contTxtTotal}>
        <h4 className={style.tituloTotal}>Total a pagar: </h4>
        <h4> {total} $</h4>
      </div>
      <button className={style.btnEliminar}>Pagar</button>
    </div>
  );
}

export default TotalCompra;
