const express = require("express");
const router = express.Router();

router.get("/", obtenerDocentes);

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const docente = docentes.find(a => a.id === id)
    res.json(docente);
})

router.post("/", (req, res) => {
    const docente = req.body;
    docentes.push(docente);
    res.json({mensaje: "Docente registrado correctamente"});
})

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const docente = docentes.find(docente => docente.id === id);
    // alumno.id = req.body.id;
    docente.nombre = req.body.nombre;
    docente.especialidad = req.body.especialidad;
    res.json({mensaje:"Docente actualizado correctamente"});
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    docentes = docentes.filter(docente => docente.id !== id);
    res.json({mensaje: "Docente eliminado correctamente"});

})

module.exports = router;