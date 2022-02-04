//Elimina usuarios
const eliminarUsuario = (req, res, con) => {
    //Si se consulta con id de usuario
    console.log(req.query)
    if (req.query.id_usuario) {
        let id_usuario = req.query.id_usuario;
        let sql = "DELETE FROM datos_usuario WHERE id_usuario=" + id_usuario;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);
            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    }
}
exports.eliminarUsuario = eliminarUsuario;
