const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require('dotenv').config();

const Usuario = require("./models/Usuario");

async function crearUsuario () {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        const email = "ale@gmail.com"
        const password = "SuperClave8"

        const hash = await bcrypt.hash(password, 10);

        const usuario = new Usuario({
            nombre: "Admin",
            email: email,
            password: hash,
            rol: "admin"
        })
        await usuario.save();

        console.log("Usuario de prueba creado correctamente");
    }catch (error){
        console.error("Error al crear usuario", error.message);
    }finally{
        await mongoose.disconnect();
    }
}

crearUsuario();
