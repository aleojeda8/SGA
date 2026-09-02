const express = require("express");
const { obtenerAlumnos, obtenerAlumno, registrarAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controller");
const router = express.Router();

router.get("/", obtenerAlumnos);

router.get("/:id", obtenerAlumno);

router.post("/", registrarAlumno);

router.put("/:id", actualizarAlumno);

router.delete("/:id", eliminarAlumno);

module.exports = router;