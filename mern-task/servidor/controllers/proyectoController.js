const modeloProyecto = require('../models/Proyecto');

exports.crearProyecto = async (req, res) => {

    try {
        const proyecto = await new modeloProyecto(req.body);
        
        //Guardar el creador con jwt
        proyecto.creador = req.usuario.id;
        //guardamos en la bd
        proyecto.save();
        res.json(proyecto);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "hubo un error" });
    }
}