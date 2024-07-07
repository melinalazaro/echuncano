function ProductoDetalle() {
  return (
    <>
      <div className={style.divImg}>
        <img
          src="https://static-cse.canva.com/blob/1105036/createresume.png"
          alt=""
          className={style.imgDescr}
        />
        <div className={style.titulo}>
          <h4>CV Titulo {nombre} </h4>
        </div>
        <div className={style.descripcion}>
          <p className={style.txtDescrip}>
            Descripcion del producto {descripcion}{" "}
          </p>
          <div className={style.botonera}>
            <button className={style.btnCard}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductoDetalle;
