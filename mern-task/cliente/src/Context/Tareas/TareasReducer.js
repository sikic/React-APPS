
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    EDITAR_TAREA
} from '../../types/index'


export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(t => t.proyectoId === action.payload.id)
            }

        case AGREGAR_TAREAS:
            return {
                ...state,
                tareas: [...state.tareas, action.payload],
                errorTarea: false

            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(t => t.id !== action.payload.id),
            }

        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareasProyecto.map(t => t.id === action.payload.id ? action.payload : t),
            }

        case TAREA_ACTUAL:
            return {
                ...state,
                tareaSeleccionada: action.payload
            }
        case EDITAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(t => t.id === action.payload.id ? action.payload :t),
                tareaSeleccionada:null
            }
        default:
            return state;
    }
}