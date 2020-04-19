import React,{Fragment,useContext} from 'react'
import Tarea from './Tarea'
import ProyectoContext from '../../Context/proyectos/ProyectoContext'

const ListadoTareas = () => {

    const proyectoContext = useContext(ProyectoContext);

    const { proyecto,eliminarProyecto } = proyectoContext;

    const tareas=[
        {nombre:'Elegir Plataforma',estado:true},
        {nombre:'Elegir dominio',estado:true},
        {nombre:'Elegir hosting',estado:true}
    ]

    //si no hay proyecto seleccionado
    if(!proyecto) return( <h1>Selecciona un proyecto</h1>)

    const [proyectoActual] = proyecto;
    
    return (
    <Fragment>
        <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareas.length === 0
                    ?(<li className="tarea"><p>No hay tareas</p></li>)
                    :tareas.map((t)=>(
                    <Tarea
                        tarea={t}
                    />
                ))}
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => eliminarProyecto(proyectoActual)}
            >
                Eliminar Proyecto &times;
            </button>
        
    </Fragment>    
    )
}

export default ListadoTareas
