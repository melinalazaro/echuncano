//TYPOS
//declaro todas las constancia con los tipos de caso que voy a tener
const TRAER_CV = "TRAER CV";
const AGREGAR_CV_CARRITO = "AGREGAR_CV_CARRITO";
const ELIMINAR_CV_CARRITO = "ELIMINAR_CV_CARRITO";
const MOSTRAR_CV_COMPRADOS = "MOSTRAR_CV_COMPRADOS";
//const CREAR_USUARIO = "CREAR_USUARIO";
//const LOGIN_USUARIO = "LOGIN_USUARIO";
//const DESLOGUEAR_USUARIO = "DESLOGUEAR_USUARIO";
//const PERSISTENCIA_USUARIO = "PERSISTENCIA_USUARIO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case TRAER_CV:
      return { ...state, curriculums: payload };
    case AGREGAR_CV_CARRITO:
      return { ...state, carrito: [...state.carrito, payload] };
    case ELIMINAR_CV_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter(
          (curriculum) => curriculum.nombre !== payload.nombre
        ),
      };

    //estos son los cases para el loguin
    //Debo marcar los estados y las acciones por ejemplo, en crear usuarios lo que
    // quiero que haga es que me cree un usuario y se lo agregue al estado de usuario
    // El estado unicial de usuario es null o vacio
    // En el caso de loguin o deslogueo lo que indico es el estado loguin false o true segun corresponda
    // si es logueado, el paylod sera el usuario que le indico.
    // si es deslogueado sera usuario null
    //case CREAR_USUARIO:
    //return {
    //...state,
    //usuarios: [...state.usuarios, payload],
    //};
    //case LOGIN_USUARIO:
    //return { ...state, logueado: true, usuario: payload };
    //case DESLOGUEAR_USUARIO:
    //return { ...state, logueado: false, usuario: null };

    default:
      return state;
  }
}
