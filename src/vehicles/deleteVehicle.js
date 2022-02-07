//Eliminar vehículo
const eliminarVehiculo = (req, res, con) => {
    
    if (req.query.id_vehiculo) {
        let id_vehiculo = req.query.id_vehiculo;
        let sql = "DELETE FROM lista_vehiculos WHERE id_vehiculo=" + id_vehiculo;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            return res.json(result);

        });
    }
}
exports.eliminarVehiculo = eliminarVehiculo;