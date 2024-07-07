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
      <div className={style.divProduct}>
        <div className={style.headerProducto}>
          <h1>Soy productos</h1>
          <img
            src="https://www.cvmaker.com.mx/static/9afa6a7334779327565f7b1504153efa/04_photo-on-a-cv.png"
            alt=""
            className={style.imgHeader}
          />
        </div>
        <ul className={style.ulCards}>
          {curriculums.map((curriculum) => (
            <Card {...curriculum} key={curriculum.nombre}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Productos;
