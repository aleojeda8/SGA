const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: [true, "El código es obligatorio"],
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        trim: true,
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        maxlength: [100, "El nombre no puede superar los 100 caracteres"]
    },
    descripcion: {
        type: String,
        trim: true,
        validate: {
            validator: (v) => v === undefined || v.length > 0,
            message: "La descripción no puede contener solo espacios"
        }
    },
    cargaHoraria: {
        type: Number,
        required: [true, "La carga horaria es obligatoria"],
        validate: {
            validator: (v) => Number.isInteger(v) && v > 0,
            message: "La carga horaria debe ser un número entero mayor que cero"
        }
    },
    estado: {
        type: String,
        required: [true, "El estado es obligatorio"],
        enum: {
            values: ["activa", "inactiva"],
            message: "El estado solo puede ser activa o inactiva"
        }
    }
},{
    versionKey: false
})

const Materia = mongoose.model("Materia", materiaSchema);

module.exports = Materia