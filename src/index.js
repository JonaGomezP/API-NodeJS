//Require de la conexión a la base de datos
const c = require('./common/connectionBBDD');
var con = c.connection();

const bodyParser = require('body-parser');
const cors = require('../node_modules/cors');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



//Consulta los usuarios
const queryUsers = require('./users/queryUser').consultarTodosUsuarios;
app.get('/usuarios', (req,res) => queryUsers(req,res,con) );

//Editar usuario
const queryEditUser = require('./users/editUser').editarUsuario;
app.post('/usuarios', (req,res) => queryEditUser(req,res,con) );

//Eliminar usuario
const queryDeleteUser = require('./users/deleteUser').eliminarUsuario;
app.delete('/eliminarUsuario', (req,res) => queryDeleteUser(req,res,con) );

//Consulta de los vehículos
const queryVeh = require('./vehicles/queryVehicles').consultarVehiculos;
app.get('/vehiculos', (req,res) => queryVeh(req,res,con) );

//Eliminar vehículo
const queryDeleteVehicle = require('./vehicles/deleteVehicle').eliminarVehiculo;
app.delete('/eliminarVehiculo', (req,res) => queryDeleteVehicle(req,res,con) );

//Consulta de los servicios
const querySer = require('./services/queryServices').consultarServicios;
app.get('/servicios', (req,res) => querySer(req,res,con) );

//Eliminar servicio
const queryDeleteService = require('./services/deleteService').eliminarServicio;
app.delete('/eliminarServicio', (req,res) => queryDeleteService(req,res,con) );



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



