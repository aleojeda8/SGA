const Materia = require("../models/Materia");

const ESTADOS = ["activa", "inactiva"];

function validando({ codigo, nombre, descripcion, cargaHoraria, estado }) {
    if (codigo !== undefined && (typeof codigo !== "string" || codigo.trim() === "")) {
        return "El código es obligatorio y debe ser un texto";
    }
    if (nombre !== undefined && (typeof nombre !== "string" || nombre.trim() === "")) {
        return "El nombre es obligatorio y debe ser un texto";
    }
    if (descripcion !== undefined && (typeof descripcion !== "string" || descripcion.trim() === "")) {
        return "La descripción no puede contener solo espacios";
    }
    if (cargaHoraria !== undefined && (!Number.isInteger(cargaHoraria) || cargaHoraria <= 0)) {
        return "La carga horaria debe ser un número entero mayor que cero";
    }
    if (estado !== undefined && !ESTADOS.includes(estado)) {
        return "El estado solo puede ser activa o inactiva";
    }
    return null;
}

async function obtenerMaterias(req, res) {
    try {
        const materias = await Materia.find();
        res.json(materias);
    } catch (error) {
        manejarError(error, res);
    }
}

async function obtenerMateria(req, res) {
    try {
        const materia = await Materia.findOne({ codigo: req.params.codigo.trim() });
        if (!materia) {
            return res.status(404).json({ Error: "Materia no encontrada" });
        }
        res.json(materia);
    } catch (error) {
        manejarError(error, res);
    }
}

async function registrarMateria(req, res) {
    try {
        const { codigo, nombre, descripcion, cargaHoraria, estado } = req.body ?? {};
        if (codigo === undefined || nombre === undefined || cargaHoraria === undefined || estado === undefined) {
            return res.status(400).json({ Error: "Código, nombre, carga horaria y estado son obligatorios" });
        }
        const mensaje = validando({ codigo, nombre, descripcion, cargaHoraria, estado });
        if (mensaje) {
            return res.status(400).json({ Error: mensaje });
        }
        const nueva = await Materia.create({ codigo, nombre, descripcion, cargaHoraria, estado });
        res.status(201).json(nueva);
    } catch (error) {
        manejarError(error, res);
    }
}

async function actualizarMateria(req, res) {
    try {
        const { codigo, nombre, descripcion, cargaHoraria, estado } = req.body ?? {};
        const mensaje = validando({ codigo, nombre, descripcion, cargaHoraria, estado });
        if (mensaje) {
            return res.status(400).json({ Error: mensaje });
        }
        const datos = { codigo, nombre, descripcion, cargaHoraria, estado };
        Object.keys(datos).forEach(clave => datos[clave] === undefined && delete datos[clave]);

        const materia = await Materia.findOneAndUpdate(
            { codigo: req.params.codigo.trim() },
            datos,
            { returnDocument: "after", runValidators: true }
        );
        if (!materia) {
            return res.status(404).json({ Error: "Materia no encontrada" });
        }
        res.json(materia);
    } catch (error) {
        manejarError(error, res);
    }
}

async function eliminarMateria(req, res) {
    try {
        const materia = await Materia.findOneAndDelete({ codigo: req.params.codigo.trim() });
        if (!materia) {
            return res.status(404).json({ Error: "Materia no encontrada" });
        }
        res.json({ mensaje: "Materia eliminada correctamente" });
    } catch (error) {
        manejarError(error, res);
    }
}

module.exports = { obtenerMaterias, obtenerMateria, registrarMateria, actualizarMateria, eliminarMateria };