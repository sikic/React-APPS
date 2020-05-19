import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS
} from '../types'

//cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case AGREGAR_PRODUCTO_EXITO:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payolad]
            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }

        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }


        default:
            return state;
    }
}