const mongoose = require("mongoose");

async function connectBD() {
    try {
        await mongoose.connect("mongodb://ale861168:ale8@ac-ym9t7f1-shard-00-00.siykpkl.mongodb.net:27017,ac-ym9t7f1-shard-00-01.siykpkl.mongodb.net:27017,ac-ym9t7f1-shard-00-02.siykpkl.mongodb.net:27017/SGA?ssl=true&replicaSet=atlas-12ws0k-shard-0&authSource=admin&appName=ale8");
        console.log("Base de datos conectada");
    }catch (error){
        console.log(error);
    }
}

module.exports = connectBD;