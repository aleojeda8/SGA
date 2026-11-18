const express = require("express");
// const { verificarToken } = require("../middlewares/authMiddleware");
const { obtenerMaterias, obtenerMateria, registrarMateria, actualizarMateria, eliminarMateria } = require("../controllers/materias.controller");
const router = express.Router();

router.get("/",  obtenerMaterias);

router.get("/:codigo", obtenerMateria);

router.post("/",registrarMateria);

router.put("/:codigo", actualizarMateria);

router.delete("/:codigo", eliminarMateria);

module.exports = router;