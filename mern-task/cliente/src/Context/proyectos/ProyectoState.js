import React,{useReducer} from 'react'

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
}from '../../types'

import  uuid from 'uuid/v4';


const ProyectoState = props=>{
    const Proyectos = [
        {nombre:'prueba',id:1},
        {nombre:'prueba1',id:2}
    ];

    const initialState = {
        Proyectos:[],
        formulario : false,
        errorFormulario :false,
        proyecto : null
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
    
    //Agregar los proyectos
    const agregarProyecto = (p)=>{

        p.id = uuid();
        dispatch({
           type:AGREGAR_PROYECTOS,
           payload: p
        })
    }

    const mostrarError=()=>{
        
        dispatch({
           type:VALIDAR_FORMULARIO
        })
    }

    
    const proyectoActual=(p)=>{
        
        dispatch({
           type:PROYECTO_ACTUAL,
           payload:p
        })
    }

    const eliminarProyecto=(p)=>{
        
        dispatch({
           type:ELIMINAR_PROYECTO,
           payload:p
        })
    }
    return(
        <ProyectoContext.Provider
            value={{
                proyecto:state.proyecto,
                formulario:state.formulario,
                Proyectos:state.Proyectos,
                errorFormulario:state.errorFormulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;