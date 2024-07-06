import style from "../assets/estylos/Card.module.css";

function Card() {
  return (
    <>
      <div className={style.contCard}>
        <img
          src="https://static-cse.canva.com/blob/1105036/createresume.png"
          alt=""
          className={style.imgCard}
        />
        <h4>Titulo </h4>
        <p>Descripcion del producto</p>
        <div className={style.divBtn}>
          <button className={style.btnCard}>Ver detalle</button>
          <button className={style.btnCard}>Comprar</button>
        </div>
      </div>
    </>
  );
}

export default Card;
