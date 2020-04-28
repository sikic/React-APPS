const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth')


//api/proyectos
router.post('/',
    //comprobar si estamos logeados antes de dar acceso
    auth,
    proyectoController.crearProyecto
);
router.get('/',
    //comprobar si estamos logeados antes de dar acceso
    auth,
    proyectoController.crearProyecto
);

module.exports = router;