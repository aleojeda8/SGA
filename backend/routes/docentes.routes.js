const express = require("express");
const { verificarToken } = require("../middlewares/authMiddleware");
const { obtenerDocentes, obtenerDocente, registrarDocente, actualizarDocente, eliminarDocente} = require("../controllers/docentes.controller"); 
const router = express.Router();

router.get("/", verificarToken , obtenerDocentes);

router.get("/:dni", verificarToken , obtenerDocente);

router.post("/", verificarToken, registrarDocente);

router.put("/:dni", verificarToken, actualizarDocente);

router.delete("/:dni", verificarToken, eliminarDocente);

module.exports = router;