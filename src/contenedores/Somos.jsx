import style from "../assets/estylos/Somos.module.css";
function Somos() {
  return (
    <>
      <div className={style.main}>
        <div className={style.bannerSomos}>
          <div className={style.secTit}>
            <h1 className={style.tit}>Quienes Somos</h1>
          </div>
          <img
            src="https://www.cvmaker.cl/static/ce9d8e5b7bd9924bfbfa8527b6f84414/6f18e/no-work-experience-cv.jpg"
            alt=""
            className={style.banner}
          />
        </div>

        <div className={style.parQuienes}>
          <p className={style.parrafos}>
            En Crate CV, creemos que un buen currículum no debe ser una barrera,
            sino una puerta de entrada a nuevas oportunidades. Somos una
            plataforma global dedicada a facilitar la creación de currículums
            profesionales y efectivos, accesibles para todos, sin importar su
            ubicación o experiencia.
          </p>
          <br />
          <p className={style.parrafos}>
            A través de exhaustivos estudios y análisis, hemos identificado las
            estructuras de currículums que tienen mayor éxito en el mercado
            laboral. Con esta valiosa información, hemos diseñado nuestros
            modelos para maximizar tus oportunidades de ser notado y
            seleccionado por los empleadores.
          </p>
          <br />
          <p className={style.parrafos}>
            Nuestro compromiso es contigo y tu éxito profesional. Nos
            enorgullece ser parte de tu viaje hacia el empleo de tus sueños,
            proporcionándote herramientas que faciliten tu búsqueda laboral y te
            acerquen a tus metas.
          </p>
        </div>
        <div className={style.secSubtit}>
          <h3 className={style.subtit}>Nuestra Misión</h3>
        </div>
        <div className={style.parMision}>
          <div className={style.contParEImg}>
            <p className={style.parrafoEImg}>
              Nuestra misión es simplificar el proceso de elaboración de un CV,
              brindándote herramientas y modelos diseñados para resaltar tus
              habilidades y experiencias de manera clara y atractiva. Sabemos
              que buscar empleo puede ser desafiante, y nuestro objetivo es
              eliminar uno de los obstáculos más comunes: la construcción del
              currículum.
            </p>
            <img
              src="https://www.cvmaker.com.mx/shared/images/illustrations/active/blog-category/all.svg"
              alt=""
              height={300}
              className={style.imgMision}
            />
          </div>
          <br />
          <p className={style.parrafos}>
            Contamos con una amplia variedad de modelos personalizables que se
            adaptan a diferentes perfiles y sectores. Ya seas un recién
            graduado, un profesional con años de experiencia o alguien en busca
            de una nueva dirección en su carrera, tenemos el modelo perfecto
            para ti.
          </p>
          <br />
          <p className={style.parrafos}>
            Únete a nuestra comunidad y descubre cómo un CV bien diseñado puede
            abrirte puertas a un mundo de oportunidades. En [Nombre de tu
            Empresa], estamos aquí para ayudarte a destacar y alcanzar tus
            objetivos profesionales.
          </p>
        </div>
      </div>
    </>
  );
}

export default Somos;
