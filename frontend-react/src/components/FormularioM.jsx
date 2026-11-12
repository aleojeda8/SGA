import { useState } from "react";
const API_MATERIAS = "http://localhost:3000/materias"

function FormularioM({ onMateriaCreado, materiaEditar, onCancelar }) {
    const [formulario, setFormulario] = useState({
        codigo: materiaEditar?.codigo ?? "",
        nombre: materiaEditar?.nombre ?? "",
        descripcion: materiaEditar?.descripcion ?? "",
        cargaHoraria: String(materiaEditar?.cargaHoraria ?? ""),
        estado: materiaEditar?.estado ?? "activa"
    })
    const [error, setError] = useState("")
    const [guardando, setGuardando] = useState(false)

    const editando = Boolean(materiaEditar)

    function manejarCambio(e) {
        const { name, value } = e.target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    async function guardar(e) {
        e.preventDefault()
        setError("")
        setGuardando(true)

        const materia = {
            codigo: formulario.codigo.trim(),
            nombre: formulario.nombre.trim(),
            cargaHoraria: Number(formulario.cargaHoraria),
            estado: formulario.estado
        }
        if (formulario.descripcion.trim()) {
            materia.descripcion = formulario.descripcion.trim()
        }

        const url = editando
            ? `${API_MATERIAS}/${encodeURIComponent(materiaEditar.codigo)}`
            : API_MATERIAS

        try {
            const respuesta = await fetch(url, {
                method: editando ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(materia)
            })
            const datos = await respuesta.json().catch(() => ({}))
            if (!respuesta.ok) {
                throw new Error(datos.Error || `No se pudo guardar la materia. Estado HTTP: ${respuesta.status}`)
            }
            setFormulario({
                codigo: "",
                nombre: "",
                descripcion: "",
                cargaHoraria: "",
                estado: "activa"
            })
            onMateriaCreado(editando ? "Materia modificada correctamente" : "Materia registrada correctamente")
        } catch (error) {
            console.error("Error al guardar:", error)
            setError(error instanceof TypeError ? "No se pudo conectar con el servidor" : error.message)
        } finally {
            setGuardando(false)
        }
    }

    return (
        <>
        <h2>{editando ? "Editar Materia" : "Nueva Materia"}</h2>
        <form className="student-form" onSubmit={guardar} noValidate>
            <label htmlFor="codigo">Código</label>
            <input
            id="codigo"
            name="codigo"
            value={formulario.codigo}
            onChange={manejarCambio}
            readOnly={editando}
            />
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            />
            <br />
            <label htmlFor="descripcion">Descripción (opcional)</label>
            <input
            id="descripcion"
            name="descripcion"
            value={formulario.descripcion}
            onChange={manejarCambio}
            />
            <br />
            <label htmlFor="cargaHoraria">Carga horaria</label>
            <input
            id="cargaHoraria"
            name="cargaHoraria"
            type="number"
            value={formulario.cargaHoraria}
            onChange={manejarCambio}
            />
            <br />
            <label htmlFor="estado">Estado</label>
            <select
            id="estado"
            name="estado"
            value={formulario.estado}
            onChange={manejarCambio}
            >
                <option value="activa">Activa</option>
                <option value="inactiva">Inactiva</option>
            </select>
            <br />
            <div className="student-form__actions">
                <button type="submit" disabled={guardando}>
                    {guardando ? "Guardando..." : editando ? "Guardar Cambios" : "Guardar"}
                </button>
                {editando && (<button type="button" onClick={onCancelar} disabled={guardando}>Cancelar</button>)}
            </div>
            <br />
            {error && <p className="student-form__error" role="alert">{error}</p>}
        </form>
        </>
    )
}
export default FormularioM