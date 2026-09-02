const docentes = require("../data/docentes");

function obtenerDocentes(req, res){
    res.json(docentes);
}

function obtenerDocente(req, res){
    const id = Number(req.params.id);
    const docente = docentes.find(a => a.id === id)
    res.json(docente);
}

function registrarDocente(req, res){
    const docente = req.body;
    docentes.push(docente);
    res.json({mensaje: "Docente registrado correctamente"});
}

function actualizarDocente(req, res){
    const id = Number(req.params.id);
    const docente = docentes.find(docente => docente.id === id);
    // alumno.id = req.body.id;
    docente.nombre = req.body.nombre;
    docente.especialidad = req.body.especialidad;
    res.json({mensaje:"Docente actualizado correctamente"});
}

function eliminarDocente(req, res) {
    const id = Number(req.params.id);
    const docentesAux = docentes.filter(docente => docente.id !== id);
    docentes.length = 0;
    docentes.push(...docentesAux);
    res.json({mensaje: "Docente eliminado correctamente"});

}

module.exports = {obtenerDocentes, obtenerDocente, registrarDocente, actualizarDocente, eliminarDocente};