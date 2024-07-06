//TYPOS
//declaro todas las constancia con los tipos de caso que voy a tener
const TRAER_CV = "TRAER CV";
const GUARDAR_CV_CARRITO = "GUARDAR_CV_CARRITO";
const ELIMINAR_CV_CARRITO = "ELIMINAR_CV_CARRITO";
const MOSTRAR_CV_COMPRADOS = "MOSTRAR_CV_COMPRADOS";
const CREAR_USUARIO = "CREAR_USUARIO";
const LOGIN_USUARIO = "LOGIN_USUARIO";
const DESLOGUEAR_USUARIO = "DESLOGUEAR_USUARIO";
const PERSISTENCIA_USUARIO = "PERSISTENCIA_USUARIO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case TRAER_CV:
      return { ...state, curriculums: payload };
    case GUARDAR_CV_CARRITO:
      return { ...state, carrito: [...state.carrito, payload] };
    case ELIMINAR_CV_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter(
          (curriculums) => curriculums.nombre !== payload.nombre
        ),
      };
    default:
      return state;
  }
}
