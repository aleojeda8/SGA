const  alumnos = require("../data/alumnos");

function obtenerAlumnos(req, res){
    res.json(alumnos);
}

function obtenerAlumno(req, res){
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno);
}

function registrarAlumno(req, res){
    const alumno = req.body;
    alumnos.push(alumno);
    res.json({mensaje: "Alumno registrado correctamente"});
}

function actualizarAlumno (req, res){
    const id = Number(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    // alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.json({mensaje:"Alumno actualizado correctamente"});
}

function eliminarAlumno (req, res){
    const id = Number(req.params.id);
    const alumnosAux = alumnos.filter(alumno => alumno.id !== id);
    alumnos.length = 0;
    alumnos.push(...alumnosAux);
    res.json({mensaje: "Alumno eliminado correctamente"});

}

module.exports = {obtenerAlumnos, obtenerAlumno, registrarAlumno, actualizarAlumno, eliminarAlumno};