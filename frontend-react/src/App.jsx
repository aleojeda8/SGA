// import Titulo from "./components/Titulo";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { TarjetaAlumno } from "./components/TarjetaAlumno";
// import Incrementar from "./components/ejemplos/Incrementar";
// import CambiarTitulo from "./components/ejemplos/CambiarTitulo";
// import Adivinar from "./components/ejemplos/Adivinar";
// import CambiarMensaje from "./components/ejemplos/CambiarMensaje";
// import CambiarTamanio from "./components/ejemplos/CambiarTamanio";
// import Pantalla from "./components/ejemplos/pantalla";
import { ListaAlumnos } from "./components/ListaAlumnos"
import { useState } from "react"
import FormularioA from "./components/FormularioA"

function App()
{
const [actualizar, setActualizar] = useState(0);
const [alumnoEditar, setAlumnoEditar] = useState(null);

function alumnoCreado() {
  setActualizar(valor => valor + 1)
}

function seleccionarAlumno(alumno) {
  setAlumnoEditar(alumno)
}

return (
  <main>
  <FormularioA key={alumnoEditar?.legajo ?? "nuevo"} onAlumnoCreado={alumnoCreado} alumnoEditar={alumnoEditar}/>
  <ListaAlumnos actualizar={actualizar} 
  onAlumnoCreado={alumnoCreado} onEditarAlumno={seleccionarAlumno}/>
  </main>
  )
}
export default App