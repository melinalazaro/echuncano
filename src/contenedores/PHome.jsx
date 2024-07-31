import style from "../assets/estylos/Home.module.css";
function PHome() {
  return (
    <>
      <div className={style.main}>
        <div className={style.encabezado}>
          <div className={style.divTitulo}>
            <h1 className={style.titulo}>Create CV</h1>
            <h5 className={style.subtitulo}>CREA TU FUTURO </h5>
          </div>
          <div className={style.divImg}>
            <img
              src="https://www.cvmaker.com.mx/shared/images/illustrations/active/Blog.svg"
              alt=""
              className={style.imgHome}
            />
          </div>
        </div>
        <div className={style.divDescrip}>
          <div className={style.divTxt}>
            <p>
              Create CV te permitirá conseguir ese trabajo que tanto quieres.
              <br></br>
              Nuestros profecionales han creado plantillas con diseños eficaces,
              que permiten valorizar tus capacidades frente a otros candidatos.
            </p>
            <br></br>
            <p>
              Con una arquitectura de datos organizada y fácil a leer, puedes
              elegir entre nuestros modelos disponibles el CV que más se adapte
              a tu identidad profesional.
              <br></br>Para tu primer CV o para mejorar el que ya tienes,
              describite de la mejor manera con <strong>Create CV</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PHome;
