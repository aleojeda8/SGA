import { useState } from "react";

function Adivinar() {
    const [num, setNum] = useState("");
    const [resultado, setResultado] = useState("");

    function sorteo() {
        const numAleatorio = Math.floor(Math.random() * 10) + 1;
        const elegido = Number(num)

        if( elegido < 1 || elegido > 10){
            setResultado("El numero debe ser entre 1 y 10");
            return;
        }
        setResultado(numAleatorio === elegido ? "¡Adivinaste!" : `Fallaste, el número era ${numAleatorio}`);
    }

    return(
        <>
            <h1>Adivina Adivinador</h1>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <button onClick={sorteo}>Adivinar</button>
            <p>{resultado}</p>
        </>
    )
}

export default Adivinar;