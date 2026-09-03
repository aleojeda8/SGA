const  alumnos = require("../data/alumnos");

function obtenerAlumnos(req, res){
    res.json(alumnos);
}

function obtenerAlumno(req, res){
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id)
    if(!alumno){
        return res.status(404).json({Error: "Alumno no encontrado"});
    }
    res.json(alumno);
}

function registrarAlumno(req, res){
    const alumno = req.body;
    const {id, nombre, carrera} = req.body;
    if( !id || !nombre || !carrera){
        return res.status(400).json({Error: "Todos los campos son obligatorios"});
    }
    if(typeof nombre !== "string"){
        return res.status(400).json({Error: "El nombre debe ser un string"});
    }
    alumnos.push(alumno);
    res.status(201).json({mensaje: "Alumno registrado correctamente"});
}

function actualizarAlumno (req, res){
    const id = Number(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    if(!alumno){
        return res.status(404).json({Error: "Alumno no encontrado"});
    }
    // alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.json({mensaje:"Alumno actualizado correctamente"});
}

function eliminarAlumno (req, res){
    const id = Number(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    if(!alumno){
        return res.status(404).json({Error: "Alumno no encontrado"});
    }
    const alumnosAux = alumnos.filter(alumno => alumno.id !== id);
    alumnos.length = 0;
    alumnos.push(...alumnosAux);
    res.json({mensaje: "Alumno eliminado correctamente"});
}

module.exports = {obtenerAlumnos, obtenerAlumno, registrarAlumno, actualizarAlumno, eliminarAlumno};