import React, { useContext,useEffect } from 'react'
import Proyecto from './Proyecto'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ProyectoContext from '../../Context/proyectos/ProyectoContext'

const Listado = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { Proyectos,obtenerProyectos } = proyectoContext;
    
    useEffect(() => {
        obtenerProyectos();
        //limpiar advertencia
        //eslint-disable-next-line
    }, []);

    if (Proyectos.length === 0)
        return (<p>Actualmente no tienes proyectos, crea alguno para empezar</p>);

    return (
        <ul className="listado-proyectos">
           <TransitionGroup>
           {Proyectos.map((p) => {
                return (
                   <CSSTransition
                    key={p.id}
                    timeout={200}
                    classNames="proyecto"
                   >
                        <Proyecto
                        
                        proyecto={p}
                    />
                   </CSSTransition>
                )
            })}
           </TransitionGroup>
        </ul>
    )
}

export default Listado
