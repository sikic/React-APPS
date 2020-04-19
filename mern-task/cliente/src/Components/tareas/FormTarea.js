import React,{Fragment,useContext} from 'react'
import ProyectoContext from '../../Context/proyectos/ProyectoContext'


const FormTarea = () => {

    const proyectoContext = useContext(ProyectoContext);

    const { proyecto } = proyectoContext;

    if(!proyecto) return null;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="nomrbe"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTarea
