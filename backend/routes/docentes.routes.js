const express = require("express");
const { obtenerDocentes, obtenerDocente, registrarDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controller"); 
const router = express.Router();

router.get("/", obtenerDocentes);

router.get("/:id", obtenerDocente);

router.post("/", registrarDocente);

router.put("/:id", actualizarDocente);

router.delete("/:id", eliminarDocente);

module.exports = router;