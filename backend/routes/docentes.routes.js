const express = require("express");
// const { verificarToken } = require("../middlewares/authMiddleware");
const { obtenerDocentes, obtenerDocente, registrarDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controller"); 
const router = express.Router();

router.get("/", obtenerDocentes);

router.get("/:dni", obtenerDocente);

router.post("/", registrarDocente);

router.put("/:dni", actualizarDocente);

router.delete("/:dni", eliminarDocente);

module.exports = router;