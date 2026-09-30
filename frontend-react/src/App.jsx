import Titulo from "./components/Titulo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TarjetaAlumno } from "./components/TarjetaAlumno";

function App(){

  return (
    <>
      <Navbar />
      <Titulo texto="Sistema de Gestion Academica" color="magenta"/>
      <TarjetaAlumno nombre="Alejandro Ojeda" carrera="Tecnicatura en Programacion" edad="23"/>
      <br />
      <TarjetaAlumno nombre="Alejandro Ojeda" carrera="Tecnicatura en Programacion" edad="23"/>
      <br />
      <TarjetaAlumno nombre="Alejandro Ojeda" carrera="Tecnicatura en Programacion" edad="23"/>
      <br />
      <Footer />
    </>
  )
  }

export default App;