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
// import Alumnos from "./page/Alumnos";
// import { EjemploMUI } from "./components/ejemplos/EjemploMui";
// import SelectorTema from "./components/SelectorTema";
import { Routes, Route } from "react-router-dom";
import LayoutPpal from "./layouts/LayoutPpal";
import Inicio from "./page/inicio";
import Alumnos from "./page/Alumnos";
import Docentes from "./page/Docentes";

function App()
{

return (
    <Routes>
      <Route path="/" element={<LayoutPpal />} />
      <Route index element={<Inicio />} />
      <Route path="alumnos" element={<Alumnos />} />
      <Route path="docentes" element={<Docentes />} />
  </Routes>
)
}
export default App