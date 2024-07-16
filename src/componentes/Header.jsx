import { Link } from "react-router-dom";
import style from "../assets/estylos/Header.module.css";
import { useContext, useState } from "react";
import Contexto from "../contexto/Contexto";
function Header() {
  const { logueado, carrito, curriculum, desloguearUsuario, email } =
    useContext(Contexto);
  const quantity = carrito.length;

  const handleDeslogueo = () => {
    desloguearUsuario();
  };
  return (
    <>
      <header>
        {!logueado ? (
          <>
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
                  <li className={style.elementoNav}>
                    <Link className={style.textNav} to="/carrito">
                      <div className={style.divIconCarrito}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                          alt=""
                          className={style.iconCarrito}
                        />
                        <div className={style.divQProductos}>
                          <p className={style.txtNCarrito}>{quantity} </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </div>
              </ul>
            </nav>
          </>
        ) : (
          <>
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
                  <li className={style.elementoNav}>
                    <Link className={style.textNav} to="/carrito">
                      <div className={style.divIconCarrito}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                          alt=""
                          className={style.iconCarrito}
                        />
                        <div className={style.divQProductos}>
                          <p className={style.txtNCarrito}>{quantity} </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className={style.elementoNav}>
                    <button
                      onClick={handleDeslogueo}
                      className={style.btnDeslogueo}
                    >
                      <Link className={style.textNav} to="/cliente">
                        Desloguearse
                      </Link>
                    </button>
                  </li>
                </div>
              </ul>
            </nav>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
