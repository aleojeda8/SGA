import { useState, useEffect } from "react"; 

function Pantalla() {
    const [ancho, setAncho] = useState(window.innerHeight);

    useEffect(() => {
        const actualizarAncho = () => {
            setAncho(window.innerHeight);
        }
        window.addEventListener("resize", actualizarAncho);
        return () => {
            window.removeEventListener("resize", actualizarAncho);
        }
    }, []);

    return(
        <h2>Ancho: {ancho}</h2>
    )
}

export default Pantalla;