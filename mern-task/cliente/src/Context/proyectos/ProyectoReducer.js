import { FORMULARIO_PROYECTO } from '../../types'
import { OBTENER_PROYECTOS } from '../../types'


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
                Proyectos:action.payload
            }
        default:
            return state;
    }
}