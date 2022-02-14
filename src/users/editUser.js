const editarUsuario = (req,res,con) => {
    const id_usuario = req.query.id_usuario;

    let usuario = {
        nombre: req.body.nombre,
        apellido1: req.body.appelido1,
        apellido2: req.body.apellido2,
        pass:req.body.pass,
    }

    // let {nombre, apellido1, apellido2, pass} = req.body;
    

    // let result = req.body;

    let sql = "update datos_usuario set ? where id_usuario =" + id_usuario;

    // let sql = "update datos_usuario set nombre='"+ usuario.nombre + ",apellido1='" + usuario.apellido1 + ",apellido2='" + usuario.apellido2 + ",pass='" + usuario.pass + "where id_usuario =" + id_usuario;

    con.query(sql, usuario, err => {
        if(err){
            res.json(JSON.stringify({"status": 500, "error": err, "response": null}));
            //Hay un error a la hora de conectarse a la BBDD
        } else {
            res.json(usuario);
            //Se envian todos los usuarios
        }

    });
}

exports.editarUsuario=editarUsuario;