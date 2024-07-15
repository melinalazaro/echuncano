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
          <h1 className={style.TituloEP}>Soy el espacio personal</h1>
          <img
            src="https://www.cvmaker.uk/static/711c48da8f89d843cef7c1e9298ef667/126f5/07_what-are-soft-skills-on-a-cv.png"
            alt=""
            width={"40px"}
            height={"40px"}
          />
        </div>
        {!logueado ? <Deslogueado></Deslogueado> : <Logueado></Logueado>}
      </section>
    </>
  );
}

export default EPersonal;
