import { useState } from "react"
import FormularioMateria from "../components/FormularioM"
import { ListaMaterias } from "../components/ListaMaterias"

export default function Materias() {
    const [actualizar, setActualizar] = useState(0);
    const [materiaEditar, setMateriaEditar] = useState(null);
    const [mensaje, setMensaje] = useState("");

    function materiaCambiada(texto) {
        setMensaje(texto)
        setMateriaEditar(null)
        setActualizar(valor => valor + 1)
    }

    function seleccionarMateria(materia) {
        setMensaje("")
        setMateriaEditar(materia)
    }

    return (
        <>
            <FormularioMateria key={materiaEditar?.codigo ?? "nuevo"} onMateriaCreado={materiaCambiada}
            materiaEditar={materiaEditar} onCancelar={() => setMateriaEditar(null)}/>
            {mensaje && <p className="student-form__exito" role="status">{mensaje}</p>}
            <ListaMaterias actualizar={actualizar}
            onMateriaCreado={materiaCambiada} onEditarMateria={seleccionarMateria}/>
        </>
    )
}