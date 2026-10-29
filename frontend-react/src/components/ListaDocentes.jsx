import { useEffect, useState } from "react"
const API_DOCENTES = "http://localhost:3000/docentes"

export function ListaDocentes({ actualizar, onDocenteCreado, onEditarDocente }) {
    const [docentes, setDocentes] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    async function eliminarDocente(dni) {
        const confirmar = window.confirm("Seguro que quiere eliminar")
        if (!confirmar){
            return
        }
        try {
            const respuesta = await fetch(`${API_DOCENTES}/${dni}`,
                {method: "DELETE"}
            )
            if(!respuesta.ok){
                throw new Error(`No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onDocenteCreado();
        }catch(error){
            console.error("Error al eliminar", error)
            alert(error.message || "No se pudo eliminar alumno")
        }
    }

    useEffect(() => {
        async function cargarDocentes(){
            setCargando(true)
            setError("")

            try {
            const respuesta = await fetch(API_DOCENTES)

            if (!respuesta.ok){
                throw new Error("No se pudo obtener la lista", respuesta.status)
            }

            const datos = await respuesta.json()
            setDocentes(datos)
        } catch(error) {
            console.error("Error de conexión", error)
            setError("No se pudo cargar la lista de alumnos.")
        } finally {
            setCargando(false)
        }
    }
        cargarDocentes()
    }, [actualizar])

    if (cargando) {
        return <p>Cargando Docentes...</p>
    }
    if (error) {
        return <p role="alert">{error}</p>
    }
    return (
    <section className="student-list">
    <h2>Docentes</h2>
    {docentes.length === 0 
    ? (<p>No hay docentes registrados.</p>)
    : ( 
        <ul className="student-list__items" style={{listStyle:"none"}}>
        {docentes.map(docente => (
            <li className="student-list__item" key={docente.dni}>
            <div className="student-list__details">
                {docente.dni} - {docente.nombre} - {docente.especializacion}
            </div>
            <div className="student-list__actions">
                <button type="button" onClick={() => onEditarDocente(docente)}>Editar</button>
                <button type="button" onClick={() => eliminarDocente(docente.dni)}>Eliminar</button>
            </div>
        </li>)
    )}
    </ul>
    )}
    </section>
    )
}