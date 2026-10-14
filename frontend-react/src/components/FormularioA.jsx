import {useState} from "react";
const API_ALUMNOS = "http://localhost:3000/alumnos";

function FormularioA() {
    const [formulario, setFormulario] = useState({
        legajo: "",
        nombre: "",
        correo: "",
        carrera: ""
    })

    const [error, setError] = useState("");
    const [guardando, setGuardando] = useState(false);

    function manejarCambio(e) {
        const {name, value} = e.target;
        
        setFormulario({
            ...formulario,
            [name]: value

        })
    }

    async function guardar(e) {
        e.preventDefault();
        setError("");
        setGuardando(true);

        try {
            const alumno = {
                ...formulario,
                legajo: Number(formulario.legajo),
                // nombre: formulario.nombre,
                // carrera: formulario.carrera,
                // correo: formulario.correo
            }
            const respuesta = await fetch(API_ALUMNOS, {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(alumno)
            })

            if(!respuesta.ok) {
                throw new Error(`No se pudo guradar el alumno. Estado: ${respuesta.status}`);
            }

            setFormulario({
                legajo: "",
                nombre: "",
                correo: "",
                carrera: ""
            })
        }catch (error) {
            console.error("Error al guardar", error);
            setError("No se pudo conectar con el servidor");

        }finally {
            setGuardando(false);
        }
    }

    return (
        <form onSubmit={guardar}>
            <label htmlFor="legajo">Legajo:</label>
            <input id="legajo" name="legajo" value={formulario.legajo} onChange={manejarCambio} required />
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" name="nombre" value={formulario.nombre} onChange={manejarCambio} required />
            <br />
            <label htmlFor="carrera">Carrera:</label>
            <input id="carrera" name="carrera" value={formulario.carrera} onChange={manejarCambio} required />
            <label htmlFor="correo">Correo:</label>
            <input id="correo" name="correo" value={formulario.correo} onChange={manejarCambio} required />
            <br />
            <button type="submit" disabled={guardando}>
                {guardando ? "Guardando..." : "Guardar"}
            </button>
            <br />
            {error && <p role="alert">{error}</p>}
        </form>
        
    )
}

export default FormularioA;