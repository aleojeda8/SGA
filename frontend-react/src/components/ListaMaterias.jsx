import { useEffect, useState } from "react"
const API_MATERIAS = "http://localhost:3000/materias"

export function ListaMaterias({ actualizar, onMateriaCreado, onEditarMateria }) {
    const [materias, setMaterias] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState("")

    async function eliminarMateria(codigo) {
        const confirmar = window.confirm(`¿Seguro que quiere eliminar la materia ${codigo}?`)
        if (!confirmar) {
            return
        }
        try {
            const respuesta = await fetch(`${API_MATERIAS}/${encodeURIComponent(codigo)}`,
                { method: "DELETE" }
            )
            const datos = await respuesta.json().catch(() => ({}))
            if (!respuesta.ok) {
                throw new Error(datos.Error || `No se pudo eliminar. Estado HTTP: ${respuesta.status}`)
            }
            onMateriaCreado("Materia eliminada correctamente")
        } catch (error) {
            console.error("Error al eliminar", error)
            alert(error instanceof TypeError ? "No se pudo conectar con el servidor" : error.message)
        }
    }

    useEffect(() => {
        async function cargarMaterias() {
            setCargando(true)
            setError("")

            try {
                const respuesta = await fetch(API_MATERIAS)

                if (!respuesta.ok) {
                    throw new Error(`Estado HTTP: ${respuesta.status}`)
                }

                const datos = await respuesta.json()
                setMaterias(datos)
            } catch (error) {
                console.error("Error de conexión", error)
                setError("No se pudo cargar la lista de materias. Verifique la conexión con el servidor.")
            } finally {
                setCargando(false)
            }
        }
        cargarMaterias()
    }, [actualizar])

    if (cargando) {
        return <p>Cargando materias...</p>
    }
    if (error) {
        return <p role="alert">{error}</p>
    }
    return (
        <section className="student-list">
            <h2>Materias</h2>
            {materias.length === 0
                ? (<p>No hay materias registradas.</p>)
                : (
                    <ul className="student-list__items" style={{ listStyle: "none" }}>
                        {materias.map(materia => (
                            <li className="student-list__item" key={materia.codigo}>
                                <div className="student-list__details">
                                    {materia.codigo} - {materia.nombre} - {materia.cargaHoraria} hs - {materia.estado}
                                    {materia.descripcion && <small><br />{materia.descripcion}</small>}
                                </div>
                                <div className="student-list__actions">
                                    <button type="button" onClick={() => onEditarMateria(materia)}>Editar</button>
                                    <button type="button" onClick={() => eliminarMateria(materia.codigo)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
        </section>
    )
}