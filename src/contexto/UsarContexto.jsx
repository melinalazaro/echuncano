import Contexto from "./Contexto";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reducer from "./Reducer";
import Swal from "sweetalert2";
import axios from "axios";
import { getDatabase, ref, onValue, set, update, get } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function UsarContexto(props) {
  //Funcion DataBase Firebase
  const db = getDatabase();
  const referencia = ref(db, "CV/");
  const { children } = props;
  const auth = getAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState(""); //ambos son vacios para guardar los values con los set
  const [pass, setPass] = useState("");
  const [logueado, setLogueado] = useState(false); // Esto formaria parte del estado inicial
  const { verifLog } = props;
  const navigate = useNavigate();

  //Estado incial
  const estadoInicial = {
    curriculums: [],
    carrito: JSON.parse(localStorage.getItem("carrito")) || [],
    //al estado de carrito le pongo el getItem del Localstorage para que me traiga lo que esta guardado
    // estos estados son los iniciales para el logueo y deslogueo
    compras: [], // Estado para las compras del usuario
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  useEffect(() => {
    //uso UE porque chupo info de afuera
    onValue(referencia, (snapshot) => {
      const data = snapshot.val();
    });
    traerCurriculums();
  }, []);

  //utiliso el UseEffect porque traigo de afuera, y uso la funcion de setItel del local storage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state.carrito));
  }, [state.carrito]);

  useEffect(() => {
    //funcion de permanencia de usuario
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLogueado(true);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });

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

  //Funciones del Carrito de Compras
  //funcion para agregar al carrito
  const agregarCarrito = (item) => {
    if (logueado) {
      const existeCarrito = state.carrito.some(
        (producto) => producto.nombre === item.nombre
      );
      if (!existeCarrito) {
        dispatch({
          type: "AGREGAR_CV_CARRITO",
          payload: item,
        });
        console.log("Producto agregado al carrito local", item);
      } else {
        Swal.fire({
          title: "ups",
          text: "Debes loguearte para agregar elementos a tu carrito",
          icon: "warning",
        });
      }
    } else {
      console.log("Debes estar logueado para agregar productos al carrito.");
      Swal.fire({
        title: "ups",
        text: "Debes loguearte para agregar elementos a tu carrito",
        icon: "warning",
      });
      navigate("/cliente");
    }
  };

  //funcion para eliminar del carrito
  const eliminarDelCarrito = async (nombre) => {
    dispatch({
      type: "ELIMINAR_CV_CARRITO",
      payload: { nombre },
    });
  };

  //Funcion para pagar el carrito

  const pagarCarrito = async () => {
    if (logueado) {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `usuarios/${user.uid}`);

        try {
          // Guarda los productos del carrito en la base de datos
          await set(ref(db, `usuarios/${user.uid}/compras`), {
            productos: state.carrito,
            fecha: new Date().toISOString(),
          });

          // Vacía el carrito local y en la base de datos
          await update(userRef, {
            carrito: [],
          });

          dispatch({ type: "VACIAR_CV_CARRITO" });
          console.log("Compra realizada y carrito vacío");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Felicitaciones!",
            text: "Tu compra se ha realizado con éxito",
            showConfirmButton: false,
            timer: 2000,
          });

          // Redirige o muestra un mensaje de confirmación  revisar!!!!
          navigate("/cliente"); // O muestra un mensaje de éxito
        } catch (error) {
          console.error(
            "Error al procesar el pago y guardar en la base de datos: ",
            error
          );
        }
      } else {
        console.log("No hay usuario logueado.");
        navigate("/cliente");
      }
    } else {
      console.log("Debes estar logueado para pagar.");
      alert("Debes estar logueado para pagar.");
      navigate("/cliente");
    }
  };

  //funcion para vaciar el carrito
  //en este caso no necesito un payload porque no estoy agregando ningun dato al status.
  // solo debo indicar la accion a realizar
  const vaciarCarrito = () => {
    dispatch({
      type: "VACIAR_CV_CARRITO",
    });
  };
  // funcion para cargar las compras que el usuario ha hecho
  const cargarCompras = async () => {
    if (logueado) {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `usuarios/${user.uid}/compras`);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            dispatch({
              type: "MOSTRAR_COMPRAS",
              payload: data.productos || [], // Asegúrate de manejar el caso cuando no haya productos
            });
          } else {
            dispatch({
              type: "MOSTRAR_COMPRAS",
              payload: [], // Si no hay compras
            });
          }
        });
      }
    }
  };

  //funciones de Logueo y Deslogueo

  //metodo para guardar los usuarios en la base de datos de firebase
  const guardarUsuario = async (user) => {
    console.log("guardo el user:", user);
    const refUsuarios = ref(db, "usuarios/" + user.uid);
    await set(refUsuarios, {
      email: user.email || "", // Proporcionar un valor por defecto si es undefined
      uid: user.uid || "",
      nombre: user.displayName || "", // Proporcionar un valor por defecto si es undefined
      haPagado: false, // Inicializamos el campo haPagado en false
    });
    console.log("esto me trae la refusuario", user);
  };

  //Deberia probar con hacer la funcion crear un usuario con un set log .
  const crearUsuario = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("lo que me trae user", user);
        await guardarUsuario({
          email: user.email,
          uid: user.uid,
          nombre: user.displayName,
        });
        setLogueado(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);

        // ..
      });
  };

  const logueoUsuario = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario logueado:", user);
        setLogueado(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  const desloguearUsuario = () => {
    signOut(auth)
      .then(() => {
        console.log("Usuario deslogueado");
        alert(
          "Al desloguearte los productos que tienen en tu carrito se borrarán y deberés volver a agregarlos la próxima vez que te loguees"
        );
        dispatch({ type: "VACIAR_CV_CARRITO" }); // Vaciar el carrito local
        setLogueado(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <Contexto.Provider
        value={{
          onValue,
          traerCurriculums,
          agregarCarrito,
          eliminarDelCarrito,
          guardarUsuario,
          crearUsuario,
          logueoUsuario,
          desloguearUsuario,
          curriculums: state.curriculums,
          carrito: state.carrito,
          compras: state.compras,
          logueado,
          setLogueado,
          setEmail,
          email,
          setPass,
          setNombre,
          pagarCarrito,
          vaciarCarrito,
          cargarCompras,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;
