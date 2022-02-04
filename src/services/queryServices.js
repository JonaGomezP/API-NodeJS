//Consulta de todos los vehículos
const consultarServicios = (req, res, con) => {
    //Si se pasa el id del vehículo
    if (req.query.id_vehiculo) {
        let id_vehiculo = req.query.id_vehiculo;
        let sql = "SELECT * from lista_servicios where id_vehiculo =" + id_vehiculo;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si se pasa el id del servicio
    } else if (req.query.id_servicio) {
        let id_servicio = req.query.id_servicio;
        let sql = "SELECT * from lista_servicios where id_servicio =" + id_servicio;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
        //Si se pasa la matrícula
    } else if (req.query.matricula) {
        let matricula = req.query.matricula;
        let sql = "SELECT * from lista_servicios where matricula =" + "'" + matricula + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    } else if (req.query.servicio) {
        let servicio = req.query.servicio;
        let sql = "SELECT * from lista_servicios where servicio =" + "'" + servicio + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    } else {
        let sql = "SELECT * from lista_servicios ";
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);

            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    }

}
exports.consultarServicios = consultarServicios;