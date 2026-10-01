import { useState } from "react";

function CambiarTitulo() {
    const [titulo, setTitulo] = useState("Inicio");
    
    return (
        <>
            <h1>{titulo}</h1>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button onClick={() => setTitulo("Alumno")}>Alumno</button>
                <button onClick={() => setTitulo("Docentes")}>Docentes</button>
            </div>
        </>
    )
}

export default CambiarTitulo;