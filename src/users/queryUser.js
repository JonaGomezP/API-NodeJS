//Consulta de los datos de usuario por ID
const consultarTodosUsuarios = (req,res,con) => {
    let sql = "SELECT * from datos_usuario";
    con.query(sql, function (err, result) {
        if (err) throw err;
        return res.json(result);
        
        // console.log("Result: " + JSON.stringify(result,null,2));
    });
}
exports.consultarTodosUsuarios = consultarTodosUsuarios;
