const express = require("express");
const app = express();
app.use(express.json());
const alumnosRoutes = require("./routes/alumnos.routes");
const docentesRoutes = require("./routes/docentes.routes")
app.use("/alumnos", alumnosRoutes);
app.use("/docentes", docentesRoutes);


let alumnos = [
    {
    id: 1,
    nombre: "ana",
    carrera: "programacion"
    },
    {   
        id: 2,
        nombre: "pablo",
        carrera: "programacion"
    },
    {   
        id: 3,
        nombre: "juanchi",
        carrera: "programacion"
    },
    {   
        id: 4,
        nombre: "nahue",
        carrera: "programacion"
    },
    {   
        id: 5,
        nombre: "joa",
        carrera: "programacion"
    },
    {   
        id: 6,
        nombre: "ale",
        carrera: "programacion"
    },
    {   
        id: 7,
        nombre: "juanka",
        carrera: "matematica"
    }
]

let docentes = [
    {
    id: 1,
    nombre: "ana",
    especialidad: "lengua"
    },
    {   
        id: 2,
        nombre: "pablo",
        especialidad: "tecnologia"
    },
    {   
        id: 3,
        nombre: "juanchi",
        especialidad: "educacion fisica"
    },
    {   
        id: 4,
        nombre: "nahue",
        especialidad: "programacion"
    },
    {   
        id: 5,
        nombre: "joa",
        especialidad: "matematica"
    },
    {   
        id: 6,
        nombre: "ale",
        especialidad: "historia"
    },
    {   
        id: 7,
        nombre: "juanka",
        especialidad: "videojuegos"
    }
]

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

