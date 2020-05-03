import {
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    OBTENER_USUARIO,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    CERRAR_SESION
} from '../../types/index'

export default (state, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return {
                alerta: action.payload
            };

        case LOGIN_EXITOSO:
            return {
                alerta: null
            }


        case OBTENER_USUARIO:
            return {
                alerta: null
            }

        case REGISTRO_ERROR:
            return{
                ...state,
                autenticado:false,
                mensaje: action.payload
            }
        case REGISTRO_EXITOSO:
           localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado:true,
                mensaje:null
            }
        case CERRAR_SESION:
            return {
                alerta: null
            }
        default:
            return state;
    }
}