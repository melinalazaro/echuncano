import Contexto from "./Contexto";
import { useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";
import axios from "axios";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function UsarContexto(props) {
  //Funcion DataBase Firebase
  const db = getDatabase();
  const referencia = ref(db, "CV/");
  const { children } = props;
  const auth = getAuth();
  const [email, setEmail] = useState(""); //ambos son vacios para guardar los values con los set
  const [pass, setPass] = useState("");
  const { logueado, setLogueado } = useState(false); // Esto formaria parte del estado inicial
  const { verifLog } = props;

  //Estado incial
  const estadoInicial = {
    curriculums: [],
    carrito: [],
    // estos estados son los iniciales para el logueo y deslogueo
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  useEffect(() => {
    //uso UE porque chupo info de afuera
    onValue(referencia, (snapshot) => {
      const data = snapshot.val();
    });
    traerCurriculums();
  }, []);
  //funcion para traer la base de datos desde firebase.
  const traerCurriculums = async () => {
    const res = await axios.get(
      "https://ecomercechuncano-default-rtdb.europe-west1.firebasedatabase.app/CV.json"
    );
    const datita = res.data.results;
    console.log("que me trae datita", datita);

    const curriculums = datita.map((curriculum) => ({
      id: curriculum.id,
      ...curriculum,
    }));

    console.log("Currículums mapeados:", curriculums);
    dispatch({
      type: "TRAER CV",
      payload: curriculums,
    });
    console.log("traer CV", res.data.results);
  };

  //Funcion para ver el detalle del producto (no me anda)
  const getCurriculumById = (id) => {};

  //Funciones del Carrito de Compras
  //funcion para agregar al carrito
  const agregarCarrito = (item) => {
    console.log("me agrego al carrito", item);
    const existeCarrito = state.carrito.some(
      (producto) => producto.nombre === item.nombre
    );
    if (!existeCarrito) {
      dispatch({
        type: "AGREGAR_CV_CARRITO",
        payload: item,
      });
      console.log("carrito", state.carrito);
    } else {
      alert("ya agregaste este producto a tu carriro");
    }
  };

  //funcion para eliminar del carrito
  const eliminarDelCarrito = (nombre) => {
    dispatch({
      type: "ELIMINAR_CV_CARRITO",
      payload: { nombre },
    });
  };

  //funciones de Logueo y Deslogueo

  //metodo para guardar los usuarios en la base de datos de firebase
  const guardarUsuario = (usuario) => {
    console.log("guardo el usuario:", usuario);
    const refUsuarios = ref(db, "usuarios/" + usuario.uid);
    set(refUsuarios, usuario);
  };

  //Deberia probar con hacer la funcion crear un usuario con un set log .
  const crearUsuario = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        guardarUsuario({ email: user.email, uid: user.uid });
        setLogueado(user);
        // ...
      })
      .catch((error) => {
        console.log("error de creacion de usuario", error.code);
        alert("error de creacion de usuario", error.message);

        // ..
      });
  };

  const logueoUsuario = () => {};

  const desloguearUsuario = () => {};

  return (
    <>
      <Contexto.Provider
        value={{
          onValue,
          traerCurriculums,
          getCurriculumById,
          agregarCarrito,
          eliminarDelCarrito,
          guardarUsuario,
          crearUsuario,
          logueoUsuario,
          desloguearUsuario,
          curriculums: state.curriculums,
          carrito: state.carrito,
          logueado,
          setLogueado,
          setEmail,
          setPass,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;
