//Reducer...
//TYPOS
//declaro todas las constancia con los tipos de caso que voy a tener
const CREAR_USUARIO = "CREAR_USUARIO";
const LOGIN_USUARIO = "LOGIN_USUARIO";
const DESLOGUEAR_USUARIO = "DESLOGUEAR_USUARIO";
const PERSISTENCIA_USUARIO = "PERSISTENCIA_USUARIO";

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
    case CREAR_USUARIO:
      return {
        ...state,
        usuarios: [...state.usuarios, payload],
      };
    case LOGIN_USUARIO:
      return { ...state, logueado: true, usuario: payload };
    case DESLOGUEAR_USUARIO:
      return { ...state, logueado: false, usuario: null };

    default:
      return state;
  }
}

// Estas son las funciones del Contexto
//funciones de Logueo y Deslogueo

//Deberia probar con hacer la funcion crear un usuario con un set log .
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
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
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

// Estas son las funciones en la pagina de deslogueo
const handleNoTengo = () => {
  setCrear(!crear);
  console.log("funcion No tengo cuenta ");
};

const handleCrear = () => {
  crearUsuario(email, pass);
};

const handleLog = () => {
  logueoUsuario(email, pass);
};

const handleEmail = (e) => {
  guardarDatosUsuario(e);
};
const handlePass = (e) => {
  guardarDatosUsuario(e);
};
