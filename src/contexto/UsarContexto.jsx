import Contexto from "./Contexto";
import { useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import axios from "axios";
import { getDatabase, ref, onValue } from "firebase/database";

function UsarContexto(props) {
  //Funcion DataBase Firebase
  const db = getDatabase();
  const referencia = ref(db, "CV/");
  const { children } = props;
  //Estado incial
  const estadoInicial = {
    curriculums: [],
    carrito: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

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

  useEffect(() => {
    //uso UE porque chupo info de afuera
    onValue(referencia, (snapshot) => {
      const data = snapshot.val();
    });
    traerCurriculums();
  }, []);

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
  return (
    <>
      <Contexto.Provider
        value={{
          onValue,
          traerCurriculums,
          getCurriculumById,
          agregarCarrito,
          eliminarDelCarrito,
          curriculums: state.curriculums,
          carrito: state.carrito,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;
