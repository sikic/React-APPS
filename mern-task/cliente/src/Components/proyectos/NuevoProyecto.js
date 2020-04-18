import React,{Fragment,useState,useContext} from 'react'
import ProyectoContext from '../../Context/proyectos/ProyectoContext'
const NuevoProyecto = () => {

    //state para proyecto
    const [proyecto, setproyecto] = useState({
        nombre:''
    });
    
    //state para el error
    const [error, seterror] = useState(false);

    //obtener state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const {formulario,mostrarFormulario} = proyectosContext;

    const onchange=(e)=>{
        setproyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        }) 
    }
    
    const {nombre} = proyecto;
    

    const hadleonsubmit=(e)=>{
        e.preventDefault();

        //validar el nombre
        if(nombre.trim() ==='')
            return seterror(true);

        seterror(false);
        //agregar al state 
        setproyecto(nombre);
        //reiniciar el form
        
    }

    const mostrar=(f)=>{
        console.log(f);
        if(f)
            return( 
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={hadleonsubmit}
                >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    nanme="nombre"
                    value={nombre}
                    onChange={onchange}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar proyecto"
                />
                
            </form>);
            else
                return null;
    }
    return (
        <Fragment>
            <button 
            type="button"
            className="btn btn-block btn-primario"
            onClick={()=> mostrarFormulario()}
            >
                Nuevo Proyecto
            </button>
    
            {
                mostrar(formulario)
            }

        </Fragment>
    )
}

export default NuevoProyecto
