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

  const { verifLog, guardarUsuario } = props;

  //Estado incial
  const estadoInicial = {
    curriculums: [],
    carrito: [],
    // estos estados son los iniciales para el logueo y deslogueo
    logueado: false,
    usuario: null,
    usuarios: [],
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

  //A
  const crearUsuario = async (email, pass) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const newUser = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
      };
      dispatch({
        type: "CREAR_USUARIO",
        payload: newUser, // Aquí puedes usar los datos del usuario según tu estructura
      });
    } catch (error) {
      alert("Error al crear usuario: " + error.message);
      console.error("Error al crear usuario", error);
    }
  };

  const logueoUsuario = async (email, pass) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );
      dispatch({
        type: "LOGIN_USUARIO",
        payload: userCredential.user.email,
      });
    } catch (error) {
      alert("Error al loguearse");
      console.error("Error al loguearse", error);
    }
  };

  const desloguearUsuario = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "DESLOGUEAR_USUARIO" });
    } catch (error) {
      console.error("Error deslogueando usuario: ", error);
    }
  };
  const guardarDatosUsuario = (e) => {
    if (e.target.name == "usuario") {
      setEmail(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };
  return (
    <>
      <Contexto.Provider
        value={{
          onValue,
          traerCurriculums,
          getCurriculumById,
          agregarCarrito,
          eliminarDelCarrito,
          guardarDatosUsuario,
          crearUsuario,
          logueoUsuario,
          desloguearUsuario,
          curriculums: state.curriculums,
          carrito: state.carrito,
          logueado: state.logueado,
          usuario: state.usuario,
          usuarios: state.usuarios,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;
