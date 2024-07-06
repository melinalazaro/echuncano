import style from "../assets/estylos/Productos.module.css";
import Card from "../componentes/Card";

function Productos() {
  return (
    <>
      <div className={style.main}>
        <h1>Soy productos</h1>
        <Card></Card>
      </div>
    </>
  );
}

export default Productos;
