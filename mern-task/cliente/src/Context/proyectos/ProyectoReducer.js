import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO

} from '../../types'


export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            };
        case OBTENER_PROYECTOS:
            return {
                ...state,
                Proyectos: action.payload
            };
        case AGREGAR_PROYECTOS:
            return {
                ...state,
                Proyectos: [...state.Proyectos, action.payload],
                formulario: false,
                errorFormulario: false
            };

        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }


        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.Proyectos.filter(p => p.id === action.payload.id)
            }

        case ELIMINAR_PROYECTO:
            return {
                ...state,
                Proyectos: state.Proyectos.filter(p => p.id !== action.payload.id),
                proyecto:null
            }
        default:
            return state;
    }
}