import React,{Fragment} from 'react'
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareas=[
        {nombre:'Elegir Plataforma',estado:true},
        {nombre:'Elegir dominio',estado:true},
        {nombre:'Elegir hosting',estado:true}

    ]

    return (
    <Fragment>
        <h2>Proyrecto: prueba</h2>

        <ul className="listado-tareas">
            {tareas.length === 0
                ?(<li className="tarea"><p>No hay tareas</p></li>)
                :tareas.map((t)=>(
                <Tarea
                    tarea={t}
                />
            ))}
        </ul>
    </Fragment>    
    )
}

export default ListadoTareas
