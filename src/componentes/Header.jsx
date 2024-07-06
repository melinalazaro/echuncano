import { Link } from "react-router-dom";
import style from "../assets/estylos/Header.module.css";
function Header() {
  return (
    <>
      <header>
        <nav className={style.navbar}>
          <ul className={style.navUl}>
            <div className={style.contPaginas}>
              <li className={style.elementoNav}>
                <Link className={style.textNav} to="/">
                  Home
                </Link>
              </li>

              <li className={style.elementoNav}>
                <Link className={style.textNav} to="/somos">
                  Quienes Somos
                </Link>
              </li>
              <li className={style.elementoNav}>
                <Link className={style.textNav} to="/productos">
                  Modelos
                </Link>
              </li>
            </div>
            <div className={style.contMiCuenta}>
              <li className={style.elementoNav}>
                <Link className={style.textNav} to="/cliente">
                  Mi Cuenta
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
