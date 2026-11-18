const verificarRol = (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!req.usuario) {
            return res.status(401).json({
                mensaje: "Primero debes autenticarte"
            })
        }
    }
    if (!rolesPermitidos.includes(req.usuario.rol)) {
        return res.status(403).json({
            mensaje: "No tienes permisos para esta operacion"
        })
    }

    next();

}  

module.exports = { verificarRol }