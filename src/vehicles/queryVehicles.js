//Consulta de los datos de vehiculos por ID
const consultarVehiculo = (req,res,con) => {
    const id_vehiculo = req.query.id_vehiculo;
    let sql = "SELECT * from lista_vehiculos where id_vehiculo =" + id_vehiculo;
    con.query(sql, function (err, result) {
        if (err) throw err;
        return res.json(result);
        
        // console.log("Result: " + JSON.stringify(result,null,2));
    });
}
exports.consultarVehiculo = consultarVehiculo;
