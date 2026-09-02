const express = require("express");
const app = express();
app.use(express.json());
const alumnosRoutes = require("./routes/alumnos.routes");
const docentesRoutes = require("./routes/docentes.routes")
app.use("/alumnos", alumnosRoutes);
app.use("/docentes", docentesRoutes);

///Creo un middleware
// app.use((req, res, next) => {
//     console.log("Se ha recibido una peticion");
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });


app.listen(3000, () =>  {
    console.log("Servidor funcionando en el puerto 3000");
})

