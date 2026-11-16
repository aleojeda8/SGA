const express = require("express");
const { verificarToken } = require("../middlewares/authMiddleware");
const { obtenerMaterias, obtenerMateria, registrarMateria, actualizarMateria, eliminarMateria } = require("../controllers/materias.controller");
const router = express.Router();

router.get("/", verificarToken,  obtenerMaterias);

router.get("/:codigo", verificarToken, obtenerMateria);

router.post("/", verificarToken, registrarMateria);

router.put("/:codigo", verificarToken, actualizarMateria);

router.delete("/:codigo", verificarToken, eliminarMateria);

module.exports = router;