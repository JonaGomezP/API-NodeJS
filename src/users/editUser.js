const editUser = (req,res,con) => {
    const id_usuario = req.query.id_usuario;
    let sql = "update datos_usuario set ? where id_usuario =" + id_usuario;

    let usuario = {
        nombre: req.body.nombre,
        apellido1: req.body.appelido1,
        apellido2: req.body.apellido2,
        fecha_alta:req.body.fecha_alta,
        pass:req.body.pass,
        administrador:req.body.administrador

    }


    con.query(sql, usuario, err => {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
            //Hay un error a la hora de conectarse a la BBDD
        } else {
            res.send(result);
            //Se envian todos los usuarios
        }

    });
}

exports.editUser=editUser;