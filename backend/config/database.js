const mongoose = require("mongoose");

async function connectBD() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada");
    }catch (error){
        console.log(error);
    }
}

module.exports = connectBD;