import style from "../assets/estylos/Home.module.css";
function PHome() {
  return (
    <>
      <div className={style.main}>
        <div className={style.divTitulo}>
          <h1>Create CV</h1>
        </div>
        <div className={style.divDescrip}>
          <div className={style.divTxt}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className={style.divImg}>
            <img
              src="https://www.cvmaker.com.mx/shared/images/illustrations/active/blog-category/all.svg"
              alt=""
              className={style.imgHome}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PHome;
