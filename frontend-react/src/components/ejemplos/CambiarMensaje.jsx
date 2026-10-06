import { useState } from "react";

function CambiarMensaje() {
    const [mensaje, setMensaje] = useState("Hola, alumno");

    return (
        <>
            <h1>{mensaje}</h1>
            <div>
                <button onClick={() => setMensaje("Bienvenidos a Programacion IV")}>Cambiar Mensaje</button>
            </div>
        </>
    )
}

export default CambiarMensaje;