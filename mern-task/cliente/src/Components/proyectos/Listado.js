import React, { useContext,useEffect } from 'react'
import Proyecto from './Proyecto'

import ProyectoContext from '../../Context/proyectos/ProyectoContext'

const Listado = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { Proyectos,obtenerProyectos } = proyectoContext;
    
    useEffect(() => {
        obtenerProyectos();
    }, []);

    if (Proyectos.length === 0)
        return (<p>Actualmente no tienes proyectos, crea alguno para empezar</p>);

    return (
        <ul className="listado-proyectos">
            {Proyectos.map((p) => {
                return (
                    <Proyecto
                        key={p.id}
                        proyecto={p}
                    />
                )
            })}
        </ul>
    )
}

export default Listado
