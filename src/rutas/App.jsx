import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/estylos/App.css";
import PHome from "../contenedores/PHome";
import Productos from "../contenedores/Productos";
import EPersonal from "../contenedores/EPersonal";
import Somos from "../contenedores/Somos";
import Layout from "../componentes/Layout";
import { initializeApp } from "firebase/app";
import UsarContexto from "../contexto/UsarContexto";
import CV from "../contenedores/CV";

const firebaseConfig = {
  apiKey: "AIzaSyCIPNtt7iEUC4Gf5FDWY-S9Wvhpfl1oRY8",
  authDomain: "ecomercechuncano.firebaseapp.com",
  databaseURL:
    "https://ecomercechuncano-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecomercechuncano",
  storageBucket: "ecomercechuncano.appspot.com",
  messagingSenderId: "311471080587",
  appId: "1:311471080587:web:28f012a7379379e961008e",
  measurementId: "G-94Q0LHBCWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <UsarContexto>
        <Layout>
          <Routes>
            <Route path="/" element={<PHome />}></Route>
            <Route path="/cliente" element={<EPersonal />}></Route>
            <Route path="/productos" element={<Productos />}></Route>
            <Route path="/productos/*" element={<CV />}></Route>
            <Route path="/somos" element={<Somos />}></Route>
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>
  );
}

export default App;
