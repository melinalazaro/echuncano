import style from "../assets/estylos/TotalCompra.module.css";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { getDatabase, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function TotalCompra() {
  const { carrito, logueado, vaciarCarrito } = useContext(Contexto);
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();

  const handlePagar = () => {
    if (logueado) {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `usuarios/${user.uid}`);
        update(userRef, {
          haPagado: true,
        })
          .then(() => {
            console.log("Estado de pago actualizado correctamente.");
            vaciarCarrito();
            // Aquí podrías redirigir al usuario a una página de confirmación
          })
          .catch((error) => {
            console.error("Error actualizando el estado de pago: ", error);
          });
      } else {
        console.log("No hay usuario logueado.");
        navigate("/cliente"); // Redirigir a la página de logueo si está vacío
      }
    } else {
      console.log("Debes estar logueado para pagar.");
      alert("Debes estar logueado para pagar.");
      navigate("/cliente"); // Redirigir a la página de logueo si está vacío
    }
  };

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
      <button className={style.btnEliminar} onClick={handlePagar}>
        Pagar
      </button>
    </div>
  );
}

export default TotalCompra;
