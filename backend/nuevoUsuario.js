const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require('dotenv').config();

const Usuario = require("./models/Usuario");

async function nuevoUsuario () {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        const email = "joa@gmail.com"
        const password = "SuperClave"

        const hash = await bcrypt.hash(password, 10);

        const usuario = new Usuario({
            nombre: "joa",
            email: email,
            password: hash
            // rol: "usuario"
        })
        await usuario.save();

        console.log("Usuario de prueba creado correctamente");
    }catch (error){
        console.error("Error al crear usuario", error.message);
    }finally{
        await mongoose.disconnect();
    }
}

nuevoUsuario();