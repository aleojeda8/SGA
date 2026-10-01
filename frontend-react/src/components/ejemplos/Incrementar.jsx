import {useState} from "react";

function Incrementar() {
    const [contador, setContador] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    function incremento() {
        setContador(contador + 1);
    }
    function desincrementar() {
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    function reiniciar() {
        setContador(0);
    }

    return (
        <>
            <h1>Contador : {contador}</h1>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button onClick={incremento} style={{width: "50px", height: "50px", fontSize: "20px"}}>+</button>
                <button onClick={desincrementar} style={{width: "50px", height: "50px", fontSize: "20px"}}>-</button>
                <button onClick={reiniciar} style={{width: "50px", height: "50px", fontSize: "20px"}}>🔃</button>
            </div>
            <br />
            <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
            {mostrar && <h2>Hola!!</h2>}
        </>
    )
}

export default Incrementar;