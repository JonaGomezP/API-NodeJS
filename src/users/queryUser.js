//Consulta de los datos de usuario
const consultarTodosUsuarios = (req, res, con) => {
    //Si se consulta con id de usuario
    if (req.query.id_usuario) {
        let id_usuario = req.query.id_usuario;
        let sql = "SELECT * from datos_usuario where id_usuario=" + id_usuario;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si se consulta con el nombre de usuario
    } else if (req.query.nombre) {
        let nombre = toString(req.query.nombre);
        let sql = "SELECT * from datos_usuario where nombre =" + nombre;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si no se pasa ningún parámetro muestra todos
    } else {
        let sql = "SELECT * from datos_usuario";
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    }
}
exports.consultarTodosUsuarios = consultarTodosUsuarios;

