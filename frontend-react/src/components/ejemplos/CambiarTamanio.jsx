import { useState } from "react";

function CambiarTamanio() {
    const [tamanio, setTamanio] = useState(20);

    return (
        <>
            <h1 style={{fontSize: `${tamanio}px`}}>Tamaño</h1>
            <button onClick={() => setTamanio(tamanio + 5)}>Aumentar Tamaño</button>
        </>
    )
}

export default CambiarTamanio;