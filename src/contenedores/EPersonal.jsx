import style from "../assets/estylos/EPersonal.module.css";
import Deslogueado from "../componentes/Deslogueado";
import Logueado from "../componentes/Logueado";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
function EPersonal() {
  const { logueado, email } = useContext(Contexto);
  return (
    <>
      <section className={style.main}>
        {!logueado ? (
          <>
            <div className={style.contTitulo}>
              <h1 className={style.TituloEP}>Mi Cuenta </h1>
            </div>
            <Deslogueado></Deslogueado>
          </>
        ) : (
          <>
            <div className={style.contTitulo}>
              <h1 className={style.TituloEP}>Bienvenido {email} </h1>
            </div>
            <Logueado></Logueado>
          </>
        )}
      </section>
    </>
  );
}

export default EPersonal;
