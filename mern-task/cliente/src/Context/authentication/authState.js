import React, { useReducer } from 'react'
import AuthReducer from './authReducer'
import AuthContext from './authContext'
import clienteAxios from '../../config/axios'
import {
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    OBTENER_USUARIO,
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    CERRAR_SESION
} from '../../types/index'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    //funciones

    const registrarUsuario = async datos => {
        try {
            console.log("prueba")
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            
             dispatch({
                 type: REGISTRO_EXITOSO,
                payload: respuesta.data
             })
        } catch (error) {
           const alerta = {
               msg:error.response.data.msg,
               categoria: 'error'
           }
            dispatch({
                type: REGISTRO_ERROR,
                payload:alerta
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario

            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;

