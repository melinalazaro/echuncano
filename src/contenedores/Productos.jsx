import style from "../assets/estylos/Productos.module.css";
import Card from "../componentes/Card";
import { useEffect, useContext } from "react";
import Contexto from "../contexto/Contexto";

function Productos() {
  const { curriculums, traerCurriculums } = useContext(Contexto);
  useEffect(() => {
    traerCurriculums();
    console.log("productos recibidos", curriculums);
  }, []);

  return (
    <>
      <div className={style.main}>
        <h1>Soy productos</h1>
      </div>
      <ul className={style.ulCards}>
        {curriculums.map((curriculum) => (
          <Card {...curriculum} key={curriculum.nombre}></Card>
        ))}
      </ul>
    </>
  );
}

export default Productos;
