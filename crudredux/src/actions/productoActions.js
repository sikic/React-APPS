import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import clienteAxios from '../config/Axios'
// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispacth) => {
        dispacth(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos',producto);

            //si todo ok, actualizar estate si no lanzar el error
            dispacth(agregarProductoExito(producto));
        } catch (error) {
            console.log(error)
            dispacth(agregarProductoError(true));

        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estadoError) => ({
    type: AGREGAR_PRODUCTO,
    payload: estadoError
})