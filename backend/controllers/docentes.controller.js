const  Docente = require("../models/Docente");

async function obtenerDocentes(req, res){
    const docentes = await Docente.find();
    res.json(docentes);
}

async function obtenerDocente(req, res){
    const docente = await Docente.findOne({dni: Number (req.params.id)});
    if(!docente){
        return res.status(404).json({Error: "Docente no encontrado"});
    }
    res.json(docente);
}

async function registrarDocente(req, res){
    const {dni, nombre, especialidad, correo} = req.body;
    if( !dni || !nombre || !especialidad || !correo){
        return res.status(400).json({Error: "Todos los campos son obligatorios"});
    }
    if(typeof nombre !== "string"){
        return res.status(400).json({Error: "El nombre debe ser un string"});
    }
    if(typeof dni !== "number"){
        return res.status(400).json({Error: "El DNI debe ser un numero"});
    }
    const existe = await Docente.findOne({dni: Number(dni)});
    if(existe){
        return res.status(400).json({Error: "El dni ya existe"});
    }
    
    const newDocente = await Docente.create({dni, nombre, especialidad, correo});
    res.status(201).json(newDocente);
}

async function actualizarDocente (req, res){
    const {nombre, especialidad, correo} = req.body;
    
    const docente = await Docente.findOneAndUpdate({dni: Number(req.params.id)}, 
    {nombre, especialidad, correo}, {returnDocument: "after"});
    if(!docente){
        return res.status(404).json({Error: "Docente no encontrado"});
    }
    res.json(docente);
}

async function eliminarDocente (req, res){
    const docente = await Docente.findOneAndDelete({dni: Number(req.params.id)});
    if(!docente){
        return res.status(404).json({Error: "Docente no encontrado"});
    }
    res.json({mensaje: "Docente eliminado correctamente"});
}

module.exports = {obtenerDocentes, obtenerDocente, registrarDocente, actualizarDocente, eliminarDocente};