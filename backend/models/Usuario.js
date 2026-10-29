const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:
    {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false 
    },
    rol: {
        type: String,
        enum: ["admin", "usuario"],
        default: "usuario"
    }
},{
    versionKey: false
})

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario