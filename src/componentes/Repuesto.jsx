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
    curriculums: [{ nombre: "", descripcion: "", url: "" }],
    carrito: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const traerCurriculums = () => {
    console.log("el traer CV");
  };
  useEffect(() => {
    //uso UE porque chupo info de afuera
    onValue(referencia, (snapshot) => {
      const data = snapshot.val();
      console.log("lo que me trae la ref", data);
    });
    traerCurriculums();
  }, []);

  return (
    <>
      <Contexto.Provider
        value={{
          onValue,
          traerCurriculums,
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
