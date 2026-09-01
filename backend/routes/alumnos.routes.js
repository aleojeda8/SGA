const express = require("express");
const router = express.Router();

router.get("/", obtenerAlumnos);

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(a => a.id === id)
    res.json(alumno);
})

router.post("/", (req, res) => {
    const alumno = req.body;
    alumnos.push(alumno);
    res.json({mensaje: "Alumno registrado correctamente"});
})

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    // alumno.id = req.body.id;
    alumno.nombre = req.body.nombre;
    alumno.carrera = req.body.carrera;
    res.json({mensaje:"Alumno actualizado correctamente"});
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    alumnos = alumnos.filter(alumno => alumno.id !== id);
    res.json({mensaje: "Alumno eliminado correctamente"});

})

module.exports = router;