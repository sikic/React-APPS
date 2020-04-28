const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

//express validator
const {check} = require('express-validator');


//api/auth
router.post('/',
[
    check('email','Agrega un email valido').isEmail(),
    check('password','El password tiene que ser minimo de 6 carácteres').isLength({min:6})
],authController.autenticarUsuario);

module.exports = router;