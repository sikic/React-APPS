const express = require('express');
const conectarDb = require('./config/db');
//crear el servidor
const app = express();

//habilitamos el exprees json
app.use(express.json({extended:true}));

//conectar a la base de datos
conectarDb();

//puerto de la app 
const PORT = process.env.PORT || 4000;

//importar el router
app.use('/api/usuarios',require('./routes/usuarios'));

//ruta principal
app.get('/',(req,res)=>{
    res.send("hola mundo");
});

//arrancar el servidor
app.listen(PORT,() =>{
    console.log("El servidor esta arrancando en el puerto " + PORT);
})