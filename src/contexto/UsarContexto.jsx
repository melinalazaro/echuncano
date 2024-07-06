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
    curriculums: [
      { nombre: "Gero", descripcion: "Nada", url: "", img: "", intro: "" },
    ],
    carrito: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  const traerCurriculums = async () => {
    console.log("me ejecuto:");
    const res = await axios.get(
      "https://ecomercechuncano-default-rtdb.europe-west1.firebasedatabase.app/CV.json"
    );
    dispatch({
      type: "TRAER CV",
      payload: res.data.results,
    });
    console.log("traer CV", res.data.results);
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
