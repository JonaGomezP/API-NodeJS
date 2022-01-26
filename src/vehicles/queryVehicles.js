//Consulta de todos los vehículos
const consultarVehiculos = (req, res, con) => {
    //Si se pasa el id del vehículo
    if (req.query.id_vehiculo) {
        let id_vehiculo = req.query.id_vehiculo;
        let sql = "SELECT * from lista_vehiculos where id_vehiculo =" + id_vehiculo;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si se pasa el id del usuario
    } else if (req.query.id_usuario) {
        let id_usuario = req.query.id_usuario;
        let sql = "SELECT * from lista_vehiculos where id_usuario =" + id_usuario;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si se pasa la matrícula
    } else if (req.query.matricula) {
        let matricula = req.query.matricula;
        let sql = "SELECT * from lista_vehiculos where matricula ='" + matricula + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si no se pasa ningún parámetro muestra todos
    } else {
        let sql = "SELECT * from lista_vehiculos ";
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    }

}
exports.consultarVehiculos = consultarVehiculos;

