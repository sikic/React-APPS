import React,{useReducer} from 'react'

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
}from '../../types'


const ProyectoState = props=>{
    const Proyectos = [
        {nombre:'prueba',id:1},
        {nombre:'prueba1',id:2}
    ];

    const initialState = {
        formulario : false,
        Proyectos:[]
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    //serie de funciones para CRUD
    const mostrarFormulario = ()=>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = ()=>{
        dispatch({
           type:OBTENER_PROYECTOS,
           payload:Proyectos
        })
    }

    return(
        <ProyectoContext.Provider
            value={{
                formulario:state.formulario,
                Proyectos:state.Proyectos,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;