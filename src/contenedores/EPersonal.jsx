import style from "../assets/estylos/EPersonal.module.css";
import Deslogueado from "../componentes/Deslogueado";
import Logueado from "../componentes/Logueado";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
function EPersonal() {
  const { logueado, setLogueado } = useContext(Contexto);
  return (
    <>
      <section className={style.main}>
        <div className={style.contTitulo}>
          <h1 className={style.TituloEP}>Bienvenido Pepe!</h1>
        </div>

        {!logueado ? <Deslogueado></Deslogueado> : <Logueado></Logueado>}
      </section>
    </>
  );
}

export default EPersonal;
