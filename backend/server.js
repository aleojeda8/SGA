const express = require("express");
const app = express();
app.use(express.json())

const alumnos = [
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

const docentes = [
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

app.get("/alumnos", (req, res) => {
    res.json(alumnos)
});

app.get("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno);
})

app.post("/alumnos", (req, res) => {
    const alumno = req.body;
    alumnos.push(alumno);
    res.json({mensaje: "Alumno registrado correctamente"});
})

app.put("/alumnos/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    // alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.json({mensaje:"Alumno actualizado correctamente"});
})

// Docentes

app.get("/docentes", (req, res) => {
    res.json(docentes)
});

app.get("/docentes/:id", (req, res) => {
    const id = Number(req.params.id);
    const docente = docentes.find(a => a.id === id)
    res.json(docente);
})

app.post("/docentes", (req, res) => {
    const docente = req.body;
    docentes.push(docente);
    res.json({mensaje: "Docente registrado correctamente"});
})

app.put("/docentes/:id", (req, res) => {
    const id = Number(req.params.id);
    const docente = docentes.find(docente => docente.id === id);
    // alumno.id = req.body.id;
    docente.nombre = req.body.nombre;
    docente.especialidad = req.body.especialidad;
    res.json({mensaje:"Docente actualizado correctamente"});
})

app.listen(3000, () =>  {
    console.log("Servidor funcionando en el puerto 3000");
})

