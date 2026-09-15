const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const alumnosRoutes = require("./routes/alumnos.routes");
const docentesRoutes = require("./routes/docentes.routes")
app.use("/alumnos", alumnosRoutes);
app.use("/docentes", docentesRoutes);
const connectBD = require("./config/database");
require("dotenv").config();
const PORT =process.env.PORT

connectBD();

///Creo un middleware
// app.use((req, res, next) => {
//     console.log("Se ha recibido una peticion");
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });


app.listen(PORT, () =>  {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})

