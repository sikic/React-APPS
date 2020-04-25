import React,{useReducer} from 'react'
import TareasReducer from './TareasReducer'
import TareaContext from './TareaContex'
import uuid from 'uuid/v4'
import {
    TAREAS_PROYECTO, 
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    EDITAR_TAREA

} from '../../types/index'

const TareaState = props =>{
    const initialState ={
        tareas:[
                {id:0,nombre:'Elegir Plataforma',estado:true,proyectoId:1},
                {id:1,nombre:'Elegir dominio',estado:true,proyectoId:2},
                {id:2,nombre:'Elegir hosting',estado:true,proyectoId:3}
            ],
        tareasProyecto: null,
        errorTarea: false,
        tareaSeleccionada: null
    }

    const [state, dispatch] = useReducer(TareasReducer, initialState);
    
    const obtenerTareas=(proyecto)=>{
        dispatch({
            type:TAREAS_PROYECTO,
            payload:proyecto
        })
    }


    const agregarTarea=(t)=>{
        t.id = uuid();
        dispatch({
            type:AGREGAR_TAREAS,
            payload:t
        })
    }

    const validarTarea=(t)=>{
        dispatch({
            type:VALIDAR_TAREA,
        })
    }

    const eliminarTarea=(t)=>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload:t
        })
    }

    const cambiarEstado=(t)=>{
        dispatch({
            type:ESTADO_TAREA,
            payload:t
        })
    }

    const tareaActual=(t)=>{
        dispatch({
            type:TAREA_ACTUAL,
            payload:t
        })
    }

    const editarTarea=(t)=>{
        dispatch({
            type:EDITAR_TAREA,
            payload:t
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas:state.tareas,
                tareasProyecto:state.tareasProyecto,
                errorTarea:state.errorTarea,
                tareaSeleccionada:state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstado,
                tareaActual,
                editarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;