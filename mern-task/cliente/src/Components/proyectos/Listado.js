import React from 'react'
import Proyecto from './Proyecto'
const Listado = () => {

    const Proyectos=[
        {nombre:'prueba'},
        {nombre:'prueba1'}

    ]
    return (
       <ul className="listado-proyectos">
           {Proyectos.map((p)=>{
                return (
                <Proyecto
                    proyecto={p}
                />
                )
           })}
       </ul>
    )
}

export default Listado
