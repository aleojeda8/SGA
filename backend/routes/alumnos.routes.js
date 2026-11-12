const express = require("express");
const { verificarToken } = require("../middlewares/authMiddleware");
const { obtenerAlumnos, obtenerAlumno, registrarAlumno, actualizarAlumno, eliminarAlumno} = require("../controllers/alumnos.controller");
const router = express.Router();

router.get("/", verificarToken, obtenerAlumnos);

router.get("/:id", verificarToken, obtenerAlumno);

router.post("/", verificarToken, registrarAlumno);

router.put("/:id", verificarToken, actualizarAlumno);

router.delete("/:id", verificarToken, eliminarAlumno);

module.exports = router;