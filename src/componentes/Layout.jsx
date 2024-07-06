import Header from "./Header";
import Footer from "./Footer";
import style from "../assets/estylos/Layout.module.css";
import { Children } from "react";
function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
