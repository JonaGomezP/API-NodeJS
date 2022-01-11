//Require de la conexión a la base de datos
const c = require('./common/connectionBBDD');
var con = c.connection();

const { query } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Consulta de todos los usuarios
const queryUsers = require('./users/queryUser').consultarTodosUsuarios;
app.get('/usuarios', (req,res) => queryUsers(req,res,con) );
//Consulta de los datos de vehículos
const queryVeh = require('./vehicles/queryVehicles').consultarVehiculo;
app.get('/vehiculos', (req,res) => queryVeh(req,res,con) );


//Nuestro primer WS POST
// app.post('/editUsuario', (req, res) => {    
//   const id_usu = req.body.id_usu;
//   const name = req.body.nombre;

//   const id_usuario = req.query.id_usuario;
//   let sql = "insert into tallerservidores(nombre) values("+name+"))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       // res.json(result);
//       // console.log("Result: " + JSON.stringify(result,null,2));
//     });
// })



//Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});

//Routes
// app.use(require('./routes/index'));



