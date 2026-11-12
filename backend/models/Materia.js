const mongoose = require('mongoose');

const materiaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 3, 
        maxlength: 100,
    },
    descripcion: {
        type: String,
        trim: true,
        validate: {
            validator: (v) => v === undefined || v.length > 0
        }
    },
    cargaHoraria: {
        type: Number,
        required: true,
        validate: {
            validator: (v) => Number.isInteger(v) && v > 0
        }
    },
    estado: {
        type: String,
        required: true,
        enum: {
            values: ["activa", "inactiva"]
        }
    }
},{
    versionKey: false
})

const Materia = mongoose.model("Materia", materiaSchema);

module.exports = Materia