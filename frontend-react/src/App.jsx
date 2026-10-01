// import Titulo from "./components/Titulo";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { TarjetaAlumno } from "./components/TarjetaAlumno";
import Incrementar from "./components/ejemplos/Incrementar";
import CambiarTitulo from "./components/ejemplos/CambiarTitulo";
import Adivinar from "./components/ejemplos/Adivinar";

function App(){

  return (
      <>
        <Incrementar />
        <br />
        <CambiarTitulo />
        <br />
        <Adivinar />
        {/* <Navbar />
        <Titulo texto="Sistema de Gestion Academica" color="magenta"/>
        <TarjetaAlumno nombre="Alejandro Ojeda" carrera="Tecnicatura en Programacion" edad="23"/>
        <br />
        <TarjetaAlumno nombre="Alejandro Ojeda" carrera="Tecnicatura en Programacion" edad="23"/>
        <br />
        <TarjetaAlumno nombre="Alejandro Ojeda" carrera="Tecnicatura en Programacion" edad="23"/>
        <br />
        <Footer /> */}
      </>
    )
  }
export default App;