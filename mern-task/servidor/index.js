const express = require('express');
const conectarDb = require('./config/db');
const cors = require('cors');
//crear el servidor
const app = express();
const p = require("./prueba.js");

//habilitamos el exprees json
app.use(express.json({extended:true}));

//conectar a la base de datos
conectarDb();
p.pruebaa();
//habilitar cors
app.use(cors());
//puerto de la app 
const PORT = process.env.PORT || 4000;

//importar el router usuarios
app.use('/api/usuarios',require('./routes/usuarios'));
//importar el router auth
app.use('/api/auth',require('./routes/auth'));
//importar el router proyectos
app.use('/api/proyectos',require('./routes/proyectos'));
//router de las tareas
app.use('/api/tareas',require('./routes/tareas'));

//ruta principal
app.get('/',(req,res)=>{
    res.send("hola mundo");
});

//arrancar el servidor
app.listen(PORT,() =>{
    console.log("El servidor esta arrancando en el puerto " + PORT);
})