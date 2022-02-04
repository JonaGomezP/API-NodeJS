//Consulta de los datos de usuario
const eliminarServicio = (req, res, con) => {
    
    if (req.query.id_servicio) {
        let id_servicio = req.query.id_servicio;
        console.log(id_servicio);
        let sql = "DELETE FROM lista_servicios WHERE id_servicio=" + id_servicio;
        con.query(sql, function (err, result) {
            if (err) throw err;
            return res.json(result);
            // console.log("Result: " + JSON.stringify(result,null,2));
        });
    }
}
exports.eliminarServicio = eliminarServicio;