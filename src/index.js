
//MySQL
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234",
    database: "tallerservidores"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


const { query } = require('express');
const express = require('express');
const app = express();
const morgan=require('morgan');
 
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Nuestro primer WS Get
app.get('/usuario', (req, res) => {    
  const id_usuario = req.query.id_usuario;
  let sql = "SELECT * from datos_usuario where id_usuario =" + id_usuario;
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
      // console.log("Result: " + JSON.stringify(result,null,2));
    });
})

app.get('/vehiculos', (req, res) => {    
  const id_usuario = req.query.id_usuario;
  let sql = "SELECT * from lista_vehiculos where id_usuario =" + id_usuario;
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
      // console.log("Result: " + JSON.stringify(result,null,2));
    });
})
 

//Nuestro primer WS POST
app.post('/editUsuario', (req, res) => {    
  const id_usu = req.body.id_usu;
  const name = req.body.nombre;

  const id_usuario = req.query.id_usuario;
  let sql = "insert into tallerservidores(nombre) values("+name+"))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      // res.json(result);
      // console.log("Result: " + JSON.stringify(result,null,2));
    });
})



//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//Routes
// app.use(require('./routes/index'));


  
