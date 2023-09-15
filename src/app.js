const express = require('express');
const path = require('path');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const mysql = require('mysql2');


//Generacion aplicacion
const app = express();

//Rutas de la aplicación
const manejoRutas = require('./routes/rutas');

//Configuracion puerto de escucha
app.set('port', process.env.PORT || 4000);

//configuración de uso de las plantillas
app.set('view engine', 'ejs');  

//Concatenacion de las rutas views a app.js/(_dirname)/view
app.set('views', path.join(__dirname, 'views'));//Aqui establecemos la ruta de nuestra carpeta view mediante el modulo path, concatenando la ruta de app.js(_dirname) con view  
app.set('layout', 'layout');

//middlewares: Funciones se ejecutan entre la recepcion de una solicitud y el envió de una respuesta basicamente es un intermediario entre el cliente y el servidor
app.use(morgan('dev'))  //mostrar mensajes por consola con dev
//Conexion a BD mysql


const connection = mysql.createConnection({
  host: 'containers-us-west-77.railway.app',
  user: 'root',
  password: 'saOVhWAHJ1yhrTPctXx7',
  database: 'railway',
  port: 7849
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos.');
    // Aquí puedes ejecutar consultas, etc.
  }
});

//manejo de middleware

//Manejo de peticiones
app.use(express.urlencoded({extended: false}));

//routes: rutas que el cliente puede solicitar a los archivos
app.use('/', manejoRutas);

//Nos permite que Node este escuchando al puerto 300 y ademas nos notifica mediante un mensaje en consola que esta activo y en que puerto
app.listen(process.env.PORT || 4000, ()=>{
    console.log('Servidor escuchando el puerto 4000');
});

