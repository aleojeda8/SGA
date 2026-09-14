const  Alumno = require("../models/Alumno");

async function obtenerAlumnos(req, res){
    const alumnos = await Alumno.find();
    res.json(alumnos);
}

async function obtenerAlumno(req, res){
    const alumno = await Alumno.findOne({legajo: Number (req.params.id)});
    if(!alumno){
        return res.status(404).json({Error: "Alumno no encontrado"});
    }
    res.json(alumno);
}

async function registrarAlumno(req, res){
    const {legajo, nombre, carrera, correo} = req.body;
    if( !legajo || !nombre || !carrera || !correo){
        return res.status(400).json({Error: "Todos los campos son obligatorios"});
    }
    if(typeof nombre !== "string"){
        return res.status(400).json({Error: "El nombre debe ser un string"});
    }
    if(typeof legajo !== "number"){
        return res.status(400).json({Error: "El legajo debe ser un numero"});
    }
    const existe = await Alumno.findOne({legajo: Number(legajo)});
    if(existe){
        return res.status(400).json({Error: "El legajo ya existe"});
    }
    
    const newAlumno = await Alumno.create({legajo, nombre, carrera, correo});
    res.status(201).json(newAlumno);
}

async function actualizarAlumno (req, res){
    const {nombre, carrera, correo} = req.body;
    
    const alumno = await Alumno.findOneAndUpdate({legajo: Number(req.params.id)}, 
    {nombre, carrera, correo}, {returnDocument: "after"});
    if(!alumno){
        return res.status(404).json({Error: "Alumno no encontrado"});
    }
    res.json(alumno);
}

async function eliminarAlumno (req, res){
    const alumno = await Alumno.findOneAndDelete({legajo: Number(req.params.id)});
    if(!alumno){
        return res.status(404).json({Error: "Alumno no encontrado"});
    }
    res.json({mensaje: "Alumno eliminado correctamente"});
}

module.exports = {obtenerAlumnos, obtenerAlumno, registrarAlumno, actualizarAlumno, eliminarAlumno};